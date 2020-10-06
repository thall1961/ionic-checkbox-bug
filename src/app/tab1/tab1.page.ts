import {Component} from '@angular/core';

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

    setShow(show: number) {
        console.log('show', show);
        if (show === this.showContactForm && show === -1) {
            this.showContactForm = this.lastPaxIndex;
        } else if (show === this.showContactForm && show !== -1) {
            this.showContactForm = -1;
        } else {
            this.showContactForm = show;
            this.lastPaxIndex = show;
        }
        console.log('showCon', this.showContactForm);
        console.log('last', this.lastPaxIndex);
    }

}
