from django.db import models
from django.contrib.auth.models import User

class StudentProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    stu_no = models.CharField(verbose_name="Student Number", max_length=10, blank=False, null=False)
    is_ta = models.BooleanField(default=False)
    phone_no = models.IntegerField(verbose_name="Phone Number", blank=False, null=False)

class ProfessorProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    national_no = models.CharField(verbose_name="National Number", max_length=10, unique=True, blank=False)
    students = models.ManyToManyField('StudentProfile', through='StudentProfessor', related_name='professors', default=None)

#intermediary model for adding some elemnts like datetime for relations if necessary
class StudentProfessor(models.Model):
    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE, default=None)
    professor = models.ForeignKey(ProfessorProfile, on_delete=models.CASCADE, default=None)

