import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss'],
})
export class PassengerComponent implements OnInit {

  passengerForm: FormGroup;

  @Input() showForm = true;
  @Input() num: number;
  @Output() toggleShowForm = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.passengerForm = this.formBuilder.group({
      firstName: ['Jimmy', [Validators.required]],
      newContact: [true, [Validators.required]]
    });
  }

  toggleDefaultContact() {
    this.toggleShowForm.emit(this.num);
  }


}
