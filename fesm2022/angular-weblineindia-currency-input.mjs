import * as i0 from '@angular/core';
import { Injectable, Directive, HostListener, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

class AngularWeblineindiaCurrencyInputService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaCurrencyInputService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaCurrencyInputService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaCurrencyInputService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NumbersOnlyDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.formattingInternal = false;
    }
    ngOnInit() {
        this.formatInputValue();
    }
    onInputChange(event) {
        if (!this.formattingInternal) {
            this.formatInputValue(event.target);
        }
    }
    formatInputValue(inputElement) {
        const target = inputElement || this.elementRef.nativeElement;
        let numericValue = target.value.replace(/[^0-9.-]/g, "");
        // Ensure only one decimal point is present and add commas to integer part
        const decimalIndex = numericValue.indexOf(".");
        if (decimalIndex !== -1) {
            let integerPart = numericValue
                .slice(0, decimalIndex)
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            let decimalPart = numericValue.slice(decimalIndex + 1).replace(/\./g, "");
            // If the integer part is empty, add '0' before the decimal point
            if (!integerPart) {
                integerPart = "0";
            }
            // Ensure only two digits are present after the decimal point
            decimalPart = decimalPart.slice(0, 2);
            numericValue = integerPart + "." + decimalPart;
        }
        else {
            numericValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        // Set the flag to true to indicate internal formatting
        this.formattingInternal = true;
        target.value = numericValue;
        const inputEvent = new Event("input", { bubbles: true });
        target.dispatchEvent(inputEvent);
        // Reset the flag after formatting
        this.formattingInternal = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NumbersOnlyDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: NumbersOnlyDirective, selector: "[numbersOnly]", host: { listeners: { "input": "onInputChange($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NumbersOnlyDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[numbersOnly]",
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { onInputChange: [{
                type: HostListener,
                args: ["input", ["$event"]]
            }] } });

class AngularWeblineindiaCurrencyInputComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AngularWeblineindiaCurrencyInputComponent, selector: "angular-weblineindia-currency-input", inputs: { name: "name", value: "value", classname: "classname", errorClass: "errorClass", placeholder: "placeholder", disabled: "disabled", required: "required", prefix: "prefix", isInvalidPhoneNumber: "isInvalidPhoneNumber", invalidMessage: "invalidMessage" }, outputs: { focus: "focus", blur: "blur", keyPress: "keyPress", keyDown: "keyDown", keyUp: "keyUp" }, ngImport: i0, template: "<div class=\"currency-input\">\r\n  <div class=\"inline-css\">\r\n    <span>{{ prefix }}</span>\r\n    <input\r\n      [name]=\"name\"\r\n      [disabled]=\"disabled\"\r\n      type=\"text\"\r\n      [placeholder]=\"placeholder\"\r\n      [value]=\"value\"\r\n      (focus)=\"onFocus($event)\"\r\n      (blur)=\"onBlur($event)\"\r\n      (keypress)=\"onKeyPress($event)\"\r\n      (keydown)=\"onKeyDown($event)\"\r\n      (keyup)=\"onKeyUp($event)\"\r\n      numbersOnly\r\n    />\r\n  </div>\r\n</div>\r\n<span *ngIf=\"isInvalidPhoneNumber\">\r\n  <p class=\"errorClass\">{{ invalidMessage }}</p>\r\n</span>\r\n", styles: [".inline-css{position:relative}.inline-css input{padding-left:40px}.inline-css span{position:absolute;left:10px;top:50%;transform:translateY(-50%)}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NumbersOnlyDirective, selector: "[numbersOnly]" }] }); }
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

class AngularWeblineindiaCurrencyInputModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaCurrencyInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaCurrencyInputModule, declarations: [AngularWeblineindiaCurrencyInputComponent,
            NumbersOnlyDirective], imports: [ReactiveFormsModule, CommonModule], exports: [AngularWeblineindiaCurrencyInputComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaCurrencyInputModule, imports: [ReactiveFormsModule, CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaCurrencyInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AngularWeblineindiaCurrencyInputComponent,
                        NumbersOnlyDirective,
                    ],
                    imports: [ReactiveFormsModule, CommonModule],
                    exports: [AngularWeblineindiaCurrencyInputComponent],
                }]
        }] });

/*
 * Public API Surface of angular-weblineindia-currency-input
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularWeblineindiaCurrencyInputComponent, AngularWeblineindiaCurrencyInputModule, AngularWeblineindiaCurrencyInputService };
//# sourceMappingURL=angular-weblineindia-currency-input.mjs.map
