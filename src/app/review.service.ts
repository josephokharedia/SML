import {Injectable} from '@angular/core';
import {Review} from './model/review.model';
import {Address} from './model/address.model';
import {Tenant} from './model/tenant.model';

@Injectable()
export class ReviewService {

  private allReviews: Review[];

  constructor() {
    this.init();
  }

  init() {
    const tenant1 = new Tenant('Joseph', 'Okharedia');

    const address1 = new Address();
    address1.unit = '36';
    address1.complex = 'The Stables';
    address1.street = '21 Fountain Road';
    address1.suburb = 'Beverley AH';
    address1.city = 'Sandton';
    address1.country = 'South Africa';
    address1.postalCode = 2191;

    const review1 = new Review();
    review1.id = 1;
    review1.title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante';
    review1.description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s\n' +
      '        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\n' +
      '        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,\n' +
      '        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing\n' +
      '        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions\n' +
      '        of Lorem Ipsum.';

    review1.address = address1;
    review1.created = new Date();
    review1.tenant = tenant1;
    review1.rating = 3;

    this.allReviews = [
      Object.assign({}, review1)
    ];
  }


  getLatestReviews(): Review[] {
    return [...this.allReviews];
  }

  getMostViewedReviews(): Review[] {
    return [...this.allReviews];
  }

  getReview(id: number): Review {
    return this.allReviews[0];
  }
}
