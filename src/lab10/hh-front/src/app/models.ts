export interface Company {
    id: number;
    name: string;
    description: string;
    city: string;
    address: string;
  }
  
  export interface Vacancy {
    id: number;
    name: string;
    description: string;
    salary: number;
    company: number; // or Company if you populate it
  }