import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-detail',
  imports: [FormsModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail {

SubmitCourse(courseForm:any): void {
  console.log('Course Name:', courseForm?.value);
  console.log('Course Name:', courseForm?.value.couseName);
  console.log('Course Description:', courseForm?.value.CourseDescription);
}


}
