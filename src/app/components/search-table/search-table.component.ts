import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe'
import { IUser } from '../../interface/user.interface';

@Component({
  selector: 'app-search-table',
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './search-table.component.html',
  styleUrl: './search-table.component.css'
})
export class SearchTableComponent implements OnInit {
  userData: IUser[] = [];

  searchText = '';

  fields: any = {
    name: '',
    companyName: '',
    designation: ''
  };

  filter: any = {};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.apiService.getUserDetails().subscribe((res: any) => {
      this.userData = res;
      console.log(this.userData)
    })
  }

  updateFilters() {
    this.filter = {};
    Object.keys(this.fields).forEach(key => {
      const val = this.fields[key]?.trim();
      if (val) {
        this.filter[key] = val;
      }
    });
  }

}
