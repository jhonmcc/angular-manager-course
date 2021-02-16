import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [] // inicializando objeto tipado de models
  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'angular-forms',
        imgUrl: '',
        price: 123,
        code: 'XP-123',
        duration: 123,
        rating: 5.0,
        releaseDate: 'Fevereiro, 20, 2021'
      },
      {
        id: 2,
        name: 'angular-http',
        imgUrl: '',
        price: 321,
        code: 'PX-321',
        duration: 321,
        rating: 5.0,
        releaseDate: 'Dezembro, 12, 2020'
      }
    ]
  }

}
