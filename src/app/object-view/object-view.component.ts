import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-object-view',
  templateUrl: './object-view.component.html',
  styleUrls: ['./object-view.component.scss']
})
export class ObjectViewComponent implements OnInit {

  jsonObj = {
    "essentials package":{
        "Customer service" : "link",
        "Download app" : "link",
        "terms of use" : "link",
        "privacy policy" : "https://luauet.com/privacy",
        "Manifesto" : "link",
    },
    "exploration package":{
        "TikTok" : "link",
        "Twitter" : "link",
        "Email" : "im@luau.world",
        "kickstarter" : "link",
    },
    "opportunity package":{
        "Design website" : "inquire",
        "Nutritionists" : 100,
        "Social media manager" : false,
    },
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  routToHome(){
    this.router.navigate(['/home']);
  }

}
