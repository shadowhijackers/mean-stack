import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';

import {ApiService} from '../api.service';
import {Student} from '../models/student';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  regModel: Student;
  submitType = 'Save';
  depts: string[] = ['CSE', 'MECH', 'IT', 'CIVIL', 'ECE'];
  studentId = '';

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    // If student details to edit
    this.studentId = this.route.snapshot.params['_id'];
    if (this.studentId) {
      this.submitType = 'Edit';
      this.apiService.getStudentById(this.studentId).subscribe((res) => {
        this.regModel = res.data as Student;
      });
      return;
    }
    // new student
    this.onNew();

  }


  ngOnInit() {
  }


  onNew() {
    this.regModel = new Student();
    delete this.regModel._id;
    this.submitType = 'Save';
  }

  onSave() {

    if (this.submitType === 'Save') {
      this.apiService.addStudent(this.regModel).subscribe((res) => {
        if (!res.error) {
          swal('Add new Student!', 'Added new student successfully!', 'success');
          this.onNew();
        } else {
          swal('Add new Student!', res.error, 'error');
        }
      });
    } else {
      this.apiService.updateStudent(this.studentId, this.regModel).subscribe((res) => {
        if (!res.error) {
          swal('Update Student!', 'Updated student successfully!', 'success');
        } else {
          swal('Update Student!', res.error, 'error');
        }
      });
    }

  }


  onCancel() {
    this.router.navigateByUrl('/');
  }

  onChangeCompany(company: string) {
    this.regModel.dept = company;
  }

}


