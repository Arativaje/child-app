import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  constructor(private http : HttpClient) { }

  getList(){
    return this.http.get('http://localhost:4200/cms')
  }
  
  addList(addData:any){
    return this.http.post('http://localhost:4200/cms',addData);
  }

  updateList(updateData:any){
    return this.http.put('http://localhost:4200/cms/view',updateData)
  }

  deleteList(id:any){
    return this.http.delete('http://localhost:4200/cms/view'+id)
  }

  getByIdList(id:any){
    return this.http.get('http://localhost:4200/cms/view'+id)
  }

}
