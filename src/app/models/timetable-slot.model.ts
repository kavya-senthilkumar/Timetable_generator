import { Class } from "./class.model";
import { Teacher } from "./teacher.model";

export interface TimetableSlot {
    day: string;
    period: number;
    class: Class;
    teacher: Teacher;
    subject: string;
  }
  