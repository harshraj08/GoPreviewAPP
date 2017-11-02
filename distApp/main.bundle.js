webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main{\r\n\tmargin-left:30px;\r\n\tmargin-right:30px;\r\n}\r\n.flex-container {   \r\n\t-webkit-display:flex;/*safari*/\r\n\tdisplay:-webkit-box;\r\n\tdisplay:-ms-flexbox;\r\n\tdisplay:flex; /* Safari */\r\n\t-ms-flex-wrap: wrap;\r\n\t    flex-wrap: wrap;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n\t\r\n}\r\n.flex-item {\t\r\npadding-right:30px;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n}\r\n\r\n.flex-item h2{\r\n\tcolor:white;\r\n\ttext-align:left;\r\n\tfont-size:24px;\r\n\tmargin-top:24px;\r\n\tmargin-bottom:90px;\r\n\twidth:150px;\t\r\n}\r\n\r\n.input-group{\r\n\tpadding:30px 42px 34px 3px;\t\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class = \"main\" infinite-scroll\n            [infiniteScrollDistance]=\"2\"\n            [infiniteScrollThrottle]=\"300\"\n            (scrolled)=\"onScroll()\">\n\n  <div class=\"row\">\n   <div class=\"col-lg-12\">\n      <div class=\"input-group\">\n   <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]='filterText'/>\n   <div class=\"input-group-btn\">\n        <button (click)=\"filterList()\" class=\"btn\" type=\"submit\" >\n        <span class=\"glyphicon glyphicon-search\" ></span>\n        </button>\n   </div>\n   </div>\n   </div>\n  </div>\n\n<div class=\"flex-container\" *ngIf = \" videosDataArray \">\n\t<div class=\"flex-item\" *ngFor = \"let arr of videosDataArray.page['content-items'].content\" >\n\t\n\t  <img src = \"assets/images/{{arr['poster-image']}}\"  onerror=\"this.src='assets/images/noData.jpg';\">\n\t  <h2>{{ arr.name }}</h2>\n\t</div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_service__ = __webpack_require__("../../../../../src/app/video.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_videoService) {
        this._videoService = _videoService;
        this.title = 'app';
        this.filterText = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._videoService.getVideos("CONTENTLISTINGPAGE-PAGE1.json").subscribe(function (videos) {
            _this.videosDataArray = videos;
            _this.totalPages = _this.videosDataArray.page['total-content-items'];
            _this.pageNumRequested = _this.videosDataArray.page['page-num-requested'];
        }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.onScroll = function () {
        var _this = this;
        if (this.filterText == "") {
            this.pageNumRequested++;
            if (this.videosDataArray.page['content-items'].content.length < this.totalPages) {
                this._videoService.getVideos("CONTENTLISTINGPAGE-PAGE" + this.pageNumRequested + ".json").subscribe(function (videos) {
                    _this.scrollArray = videos;
                    for (var i = 0; i < _this.scrollArray.page['content-items'].content.length; i++) {
                        _this.videosDataArray.page['content-items'].content.push(_this.scrollArray.page['content-items'].content[i]);
                    }
                    console.log(_this.videosDataArray.page['content-items'].content.length);
                }, function (error) { return _this.errorMessage = error; });
            }
        }
    };
    AppComponent.prototype.filterList = function () {
        var _this = this;
        var filterTextValue = this.filterText;
        if (this.filterText == "") {
            this._videoService.getVideos("CONTENTLISTINGPAGE-PAGE1.json").subscribe(function (videos) {
                _this.videosDataArray = videos;
                _this.totalPages = _this.videosDataArray.page['total-content-items'];
                _this.pageNumRequested = _this.videosDataArray.page['page-num-requested'];
            }, function (error) { return _this.errorMessage = error; });
        }
        else {
            // video service -- 
            this._videoService.getVideos("CONTENTLISTINGPAGE-ALLPAGE.json").subscribe(function (videos) {
                _this.allVideos = videos;
                _this.videosDataArray.page['content-items'].content = _this.allVideos.page['content-items'].content.filter(function (video) { return video.name.toLocaleLowerCase().indexOf(filterTextValue) !== -1; });
                /*this.filteredVideos = this.allVideos.page['content-items'].content.map(function(video){
                    return video.name.contains(this.filterText);
                })
                this.videosDataArray.page['content-items'].content = this.filteredVideos;*/
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__video_service__["a" /* VideoService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_infinite_scroll__ = __webpack_require__("../../../../angular2-infinite-scroll/angular2-infinite-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_infinite_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_infinite_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__video_service__ = __webpack_require__("../../../../../src/app/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_infinite_scroll__["InfiniteScrollModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__video_service__["a" /* VideoService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/video.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VideoService = (function () {
    function VideoService(_http) {
        this._http = _http;
        // TODO update path to json file
        this._videoUrl = 'assets/API/';
    }
    VideoService.prototype.getVideos = function (url) {
        return this._http.get(this._videoUrl + url)
            .do(function (data) { return ('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    VideoService.prototype.handleError = function (err) {
        console.error(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err.message);
    };
    return VideoService;
}());
VideoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], VideoService);

var _a;
//# sourceMappingURL=video.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map