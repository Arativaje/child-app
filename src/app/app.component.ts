import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child-learning';
  name ='Maayra';
  constructor(){
    console.log('app-component constructor');
  }
  ngOnInit(){
    console.log('app-component ngOnInit');
  }
}
