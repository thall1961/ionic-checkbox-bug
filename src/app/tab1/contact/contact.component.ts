import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  @Input() showForm = false;
  @Output() toggleShowForm = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: ['Jimmy', [Validators.required]],
      newContact: [false, [Validators.required]]
    });
  }

  toggleNewContact() {
    this.toggleShowForm.emit(-1);
  }

}
