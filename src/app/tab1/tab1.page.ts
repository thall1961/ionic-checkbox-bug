import {Component} from '@angular/core';
import {EmitValue} from "../EmitValue.model";

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    showContactForm = 0;
    lastPaxIndex = 0;

    constructor() {
    }

    setShow(emittedValue: EmitValue) {
        console.log('emittedValue', emittedValue);
        if (emittedValue.paxNum === this.showContactForm && emittedValue.paxNum === -1) {
            this.showContactForm = this.lastPaxIndex;
        } else if (emittedValue.paxNum === this.showContactForm && emittedValue.paxNum !== -1) {
            this.showContactForm = -1;
        } else if (emittedValue.paxNum === -1) {
            this.showContactForm = emittedValue.paxNum;
        } else {
            this.showContactForm = emittedValue.paxNum;
            this.lastPaxIndex = emittedValue.paxNum;
        }
    }

}
