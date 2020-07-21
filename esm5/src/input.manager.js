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
export { InputManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jdXJyZW5jeS8iLCJzb3VyY2VzIjpbInNyYy9pbnB1dC5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBSUksc0JBQW9CLGdCQUFxQjtRQUFyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQUs7SUFDekMsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxRQUFnQjtRQUN4QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRTtZQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMvRDthQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRTtZQUM5QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN6QyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMzQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRUQsMkNBQW9CLEdBQXBCLFVBQXFCLFdBQW1CLEVBQUUsU0FBaUIsRUFBRSxjQUFzQjtRQUMvRSxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUM1QixJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQ25DLGNBQWMsR0FBRyxjQUFjLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJ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Q0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7NEJBQ3hELFlBQVksR0FBRyxNQUFNLENBQUM7eUJBQ3pCOzZCQUFNOzRCQUNILFlBQVksR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ3pELFlBQVksSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt5QkFDakY7cUJBQ0o7aUJBQ0o7YUFDSjtZQUVELE9BQU87Z0JBQ0gsY0FBYyxFQUFFLGNBQWM7Z0JBQzlCLFlBQVksRUFBRSxZQUFZO2FBQzdCLENBQUM7UUFDTixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFRO2FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1FBQ2hFLENBQUM7YUFFRCxVQUFhLEtBQWE7WUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFFN0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3ZDO1FBQ0wsQ0FBQzs7O09BUkE7SUFVRCxzQkFBSSx3Q0FBYzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQTdGRCxJQTZGQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBJbnB1dE1hbmFnZXIge1xuXG4gICAgcHJpdmF0ZSBfc3RvcmVkUmF3VmFsdWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHRtbElucHV0RWxlbWVudDogYW55KSB7XG4gICAgfVxuXG4gICAgc2V0Q3Vyc29yQXQocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5odG1sSW5wdXRFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmh0bWxJbnB1dEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbElucHV0RWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShwb3NpdGlvbiwgcG9zaXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaHRtbElucHV0RWxlbWVudC5jcmVhdGVUZXh0UmFuZ2UpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0UmFuZ2UgPSB0aGlzLmh0bWxJbnB1dEVsZW1lbnQuY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgICAgICAgICB0ZXh0UmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgICAgICAgICB0ZXh0UmFuZ2UubW92ZUVuZChcImNoYXJhY3RlclwiLCBwb3NpdGlvbik7XG4gICAgICAgICAgICB0ZXh0UmFuZ2UubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgIHRleHRSYW5nZS5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlQW5kQ3Vyc29yKG5ld1Jhd1ZhbHVlOiBzdHJpbmcsIG9sZExlbmd0aDogbnVtYmVyLCBzZWxlY3Rpb25TdGFydDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmF3VmFsdWUgPSBuZXdSYXdWYWx1ZTtcbiAgICAgICAgbGV0IG5ld0xlbmd0aCA9IG5ld1Jhd1ZhbHVlLmxlbmd0aDtcbiAgICAgICAgc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydCAtIChvbGRMZW5ndGggLSBuZXdMZW5ndGgpO1xuICAgICAgICB0aGlzLnNldEN1cnNvckF0KHNlbGVjdGlvblN0YXJ0KTtcbiAgICB9XG5cbiAgICBnZXQgY2FuSW5wdXRNb3JlTnVtYmVycygpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IG9ubHlOdW1iZXJzID0gdGhpcy5yYXdWYWx1ZS5yZXBsYWNlKC9bXjAtOVxcdTA2NjAtXFx1MDY2OVxcdTA2RjAtXFx1MDZGOV0vZywgXCJcIik7XG4gICAgICAgIGxldCBoYXZlbnRSZWFjaGVkTWF4TGVuZ3RoID0gIShvbmx5TnVtYmVycy5sZW5ndGggPj0gdGhpcy5odG1sSW5wdXRFbGVtZW50Lm1heExlbmd0aCAmJiB0aGlzLmh0bWxJbnB1dEVsZW1lbnQubWF4TGVuZ3RoID49IDApO1xuICAgICAgICBsZXQgc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmlucHV0U2VsZWN0aW9uLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICBsZXQgc2VsZWN0aW9uRW5kID0gdGhpcy5pbnB1dFNlbGVjdGlvbi5zZWxlY3Rpb25FbmQ7XG4gICAgICAgIGxldCBoYXZlTnVtYmVyU2VsZWN0ZWQgPSAhIShzZWxlY3Rpb25TdGFydCAhPSBzZWxlY3Rpb25FbmQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHRtbElucHV0RWxlbWVudC52YWx1ZS5zdWJzdHJpbmcoc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCkubWF0Y2goL1teMC05XFx1MDY2MC1cXHUwNjY5XFx1MDZGMC1cXHUwNkY5XS8pKTtcbiAgICAgICAgbGV0IHN0YXJ0V2l0aFplcm8gPSAodGhpcy5odG1sSW5wdXRFbGVtZW50LnZhbHVlLnN1YnN0cmluZygwLCAxKSA9PSBcIjBcIik7XG4gICAgICAgIHJldHVybiBoYXZlbnRSZWFjaGVkTWF4TGVuZ3RoIHx8IGhhdmVOdW1iZXJTZWxlY3RlZCB8fCBzdGFydFdpdGhaZXJvO1xuICAgIH1cblxuICAgIGdldCBpbnB1dFNlbGVjdGlvbigpOiBhbnkge1xuICAgICAgICBsZXQgc2VsZWN0aW9uU3RhcnQgPSAwO1xuICAgICAgICBsZXQgc2VsZWN0aW9uRW5kID0gMDtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaHRtbElucHV0RWxlbWVudC5zZWxlY3Rpb25TdGFydCA9PSBcIm51bWJlclwiICYmIHR5cGVvZiB0aGlzLmh0bWxJbnB1dEVsZW1lbnQuc2VsZWN0aW9uRW5kID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gdGhpcy5odG1sSW5wdXRFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgc2VsZWN0aW9uRW5kID0gdGhpcy5odG1sSW5wdXRFbGVtZW50LnNlbGVjdGlvbkVuZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCByYW5nZSA9ICg8YW55PmRvY3VtZW50KS5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcblxuICAgICAgICAgICAgaWYgKHJhbmdlICYmIHJhbmdlLnBhcmVudEVsZW1lbnQoKSA9PSB0aGlzLmh0bWxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgbGVuZ2h0ID0gdGhpcy5odG1sSW5wdXRFbGVtZW50LnZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBsZXQgbm9ybWFsaXplZFZhbHVlID0gdGhpcy5odG1sSW5wdXRFbGVtZW50LnZhbHVlLnJlcGxhY2UoL1xcclxcbi9nLCBcIlxcblwiKTtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRSYW5nZSA9IHRoaXMuaHRtbElucHV0RWxlbWVudC5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICAgICAgICAgICAgICBzdGFydFJhbmdlLm1vdmVUb0Jvb2ttYXJrKHJhbmdlLmdldEJvb2ttYXJrKCkpO1xuICAgICAgICAgICAgICAgIGxldCBlbmRSYW5nZSA9IHRoaXMuaHRtbElucHV0RWxlbWVudC5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICAgICAgICAgICAgICBlbmRSYW5nZS5jb2xsYXBzZShmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRSYW5nZS5jb21wYXJlRW5kUG9pbnRzKFwiU3RhcnRUb0VuZFwiLCBlbmRSYW5nZSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvbkVuZCA9IGxlbmdodDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TdGFydCA9IC1zdGFydFJhbmdlLm1vdmVTdGFydChcImNoYXJhY3RlclwiLCAtbGVuZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU3RhcnQgKz0gbm9ybWFsaXplZFZhbHVlLnNsaWNlKDAsIHNlbGVjdGlvblN0YXJ0KS5zcGxpdChcIlxcblwiKS5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydFJhbmdlLmNvbXBhcmVFbmRQb2ludHMoXCJFbmRUb0VuZFwiLCBlbmRSYW5nZSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uRW5kID0gbGVuZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uRW5kID0gLXN0YXJ0UmFuZ2UubW92ZUVuZChcImNoYXJhY3RlclwiLCAtbGVuZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkVuZCArPSBub3JtYWxpemVkVmFsdWUuc2xpY2UoMCwgc2VsZWN0aW9uRW5kKS5zcGxpdChcIlxcblwiKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdGlvblN0YXJ0OiBzZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgIHNlbGVjdGlvbkVuZDogc2VsZWN0aW9uRW5kXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IHJhd1ZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0bWxJbnB1dEVsZW1lbnQgJiYgdGhpcy5odG1sSW5wdXRFbGVtZW50LnZhbHVlO1xuICAgIH1cblxuICAgIHNldCByYXdWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3N0b3JlZFJhd1ZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMuaHRtbElucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5odG1sSW5wdXRFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc3RvcmVkUmF3VmFsdWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlZFJhd1ZhbHVlO1xuICAgIH1cbn1cbiJdfQ==