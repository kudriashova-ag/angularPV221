import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-single',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-single.component.html',
  styleUrl: './user-single.component.css'
})
  
export class UserSingleComponent {
 @Input() user: any
}
