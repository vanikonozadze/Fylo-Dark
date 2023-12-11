import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  userEmail: string = '';
  errorStatus: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  signUp() {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!this.userEmail.match(validRegex) || this.userEmail === '') {
      this.errorStatus = true;
    } else {
      alert('Successfully signed up!');
      this.userEmail = '';
      this.errorStatus = false;
    }
  }
}
