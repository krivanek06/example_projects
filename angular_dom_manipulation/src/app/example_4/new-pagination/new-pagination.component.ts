import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { exampleUsers, IUser } from './data.model';

@Component({
  selector: 'app-new-pagination',
  templateUrl: './new-pagination.component.html',
  styleUrls: ['./new-pagination.component.scss'],
})
export class NewPaginationComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['firstname', 'lastname', 'number'];
  dataSource!: MatTableDataSource<IUser>;
  exampleUsers = exampleUsers;

  // how many items we want to display maximum
  paginationLength = 3;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {}

  ngOnInit(): void {
    //this.onPageChange(0);
  }

  ngAfterViewInit(): void {
    this.initWithPagination();
  }

  onPageChange(pageIndex: number): void {
    // starting index
    const dataSliceStart = pageIndex * this.paginationLength;
    // sliced data
    const slicedData = exampleUsers.slice(dataSliceStart, dataSliceStart + this.paginationLength);
    // rerender data in UI
    this.dataSource = new MatTableDataSource(slicedData);
  }

  private initWithPagination(): void {
    this.dataSource = new MatTableDataSource(this.exampleUsers);
    this.dataSource.paginator = this.paginator;
  }
}
