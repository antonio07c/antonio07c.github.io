(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/ng-bits/fesm5/ng-bits.js":
/*!*****************************************************!*\
  !*** F:/Code/ng-bits/dist/ng-bits/fesm5/ng-bits.js ***!
  \*****************************************************/
/*! exports provided: NgBitsService, NgBitsComponent, NgBitsModule, CardComponent, CardContent, CardTitle, CardSubtitle, CardFooter, TagComponent, ButtonComponent, NoteComponent, DividerComponent, CountComponent, IconContentComponent, ConfirmDirective, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBitsService", function() { return NgBitsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBitsComponent", function() { return NgBitsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBitsModule", function() { return NgBitsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContent", function() { return CardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitle", function() { return CardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSubtitle", function() { return CardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFooter", function() { return CardFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteComponent", function() { return NoteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividerComponent", function() { return DividerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountComponent", function() { return CountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconContentComponent", function() { return IconContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDirective", function() { return ConfirmDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CONTAINER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ConfirmationDialogComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgBitsService = /** @class */ (function () {
    function NgBitsService() {
    }
    NgBitsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgBitsService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgBitsService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function NgBitsService_Factory() { return new NgBitsService(); }, token: NgBitsService, providedIn: "root" });
    return NgBitsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgBitsComponent = /** @class */ (function () {
    function NgBitsComponent() {
    }
    /**
     * @return {?}
     */
    NgBitsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgBitsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'bit-ng-bits',
                    template: "\n    <p>\n      ng-bits works OK!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    NgBitsComponent.ctorParameters = function () { return []; };
    return NgBitsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    /**
     * @return {?}
     */
    CardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'bit-card',
                    template: "<div class=\"card card-box\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n      <ng-content select=\"bit-card-title\"></ng-content>\n    </div>\n    <div class=\"card-subtitle\">\n      <ng-content select=\"bit-card-subtitle\"></ng-content>\n    </div>   \n  </div>\n  <div class=\"card-content\">\n    <ng-content select=\"bit-card-content\"></ng-content>\n  </div>\n  <div class=\"card-footer\">\n     <ng-content select=\"bit-card-footer\"></ng-content>\n  </div>\n</div>",
                    styles: [".card{border:1px solid #e8e8e8;background:#fff;border-radius:4px}.card-box{box-shadow:0 2px 1px -1px rgba(194,194,194,.5),0 1px 1px 0 rgba(194,194,194,.5),1px 1px 3px rgba(194,194,194,.5)}.card-header{padding:15px;border-bottom:1px solid #e8e8e8}.card-title{display:block;font-size:20px;margin-bottom:12px;color:#0f0f0f}.card-subtitle{display:block;font-size:14px;color:rgba(0,0,0,.54);margin-top:-8px}.card-content{margin:0;padding:15px;display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;max-height:70vh;overflow:hidden;overflow-y:scroll}.card-footer{margin:0;text-align:right;display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;border-top:1px solid #e8e8e8;padding:15px}"]
                }] }
    ];
    /** @nocollapse */
    CardComponent.ctorParameters = function () { return []; };
    return CardComponent;
}());
/**
 * * Content ***
 */
var CardContent = /** @class */ (function () {
    function CardContent() {
    }
    CardContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: 'bit-card-content',
                    host: { 'class': 'card-content' }
                },] }
    ];
    return CardContent;
}());
/**
 * * Title ***
 */
var CardTitle = /** @class */ (function () {
    function CardTitle() {
    }
    CardTitle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: 'bit-card-title, [bit-card-title]',
                    host: {
                        'class': 'card-title'
                    }
                },] }
    ];
    return CardTitle;
}());
/**
 * * Subtitle ***
 */
var CardSubtitle = /** @class */ (function () {
    function CardSubtitle() {
    }
    CardSubtitle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: 'bit-card-subtitle, [bit-card-subtitle]',
                    host: {
                        'class': 'card-subtitle'
                    }
                },] }
    ];
    return CardSubtitle;
}());
/**
 * * Footer ***
 */
