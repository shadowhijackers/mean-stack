import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export class Student {
  _id = '';
  id = '';
  firstName = '';
  lastName = '';
  email = '';
  public dob: NgbDateStruct = null;
  public doj: NgbDateStruct = null;
  dept = 'CSE';
  password = '';
}

