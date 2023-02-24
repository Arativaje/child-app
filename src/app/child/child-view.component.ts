import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.css']
})
export class ChildViewComponent {

  @Input('inputList') inputList:any;
  current = 0;
arr = [
  {name:"A", imageUrl:"https://media.istockphoto.com/id/1217828258/photo/grey-stripped-mixed-breed-cat-sitting-isolated-on-white.jpg?s=612x612&w=0&k=20&c=ZdsQKhn9NqMm8KQ-AlpT7D7E0SBv9pNJF-Sbs-j91R0="},
  {name:"B", imageUrl:"https://media.istockphoto.com/id/1141529240/vector/simple-apple-in-flat-style-vector-illustration.jpg?s=612x612&w=0&k=20&c=BTUl_6mGduAMWaGT9Tcr4X6n2IfK4M3HH-KCsr-Hrgs="},
  {name:"C", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Soccer_ball.svg/2048px-Soccer_ball.svg.png"},
  {name:"D", imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Soccer_ball.svg/2048px-Soccer_ball.svg.png"}
]
  constructor(){
    
  }
  ngOnInit(){
    
    //this.arr = this.inputList;
  }
  ngOnChange(){
    this.arr = this.inputList;
  }


onPrevious(){
  if(0 == this.current){
    this.current=this.arr.length-1;
  }else{
    this.current--;
  }
  

}
onNext(){
  if(this.arr.length-1 == this.current){
    this.current=0;
  }else{
    this.current++;
  }
  

}
}