var CardFooter = /** @class */ (function () {
    function CardFooter() {
    }
    CardFooter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: 'bit-card-footer',
                    host: {
                        'class': 'card-footer'
                    }
                },] }
    ];
    return CardFooter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TagComponent = /** @class */ (function () {
    function TagComponent() {
        this.bitOnClose = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    TagComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    TagComponent.prototype.onCloseClick = /**
     * @return {?}
     */
    function () {
        this.bitOnClose.emit();
    };
    TagComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'bit-tag',
                    template: "<div class=\"tag\" [ngStyle]=\"{'background-color': bitColor}\" [ngClass]=\"{'tag-white': bitColor!=undefined}\">\n  <div class=\"tag-content\">\n    <ng-content>\n    </ng-content>\n  </div>\n  <div *ngIf=\"bitCloseable\" class=\"tag-icon\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z\"/></svg>\n  </div>\n</div>",
                    styles: [".tag{margin:0 5px 5px 0;padding:0 7px;display:inline-block;height:auto;font-size:14px;line-height:22px;white-space:nowrap;background:#f7f7f7;border:1px solid #e8e8e8;border-radius:4px;cursor:default;opacity:1;-webkit-transition:.3s;transition:.3s;color:rgba(0,0,0,.63)}.tag-content{display:inline-block}.tag-icon{padding:0;margin:0 0 0 3px;opacity:.71;width:14px;vertical-align:middle;display:inline-block;height:auto;line-height:14px}.tag-icon:hover{opacity:1}.tag-white{color:#fff;border-color:transparent}"]
                }] }
    ];
    /** @nocollapse */
    TagComponent.ctorParameters = function () { return []; };
    TagComponent.propDecorators = {
        bitCloseable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        bitColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        bitOnClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    return TagComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.bitType = 'default';
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'bit-button',
                    template: "<button [disabled] = \"disabled\" [ngClass] = \"{'button-normal': bitType=='default' || bitType=='danger' || bitType=='warning' || bitType=='success', 'button-border': bitType=='stroked', 'button-danger': bitType=='danger', 'button-warning': bitType=='warning', 'button-success': bitType=='success', 'button-link': bitType=='link', 'button-disabled': disabled}\">\n  <span class=\"button-content\"><ng-content></ng-content></span>  \n</button>",
                    styles: [".button-normal{background-color:#2379e3;color:#fff;box-sizing:border-box;position:relative;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;padding:0 14px;border-radius:4px;overflow:visible;height:32px;font-size:14px;font-weight:500;-webkit-transition:.2s cubic-bezier(.645,.045,.355,1);transition:.2s cubic-bezier(.645,.045,.355,1)}.button-normal:hover{background-color:#3782de}.button-normal.button-disabled{background-color:#e8e8e8;color:#bdbdbd;cursor:default}.button-raised{box-shadow:0 2px 4px 0 rgba(0,0,0,.25)}.button-danger{background-color:#f44336}.button-danger:hover{background-color:#ef5350}.button-warning{background-color:#fbc02d}.button-warning:hover{background-color:#fdd835}.button-success{background-color:#09af00}.button-success:hover{background-color:#41c300}.button-link{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;padding:0 14px;border-radius:4px;overflow:visible;height:32px;color:#2379e3;background:0 0;font-size:14px;font-weight:500;-webkit-transition:.2s cubic-bezier(.645,.045,.355,1);transition:.2s cubic-bezier(.645,.045,.355,1)}.button-link:hover{color:#3782de}.button-link.button-disabled{color:#bdbdbd;cursor:default}.button-border{background-color:transparent;color:#2379e3;box-sizing:border-box;position:relative;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:pointer;outline:0;border:1px solid #2379e3;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;padding:0 14px;border-radius:4px;overflow:visible;height:32px;font-size:14px;font-weight:500;-webkit-transition:.2s cubic-bezier(.645,.045,.355,1);transition:.2s cubic-bezier(.645,.045,.355,1)}.button-border:hover{color:#3782de;border-color:#3782de}.button-border.button-disabled{color:#bdbdbd;border-color:#bdbdbd;cursor:default}.button-content::ng-deep #text:before{margin:0 5px}.button-content{-webkit-box-align:center;align-items:center}"]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        bitType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return ButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NoteComponent = /** @class */ (function () {
    function NoteComponent() {
        this.bitType = "info";
        this.bitShowIcon = true;
    }
    /**
     * @return {?}
     */
    NoteComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NoteComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'bit-note',
                    template: "<div class=\"note-container\" [ngClass]=\"{'note-warning': bitType=='warning', 'note-error': bitType=='error', 'note-success': bitType=='success', 'noIconPadding': !bitShowIcon}\">\n  <div class=\"icon icon-blue\" *ngIf=\"bitType=='info' && bitShowIcon\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\" fill=\"currentColor\"/></svg>\n  </div>\n  <div class=\"icon icon-red\" *ngIf=\"bitType=='error' && bitShowIcon\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\"><path opacity=\".87\" fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z\" fill=\"currentColor\"/></svg>\n  </div>\n  <div class=\"icon icon-yellow\" *ngIf=\"bitType=='warning' && bitShowIcon\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\"><path d=\"M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\" fill=\"currentColor\"/></svg>\n  </div>\n  <div class=\"icon icon-green\" *ngIf=\"bitType=='success' && bitShowIcon\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z\" fill=\"currentColor\"/></svg>\n  </div>  \n  <span class=\"title\">{{bitTitle}}</span>\n  <span class=\"text\"><ng-content></ng-content></span>\n</div>",
                    styles: [".note-container{position:relative;display:block;margin:5px 0;padding:10px 10px 10px 60px;color:rgba(0,0,0,.65);line-height:1.5;border-radius:4px;border:1px solid #d2e2f9;background-color:#e5edf9}.noIconPadding{padding:10px!important}.note-error{border-color:#ffb0b4!important;background-color:#fcc!important}.note-success{background-color:#ddf7cc!important;border:1px solid #c5ec83!important}.note-warning{background-color:#fff4c8!important;border:1px solid #ffe26f!important}.title{font-size:16px;display:block;margin-bottom:5px}.text{font-size:14px;display:block}.icon{position:absolute;top:0;float:left;height:100%;left:16px;font-size:28px;-webkit-box-align:center;align-items:center;display:-webkit-inline-box;display:inline-flex}.icon-blue{color:#578fe4}.icon-red{color:#f56868}.icon-yellow{color:#f1c517}.icon-green{color:#83c511}"]
                }] }
    ];
    /** @nocollapse */
    NoteComponent.ctorParameters = function () { return []; };
    NoteComponent.propDecorators = {
        bitTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        bitType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        bitShowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return NoteComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DividerComponent = /** @class */ (function () {
    function DividerComponent() {
        this.bitOrientation = "left";
    }
    /**
     * @return {?}
     */
    DividerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DividerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'bit-divider',
                    template: "<div class=\"divider\" [ngClass]= \"{'text-right': bitOrientation == 'right', 'text-left': bitOrientation == 'left', 'text-center': bitOrientation == 'center'}\">\n  <span><ng-content></ng-content></span>\n</div>",
                    styles: [".divider{display:table;margin:10px 0;color:#0f0f0f;white-space:nowrap;clear:both;width:100%;min-width:100%;height:1px;font-size:16px}.text-left::after{position:relative;display:table-cell;width:100%;border-top:1px solid #e8e8e8;content:'';top:10px}.text-left span{display:inline-block;padding-right:10px}.divider span:empty{padding:0}.text-right span{display:inline-block;padding-left:10px}.text-right::before{position:relative;display:table-cell;width:100%;border-top:1px solid #e8e8e8;content:'';top:10px}.text-center::after,.text-center::before{position:relative;display:table-cell;width:50%;border-top:1px solid #e8e8e8;content:'';top:10px}.text-center span{display:inline-block;padding:0 10px}"]
                }] }
    ];
    /** @nocollapse */
    DividerComponent.ctorParameters = function () { return []; };
    DividerComponent.propDecorators = {
        bitOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return DividerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CONTAINER_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CONTAINER_DATA');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent(componentData) {
        this.componentData = componentData;
        this.title = "Continue?";
        this.text = "Are you sure you want to continue?";
        this.confirmText = "OK";
        this.cancelText = "Cancel";
        this.onConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ConfirmationDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.componentData.title != undefined) {
            this.title = this.componentData.title;
        }
        if (this.componentData.text != undefined) {
            this.text = this.componentData.text;
        }
        if (this.componentData.confirmText != undefined) {
            this.confirmText = this.componentData.confirmText;
        }
        if (this.componentData.cancelText != undefined) {
            this.cancelText = this.componentData.cancelText;
        }
    };
    /**
     * @return {?}
     */
    ConfirmationDialogComponent.prototype.onOkClick = /**
     * @return {?}
     */
    function () {
        this.onConfirm.next();
    };
    /**
     * @return {?}
     */
    ConfirmationDialogComponent.prototype.onCancelClick = /**
     * @return {?}
     */
    function () {
        this.onCancel.next();
    };
    ConfirmationDialogComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'bit-confirmation-dialog',
                    template: "<div class=\"container\">\n  <div class=\"confirm-title\">{{title}}</div>\n  <div class=\"confirm-text\">{{text}}</div>\n  <div class=\"confirm-footer\">\n    <div class=\"confirm-buttons\">\n      <bit-button bitType=\"link\" (click)=\"onCancelClick()\">{{cancelText}}</bit-button>\n      <bit-button (click)=\"onOkClick()\" cdkFocusInitial>{{confirmText}}</bit-button>\n    </div>\n  </div>\n</div>",
                    styles: [".confirm-footer{font-weight:700;text-align:right;width:100%;padding:0;margin-top:20px}.confirm-buttons{text-align:right;width:100%}.container{background:#fff;display:block;padding:20px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;min-width:300px;height:100%;min-height:inherit;max-height:inherit;box-shadow:0 4px 10px rgba(0,0,0,.2);color:rgba(0,0,0,.87)}.confirm-title{font-size:18px;font-weight:700;margin-bottom:10px}.confirm-text{font-size:15px}::ng-deep .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}::ng-deep .cdk-overlay-dark-backdrop{background:rgba(0,0,0,.4)}::ng-deep .cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;-webkit-transition:opacity .3s cubic-bezier(.25,.8,.25,1);transition:opacity .3s cubic-bezier(.25,.8,.25,1);opacity:0}::ng-deep .cdk-overlay-container{position:fixed;z-index:1000;pointer-events:none;top:0;left:0;height:100%;width:100%}::ng-deep .cdk-global-overlay-wrapper{display:-webkit-box;display:flex;position:absolute;z-index:1000}::ng-deep .cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:-webkit-box;display:flex;max-width:100%;max-height:100%}.cdk-overlay-container,::ng-deep .cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    ConfirmationDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CONTAINER_DATA,] }] }
    ]; };
    ConfirmationDialogComponent.propDecorators = {
        onConfirm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        onCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    return ConfirmationDialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfirmDirective = /** @class */ (function () {
    function ConfirmDirective(overlay, viewContainerRef, injector) {
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.bitEnable = true;
        this.bitCloseOnBackDrop = false;
        this.bitOnConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.bitOnCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ConfirmDirective.prototype.onButtonClick = /**
     * @return {?}
     */
    function () {
        if (this.bitEnable) {
            this.openDialog();
        }
        else {
            this.bitOnConfirm.emit();
        }
    };
    /**
     * @return {?}
     */
    ConfirmDirective.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var config = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayConfig"]({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-dark-backdrop',
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
        });
        /** @type {?} */
        var overlayRef = this.overlay.create(config);
        /** @type {?} */
        var componentRef = overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](ConfirmationDialogComponent, this.viewContainerRef, this.createPortalInjector({
            title: this.bitTitle,
            text: this.bitText,
            confirmText: this.bitConfirmText,
            cancelText: this.bitCancelText
        })));
        componentRef.instance.onConfirm.subscribe((/**
         * @return {?}
         */
        function () {
            _this.bitOnConfirm.emit();
            overlayRef.detach();
        }));
        componentRef.instance.onCancel.subscribe((/**
         * @return {?}
         */
        function () {
            _this.bitOnCancel.emit();
            overlayRef.detach();
        }));
        overlayRef.backdropClick().subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.bitCloseOnBackDrop) {
                _this.bitOnCancel.emit();
                overlayRef.detach();
            }
        }));
    };
    /**
     * @param {?} dataToPass
     * @return {?}
     */
    ConfirmDirective.prototype.createPortalInjector = /**
     * @param {?} dataToPass
     * @return {?}
     */
    function (dataToPass) {
        /** @type {?} */
        var injectorTokens = new WeakMap();
        injectorTokens.set(CONTAINER_DATA, dataToPass);
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](this.injector, injectorTokens);
    };
    ConfirmDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[bitConfirm]'
                },] }
    ];
    /** @nocollapse */
    ConfirmDirective.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] }
    ]; };
    ConfirmDirective.propDecorators = {
        bitEnable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        bitTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        bitText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        bitConfirmText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        bitCancelText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        bitCloseOnBackDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        bitOnConfirm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        bitOnCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        onButtonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['click',] }]
    };
    return ConfirmDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CountComponent = /** @class */ (function () {
    //add on text click and on value click
    function CountComponent() {
    }
    /**
     * @return {?}
     */
    CountComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CountComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'bit-count',
                    template: "<div class=\"bit-count-table\">\n  <div class=\"bit-count-column bit-count-left\" [ngClass]=\"{'bit-count-left-box': bitStyle=='box'}\">\n    <span>\n      <!-- <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z\" fill=\"currentColor\"/></svg> -->\n      <ng-content select=\"bit-icon-content\"></ng-content>\n    </span>\n    {{bitText}}\n  </div>\n  <div class=\"bit-count-column bit-count-right\" [ngClass]=\"{'bit-count-right-box': bitStyle=='box'}\"><span>{{bitValue}}</span></div>\n</div>",
                    styles: [".bit-count-table{margin:0 5px 5px 0;display:inline-block}.bit-count-column{display:block}.bit-count-column span ::ng-deep bit-icon-content{display:-webkit-inline-box;display:inline-flex}.bit-count-left{float:left;-webkit-box-align:center;align-items:center;padding:8px 4px 8px 10px;position:relative;font-size:14px;white-space:nowrap;vertical-align:middle;border-radius:4px 0 0 4px}.bit-count-left-box{background-color:#f7f7f7;border:1px solid #e8e8e8;font-weight:700;padding-right:10px}.bit-count-left span{margin-right:3px;float:left;-webkit-box-align:center;align-items:center;display:-webkit-inline-box;display:inline-flex}.bit-count-right{float:left;padding:8px 10px 8px 0;font-size:14px;vertical-align:middle;border-top-right-radius:4px;border-bottom-right-radius:4px}.bit-count-right span{border-radius:18px;background:#e8e8e8;padding:1px 6px}.bit-count-right-box{border:1px solid #e8e8e8;font-weight:700;padding-left:10px;background:#fff;border-left:0}.bit-count-right-box span{border:none;background:0 0}"]
                }] }
    ];
    /** @nocollapse */
    CountComponent.ctorParameters = function () { return []; };
    CountComponent.propDecorators = {
        bitText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        bitValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        bitStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return CountComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IconContentComponent = /** @class */ (function () {
    function IconContentComponent() {
    }
    /**
     * @return {?}
     */
    IconContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    IconContentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'bit-icon-content',
                    template: "<ng-content>\n</ng-content> ",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    IconContentComponent.ctorParameters = function () { return []; };
    return IconContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgBitsModule = /** @class */ (function () {
    function NgBitsModule() {
    }
    NgBitsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    entryComponents: [ConfirmationDialogComponent],
                    declarations: [NgBitsComponent, CardComponent, CardTitle, CardSubtitle, CardContent, CardFooter, TagComponent, ButtonComponent, NoteComponent, DividerComponent, ConfirmationDialogComponent, ConfirmDirective, CountComponent, IconContentComponent],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]],
                    exports: [NgBitsComponent, CardComponent, CardTitle, CardSubtitle, CardContent, CardFooter, TagComponent, ButtonComponent, NoteComponent, DividerComponent, ConfirmationDialogComponent, ConfirmDirective, CountComponent, IconContentComponent]
                },] }
    ];
    return NgBitsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-bits.js.map

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-component\">\n    <div class=\"app-nav mat-elevation-z6\">  \n      <div class=\"nav-header\">\n        <span>NG-BITS</span>  \n        <div class=\"nav-menu\">\n          <!-- <ul>\n            <li>Components</li>\n            <li>About</li>\n            <li>GitHub</li>\n          </ul> -->\n         \n          <a href=\"https://github.com/antonio07c/ng-bits\"><img _ngcontent-uuf-c494=\"\" src=\"../assets/images/github-circle.svg\" alt=\"angular\" class=\"github-logo\"></a>\n          \n        </div>\n      </div>\n    </div>\n    <div class=\"app-content\">      \n      <div class=\"full-page\">      \n        <div class=\"menu\">\n          <ul class=\"list\">\n            <li><a routerLink=\"/getting-started\" routerLinkActive=\"active\">Getting Started</a></li>\n            <li><a routerLink=\"/button\" routerLinkActive=\"active\">Button</a></li>\n            <li><a routerLink=\"/card\" routerLinkActive=\"active\">Card</a></li>            \n            <li><a routerLink=\"/confirmation-dialog\">Confirmation Dialog</a></li>\n            <li><a routerLink=\"/divider\" routerLinkActive=\"active\">Divider</a></li>            \n            <li><a routerLink=\"/note\" routerLinkActive=\"active\">Note</a></li>\n            <li><a routerLink=\"/tag\" routerLinkActive=\"active\">Tag</a></li>\n          </ul>\n        </div>\n        <div class=\"page\">          \n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n\n.nav-header {\n  display: -webkit-box;\n  display: flex;\n  font-weight: 400;\n  font-size: 17px;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 8px 20px;\n  background: var(--header-color);\n  background: var(--header-gradient);\n  color: white;\n  height: 40px;\n  box-shadow: 0 3px 5px -1px rgba(63, 63, 205, 0.2), 0 6px 10px 0 rgba(63, 63, 205, 0.14), 0 1px 18px 0 rgba(63, 63, 205, 0.12); }\n\n.app-header {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #0f0f0f;\n  font-size: 15px;\n  z-index: 1;\n  position: relative;\n  display: block; }\n\n.app-header h1 {\n  font-size: 24px;\n  font-weight: 300;\n  padding: 10px 0px; }\n\n.app-component {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: absolute;\n  top: 56px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow-y: scroll; }\n\n.app-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.menu {\n  display: block;\n  box-sizing: border-box;\n  width: 19%;\n  font-size: 14px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  float: left;\n  margin-top: 25px; }\n\n.list {\n  list-style-type: none;\n  margin: 0 0 5px;\n  padding: 0;\n  overflow: hidden;\n  font-size: 14px;\n  border-right: 1px solid #e8e8e8; }\n\n.list li {\n  font-size: 14px;\n  margin: 0;\n  padding: 5px 15px 5px 25px;\n  line-height: 32px; }\n\n.list li .active {\n  font-weight: bold; }\n\n.nav-menu {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  position: absolute;\n  right: 20px; }\n\n.nav-menu ul {\n  list-style-type: none;\n  margin: 0; }\n\n.nav-menu li {\n  font-size: 14px;\n  display: inline-block;\n  margin: 0 15px; }\n\n.page {\n  display: block;\n  box-sizing: border-box;\n  width: 80%;\n  padding: 5px 35px;\n  overflow: hidden;\n  position: relative;\n  padding: 5px 35px 35px 35px; }\n\n.full-page {\n  position: relative; }\n\n.section-divider {\n  font-size: 16px; }\n\n.card-footer button {\n  margin: 5px; }\n\n.nav-icons {\n  position: absolute;\n  right: 20px; }\n\n.github-logo {\n  height: 28px;\n  width: 28px; }\n\n@media (max-width: 868px) {\n  .menu {\n    float: unset;\n    width: unset;\n    margin: 20px 35px 0 35px; }\n  .page {\n    width: 100%; }\n  .list {\n    border-right: none; }\n  .list li {\n    display: -webkit-inline-box;\n    display: inline-flex;\n    border: 1px solid #e8e8e8;\n    padding: 0 10px;\n    margin: 5px;\n    border-radius: 4px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWJpdHMtZGVtby9zcmMvYXBwL0Y6XFxDb2RlXFxuZy1iaXRzL3Byb2plY3RzXFxuZy1iaXRzLWRlbW9cXHNyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZTtFQUNmLE9BQU07RUFDTixRQUFPO0VBQ1AsU0FBUTtFQUNSLFdBQVUsRUFDYjs7QUFFRDtFQUNFLHFCQUFhO0VBQWIsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsMEJBQW1CO1VBQW5CLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsZ0NBQStCO0VBQy9CLG1DQUFrQztFQUNsQyxhQUFZO0VBQ1osYUFBVztFQUNYLDhIQUFxSCxFQUN0SDs7QUFFRDtFQUNFLHFCQUFhO0VBQWIsY0FBYTtFQUNiLGdCQUFlO0VBQ2YsMEJBQW1CO1VBQW5CLG9CQUFtQjtFQUNuQixlQUFzQjtFQUN0QixnQkFBZTtFQUNmLFdBQVM7RUFDVCxtQkFBaUI7RUFDakIsZUFBYyxFQUNmOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQ3BCOztBQUVDO0VBQ0UscUJBQWE7RUFBYixjQUFhO0VBQ2IsNkJBQXNCO0VBQXRCLDhCQUFzQjtVQUF0Qix1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxVQUFTO0VBQ1QsUUFBTztFQUNQLFNBQVE7RUFDUixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxxQkFBYTtFQUFiLGNBQWE7RUFDYiw2QkFBc0I7RUFBdEIsOEJBQXNCO1VBQXRCLHVCQUFzQixFQUV2Qjs7QUFFRDtFQUNFLGVBQWM7RUFDZCx1QkFBc0I7RUFDdEIsV0FBVTtFQUNWLGdCQUFlO0VBQ2Ysd0JBQXVCO0VBQ3ZCLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsaUJBQWUsRUFDaEI7O0FBRUQ7RUFDRSxzQkFBcUI7RUFDckIsZ0JBQWU7RUFDZixXQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsZ0NBQStCLEVBQ2hDOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixVQUFTO0VBQ1QsMkJBQTBCO0VBQzFCLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLDRCQUFvQjtFQUFwQixxQkFBb0I7RUFDcEIsbUJBQWtCO0VBQ2xCLFlBQVcsRUFDWjs7QUFFRDtFQUNFLHNCQUFxQjtFQUNyQixVQUFTLEVBQ1Y7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLHNCQUFxQjtFQUNyQixlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsdUJBQXNCO0VBQ3RCLFdBQVU7RUFDVixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQiw0QkFBMkIsRUFDNUI7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osWUFBVyxFQUNaOztBQUVEO0VBQ0U7SUFDRSxhQUFZO0lBQ1osYUFBWTtJQUNaLHlCQUF3QixFQUN6QjtFQUVEO0lBQ0UsWUFBVyxFQUNaO0VBRUQ7SUFDRSxtQkFBa0IsRUFDbkI7RUFFRDtJQUNFLDRCQUFvQjtJQUFwQixxQkFBb0I7SUFDcEIsMEJBQXlCO0lBQ3pCLGdCQUFlO0lBQ2YsWUFBVztJQUNYLG1CQUFrQixFQUNuQixFQUFBIiwiZmlsZSI6InByb2plY3RzL25nLWJpdHMtZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtbmF2eyBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDI7ICAgIFxyXG59XHJcblxyXG4ubmF2LWhlYWRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDhweCAyMHB4OyAgXHJcbiAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItZ3JhZGllbnQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6NDBweDsgIFxyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoNjMsIDYzLCAyMDUsIC4yKSwgMCA2cHggMTBweCAwIHJnYmEoNjMsNjMsMjA1LC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDYzLDYzLDIwNSwwLjEyKTtcclxufVxyXG5cclxuLmFwcC1oZWFkZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxyXG4gIGNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7ICBcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgei1pbmRleDoxO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlOyAgICBcclxuICBkaXNwbGF5OiBibG9jazsgICAgXHJcbn1cclxuXHJcbi5hcHAtaGVhZGVyIGgxe1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcbiAgICBcclxuICAuYXBwLWNvbXBvbmVudHsgICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTZweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcblxyXG4gIC5hcHAtY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAubWVudXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxOSU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47ICBcclxuICAgIGZsb2F0OiBsZWZ0OyAgXHJcbiAgICBtYXJnaW4tdG9wOjI1cHg7XHJcbiAgfVxyXG5cclxuICAubGlzdHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMCAwIDVweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAxNHB4OyAgICBcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgfVxyXG5cclxuICAubGlzdCBsaXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDsgICAgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4OyAgICAgICAgXHJcbiAgfVxyXG5cclxuICAubGlzdCBsaSAuYWN0aXZle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAubmF2LW1lbnV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdi1tZW51IHVse1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1tZW51IGxpe1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7IFxyXG4gIH1cclxuXHJcbiAgLnBhZ2V7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcGFkZGluZzogNXB4IDM1cHg7ICAgICAgICBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA1cHggMzVweCAzNXB4IDM1cHg7XHJcbiAgfVxyXG5cclxuICAuZnVsbC1wYWdle1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1kaXZpZGVye1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtZm9vdGVyIGJ1dHRvbntcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdi1pY29uc3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmdpdGh1Yi1sb2dve1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogODY4cHgpIHtcclxuICAgIC5tZW51e1xyXG4gICAgICBmbG9hdDogdW5zZXQ7XHJcbiAgICAgIHdpZHRoOiB1bnNldDtcclxuICAgICAgbWFyZ2luOiAyMHB4IDM1cHggMCAzNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdle1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubGlzdHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5saXN0IGxpe1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var AppComponent = /** @class */ (function () {
    // title = 'ng-bits-demo';  
    function AppComponent(metaTagService) {
        this.metaTagService = metaTagService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.metaTagService.addTags([
            { name: 'keywords', content: 'Angular UI Components, Library, Material, Simple Design' }
        ]);
    };
    AppComponent.prototype.log = function (text) {
        console.log(text);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_bits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-bits */ "../../dist/ng-bits/fesm5/ng-bits.js");
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./highlight.service */ "./src/app/highlight.service.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_note_note_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/note/note.component */ "./src/app/components/note/note.component.ts");
/* harmony import */ var _components_api_table_api_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/api-table/api-table.component */ "./src/app/components/api-table/api-table.component.ts");
/* harmony import */ var _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tag/tag.component */ "./src/app/components/tag/tag.component.ts");
/* harmony import */ var _components_divider_divider_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/divider/divider.component */ "./src/app/components/divider/divider.component.ts");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/button/button.component */ "./src/app/components/button/button.component.ts");
/* harmony import */ var _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/confirmation-dialog/confirmation-dialog.component */ "./src/app/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/getting-started/getting-started.component */ "./src/app/components/getting-started/getting-started.component.ts");
















