import { Component } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class cartComponent {
  teachers = [
    { name: 'Teacher ', department: 'English' },
    { name: 'Teacher', department: 'Maths' },
    { name: 'Teacher', department: 'Science' },
    { name: 'Teacher', department: 'Social' },
    { name: 'Teacher', department: 'CS' }
  ];

  cart: { name: string, department: string }[] = [];

  addToCart(teacher: { name: string, department: string }) {
    this.cart.push(teacher);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }
}
