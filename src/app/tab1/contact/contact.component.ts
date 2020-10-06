import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, OnChanges {

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

  ngOnChanges(simpleChanges: SimpleChanges) {
    this.contactForm?.controls?.newContact.setValue(simpleChanges?.showForm?.currentValue)
  }

  toggleNewContact() {
    this.toggleShowForm.emit(-1);
  }

}