var appRoutes = [
    { path: 'getting-started', component: _components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_15__["GettingStartedComponent"] },
    { path: 'button', component: _components_button_button_component__WEBPACK_IMPORTED_MODULE_13__["ButtonComponent"] },
    { path: 'card', component: _components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"] },
    { path: 'confirmation-dialog', component: _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmationDialogComponent"] },
    { path: 'note', component: _components_note_note_component__WEBPACK_IMPORTED_MODULE_9__["NoteComponent"] },
    { path: 'tag', component: _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_11__["TagComponent"] },
    { path: 'divider', component: _components_divider_divider_component__WEBPACK_IMPORTED_MODULE_12__["DividerComponent"] },
    { path: '',
        redirectTo: '/getting-started',
        pathMatch: 'full'
    },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                _components_note_note_component__WEBPACK_IMPORTED_MODULE_9__["NoteComponent"],
                _components_api_table_api_table_component__WEBPACK_IMPORTED_MODULE_10__["ApiTableComponent"],
                _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_11__["TagComponent"],
                _components_divider_divider_component__WEBPACK_IMPORTED_MODULE_12__["DividerComponent"],
                _components_button_button_component__WEBPACK_IMPORTED_MODULE_13__["ButtonComponent"],
                _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmationDialogComponent"],
                _components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_15__["GettingStartedComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ng_bits__WEBPACK_IMPORTED_MODULE_5__["NgBitsModule"]
            ],
            providers: [_highlight_service__WEBPACK_IMPORTED_MODULE_6__["HighlightService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/api-table/api-table.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/api-table/api-table.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".api-table{\r\n    display: table;\r\n    color: #0f0f0f;\r\n    font-size: 15px;\r\n    width:100%;\r\n    border: 1px solid #e8e8e8;\r\n    border-bottom:none;\r\n    border-radius: 4px;\r\n}\r\n  \r\n.api-row{\r\ndisplay: table-row;\r\n}\r\n  \r\n.api-column{\r\ndisplay:table-cell;    \r\npadding: 20px;\r\nborder-bottom: 1px solid #e8e8e8;    \r\n}\r\n  \r\n.api-header{\r\ndisplay: table-row;\r\nfont-size: 16px;    \r\n}\r\n  \r\n.api-header .api-column{    \r\nbackground: #f7f7f7;\r\npadding: 8px 20px;\r\npadding-top: 14px;\r\n}\r\n  \r\n.api-header .api-column-first{\r\nborder-right: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWJpdHMtZGVtby9zcmMvYXBwL2NvbXBvbmVudHMvYXBpLXRhYmxlL2FwaS10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsbUJBQW1CO0NBQ3RCOztBQUVEO0FBQ0EsbUJBQW1CO0NBQ2xCOztBQUVEO0FBQ0EsbUJBQW1CO0FBQ25CLGNBQWM7QUFDZCxpQ0FBaUM7Q0FDaEM7O0FBRUQ7QUFDQSxtQkFBbUI7QUFDbkIsZ0JBQWdCO0NBQ2Y7O0FBRUQ7QUFDQSxvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtDQUNqQjs7QUFFRDtBQUNBLG1CQUFtQjtDQUNsQiIsImZpbGUiOiJwcm9qZWN0cy9uZy1iaXRzLWRlbW8vc3JjL2FwcC9jb21wb25lbnRzL2FwaS10YWJsZS9hcGktdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcGktdGFibGV7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNvbG9yOiAjMGYwZjBmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICBib3JkZXItYm90dG9tOm5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuICBcclxuLmFwaS1yb3d7XHJcbmRpc3BsYXk6IHRhYmxlLXJvdztcclxufVxyXG5cclxuLmFwaS1jb2x1bW57XHJcbmRpc3BsYXk6dGFibGUtY2VsbDsgICAgXHJcbnBhZGRpbmc6IDIwcHg7XHJcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4OyAgICBcclxufVxyXG5cclxuLmFwaS1oZWFkZXJ7XHJcbmRpc3BsYXk6IHRhYmxlLXJvdztcclxuZm9udC1zaXplOiAxNnB4OyAgICBcclxufVxyXG5cclxuLmFwaS1oZWFkZXIgLmFwaS1jb2x1bW57ICAgIFxyXG5iYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG5wYWRkaW5nOiA4cHggMjBweDtcclxucGFkZGluZy10b3A6IDE0cHg7XHJcbn1cclxuXHJcbi5hcGktaGVhZGVyIC5hcGktY29sdW1uLWZpcnN0e1xyXG5ib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/api-table/api-table.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/api-table/api-table.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"api-table\">\n  <div class=\"api-header\">\n      <div class=\"api-column api-column-first\">\n          Name\n        </div>\n        <div class=\"api-column\">\n          Description\n        </div>\n  </div>\n  <div *ngFor=\"let row of this.api\" class=\"api-row\">\n      <div class=\"api-column api-column-first\">\n        {{row.name}}\n      </div>\n      <div class=\"api-column\">\n        {{row.description}}\n      </div>\n  </div>            \n</div>"

/***/ }),

/***/ "./src/app/components/api-table/api-table.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/api-table/api-table.component.ts ***!
  \*************************************************************/
/*! exports provided: ApiTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiTableComponent", function() { return ApiTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ApiTableComponent = /** @class */ (function () {
    function ApiTableComponent() {
    }
    ApiTableComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ApiTableComponent.prototype, "api", void 0);
    ApiTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-api-table',
            template: __webpack_require__(/*! ./api-table.component.html */ "./src/app/components/api-table/api-table.component.html"),
            styles: [__webpack_require__(/*! ./api-table.component.css */ "./src/app/components/api-table/api-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApiTableComponent);
    return ApiTableComponent;
}());



/***/ }),

/***/ "./src/app/components/button/button.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/button/button.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header\">\n  <h1>Button</h1>\n</div>\n<bit-divider>Basic Buttons</bit-divider>    \n<div class=\"button-container\">\n  <bit-button bitType=\"default\">Default</bit-button>\n  <bit-button bitType=\"link\">Link</bit-button>\n  <bit-button bitType=\"stroked\">Stroked</bit-button>\n  <bit-button bitType=\"danger\">Danger</bit-button>\n  <bit-button bitType=\"warning\">Warning</bit-button>\n  <bit-button bitType=\"success\">Success</bit-button>\n</div>\n<pre class=\"bit-pre\">\n  <code class=\" language-markup\">\n    &#x3C;bit-button bitType=&#x22;default&#x22;&#x3E;Default&#x3C;/bit-button&#x3E;\n    &#x3C;bit-button bitType=&#x22;link&#x22;&#x3E;Link&#x3C;/bit-button&#x3E;\n    &#x3C;bit-button bitType=&#x22;stroked&#x22;&#x3E;Stroked&#x3C;/bit-button&#x3E;\n    &#x3C;bit-button bitType=&#x22;danger&#x22;&#x3E;Danger&#x3C;/bit-button&#x3E;\n    &#x3C;bit-button bitType=&#x22;warning&#x22;&#x3E;Warning&#x3C;/bit-button&#x3E;\n    &#x3C;bit-button bitType=&#x22;success&#x22;&#x3E;Success&#x3C;/bit-button&#x3E;\n  </code>\n</pre>\n<bit-divider>Disabled Buttons</bit-divider>\n<div class=\"button-container\">\n  <bit-button [disabled]=\"true\" bitType=\"default\">Default</bit-button>\n  <bit-button [disabled]=\"true\" bitType=\"link\">Link</bit-button>  \n  <bit-button [disabled]=\"true\" bitType=\"stroked\">Stroked</bit-button>  \n</div>\n<pre class=\"bit-pre\">\n  <code class=\" language-markup\">\n    &#x3C;bit-button [disabled]=&#x22;true&#x22; bitType=&#x22;default&#x22;&#x3E;Default&#x3C;/bit-button&#x3E;\n    &#x3C;bit-button [disabled]=&#x22;true&#x22; bitType=&#x22;link&#x22;&#x3E;Link&#x3C;/bit-button&#x3E;  \n    &#x3C;bit-button [disabled]=&#x22;true&#x22; bitType=&#x22;stroked&#x22;&#x3E;Stroked&#x3C;/bit-button&#x3E;\n  </code>\n</pre>\n<bit-divider bitClass=\"section-divider\">API</bit-divider>\n<app-api-table [api]=\"api\"></app-api-table>"

/***/ }),

/***/ "./src/app/components/button/button.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/button/button.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-container bit-button {\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWJpdHMtZGVtby9zcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uL0Y6XFxDb2RlXFxuZy1iaXRzL3Byb2plY3RzXFxuZy1iaXRzLWRlbW9cXHNyY1xcYXBwXFxjb21wb25lbnRzXFxidXR0b25cXGJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFrQixFQUNyQiIsImZpbGUiOiJwcm9qZWN0cy9uZy1iaXRzLWRlbW8vc3JjL2FwcC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWNvbnRhaW5lciBiaXQtYnV0dG9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/button/button.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../highlight.service */ "./src/app/highlight.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(highlightService, titleService, metaTagService) {
        this.highlightService = highlightService;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.title = 'Angular Button Component | ng-bits for Angular';
        this.highlighted = false;
        this.api = [{
                name: "bitType (string)",
                description: "Defaults to default, possible values are: default, stroked, link."
            },
            {
                name: "disabled (boolean)",
                description: "Defaults to false, whether to disable the button."
            }];
    }
    ButtonComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
        this.metaTagService.updateTag({ name: 'description', content: 'Angular Button Component' });
    };
    ButtonComponent.prototype.ngAfterViewChecked = function () {
        try {
            if (!this.highlighted) {
                this.highlightService.highlightAll();
                this.highlighted = true;
            }
        }
        catch (ex) { }
    };
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/components/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/components/button/button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_highlight_service__WEBPACK_IMPORTED_MODULE_2__["HighlightService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header\">\n    <h1>Card</h1>\n</div>\n<bit-divider>Basic Card Example</bit-divider>    \n<bit-card>  \n  <bit-card-title>What is Lorem Ipsum?</bit-card-title>\n  <bit-card-subtitle>Lorem ipsum dolor sit amet</bit-card-subtitle>\n  <bit-card-content>            \n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n  </bit-card-content>  \n  <bit-card-footer class=\"card-footer\">\n    <bit-button bitType=\"link\">      \n      Cancel\n    </bit-button>\n    <bit-button bitType=\"default\">\n     Update\n    </bit-button>\n  </bit-card-footer>\n</bit-card>              \n<pre class=\"bit-pre\">\n  <code class=\" language-markup\">\n&lt;bit-card&gt;  \n  &lt;bit-card-title&gt;Card Title&lt;/bit-card-title&gt;\n  &lt;bit-card-subtitle&gt;Card Subtitle&lt;/bit-card-subtitle&gt;\n  &lt;bit-card-content&gt;\n    Content of the card.\n  &lt;/bit-card-content&gt;  \n  &lt;bit-card-footer class=&quot;card-footer&quot;&gt;\n    &lt;bit-button bitType=&quot;link&quot;&gt;Cancel&lt;/bit-button&gt;\n    &lt;bit-button bitType=&quot;default&quot;&gt;Update&lt;/bit-button&gt;\n  &lt;/bit-card-footer&gt;\n&lt;/bit-card&gt;\n  </code>\n</pre>\n<bit-divider bitClass=\"section-divider\">API</bit-divider>\n<app-api-table [api]=\"api\"></app-api-table>"

/***/ }),

