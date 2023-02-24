import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import CMSModel from './model/cms.model';


@Component({
  selector: 'app-cms-view',
  templateUrl: './cms-view.component.html',
  styleUrls: ['./cms-view.component.css']
})
export class CmsViewComponent implements AfterViewInit {
updateData:any;
  orignalUpdate: any;
  constructor( private router: Router) {}

  displayedColumns: string[] = ['sr.no','name', 'imageUrl','action'];
  dataSource = new MatTableDataSource<CMSModel>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  add(){


  }
  update(ele:any){ 
    this.orignalUpdate= ele;
    this.updateData = ele;
  }
  onUpdate(updatedData:any){
    let index = this.dataSource.data.indexOf(this.orignalUpdate);
    this.dataSource.data[index]=updatedData;
    this.dataSource.data = [...this.dataSource.data];
    // console.log(index,"on update triggered",updatedData);
  }
  onAdd(addedData:any){
    this.dataSource.data.unshift(addedData);
    this.dataSource.data = [...this.dataSource.data];
    console.log(addedData);
  }


  // addd(){
  //   let addData = {name:"Cat",imageUrl:"https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"};
  //   this.dataSource.data.unshift(addData);
  //   this.dataSource.data = [...this.dataSource.data];
  // }

  // updatee(){
  //   this.router.navigate(['cms/update'])
  // }

  delete(){
    
  }
}



const ELEMENT_DATA: CMSModel[] = [
  { name: 'A', imageUrl: "https://media.istockphoto.com/id/1141529240/vector/simple-apple-in-flat-style-vector-illustration.jpg?s=612x612&w=0&k=20&c=BTUl_6mGduAMWaGT9Tcr4X6n2IfK4M3HH-KCsr-Hrgs="},
  { name: 'B', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Soccer_ball.svg/2048px-Soccer_ball.svg.png"},
  { name: 'A', imageUrl: "https://media.istockphoto.com/id/1141529240/vector/simple-apple-in-flat-style-vector-illustration.jpg?s=612x612&w=0&k=20&c=BTUl_6mGduAMWaGT9Tcr4X6n2IfK4M3HH-KCsr-Hrgs="},
  { name: 'B', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Soccer_ball.svg/2048px-Soccer_ball.svg.png"},
];

