from django.contrib.auth.models import User
from rest_framework import serializers
from users.models import ProfessorProfile, StudentProfile, Course
from django.contrib.auth import authenticate
from rest_framework import generics

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password']
        # extra_kwargs = {'password': {'write_only': True}}

    # def update(self, instance, validated_data):
    #     password = validated_data.pop('password', None)
    #     for attr, value in validated_data.items():
    #         setattr(instance, attr, value)
    #     if password is not None:
    #         instance.set_password(password)
    #     instance.save()
    #     return instance
    

class ProfessorRegisterSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = ProfessorProfile
        fields = ['user', 'national_no', 'password2']

    def validate_username(self, username):
        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError("User already exists!")
        return username

    def validate(self, data):
        if data['user']['password'] != data['password2']:
            raise serializers.ValidationError("Passwords must match")
        return data

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create_user(**user_data)
        national_no = validated_data.pop('national_no')
        prof = ProfessorProfile.objects.create(user=user, national_no=national_no)
        return prof

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(request=self.context.get('request'), **data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")

class StudentRegisterSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = StudentProfile
        fields = ['user', 'stu_no', "phone_no" , 'is_ta' , 'password2']

    def validate_username(self, username):
        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError("User already exists!")
        return username

    def validate(self, data):
        if data['user']['password'] != data['password2']:
            raise serializers.ValidationError("Passwords must match")
        return data

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create_user(**user_data)
        stu_no = validated_data.pop('stu_no')
        phone_no = validated_data.pop('phone_no')
        is_ta = validated_data.pop('is_ta')
        stu = StudentProfile.objects.create(user=user, stu_no=stu_no, is_ta=is_ta, phone_no=phone_no)
        return stu


# class CourseSerializer(serializers.ModelSerializer):

#     professor_username = serializers.CharField(write_only=True)
#     class Meta:
#         model = Course
#         fields = ['name', 'term', 'required_TAs', 'num_applicants', 'num_tas', 'section', 'professor_username']

#     def create(self, validated_data, professor_username):
#         name = validated_data.pop('name')
#         term = validated_data.pop('term')
#         required_TAs = validated_data.pop('required_TAs')
#         num_applicants = validated_data.pop('num_applicants')
#         num_tas = validated_data.pop('num_tas')
#         section = validated_data.pop('section')
#         try:
#             professor = ProfessorProfile.objects.get(user__username=professor_username)
#         except ProfessorProfile.DoesNotExist:
#             raise serializers.ValidationError({"error": f"could not find the professor {professor_username}"})
#     #     try:
#     #         course = Course.objects.create(
#     #             professor=professor,
#     #             name=name,
#     #             term=term,
#     #             required_TAs=required_TAs,
#     #             num_applicants=num_applicants,
#     #             num_tas=num_tas,
#     #             section=section
#     #         )
#     #         return course
#     #     except IntegrityError as e:
#     #         # Handle database integrity errors
#     #         raise serializers.ValidationError({"error": "Database integrity error occurred"})
#     #     except Exception as e:
#     #         # Catch all other exceptions
#     #         raise serializers.ValidationError({"error": str(e)})
#     # def save(self, **kwargs):
#     #     # Manually pass professor_username to the create method
#     #     kwargs['professor_username'] = self.context.get('professor_username')
#     #     return super().save(**kwargs)
class CourseSerializer(serializers.ModelSerializer):
    professor = serializers.PrimaryKeyRelatedField(queryset=ProfessorProfile.objects.all())

    class Meta:
        model = Course
        fields = ['name', 'term', 'required_TAs', 'num_applicants', 'num_tas', 'section', 'professor']

class StudentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentProfile
        fields = ['user','stu_no','is_ta','phone_no']  # Adjust this to include only the fields you want to expose

class ProfessorProfileSerializer(serializers.ModelSerializer):
    students = StudentProfileSerializer(many=True, read_only=True)

    class Meta:
        model = ProfessorProfile
        fields = ['user','national_no','students']  # Adjust this to include only the fields you want to expose




# class UserProfileSerializer(serializers.Serializer):
#     username = serializers.CharField(required=False)
#     email = serializers.EmailField(required=False)
#     first_name = serializers.CharField(required=False)
#     last_name = serializers.CharField(required=False)
#     password = serializers.CharField(write_only=True, required=False)
#     national_no = serializers.CharField(required=False)
#     # Add other fields as needed

#     def update_user(self, user_instance, data):
#         for attr, value in data.items():
#             setattr(user_instance, attr, value)
#         user_instance.save()

#     def update_professor_profile(self, professor_profile_instance, data):
#         for attr, value in data.items():
#             setattr(professor_profile_instance, attr, value)
#         professor_profile_instance.save()

#     def update(self, instance, validated_data):
#         user_data = validated_data.pop('user', {})
#         professor_data = validated_data.pop('professor_profile', {})

#         user_instance = instance.user
#         self.update_user(user_instance, user_data)

#         professor_profile_instance = instance.professor_profile
#         self.update_professor_profile(professor_profile_instance, professor_data)

#         return instance

