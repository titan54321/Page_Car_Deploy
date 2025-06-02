import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  rutaActual: string = '';

  constructor(private router: Router) {
    this.rutaActual = this.router.url;
  }
}
