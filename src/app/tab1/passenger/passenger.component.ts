import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss'],
})
export class PassengerComponent implements OnInit, OnChanges {

  passengerForm: FormGroup;

  @Input() showForm = true;
  @Input() num: number;
  @Output() toggleShowForm = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.passengerForm = this.formBuilder.group({
      newContact: [this.showForm, [Validators.required]]
    });
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
     this.passengerForm?.controls?.newContact.setValue(simpleChanges?.showForm?.currentValue)
  }

  toggleDefaultContact() {
    this.toggleShowForm.emit(this.num);
  }


}
