import { Component, EventEmitter, Input, Output } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./numbersOnly.directive";
export class AngularWeblineindiaCurrencyInputComponent {
    constructor() {
        this.disabled = false;
        this.required = false;
        this.prefix = "";
        this.isInvalidPhoneNumber = false;
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.keyPress = new EventEmitter();
        this.keyDown = new EventEmitter();
        this.keyUp = new EventEmitter();
    }
    onFocus(event) {
        this.focus.emit(event);
    }
    onBlur(event) {
        this.blur.emit(event);
    }
    onKeyPress(event) {
        this.keyPress.emit(event);
    }
    onKeyDown(event) {
        this.keyDown.emit(event);
    }
    onKeyUp(event) {
        this.keyUp.emit(event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaCurrencyInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AngularWeblineindiaCurrencyInputComponent, selector: "angular-weblineindia-currency-input", inputs: { name: "name", value: "value", classname: "classname", errorClass: "errorClass", placeholder: "placeholder", disabled: "disabled", required: "required", prefix: "prefix", isInvalidPhoneNumber: "isInvalidPhoneNumber", invalidMessage: "invalidMessage" }, outputs: { focus: "focus", blur: "blur", keyPress: "keyPress", keyDown: "keyDown", keyUp: "keyUp" }, ngImport: i0, template: "<div class=\"currency-input\">\r\n  <div class=\"inline-css\">\r\n    <span>{{ prefix }}</span>\r\n    <input\r\n      [name]=\"name\"\r\n      [disabled]=\"disabled\"\r\n      type=\"text\"\r\n      [placeholder]=\"placeholder\"\r\n      [value]=\"value\"\r\n      (focus)=\"onFocus($event)\"\r\n      (blur)=\"onBlur($event)\"\r\n      (keypress)=\"onKeyPress($event)\"\r\n      (keydown)=\"onKeyDown($event)\"\r\n      (keyup)=\"onKeyUp($event)\"\r\n      numbersOnly\r\n    />\r\n  </div>\r\n</div>\r\n<span *ngIf=\"isInvalidPhoneNumber\">\r\n  <p class=\"errorClass\">{{ invalidMessage }}</p>\r\n</span>\r\n", styles: [".inline-css{position:relative}.inline-css input{padding-left:40px}.inline-css span{position:absolute;left:10px;top:50%;transform:translateY(-50%)}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NumbersOnlyDirective, selector: "[numbersOnly]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaCurrencyInputComponent, decorators: [{
            type: Component,
            args: [{ selector: "angular-weblineindia-currency-input", template: "<div class=\"currency-input\">\r\n  <div class=\"inline-css\">\r\n    <span>{{ prefix }}</span>\r\n    <input\r\n      [name]=\"name\"\r\n      [disabled]=\"disabled\"\r\n      type=\"text\"\r\n      [placeholder]=\"placeholder\"\r\n      [value]=\"value\"\r\n      (focus)=\"onFocus($event)\"\r\n      (blur)=\"onBlur($event)\"\r\n      (keypress)=\"onKeyPress($event)\"\r\n      (keydown)=\"onKeyDown($event)\"\r\n      (keyup)=\"onKeyUp($event)\"\r\n      numbersOnly\r\n    />\r\n  </div>\r\n</div>\r\n<span *ngIf=\"isInvalidPhoneNumber\">\r\n  <p class=\"errorClass\">{{ invalidMessage }}</p>\r\n</span>\r\n", styles: [".inline-css{position:relative}.inline-css input{padding-left:40px}.inline-css span{position:absolute;left:10px;top:50%;transform:translateY(-50%)}\n"] }]
        }], propDecorators: { name: [{
                type: Input
            }], value: [{
                type: Input
            }], classname: [{
                type: Input
            }], errorClass: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], required: [{
                type: Input
            }], prefix: [{
                type: Input
            }], isInvalidPhoneNumber: [{
                type: Input
            }], invalidMessage: [{
                type: Input
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }], keyPress: [{
                type: Output
            }], keyDown: [{
                type: Output
            }], keyUp: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci13ZWJsaW5laW5kaWEtY3VycmVuY3ktaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci13ZWJsaW5laW5kaWEtY3VycmVuY3ktaW5wdXQvc3JjL2xpYi9hbmd1bGFyLXdlYmxpbmVpbmRpYS1jdXJyZW5jeS1pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXdlYmxpbmVpbmRpYS1jdXJyZW5jeS1pbnB1dC9zcmMvbGliL2FuZ3VsYXItd2VibGluZWluZGlhLWN1cnJlbmN5LWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPdkUsTUFBTSxPQUFPLHlDQUF5QztJQUx0RDtRQVlXLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLHlCQUFvQixHQUFZLEtBQUssQ0FBQztRQUdyQyxVQUFLLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDckQsU0FBSSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3BELGFBQVEsR0FDaEIsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDMUIsWUFBTyxHQUNmLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQzFCLFVBQUssR0FDYixJQUFJLFlBQVksRUFBaUIsQ0FBQztLQXFCckM7SUFuQkMsT0FBTyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFVO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFvQjtRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQW9CO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBb0I7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzsrR0F4Q1UseUNBQXlDO21HQUF6Qyx5Q0FBeUMsc2JDUHRELHNtQkFxQkE7OzRGRGRhLHlDQUF5QztrQkFMckQsU0FBUzsrQkFDRSxxQ0FBcUM7OEJBS3RDLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUVHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxvQkFBb0I7c0JBQTVCLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFFSSxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csSUFBSTtzQkFBYixNQUFNO2dCQUNHLFFBQVE7c0JBQWpCLE1BQU07Z0JBRUcsT0FBTztzQkFBaEIsTUFBTTtnQkFFRyxLQUFLO3NCQUFkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJhbmd1bGFyLXdlYmxpbmVpbmRpYS1jdXJyZW5jeS1pbnB1dFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vYW5ndWxhci13ZWJsaW5laW5kaWEtY3VycmVuY3ktaW5wdXQuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vYW5ndWxhci13ZWJsaW5laW5kaWEtY3VycmVuY3ktaW5wdXQuY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJXZWJsaW5laW5kaWFDdXJyZW5jeUlucHV0Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBuYW1lITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZhbHVlITogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGNsYXNzbmFtZSE6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIGVycm9yQ2xhc3MhOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuXHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHByZWZpeDogc3RyaW5nID0gXCJcIjtcclxuICBASW5wdXQoKSBpc0ludmFsaWRQaG9uZU51bWJlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGludmFsaWRNZXNzYWdlITogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBrZXlQcmVzczogRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+ID1cclxuICAgIG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkga2V5RG93bjogRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+ID1cclxuICAgIG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkga2V5VXA6IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PiA9XHJcbiAgICBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XHJcblxyXG4gIG9uRm9jdXMoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uQmx1cihldmVudDogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbktleVByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICB0aGlzLmtleVByZXNzLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICB0aGlzLmtleURvd24uZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbktleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICB0aGlzLmtleVVwLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiY3VycmVuY3ktaW5wdXRcIj5cclxuICA8ZGl2IGNsYXNzPVwiaW5saW5lLWNzc1wiPlxyXG4gICAgPHNwYW4+e3sgcHJlZml4IH19PC9zcGFuPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIFtuYW1lXT1cIm5hbWVcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxyXG4gICAgICAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXHJcbiAgICAgIChrZXlwcmVzcyk9XCJvbktleVByZXNzKCRldmVudClcIlxyXG4gICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXHJcbiAgICAgIChrZXl1cCk9XCJvbktleVVwKCRldmVudClcIlxyXG4gICAgICBudW1iZXJzT25seVxyXG4gICAgLz5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxzcGFuICpuZ0lmPVwiaXNJbnZhbGlkUGhvbmVOdW1iZXJcIj5cclxuICA8cCBjbGFzcz1cImVycm9yQ2xhc3NcIj57eyBpbnZhbGlkTWVzc2FnZSB9fTwvcD5cclxuPC9zcGFuPlxyXG4iXX0=