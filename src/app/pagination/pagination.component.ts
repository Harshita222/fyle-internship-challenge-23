
import { Component, OnInit, Input } from '@angular/core';
import { UserReposComponent } from '../user-repos/user-repos.component';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number=1;
  @Input() totalPages: number=10;

  constructor() {}

  ngOnInit(): void {}

  onPageChange(page: number): void {
    console.log(`Page changed to ${page}`);
  }
}
