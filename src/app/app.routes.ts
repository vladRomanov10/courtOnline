import { Routes } from '@angular/router';

import { CitySelectorComponent } from "./components/city-selector/city-selector.component";

export const routes: Routes = [
    {path: '', redirectTo: '/city-selector', pathMatch: 'full'},
    {path: 'city-selector', component: CitySelectorComponent},



    // {path: '**', component: NotFoundComponent},
];
