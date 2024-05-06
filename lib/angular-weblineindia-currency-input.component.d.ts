import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class AngularWeblineindiaCurrencyInputComponent {
    name: string;
    value: number;
    classname: string | string[];
    errorClass: string | string[];
    placeholder: string;
    disabled: boolean;
    required: boolean;
    prefix: string;
    isInvalidPhoneNumber: boolean;
    invalidMessage: string;
    focus: EventEmitter<void>;
    blur: EventEmitter<void>;
    keyPress: EventEmitter<KeyboardEvent>;
    keyDown: EventEmitter<KeyboardEvent>;
    keyUp: EventEmitter<KeyboardEvent>;
    onFocus(event: any): void;
    onBlur(event: any): void;
    onKeyPress(event: KeyboardEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    onKeyUp(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AngularWeblineindiaCurrencyInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AngularWeblineindiaCurrencyInputComponent, "angular-weblineindia-currency-input", never, { "name": { "alias": "name"; "required": false; }; "value": { "alias": "value"; "required": false; }; "classname": { "alias": "classname"; "required": false; }; "errorClass": { "alias": "errorClass"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; "prefix": { "alias": "prefix"; "required": false; }; "isInvalidPhoneNumber": { "alias": "isInvalidPhoneNumber"; "required": false; }; "invalidMessage": { "alias": "invalidMessage"; "required": false; }; }, { "focus": "focus"; "blur": "blur"; "keyPress": "keyPress"; "keyDown": "keyDown"; "keyUp": "keyUp"; }, never, never, false, never>;
}
