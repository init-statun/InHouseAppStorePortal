import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userInput: string = '';
  isMinLengthValid = false;
  isUppercaseValid = false;
  isNumberValid = false;
  isSymbolValid = false;
  
  validateInput() {
    // Check each condition
    this.isMinLengthValid = this.userInput.length >= 8;
    this.isUppercaseValid = /[A-Z]/.test(this.userInput);
    this.isNumberValid = /\d/.test(this.userInput);
    this.isSymbolValid = /[!@#$%^&*]/.test(this.userInput);
  }

  get isFormValid() {
    return (
      this.isMinLengthValid &&
      this.isUppercaseValid &&
      this.isNumberValid &&
      this.isSymbolValid
    );
  }
  progress = 50;
}
