# Angular - Currency Input Component

An Angular-based currency input component for adding currency field.

## Table of contents

- [Browser Support](#browser-support)
- [Demo](#demo)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Available Props](#available-props)
- [Methods](#methods)
- [Want to Contribute?](#want-to-contribute)
- [Collection of Components](#collection-of-components)
- [Changelog](#changelog)
- [License](#license)
- [Keywords](#Keywords)

## Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 83.0 ✔                                                                                   | 77.0 ✔                                                                                      | 13.1.1 ✔                                                                                 | 83.0 ✔                                                                             | 11.9 ✔                                                                                                                       |

## Demo

[![](textNg.gif)](https://github.com/weblineindia/AngularJS-Text-Box/textNg.gif)

## Getting started

Install the npm package:

```bash
npm install angular-weblineindia-currency-input
#OR
yarn add angular-weblineindia-currency-input
```

## Usage

Use the `<angular-weblineindia-currency-input>` component:

Add in app.module.ts file

```typescript
import { NgModule } from "@angular/core";
import { AngularWeblineindiaCurrencyInputModule } from "angular-weblineindia-currency-input";

@NgModule({
  imports: [AngularWeblineindiaCurrencyInputModule],
})
export class AppModule {}
```

Add in app.component.ts file

```typescript
export class AppComponent {
  constructor() {}
  isInvalidPhoneNumber: boolean = false;
  invalidMessage: string = "onFocusHandler(event: any): void";

  onFocusHandler(event: any): void {
    console.log("onFocusHandler: ", event.target.value);
  }
  onBlurHandler(event: any): void {
    console.log("onBlurHandler: ", event.target.value);
  }
  onChangeHandler(event: any): void {
    console.log("onChangeHandler: ", event.target.value);
  }
  onKeyPressHandler(event: any): void {
    console.log("onKeyPressHandler: ", event.target.value);
  }
  onKeyDownHandler(event: any): void {
    console.log("onKeyDownHandler: ", event.target.value);
  }
  onKeyUpHandler(event: any): void {
    console.log("onKeyUpHandler: ", event.target.value);
  }
}
```

Add in app.component.html file

```html
<angular-weblineindia-currency-input
  name="myInputName"
  [value]="203000.45"
  classname="currency-input"
  errorClass="errorMessage"
  placeholder="Enter amount here"
  [disabled]="true"
  [required]="false"
  [prefix]="'$Rs'"
  [isInvalidPhoneNumber]="isInvalidPhoneNumber"
  [invalidMessage]="invalidMessage"
  (focus)="onFocusHandler($event)"
  (blur)="onBlurHandler($event)"
  (change)="onChangeHandler($event)"
  (keyPress)="onKeyPressHandler($event)"
  (keyDown)="onKeyDownHandler($event)"
  (keyUp)="onKeyUpHandler($event)"
>
</angular-weblineindia-currency-input>
```

Add in app.component.css file

```typescript
::ng-deep .currency-input {

}

::ng-deep .errorClass {
  color: RED;
  margin: 0;
}

```

## Available Props

| Prop              | Type    | default | Description                                    |
| ----------------- | ------- | ------- | ---------------------------------------------- |
| name              | String  |         | Name for the input                             |
| value             | String  |         | Initial value of input                         |
| classname         | String  | false   | CSS class applied for curency input.           |
| errorClass        | String  |         | CSS class applied for error message            |
| placeholder       | String  |         | The input field will get this placeholder text |
| required          | boolean | false   | If true, makes the input field mandatory.      |
| disabled          | boolean | false   | If true, disables the input field.             |
| prefix            | String  |         | To set currency type                           |
| isInvalidPassword | boolean | false   | Indicates if the currency is invalid           |
| invalidMessage    | String  |         | Message to display when the currncy is invalid |

## Methods

| Name     | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| focus    | Gets triggered when the autocomplete input field receives focus. |
| blur     | Gets triggered when the autocomplete input field loses focus.    |
| keyPress | Gets triggered when a key gets pressed.                          |
| keyDown  | Gets triggered when a key gets down.                             |
| keyUp    | Gets triggered when a key gets up.                               |

## Want to Contribute?

- Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
- [Fork it](http://help.github.com/forking/).
- Create new branch to contribute your changes.
- Commit all your changes to your branch.
- Submit a [pull request](http://help.github.com/pull-requests/).

---

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/software-development-resources.html)

---

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT](LICENSE)

[mit]: https://github.com/weblineindia/AngularJS-Text-Box/blob/master/LICENSE

## Keywords

angular-weblineindia-currency-input, currencyInput, input, angular, angular-component, currencyInput-component, currencyInput-box
