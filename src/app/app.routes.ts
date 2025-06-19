import { Routes } from '@angular/router';
import { SearchTableComponent } from './components/search-table/search-table.component';

export const routes: Routes = [
    { path: '', redirectTo: 'user/user-table', pathMatch: 'full' },
    { path: 'user/user-table', component: SearchTableComponent }
];
