import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {
  numClasses: number = 0;
  numTeachers: number = 0;

  constructor(private router: Router) { }

  onSubmit() {
    // Navigate to the timetable component with the entered numbers
    this.router.navigate(['/timetable', this.numClasses, this.numTeachers]);
  }
}
