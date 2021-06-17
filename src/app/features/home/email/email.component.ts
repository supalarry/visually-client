import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../../../shared/models/file-upload.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  constructor() {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm.get('email')?.value);
  }
}
