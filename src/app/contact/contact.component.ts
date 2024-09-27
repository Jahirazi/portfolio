import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  ContactForm: FormGroup;
  gmail: string = 'jahirazai0403@gmail.com';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.ContactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.ContactForm.valid) {
      console.log('Form is valid, submitting:', this.ContactForm.value);
      const formData = new FormData();
      // Updated with the correct UUID
      formData.append('access_key', '9f26ffc7-a4ea-4e18-a644-5c71b8a13ebf'); 
      formData.append('name', this.ContactForm.get('name')?.value);
      formData.append('email', this.ContactForm.get('email')?.value);
      formData.append('message', this.ContactForm.get('message')?.value);

      this.http.post('https://api.web3forms.com/submit', formData).subscribe(
        (response) => {
          console.log('Message sent successfully!', response);
          alert('Your message has been sent successfully!');
          this.ContactForm.reset();
          this.ContactForm.markAsPristine();
          this.ContactForm.markAsUntouched();
        },
        (error) => {
          console.error('Error sending message:', error);
          alert('There was an error sending your message. Please try again.');
        }
      );
    } else {
      console.error('Form is invalid:', this.ContactForm.errors);
    }
  }
}