/***/ "./src/app/components/card/card.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1iaXRzLWRlbW8vc3JjL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../highlight.service */ "./src/app/highlight.service.ts");




var CardComponent = /** @class */ (function () {
    function CardComponent(highlightService, titleService, metaTagService) {
        this.highlightService = highlightService;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.title = 'Angular Card Component | ng-bits for Angular';
        this.highlighted = false;
        this.api = [{
                name: "<bit-card>",
                description: "Card container with title, subtitle, content and footer."
            },
            {
                name: "<bit-card-content>",
                description: "Use it to show the main content of the card, scrollable when the card height is fixed."
            },
            {
                name: "<bit-card-title>",
                description: "Title to display."
            },
            {
                name: "<bit-card-subtitle>",
                description: "Text to display below the title."
            },
            {
                name: "<bit-card-footer>",
                description: "Fixed to the bottom of the card, usually used to display action buttons."
            }];
    }
    CardComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
        this.metaTagService.updateTag({ name: 'description', content: 'Angular Card Component' });
    };
    CardComponent.prototype.ngAfterViewChecked = function () {
        try {
            if (!this.highlighted) {
                this.highlightService.highlightAll();
                this.highlighted = true;
            }
        }
        catch (ex) { }
    };
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/components/card/card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/confirmation-dialog/confirmation-dialog.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/confirmation-dialog/confirmation-dialog.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header\">\n  <h1>Confirmation Dialog</h1>\n</div>\n<bit-divider>Confirmation Dialog Examples</bit-divider>\n<div class=\"wrapper\">\n  <bit-button bitConfirm>Basic Dialog</bit-button>\n  <bit-button bitConfirm bitTitle=\"Delete?\" bitText=\"Are you really sure?\" bitConfirmText=\"Yes\" bitCancelText=\"No\">Custom Text</bit-button>\n  <bit-button bitConfirm bitCloseOnBackDrop=\"true\">Close on Backdrop Click</bit-button>\n</div>\n<pre class=\"bit-pre\">\n  <code class=\" language-markup\">\n    &#x3C;bit-button bitConfirm&#x3E;Basic Dialog&#x3C;/bit-button&#x3E;\n    &#x3C;bit-button bitConfirm bitTitle=&#x22;Delete?&#x22; bitText=&#x22;Are you really sure?&#x22; bitConfirmText=&#x22;Yes&#x22; bitCancelText=&#x22;No&#x22;&#x3E;Open Dialog&#x3C;/bit-button&#x3E;\n    &#x3C;bit-button bitConfirm bitCloseOnBackDrop=&#x22;true&#x22;&#x3E;Open Dialog&#x3C;/bit-button&#x3E;\n  </code>\n</pre>\n<bit-divider>Enable / Disable</bit-divider>\n<div class=\"example-wrapper\">\n  <bit-button bitConfirm [bitEnable]=\"enabled\" (bitOnConfirm)=\"showMsg('Confirm was clicked')\" (bitOnCancel)=\"showMsg('Cancel was clicked')\">Open Dialog</bit-button>\n  <input type=\"checkbox\" class=\"checkbox\" [checked] = \"enabled\" (change)=\"enabled = !enabled\">enabled<br>\n</div>\n<div class=\"message\" [ngClass]=\"{'message-show' : message != undefined}\">{{message}}</div>\n<pre class=\"bit-pre\">\n  <code class=\" language-markup\">\n    &#x3C;bit-button bitConfirm [bitEnable]=&#x22;enabled&#x22; (bitOnConfirm)=&#x22;showMsg(&#x27;Confirm was clicked&#x27;)&#x22; (bitOnCancel)=&#x22;showMsg(&#x27;Cancel was clicked&#x27;)&#x22;&#x3E;Open Dialog&#x3C;/bit-button&#x3E;\n  </code>\n</pre>\n<bit-divider bitClass=\"section-divider\">API</bit-divider>\n<app-api-table [api]=\"api\"></app-api-table>"

/***/ }),

