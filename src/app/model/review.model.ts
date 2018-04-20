import {Address} from './address.model';
import {Tenant} from './tenant.model';

export class Review {

  private _id: number;

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  private _title: string;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  private _description: string;

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  private _address: Address;

  get address(): Address {
    return this._address;
  }

  set address(value: Address) {
    this._address = value;
  }

  private _rating: number = 0;

  get rating(): number {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value;
  }

  private _created: Date;

  get created(): Date {
    return this._created;
  }

  set created(value: Date) {
    this._created = value;
  }

  private _tenant: Tenant;

  get tenant(): Tenant {
    return this._tenant;
  }

  set tenant(value: Tenant) {
    this._tenant = value;
  }

}
