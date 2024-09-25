import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";


import { City } from "../../types/interfaces/city.interface";

@Component({
  selector: 'app-city-selector',
  standalone: true,
  imports: [RouterLink, MatFormFieldModule, MatSelectModule, FormsModule,],
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.scss'
})
export class CitySelectorComponent {
  readonly cities: City[] = [{id: 1, name: 'Астана'}, {id: 2, name: 'Алматы'}]
  private readonly defaultCity: City = {id: 2, name: 'Алматы'}

  public selectedCityName: string = this.defaultCity.name

}