/***/ "./src/app/components/confirmation-dialog/confirmation-dialog.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/confirmation-dialog/confirmation-dialog.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper bit-button {\n  margin-right: 10px; }\n\n.example-wrapper {\n  display: inline-block; }\n\n.checkbox {\n  margin-left: 10px; }\n\n.message {\n  color: white;\n  border-radius: 4px;\n  margin-left: 10px;\n  padding: 2px 5px;\n  background-color: #f92672;\n  display: none; }\n\n.message-show {\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWJpdHMtZGVtby9zcmMvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uLWRpYWxvZy9GOlxcQ29kZVxcbmctYml0cy9wcm9qZWN0c1xcbmctYml0cy1kZW1vXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcY29uZmlybWF0aW9uLWRpYWxvZ1xcY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLHNCQUFxQixFQUN4Qjs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQiwwQkFBeUI7RUFDekIsY0FBYSxFQUNoQjs7QUFFRDtFQUNJLHNCQUFxQixFQUN4QiIsImZpbGUiOiJwcm9qZWN0cy9uZy1iaXRzLWRlbW8vc3JjL2FwcC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi1kaWFsb2cvY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIGJpdC1idXR0b257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXdyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jaGVja2JveHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyAgICBcclxufVxyXG5cclxuLm1lc3NhZ2V7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7ICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5MjY3MjsgICAgXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubWVzc2FnZS1zaG93e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/confirmation-dialog/confirmation-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/confirmation-dialog/confirmation-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../highlight.service */ "./src/app/highlight.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent(highlightService, titleService, metaTagService) {
        this.highlightService = highlightService;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.enabled = true;
        this.title = 'Angular Confirmation Dialog Component | ng-bits for Angular';
        this.highlighted = false;
        this.api = [{
                name: "bitEnable (boolean)",
                description: "Defaults to true, whether to enable or disable the dialog."
            },
            {
                name: "bitTitle (string)",
                description: "Optional, sets the text in the header of the dialog."
            },
            {
                name: "bitText (string)",
                description: "Optional, text to display in the body of the dialog."
            },
            {
                name: "bitConfirmText (string)",
                description: "Optional, text of the confirmation button."
            },
            {
                name: "bitCancelText (string)",
                description: "Optional, text of the button that closes the dialog."
            },
            {
                name: "bitCloseOnBackDrop (boolean)",
                description: "Defaults to false, whether to close the dialog when clicking outside the dialog."
            },
            {
                name: "bitOnConfirm (EventEmitter)",
                description: "Executed when the confirm button is clicked."
            },
            {
                name: "bitOnCancel (EventEmitter)",
                description: "Executed when the dialog is canceled."
            }];
    }
    ConfirmationDialogComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
        this.metaTagService.updateTag({ name: 'description', content: 'Angular Confirmation Dialog Component' });
    };
    ConfirmationDialogComponent.prototype.ngAfterViewChecked = function () {
        try {
            if (!this.highlighted) {
                this.highlightService.highlightAll();
                this.highlighted = true;
            }
        }
        catch (ex) { }
    };
    ConfirmationDialogComponent.prototype.showMsg = function (text) {
        var _this = this;
        this.message = text;
        setTimeout(function () {
            _this.message = undefined;
        }, 3500);
    };
    ConfirmationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation-dialog',
            template: __webpack_require__(/*! ./confirmation-dialog.component.html */ "./src/app/components/confirmation-dialog/confirmation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-dialog.component.scss */ "./src/app/components/confirmation-dialog/confirmation-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_highlight_service__WEBPACK_IMPORTED_MODULE_2__["HighlightService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], ConfirmationDialogComponent);
    return ConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/divider/divider.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/divider/divider.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1iaXRzLWRlbW8vc3JjL2FwcC9jb21wb25lbnRzL2RpdmlkZXIvZGl2aWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/divider/divider.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/divider/divider.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header\">\n  <h1>Divider</h1>\n</div>\n<bit-divider>Left Text</bit-divider>\n<bit-divider bitOrientation=\"center\">Centered Text</bit-divider>\n<bit-divider bitOrientation=\"right\">Right Text</bit-divider>\n<bit-divider></bit-divider>\n<pre class=\"bit-pre\">\n  <code class=\" language-markup\">\n    &#x3C;bit-divider&#x3E;Left Text&#x3C;/bit-divider&#x3E;\n    &#x3C;bit-divider bitOrientation=&#x22;center&#x22;&#x3E;Centered Text&#x3C;/bit-divider&#x3E;\n    &#x3C;bit-divider bitOrientation=&#x22;right&#x22;&#x3E;Right Text&#x3C;/bit-divider&#x3E;\n    &#x3C;bit-divider&#x3E;&#x3C;/bit-divider&#x3E;\n  </code>\n</pre>\n\n\n<bit-divider bitClass=\"section-divider\">API</bit-divider>\n<app-api-table [api]=\"api\"></app-api-table>\n"

/***/ }),

