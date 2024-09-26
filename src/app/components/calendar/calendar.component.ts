import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  currentDate: string = '';
  days: Array<any> = [];
  selectedDays: Set<number> = new Set<number>(); // To track selected dates
  months: Array<string> = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  date = new Date();
  currYear = this.date.getFullYear();
  currMonth = this.date.getMonth();

  ngOnInit() {
    this.renderCalendar();
  }

  renderCalendar() {
    const firstDayofMonth = new Date(this.currYear, this.currMonth, 1).getDay();
    const lastDateofMonth = new Date(this.currYear, this.currMonth + 1, 0).getDate();
    const lastDayofMonth = new Date(this.currYear, this.currMonth, lastDateofMonth).getDay();
    const lastDateofLastMonth = new Date(this.currYear, this.currMonth, 0).getDate();
    let liTag = [];

    for (let i = firstDayofMonth; i > 0; i--) {
      liTag.push({ num: lastDateofLastMonth - i + 1, inactive: true });
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      let isToday = i === this.date.getDate() && this.currMonth === new Date().getMonth() && this.currYear === new Date().getFullYear();
      liTag.push({ num: i, active: isToday, selected: this.selectedDays.has(i) });
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      liTag.push({ num: i - lastDayofMonth + 1, inactive: true });
    }

    this.currentDate = `${this.months[this.currMonth]} ${this.currYear}`;
    this.days = liTag;
  }

  changeMonth(direction: string) {
    this.currMonth = direction === 'prev' ? this.currMonth - 1 : this.currMonth + 1;

    if (this.currMonth < 0 || this.currMonth > 11) {
      this.date = new Date(this.currYear, this.currMonth, new Date().getDate());
      this.currYear = this.date.getFullYear();
      this.currMonth = this.date.getMonth();
    } else {
      this.date = new Date();
    }

    this.renderCalendar();
  }

  toggleSelectDay(day: any) {
    if (this.selectedDays.has(day.num)) {
      this.selectedDays.delete(day.num); // Deselect if already selected
    } else {
      this.selectedDays.add(day.num); // Select if not already selected
    }
    this.renderCalendar(); // Re-render to apply class
  }
}
