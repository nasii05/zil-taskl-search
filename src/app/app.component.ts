import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchTableComponent } from "./components/search-table/search-table.component";

@Component({
  selector: 'app-root',
  imports: [SearchTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zil-task-search';
}