/***/ "./src/app/components/divider/divider.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/divider/divider.component.ts ***!
  \*********************************************************/
/*! exports provided: DividerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividerComponent", function() { return DividerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../highlight.service */ "./src/app/highlight.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var DividerComponent = /** @class */ (function () {
    function DividerComponent(highlightService, titleService, metaTagService) {
        this.highlightService = highlightService;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.title = 'Angular Divider Component | ng-bits for Angular';
        this.highlighted = false;
        this.api = [{
                name: "bitOrientation (string)",
                description: "Possible values are: left, center, right. Default is left."
            }];
    }
    DividerComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
        this.metaTagService.updateTag({ name: 'description', content: 'Angular Divider Component' });
    };
    DividerComponent.prototype.ngAfterViewChecked = function () {
        try {
            if (!this.highlighted) {
                this.highlightService.highlightAll();
                this.highlighted = true;
            }
        }
        catch (ex) { }
    };
    DividerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-divider',
            template: __webpack_require__(/*! ./divider.component.html */ "./src/app/components/divider/divider.component.html"),
            styles: [__webpack_require__(/*! ./divider.component.css */ "./src/app/components/divider/divider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_highlight_service__WEBPACK_IMPORTED_MODULE_2__["HighlightService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], DividerComponent);
    return DividerComponent;
}());



