import { Component } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css'],
})
export class RegistrationformComponent {
  user: any = {}; // Initialize user object to store form data


  passwordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const hasUppercase = /[A-Z]/.test(value);
      const hasLowercase = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpecial = /[!@#$%^&*]/.test(value);

      const valid = hasUppercase && hasLowercase && hasNumber && hasSpecial;

      return valid ? null : { passwordStrength: true };
    };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Handle form submission (e.g., send data to the server)
      console.log('Form submitted successfully!', this.user);
    }
  }
}
