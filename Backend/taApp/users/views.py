from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from rest_framework.authtoken.models import Token
from .models import ProfessorProfile, StudentProfile
from rest_framework import authentication, permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.mixins import UserPassesTestMixin


class ProfessorRegisterView(APIView):
    def post(self, request):
        serializer = ProfessorRegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response("professor successfully registered!", status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)

class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            token, created = Token.objects.get_or_create(user=user)
            try:
                student = StudentProfile.objects.get(user=user)
            except ObjectDoesNotExist:
                student = None
                professor = ProfessorProfile.objects.get(user=user)
            if student != None:
                user_data = {
                    'id': user.id,
                    'role': "student",
                    'username': user.username,
                    'first_name': user.first_name,
                    "last_name": user.last_name,
                    'phone_no': student.phone_no,
                    'stu_no': student.stu_no,
                    'is_ta': student.is_ta,
                    'email': user.email,
                }
                return Response({"token": token.key, "user_data": user_data}, status=status.HTTP_200_OK)
            else:
                user_data = {
                'id': user.id,
                'role': "professor",
                'username': user.username,
                'first_name': user.first_name,
                "last_name": user.last_name,
                'national_no': professor.national_no,
                'email': user.email,
                }
                return Response({"token": token.key, "user_data": user_data}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StudentRegisterView(APIView):
    def post(self, request):
        serializer = StudentRegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response("student successfully registered!", status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfessorCourseAPIView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request, professor_name):

        if professor_name is None:
            return Response("Professor name is required in query parameters", status=status.HTTP_400_BAD_REQUEST)

        try:
            professor = ProfessorProfile.objects.get(user__username=professor_name)
        except ProfessorProfile.DoesNotExist:
            return Response("Professor not found(course api)", status=status.HTTP_404_NOT_FOUND)

        courses = professor.courses.all()  
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data)

# class CourseRegisterView(APIView):
#     authentication_classes = [TokenAuthentication]
#     permission_classes = [IsAuthenticated]
#     def post(self, request):
#         professor_username = request.data.get('professor_username')
#         if professor_username is None:
#             return Response("Professor username is required in query parameters", status=status.HTTP_400_BAD_REQUEST)
#         try:
#             professor = ProfessorProfile.objects.get(user__username=professor_username)
#         except ProfessorProfile.DoesNotExist:
#             return Response(f"Professor {professor_username} not found", status=status.HTTP_404_NOT_FOUND)
#         # serializer = CourseSerializer(data=request.data, context={'professor_username': professor_username})
#         # if serializer.is_valid():
#         #     serializer.save()
#         #     return Response(serializer.data)
#         # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#         serializer = CourseSerializer(data=request.data)
#         if serializer.is_valid():
#             # Pass professor_username directly to the serializer's save method
#             serializer.save(professor=professor)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
#         # serializer = CourseSerializer(data=request.data)
#         # if serializer.is_valid():
#         #     # Pass professor_username to the serializer's create method
#         #     course = serializer.create(serializer.validated_data, professor_username)
#         #     serializer.save(professor_username=professor_username)
#         #     return Response(serializer.data, status=status.HTTP_201_CREATED)
#         # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CourseRegisterView(APIView):
    def post(self, request):
        name = request.data.get('name')
        serializer = CourseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(f"lesson '{name}' is added to database", status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class ProfessorDetailsView(UserPassesTestMixin, APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def test_func(self):
        # Check if the current user is the professor whose details are being accessed
        user_id = self.kwargs['professor_id']  # Assuming 'professor_id' is the user ID
        try:
            professor = ProfessorProfile.objects.get(user__id=user_id)
            return True  # Assuming the user is the professor
        except ProfessorProfile.DoesNotExist:
            return False

    def get(self, request, professor_id):
        try:
            professor = ProfessorProfile.objects.get(user=request.user)
        except ProfessorProfile.DoesNotExist:
            return Response({"error": "Professor not found"}, status=status.HTTP_404_NOT_FOUND)
        
        # Retrieve associated students
        students = StudentProfile.objects.filter(studentprofessor__professor=professor)
        
        # Serialize professor and students
        professor_serializer = ProfessorProfileSerializer(professor)
        students_serializer = StudentProfileSerializer(students, many=True)
        
        # Combine professor and students data
        data = {
            "professor": professor_serializer.data,
            "students": students_serializer.data
        }
        
        return Response(data, status=status.HTTP_200_OK)


# class UserProfileUpdateAPIView(generics.UpdateAPIView):
#     permission_classes = (permissions.IsAuthenticated,)

#     def get_object(self):
#         return self.request.user

#     def update(self, request, *args, **kwargs):
#         serializer = UserProfileSerializer(data=request.data, partial=True)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_200_OK)
class UserPartialUpdateView(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = 'id'  # Or any other unique field

class StudentProfilePartialUpdateView(generics.UpdateAPIView):
    queryset = StudentProfile.objects.all()
    serializer_class = StudentProfileSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = 'id'  # Use 'id' for lookups

    def partial_update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.phone_no = request.data.get('phone_no', instance.phone_no)
        instance.is_ta = request.data.get('is_ta', instance.is_ta)  # Assuming 'is_ta' is a boolean field
        instance.save(update_fields=['phone_no', 'is_ta'])  # Specify fields to update
        return super().partial_update(request, *args, **kwargs)

class ProfessorProfilePartialUpdateView(generics.UpdateAPIView):
    queryset = ProfessorProfile.objects.all()
    serializer_class = ProfessorProfileSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = 'id'  # Use 'id' for lookups

    def partial_update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.national_no = request.data.get('national_no', instance.national_no)
        instance.save(update_fields=['national_no'])
        return super().partial_update(request, *args, **kwargs)