from django.urls import path
from .views import *

urlpatterns = [
    path('professor-register/', ProfessorRegisterView.as_view(), name='professor-register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('student-register/', StudentRegisterView.as_view(), name='student-register'),
    path('professor/<str:professor_name>', ProfessorCourseAPIView.as_view(), name= 'professor-lesson')
]
