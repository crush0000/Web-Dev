from django.contrib import admin
from .models import Company, Vacancy

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'city')  # Поля, которые будут отображаться в списке
    search_fields = ('name', 'city')  # Поиск по этим полям

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'salary', 'company')  
    search_fields = ('name', 'company__name')  # Поиск по названию вакансии и компании
    list_filter = ('company',)  # Фильтр по компании
