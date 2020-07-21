import * as tslib_1 from "tslib";
import { AfterViewInit, Directive, DoCheck, ElementRef, forwardRef, HostListener, Inject, KeyValueDiffer, KeyValueDiffers, Input, OnInit, Optional } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { CURRENCY_MASK_CONFIG, CurrencyMaskInputMode } from "./currency-mask.config";
import { InputHandler } from "./input.handler";
export var CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return CurrencyMaskDirective; }),
    multi: true,
};
var CurrencyMaskDirective = /** @class */ (function () {
    function CurrencyMaskDirective(currencyMaskConfig, elementRef, keyValueDiffers) {
        this.currencyMaskConfig = currencyMaskConfig;
        this.elementRef = elementRef;
        this.keyValueDiffers = keyValueDiffers;
        this.options = {};
        this.optionsTemplate = {
            align: "right",
            allowNegative: true,
            allowZero: true,
            decimal: ".",
            precision: 2,
            prefix: "$ ",
            suffix: "",
            thousands: ",",
            nullable: false,
            inputMode: CurrencyMaskInputMode.FINANCIAL
        };
        if (currencyMaskConfig) {
            this.optionsTemplate = currencyMaskConfig;
        }
        this.keyValueDiffer = keyValueDiffers.find({}).create();
    }
    CurrencyMaskDirective.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.style.textAlign = this.options && this.options.align ? this.options.align : this.optionsTemplate.align;
    };
    CurrencyMaskDirective.prototype.ngDoCheck = function () {
        if (this.keyValueDiffer.diff(this.options)) {
            this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
            this.inputHandler.updateOptions(Object.assign({}, this.optionsTemplate, this.options));
        }
    };
    CurrencyMaskDirective.prototype.ngOnInit = function () {
        this.inputHandler = new InputHandler(this.elementRef.nativeElement, Object.assign({}, this.optionsTemplate, this.options));
    };
    CurrencyMaskDirective.prototype.handleBlur = function (event) {
        this.inputHandler.getOnModelTouched().apply(event);
    };
    CurrencyMaskDirective.prototype.handleCut = function (event) {
        if (!this.isChromeAndroid()) {
            !this.isReadOnly() && this.inputHandler.handleCut(event);
        }
    };
    CurrencyMaskDirective.prototype.handleInput = function (event) {
        if (this.isChromeAndroid()) {
            !this.isReadOnly() && this.inputHandler.handleInput(event);
        }
    };
    CurrencyMaskDirective.prototype.handleKeydown = function (event) {
        if (!this.isChromeAndroid()) {
            !this.isReadOnly() && this.inputHandler.handleKeydown(event);
        }
    };
    CurrencyMaskDirective.prototype.handleKeypress = function (event) {
        if (!this.isChromeAndroid()) {
            !this.isReadOnly() && this.inputHandler.handleKeypress(event);
        }
    };
    CurrencyMaskDirective.prototype.handlePaste = function (event) {
        if (!this.isChromeAndroid()) {
            !this.isReadOnly() && this.inputHandler.handlePaste(event);
        }
    };
    CurrencyMaskDirective.prototype.handleDrop = function (event) {
        if (!this.isChromeAndroid()) {
            event.preventDefault();
        }
    };
    CurrencyMaskDirective.prototype.isChromeAndroid = function () {
        return /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
    };
    CurrencyMaskDirective.prototype.isReadOnly = function () {
        return this.elementRef.nativeElement.hasAttribute('readonly');
    };
    CurrencyMaskDirective.prototype.registerOnChange = function (callbackFunction) {
        this.inputHandler.setOnModelChange(callbackFunction);
    };
    CurrencyMaskDirective.prototype.registerOnTouched = function (callbackFunction) {
        this.inputHandler.setOnModelTouched(callbackFunction);
    };
    CurrencyMaskDirective.prototype.setDisabledState = function (value) {
        this.elementRef.nativeElement.disabled = value;
    };
    CurrencyMaskDirective.prototype.writeValue = function (value) {
        this.inputHandler.setValue(value);
    };
    CurrencyMaskDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CURRENCY_MASK_CONFIG,] }] },
        { type: ElementRef },
        { type: KeyValueDiffers }
    ]; };
    tslib_1.__decorate([
        Input()
    ], CurrencyMaskDirective.prototype, "options", void 0);
    tslib_1.__decorate([
        HostListener("blur", ["$event"])
    ], CurrencyMaskDirective.prototype, "handleBlur", null);
    tslib_1.__decorate([
        HostListener("cut", ["$event"])
    ], CurrencyMaskDirective.prototype, "handleCut", null);
    tslib_1.__decorate([
        HostListener("input", ["$event"])
    ], CurrencyMaskDirective.prototype, "handleInput", null);
    tslib_1.__decorate([
        HostListener("keydown", ["$event"])
    ], CurrencyMaskDirective.prototype, "handleKeydown", null);
    tslib_1.__decorate([
        HostListener("keypress", ["$event"])
    ], CurrencyMaskDirective.prototype, "handleKeypress", null);
    tslib_1.__decorate([
        HostListener("paste", ["$event"])
    ], CurrencyMaskDirective.prototype, "handlePaste", null);
    tslib_1.__decorate([
        HostListener("drop", ["$event"])
    ], CurrencyMaskDirective.prototype, "handleDrop", null);
    CurrencyMaskDirective = tslib_1.__decorate([
        Directive({
            selector: "[currencyMask]",
            providers: [CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR]
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(CURRENCY_MASK_CONFIG))
    ], CurrencyMaskDirective);
    return CurrencyMaskDirective;
}());
export { CurrencyMaskDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3ktbWFzay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY3VycmVuY3kvIiwic291cmNlcyI6WyJzcmMvY3VycmVuY3ktbWFzay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxhQUFhLEVBQ2IsU0FBUyxFQUNULE9BQU8sRUFDUCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sY0FBYyxFQUNkLGVBQWUsRUFDZixLQUFLLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkUsT0FBTyxFQUFxQixvQkFBb0IsRUFBRSxxQkFBcUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZHLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxNQUFNLENBQUMsSUFBTSxvQ0FBb0MsR0FBUTtJQUN2RCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHFCQUFxQixFQUFyQixDQUFxQixDQUFDO0lBQ3BELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQU1GO0lBb0JFLCtCQUE4RCxrQkFBc0MsRUFDdEMsVUFBc0IsRUFDdEIsZUFBZ0M7UUFGaEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQXBCckYsWUFBTyxHQUFnQyxFQUFFLENBQUM7UUFLNUMsb0JBQWUsR0FBdUI7WUFDekMsS0FBSyxFQUFFLE9BQU87WUFDZCxhQUFhLEVBQUUsSUFBSTtZQUNuQixTQUFTLEVBQUUsSUFBSTtZQUNmLE9BQU8sRUFBRSxHQUFHO1lBQ1osU0FBUyxFQUFFLENBQUM7WUFDWixNQUFNLEVBQUUsSUFBSTtZ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Z0JBQ0wsZUFBZTs7SUFwQnJGO1FBQVIsS0FBSyxFQUFFOzBEQUEyQztJQTRDbkQ7UUFEQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7MkRBR2hDO0lBR0Q7UUFEQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7MERBSy9CO0lBR0Q7UUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7NERBS2pDO0lBR0Q7UUFEQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7OERBS25DO0lBR0Q7UUFEQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7K0RBS3BDO0lBR0Q7UUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7NERBS2pDO0lBR0Q7UUFEQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7MkRBS2hDO0lBMUZVLHFCQUFxQjtRQUpqQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1NBQ3BELENBQUM7UUFxQmEsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtPQXBCMUMscUJBQXFCLENBbUhqQztJQUFELDRCQUFDO0NBQUEsQUFuSEQsSUFtSEM7U0FuSFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBEb0NoZWNrLFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgS2V5VmFsdWVEaWZmZXIsXG4gIEtleVZhbHVlRGlmZmVycyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtDdXJyZW5jeU1hc2tDb25maWcsIENVUlJFTkNZX01BU0tfQ09ORklHLCBDdXJyZW5jeU1hc2tJbnB1dE1vZGV9IGZyb20gXCIuL2N1cnJlbmN5LW1hc2suY29uZmlnXCI7XG5pbXBvcnQge0lucHV0SGFuZGxlcn0gZnJvbSBcIi4vaW5wdXQuaGFuZGxlclwiO1xuXG5leHBvcnQgY29uc3QgQ1VSUkVOQ1lNQVNLRElSRUNUSVZFX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDdXJyZW5jeU1hc2tEaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltjdXJyZW5jeU1hc2tdXCIsXG4gICAgcHJvdmlkZXJzOiBbQ1VSUkVOQ1lNQVNLRElSRUNUSVZFX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeU1hc2tEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgRG9DaGVjaywgT25Jbml0IHtcblxuICBASW5wdXQoKSBvcHRpb25zOiBQYXJ0aWFsPEN1cnJlbmN5TWFza0NvbmZpZz4gPSB7fTtcblxuICBwdWJsaWMgaW5wdXRIYW5kbGVyOiBJbnB1dEhhbmRsZXI7XG4gIHB1YmxpYyBrZXlWYWx1ZURpZmZlcjogS2V5VmFsdWVEaWZmZXI8YW55LCBhbnk+O1xuXG4gIHB1YmxpYyBvcHRpb25zVGVtcGxhdGU6IEN1cnJlbmN5TWFza0NvbmZpZyA9IHtcbiAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgICBhbGxvd05lZ2F0aXZlOiB0cnVlLFxuICAgICAgYWxsb3daZXJvOiB0cnVlLFxuICAgICAgZGVjaW1hbDogXCIuXCIsXG4gICAgICBwcmVjaXNpb246IDIsXG4gICAgICBwcmVmaXg6IFwiJCBcIixcbiAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgIHRob3VzYW5kczogXCIsXCIsXG4gICAgICBudWxsYWJsZTogZmFsc2UsXG4gICAgICBpbnB1dE1vZGU6IEN1cnJlbmN5TWFza0lucHV0TW9kZS5GSU5BTkNJQUxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KENVUlJFTkNZX01BU0tfQ09ORklHKSBwcml2YXRlIGN1cnJlbmN5TWFza0NvbmZpZzogQ3VycmVuY3lNYXNrQ29uZmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUga2V5VmFsdWVEaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMpIHtcbiAgICBpZiAoY3VycmVuY3lNYXNrQ29uZmlnKSB7XG4gICAgICAgIHRoaXMub3B0aW9uc1RlbXBsYXRlID0gY3VycmVuY3lNYXNrQ29uZmlnO1xuICAgIH1cblxuICAgIHRoaXMua2V5VmFsdWVEaWZmZXIgPSBrZXlWYWx1ZURpZmZlcnMuZmluZCh7fSkuY3JlYXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUudGV4dEFsaWduID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5hbGlnbiA/IHRoaXMub3B0aW9ucy5hbGlnbiA6IHRoaXMub3B0aW9uc1RlbXBsYXRlLmFsaWduO1xuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICh0aGlzLmtleVZhbHVlRGlmZmVyLmRpZmYodGhpcy5vcHRpb25zKSkge1xuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUudGV4dEFsaWduID0gdGhpcy5vcHRpb25zLmFsaWduID8gdGhpcy5vcHRpb25zLmFsaWduIDogdGhpcy5vcHRpb25zVGVtcGxhdGUuYWxpZ247XG4gICAgICB0aGlzLmlucHV0SGFuZGxlci51cGRhdGVPcHRpb25zKCg8YW55Pk9iamVjdCkuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnNUZW1wbGF0ZSwgdGhpcy5vcHRpb25zKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnB1dEhhbmRsZXIgPSBuZXcgSW5wdXRIYW5kbGVyKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAoPGFueT5PYmplY3QpLmFzc2lnbih7fSwgdGhpcy5vcHRpb25zVGVtcGxhdGUsIHRoaXMub3B0aW9ucykpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcihcImJsdXJcIiwgW1wiJGV2ZW50XCJdKVxuICBoYW5kbGVCbHVyKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmlucHV0SGFuZGxlci5nZXRPbk1vZGVsVG91Y2hlZCgpLmFwcGx5KGV2ZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoXCJjdXRcIiwgW1wiJGV2ZW50XCJdKVxuICBoYW5kbGVDdXQoZXZlbnQ6IGFueSkge1xuICAgIGlmICghdGhpcy5pc0Nocm9tZUFuZHJvaWQoKSkge1xuICAgICAgIXRoaXMuaXNSZWFkT25seSgpICYmIHRoaXMuaW5wdXRIYW5kbGVyLmhhbmRsZUN1dChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcihcImlucHV0XCIsIFtcIiRldmVudFwiXSlcbiAgaGFuZGxlSW5wdXQoZXZlbnQ6IGFueSkge1xuICAgIGlmICh0aGlzLmlzQ2hyb21lQW5kcm9pZCgpKSB7XG4gICAgICAhdGhpcy5pc1JlYWRPbmx5KCkgJiYgdGhpcy5pbnB1dEhhbmRsZXIuaGFuZGxlSW5wdXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoXCJrZXlkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgaGFuZGxlS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgaWYgKCF0aGlzLmlzQ2hyb21lQW5kcm9pZCgpKSB7XG4gICAgICAhdGhpcy5pc1JlYWRPbmx5KCkgJiYgdGhpcy5pbnB1dEhhbmRsZXIuaGFuZGxlS2V5ZG93bihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcihcImtleXByZXNzXCIsIFtcIiRldmVudFwiXSlcbiAgaGFuZGxlS2V5cHJlc3MoZXZlbnQ6IGFueSkge1xuICAgIGlmICghdGhpcy5pc0Nocm9tZUFuZHJvaWQoKSkge1xuICAgICAgIXRoaXMuaXNSZWFkT25seSgpICYmIHRoaXMuaW5wdXRIYW5kbGVyLmhhbmRsZUtleXByZXNzKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKFwicGFzdGVcIiwgW1wiJGV2ZW50XCJdKVxuICBoYW5kbGVQYXN0ZShldmVudDogYW55KSB7XG4gICAgaWYgKCF0aGlzLmlzQ2hyb21lQW5kcm9pZCgpKSB7XG4gICAgICAhdGhpcy5pc1JlYWRPbmx5KCkgJiYgdGhpcy5pbnB1dEhhbmRsZXIuaGFuZGxlUGFzdGUoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoXCJkcm9wXCIsIFtcIiRldmVudFwiXSlcbiAgaGFuZGxlRHJvcChldmVudDogYW55KSB7XG4gICAgaWYgKCF0aGlzLmlzQ2hyb21lQW5kcm9pZCgpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGlzQ2hyb21lQW5kcm9pZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gL2Nocm9tZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgL2FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB9XG5cbiAgaXNSZWFkT25seSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaGFzQXR0cmlidXRlKCdyZWFkb25seScpXG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGNhbGxiYWNrRnVuY3Rpb246IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEhhbmRsZXIuc2V0T25Nb2RlbENoYW5nZShjYWxsYmFja0Z1bmN0aW9uKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGNhbGxiYWNrRnVuY3Rpb246IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEhhbmRsZXIuc2V0T25Nb2RlbFRvdWNoZWQoY2FsbGJhY2tGdW5jdGlvbik7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRIYW5kbGVyLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxufVxuIl19