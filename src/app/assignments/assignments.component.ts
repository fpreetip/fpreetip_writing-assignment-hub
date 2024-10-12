import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {DataService } from '../data.service';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent {
 title: String = "My Assignments"
 isVisible: boolean = true;
 names: Array<String> =["Preeti","Coffee", "Water"]

 assignments:Array<Assignment> =[];

 constructor(private dataService: DataService){}

 ngOnInit(): void {
  this.dataService.getAssignments().subscribe({
    next: (data) => {
      this.assignments = data; 
    },
    error: (error) => {
      console.error('Error fetching assignments', error);
    }
  });

}


}


interface Assignment {
  title: string;
  description: string;
  due_date: string;
  status: 'Pending' | 'In Progress' | 'Submitted';
}