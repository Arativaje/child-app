import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CmsService } from '../service/cms.service';

@Component({
  selector: 'app-cms-add',
  templateUrl: './cms-add.component.html',
  styleUrls: ['./cms-add.component.css']
})
export class CmsAddComponent {

  @Output() onAdd = new EventEmitter()
addForm: FormGroup;
  constructor(private router:Router, private fb: FormBuilder, private cmsService:CmsService){

    this.addForm = this.fb.group({
      name:["",Validators.required],
      imageUrl :["",Validators.required]
    });
  }
  saveForm(){
    //console.log(this.addForm.value);
    this.onAdd.emit(this.addForm.value);
    //this.router.navigate(['cms/view']);
    // this.cmsService.addList(this.addForm.value).subscribe((res:any)=>{
    //   console.log(res);
    // });
  }
}
