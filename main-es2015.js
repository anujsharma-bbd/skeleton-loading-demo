(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n  <div style=\"text-align:center\">\r\n    <h1>\r\n      Skeleton Loading Demo\r\n    </h1>\r\n  </div>\r\n  <hr/>\r\n  <div>\r\n    <h3>Customer Data</h3>\r\n    <button class=\"btn btn-primary\" (click)=\"showLoading()\" [disabled]=\"skeletonMode\">Show Skeleton Loading</button>\r\n    <div class=\"customer-profile\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <a *ngIf=\"skeletonMode\" [innerHtml]=\"'' | skeletonLoader:skeletonMode:'skeleton-icon'\"></a>\r\n          <a *ngIf=\"vm && !skeletonMode\">\r\n            <div class=\"icon\">\r\n              <span class=\"profile-icon\"></span>\r\n            </div>\r\n          </a>\r\n          <div class=\"order-label\" [innerHtml]=\"vm?.name | skeletonLoader:skeletonMode\"></div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"order-label\" [innerHtml]=\"vm?.role | skeletonLoader:skeletonMode\"></div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"order-label\" [innerHtml]=\"vm?.address | skeletonLoader:skeletonMode\"></div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"order-label\" [innerHtml]=\"vm?.country | skeletonLoader:skeletonMode\"></div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"order-label\" [innerHtml]=\"vm?.region | skeletonLoader:skeletonMode\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customer-profile {\n  padding: 10px;\n  width: 300px;\n}\n\n.icon {\n  position: relative;\n  position: relative;\n  width: 30px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  padding-top: 5px;\n  padding-left: 4px;\n}\n\n.icon::before {\n  content: url('user.svg');\n  width: 30px;\n  height: 30px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFByb2plY3RzXFxEZW1vc1xcc2tlbGV0b24tbG9hZGluZy1hbmd1bGFyXFxza2VsZXRvbi1sb2FkaW5nLWFuZ3VsYXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDbkJGOztBRHFCQTtFQVpFLGtCQUFBO0VBY0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNsQkY7O0FEQUU7RUFDRSx3QkFBQTtFQUNBLFdBVTREO0VBVDVELFlBU2tFO0VBUmxFLGNBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkZWZhdWx0LXN2Zy1pbWFnZS1wYXRoOiBcIi4vLi4vYXNzZXRzL3N2Z1wiO1xyXG5AbWl4aW4gc3ZnLWltYWdlKCRpbWFnZS1uYW1lLCAkd2lkdGg6IDEwMCUsICRoZWlnaHQ6IDEwMCUsICRleHRlbnNpb246IFwic3ZnXCIsICRwYXRoOiAkZGVmYXVsdC1zdmctaW1hZ2UtcGF0aCkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogdXJsKCN7JHBhdGh9LyN7JGltYWdlLW5hbWV9LiN7JGV4dGVuc2lvbn0pO1xyXG4gICAgd2lkdGg6ICR3aWR0aDtcclxuICAgIGhlaWdodDogJGhlaWdodDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHN2Zy1pbWFnZS1mdWxsLXBhdGgoJGJhc2UtcGF0aCwgJGltYWdlLW5hbWUsICR3aWR0aDogMTAwJSwgJGhlaWdodDogMTAwJSwgJGV4dGVuc2lvbjogXCJzdmdcIiwgJHBhdGg6ICRiYXNlLXBhdGgpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IHVybCgjeyRwYXRofS8jeyRpbWFnZS1uYW1lfS4jeyRleHRlbnNpb259KTtcclxuICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuLmN1c3RvbWVyLXByb2ZpbGUge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbi5pY29uIHtcclxuICBAaW5jbHVkZSBzdmctaW1hZ2UtZnVsbC1wYXRoKCRkZWZhdWx0LXN2Zy1pbWFnZS1wYXRoLCBcInVzZXJcIiwgMzBweCwgMzBweCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbn1cclxuIiwiLmN1c3RvbWVyLXByb2ZpbGUge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuLmljb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCguLy4uL2Fzc2V0cy9zdmcvdXNlci5zdmcpO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);




let AppComponent = class AppComponent {
    constructor() {
        this.vm = null;
        this.skeletonMode = false;
    }
    showLoading() {
        this.skeletonMode = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ name: 'Anuj Sharma', role: 'UI Developer', address: 'Noida, India', country: 'India', region: 'U.P.' })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(5000))
            .subscribe(res => {
            this.skeletonMode = false;
            this.vm = res;
        });
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _skeleton_loader_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skeleton-loader.pipe */ "./src/app/skeleton-loader.pipe.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _skeleton_loader_pipe__WEBPACK_IMPORTED_MODULE_4__["SkeletonLoaderPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/skeleton-loader.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/skeleton-loader.pipe.ts ***!
  \*****************************************/
/*! exports provided: SkeletonLoaderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonLoaderPipe", function() { return SkeletonLoaderPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkeletonLoaderPipe = class SkeletonLoaderPipe {
    constructor() {
        this.defaultClass = 'skeleton-screen';
    }
    transform(value, skeletonMode, cssClass) {
        return skeletonMode ? `<span class="${cssClass ? cssClass : this.defaultClass}"></span>` : value;
    }
};
SkeletonLoaderPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'skeletonLoader'
    })
], SkeletonLoaderPipe);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\Demos\skeleton-loading-angular\skeleton-loading-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map