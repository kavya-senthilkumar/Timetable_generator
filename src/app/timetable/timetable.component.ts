import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimetableService } from '../timetable.service';
import { TimetableSlot } from '../models/timetable-slot.model';
import { Class } from '../models/class.model';
import { Teacher } from '../models/teacher.model';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  classes: Class[] = [];
  teachers: Teacher[] = [];
  timetable: { [key: number]: { [key: string]: TimetableSlot[] } } = {};

  constructor(public timetableService: TimetableService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const numClasses = +params['numClasses'];
      const numTeachers = +params['numTeachers'];
      this.generateClasses(numClasses);
      this.generateTeachers(numTeachers);
      this.generateTimetable();
    });
  }

  generateClasses(num: number): void {
    this.classes = Array.from({ length: num }, (v, i) => ({ id: i + 1, name: `Class ${i + 1}` }));
    this.timetableService.classes = this.classes;
  }

  generateTeachers(num: number): void {
    const subjects = ['Math', 'Science', 'English', 'History', 'Geography'];
    this.teachers = Array.from({ length: num }, (v, i) => ({
      id: i + 1,
      name: `Teacher ${i + 1}`,
      subjects: [subjects[i % subjects.length]]
    }));
    this.timetableService.teachers = this.teachers;
  }

  generateTimetable(): void {
    const generatedTimetable = this.timetableService.generateRandomTimetable();

    this.classes.forEach(cls => {
      this.timetable[cls.id] = {};
      this.timetableService.days.forEach(day => {
        this.timetable[cls.id][day] = generatedTimetable.filter(slot => slot.class.id === cls.id && slot.day === day);
      });
    });
  }
}
