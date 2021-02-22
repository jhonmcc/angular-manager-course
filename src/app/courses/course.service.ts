import { Injectable } from '@angular/core';
import { Course } from './models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  retrieveAll(){
    return COURSES
  }

}

var COURSES: Course[] = [
  {
    id: 1,
    name: 'angular',
    imgUrl: '/assets/images/angular.png',
    price: 123,
    code: 'XP-123',
    duration: 123,
    rating: 4.5,
    releaseDate: 'Fevereiro, 20, 2021'
  },
  {
    id: 2,
    name: 'react',
    imgUrl: '/assets/images/react.png',
    price: 321,
    code: 'PX-321',
    duration: 321,
    rating: 3.7,
    releaseDate: 'Dezembro, 12, 2020'
  }
]
