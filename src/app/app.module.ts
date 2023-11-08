import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserReposComponent } from './user-repos/user-repos.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [UserReposComponent, PaginationComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule,NgxPaginationModule],
  providers: [],
  bootstrap: [UserReposComponent]
})
export class AppModule { }