/***/ }),

/***/ "./src/app/components/getting-started/getting-started.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/getting-started/getting-started.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1iaXRzLWRlbW8vc3JjL2FwcC9jb21wb25lbnRzL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/getting-started/getting-started.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/getting-started/getting-started.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header\">\n  <h1>Getting Started</h1>\n</div>\n<bit-divider>Installation</bit-divider>\n<p>Install using one of the following:</p>\n<pre class=\"bit-pre\">\n  <code class=\" language-markup\">\n    $ ng add ng-bits\n    $ npm i ng-bits\n    $ yarn add ng-bits\n  </code>\n</pre>\n<bit-divider>Usage</bit-divider>\n<p>Import the module into your app.module.ts file</p>\n<pre class=\"bit-pre\">\n  <code class=\" language-markup\"> \n    {{import}}\n\n    {{ngModule}}\n    {{imports}}\n    {{ngModuleEnd}}\n    {{export}}\n  </code>\n</pre>\n<bit-divider>Repository</bit-divider>\n<p>\n  <a href=\"https://github.com/antonio07c/ng-bits\">github.com/antonio07c/ng-bits</a>\n</p>\n<bit-divider>License</bit-divider>\n<p>MIT</p>"

/***/ }),

/***/ "./src/app/components/getting-started/getting-started.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/getting-started/getting-started.component.ts ***!
  \*************************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../highlight.service */ "./src/app/highlight.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var GettingStartedComponent = /** @class */ (function () {
    function GettingStartedComponent(highlightService, titleService, metaTagService) {
        this.highlightService = highlightService;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.title = 'Angular UI Components | ng-bits for Angular';
        this.highlighted = false;
        this.import = "import { NgBitsModule } from 'ng-bits'";
        this.ngModule = "@NgModule({";
        this.imports = "imports: [ NgBitsModule ]";
        this.ngModuleEnd = "})";
        this.export = "export class AppModule { }";
    }
    GettingStartedComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
        this.metaTagService.updateTag({ name: 'description', content: 'Angular Note Component' });
    };
    GettingStartedComponent.prototype.ngAfterViewChecked = function () {
        try {
            if (!this.highlighted) {
                this.highlightService.highlightAll();
                this.highlighted = true;
            }
        }
        catch (ex) { }
    };
    GettingStartedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getting-started',
            template: __webpack_require__(/*! ./getting-started.component.html */ "./src/app/components/getting-started/getting-started.component.html"),
            styles: [__webpack_require__(/*! ./getting-started.component.css */ "./src/app/components/getting-started/getting-started.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_highlight_service__WEBPACK_IMPORTED_MODULE_2__["HighlightService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], GettingStartedComponent);
    return GettingStartedComponent;
}());



/***/ }),

/***/ "./src/app/components/note/note.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/note/note.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header\">\n  <h1>Note</h1>\n</div>\n<bit-divider>Examples</bit-divider>\n<bit-note bitType=\"info\" bitTitle=\"Informational Note\">\n  Content of the note.\n</bit-note>\n<bit-note bitType=\"warning\" bitTitle=\"Warning Note\">\n  Content of the note.\n</bit-note>\n<bit-note bitType=\"error\" bitTitle=\"Error Note\">\n  Content of the note.\n</bit-note>\n<bit-note bitType=\"success\" bitTitle=\"Success Note\">\n  Content of the note.\n</bit-note>\n<pre class=\"bit-pre\">\n<code class=\" language-markup\">\n&#x3C;bit-note bitType=&#x22;info&#x22; bitTitle=&#x22;Informational Note&#x22;&#x3E;\n  Content of the note.\n&#x3C;/bit-note&#x3E;\n&#x3C;bit-note bitType=&#x22;warning&#x22; bitTitle=&#x22;Warning Note&#x22;&#x3E;\n  Content of the note.\n&#x3C;/bit-note&#x3E;\n&#x3C;bit-note bitType=&#x22;error&#x22; bitTitle=&#x22;Error Note&#x22;&#x3E;\n  Content of the note.\n&#x3C;/bit-note&#x3E;\n&#x3C;bit-note bitType=&#x22;success&#x22; bitTitle=&#x22;Success Note&#x22;&#x3E;\n  Content of the note.\n&#x3C;/bit-note&#x3E;\n</code>\n</pre>\n<bit-divider bitClass=\"section-divider\">API</bit-divider>\n<app-api-table [api]=\"api\"></app-api-table>"

/***/ }),

/***/ "./src/app/components/note/note.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/note/note.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1iaXRzLWRlbW8vc3JjL2FwcC9jb21wb25lbnRzL25vdGUvbm90ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/note/note.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/note/note.component.ts ***!
  \***************************************************/
/*! exports provided: NoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteComponent", function() { return NoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../highlight.service */ "./src/app/highlight.service.ts");




