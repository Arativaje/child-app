import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input('userName') abc: any;
profileName:any;
  constructor(){
    console.log('in constructor');
    
  }
  ngOnInit(){
    this.profileName = this.abc;
    console.log(this.abc);
    console.log('In ngOnInit');
  }
}
