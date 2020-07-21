var NgxCurrencyModule_1;
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskDirective } from "./currency-mask.directive";
import { CURRENCY_MASK_CONFIG } from "./currency-mask.config";
let NgxCurrencyModule = NgxCurrencyModule_1 = class NgxCurrencyModule {
    static forRoot(config) {
        return {
            ngModule: NgxCurrencyModule_1,
            providers: [{
                    provide: CURRENCY_MASK_CONFIG,
                    useValue: config,
                }]
        };
    }
};
NgxCurrencyModule = NgxCurrencyModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule, FormsModule],
        declarations: [CurrencyMaskDirective],
        exports: [CurrencyMaskDirective]
    })
], NgxCurrencyModule);
export { NgxCurrencyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3ktbWFzay5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY3VycmVuY3kvIiwic291cmNlcyI6WyJzcmMvY3VycmVuY3ktbWFzay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxvQkFBb0IsRUFBcUIsTUFBTSx3QkFBd0IsQ0FBQztBQU9oRixJQUFhLGlCQUFpQix5QkFBOUIsTUFBYSxpQkFBaUI7SUFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUEwQjtRQUN2QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFpQjtZQUMzQixTQUFTLEVBQUUsQ0FBQztvQkFDVixPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixRQUFRLEVBQUUsTUFBTTtpQkFDakIsQ0FBQztTQUNILENBQUE7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQVZZLGlCQUFpQjtJQUw3QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBRSxZQUFZLEVBQUUsV0FBVyxDQUFFO1FBQ3RDLFlBQVksRUFBRSxDQUFFLHFCQUFxQixDQUFFO1FBQ3ZDLE9BQU8sRUFBRSxDQUFFLHFCQUFxQixDQUFFO0tBQ25DLENBQUM7R0FDVyxpQkFBaUIsQ0FVN0I7U0FWWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtDdXJyZW5jeU1hc2tEaXJlY3RpdmV9IGZyb20gXCIuL2N1cnJlbmN5LW1hc2suZGlyZWN0aXZlXCI7XG5pbXBvcnQge0NVUlJFTkNZX01BU0tfQ09ORklHLCBDdXJyZW5jeU1hc2tDb25maWd9IGZyb20gXCIuL2N1cnJlbmN5LW1hc2suY29uZmlnXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSBdLFxuICBkZWNsYXJhdGlvbnM6IFsgQ3VycmVuY3lNYXNrRGlyZWN0aXZlIF0sXG4gIGV4cG9ydHM6IFsgQ3VycmVuY3lNYXNrRGlyZWN0aXZlIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4Q3VycmVuY3lNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IEN1cnJlbmN5TWFza0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4Q3VycmVuY3lNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7XG4gICAgICAgIHByb3ZpZGU6IENVUlJFTkNZX01BU0tfQ09ORklHLFxuICAgICAgICB1c2VWYWx1ZTogY29uZmlnLFxuICAgICAgfV1cbiAgICB9XG4gIH1cbn1cbiJdfQ==