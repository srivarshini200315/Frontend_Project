import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopOwner{
  API="http://localhost:8080";
  public registerOwner(ownerData: any)
  {
    return this.http.post(this.API + '/registerOwner' , ownerData);
  }

  public getOwner(){
    return this.http.get(this.API+'/getOwner');
  }

  public deleteOwner(C_id:any){
    return this.http.delete(this.API+'/deleteOwner?C_id=' + C_id);
  }

  public updateOwner(owner: any){
    return this.http.put(this.API +'/updateOwner',owner);
  }
  constructor(private http: HttpClient) { }
}
