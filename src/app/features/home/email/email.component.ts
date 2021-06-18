import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  constructor(private http: HttpClient) {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    const waitingListEndpoint = 'waitinglist';
    this.http
      .post(`${environment.visuallyApiUser}/${waitingListEndpoint}`, {
        email: this.signupForm.get('email')?.value,
      })
      .subscribe((response) => console.log(response));
  }
}
