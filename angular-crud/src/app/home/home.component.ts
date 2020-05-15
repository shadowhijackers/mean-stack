import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

import {Student} from '../models/student';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  students: Student[] = [];
  selectedRow: number;
  searchStr = '';

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.apiService.getStudents().subscribe((res) => {
      if (!!res.error) {
        this.students = [];
      } else {
        this.students = res.data as Student[];
      }
    });
  }

  onNew() {
    this.router.navigateByUrl('/registration');
  }

  onSearch(searchStr) {
    this.apiService.getStudents(searchStr).subscribe((res) => {
      if (!!res.error) {
        this.students = [];
      } else {
        this.students = res.data as Student[];
      }
    });
  }



  onEdit(index: number) {
    this.selectedRow = index;
    this.router.navigateByUrl('/students/' + this.students[index]._id);

  }

  onDelete(index: number) {
    this.apiService.deleteStudent(this.students[index]._id).subscribe(res => {
      if (!res.error) {
        swal('Delete Student', 'Removed successfully!', 'success');
        this.students.splice(index, 1);
      } else {
        swal('Delete Student', res.error, 'error');
      }
    });
  }

}
