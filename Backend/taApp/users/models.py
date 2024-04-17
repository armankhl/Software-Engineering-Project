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
    def __str__(self):
        return f"{self.user} - {self.national_no}"
#intermediary model for adding some elemnts like datetime for relations if necessary
class StudentProfessor(models.Model):
    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE, default=None)
    professor = models.ForeignKey(ProfessorProfile, on_delete=models.CASCADE, default=None)

class Course(models.Model):
    name = models.CharField(max_length=100, verbose_name="Course Name")
    term = models.IntegerField(verbose_name="Term")
    required_TAs = models.IntegerField(verbose_name="Required TAs")
    num_applicants = models.IntegerField(verbose_name="Number of Applicants", default=0)
    num_tas = models.IntegerField(verbose_name="Number of TAs", default=0)
    section = models.IntegerField(verbose_name="Section")
    professor = models.ForeignKey('ProfessorProfile', on_delete=models.CASCADE, related_name='courses')

    def __str__(self):
        return f"{self.name} - Term {self.term} - Section {self.section}"