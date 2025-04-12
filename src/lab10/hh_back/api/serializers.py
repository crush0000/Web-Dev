from rest_framework import serializers
from .models import Company, Vacancy

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name', 'description', 'city', 'address']

from rest_framework import serializers
from .models import Company, Vacancy

class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=255)
    description = serializers.CharField()
    salary = serializers.DecimalField(max_digits=10, decimal_places=2)
    company = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all())

    def create(self, validated_data):
        # You would implement this method to create a Vacancy instance
        return Vacancy.objects.create(**validated_data)

    def update(self, instance, validated_data):
        # You would implement this method to update a Vacancy instance
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)
        instance.company = validated_data.get('company', instance.company)
        instance.save()
        return instance
