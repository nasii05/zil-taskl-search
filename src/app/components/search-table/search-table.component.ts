import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import  { SearchPipe } from '../../pipes/search.pipe'

@Component({
  selector: 'app-search-table',
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './search-table.component.html',
  styleUrl: './search-table.component.css'
})
export class SearchTableComponent implements OnInit{
  userData:any = [];

  searchText = '';

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
    this.apiService.getUserDetails().subscribe((res) =>{
      console.log(res)
      this.userData = res
      console.log(this.userData)
    })
  }

}
