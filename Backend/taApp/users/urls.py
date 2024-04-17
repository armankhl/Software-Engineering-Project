from django.urls import path
from .views import *

urlpatterns = [
    path('professor-register/', ProfessorRegisterView.as_view(), name='professor-register'),
    path('professor-login/', ProfessorLoginView.as_view(), name='professor-login'),
    path('professor-logout/', ProfessorLogoutView.as_view(), name='professor-logout'),
    path('student-register/', StudentRegisterView.as_view(), name='student-register'),
    path('student-login/', StudentLoginView.as_view(), name='student-login'),
    path('student-logout/', StudentLogoutView.as_view(), name='student-logout'),
    path('professor/<str:professor_name>', ProfessorCourseAPIView.as_view(), name= 'professor-lesson')
]
