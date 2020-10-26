import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmitValue} from "../../EmitValue.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, OnChanges {

  contactForm: FormGroup;

  @Input() showForm = false;
  @Output() toggleShowForm = new EventEmitter<EmitValue>();

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

  toggleNewContact(event) {
    console.log('ev', event.target.checked);
    const emittedValue: EmitValue = {
      newValue: event.target.checked,
      paxNum: -1
    }

    this.toggleShowForm.emit(emittedValue);
  }

}
