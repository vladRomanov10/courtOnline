import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-city-selector',
  standalone: true,
  imports: [RouterLink, MatFormFieldModule, MatSelectModule, FormsModule,],
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.scss'
})
export class CitySelectorComponent {

}
