import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskDirective } from "./currency-mask.directive";
import { CURRENCY_MASK_CONFIG } from "./currency-mask.config";
var NgxCurrencyModule = /** @class */ (function () {
    function NgxCurrencyModule() {
    }
    NgxCurrencyModule_1 = NgxCurrencyModule;
    NgxCurrencyModule.forRoot = function (config) {
        return {
            ngModule: NgxCurrencyModule_1,
            providers: [{
                    provide: CURRENCY_MASK_CONFIG,
                    useValue: config,
                }]
        };
    };
    var NgxCurrencyModule_1;
    NgxCurrencyModule = NgxCurrencyModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule, FormsModule],
            declarations: [CurrencyMaskDirective],
            exports: [CurrencyMaskDirective]
        })
    ], NgxCurrencyModule);
    return NgxCurrencyModule;
}());
export { NgxCurrencyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3ktbWFzay5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY3VycmVuY3kvIiwic291cmNlcyI6WyJzcmMvY3VycmVuY3ktbWFzay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBc0IsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFDLG9CQUFvQixFQUFxQixNQUFNLHdCQUF3QixDQUFDO0FBT2hGO0lBQUE7SUFVQSxDQUFDOzBCQVZZLGlCQUFpQjtJQUNyQix5QkFBTyxHQUFkLFVBQWUsTUFBMEI7UUFDdkMsT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBaUI7WUFDM0IsU0FBUyxFQUFFLENBQUM7b0JBQ1YsT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsUUFBUSxFQUFFLE1BQU07aUJBQ2pCLENBQUM7U0FDSCxDQUFBO0lBQ0gsQ0FBQzs7SUFUVSxpQkFBaUI7UUFMN0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBRTtZQUN0QyxZQUFZLEVBQUUsQ0FBRSxxQkFBcUIsQ0FBRTtZQUN2QyxPQUFPLEVBQUUsQ0FBRSxxQkFBcUIsQ0FBRTtTQUNuQyxDQUFDO09BQ1csaUJBQWlCLENBVTdCO0lBQUQsd0JBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtDdXJyZW5jeU1hc2tEaXJlY3RpdmV9IGZyb20gXCIuL2N1cnJlbmN5LW1hc2suZGlyZWN0aXZlXCI7XG5pbXBvcnQge0NVUlJFTkNZX01BU0tfQ09ORklHLCBDdXJyZW5jeU1hc2tDb25maWd9IGZyb20gXCIuL2N1cnJlbmN5LW1hc2suY29uZmlnXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSBdLFxuICBkZWNsYXJhdGlvbnM6IFsgQ3VycmVuY3lNYXNrRGlyZWN0aXZlIF0sXG4gIGV4cG9ydHM6IFsgQ3VycmVuY3lNYXNrRGlyZWN0aXZlIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4Q3VycmVuY3lNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IEN1cnJlbmN5TWFza0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4Q3VycmVuY3lNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7XG4gICAgICAgIHByb3ZpZGU6IENVUlJFTkNZX01BU0tfQ09ORklHLFxuICAgICAgICB1c2VWYWx1ZTogY29uZmlnLFxuICAgICAgfV1cbiAgICB9XG4gIH1cbn1cbiJdfQ==