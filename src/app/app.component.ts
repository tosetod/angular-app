import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
 
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDvxybnw1To9zkpMyHF2u76VivZ46PfTVc",
      authDomain: "ng-recipe-book-b8f11.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
 }


}
