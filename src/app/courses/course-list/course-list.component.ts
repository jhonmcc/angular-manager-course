import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [] // inicializando objeto tipado de models
  
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.retrieveAll()
  }

}
