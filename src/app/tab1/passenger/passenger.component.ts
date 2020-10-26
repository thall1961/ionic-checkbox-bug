import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmitValue} from "../../EmitValue.model";

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss'],
})
export class PassengerComponent implements OnInit {

  passengerForm: FormGroup;

  @Input() showForm = true;
  @Input() num: number;
  @Output() toggleShowForm = new EventEmitter<EmitValue>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.passengerForm = this.formBuilder.group({
      newContact: [this.showForm, [Validators.required]]
    });
  }

  toggleDefaultContact(event) {
    event.stopImmediatePropagation();
    console.log('event', event);
    console.log(event.target.checked);
    this.toggleShowForm.emit({newValue: event.target.checked, paxNum: this.num})
  }
}
