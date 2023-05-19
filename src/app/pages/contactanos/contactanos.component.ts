import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {

  form: any;


  show: boolean= false;

  redireccion(){
    
  }

  save(): void {
    alert("Gracias por tu mensaje. Estaremos respondiendote a la brevedad!")
    this.form.reset();
  }
}
