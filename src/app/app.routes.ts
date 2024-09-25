import { Routes } from '@angular/router';

import { CitySelectorComponent } from "./components/city-selector/city-selector.component";
import {TennisCenterSelectionComponent} from "./components/tennis-center-selection/tennis-center-selection.component";

export const routes: Routes = [
    {path: '', redirectTo: '/city-selector', pathMatch: 'full'},
    {path: 'city-selector', component: CitySelectorComponent},
    {path: 'tennis-center-selection', component: TennisCenterSelectionComponent},



    //Реализовать компонент, который сообщает что страница не найдена
    // {path: '**', component: NotFoundComponent},
];
