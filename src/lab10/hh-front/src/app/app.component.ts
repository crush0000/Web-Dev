import { Component } from '@angular/core';
import { Company, Vacancy } from './models';
import { HhService } from './services/hh.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] ,
  imports: [CommonModule],
})
export class AppComponent {
  companies: Company[] = [];
  selectedCompany: Company | null = null;
  vacancies: Vacancy[] = [];

  constructor(private hhService: HhService) {}

  ngOnInit() {
    this.hhService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  showVacancies(company: Company) {
    this.selectedCompany = company;
    this.hhService.getVacanciesByCompany(company.id).subscribe(data => {
      this.vacancies = data;
    });
  }
}
