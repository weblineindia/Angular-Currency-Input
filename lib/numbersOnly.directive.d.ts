import { ElementRef, OnInit } from "@angular/core";
import * as i0 from "@angular/core";
export declare class NumbersOnlyDirective implements OnInit {
    private elementRef;
    private formattingInternal;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    onInputChange(event: any): void;
    private formatInputValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumbersOnlyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NumbersOnlyDirective, "[numbersOnly]", never, {}, {}, never, never, false, never>;
}
