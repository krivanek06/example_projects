import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NewPaginationComponent } from './new-pagination/new-pagination.component';

@Component({
  selector: 'app-example-pagination',
  templateUrl: './example-pagination.component.html',
  styleUrls: ['./example-pagination.component.scss'],
  standalone: true,
  imports: [CommonModule, NewPaginationComponent],
})
export class ExamplePaginationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
