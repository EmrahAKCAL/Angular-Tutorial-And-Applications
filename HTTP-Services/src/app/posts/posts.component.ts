import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent{

  posts;
  constructor(private http: HttpClient) { 
    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response=>{
      this.posts=response;
    })
  }
}

//subscribe: bir response geldiği anda çalıştıracak olan bir metottur.
