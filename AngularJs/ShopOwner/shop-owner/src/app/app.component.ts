import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShopOwner } from './shop.owner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'owner-module';
constructor(private shopownerService: ShopOwner){
  this.getShopOwnerDetails();
}

  register(registerForm: NgForm){
    this.shopownerService.registerOwner(registerForm.value).subscribe(
      (resp: any)=>{
        console.log(resp);
        registerForm.reset();
        this.getShopOwnerDetails();

      },(err: any)=>{
        console.log(err);
      }
    );
  }

  getShopOwnerDetails(){
    this.shopownerService.getOwner().subscribe(
      (resp)=>{
        console.log(resp);
        this.shopownerDetails=resp;
      }, (err)=>{
        console.log(err);
      }
    );
  }

  shopownerDetails= null as any;

  deleteShopOwner(shopowner: any){
    this.shopownerService.deleteOwner(shopowner.sid).subscribe(
      (resp)=>{
        console.log(resp);
        this.getShopOwnerDetails();
      },(err)=>{
        console.log(err);
      }
    );
  }
 
  shopownerToUpdate={
    Sid: "",
    Sname: "",
    Semail: "",
    Sphonenumber:""
  };

  edit(shopowner: any){
    this.shopownerToUpdate=shopowner;
  }
  updateShopOwner(){
    this.shopownerService.updateOwner(this.shopownerToUpdate).subscribe(
      (resp)=>{
        console.log(resp);
      },(err)=>{
        console.log(err);
      }
    );
  }
  
}
