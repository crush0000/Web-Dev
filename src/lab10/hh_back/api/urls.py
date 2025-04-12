from django.urls import path
from .views import *

urlpatterns = [

    path('companies/',CompanyListCreateView.as_view(), name='company-list'),
    path('companies/<int:pk>/',CompanyDetailView.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/',VacancyByCompanyView.as_view(), name='vacancies-by-company'),
    
    #path('vacancies/',VacancyListCreateView.as_view(), name='vacancy-list'),
    #path('vacancies/<int:pk>/',VacancyDetailView.as_view(), name='vacancy-detail'), 
    ### fbv for vacancies
    path('vacancies/', vacancy_list_create, name='vacancy-list-create'),
    path('vacancies/<int:pk>/', vacancy_detail, name='vacancy-detail'),
    path('vacancies/top_ten/',TopTenVacanciesView.as_view(), name='top-ten-vacancies'),
]