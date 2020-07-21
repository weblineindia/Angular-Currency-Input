(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-currency', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory(global['ngx-currency'] = {}, global.ng.core, global.ng.forms, global.ng.common));
}(this, (function (exports, core, forms, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    (function (CurrencyMaskInputMode) {
        CurrencyMaskInputMode[CurrencyMaskInputMode["FINANCIAL"] = 0] = "FINANCIAL";
        CurrencyMaskInputMode[CurrencyMaskInputMode["NATURAL"] = 1] = "NATURAL";
    })(exports.CurrencyMaskInputMode || (exports.CurrencyMaskInputMode = {}));
    var CURRENCY_MASK_CONFIG = new core.InjectionToken("currency.mask.config");

    var InputManager = /** @class */ (function () {
        function InputManager(htmlInputElement) {
            this.htmlInputElement = htmlInputElement;
        }
        InputManager.prototype.setCursorAt = function (position) {
            if (this.htmlInputElement.setSelectionRange) {
                this.htmlInputElement.focus();
                this.htmlInputElement.setSelectionRange(position, position);
            }
            else if (this.htmlInputElement.createTextRange) {
                var textRange = this.htmlInputElement.createTextRange();
                textRange.collapse(true);
                textRange.moveEnd("character", position);
                textRange.moveStart("character", position);
                textRange.select();
            }
        };
        InputManager.prototype.updateValueAndCursor = function (newRawValue, oldLength, selectionStart) {
            this.rawValue = newRawValue;
            var newLength = newRawValue.length;
            selectionStart = selectionStart - (oldLength - newLength);
            this.setCursorAt(selectionStart);
        };
        Object.defineProperty(InputManager.prototype, "canInputMoreNumbers", {
            get: function () {
                var onlyNumbers = this.rawValue.replace(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g, "");
                var haventReachedMaxLength = !(onlyNumbers.length >= this.htmlInputElement.maxLength && this.htmlInputElement.maxLength >= 0);
                var selectionStart = this.inputSelection.selectionStart;
                var selectionEnd = this.inputSelection.selectionEnd;
                var haveNumberSelected = !!(selectionStart != selectionEnd &&
                    this.htmlInputElement.value.substring(selectionStart, selectionEnd).match(/[^0-9\u0660-\u0669\u06F0-\u06F9]/));
                var startWithZero = (this.htmlInputElement.value.substring(0, 1) == "0");
                return haventReachedMaxLength || haveNumberSelected || startWithZero;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputManager.prototype, "inputSelection", {
            get: function () {
                var selectionStart = 0;
                var selectionEnd = 0;
                if (typeof this.htmlInputElement.selectionStart == "number" && typeof this.htmlInputElement.selectionEnd == "number") {
                    selectionStart = this.htmlInputElement.selectionStart;
                    selectionEnd = this.htmlInputElement.selectionEnd;
                }
                else {
                    var range = document.selection.createRange();
                    if (range && range.parentElement() == this.htmlInputElement) {
                        var lenght = this.htmlInputElement.value.length;
                        var normalizedValue = this.htmlInputElement.value.replace(/\r\n/g, "\n");
                        var startRange = this.htmlInputElement.createTextRange();
                        startRange.moveToBookmark(range.getBookmark());
                        var endRange = this.htmlInputElement.createTextRange();
                        endRange.collapse(false);
                        if (startRange.compareEndPoints("StartToEnd", endRange) > -1) {
                            selectionStart = selectionEnd = lenght;
                        }
                        else {
                            selectionStart = -startRange.moveStart("character", -lenght);
                            selectionStart += normalizedValue.slice(0, selectionStart).split("\n").length - 1;
                            if (startRange.compareEndPoints("EndToEnd", endRange) > -1) {
                                selectionEnd = lenght;
                            }
                            else {
                                selectionEnd = -startRange.moveEnd("character", -lenght);
                                selectionEnd += normalizedValue.slice(0, selectionEnd).split("\n").length - 1;
                            }
                        }
                    }
                }
                return {
                    selectionStart: selectionStart,
                    selectionEnd: selectionEnd
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputManager.prototype, "rawValue", {
            get: function () {
                return this.htmlInputElement && this.htmlInputElement.value;
            },
            set: function (value) {
                this._storedRawValue = value;
                if (this.htmlInputElement) {
                    this.htmlInputElement.value = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputManager.prototype, "storedRawValue", {
            get: function () {
                return this._storedRawValue;
            },
            enumerable: true,
            configurable: true
        });
        return InputManager;
    }());

    var InputService = /** @class */ (function () {
        function InputService(htmlInputElement, options) {
            this.htmlInputElement = htmlInputElement;
            this.options = options;
            this.SINGLE_DIGIT_REGEX = new RegExp(/^[0-9\u0660-\u0669\u06F0-\u06F9]$/);
            this.ONLY_NUMBERS_REGEX = new RegExp(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g);
            this.PER_AR_NUMBER = new Map();
            this.inputManager = new InputManager(htmlInputElement);
            this.initialize();
        }
        InputService.prototype.initialize = function () {
            this.PER_AR_NUMBER.set("\u06F0", "0");
            this.PER_AR_NUMBER.set("\u06F1", "1");
            this.PER_AR_NUMBER.set("\u06F2", "2");
            this.PER_AR_NUMBER.set("\u06F3", "3");
            this.PER_AR_NUMBER.set("\u06F4", "4");
            this.PER_AR_NUMBER.set("\u06F5", "5");
            this.PER_AR_NUMBER.set("\u06F6", "6");
            this.PER_AR_NUMBER.set("\u06F7", "7");
            this.PER_AR_NUMBER.set("\u06F8", "8");
            this.PER_AR_NUMBER.set("\u06F9", "9");
            this.PER_AR_NUMBER.set("\u0660", "0");
            this.PER_AR_NUMBER.set("\u0661", "1");
            this.PER_AR_NUMBER.set("\u0662", "2");
            this.PER_AR_NUMBER.set("\u0663", "3");
            this.PER_AR_NUMBER.set("\u0664", "4");
            this.PER_AR_NUMBER.set("\u0665", "5");
            this.PER_AR_NUMBER.set("\u0666", "6");
            this.PER_AR_NUMBER.set("\u0667", "7");
            this.PER_AR_NUMBER.set("\u0668", "8");
            this.PER_AR_NUMBER.set("\u0669", "9");
        };
        InputService.prototype.addNumber = function (keyCode) {
            var _a = this.options, decimal = _a.decimal, precision = _a.precision, inputMode = _a.inputMode;
            var keyChar = String.fromCharCode(keyCode);
            var isDecimalChar = keyChar === this.options.decimal;
            if (!this.rawValue) {
                this.rawValue = this.applyMask(false, keyChar);
                var selectionStart = undefined;
                if (inputMode === exports.CurrencyMaskInputMode.NATURAL && precision > 0) {
                    selectionStart = this.rawValue.indexOf(decimal);
                    if (isDecimalChar) {
                        selectionStart++;
                    }
                }
                this.updateFieldValue(selectionStart);
            }
            else {
                var selectionStart = this.inputSelection.selectionStart;
                var selectionEnd = this.inputSelection.selectionEnd;
                var rawValueStart = this.rawValue.substring(0, selectionStart);
                var rawValueEnd = this.rawValue.substring(selectionEnd, this.rawValue.length);
                // In natural mode, replace decimals instead of shifting them.
                var inDecimalPortion = rawValueStart.indexOf(decimal) !== -1;
                if (inputMode === exports.CurrencyMaskInputMode.NATURAL && inDecimalPortion && selectionStart === selectionEnd) {
                    rawValueEnd = rawValueEnd.substring(1);
                }
                var newValue = rawValueStart + keyChar + rawValueEnd;
                var nextSelectionStart = selectionStart + 1;
                var isDecimalOrThousands = isDecimalChar || keyChar === this.options.thousands;
                if (isDecimalOrThousands && keyChar === rawValueEnd[0]) {
                    // If the cursor is just before the decimal or thousands separator and the user types the
                    // decimal or thousands separator, move the cursor past it.
                    nextSelectionStart++;
                }
                else if (!this.SINGLE_DIGIT_REGEX.test(keyChar)) {
                    // Ignore other non-numbers.
                    return;
                }
                this.rawValue = newValue;
                this.updateFieldValue(nextSelectionStart);
            }
        };
        InputService.prototype.applyMask = function (isNumber, rawValue, disablePadAndTrim) {
            if (disablePadAndTrim === void 0) { disablePadAndTrim = false; }
            var _a = this.options, allowNegative = _a.allowNegative, decimal = _a.decimal, precision = _a.precision, prefix = _a.prefix, suffix = _a.suffix, thousands = _a.thousands, min = _a.min, max = _a.max, inputMode = _a.inputMode;
            rawValue = isNumber ? new Number(rawValue).toFixed(precision) : rawValue;
            var onlyNumbers = rawValue.replace(this.ONLY_NUMBERS_REGEX, "");
            if (!onlyNumbers && rawValue !== decimal) {
                return "";
            }
            if (inputMode === exports.CurrencyMaskInputMode.NATURAL && !isNumber && !disablePadAndTrim) {
                rawValue = this.padOrTrimPrecision(rawValue);
                onlyNumbers = rawValue.replace(this.ONLY_NUMBERS_REGEX, "");
            }
            var integerPart = onlyNumbers.slice(0, onlyNumbers.length - precision)
                .replace(/^\u0660*/g, "")
                .replace(/^\u06F0*/g, "")
                .replace(/^0*/g, "");
            if (integerPart == "") {
                integerPart = "0";
            }
            var integerValue = parseInt(integerPart);
            integerPart = integerPart.replace(/\B(?=([0-9\u0660-\u0669\u06F0-\u06F9]{3})+(?![0-9\u0660-\u0669\u06F0-\u06F9]))/g, thousands);
            if (thousands && integerPart.startsWith(thousands)) {
                integerPart = integerPart.substring(1);
            }
            var newRawValue = integerPart;
            var decimalPart = onlyNumbers.slice(onlyNumbers.length - precision);
            var decimalValue = parseInt(decimalPart) || 0;
            var isNegative = rawValue.indexOf("-") > -1;
            // Ensure max is at least as large as min.
            max = (this.isNullOrUndefined(max) || this.isNullOrUndefined(min)) ? max : Math.max(max, min);
            // Restrict to the min and max values.
            var newValue = integerValue + (decimalValue / 100);
            newValue = isNegative ? -newValue : newValue;
            if (!this.isNullOrUndefined(max) && newValue > max) {
                return this.applyMask(true, max + '');
            }
            else if (!this.isNullOrUndefined(min) && newValue < min) {
                return this.applyMask(true, min + '');
            }
            if (precision > 0) {
                if (newRawValue == "0" && decimalPart.length < precision) {
                    newRawValue += decimal + "0".repeat(precision - 1) + decimalPart;
                }
                else {
                    newRawValue += decimal + decimalPart;
                }
            }
            var isZero = newValue == 0;
            var operator = (isNegative && allowNegative && !isZero) ? "-" : "";
            return operator + prefix + newRawValue + suffix;
        };
        InputService.prototype.padOrTrimPrecision = function (rawValue) {
            var _a = this.options, decimal = _a.decimal, precision = _a.precision;
            var decimalIndex = rawValue.lastIndexOf(decimal);
            if (decimalIndex === -1) {
                decimalIndex = rawValue.length;
                rawValue += decimal;
            }
            var decimalPortion = rawValue.substring(decimalIndex).replace(this.ONLY_NUMBERS_REGEX, "");
            var actualPrecision = decimalPortion.length;
            if (actualPrecision < precision) {
                for (var i = actualPrecision; i < precision; i++) {
                    decimalPortion += '0';
                }
            }
            else if (actualPrecision > precision) {
                decimalPortion = decimalPortion.substring(0, decimalPortion.length + precision - actualPrecision);
            }
            return rawValue.substring(0, decimalIndex) + decimal + decimalPortion;
        };
        InputService.prototype.clearMask = function (rawValue) {
            if (this.isNullable() && rawValue === "")
                return null;
            var value = (rawValue || "0").replace(this.options.prefix, "").replace(this.options.suffix, "");
            if (this.options.thousands) {
                value = value.replace(new RegExp("\\" + this.options.thousands, "g"), "");
            }
            if (this.options.decimal) {
                value = value.replace(this.options.decimal, ".");
            }
            this.PER_AR_NUMBER.forEach(function (val, key) {
                var re = new RegExp(key, "g");
                value = value.replace(re, val);
            });
            return parseFloat(value);
        };
        InputService.prototype.changeToNegative = function () {
            if (this.options.allowNegative && this.rawValue != "" && this.rawValue.charAt(0) != "-" && this.value != 0) {
                // Apply the mask to ensure the min and max values are enforced.
                this.rawValue = this.applyMask(false, "-" + this.rawValue);
            }
        };
        InputService.prototype.changeToPositive = function () {
            // Apply the mask to ensure the min and max values are enforced.
            this.rawValue = this.applyMask(false, this.rawValue.replace("-", ""));
        };
        InputService.prototype.removeNumber = function (keyCode) {
            var _a = this.options, decimal = _a.decimal, thousands = _a.thousands, prefix = _a.prefix, suffix = _a.suffix, inputMode = _a.inputMode;
            if (this.isNullable() && this.value == 0) {
                this.rawValue = null;
                return;
            }
            var selectionEnd = this.inputSelection.selectionEnd;
            var selectionStart = this.inputSelection.selectionStart;
            var suffixStart = this.rawValue.length - suffix.length;
            selectionEnd = Math.min(suffixStart, Math.max(selectionEnd, prefix.length));
            selectionStart = Math.min(suffixStart, Math.max(selectionStart, prefix.length));
            // Check if selection was entirely in the prefix or suffix. 
            if (selectionStart === selectionEnd &&
                this.inputSelection.selectionStart !== this.inputSelection.selectionEnd) {
                this.updateFieldValue(selectionStart);
                return;
            }
            var decimalIndex = this.rawValue.indexOf(decimal);
            if (decimalIndex === -1) {
                decimalIndex = this.rawValue.length;
            }
            var shiftSelection = 0;
            var insertChars = '';
            if (selectionEnd === selectionStart) {
                if (keyCode == 8) {
                    if (selectionStart <= prefix.length) {
                        return;
                    }
                    selectionStart--;
                    // If previous char isn't a number, go back one more.
                    if (!this.rawValue.substr(selectionStart, 1).match(/\d/)) {
                        selectionStart--;
                    }
                    // In natural mode, jump backwards when in decimal portion of number.
                    if (inputMode === exports.CurrencyMaskInputMode.NATURAL && decimalIndex < selectionEnd) {
                        shiftSelection = -1;
                    }
                }
                else if (keyCode == 46 || keyCode == 63272) {
                    if (selectionStart === suffixStart) {
                        return;
                    }
                    selectionEnd++;
                    // If next char isn't a number, go one more.
                    if (!this.rawValue.substr(selectionStart, 1).match(/\d/)) {
                        selectionStart++;
                        selectionEnd++;
                    }
                }
            }
            // In natural mode, replace decimals with 0s.
            if (inputMode === exports.CurrencyMaskInputMode.NATURAL && selectionStart > decimalIndex) {
                var replacedDecimalCount = selectionEnd - selectionStart;
                for (var i = 0; i < replacedDecimalCount; i++) {
                    insertChars += '0';
                }
            }
            var selectionFromEnd = this.rawValue.length - selectionEnd;
            this.rawValue = this.rawValue.substring(0, selectionStart) + insertChars + this.rawValue.substring(selectionEnd);
            // Remove leading thousand separator from raw value.
            var startChar = this.rawValue.substr(prefix.length, 1);
            if (startChar === thousands) {
                this.rawValue = this.rawValue.substring(0, prefix.length) + this.rawValue.substring(prefix.length + 1);
                selectionFromEnd = Math.min(selectionFromEnd, this.rawValue.length - prefix.length);
            }
            this.updateFieldValue(this.rawValue.length - selectionFromEnd + shiftSelection, true);
        };
        InputService.prototype.updateFieldValue = function (selectionStart, disablePadAndTrim) {
            if (disablePadAndTrim === void 0) { disablePadAndTrim = false; }
            var newRawValue = this.applyMask(false, this.rawValue || "", disablePadAndTrim);
            selectionStart = selectionStart == undefined ? this.rawValue.length : selectionStart;
            selectionStart = Math.max(this.options.prefix.length, Math.min(selectionStart, this.rawValue.length - this.options.suffix.length));
            this.inputManager.updateValueAndCursor(newRawValue, this.rawValue.length, selectionStart);
        };
        InputService.prototype.updateOptions = function (options) {
            var value = this.value;
            this.options = options;
            this.value = value;
        };
        InputService.prototype.prefixLength = function () {
            return this.options.prefix.length;
        };
        InputService.prototype.suffixLength = function () {
            return this.options.suffix.length;
        };
        InputService.prototype.isNullable = function () {
            return this.options.nullable;
        };
        Object.defineProperty(InputService.prototype, "canInputMoreNumbers", {
            get: function () {
                return this.inputManager.canInputMoreNumbers;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputService.prototype, "inputSelection", {
            get: function () {
                return this.inputManager.inputSelection;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputService.prototype, "rawValue", {
            get: function () {
                return this.inputManager.rawValue;
            },
            set: function (value) {
                this.inputManager.rawValue = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputService.prototype, "storedRawValue", {
            get: function () {
                return this.inputManager.storedRawValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputService.prototype, "value", {
            get: function () {
                return this.clearMask(this.rawValue);
            },
            set: function (value) {
                this.rawValue = this.applyMask(true, "" + value);
            },
            enumerable: true,
            configurable: true
        });
        InputService.prototype.isNullOrUndefined = function (value) {
            return value === null || value === undefined;
        };
        return InputService;
    }());

    var InputHandler = /** @class */ (function () {
        function InputHandler(htmlInputElement, options) {
            this.inputService = new InputService(htmlInputElement, options);
        }
        InputHandler.prototype.handleCut = function (event) {
            var _this = this;
            setTimeout(function () {
                _this.inputService.updateFieldValue();
                _this.setValue(_this.inputService.value);
                _this.onModelChange(_this.inputService.value);
            }, 0);
        };
        InputHandler.prototype.handleInput = function (event) {
            var keyCode = this.inputService.rawValue.charCodeAt(this.inputService.rawValue.length - 1);
            var rawValueLength = this.inputService.rawValue.length;
            var rawValueSelectionEnd = this.inputService.inputSelection.selectionEnd;
            var storedRawValueLength = this.inputService.storedRawValue.length;
            this.inputService.rawValue = this.inputService.storedRawValue;
            if (rawValueLength != rawValueSelectionEnd || Math.abs(rawValueLength - storedRawValueLength) != 1) {
                this.setCursorPosition(event);
                return;
            }
            if (rawValueLength < storedRawValueLength) {
                this.inputService.removeNumber(8);
            }
            if (rawValueLength > storedRawValueLength) {
                switch (keyCode) {
                    case 43:
                        this.inputService.changeToPositive();
                        break;
                    case 45:
                        this.inputService.changeToNegative();
                        break;
                    default:
                        if (!this.inputService.canInputMoreNumbers) {
                            return;
                        }
                        this.inputService.addNumber(keyCode);
                        break;
                }
            }
            this.setCursorPosition(event);
            this.onModelChange(this.inputService.value);
        };
        InputHandler.prototype.handleKeydown = function (event) {
            var keyCode = event.which || event.charCode || event.keyCode;
            if (keyCode == 8 || keyCode == 46 || keyCode == 63272) {
                event.preventDefault();
                if (this.inputService.inputSelection.selectionStart <= this.inputService.prefixLength() &&
                    this.inputService.inputSelection.selectionEnd >= this.inputService.rawValue.length - this.inputService.suffixLength()) {
                    this.clearValue();
                }
                else {
                    this.inputService.removeNumber(keyCode);
                    this.onModelChange(this.inputService.value);
                }
            }
        };
        InputHandler.prototype.clearValue = function () {
            this.setValue(this.inputService.isNullable() ? null : 0);
            this.onModelChange(this.inputService.value);
        };
        InputHandler.prototype.handleKeypress = function (event) {
            var keyCode = event.which || event.charCode || event.keyCode;
            event.preventDefault();
            if (keyCode === 97 && event.ctrlKey) {
                return;
            }
            switch (keyCode) {
                case undefined:
                case 9:
                case 13:
                    return;
                case 43:
                    this.inputService.changeToPositive();
                    break;
                case 45:
                    this.inputService.changeToNegative();
                    break;
                default:
                    if (this.inputService.canInputMoreNumbers) {
                        var selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);
                        if (selectionRangeLength == this.inputService.rawValue.length) {
                            this.setValue(null);
                        }
                        this.inputService.addNumber(keyCode);
                    }
                    break;
            }
            this.onModelChange(this.inputService.value);
        };
        InputHandler.prototype.handlePaste = function (event) {
            var _this = this;
            setTimeout(function () {
                _this.inputService.updateFieldValue();
                _this.setValue(_this.inputService.value);
                _this.onModelChange(_this.inputService.value);
            }, 1);
        };
        InputHandler.prototype.updateOptions = function (options) {
            this.inputService.updateOptions(options);
        };
        InputHandler.prototype.getOnModelChange = function () {
            return this.onModelChange;
        };
        InputHandler.prototype.setOnModelChange = function (callbackFunction) {
            this.onModelChange = callbackFunction;
        };
        InputHandler.prototype.getOnModelTouched = function () {
            return this.onModelTouched;
        };
        InputHandler.prototype.setOnModelTouched = function (callbackFunction) {
            this.onModelTouched = callbackFunction;
        };
        InputHandler.prototype.setValue = function (value) {
            this.inputService.value = value;
        };
        InputHandler.prototype.setCursorPosition = function (event) {
            setTimeout(function () {
                event.target.setSelectionRange(event.target.value.length, event.target.value.length);
            }, 0);
        };
        return InputHandler;
    }());

    var CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return CurrencyMaskDirective; }),
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
                inputMode: exports.CurrencyMaskInputMode.FINANCIAL
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
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [CURRENCY_MASK_CONFIG,] }] },
            { type: core.ElementRef },
            { type: core.KeyValueDiffers }
        ]; };
        __decorate([
            core.Input()
        ], CurrencyMaskDirective.prototype, "options", void 0);
        __decorate([
            core.HostListener("blur", ["$event"])
        ], CurrencyMaskDirective.prototype, "handleBlur", null);
        __decorate([
            core.HostListener("cut", ["$event"])
        ], CurrencyMaskDirective.prototype, "handleCut", null);
        __decorate([
            core.HostListener("input", ["$event"])
        ], CurrencyMaskDirective.prototype, "handleInput", null);
        __decorate([
            core.HostListener("keydown", ["$event"])
        ], CurrencyMaskDirective.prototype, "handleKeydown", null);
        __decorate([
            core.HostListener("keypress", ["$event"])
        ], CurrencyMaskDirective.prototype, "handleKeypress", null);
        __decorate([
            core.HostListener("paste", ["$event"])
        ], CurrencyMaskDirective.prototype, "handlePaste", null);
        __decorate([
            core.HostListener("drop", ["$event"])
        ], CurrencyMaskDirective.prototype, "handleDrop", null);
        CurrencyMaskDirective = __decorate([
            core.Directive({
                selector: "[currencyMask]",
                providers: [CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR]
            }),
            __param(0, core.Optional()), __param(0, core.Inject(CURRENCY_MASK_CONFIG))
        ], CurrencyMaskDirective);
        return CurrencyMaskDirective;
    }());

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
        NgxCurrencyModule = NgxCurrencyModule_1 = __decorate([
            core.NgModule({
                imports: [common.CommonModule, forms.FormsModule],
                declarations: [CurrencyMaskDirective],
                exports: [CurrencyMaskDirective]
            })
        ], NgxCurrencyModule);
        return NgxCurrencyModule;
    }());

    exports.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR = CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR;
    exports.CurrencyMaskDirective = CurrencyMaskDirective;
    exports.NgxCurrencyModule = NgxCurrencyModule;
    exports.ɵa = CURRENCY_MASK_CONFIG;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-currency.umd.js.map
