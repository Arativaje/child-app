import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cms-update',
  templateUrl: './cms-update.component.html',
  styleUrls: ['./cms-update.component.css']
})
export class CmsUpdateComponent {
updateForm:FormGroup;
  @Input('inputData') inputData:any;
  @Output() onUpdate = new EventEmitter();
  

  constructor(private router:Router, private fb:FormBuilder){

    this.updateForm = this.fb.group({
      "name":['',Validators.required],
      "imageUrl":['',Validators.required]
    })

  }
  
  ngOnInit(){
  }
  
  ngOnChanges()	{
    this.updateForm.patchValue(this.inputData);
  }
  updateData(){
    this.onUpdate.emit(this.updateForm.value);
    this.updateForm.patchValue({name:"",imageUrl:""});
  }
}
