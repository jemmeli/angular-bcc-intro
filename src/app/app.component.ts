import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nom = 'Boubakri';
  prenom = 'Seif';
  email = 'saif@gmail.com';
  DEFAULT = 'saif@gmail.com';

  change( data:any ){
    //console.log( data );
    this.email = data;
  }

  reset(){
    this.email = this.DEFAULT;
  }

}
