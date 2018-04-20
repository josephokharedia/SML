import {Component, OnDestroy, OnInit} from '@angular/core';
import {Address} from '../model/address.model';
import {UiService} from '../ui.service';
import {RatingSize} from '../rating/rating.component';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.css']
})
export class WriteReviewComponent implements OnInit, OnDestroy {

  // I need this so I can have access to enum values in html
  public RatingSize = RatingSize;
  public currentAddress: Address;

  constructor(private uiService: UiService) {
  }

  ngOnInit() {
    this.uiService.setActiveNavId('write-review');

    const address1 = new Address();
    address1.unit = '36';
    address1.complex = 'The Stables';
    address1.street = '21 Fountain Road';
    address1.suburb = 'Beverley AH';
    address1.city = 'Sandton';
    address1.country = 'South Africa';
    address1.postalCode = 2191;

    this.currentAddress = address1;
  }

  ngOnDestroy(): void {
    this.uiService.reset();
  }


}
