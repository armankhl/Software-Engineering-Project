from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ProfessorRegisterSerializer, StudentRegisterSerializer
from rest_framework.authtoken.models import Token
from .serializers import LoginSerializer
from .models import ProfessorProfile, StudentProfile
from .serializers import CourseSerializer
from rest_framework import authentication, permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.core.exceptions import ObjectDoesNotExist


class ProfessorRegisterView(APIView):
    def post(self, request):
        serializer = ProfessorRegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
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
            return Response(serializer.data, status=status.HTTP_201_CREATED)
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
            return Response("Professor not found", status=status.HTTP_404_NOT_FOUND)

        courses = professor.courses.all()  # Assuming ProfessorProfile has a related_name='courses'
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data)