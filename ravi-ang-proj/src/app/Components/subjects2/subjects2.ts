import { ChangeDetectorRef, Component } from '@angular/core';
import { Subjectservice } from '../../Services/subjectservice';
import { FormsModule } from '@angular/forms';


export interface ISubject {
  id: number;
  name: string;
}

@Component({
  selector: 'app-subjects2',
  imports: [FormsModule],
  templateUrl: './subjects2.html',
  styleUrl: './subjects2.css',
})
export class Subjects2 {

  constructor(private subjectService: Subjectservice, private cdr: ChangeDetectorRef) {
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
      next: (data: any[]) => {
       this.loading = false;
        this.errorMessage = 'ffeff';
        this.subjects = [...data];
                console.log('Subjects loaded this.subjects:', this.subjects);
                        this.cdr.detectChanges();
      },
      error: (err: any) => {
        this.errorMessage = 'Failed to load subjects';
        console.error(err);
      },
      complete: () => {
        this.loading = false;
        this.errorMessage = 'ffeff';

      }
    });
  }


  addSubject() {
    debugger;
    if (!this.subjectModel.name.trim()) return;

    this.subjectService.addSubject(this.subjectModel).subscribe({
      next: () => {
        //this.resetForm();
        //this.loadSubjects();
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
