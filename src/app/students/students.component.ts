import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../mock-students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
//allStudents = STUDENTS;
allStudents: Student[];
SelectedStudent: Student;


onSelectedStudent(student) {

this.selectedStudent = student;
}

  constructor(private mockService: MockServiceService) { }

  ngOnInit() {
    this.getStudentsFromService ();
  }
  getStudentsFromService(): void {
    //this.mockService.getStudentsFromMockFile();
    this.mockService.getStudentsFromMockFile().subscribe(students => this.allStudents = students);
  }
}
