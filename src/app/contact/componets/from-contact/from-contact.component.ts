import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmailService} from "../../services/email.service";
import {Email} from "../../models/Email";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-from-contact',
  templateUrl: './from-contact.component.html',
  styleUrls: ['./from-contact.component.css']
})
export class FromContactComponent implements OnInit {


  readonly formContact: FormGroup;
  readonly maxCountName = 50;
  readonly maxCountSubject = 100;
  readonly maxCountEmail = 50;
  readonly maxCountMessage = 250;

  constructor(private emailService: EmailService, private toast: ToastrService) {
    this.formContact = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(this.maxCountName),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(this.maxCountEmail),
        Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)
      ]),
      subject: new FormControl('', [
        Validators.required,
        Validators.maxLength(this.maxCountSubject),
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.maxLength(this.maxCountMessage),
      ]),
    });
  }


  ngOnInit(): void {

  }

  async onSubmit() {
    this.formContact.markAllAsTouched();
    if (this.formContact.valid) {
      try {
        await this.emailService.sendNewEmail(this.createEmailFromFrom());
        this.formContact.reset();
        this.toast.success('Email has been sent');
      } catch (e) {
        console.log("Error insert new email " + e);
        this.toast.error('Could not send email', "Error");
      }
    } else {
      this.toast.error('Email is invalid', "Error");
    }
  }

  private createEmailFromFrom(): Email {
    return {
      name: this.formContact.controls['name'].value,
      email: this.formContact.controls['email'].value,
      subject: this.formContact.controls['subject'].value,
      message: this.formContact.controls['message'].value,
      isOpen: false,
    }
  }
}
