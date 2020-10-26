import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  checked = false;
  secondChecked = true;
  thirdChecked = false;
  fourthChecked = true;

  constructor() {}

  setChecked() {
    this.checked = !this.checked;
    this.secondChecked = !this.secondChecked;
  }

  setSecondChecked() {
    this.thirdChecked = !this.thirdChecked;
    this.fourthChecked = !this.fourthChecked;
  }

}
