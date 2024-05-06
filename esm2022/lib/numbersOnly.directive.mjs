import { Directive, HostListener } from "@angular/core";
import * as i0 from "@angular/core";
export class NumbersOnlyDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyc09ubHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci13ZWJsaW5laW5kaWEtY3VycmVuY3ktaW5wdXQvc3JjL2xpYi9udW1iZXJzT25seS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBSzVFLE1BQU0sT0FBTyxvQkFBb0I7SUFHL0IsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUZsQyx1QkFBa0IsR0FBWSxLQUFLLENBQUM7SUFFQyxDQUFDO0lBRTlDLFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRWtDLGFBQWEsQ0FBQyxLQUFVO1FBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxZQUFrQjtRQUN6QyxNQUFNLE1BQU0sR0FBRyxZQUFZLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDN0QsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXpELDBFQUEwRTtRQUMxRSxNQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUksWUFBWSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksV0FBVyxHQUFHLFlBQVk7aUJBQzNCLEtBQUssQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDO2lCQUN0QixPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekMsSUFBSSxXQUFXLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUUxRSxpRUFBaUU7WUFDakUsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDaEIsV0FBVyxHQUFHLEdBQUcsQ0FBQzthQUNuQjtZQUVELDZEQUE2RDtZQUM3RCxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFdEMsWUFBWSxHQUFHLFdBQVcsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDO1NBQ2hEO2FBQU07WUFDTCxZQUFZLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNuRTtRQUVELHVEQUF1RDtRQUN2RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQzVCLE1BQU0sVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakMsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzsrR0EvQ1Usb0JBQW9CO21HQUFwQixvQkFBb0I7OzRGQUFwQixvQkFBb0I7a0JBSGhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7aUJBQzFCO2lHQVVvQyxhQUFhO3NCQUEvQyxZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW251bWJlcnNPbmx5XVwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyc09ubHlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgZm9ybWF0dGluZ0ludGVybmFsOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmZvcm1hdElucHV0VmFsdWUoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoXCJpbnB1dFwiLCBbXCIkZXZlbnRcIl0pIG9uSW5wdXRDaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLmZvcm1hdHRpbmdJbnRlcm5hbCkge1xyXG4gICAgICB0aGlzLmZvcm1hdElucHV0VmFsdWUoZXZlbnQudGFyZ2V0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0SW5wdXRWYWx1ZShpbnB1dEVsZW1lbnQ/OiBhbnkpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGlucHV0RWxlbWVudCB8fCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCBudW1lcmljVmFsdWUgPSB0YXJnZXQudmFsdWUucmVwbGFjZSgvW14wLTkuLV0vZywgXCJcIik7XHJcblxyXG4gICAgLy8gRW5zdXJlIG9ubHkgb25lIGRlY2ltYWwgcG9pbnQgaXMgcHJlc2VudCBhbmQgYWRkIGNvbW1hcyB0byBpbnRlZ2VyIHBhcnRcclxuICAgIGNvbnN0IGRlY2ltYWxJbmRleCA9IG51bWVyaWNWYWx1ZS5pbmRleE9mKFwiLlwiKTtcclxuICAgIGlmIChkZWNpbWFsSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIGxldCBpbnRlZ2VyUGFydCA9IG51bWVyaWNWYWx1ZVxyXG4gICAgICAgIC5zbGljZSgwLCBkZWNpbWFsSW5kZXgpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcclxuICAgICAgbGV0IGRlY2ltYWxQYXJ0ID0gbnVtZXJpY1ZhbHVlLnNsaWNlKGRlY2ltYWxJbmRleCArIDEpLnJlcGxhY2UoL1xcLi9nLCBcIlwiKTtcclxuXHJcbiAgICAgIC8vIElmIHRoZSBpbnRlZ2VyIHBhcnQgaXMgZW1wdHksIGFkZCAnMCcgYmVmb3JlIHRoZSBkZWNpbWFsIHBvaW50XHJcbiAgICAgIGlmICghaW50ZWdlclBhcnQpIHtcclxuICAgICAgICBpbnRlZ2VyUGFydCA9IFwiMFwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBFbnN1cmUgb25seSB0d28gZGlnaXRzIGFyZSBwcmVzZW50IGFmdGVyIHRoZSBkZWNpbWFsIHBvaW50XHJcbiAgICAgIGRlY2ltYWxQYXJ0ID0gZGVjaW1hbFBhcnQuc2xpY2UoMCwgMik7XHJcblxyXG4gICAgICBudW1lcmljVmFsdWUgPSBpbnRlZ2VyUGFydCArIFwiLlwiICsgZGVjaW1hbFBhcnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBudW1lcmljVmFsdWUgPSBudW1lcmljVmFsdWUucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCB0aGUgZmxhZyB0byB0cnVlIHRvIGluZGljYXRlIGludGVybmFsIGZvcm1hdHRpbmdcclxuICAgIHRoaXMuZm9ybWF0dGluZ0ludGVybmFsID0gdHJ1ZTtcclxuICAgIHRhcmdldC52YWx1ZSA9IG51bWVyaWNWYWx1ZTtcclxuICAgIGNvbnN0IGlucHV0RXZlbnQgPSBuZXcgRXZlbnQoXCJpbnB1dFwiLCB7IGJ1YmJsZXM6IHRydWUgfSk7XHJcbiAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChpbnB1dEV2ZW50KTtcclxuICAgIC8vIFJlc2V0IHRoZSBmbGFnIGFmdGVyIGZvcm1hdHRpbmdcclxuICAgIHRoaXMuZm9ybWF0dGluZ0ludGVybmFsID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==