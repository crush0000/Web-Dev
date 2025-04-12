from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer 
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# CRUD for Companies
class CompanyListCreateView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class VacancyByCompanyView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['id']
        return Vacancy.objects.filter(company_id=company_id)

# CRUD for Vacancies
'''
class VacancyListCreateView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
'''
@api_view(['GET', 'POST'])
def vacancy_list_create(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    
@api_view(['GET', 'PUT', 'DELETE'])
def vacancy_detail(request, pk):
    try:
        vacancy = Vacancy.objects.get(pk=pk)
    except Vacancy.DoesNotExist:
        return Response({'error': 'Vacancy not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        vacancy.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class TopTenVacanciesView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.order_by('salary')[:5]
