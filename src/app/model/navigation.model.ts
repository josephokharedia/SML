export class Navigation {

  private _id: string;
  private _text: string;
  private _link = '#';
  private _active = false;
  private _iconClass: string;
  private _boxed = false;
  private _showOnlyWhenAuthenticated = false;
  private _showOnlyWhenNotAuthenticated = false;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get boxed(): boolean {
    return this._boxed;
  }

  set boxed(value: boolean) {
    this._boxed = value;
  }

  get iconClass(): string {
    return this._iconClass;
  }

  set iconClass(value: string) {
    this._iconClass = value;
  }

  get active(): boolean {
    return this._active;
  }

  set active(value: boolean) {
    this._active = value;
  }

  get link(): string {
    return this._link;
  }

  set link(value: string) {
    this._link = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get showOnlyWhenNotAuthenticated(): boolean {
    return this._showOnlyWhenNotAuthenticated;
  }

  set showOnlyWhenNotAuthenticated(value: boolean) {
    this._showOnlyWhenNotAuthenticated = value;
  }

  get showOnlyWhenAuthenticated(): boolean {
    return this._showOnlyWhenAuthenticated;
  }

  set showOnlyWhenAuthenticated(value: boolean) {
    this._showOnlyWhenAuthenticated = value;
  }


  constructor() {
  }

  static get Builder() {
    class NavigationBuilder {

      private nav: Navigation;

      constructor(id: string) {
        this.nav = new Navigation();
        this.nav.id = id;
      }

      withText(text: string): NavigationBuilder {
        this.nav.text = text;
        return this;
      }

      withLink(link: string): NavigationBuilder {
        this.nav.link = link;
        return this;
      }

      withActive(active: boolean): NavigationBuilder {
        this.nav.active = active;
        return this;
      }

      withIconClass(iconClass: string): NavigationBuilder {
        this.nav.iconClass = iconClass;
        return this;
      }

      withBoxed(boxed: boolean): NavigationBuilder {
        this.nav.boxed = boxed;
        return this;
      }

      withShowOnlyWhenAuthenticated(showOnlyWhenAuthenticated: boolean): NavigationBuilder {
        this.nav.showOnlyWhenAuthenticated = showOnlyWhenAuthenticated;
        return this;
      }

      withShowOnlyWhenNotAuthenticated(showOnlyWhenNotAuthenticated: boolean): NavigationBuilder {
        this.nav.showOnlyWhenNotAuthenticated = showOnlyWhenNotAuthenticated;
        return this;
      }

      build(): Navigation {
        const newNav = Object.create(this.nav);
        this.nav = null;
        return newNav;
      }

    }

    return NavigationBuilder;
  }

}