var NoteComponent = /** @class */ (function () {
    function NoteComponent(highlightService, titleService, metaTagService) {
        this.highlightService = highlightService;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.title = 'Angular Note Component | ng-bits for Angular';
        this.highlighted = false;
        this.api = [{
                name: "bitTitle (string)",
                description: "Text to display in the title."
            },
            {
                name: "bitType (string)",
                description: "Defaults to info, possible values are: info, error, warning, success."
            },
            {
                name: "bitShowIcon (boolean)",
                description: "Defaults to true, when set to true an icon is shown."
            }];
    }
    NoteComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
        this.metaTagService.updateTag({ name: 'description', content: 'Angular Note Component' });
    };
    NoteComponent.prototype.ngAfterViewChecked = function () {
        try {
            if (!this.highlighted) {
                this.highlightService.highlightAll();
                this.highlighted = true;
            }
        }
        catch (ex) { }
    };
    NoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-note',
            template: __webpack_require__(/*! ./note.component.html */ "./src/app/components/note/note.component.html"),
            styles: [__webpack_require__(/*! ./note.component.scss */ "./src/app/components/note/note.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], NoteComponent);
    return NoteComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script>\n  // Store the URL the user was trying to access when receiving the 404.\n  sessionStorage.redirect = location.href;\n</script>\n<div class=\"container\">\n  <div class=\"content\">\n    <span class=\"errorCode\">404</span>\n    <span class=\"errorMsg\">O-o-oh!, page not found.</span>\n    <span class=\"description\">We can't find the page you are looking for.</span>\n    <span class=\"description\">You can navigate from the list or...</span>\n    <span class=\"goHomeSpan\">\n      <bit-button class=\"goHomeButton\" bitType=\"stroked\" routerLink=\"/card\">Go Home</bit-button>\n    </span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 75vh; }\n\n.content {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 75%; }\n\n.errorCode {\n  font-size: 170px;\n  text-align: center;\n  display: block;\n  color: rgba(0, 0, 0, 0.22); }\n\n.errorMsg {\n  font-size: 50px;\n  text-align: center;\n  margin: 0 20px 20px 20px;\n  display: block; }\n\n.description {\n  text-align: center;\n  display: block;\n  font-size: 18px;\n  line-height: 1.5; }\n\n.goHomeSpan {\n  text-align: center;\n  display: block;\n  margin: 20px; }\n\n.goHomeButton button {\n  min-width: 120px;\n  min-height: 40px;\n  border-width: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWJpdHMtZGVtby9zcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvRjpcXENvZGVcXG5nLWJpdHMvcHJvamVjdHNcXG5nLWJpdHMtZGVtb1xcc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2Utbm90LWZvdW5kXFxwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLHFCQUFhO0VBQWIsY0FBYTtFQUNiLDZCQUFzQjtFQUF0Qiw4QkFBc0I7VUFBdEIsdUJBQXNCO0VBQ3RCLDBCQUFtQjtVQUFuQixvQkFBbUI7RUFDbkIseUJBQXVCO1VBQXZCLHdCQUF1QjtFQUN2QixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIscUJBQWE7RUFBYixjQUFhO0VBQ2IsNkJBQXNCO0VBQXRCLDhCQUFzQjtVQUF0Qix1QkFBc0I7RUFDdEIsV0FBVSxFQUNiOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsMkJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxhQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUNwQiIsImZpbGUiOiJwcm9qZWN0cy9uZy1iaXRzLWRlbW8vc3JjL2FwcC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDc1dmg7ICAgIFxyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDc1JTsgICAgXHJcbn1cclxuXHJcbi5lcnJvckNvZGV7XHJcbiAgICBmb250LXNpemU6IDE3MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuMjIpO1xyXG59XHJcblxyXG4uZXJyb3JNc2d7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMjBweCAyMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRlc2NyaXB0aW9ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLmdvSG9tZVNwYW57ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOjIwcHg7XHJcbn1cclxuXHJcbi5nb0hvbWVCdXR0b24gYnV0dG9ue1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/components/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/tag/tag.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/tag/tag.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header\">\n  <h1>Tag</h1>\n</div>\n<bit-divider>Basic Tag</bit-divider>\n<div class=\"tag-container\">\n  <bit-tag>simple</bit-tag>\n  <bit-tag bitCloseable=\"true\">closeable</bit-tag>  \n</div>  \n<pre class=\"bit-pre\">\n  <code class=\" language-markup\">\n    &#x3C;bit-tag&#x3E;simple&#x3C;/bit-tag&#x3E;\n    &#x3C;bit-tag bitCloseable=&#x22;true&#x22;&#x3E;closeable&#x3C;/bit-tag&#x3E;\n  </code>\n  </pre>\n<bit-divider>Colored Tag</bit-divider>\n<div class=\"tag-container\">\n  <bit-tag bitColor=\"red\">red</bit-tag>\n  <bit-tag bitColor=\"#F6298C\">#F6298C</bit-tag>\n  <bit-tag bitColor=\"RGB(127,40,89)\">RGB(127,40,89)</bit-tag>\n  <bit-tag bitColor=\"#1dc5b3\">#1dc5b3</bit-tag>     \n  <bit-tag bitColor=\"#0d36ff\">#0d36ff</bit-tag>   \n</div>\n<pre class=\"bit-pre\">\n  <code class=\" language-markup\">\n    &#x3C;bit-tag bitColor=&#x22;red&#x22;&#x3E;red&#x3C;/bit-tag&#x3E;\n    &#x3C;bit-tag bitColor=&#x22;#F6298C&#x22;&#x3E;#F6298C&#x3C;/bit-tag&#x3E;\n    &#x3C;bit-tag bitColor=&#x22;RGB(127,40,89)&#x22;&#x3E;RGB(127,40,89)&#x3C;/bit-tag&#x3E;\n    &#x3C;bit-tag bitColor=&#x22;#1dc5b3&#x22;&#x3E;#1dc5b3&#x3C;/bit-tag&#x3E;     \n    &#x3C;bit-tag bitColor=&#x22;#0d36ff&#x22;&#x3E;#0d36ff&#x3C;/bit-tag&#x3E;\n  </code>\n</pre>\n<bit-divider bitClass=\"section-divider\">API</bit-divider>\n<app-api-table [api]=\"api\"></app-api-table>\n"

/***/ }),

/***/ "./src/app/components/tag/tag.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/tag/tag.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tag-container {\n  width: 100%;\n  margin: 10px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWJpdHMtZGVtby9zcmMvYXBwL2NvbXBvbmVudHMvdGFnL0Y6XFxDb2RlXFxuZy1iaXRzL3Byb2plY3RzXFxuZy1iaXRzLWRlbW9cXHNyY1xcYXBwXFxjb21wb25lbnRzXFx0YWdcXHRhZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVU7RUFDVixlQUFjLEVBQ2YiLCJmaWxlIjoicHJvamVjdHMvbmctYml0cy1kZW1vL3NyYy9hcHAvY29tcG9uZW50cy90YWcvdGFnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhZy1jb250YWluZXJ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/tag/tag.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/tag/tag.component.ts ***!
  \*************************************************/
/*! exports provided: TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../highlight.service */ "./src/app/highlight.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var TagComponent = /** @class */ (function () {
    function TagComponent(highlightService, titleService, metaTagService) {
        this.highlightService = highlightService;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.title = 'Angular Tag Component | ng-bits for Angular';
        this.highlighted = false;
        this.api = [{
                name: "bitCloseable (boolean)",
                description: "When set to true the tag can be closed."
            },
            {
                name: "bitColor (string)",
                description: "Background color of the tag."
            },
            {
                name: "bitOnClose (EventEmitter)",
                description: "Executed when the tag is closed."
            }];
    }
    TagComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
        this.metaTagService.updateTag({ name: 'description', content: 'Angular Tag Component' });
    };
    TagComponent.prototype.ngAfterViewChecked = function () {
        try {
            if (!this.highlighted) {
                this.highlightService.highlightAll();
                this.highlighted = true;
            }
        }
        catch (ex) { }
    };
    TagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tag',
            template: __webpack_require__(/*! ./tag.component.html */ "./src/app/components/tag/tag.component.html"),
            styles: [__webpack_require__(/*! ./tag.component.scss */ "./src/app/components/tag/tag.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_highlight_service__WEBPACK_IMPORTED_MODULE_2__["HighlightService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], TagComponent);
    return TagComponent;
}());



/***/ }),

/***/ "./src/app/highlight.service.ts":
/*!**************************************!*\
  !*** ./src/app/highlight.service.ts ***!
  \**************************************/
/*! exports provided: HighlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return HighlightService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ "../../node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/components/prism-css */ "../../node_modules/prismjs/components/prism-css.js");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/components/prism-markup */ "../../node_modules/prismjs/components/prism-markup.js");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "../../node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-scss */ "../../node_modules/prismjs/components/prism-scss.js");
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_7__);









var HighlightService = /** @class */ (function () {
    function HighlightService(platformId) {
        this.platformId = platformId;
    }
    HighlightService.prototype.highlightAll = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            Prism.highlightAll();
        }
    };
    HighlightService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], HighlightService);
    return HighlightService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Code\ng-bits\projects\ng-bits-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map