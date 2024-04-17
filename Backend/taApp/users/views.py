from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ProfessorRegisterSerializer, StudentRegisterSerializer
from rest_framework.authtoken.models import Token
from .serializers import ProfessorLoginSerializer, StudentLoginSerializer
from .models import ProfessorProfile
from .serializers import CourseSerializer
class ProfessorLoginView(APIView):
    def post(self, request):
        serializer = ProfessorLoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProfessorRegisterView(APIView):
    def post(self, request):
        serializer = ProfessorRegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProfessorLogoutView(APIView):
    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)

class StudentLoginView(APIView):
    def post(self, request):
        serializer = StudentLoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StudentRegisterView(APIView):
    def post(self, request):
        serializer = StudentRegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StudentLogoutView(APIView):
    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)

class ProfessorCourseAPIView(APIView):
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
