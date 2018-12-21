(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var appRoutes = [];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\"style=\"height:460px\">\n    <ul class=\"nav nav-pills\">\n      <li style=\"padding-top: 150px;font-size: 30px\">{{this.data}}</li>\n    </ul>\n  </div>\n        \n <router-outlet></router-outlet>  \n \n <app-footer></app-footer>  "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = window.location.protocol + "//" + window.location.host + "/greet";
        return this.http.get("url", { responseType: 'text' })
            .subscribe(function (data) { return _this.data = data; });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/bundles/ngx-cookie.umd.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"footer\">\r\n                <footer class=\"container outerFooterPanel\">                   \r\n                   <div class=\"row\">\r\n                      <div class=\"col-md-5 dxcCityData\">\r\n                         <img src=\"assets/images/logo2.png\" alt=\"Logo\" class=\"footerlogo\" />\r\n                         <div class=\"row\">\r\n                            <img src=\"assets/images/city.png\" class=\"img-responsive building col-sm-4\" width= \"116px\" height=\"100px\" alt=\"DXCImage\">\r\n                            <p class=\"row col-sm-8\">[YOUR COMPANY DESCRIPTION STARTS HERE]                       \r\n                              <br>\r\n                              .<br>\r\n                              .<br>\r\n                              .<br>.<br>.<br>\r\n                              [YOUR COMPANY DESCRIPTION ENDS HERE]\r\n                            </p>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"col-sm-4 officeData\">\r\n                         <div class=\"row dxcOffice\">\r\n                            <p class=\"dxcTitle\">[YOUR COMPANY NAME]</p>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t  <li> <img src=\"assets/images/location.png\" class=\"img-responsive\" width= \"10\" height=\"16\" alt=\"DXCImage\">[COMPANY ADDRESS]\r\n\t\t\t\t\t\t\t  </li>\r\n\t\t\t\t\t\t\t  <li> <img src=\"assets/images/phone.png\" class=\"img-responsive\" width= \"12\" height=\"12\" alt=\"DXCImage\">[COMPANY PHONE]\r\n\t\t\t\t\t\t\t  </li>\r\n\t\t\t\t\t\t\t   <li><img src=\"assets/images/landline.png\" class=\"img-responsive\" width= \"12\" height=\"12\" alt=\"DXCImage\">[COMPANY FAX]\r\n\t\t\t\t\t\t\t  </li>\r\n\t\t\t\t\t\t\t   <li><img src=\"assets/images/mail.png\" class=\"img-responsive\" width= \"12\" height=\"10\" alt=\"DXCImage\">[COMPANY EMAIL]\r\n\t\t\t\t\t\t\t  </li>\r\n\t\t\t\t\t\t\t</ul>\r\n                         </div>\r\n                         \r\n                         <div class=\"row dxcMedia\">\r\n                            <a href=\"https://www.facebook.com/DXCTechnology\"><img src=\"assets/images/ficon.png\" class=\"img-responsive\" width= \"22\" height=\"22\" alt=\"DXCImage\"></a>\r\n                            <a href=\"https://twitter.com/dxctechnology\"><img src=\"assets/images/twitter.png\" class=\"img-responsive\"  width= \"22\" height=\"22\" alt=\"DXCImage\"></a>\r\n                            <a href=\"https://www.linkedin.com/company/dxctechnology\"><img src=\"assets/images/linkedin.png\" class=\"img-responsive\"  width= \"22\" height=\"22\" alt=\"DXCImage\"></a>\r\n                            <a href=\"https://plus.google.com/+dxctechnology\"><img src=\"assets/images/googlePlus.png\" class=\"img-responsive\"  width= \"22\" height=\"22\" alt=\"DXCImage\"></a>\r\n                            <a href=\"https://www.instagram.com/official_DxcTechnology\"><img src=\"assets/images/circle.png\" class=\"img-responsive\"  width= \"22\" height=\"22\" alt=\"DXCImage\"></a>\r\n                            <a href=\"https://www.youtube.com/DXCTechnology\"><img src=\"assets/images/youtube.png\" class=\"img-responsive\"  width= \"22\" height=\"22\" alt=\"DXCImage\"></a>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"col-sm-2 dxcimplink\">\r\n                         <ul>\r\n\t\t\t\t\t\t\t <li><a href=\"http://www.dxc.technology/about_us\">[ABOUT YOUR COMPANY]</a></li>\r\n\t\t\t\t\t\t\t <li><a href=\"http://www.dxc.technology/contact_us\">Contact Us</a></li>\r\n\t\t\t\t\t\t\t <!--<li><a href=\"#\">Site Map</a></li>\r\n\t\t\t\t\t\t\t <li><a href=\"#\">Help</a></li>-->\r\n\t\t\t\t\t\t\t <li><a href=\"http://www.dxc.technology/legal\">Legal</a></li>\r\n\t\t\t\t\t\t\t <li><a href=\"http://www.dxc.technology/privacy\">Privacy Policy</a></li>\r\n\t\t\t\t\t\t </ul>\r\n                  </div>\r\n\r\n                   </div>\r\n\r\n                   <div class=\"row\">\r\n                        <p class=\"copyrights\">Copyright © [YYYY YOUR COMPANY NAME]</p>\r\n                     </div>\r\n                   <br>\r\n                </footer>\r\n             </div>\t \r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submenu{z-index: 1;}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"headerbg\"> \r\n       <header class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t   <div class=\"col-sm-7\">\r\n\t\t\t\t   <p class=\"dxcLogo\"><img src=\"assets/images/logo2.png\" alt=\"Logo\" class=\"headerlogo\" /></p>\r\n\t\t\t\t   <p class=\"headerTitle\">[INSERT YOUR TITLE HERE]</p>\r\n\t\t\t   </div>\r\n\t\t\t   <div class=\"col-sm-5 Headermenu\">\r\n\t\t\t\t\t <ul id=\"menu\">\r\n\t\t\t\t\t\t  <li><img [src]=\"headerprofilephotoURL\" alt=\"User Image\" class=\"userImage\"></li>\r\n\t\t\t\t\t\t  <li>\r\n\t\t\t\t\t\t\t<input id=\"check01\" type=\"checkbox\" name=\"menu\"/>\r\n\t\t\t\t\t\t\t<p class=\"topmenu\" for=\"check01\" style=\"margin-top:15px\">[LOGGED IN USER]</p>\r\n\t\t\t\t\t\t\t<ul class=\"submenu\">\r\n\t\t\t\t\t\t\t  <!-- <li><a routerLink=\"/userprofile\" (click)=\"profile()\">View My Profile</a></li>\r\n\t\t\t\t\t\t\t  <!-- <li><a href=\"#\">User Preference/Settings</a></li> -->\r\n\t\t\t\t\t\t\t <!--  <li><a routerLink=\"/logout\" (click)=\"logout()\">Log out</a></li> -->\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t  </li>\r\n\t\t\t\t\t</ul>\r\n               </div>\r\n          </div>\r\n        </header>\r\n\t </div>\t"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { ServiceService } from '../service.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.model = {};
        this.headerprofilephotoURL = "assets/images/avatar.png";
        this.isLoggedIn = false;
        this.isAdmin = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        /* let opts: CookieOptions = {
           httpOnly: true
         };
         this.token=this._cookieService.get('cnauth-cookie');
         if (typeof this.token != "undefined" && this.token.length > 0)
         {
           console.log("Calling Validate");
             this.loginService.validate(this.token, "authenticateToken:" ).subscribe(response => {
               if (typeof response.expirytime != "undefined" && response.expirytime > 0 && typeof response.username != "undefined") {
                     this.model.username = response.username;
                    this.loginService.queryUserProfile(this.model.username).subscribe(response => {
                       this.headerUsername = response.firstName;
                       this.headerprofilephotoURL = response.profilephotoURL;
                       this.isLoggedIn = true;
                       /*if (typeof response.userAuthorities != "undefined" && response.userAuthorities.length > 0) {
                         for (var i = 0; i < response.userAuthorities.length; i++) {
                          if(response.userAuthorities[i].authority['type'] == 'ADMIN' )
                           this.isAdmin = true;
                          }
                       }*/
        /*       },error => {
                 this.isLoggedIn = false;
                 //this.isAdmin = false;
               });
           }
       },error => {
         this.isLoggedIn = false;
         //this.isAdmin = false;
       });
   }
 }

 profile(){
   //window.location.href="https://cloudapplicationstoolkit.apps.pcf.dxc.com/um/#/userprofile";
   window.location.href = window.location.protocol + "//" + window.location.hostname + "/um/#/userprofile";
 }
 
 logout(){
   sessionStorage.removeItem('userdata');
   //window.location.href="https://cloudapplicationstoolkit.apps.pcf.dxc.com/um/#/logout";
   window.location.href = window.location.protocol + "//" + window.location.hostname + "/um/#/logout";
 }
*/
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\CloudNativeDev_Proj\demoStarterProj\demoStarterProject\demoStarterProject-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map