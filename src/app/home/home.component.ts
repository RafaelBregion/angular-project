import { Component } from '@angular/core'
import { Router } from '@angular/router'
import {} from '@fortawesome/angular-fontawesome'
import {
  faRocket,
  faEye,
  faBalanceScale,
} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Senhor Cuidado - Elderly Caregivers'
  faRocket = faRocket
  faEye = faEye
  faBalaceScale = faBalanceScale

  constructor(private router: Router) {}
}
