import { Injectable } from '@angular/core';
import { Class } from './models/class.model';
import { Teacher } from './models/teacher.model';
import { TimetableSlot } from './models/timetable-slot.model';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  periods = 8; // Number of periods in a day

  classes: Class[] = [
    { id: 1, name: 'Class 1' },
    { id: 2, name: 'Class 2' }
    // Add more classes as needed
  ];

  teachers: Teacher[] = [
    { id: 1, name: 'Teacher A', subjects: ['Math', 'Science'] },
    { id: 2, name: 'Teacher B', subjects: ['English', 'History'] }
    // Add more teachers as needed
  ];

  generateRandomTimetable(): TimetableSlot[] {
    const timetable: TimetableSlot[] = [];

    for (const classItem of this.classes) {
      for (const day of this.days) {
        for (let period = 1; period <= this.periods; period++) {
          let slot: TimetableSlot | null = null;

          while (!slot) {
            const teacher = this.teachers[Math.floor(Math.random() * this.teachers.length)];
            const subject = teacher.subjects[Math.floor(Math.random() * teacher.subjects.length)];

            if (!this.isConflict(timetable, day, period, teacher)) {
              slot = {
                day,
                period,
                class: classItem,
                teacher,
                subject
              };

              timetable.push(slot);
            }
          }
        }
      }
    }

    return timetable;
  }

  isConflict(timetable: TimetableSlot[], day: string, period: number, teacher: Teacher): boolean {
    return timetable.some(slot => slot.day === day && slot.period === period && slot.teacher.id === teacher.id);
  }
}
