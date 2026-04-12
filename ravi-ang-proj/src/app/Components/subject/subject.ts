import { Component } from '@angular/core';
import { Subjectservice } from '../../Services/subjectservice';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-subject',
  imports: [FormsModule],
  templateUrl: './subject.html',
  styleUrl: './subject.css',
})
export class Subject {

  constructor(private subjectService: Subjectservice) {
  }

  subjects: ISubject[] = [];
  loading = false;
  errorMessage = '';

  subjectModel: ISubject = {
    id: 0,
    name: ''
  };

  ngOnInit(): void {
    this.loadSubjects();
  }

  resetForm() {
    this.subjectModel = { id: 0, name: '' };

  }

  loadSubjects() {
    
    this.loading = true;
    this.subjectService.getSubjects().subscribe({
      next: (data: ISubject[]) => {
        this.subjects = data;
        this.loading = false;
      },
      error: (err: any) => {
        this.errorMessage = 'Failed to load subjects';
        console.error(err);
        this.loading = false;
      }
    });
  }


  addSubject() {
    if (!this.subjectModel.name.trim()) return;

    this.subjectService.addSubject(this.subjectModel).subscribe({
      next: () => {
        this.resetForm();
        this.loadSubjects();
      },
      error: (err) => console.error(err)
    });
  }

  editSubject(item: ISubject) {
    this.subjectModel = { ...item }; // copy data

  }
  
  updateSubject() {
 

  this.subjectService.updateSubject( this.subjectModel,this.subjectModel.id,).subscribe({
    next: () => {
      this.resetForm();
      this.loadSubjects();
    },
    error: (err) => console.error(err)
  });
}

  deleteSubject(id: number) {
    if (!confirm('Are you sure?')) return;

    this.subjectService.deleteSubject(id).subscribe({
      next: () => {
        console.log('Deleted');
        this.loadSubjects();
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Delete failed';
      }
    });
  }
}

export interface ISubject {
  id: number;
  name: string;
}