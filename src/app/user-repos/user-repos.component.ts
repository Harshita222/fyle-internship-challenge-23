// import { Component } from '@angular/core';
// import { GithubService } from '../github.service';
// import { PaginationComponent } from '../pagination/pagination.component';

// @Component({
//   selector: 'app-user-repos',
//   templateUrl: './user-repos.component.html',
//   styleUrls: ['./user-repos.component.scss']
// })

// export class UserReposComponent {
//   username: string='';
//   repos: any[] = [];
//   itemsPerPage: number = 10; 
//   currentPage: number = 1; 

//   constructor(private githubService: GithubService) {}

//   searchUserRepos() {
//     this.githubService.getUserRepos(this.username, this.currentPage, this.itemsPerPage).subscribe((data) => {
//       this.repos = data;
//     });
//   }

//   increaseItemsPerPage() {
//     if (this.itemsPerPage < 100) {
//       this.itemsPerPage += 10;
//       this.currentPage = 1;  
//       this.searchUserRepos(); 
//     }
//   }

//   decreaseItemsPerPage() {
//     if (this.itemsPerPage > 10) {
//       this.itemsPerPage -= 10;
//       this.currentPage = 1;  
//       this.searchUserRepos(); 
//     }
//   }

//   onPageChange(page: number) {
//     this.currentPage = page;
//     this.searchUserRepos(); 
//   }
// }



import { Component } from '@angular/core';
import { GithubService } from '../github.service';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss'],
})
export class UserReposComponent {
  username: string = '';
  repos: any[] = [];
  itemsPerPage: number = 10;
  page: number = 1;
  count: number = 100;

  constructor(private githubService: GithubService) {}

  searchUserRepos() {
    this.githubService
      .getUserRepos(this.username, this.page, this.itemsPerPage)
      .subscribe((data) => {
        this.repos = data;
        // this.count = this.repos.length; 
      }); 
  }

  pageChanged(page: number) {
    console.log(page);
    this.page = page;
    this.searchUserRepos();
  }
}
