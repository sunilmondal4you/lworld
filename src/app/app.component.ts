import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'luau-world';

  pageComponents = [
    {"title": "/",     "routLink":"/home"},
    {"title": "/home",  "routLink":"/home"},
    {"title": "/ObjectView", "routLink":"/ObjectView"},
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    let pathName = window.location.pathname;
    let pathFound = false;

    this.pageComponents.forEach(obj => {
      if(pathName == obj.title)  {
        this.router.navigate([obj.routLink]);
        pathFound = true;
      }
    })

    if(!pathFound) this.router.navigate(['/home']);
  }

}
