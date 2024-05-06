import { NgModule } from "@angular/core";
import { AngularWeblineindiaCurrencyInputComponent } from "./angular-weblineindia-currency-input.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NumbersOnlyDirective } from "./numbersOnly.directive";
import * as i0 from "@angular/core";
export class AngularWeblineindiaCurrencyInputModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci13ZWJsaW5laW5kaWEtY3VycmVuY3ktaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci13ZWJsaW5laW5kaWEtY3VycmVuY3ktaW5wdXQvc3JjL2xpYi9hbmd1bGFyLXdlYmxpbmVpbmRpYS1jdXJyZW5jeS1pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBVS9ELE1BQU0sT0FBTyxzQ0FBc0M7K0dBQXRDLHNDQUFzQztnSEFBdEMsc0NBQXNDLGlCQU4vQyx5Q0FBeUM7WUFDekMsb0JBQW9CLGFBRVosbUJBQW1CLEVBQUUsWUFBWSxhQUNqQyx5Q0FBeUM7Z0hBRXhDLHNDQUFzQyxZQUh2QyxtQkFBbUIsRUFBRSxZQUFZOzs0RkFHaEMsc0NBQXNDO2tCQVJsRCxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix5Q0FBeUM7d0JBQ3pDLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDO29CQUM1QyxPQUFPLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztpQkFDckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFuZ3VsYXJXZWJsaW5laW5kaWFDdXJyZW5jeUlucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4vYW5ndWxhci13ZWJsaW5laW5kaWEtY3VycmVuY3ktaW5wdXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOdW1iZXJzT25seURpcmVjdGl2ZSB9IGZyb20gXCIuL251bWJlcnNPbmx5LmRpcmVjdGl2ZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFuZ3VsYXJXZWJsaW5laW5kaWFDdXJyZW5jeUlucHV0Q29tcG9uZW50LFxyXG4gICAgTnVtYmVyc09ubHlEaXJlY3RpdmUsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbUmVhY3RpdmVGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlXSxcclxuICBleHBvcnRzOiBbQW5ndWxhcldlYmxpbmVpbmRpYUN1cnJlbmN5SW5wdXRDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhcldlYmxpbmVpbmRpYUN1cnJlbmN5SW5wdXRNb2R1bGUge31cclxuIl19