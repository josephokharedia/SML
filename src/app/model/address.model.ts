export class Address {

  private _id?: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _unit?: string;

  get unit(): string {
    return this._unit === undefined ? '' : this._unit;
  }

  set unit(value: string) {
    this._unit = value;
  }

  private _complex?: string;

  get complex(): string {
    return this._complex === undefined ? '' : this._complex;
  }

  set complex(value: string) {
    this._complex = value;
  }

  private _street: string;

  get street(): string {
    return this._street === undefined ? '' : this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  private _suburb: string;

  get suburb(): string {
    return this._suburb === undefined ? '' : this._suburb;
  }

  set suburb(value: string) {
    this._suburb = value;
  }

  private _city: string;

  get city(): string {
    return this._city === undefined ? '' : this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  private _country: string;

  get country(): string {
    return this._country === undefined ? '' : this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  private _longitude?: number;

  get longitude(): number {
    return this._longitude;
  }

  set longitude(value: number) {
    this._longitude = value;
  }

  private _latitude?: number;

  get latitude(): number {
    return this._latitude;
  }

  set latitude(value: number) {
    this._latitude = value;
  }

  private _postalCode: number;

  get postalCode(): number {
    return this._postalCode;
  }

  set postalCode(value: number) {
    this._postalCode = value;
  }

  toString(): string {
    //36 The Stables, 21 Fountain Rd, Beverley AH, Sandton, South Africa, 2191
    return `${this.unit} ${this._complex}, ${this.street}, ${this.suburb}, ${this.city}, ${this.country}, ${this.postalCode}`;
  }

}
