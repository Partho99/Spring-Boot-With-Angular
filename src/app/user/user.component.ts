import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any;
  searchName:string="";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp = this.http.get("http://localhost:8080/news");
    resp.subscribe((data)=> this.users=data)
  }

}
