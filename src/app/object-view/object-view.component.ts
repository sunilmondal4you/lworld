import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-object-view',
  templateUrl: './object-view.component.html',
  styleUrls: ['./object-view.component.scss']
})
export class ObjectViewComponent implements OnInit {

  jsonObj = {
    "essentials_package":{
        "customer_service" : "link",
        "download_app" : "link",
        "terms_of_use" : "link",
        "privacy_policy" : "https://luauet.com/privacy",
        "Manifesto" : "link",
    },
    "exploration_package":{
        "tiktok" : "link",
        "twitter" : "link",
        "email" : "im@luau.world",
        "kickstarter" : "link",
    },
    "opportunity_package":{
        "design_website" : "inquire",
        "nutritionists" : 100,
        "social_media_manager" : false,
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

  @HostListener('click', ['$event'])
  onClick (event : any) : void {
    let tempData = event.toElement.innerText;
    if(tempData){
      let regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

      let validLink = regexp.test(tempData);
      tempData = tempData.replace(/["']/g, "");
      if(validLink) window.open(tempData, '_blank');
    }
  }

}
