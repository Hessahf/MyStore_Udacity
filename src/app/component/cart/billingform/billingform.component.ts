import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-billingform',
  templateUrl: './billingform.component.html',
  styleUrls: ['./billingform.component.css']
})
export class BillingformComponent implements OnInit {
  name: any = '';
  cardNumber:any='';
  CVV:any='';
  constructor(private router: Router ) { }

  ngOnInit(): void {

  }
  textEmpty(name:string,cardNumber:string,cvv:string) {
    if (this.name != "") {
      console.log(this.name);
      if (this.CVV!=""){
        if (this.cardNumber!=""){
          this.router.navigateByUrl('/checkout');
        }else {
          window.alert(' card Number is required');
        }
      }else {
        window.alert(' CVV is required');
      }
    }
    else {
    window.alert(' name is required');}
  }
}

