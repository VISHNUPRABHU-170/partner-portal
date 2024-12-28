import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-assistance-requests',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './assistance-requests.component.html',
  styleUrl: './assistance-requests.component.scss'
})
export class AssistanceRequestsComponent {}
