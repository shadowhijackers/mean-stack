import {Student} from './student';

export interface StudentAPIResponse {
  error?: string;
  data: Student[] | Student;
}
