import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  form: FormGroup;
  constructor (private fb: FormBuilder) {}

   ngOnInit() {
    this.form = this.fb.group({
      childForm1: '',
      streetNumber: [null, [Validators.required, Validators.maxLength(32)]],
      streetType: [null, [Validators.maxLength(8)]],
      city: [null, [Validators.maxLength(32)]],
      state: [null, [Validators.maxLength(16)]],
      postalCode: [null, [Validators.maxLength(16)]],
    })
  }
}
