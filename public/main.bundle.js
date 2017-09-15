webpackJsonp([1,5],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.register = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('mesvie/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.activate = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.put('mesvie/activate/' + token, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.login = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('mesvie/login', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        return localStorage.getItem('id_token');
    };
    AuthService.prototype.storeData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/auth.service.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilmService = (function () {
    function FilmService(http) {
        this.http = http;
    }
    FilmService.prototype.loadToken = function () {
        return localStorage.getItem('id_token');
    };
    FilmService.prototype.filmAll = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.loadToken());
        return this.http.get('mesvie/film-all', { headers: headers }).map(function (res) { return res.json(); });
    };
    FilmService.prototype.filmDetail = function (filmId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.loadToken());
        return this.http.get('mesvie/film-detail/' + filmId, { headers: headers }).map(function (res) { return res.json(); });
    };
    FilmService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], FilmService);
    return FilmService;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/film.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.loadToken = function () {
        return localStorage.getItem('id_token');
    };
    UserService.prototype.getUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.loadToken());
        return this.http.get('mesvie/profil', { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.updateProfil = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.loadToken());
        headers.append('Content-Type', 'application/json');
        return this.http.post('mesvie/profil-update', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/user.service.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProviderService = (function () {
    function ProviderService(router) {
        this.router = router;
        this.isLoading = false;
        this.modalFilmActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.modalProfilActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.modelParams = [{
                dismissible: false,
                opacity: .5,
                inDuration: 300,
                outDuration: 200,
                startingTop: '30%',
                endingTop: '11%',
                complete: function () { }
            }];
        this.chipsActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chipsPlaceholder = {
            placeholder: '+Pemain'
        };
    }
    ProviderService.prototype.isLogin = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    ProviderService.prototype.getAuthType = function () {
        return JSON.parse(localStorage.getItem('user')).type;
    };
    ProviderService.prototype.navRoute = function (route) {
        this.router.navigate([route]);
        this.getBackTop();
    };
    ProviderService.prototype.openModalFilm = function () {
        this.modalFilmActions.emit({ action: "modal", params: ['open'] });
    };
    ProviderService.prototype.closeModalFilm = function () {
        this.modalFilmActions.emit({ action: "modal", params: ['close'] });
    };
    ProviderService.prototype.openModalProfil = function () {
        this.modalProfilActions.emit({ action: "modal", params: ['open'] });
    };
    ProviderService.prototype.closeModalProfil = function () {
        this.modalProfilActions.emit({ action: "modal", params: ['close'] });
    };
    ProviderService.prototype.toast = function (text, duration, style, route) {
        var _this = this;
        if (style === void 0) { style = ''; }
        if (route === void 0) { route = this.router.url; }
        Materialize.toast(text, duration, style, function () { _this.navRoute(route); });
        this.getBackTop();
    };
    ProviderService.prototype.getBackTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    ProviderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object])
    ], ProviderService);
    return ProviderService;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/provider.service.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
        this.cssClass = false;
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.search-active'), 
        __metadata('design:type', Boolean)
    ], AppComponent.prototype, "cssClass", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'body',
            template: __webpack_require__(724),
            styles: [__webpack_require__(709)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/app.component.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmmakerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilmmakerService = (function () {
    function FilmmakerService(http) {
        this.http = http;
    }
    FilmmakerService.prototype.loadToken = function () {
        return localStorage.getItem('id_token');
    };
    FilmmakerService.prototype.filmAdd = function (film) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.loadToken());
        headers.append('Content-Type', 'application/json');
        return this.http.post('mesvie/film-add', film, { headers: headers }).map(function (res) { return res.json(); });
    };
    FilmmakerService.prototype.filmUpdate = function (film) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.loadToken());
        headers.append('Content-Type', 'application/json');
        return this.http.post('mesvie/film-update', film, { headers: headers }).map(function (res) { return res.json(); });
    };
    FilmmakerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], FilmmakerService);
    return FilmmakerService;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/filmmaker.service.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransaksiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransaksiService = (function () {
    function TransaksiService(http) {
        this.http = http;
    }
    TransaksiService.prototype.loadToken = function () {
        return localStorage.getItem('id_token');
    };
    TransaksiService.prototype.purchase = function (payment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.loadToken());
        headers.append('Content-Type', 'application/json');
        return this.http.post('mesvie/purchase', payment, { headers: headers }).map(function (res) { return res.json(); });
    };
    TransaksiService.prototype.transaksiAdd = function (transaksi) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.loadToken());
        headers.append('Content-Type', 'application/json');
        return this.http.post('mesvie/transaksi-add', transaksi, { headers: headers }).map(function (res) { return res.json(); });
    };
    TransaksiService.prototype.transaksiGet = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.loadToken());
        return this.http.get('mesvie/transaksi-all', { headers: headers }).map(function (res) { return res.json(); });
    };
    TransaksiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], TransaksiService);
    return TransaksiService;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/transaksi.service.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatcherService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WatcherService = (function () {
    function WatcherService(http) {
        this.http = http;
    }
    WatcherService.prototype.loadToken = function () {
        return localStorage.getItem('id_token');
    };
    WatcherService.prototype.tonton = function (filmId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.loadToken());
        return this.http.get('mesvie/tonton/' + filmId, { headers: headers }).map(function (res) { return res.json(); });
    };
    WatcherService.prototype.watchlater = function (action) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.loadToken());
        headers.append('Content-Type', 'application/json');
        return this.http.post('mesvie/watchlater', action, { headers: headers }).map(function (res) { return res.json(); });
    };
    WatcherService.prototype.watchlaterCek = function (filmId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.loadToken());
        return this.http.get('mesvie/watchlater-cek/' + filmId, { headers: headers }).map(function (res) { return res.json(); });
    };
    WatcherService.prototype.love = function (action) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.loadToken());
        headers.append('Content-Type', 'application/json');
        return this.http.post('mesvie/love', action, { headers: headers }).map(function (res) { return res.json(); });
    };
    WatcherService.prototype.loveCek = function (filmId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.loadToken());
        return this.http.get('mesvie/love-cek/' + filmId, { headers: headers }).map(function (res) { return res.json(); });
    };
    WatcherService.prototype.review = function (review) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.loadToken());
        headers.append('Content-Type', 'application/json');
        return this.http.post('mesvie/review', review, { headers: headers }).map(function (res) { return res.json(); });
    };
    WatcherService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], WatcherService);
    return WatcherService;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/watcher.service.js.map

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 402;


/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(523);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/main.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_not_auth_guard__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_watcher_guard__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_filmmaker_guard__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_watcher_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_filmmaker_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_film_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_transaksi_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_validate_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_provider_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_filter_pipe__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_order_pipe__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_truncate_pipe__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_navbar_navbar_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_home_home_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_register_register_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_activate_activate_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_login_login_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_dashboard_dashboard_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_daftar_transaksi_daftar_transaksi_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_paket_paket_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_dashboard_watcher_watcher_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_dashboard_filmmaker_filmmaker_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_profil_profil_component__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_kategori_kategori_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_film_detail_film_detail_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_film_upload_film_upload_component__ = __webpack_require__(530);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






































var appRoutes = [
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_25__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_not_auth_guard__["a" /* NotAuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_28__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_not_auth_guard__["a" /* NotAuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_26__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_not_auth_guard__["a" /* NotAuthGuard */]] },
    { path: 'activate/:token', component: __WEBPACK_IMPORTED_MODULE_27__components_activate_activate_component__["a" /* ActivateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_not_auth_guard__["a" /* NotAuthGuard */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_29__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'transaksi', component: __WEBPACK_IMPORTED_MODULE_30__components_daftar_transaksi_daftar_transaksi_component__["a" /* DaftarTransaksiComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'paket', component: __WEBPACK_IMPORTED_MODULE_31__components_paket_paket_component__["a" /* PaketComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profil', component: __WEBPACK_IMPORTED_MODULE_34__components_profil_profil_component__["a" /* ProfilComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_watcher_guard__["a" /* WatcherGuard */]] },
    { path: 'kategori/:name', component: __WEBPACK_IMPORTED_MODULE_35__components_kategori_kategori_component__["a" /* KategoriComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_watcher_guard__["a" /* WatcherGuard */]] },
    { path: 'film/:id', component: __WEBPACK_IMPORTED_MODULE_36__components_film_detail_film_detail_component__["a" /* FilmDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_watcher_guard__["a" /* WatcherGuard */]] },
    { path: 'film-upload', component: __WEBPACK_IMPORTED_MODULE_37__components_film_upload_film_upload_component__["a" /* FilmUploadComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_filmmaker_guard__["a" /* FilmmakerGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_activate_activate_component__["a" /* ActivateComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_daftar_transaksi_daftar_transaksi_component__["a" /* DaftarTransaksiComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_paket_paket_component__["a" /* PaketComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_dashboard_watcher_watcher_component__["a" /* WatcherComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_dashboard_filmmaker_filmmaker_component__["a" /* FilmmakerComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_profil_profil_component__["a" /* ProfilComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_film_upload_film_upload_component__["a" /* FilmUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_kategori_kategori_component__["a" /* KategoriComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_film_detail_film_detail_component__["a" /* FilmDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_order_pipe__["a" /* OrderPipe */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_truncate_pipe__["a" /* TruncatePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__guards_not_auth_guard__["a" /* NotAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_10__guards_watcher_guard__["a" /* WatcherGuard */],
                __WEBPACK_IMPORTED_MODULE_11__guards_filmmaker_guard__["a" /* FilmmakerGuard */],
                __WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_14__services_watcher_service__["a" /* WatcherService */],
                __WEBPACK_IMPORTED_MODULE_15__services_filmmaker_service__["a" /* FilmmakerService */],
                __WEBPACK_IMPORTED_MODULE_16__services_film_service__["a" /* FilmService */],
                __WEBPACK_IMPORTED_MODULE_17__services_transaksi_service__["a" /* TransaksiService */],
                __WEBPACK_IMPORTED_MODULE_18__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_19__services_provider_service__["a" /* ProviderService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/app.module.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_provider_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivateComponent = (function () {
    function ActivateComponent(authService, provider, route) {
        this.authService = authService;
        this.provider = provider;
        this.route = route;
    }
    ActivateComponent.prototype.ngOnInit = function () {
        var params = this.route.snapshot.params;
        this.authService.activate(params.token).subscribe(function (data) {
            console.log(data.message);
        });
    };
    ActivateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-activate',
            template: __webpack_require__(725),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_provider_service__["a" /* ProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_provider_service__["a" /* ProviderService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], ActivateComponent);
    return ActivateComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/activate.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_transaksi_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_provider_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaftarTransaksiComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DaftarTransaksiComponent = (function () {
    function DaftarTransaksiComponent(transaksiService, provider) {
        this.transaksiService = transaksiService;
        this.provider = provider;
    }
    DaftarTransaksiComponent.prototype.ngOnInit = function () {
        this.getTransaksi();
    };
    DaftarTransaksiComponent.prototype.getTransaksi = function () {
        var _this = this;
        this.provider.isLoading = true;
        this.transaksiService.transaksiGet().subscribe(function (data) {
            _this.transaksis = data.data;
            _this.provider.isLoading = false;
        });
    };
    DaftarTransaksiComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-daftar-transaksi',
            template: __webpack_require__(726),
            styles: [__webpack_require__(711)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_transaksi_service__["a" /* TransaksiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_transaksi_service__["a" /* TransaksiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_provider_service__["a" /* ProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_provider_service__["a" /* ProviderService */]) === 'function' && _b) || Object])
    ], DaftarTransaksiComponent);
    return DaftarTransaksiComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/daftar-transaksi.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_provider_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(provider) {
        this.provider = provider;
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(727),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_provider_service__["a" /* ProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_provider_service__["a" /* ProviderService */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/dashboard.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_filmmaker_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_provider_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmmakerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FilmmakerComponent = (function () {
    function FilmmakerComponent(userService, filmmakerService, validate, provider, sanitizer) {
        this.userService = userService;
        this.filmmakerService = filmmakerService;
        this.validate = validate;
        this.provider = provider;
        this.sanitizer = sanitizer;
        this.uploaderPhoto = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({ url: 'https://mesvie.herokuapp.com/mesvie/photo-upload', authToken: this.userService.loadToken() });
        this.filmPerPage = 3;
    }
    FilmmakerComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.getPreview();
    };
    FilmmakerComponent.prototype.getUser = function () {
        var _this = this;
        this.provider.isLoading = true;
        this.userService.getUser().subscribe(function (data) {
            _this.user = data.data;
            _this.initLoadmore();
            _this.provider.isLoading = false;
        });
    };
    FilmmakerComponent.prototype.getPreview = function () {
        var _this = this;
        this.uploaderPhoto.onAfterAddingFile = function (fileItem) {
            if (_this.uploaderPhoto.queue.length > 1)
                _this.uploaderPhoto.queue[0].remove();
            _this.previewPhoto = _this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(fileItem._file));
        };
    };
    FilmmakerComponent.prototype.onUpdateProfil = function () {
        var _this = this;
        if (this.validate.updateProfil(this.user)) {
            var updateUser_1 = {
                fullname: this.user.fullname,
                phone: this.user.phone,
                address: this.user.address,
                bio: this.user.bio,
                photo: this.user.photo
            };
            if (this.previewPhoto) {
                this.uploaderPhoto.uploadAll();
                this.uploaderPhoto.onCompleteItem = function (item, response, status, headers) {
                    var data = JSON.parse(response);
                    updateUser_1.photo = data.filename;
                    _this.prosesUpdateProfil(updateUser_1);
                };
            }
            else
                this.prosesUpdateProfil(updateUser_1);
        }
    };
    FilmmakerComponent.prototype.prosesUpdateProfil = function (updateUser) {
        var _this = this;
        this.userService.updateProfil(updateUser).subscribe(function (data) {
            if (data.success) {
                _this.provider.toast(data.message, 2000, 'Green');
                _this.onCancelProfil();
            }
            else
                _this.provider.toast(data.message, 2000, 'Red');
        });
    };
    FilmmakerComponent.prototype.onCancelProfil = function () {
        this.getUser();
        this.previewPhoto = null;
        this.provider.closeModalProfil();
    };
    FilmmakerComponent.prototype.getUpdateFilm = function (film) {
        this.filmSelected = film;
        this.provider.openModalFilm();
    };
    FilmmakerComponent.prototype.onUpdateFilm = function () {
        var _this = this;
        if (this.validate.filmUpdate(this.filmSelected)) {
            this.filmmakerService.filmUpdate(this.filmSelected).subscribe(function (data) {
                if (data.success) {
                    _this.provider.toast(data.message, 2000, 'Green');
                    _this.onCancelFilm();
                }
                else
                    _this.provider.toast(data.message, 2000, 'Red');
            });
        }
    };
    FilmmakerComponent.prototype.onCancelFilm = function () {
        this.getUser();
        this.provider.closeModalFilm();
    };
    FilmmakerComponent.prototype.initLoadmore = function () {
        if (this.user.filmmaker._daftarfilm.length <= this.filmPerPage)
            this.loadmoreFilm = null;
        else
            this.loadmoreFilm = { hide: true, disable: false };
    };
    FilmmakerComponent.prototype.onLoadmoreFilm = function () {
        var _this = this;
        this.loadmoreFilm.hide = false;
        this.loadmoreFilm.disable = true;
        this.loadmoreFilmId = setInterval(function () {
            _this.filmPerPage += 4;
            if (_this.user.filmmaker._daftarfilm.length <= _this.filmPerPage)
                _this.loadmoreFilm = null;
            else {
                _this.loadmoreFilm.hide = true;
                _this.loadmoreFilm.disable = false;
            }
            clearInterval(_this.loadmoreFilmId);
        }, 2000);
    };
    FilmmakerComponent.prototype.ngOnDestroy = function () {
        if (this.loadmoreFilmId)
            clearInterval(this.loadmoreFilmId);
    };
    FilmmakerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-filmmaker',
            template: __webpack_require__(728),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_filmmaker_service__["a" /* FilmmakerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_filmmaker_service__["a" /* FilmmakerService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_provider_service__["a" /* ProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_provider_service__["a" /* ProviderService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _e) || Object])
    ], FilmmakerComponent);
    return FilmmakerComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/filmmaker.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_film_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_provider_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatcherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WatcherComponent = (function () {
    function WatcherComponent(filmService, provider) {
        this.filmService = filmService;
        this.provider = provider;
        this.page = 1;
    }
    WatcherComponent.prototype.ngOnInit = function () {
        this.getFilmAll();
    };
    WatcherComponent.prototype.getFilmAll = function () {
        var _this = this;
        this.provider.isLoading = true;
        this.filmService.filmAll().subscribe(function (data) {
            _this.films = data.data;
            _this.provider.isLoading = false;
        });
    };
    WatcherComponent.prototype.onPageChange = function (page) {
        this.page = page;
    };
    WatcherComponent.prototype.onFilmDetail = function (filmId) {
        this.provider.navRoute('/film/' + filmId);
    };
    WatcherComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-watcher',
            template: __webpack_require__(729),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_film_service__["a" /* FilmService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_film_service__["a" /* FilmService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_provider_service__["a" /* ProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_provider_service__["a" /* ProviderService */]) === 'function' && _b) || Object])
    ], WatcherComponent);
    return WatcherComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/watcher.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_provider_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_watcher_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_film_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FilmDetailComponent = (function () {
    function FilmDetailComponent(watcherService, filmService, validate, provider, route, sanitizer) {
        this.watcherService = watcherService;
        this.filmService = filmService;
        this.validate = validate;
        this.provider = provider;
        this.route = route;
        this.sanitizer = sanitizer;
        this.watch = false;
        this.watchlaterAction = { id: '', cek: '' };
        this.loveAction = { id: '', cek: '' };
    }
    FilmDetailComponent.prototype.ngOnInit = function () {
        this.getFilmId();
        this.getFilmDetail();
        this.getWatchlater();
        this.getLove();
    };
    FilmDetailComponent.prototype.getFilmDetail = function () {
        var _this = this;
        this.provider.isLoading = true;
        this.filmService.filmDetail(this.paramsId).subscribe(function (data) {
            _this.film = data.data;
            _this.provider.isLoading = false;
        });
    };
    FilmDetailComponent.prototype.getFilmId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.paramsId = params['id'];
        });
    };
    FilmDetailComponent.prototype.onTonton = function () {
        var _this = this;
        this.watcherService.tonton(this.film._id).subscribe(function (data) {
            if (data.success) {
                _this.provider.toast(data.message, 2000, 'Green');
                _this.video = _this.sanitizer.bypassSecurityTrustResourceUrl('film/video/' + _this.film.video);
                _this.watch = true;
            }
            else
                _this.provider.toast(data.message, 2000, 'Green');
        });
    };
    FilmDetailComponent.prototype.onKeluar = function () {
        this.video = null;
        this.watch = false;
    };
    FilmDetailComponent.prototype.getWatchlater = function () {
        var _this = this;
        this.watcherService.watchlaterCek(this.paramsId).subscribe(function (data) {
            _this.watchlaterAction.id = data.data.id;
            _this.watchlaterAction.cek = data.data.cek;
        });
    };
    FilmDetailComponent.prototype.onWatchlater = function () {
        var _this = this;
        var action = {
            actionId: this.watchlaterAction.id,
            filmId: this.film._id
        };
        this.watcherService.watchlater(action).subscribe(function (data) {
            _this.getWatchlater();
        });
    };
    FilmDetailComponent.prototype.getLove = function () {
        var _this = this;
        this.watcherService.loveCek(this.paramsId).subscribe(function (data) {
            _this.loveAction.id = data.data.id;
            _this.loveAction.cek = data.data.cek;
        });
    };
    FilmDetailComponent.prototype.onLove = function () {
        var _this = this;
        var action = {
            actionId: this.loveAction.id,
            filmId: this.film._id
        };
        this.watcherService.love(action).subscribe(function (data) {
            _this.getLove();
        });
    };
    FilmDetailComponent.prototype.onReview = function () {
        var _this = this;
        var review = {
            text: this.review,
            filmId: this.film._id
        };
        if (this.validate.review(review)) {
            this.watcherService.review(review).subscribe(function (data) {
                _this.getFilmDetail();
            });
        }
    };
    FilmDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-film-detail',
            template: __webpack_require__(730),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_watcher_service__["a" /* WatcherService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_watcher_service__["a" /* WatcherService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_film_service__["a" /* FilmService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_film_service__["a" /* FilmService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_provider_service__["a" /* ProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_provider_service__["a" /* ProviderService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _f) || Object])
    ], FilmDetailComponent);
    return FilmDetailComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/film-detail.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_filmmaker_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_provider_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmUploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FilmUploadComponent = (function () {
    function FilmUploadComponent(filmmakerService, validate, provider, sanitizer) {
        this.filmmakerService = filmmakerService;
        this.validate = validate;
        this.provider = provider;
        this.sanitizer = sanitizer;
        this.pemain = [];
        this.optKategori = [
            { value: 'Action', checked: false },
            { value: 'Comedy', checked: false },
            { value: 'Horror', checked: false },
            { value: 'Romance', checked: false },
        ];
        this.uploaderVideo = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({ url: 'https://mesvie.herokuapp.com/mesvie/video-upload', authToken: this.filmmakerService.loadToken() });
        this.uploaderCover = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({ url: 'https://mesvie.herokuapp.com/mesvie/cover-upload', authToken: this.filmmakerService.loadToken() });
    }
    FilmUploadComponent.prototype.ngOnInit = function () {
        this.getPreview();
    };
    FilmUploadComponent.prototype.getPreview = function () {
        var _this = this;
        this.uploaderVideo.onAfterAddingFile = function (fileItem) {
            if (_this.uploaderVideo.queue.length > 1)
                _this.uploaderVideo.queue[0].remove();
            _this.previewVideo = _this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(fileItem._file));
        };
        this.uploaderCover.onAfterAddingFile = function (fileItem) {
            if (_this.uploaderCover.queue.length > 1)
                _this.uploaderCover.queue[0].remove();
            _this.previewCover = _this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(fileItem._file));
        };
    };
    FilmUploadComponent.prototype.onAddFilm = function () {
        var _this = this;
        var film = {
            judul: this.judul,
            video: '',
            cover: '',
            harga: this.harga,
            durasi: this.durasi,
            kategori: this.getCheckedBox(),
            pemain: this.pemain,
            description: this.description
        };
        if (this.validate.filmAdd(film)) {
            this.uploaderVideo.uploadAll();
            this.uploaderVideo.onCompleteItem = function (item, response, status, headers) {
                var data = JSON.parse(response);
                film.video = data.filename;
                _this.uploaderCover.uploadAll();
                _this.uploaderCover.onCompleteItem = function (item, response, status, headers) {
                    var data = JSON.parse(response);
                    film.cover = data.filename;
                    _this.filmmakerService.filmAdd(film).subscribe(function (data) {
                        if (data.success)
                            _this.provider.toast(data.message, 2000, 'Green', '/filmmaker');
                        else
                            _this.provider.toast(data.message, 2000, 'Red');
                    });
                };
            };
        }
    };
    FilmUploadComponent.prototype.onCheckKategori = function (kategori) {
        for (var i = 0; i < this.optKategori.length; i++) {
            if (this.optKategori[i].value == kategori) {
                this.optKategori[i].checked = !this.optKategori[i].checked;
            }
        }
    };
    FilmUploadComponent.prototype.getCheckedBox = function () {
        return this.optKategori.filter(function (opt) { return opt.checked; }).map(function (opt) { return opt.value; });
    };
    FilmUploadComponent.prototype.pemainAdd = function (chip) {
        this.pemain.push(chip.tag);
    };
    FilmUploadComponent.prototype.pemainDelete = function (chip) {
        for (var i = 0; i < this.pemain.length; i++) {
            if (this.pemain[i] == chip.tag)
                this.pemain.splice(i, 1);
        }
    };
    FilmUploadComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-film-upload',
            template: __webpack_require__(731),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_filmmaker_service__["a" /* FilmmakerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_filmmaker_service__["a" /* FilmmakerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_provider_service__["a" /* ProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_provider_service__["a" /* ProviderService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _d) || Object])
    ], FilmUploadComponent);
    return FilmUploadComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/film-upload.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(732),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/home.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_film_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_provider_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KategoriComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KategoriComponent = (function () {
    function KategoriComponent(filmService, provider, route) {
        this.filmService = filmService;
        this.provider = provider;
        this.route = route;
        this.kategoriPerPage = 4;
    }
    KategoriComponent.prototype.ngOnInit = function () {
        this.getKategori();
        this.getFilmAll();
    };
    KategoriComponent.prototype.getKategori = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.kategori = params['name'];
        });
    };
    KategoriComponent.prototype.getFilmAll = function () {
        var _this = this;
        this.provider.isLoading = true;
        this.filmService.filmAll().subscribe(function (data) {
            _this.films = data.data;
            _this.initLoadmore();
            _this.provider.isLoading = false;
        });
    };
    KategoriComponent.prototype.onFilmDetail = function (filmId) {
        this.provider.navRoute('/film/' + filmId);
    };
    KategoriComponent.prototype.initLoadmore = function () {
        if (this.films.length <= this.kategoriPerPage)
            this.loadmoreKategori = null;
        else
            this.loadmoreKategori = { hide: true, disable: false };
    };
    KategoriComponent.prototype.onLoadmoreKategori = function () {
        var _this = this;
        this.loadmoreKategori.hide = false;
        this.loadmoreKategori.disable = true;
        this.loadmoreKategoriId = setInterval(function () {
            _this.kategoriPerPage += 4;
            if (_this.films.length <= _this.kategoriPerPage)
                _this.loadmoreKategori = null;
            else {
                _this.loadmoreKategori.hide = true;
                _this.loadmoreKategori.disable = false;
            }
            clearInterval(_this.loadmoreKategoriId);
        }, 2000);
    };
    KategoriComponent.prototype.ngOnDestroy = function () {
        if (this.loadmoreKategoriId)
            clearInterval(this.loadmoreKategoriId);
    };
    KategoriComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-kategori',
            template: __webpack_require__(733),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_film_service__["a" /* FilmService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_film_service__["a" /* FilmService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_provider_service__["a" /* ProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_provider_service__["a" /* ProviderService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], KategoriComponent);
    return KategoriComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/kategori.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_provider_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, validate, provider) {
        this.authService = authService;
        this.validate = validate;
        this.provider = provider;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        if (this.validate.login(user)) {
            this.authService.login(user).subscribe(function (data) {
                if (data.success) {
                    _this.authService.storeData(data.token, data.data);
                    _this.provider.toast(data.message, 2000, 'Green', '/');
                }
                else
                    _this.provider.toast(data.message, 2000, 'Red');
            });
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(734),
            styles: [__webpack_require__(719)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_provider_service__["a" /* ProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_provider_service__["a" /* ProviderService */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/login.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_film_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_provider_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(227);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = (function () {
    function NavbarComponent(authService, userService, filmService, provider, appComponent) {
        this.authService = authService;
        this.userService = userService;
        this.filmService = filmService;
        this.provider = provider;
        this.appComponent = appComponent;
        this.isSearch = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (this.provider.isLogin()) {
            this.getUser();
            this.getFilmAll();
        }
    };
    NavbarComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (data) {
            _this.user = data.data;
        });
    };
    NavbarComponent.prototype.getFilmAll = function () {
        var _this = this;
        this.filmService.filmAll().subscribe(function (data) {
            _this.films = data.data;
        });
    };
    NavbarComponent.prototype.showSearch = function () {
        this.appComponent.cssClass = true;
    };
    NavbarComponent.prototype.closeSearch = function () {
        this.appComponent.cssClass = false;
    };
    NavbarComponent.prototype.getSearch = function () {
        if (this.search)
            this.isSearch = true;
        else
            this.isSearch = false;
    };
    NavbarComponent.prototype.onFilmDetail = function (filmId) {
        this.provider.navRoute('/film/' + filmId);
        this.closeSearch();
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.provider.toast("You're logout now!", 2000, 'Green', '/welcome');
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(735),
            styles: [__webpack_require__(720)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_film_service__["a" /* FilmService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_film_service__["a" /* FilmService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_provider_service__["a" /* ProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_provider_service__["a" /* ProviderService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]) === 'function' && _e) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/navbar.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_transaksi_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_provider_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaketComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaketComponent = (function () {
    function PaketComponent(transaksiService, provider) {
        this.transaksiService = transaksiService;
        this.provider = provider;
    }
    PaketComponent.prototype.ngOnInit = function () {
    };
    PaketComponent.prototype.onPurchase = function (type, quantity, price) {
        var _this = this;
        var payment = {
            type: type,
            quantity: quantity,
            price: price
        };
        this.transaksiService.purchase(payment).subscribe(function (data) {
            snap.pay(data.token, {
                onSuccess: function (result) {
                    var transaksi = {
                        order_id: result.order_id,
                        type: payment.type,
                        quantity: payment.quantity,
                        price: payment.price,
                        paymentType: result.payment_type,
                        status: result.transaction_status
                    };
                    _this.transaksiService.transaksiAdd(transaksi).subscribe(function (ozil) {
                        console.log(ozil);
                    });
                },
                onPending: function (result) {
                    var transaksi = {
                        order_id: result.order_id,
                        type: payment.type,
                        quantity: payment.quantity,
                        price: payment.price,
                        paymentType: result.payment_type,
                        status: result.transaction_status
                    };
                    _this.transaksiService.transaksiAdd(transaksi).subscribe(function (ozil) {
                        console.log(ozil);
                    });
                }
            });
        });
    };
    PaketComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-paket',
            template: __webpack_require__(736),
            styles: [__webpack_require__(721)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_transaksi_service__["a" /* TransaksiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_transaksi_service__["a" /* TransaksiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_provider_service__["a" /* ProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_provider_service__["a" /* ProviderService */]) === 'function' && _b) || Object])
    ], PaketComponent);
    return PaketComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/paket.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_watcher_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_provider_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(227);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfilComponent = (function () {
    function ProfilComponent(userService, watcherService, validate, provider, appComponent, sanitizer) {
        this.userService = userService;
        this.watcherService = watcherService;
        this.validate = validate;
        this.provider = provider;
        this.appComponent = appComponent;
        this.sanitizer = sanitizer;
        this.uploaderPhoto = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({ url: 'https://mesvie.herokuapp.com/mesvie/photo-upload', authToken: this.userService.loadToken() });
        this.historyPerPage = 4;
        this.watchlaterPerPage = 4;
        this.lovePerPage = 4;
    }
    ;
    ;
    ;
    ProfilComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.getPreview();
    };
    ProfilComponent.prototype.getUser = function () {
        var _this = this;
        this.provider.isLoading = true;
        this.userService.getUser().subscribe(function (data) {
            _this.user = data.data;
            _this.initLoadmore();
            _this.provider.isLoading = false;
        });
    };
    ProfilComponent.prototype.getPreview = function () {
        var _this = this;
        this.uploaderPhoto.onAfterAddingFile = function (fileItem) {
            if (_this.uploaderPhoto.queue.length > 1)
                _this.uploaderPhoto.queue[0].remove();
            _this.previewPhoto = _this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(fileItem._file));
        };
    };
    ProfilComponent.prototype.onUpdate = function () {
        var _this = this;
        if (this.validate.updateProfil(this.user)) {
            var updateUser_1 = {
                fullname: this.user.fullname,
                phone: this.user.phone,
                address: this.user.address,
                bio: this.user.bio,
                photo: this.user.photo
            };
            if (this.previewPhoto) {
                this.uploaderPhoto.uploadAll();
                this.uploaderPhoto.onCompleteItem = function (item, response, status, headers) {
                    var data = JSON.parse(response);
                    updateUser_1.photo = data.filename;
                    _this.prosesUpdate(updateUser_1);
                };
            }
            else
                this.prosesUpdate(updateUser_1);
        }
    };
    ProfilComponent.prototype.prosesUpdate = function (updateUser) {
        var _this = this;
        this.userService.updateProfil(updateUser).subscribe(function (data) {
            if (data.success) {
                _this.provider.toast(data.message, 2000, 'Green');
                _this.onCancel();
            }
            else
                _this.provider.toast(data.message, 2000, 'Red');
        });
    };
    ProfilComponent.prototype.onCancel = function () {
        this.getUser();
        this.previewPhoto = null;
        this.provider.closeModalProfil();
    };
    ProfilComponent.prototype.showSearch = function () {
        this.appComponent.cssClass = true;
    };
    ProfilComponent.prototype.onWatchlater = function (filmId) {
        var _this = this;
        this.watcherService.watchlaterCek(filmId).subscribe(function (data) {
            var action = {
                actionId: data.data.id,
                filmId: filmId
            };
            _this.watcherService.watchlater(action).subscribe(function (data) {
                _this.provider.navRoute('/film/' + filmId);
            });
        });
    };
    ProfilComponent.prototype.initLoadmore = function () {
        if (this.user.watcher._history.length <= this.historyPerPage)
            this.loadmoreHistory = null;
        else
            this.loadmoreHistory = { hide: true, disable: false };
        if (this.user.watcher._watchlater.length <= this.watchlaterPerPage)
            this.loadmoreWatchlater = null;
        else
            this.loadmoreWatchlater = { hide: true, disable: false };
        if (this.user.watcher._love.length <= this.lovePerPage)
            this.loadmoreLove = null;
        else
            this.loadmoreLove = { hide: true, disable: false };
    };
    ProfilComponent.prototype.onLoadmoreHistory = function () {
        var _this = this;
        this.loadmoreHistory.hide = false;
        this.loadmoreHistory.disable = true;
        this.loadmoreHistoryId = setInterval(function () {
            _this.historyPerPage += 4;
            if (_this.user.watcher._history.length <= _this.historyPerPage)
                _this.loadmoreHistory = null;
            else {
                _this.loadmoreHistory.hide = true;
                _this.loadmoreHistory.disable = false;
            }
            clearInterval(_this.loadmoreHistoryId);
        }, 2000);
    };
    ProfilComponent.prototype.onLoadmoreWatchlater = function () {
        var _this = this;
        this.loadmoreWatchlater.hide = false;
        this.loadmoreWatchlater.disable = true;
        this.loadmoreWatchlaterId = setInterval(function () {
            _this.watchlaterPerPage += 4;
            if (_this.user.watcher._watchlater.length <= _this.watchlaterPerPage)
                _this.loadmoreWatchlater = null;
            else {
                _this.loadmoreWatchlater.hide = true;
                _this.loadmoreWatchlater.disable = false;
            }
            clearInterval(_this.loadmoreWatchlaterId);
        }, 2000);
    };
    ProfilComponent.prototype.onLoadmoreLove = function () {
        var _this = this;
        this.loadmoreLove.hide = false;
        this.loadmoreLove.disable = true;
        this.loadmoreLoveId = setInterval(function () {
            _this.lovePerPage += 4;
            if (_this.user.watcher._love.length <= _this.lovePerPage)
                _this.loadmoreLove = null;
            else {
                _this.loadmoreLove.hide = true;
                _this.loadmoreLove.disable = false;
            }
            clearInterval(_this.loadmoreLoveId);
        }, 2000);
    };
    ProfilComponent.prototype.ngOnDestroy = function () {
        if (this.loadmoreHistoryId)
            clearInterval(this.loadmoreHistoryId);
        if (this.loadmoreWatchlaterId)
            clearInterval(this.loadmoreWatchlaterId);
        if (this.loadmoreLoveId)
            clearInterval(this.loadmoreLoveId);
    };
    ProfilComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profil',
            template: __webpack_require__(737),
            styles: [__webpack_require__(722)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_watcher_service__["a" /* WatcherService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_watcher_service__["a" /* WatcherService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_provider_service__["a" /* ProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_provider_service__["a" /* ProviderService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _f) || Object])
    ], ProfilComponent);
    return ProfilComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/profil.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_provider_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(auth, validate, provider) {
        this.auth = auth;
        this.validate = validate;
        this.provider = provider;
        this.isChoice = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        var user = {
            email: this.email,
            username: this.username,
            password: this.password,
            type: this.type
        };
        if (this.validate.register(user)) {
            this.auth.register(user).subscribe(function (data) {
                if (data.success)
                    _this.provider.toast(data.message, 2000, 'Green', '/login');
                else
                    _this.provider.toast(data.message, 2000, 'Red');
            });
        }
    };
    RegisterComponent.prototype.onChoice = function (type) {
        this.type = type;
        this.isChoice = true;
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(738),
            styles: [__webpack_require__(723)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_provider_service__["a" /* ProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_provider_service__["a" /* ProviderService */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/register.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_provider_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(provider) {
        this.provider = provider;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.provider.isLogin())
            return true;
        else {
            this.provider.navRoute('/welcome');
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_provider_service__["a" /* ProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_provider_service__["a" /* ProviderService */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/auth.guard.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_provider_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmmakerGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilmmakerGuard = (function () {
    function FilmmakerGuard(provider) {
        this.provider = provider;
    }
    FilmmakerGuard.prototype.canActivate = function () {
        if (this.provider.isLogin() && this.provider.getAuthType() == 'Filmmaker')
            return true;
        else {
            this.provider.navRoute('/');
            return false;
        }
    };
    FilmmakerGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_provider_service__["a" /* ProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_provider_service__["a" /* ProviderService */]) === 'function' && _a) || Object])
    ], FilmmakerGuard);
    return FilmmakerGuard;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/filmmaker.guard.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_provider_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotAuthGuard = (function () {
    function NotAuthGuard(provider) {
        this.provider = provider;
    }
    NotAuthGuard.prototype.canActivate = function () {
        if (!this.provider.isLogin())
            return true;
        else {
            this.provider.navRoute('/');
            return false;
        }
    };
    NotAuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_provider_service__["a" /* ProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_provider_service__["a" /* ProviderService */]) === 'function' && _a) || Object])
    ], NotAuthGuard);
    return NotAuthGuard;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/not-auth.guard.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_provider_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatcherGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WatcherGuard = (function () {
    function WatcherGuard(provider) {
        this.provider = provider;
    }
    WatcherGuard.prototype.canActivate = function () {
        if (this.provider.isLogin() && this.provider.getAuthType() == 'Watcher')
            return true;
        else {
            this.provider.navRoute('/');
            return false;
        }
    };
    WatcherGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_provider_service__["a" /* ProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_provider_service__["a" /* ProviderService */]) === 'function' && _a) || Object])
    ], WatcherGuard);
    return WatcherGuard;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/watcher.guard.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, property, value) {
        if (!value)
            return items;
        return (items || []).filter(function (item) { return property.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(value, 'gi').test(item[key]); }); });
    };
    FilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterPipe);
    return FilterPipe;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/filter.pipe.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderPipe = (function () {
    function OrderPipe() {
    }
    OrderPipe.prototype.transform = function (array, field, asc) {
        var _this = this;
        if (asc === void 0) { asc = true; }
        if (!field || field.trim() == "")
            return array;
        if (asc) {
            return Array.from(array).sort(function (item1, item2) {
                return _this.fieldComparator(item1[field], item2[field]);
            });
        }
        else {
            return Array.from(array).sort(function (item1, item2) {
                return _this.fieldComparator(item2[field], item1[field]);
            });
        }
    };
    OrderPipe.prototype.fieldComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0;
    };
    OrderPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'order'
        }), 
        __metadata('design:paramtypes', [])
    ], OrderPipe);
    return OrderPipe;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/order.pipe.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args ? parseInt(args, 10) : 10;
        var trail = '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    TruncatePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'truncate'
        }), 
        __metadata('design:paramtypes', [])
    ], TruncatePipe);
    return TruncatePipe;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/truncate.pipe.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/environment.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.register = function (user) {
        if (!user.email || !this.email(user.email) || !user.username || !user.password)
            return false;
        else
            return true;
    };
    ValidateService.prototype.login = function (user) {
        if (!user.email || !this.email(user.email) || !user.password)
            return false;
        else
            return true;
    };
    ValidateService.prototype.updateProfil = function (user) {
        if (!user.fullname || !user.phone || !user.address || !user.bio)
            return false;
        else
            return true;
    };
    ValidateService.prototype.filmAdd = function (film) {
        if (!film.judul || !film.harga || !film.durasi || !film.kategori || !film.pemain || !film.description)
            return false;
        else
            return true;
    };
    ValidateService.prototype.filmUpdate = function (film) {
        if (!film.judul || !film.harga || !film.description)
            return false;
        else
            return true;
    };
    ValidateService.prototype.review = function (review) {
        if (!review.text)
            return false;
        else
            return true;
    };
    ValidateService.prototype.email = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/Users/user/Music/Mesvie/client/src/validate.service.js.map

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "main {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n  }\r\n.logo{\r\n    margin-bottom: 0;\r\n  }"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = ".modal-edit {\r\n\tmin-height: 77%;\r\n}\r\n\r\n.edit-photo {\r\n    min-height: 210px;\r\n    max-height: 210px;\r\n\tbackground-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n.edit-photo .input-box {\r\n\tmargin: auto;\r\n}\r\n\r\n.edit-photo .input-box .button {\r\n    padding: 180%;\r\n    margin: -75px;\r\n}\r\n\r\n.photo img {\r\n\twidth: 100%;\r\n    min-height: 210px;\r\n    max-height: 210px;\r\n    top: 0;\r\n}\r\n\r\n.add-margin {\r\n    margin-top: 23px;\r\n    margin-bottom: -2px;\r\n}\r\n\r\n.loadmore-loader {\r\n    width: 25px;\r\n    height: 25px;\r\n    margin: 6px 0;\r\n}"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = ".my-pagination /deep/ .ngx-pagination .current {\r\n\tbackground-color: #37474f !important;\r\n\tfont-size: 1.2rem;\r\n    padding: 0 10px;\r\n    line-height: 30px;\r\n    border-radius: 2px;\r\n}"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = ".cover-detail img {\r\n\twidth: 100%;\r\n\tmin-height: 330px;\r\n\tmax-height: 330px;\r\n}\r\n\r\n.film-desc {\r\n\tmargin-top: 5px;\r\n}\r\n\r\n.film-desc p {\r\n\tmargin: 3px;\r\n}\r\n\r\n.margin-80px {\r\n\tmargin-top: 80px;\r\n}\r\n\r\n.margin-200px {\r\n\tmargin-top: -200px;\r\n}\r\n\r\n.film-review {\r\n\tline-height: 20px;\r\n}\r\n\r\n.avatar-review {\r\n\twidth: 100%;\r\n    height: 100%;\r\n    margin: 20%;\r\n}\r\n\r\n.video-play {\r\n\tbackground-color: #000;\r\n}\r\n\r\n.video-menu {\r\n\ttext-align: center;\r\n}\r\n\r\n.video-menu a {\r\n\tmargin: 3px 15%;\r\n}\r\n\r\n.videoWrapper {\r\n\tposition: relative;\r\n\tpadding-bottom: 56.25%; /* 16:9 */\r\n\tpadding-top: 25px;\r\n\theight: 0;\r\n}\r\n.videoWrapper iframe {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = ".input-video {\r\n    padding: 20% 45%;\r\n}\r\n\r\n.cover {\r\n\theight: 380px;\r\n}\r\n\r\n.upload-cover {\r\n    min-height: 380px;\r\n    max-height: 380px;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n.upload-cover .input-box {\r\n    margin: auto;\r\n}\r\n\r\n.upload-cover .input-box .button {\r\n    padding: 318% 250%;\r\n    top: -158px;\r\n    left: -120px\r\n}\r\n\r\n.cover img {\r\n    width: 100%;\r\n    min-height: 380px;\r\n    max-height: 380px;\r\n    top: 0;\r\n}"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = ".loadmore-loader {\r\n\twidth: 25px;\r\n    height: 25px;\r\n    margin: 6px 0;\r\n}"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "body {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  min-height: 100vh;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\nmain {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 0 auto;\r\n          flex: 1 0 auto;\r\n}\r\n\r\nbody {\r\n  background: #fff;\r\n}\r\n\r\n.input-field input[type=date]:focus + label,\r\n.input-field input[type=text]:focus + label,\r\n.input-field input[type=email]:focus + label,\r\n.input-field input[type=password]:focus + label {\r\n  color: #26a69a;\r\n}\r\n\r\n.input-field input[type=date]:focus,\r\n.input-field input[type=text]:focus,\r\n.input-field input[type=email]:focus,\r\n.input-field input[type=password]:focus {\r\n  border-bottom: 2px solid #26a69a;\r\n  box-shadow: none;\r\n}\r\n\r\n.logo{\r\n  margin-bottom: 0;\r\n}"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = ".menu-kiri {\r\n\tmargin-left: 140px;\r\n}\r\n\r\n.kategori-drop {\r\n\twidth: 400px;\r\n}\r\n\r\n.kategori-drop a {\r\n\tfont-size: 0.9rem;\r\n\tcolor: #000;\r\n}\r\n\r\n.account-drop a {\r\n\tfont-size: 0.9rem;\r\n\tcolor: #fff;\r\n}\r\n\r\n.daftar {\r\n\tbackground-color: #00897B;\r\n}"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = ".modal-edit {\r\n\tmin-height: 77%;\r\n}\r\n\r\n.edit-photo {\r\n    min-height: 210px;\r\n    max-height: 210px;\r\n\tbackground-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n.edit-photo .input-box {\r\n\tmargin: auto;\r\n}\r\n\r\n.edit-photo .input-box .button {\r\n    padding: 180%;\r\n    margin: -75px;\r\n}\r\n\r\n.photo img {\r\n\twidth: 100%;\r\n    min-height: 210px;\r\n    max-height: 210px;\r\n    top: 0;\r\n}\r\n\r\n.loadmore-loader {\r\n    width: 25px;\r\n    height: 25px;\r\n    margin: 6px 0;\r\n}"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "body {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  min-height: 100vh;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  background: #fff;\r\n}\r\n\r\nmain {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 0 auto;\r\n          flex: 1 0 auto;\r\n}\r\n\r\n.input-field input[type=date]:focus + label,\r\n.input-field input[type=text]:focus + label,\r\n.input-field input[type=email]:focus + label,\r\n.input-field input[type=password]:focus + label {\r\n  color: #26a69a;\r\n}\r\n\r\n.input-field input[type=date]:focus,\r\n.input-field input[type=text]:focus,\r\n.input-field input[type=email]:focus,\r\n.input-field input[type=password]:focus {\r\n  border-bottom: 2px solid #26a69a;\r\n  box-shadow: none;\r\n}\r\n\r\n.logo{\r\n  margin-bottom: 0;\r\n}\r\n\r\nsection {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  max-width: 980px;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  margin: 7% auto;\r\n}\r\nsection article {\r\n  display: inline-block;\r\n  vertical-align: bottom;\r\n  margin-left: -1px;\r\n  border: 1px solid #cccccc;\r\n  color: #545454;\r\n  background: #ffffff;\r\n  min-width: 50%;\r\n  text-align: center;\r\n  position: relative;\r\n  overflow: hidden;\r\n  box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.05);\r\n  transition: box-shadow ease 0.25s;\r\n  transition-delay: 0.5s;\r\n}\r\nsection article h1 {\r\n  color: #a50000;\r\n  text-transform: uppercase;\r\n  margin-bottom: 1.8rem;\r\n  font-size: 13pt;\r\n  font-weight: bold;\r\n}\r\nsection article h2 {\r\n  font-weight: 500;\r\n  font-size: 2.15rem;\r\n  line-height: 3rem;\r\n}\r\nsection article h2.price {\r\n  font-weight: 300;\r\n  font-size: 3.56rem;\r\n  line-height: 0.7em;\r\n}\r\nsection article h2.price small {\r\n  display: block;\r\n  font-size: 27.5%;\r\n}\r\nsection article > * {\r\n  padding: 50px 80px;\r\n  overflow: hidden;\r\n  transition: top ease-in 0.5s, -webkit-transform ease 0.25s;\r\n  transition: transform ease 0.25s, top ease-in 0.5s;\r\n  transition: transform ease 0.25s, top ease-in 0.5s, -webkit-transform ease 0.25s;\r\n}\r\nsection article > *.inner {\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n  transition-delay: 0.5s;\r\n}\r\nsection article > *.hidden {\r\n  position: absolute;\r\n  top: 100%;\r\n  height: 100%;\r\n  width: 100%;\r\n  text-align: center;\r\n  background: #ffffff;\r\n}\r\nsection article > * p {\r\n  font-size: 11.5pt;\r\n  line-height: 1.65em;\r\n  margin-bottom: 1.25rem;\r\n}"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<div id=\"loader-wrapper\">\n    <div id=\"loader\"></div>\n    <div class=\"loader-section section-left\"></div>\n    <div class=\"loader-section section-right\"></div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "<main class=\"section center\">\n\t<div class=\"section\">\n\t\t<h2 class=\"default_color_text text_h2 logo\">Mesvie</h2>\n\t</div>\n\n\t<div class=\"section\">\n\t\t<h5 class=\"blue-grey-text darken-3\">Your account verificatied</h5>\n\t\t<p>Hai, Bos</p>\n\t\t<p>Akun kamu telah aktif! Untuk selanjutnya akan diarahkan kelogin melalui tombol dibawah ini!</p>\n\t\t<a (click)=\"provider.navRoute('/login')\" class=\"waves-effect waves-light btn-large\">verifikasi akun</a>\n\t</div>\n</main>"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n    <h4 class=\"header text_h4 center\">Daftar Transaksi</h4>\n    <div class=\"row\">\n        <div class=\"col s12 center\">\n            <span>Coin : 80 </span>\n            <a (click)=\"provider.navRoute('/paket')\">Tambah</a>\n        </div>\n    </div>\n    <div *ngIf=\"transaksis\" class=\"row\">\n        <div *ngFor=\"let transaksi of transaksis | order : 'created_at' : false\" class=\"col s12\">\n            <div class=\"card\">\n                <div class=\"card-content black-text col s2 center grey lighten-3\">{{ transaksi.created_at | date }}</div>\n                <div class=\"card-content black-text col s8\">Pembelian {{ transaksi.item.quantity }} {{ transaksi.item.type }} seharga Rp. {{ transaksi.item.price }}</div>\n                <div class=\"card-content col s2 center-align\" [ngStyle]=\"{'color': transaksi.status == 'pending'? 'red' : 'blue'}\">{{ transaksi.status | uppercase }}</div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"!transaksis\" class=\"row\">\n        <h4 class=\"header text_h4 center\">Kamu belum pernah melakukan transasksi apapun...</h4>\n    </div>\n</div>"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"provider.getAuthType() == 'Watcher'\">\n\t<app-watcher></app-watcher>\n</div>\n\n<div *ngIf=\"provider.getAuthType() == 'Filmmaker'\">\n\t<app-filmmaker></app-filmmaker>\n</div>"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div *ngIf=\"user\">\n\t<div class=\"container\">\n\t    <div style=\"background: url('assets/img/maker-cover.jpg')no-repeat center center fixed;\" class=\"text-center\" id=\"hero2\">\n\t        <img id=\"avatar\" src=\"https://mesvie.herokuapp.com/user/photo/{{ user.photo }}\">\n\t        <h1 class=\"white-text\">{{ user.fullname }}</h1>\n\t        <p>@{{ user.username }} - {{ user.bio }}</p>\n\t    </div>\n\t</div>\n\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col s12\">\n\t\t\t\t<ul materialize=\"tabs\" class=\"tabs white-text bluegray\">\n\t\t\t\t\t<li class=\"tab col s3 \"><a class=\"white-text\" href=\"#usertabs1\">Film</a></li>\n\t\t\t\t\t<li class=\"tab col s3 \"><a class=\"white-text\" href=\"#usertabs2\">Pengaturan</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div id=\"usertabs1\" class=\"col s12\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col s12 m6 l3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"section-film-cover card-image\">\n\t\t\t\t\t\t\t\t<img src=\"assets/img/blank.png\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-content center\">\n\t\t\t\t\t\t\t\t<p>Upload dan hasilkan uang dari film terbaru anda!</p>\n\t\t                        <div class=\"add-margin center\">\n\t\t                            <a class=\"waves-effect waves-light red white-text btn center\" routerLink=\"/film-upload\"><i class=\"material-icons\">add</i></a>\n\t\t                        </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"user.filmmaker._daftarfilm\">\n\t\t\t            <div *ngFor=\"let film of user.filmmaker._daftarfilm | slice:0:filmPerPage\" class=\"col s12 m6 l3\">\n\t\t\t                <div class=\"card blue-grey lighten-5\">\n\t\t\t                    <div class=\"section-film-cover card-image waves-effect waves-block waves-light\">\n\t\t\t                        <img class=\"activator\" src=\"https://mesvie.herokuapp.com/film/cover/{{ film.cover }}\">\n\t\t\t                    </div>\n\t\t\t                    <div class=\"card-content\">\n\t\t\t                        <span class=\"card-title activator grey-text text-darken-4\">{{ film.judul | truncate : 12  }}</span>\n\t\t\t                        <div class=\"harga default_color_text\">\n\t\t\t                            <i class=\"material-icons left\">copyright</i>{{ film.harga }}\n\t\t\t                        </div>\n\t\t\t                        <div class=\"center\">\n\t\t\t                            <a (click)=\"getUpdateFilm(film)\" class=\"white-text btn center\"><i class=\"material-icons\">update</i></a>\n\t\t\t                        </div>\n\t\t\t                    </div>\n\t\t\t                    <div class=\"card-reveal grey lighten-5\">\n\t\t\t                        <span class=\"card-title grey-text text-darken-4 center\">{{ film.judul }}</span>\n\t\t\t                        <p>{{ film.description }}</p>\n\t\t\t                        <div class=\"center\">\n\t\t\t                            <a (click)=\"getUpdateFilm(film)\" class=\"white-text btn center\"><i class=\"material-icons\">update</i></a>\n\t\t\t                        </div>\n\t\t\t                    </div>\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t            </div>\n\t\t        </div>\n\t\t        <div *ngIf=\"loadmoreFilm\" class=\"row\">\n\t                <div class=\"col s12\">\n\t                    <button (click)=\"onLoadmoreFilm()\" class=\"col s12 waves-effect waves-light white-text btn large center\" [disabled]=\"loadmoreFilm.disable\">\n\t                        <span *ngIf=\"loadmoreFilm.hide\">Loadmore</span>\n\t                        <div *ngIf=\"!loadmoreFilm.hide\" class=\"preloader-wrapper active loadmore-loader\">\n\t                            <div class=\"spinner-layer spinner-red-only\">\n\t                                <div class=\"circle-clipper left\">\n\t                                    <div class=\"circle\"></div>\n\t                                </div>\n\t                                <div class=\"gap-patch\">\n\t                                    <div class=\"circle\"></div>\n\t                                </div>\n\t                                <div class=\"circle-clipper right\">\n\t                                    <div class=\"circle\"></div>\n\t                                </div>\n\t                            </div>\n\t                        </div>\n\t                    </button>\n\t                </div>\n                </div>\n\t\t\t</div>\n\n\t\t\t<div id=\"usertabs2\" class=\"col s12\">\n\t\t\t\t<ul materialize=\"collapsible\" class=\"collapsible\" data-collapsible=\"accordion\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"collapsible-header\"><i class=\"material-icons\">account_circle </i>Personal info</div>\n\t\t\t\t\t\t<div class=\"collapsible-body\">\n\t\t\t\t\t\t\t<p><strong>Email</strong> : {{ user.email }}</p>\n\t\t\t\t\t\t\t<p><strong>Phone</strong> : {{ user.phone }}</p>\n\t\t\t\t\t\t\t<p><strong>Address</strong> : {{ user.address }}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div (click)=\"provider.openModalProfil()\" class=\"collapsible-header\"><i class=\"material-icons\">settings</i>Setting</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"user\" class=\"modal modal-edit modal-fixed-footer\" materialize=\"modal\" [materializeParams]=\"provider.modelParams\" [materializeActions]=\"provider.modalProfilActions\">\n\t\t<div class=\"modal-content\">\n\t\t\t<form>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col s4\">\n\t\t\t\t        <div class=\"edit-photo card parallax-container valign-wrapper\">\n\t\t\t\t\t\t    <div class=\"input-box file-field input-field grey-text\">\n\t\t\t\t                <i class=\"white-text activator material-icons medium\">camera_enhance</i>\n\t\t\t\t                <input class=\"button\" type=\"file\" ng2FileSelect [uploader]=\"uploaderPhoto\" />\n\t\t\t                </div>\n\t\t\t\t\t\t    <div class=\"parallax photo\">\n\t\t\t\t\t\t    \t<img *ngIf=\"previewPhoto\" [src]=\"previewPhoto\" />\n\t\t\t\t\t\t    \t<img *ngIf=\"!previewPhoto\" src=\"/user/photo/{{ user.photo }}\" />\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</div>\n\t\t            </div>\n\t\t            <div class=\"col s8\">\n\t\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t\t<input [(ngModel)]=\"user.fullname\" class=\"black-text validate\" type=\"text\" name=\"fullname\" value=\"{{ user.fullname }}\" required />\n\t\t\t\t\t\t\t<label for=\"username\">Fullname</label>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t\t<input [(ngModel)]=\"user.phone\" class=\"black-text validate\" type=\"text\" name=\"phone\" value=\"{{ user.phone }}\" required />\n\t\t\t\t\t\t\t<label for=\"username\">Phone</label>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t\t<input [(ngModel)]=\"user.address\" class=\"black-text validate\" type=\"text\" name=\"address\" value=\"{{ user.address }}\" required />\n\t\t\t\t\t\t\t<label for=\"address\">Address</label>\n\t\t\t\t\t\t</div>\n\t\t\t        </div>\n\t\t        </div>\n\t\t        <div class=\"row\">\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<textarea [(ngModel)]=\"user.bio\" name=\"review\" class=\"materialize-textarea black-text validate\" data-length=\"200\" value=\"{{ user.bio }}\" required></textarea>\n\t\t\t\t\t\t<label for=\"textarea\">Bio</label>\n\t\t\t\t\t</div>\n\t\t        </div>\n\t\t    </form>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<a class=\"waves-effect waves-grey btn-flat\" (click)=\"onCancelProfil()\">Cancel</a>\n\t\t\t<a class=\"waves-effect waves-grey btn-flat\" (click)=\"onUpdateProfil()\">Update</a>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"filmSelected\" class=\"modal modal-edit modal-fixed-footer\" materialize=\"modal\" [materializeParams]=\"provider.modelParams\" [materializeActions]=\"provider.modalFilmActions\">\n\t\t<div class=\"modal-content\">\n\t\t\t<form>\n\t\t\t\t<div class=\"row\">\n\t\t            <div class=\"col s12\">\n\t\t\t\t\t\t<div class=\"input-field col s8\">\n\t\t\t\t\t\t\t<input [(ngModel)]=\"filmSelected.judul\" class=\"black-text validate\" type=\"text\" name=\"judul\" value=\"{{ filmSelected.judul }}\" required />\n\t\t\t\t\t\t\t<label for=\"judul\">Judul</label>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"input-field col s4\">\n\t\t\t\t\t\t\t<input [(ngModel)]=\"filmSelected.harga\" class=\"black-text validate\" type=\"number\" name=\"harga\" value=\"{{ filmSelected.harga }}\" required />\n\t\t\t\t\t\t\t<label for=\"harga\">Harga</label>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t\t<textarea [(ngModel)]=\"filmSelected.description\" name=\"description\" class=\"materialize-textarea black-text validate\" data-length=\"200\" value=\"{{ filmSelected.description }}\" required></textarea>\n\t\t\t\t\t\t\t<label for=\"description\">Description</label>\n\t\t\t\t\t\t</div>\n\t\t\t        </div>\n\t\t        </div>\n\t\t    </form>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<a class=\"waves-effect waves-grey btn-flat\" (click)=\"onCancelFilm()\">Cancel</a>\n\t\t\t<a class=\"waves-effect waves-grey btn-flat\" (click)=\"onUpdateFilm()\">Update</a>\n\t\t</div>\n\t</div>\n\n\t<footer class=\"page-footer default_color scrollspy\" id=\"footer\">\n\t    <div class=\"footer-copyright default_color\">\n\t        <div class=\"container\">\n\t            Made by <a class=\"white-text\" href=\"\">Mesut Özil Developer</a>. Support by MaterializeCSS & MEAN Stack.\n\t        </div>\n\t    </div>\n\t</footer>\n</div>"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div *ngIf=\"films\">\n    <div class=\"section scrollspy\" id=\"Terbaru\">\n        <div class=\"container\">\n            <h4 class=\"header text_h4\">Film Terbaru</h4>\n            <div class=\"row\">\n                <div *ngFor=\"let film of films | order : 'created_at' : false | slice:0:4\" class=\"col s12 m6 l3\">\n                    <div class=\"card blue-grey lighten-5\">\n                        <div class=\"section-film-cover card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator\" src=\"https://mesvie.herokuapp.com/film/cover/{{ film.cover }}\">\n                        </div>\n                        <div class=\"card-content\">\n                            <span class=\"card-title activator grey-text text-darken-4\">{{ film.judul | truncate : 12  }}</span>\n                            <div class=\"harga default_color_text\">\n                                <i class=\"material-icons left\">copyright</i>{{ film.harga }}\n                            </div>\n                            <div class=\"center\">\n                                <a (click)=\"onFilmDetail(film._id)\" class=\"waves-effect waves-light white-text btn center\"><i class=\"material-icons\">update</i></a>\n                            </div>\n                        </div>\n                        <div class=\"card-reveal grey lighten-5\">\n                            <span class=\"card-title grey-text text-darken-4 center\">{{ film.judul }}</span>\n                            <p>{{ film.description }}</p>\n                            <div class=\"center\">\n                                <a (click)=\"onFilmDetail(film._id)\" class=\"waves-effect waves-light white-text btn center\"><i class=\"material-icons\">update</i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"section scrollspy\" id=\"Populer\">\n        <div class=\"container\">\n            <h4 class=\"header text_h4\">Film Populer</h4>\n            <div class=\"row\">\n                <div *ngFor=\"let film of films | order : 'view' : false | slice:0:4\" class=\"col s12 m6 l3\">\n                    <div class=\"card blue-grey lighten-5\">\n                        <div class=\"section-film-cover card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator\" src=\"https://mesvie.herokuapp.com/film/cover/{{ film.cover }}\">\n                        </div>\n                        <div class=\"card-content\">\n                            <span class=\"card-title activator grey-text text-darken-4\">{{ film.judul | truncate : 12  }}</span>\n                            <div class=\"harga default_color_text\">\n                                <i class=\"material-icons left\">copyright</i>{{ film.harga }}\n                            </div>\n                            <div class=\"center\">\n                                <a (click)=\"onFilmDetail(film._id)\" class=\"waves-effect waves-light white-text btn center\"><i class=\"material-icons\">update</i></a>\n                            </div>\n                        </div>\n                        <div class=\"card-reveal grey lighten-5\">\n                            <span class=\"card-title grey-text text-darken-4 center\">{{ film.judul }}</span>\n                            <p>{{ film.description }}</p>\n                            <div class=\"center\">\n                                <a (click)=\"onFilmDetail(film._id)\" class=\"waves-effect waves-light white-text btn center\"><i class=\"material-icons\">update</i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"parallax-container valign-wrapper\">\n        <div class=\"section no-pad-bot\">\n    \t      <div class=\"container\">\n    \t\t        <div class=\"row left\">\n    \t\t\t        <h2 class=\"header white-text col s12 light\">A modern responsive front-end framework based on Material Design</h2>\n    \t\t\t        <div class=\"row left\" style=\"padding-left: 30px;\">\n    \t\t\t            <a href=\"\" class=\"btn-large waves-effect waves-light\">Get Started</a>\n    \t\t\t        </div>\n    \t\t        </div>\n    \t      </div>\n        </div>\n        <div class=\"parallax\"><img src=\"assets/img/parallax1.jpg\"></div>\n    </div>\n\n    <div class=\"section scrollspy\" id=\"All\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div *ngFor=\"let film of films | order : 'judul' | paginate: { itemsPerPage: 4, currentPage: page }\" class=\"col s12 m6 l3\">\n                    <div class=\"card blue-grey lighten-5\">\n                        <div class=\"section-film-cover card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator\" src=\"https://mesvie.herokuapp.com/film/cover/{{ film.cover }}\">\n                        </div>\n                        <div class=\"card-content\">\n                            <span class=\"card-title activator grey-text text-darken-4\">{{ film.judul | truncate : 12  }}</span>\n                            <div class=\"harga default_color_text\">\n                                <i class=\"material-icons left\">copyright</i>{{ film.harga }}\n                            </div>\n                            <div class=\"center\">\n                                <a (click)=\"onFilmDetail(film._id)\" class=\"waves-effect waves-light white-text btn center\"><i class=\"material-icons\">update</i></a>\n                            </div>\n                        </div>\n                        <div class=\"card-reveal grey lighten-5\">\n                            <span class=\"card-title grey-text text-darken-4 center\">{{ film.judul }}</span>\n                            <p>{{ film.description }}</p>\n                            <div class=\"center\">\n                                <a (click)=\"onFilmDetail(film._id)\" class=\"waves-effect waves-light white-text btn center\"><i class=\"material-icons\">update</i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"center\">\n                <pagination-controls class=\"my-pagination\" [id]=\"paginate\" [maxSize]=\"10\" [directionLinks]=\"true\" [previousLabel]=\"'Prev'\" [nextLabel]=\"'Next'\" (pageChange)=\"onPageChange($event)\"></pagination-controls>\n            </div>\n        </div>\n    </div>\n\n    <footer class=\"page-footer default_color scrollspy\" id=\"footer\">\n        <div class=\"footer-copyright default_color\">\n            <div class=\"container\">\n                Made by <a class=\"white-text\" href=\"\">Mesut Özil Developer</a>. Support by MaterializeCSS & MEAN Stack.\n            </div>\n        </div>\n    </footer>\n</div>\n"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"watch && film\">\n\t<div class=\"section no-pad-bot scrollspy video-play\" id=\"Video-Player\">\n\t    <div class=\"container\">\n\t\t    <div class=\"videoWrapper\">\n\t\t\t    <iframe width=\"560\" height=\"349\" [src]=\"video\" frameborder=\"0\" allowfullscreen></iframe>\n\t\t\t</div>\n\t    </div>\n\t</div>\n\t<div class=\"section scrollspy video-menu\" id=\"Video-Menu\">\n\t    <div class=\"container\">\n\t    \t<a class=\"waves-effect waves-light white grey-text btn-large\"><i class=\"material-icons\">access_time</i></a>\n\t\t\t<a (click)=\"onKeluar()\" class=\"waves-effect waves-light btn-large\">Keluar</a>\n\t    </div>\n\t</div>\n</div>\n\n<div *ngIf=\"!watch\">\n\t<app-navbar></app-navbar>\n\t<div *ngIf=\"film\">\n\t\t<div class=\"parallax-container\" id=\"Detail\">\n\t\t    <div class=\"section no-pad-bot\">\n\t\t\t      <div class=\"container\">\n\t\t\t\t        <div class=\"row\">\n\t\t\t                <div class=\"cover-detail col s3 m3 l3\">\n\t\t\t\t                <img id=\"film\" src=\"https://mesvie.herokuapp.com/film/cover/{{ film.cover }}\">\n\t\t\t                </div>\n\t\t\t                <div class=\"col s9 m9 l9\">\n\t\t\t                \t<div class=\"col s12\">\n\t\t\t\t\t\t\t        <h2 class=\"header white-text light\">{{ film.judul }}</h2>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t    <div class=\"col s12\">\n\t\t\t\t\t                <a (click)=\"onTonton()\" class=\"waves-effect waves-light btn-large\">Tonton</a>\n\t\t\t\t\t                <a (click)=\"onWatchlater()\" class=\"waves-effect waves-light white btn-large\" [ngStyle]=\"{'color': watchlaterAction.cek? 'red' : 'grey'}\"><i class=\"material-icons\">access_time</i></a>\n\t\t\t\t\t                <a (click)=\"onLove()\" class=\"waves-effect waves-light white btn-large\" [ngStyle]=\"{'color': loveAction.cek? 'red' : 'grey'}\"><i class=\"material-icons\">favorite</i></a>\n\t\t\t\t\t            </div>\n\t\t\t\t\t            <div class=\"col s12 film-desc white-text light\">\n\t\t\t\t\t            \t<p><b>Cast :</b> {{ film.pemain }}</p>\n\t\t\t\t\t            \t<p><b>Genre :</b> {{ film.kategori }}</p>\n\t\t\t\t\t            \t<p><b>Rating :</b> 10</p>\n\t\t\t\t\t            \t<p><b>Description :</b></p>\n\t\t\t\t\t            \t<p>{{ film.description }}</p>\n\t\t\t\t\t            </div>\n\t\t\t\t\t        </div>\n\t\t\t\t        </div>\n\t\t\t      </div>\n\t\t    </div>\n\t\t    <div class=\"parallax\"><img src=\"assets/img/parallax1.jpg\"></div>\n\t\t</div>\n\n\t\t<div class=\"section scrollspy\" id=\"Review\">\n\t\t    <div class=\"container\">\n\t\t\t\t<div materialize=\"carousel\" [materializeParams]=\"[{full_width: true}]\" class=\"carousel carousel-slider\" data-indicators=\"true\">\n\t\t\t\t\t<div *ngIf=\"film._review\">\n\t\t\t\t\t\t<div class=\"carousel-fixed-item center\">\n\t\t\t\t\t\t\t<a class=\"waves-effect white grey-text darken-text-2\"></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngFor=\"let review of film._review\" class=\"carousel-item\">\n\t\t\t\t\t\t\t<div class=\"row s12 m12\">\n\t\t\t\t\t\t\t\t<div class=\"card z-depth-1\">\n\t\t\t\t\t\t\t\t\t<div class=\"col s2 m2\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"avatar-review\" src=\"https://mesvie.herokuapp.com/user/photo/{{ review._creator.photo }}\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col s9 m9\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-content\">\t\n\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"red-text darken-2\">{{ review._creator.fullname }}</h2>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-title activator grey-text text-darken-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"film-review\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ review.text }}\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"film._review == ''\" class=\"row margin-80px\">\n\t\t\t\t        <h4 class=\"header text_h4 center\">Belum ada ulasan tentang film ini</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"section scrollspy margin-200px\" id=\"Review\">\n\t\t    <div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<textarea [(ngModel)]=\"review\" id=\"textarea\" name=\"review\" class=\"materialize-textarea black-text validate\" data-length=\"200\" required></textarea>\n\t\t\t\t\t\t<label for=\"textarea\">Review</label>\n\t\t\t\t\t</div>\n\t\t\t        <div class=\"col s2\">\n\t\t\t            <button (click)=\"onReview()\" class=\"btn waves-effect waves-light teal darken-1\">Submit</button>\n\t\t\t        </div>\n\t\t\t    </div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"section bluegray scrollspy\" id=\"Rekomendasi\">\n\t\t    <div class=\"container\">\n\t\t        <h4 class=\"header text_h4\">Film Rekomendasi</h4>\n\t\t        <div class=\"row\">\n\t\t            <div class=\"col s12 m6 l3\">\n\t\t                <div class=\"card blue-grey lighten-5\">\n\t\t                    <div class=\"card-image waves-effect waves-block waves-light\">\n\t\t                        <img class=\"activator\" src=\"assets/img/project6.jpeg\">\n\t\t                    </div>\n\t\t                    <div class=\"card-content\">\n\t\t                        <span class=\"card-title activator grey-text text-darken-4\">Project Title </span>\n\t\t                        <div class=\"harga default_color_text\">\n\t\t                            <i class=\"material-icons left\">copyright</i>200\n\t\t                        </div>\n\t\t                        <div class=\"center-align\">\n\t\t                            <a class=\"white-text btn center\" routerLink=\"/film\" style=\"margin-right: 0px\">Readmore</a>\n\t\t                        </div>\n\t\t                    </div>\n\t\t                    <div class=\"card-reveal grey lighten-5\">\n\t\t                        <span class=\"card-title grey-text text-darken-4\">Project Title</span>\n\t\t                        <p>Here is some more information about this project that is only revealed once clicked on.</p>\n\t\t                        <div class=\"center-align\">\n\t\t                            <a class=\"white-text btn center\" routerLink=\"/film\" style=\"margin-right: 0px\">Readmore</a>\n\t\t                        </div>\n\t\t                    </div>\n\t\t                </div>\n\t\t            </div>\n\t\t        </div>\n\t\t    </div>\n\t\t</div>\n\n\t\t<footer class=\"page-footer default_color scrollspy\" id=\"footer\">\n\t\t    <div class=\"footer-copyright default_color\">\n\t\t        <div class=\"container\">\n\t\t            Made by <a class=\"white-text\" href=\"\">Mesut Özil Developer</a>. Support by MaterializeCSS & MEAN Stack.\n\t\t        </div>\n\t\t    </div>\n\t\t</footer>\n\t</div>\n</div>"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"section no-pad-bot\">\n    <div class=\"container waves-effect waves-block waves-light\">\n        <div class=\"card blue-grey lighten-4 video-container\">\n            <div class=\"col s12 m4\">\n            \t<iframe *ngIf=\"previewVideo\" width=\"560\" height=\"349\" [src]=\"previewVideo\" frameborder=\"0\" allowfullscreen></iframe>\n                <div *ngIf=\"!previewVideo\" class=\"input-video file-field input-field grey-text\">\n                    <i class=\"white-text activator material-icons large\">file_upload</i>\n                    <input type=\"file\" ng2FileSelect [uploader]=\"uploaderVideo\" accept=\"video/*\" />\n                </div>\n            </div>\n      </div>\n    </div>\n</div>\n\n<div class=\"section scrollspy\">\n    <div class=\"container\">\n        <div class=\"row\">\n\t        <div class=\"col s8\">\n\t            <div class=\"card\">\n\t                <div class=\"card-avatar col s12 m12\">\n\t                    <div class=\"container\">\n\t                        <div class=\"row\">\n\t                            <form class=\"col s12\">\n\t                                <div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"judul\" name=\"judul\" type=\"text\" class=\"validate\" required />\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"judul\">Judul Film</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t                                </div>\n\t                                <div class=\"row\">\n\t                                  \t<div class=\"input-field col s6\">\n\t                                    \t<input [(ngModel)]=\"harga\" name=\"harga\" type=\"number\" class=\"validate\" required />\n\t                                    \t<label for=\"harga\">Harga</label>\n\t                                  \t</div>\n\n\t                                  \t<div class=\"input-field col s6\">\n\t                                    \t<input [(ngModel)]=\"durasi\" name=\"durasi\" type=\"text\" class=\"validate\" required />\n\t                                    \t<label for=\"durasi\">Durasi</label>\n\t                                  \t</div>\n\t                                </div>\n\t                                <div class=\"row\">\n\t                                  \t<div class=\"col s12\">\n\t                                    \t<div class=\"chips\" materialize=\"material_chip\" (chip.add)=\"pemainAdd($event.detail)\" (chip.delete)=\"pemainDelete($event.detail)\" [materializeParams]=\"[provider.chipsPlaceholder]\" [materializeActions]=\"provider.chipsActions\"></div>\n\t                                  \t</div>\n\t                                </div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t                                  \t<div class=\"input-field col s12\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"grey-text\">Kategori :</p>\n\t\t\t\t\t\t\t\t\t\t    <div *ngFor=\"let option of optKategori\" class=\"col s3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"{{option.value}}\" (click)=\"onCheckKategori(option.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"{{option.value}}\">{{option.value}}</label>\n\t\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t                                <div class=\"row\">\n\t                                  \t<div class=\"input-field col s12\">\n\t                                    \t<textarea [(ngModel)]=\"description\" name=\"description\" class=\"materialize-textarea\" data-length=\"120\" required></textarea>\n\t                                    \t<label for=\"description\">Description</label>\n\t                                  \t</div>\n\t                                </div>\n\t                                <button (click)=\"onAddFilm()\" class=\"waves-effect waves-light btn-large\">Tambah</button>\n\t                            </form>\n\t                        </div>\n\t                    </div>\n\t                </div>\n\t          \t</div>\n\t        </div>\n\n\t        <div class=\"col s4 waves-effect waves-block waves-light\">\n        \t\t<div class=\"upload-cover card parallax-container valign-wrapper\" [class.blue-grey]=\"!previewCover\" [class.lighten-4]=\"!previewCover\">\n\t\t\t\t    <div class=\"input-box file-field input-field grey-text\">\n\t\t                <i class=\"white-text activator material-icons medium\">camera_enhance</i>\n\t\t                <input class=\"button\" type=\"file\" ng2FileSelect [uploader]=\"uploaderCover\" />\n\t                </div>\n\t\t\t\t    <div *ngIf=\"previewCover\" class=\"parallax cover\"><img [src]=\"previewCover\" /></div>\n\t\t\t\t</div>\n\t      \t</div>\n        </div>\n    </div>\n</div>\n\n<footer class=\"page-footer default_color scrollspy\" id=\"footer\">\n    <div class=\"footer-copyright default_color\">\n        <div class=\"container\">\n            Made by <a class=\"white-text\" href=\"\">Mesut Özil Developer</a>. Support by MaterializeCSS & MEAN Stack.\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"section no-pad-bot\" id=\"index-banner\">\n    <div class=\"container\">\n        <h1 class=\"text_h center header cd-headline letters type\">\n            <span>I Love</span> \n            <span class=\"cd-words-wrapper waiting\">\n                <b class=\"is-visible\">Mesut Özil</b>\n                <b>Against The Current</b>\n                <b>Martin Garrix</b>\n            </span>\n        </h1>\n    </div>\n</div>\n\n<div id=\"intro\" class=\"section scrollspy\" id=\"intro\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div  class=\"col s12\">\n                <h2 class=\"center header text_h2\"> Tonton film atau serial tv terbaik, lokal dan Hollywood kapan saja di<span class=\"span_h2\"> Mesvie</span> </h2>\n            </div>\n\n            <div  class=\"col s12 m3 l3\">\n                <div class=\"center promo promo-example\">\n                    <i class=\"mdi-image-flash-on\"></i>\n                    <h5 class=\"promo-caption\">Speeds up development</h5>\n                    <p class=\"light center\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes.</p>\n                </div>\n            </div>\n            <div class=\"col s12 m3 l3\">\n                <div class=\"center promo promo-example\">\n                    <i class=\"mdi-social-group\"></i>\n                    <h5 class=\"promo-caption\">User Experience Focused</h5>\n                    <p class=\"light center\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n                </div>\n            </div>\n            <div class=\"col s12 m3 l3\">\n                <div class=\"center promo promo-example\">\n                    <i class=\"mdi-hardware-desktop-windows\"></i>\n                    <h5 class=\"promo-caption\">Fully responsive</h5>\n                    <p class=\"light center\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>\n                </div>\n            </div>\n            <div class=\"col s12 m3 l3\">\n                <div class=\"center promo promo-example\">\n                    <i class=\"mdi-hardware-desktop-windows\"></i>\n                    <h5 class=\"promo-caption\">Fully responsive</h5>\n                    <p class=\"light center\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"section scrollspy bluegray\" id=\"new-film\">\n    <div class=\"container\">\n        <h2 class=\"header text_b\">Terbaru di  <span class=\"span_h2\">Mesvie</span> </h2>\n        <div class=\"row\">\n            <div class=\"col s12 m6 l3\">\n                <div class=\"card\">\n                    <div class=\"card-image waves-effect waves-block waves-light\">\n                        <img class=\"activator\" src=\"assets/img/project6.jpeg\">\n                    </div>\n                    <div class=\"card-content\">\n                        <span class=\"card-title activator grey-text text-darken-4\">Project Title </span>\n                        <div class=\"card-action\">\n                        \t<div class=\"center-align\">\n\t                            <a class=\"white-text btn center\" href=\"#\" style=\"margin-right: 0px\">Readmore</a>\n\t                        </div>\n                        </div>\n                    </div>\n                    <div class=\"card-reveal\">\n                        <span class=\"card-title grey-text text-darken-4\">Project Title</span>\n                        <p>Here is some more information about this project that is only revealed once clicked on.</p>\n                        <div class=\"center-align\">\n                            <a class=\"white-text btn center\" href=\"#\" style=\"margin-right: 0px\">Readmore</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"section scrollspy\" id=\"team\">\n    <div class=\"container\">\n        <h2 class=\"header text_b\"> Our Team </h2>\n        <div class=\"row\">\n            <div class=\"col s12 m3\">\n                <div class=\"card card-avatar\">\n                    <div class=\"waves-effect waves-block waves-light\">\n                        <img class=\"activator\" src=\"assets/img/avatar1.png\">\n                    </div>\n                    <div class=\"card-content\">\n                        <span class=\"card-title activator grey-text text-darken-4\">Flash <br/>\n                            <small><em><a class=\"red-text text-darken-1\" href=\"#\">CEO</a></em></small></span>\n                        <p>\n                            <a class=\"blue-text text-lighten-2\" href=\"https://www.facebook.com/joash.c.pereira\">\n                                <i class=\"fa fa-facebook-square\"></i>\n                            </a>\n                            <a class=\"blue-text text-lighten-2\" href=\"https://twitter.com/im_joash\">\n                                <i class=\"fa fa-twitter-square\"></i>\n                            </a>\n                            <a class=\"blue-text text-lighten-2\" href=\"https://plus.google.com/u/0/+JoashPereira\">\n                                <i class=\"fa fa-google-plus-square\"></i>\n                            </a>\n                            <a class=\"blue-text text-lighten-2\" href=\"https://www.linkedin.com/in/joashp\">\n                                <i class=\"fa fa-linkedin-square\"></i>\n                            </a>\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col s12 m3\">\n                <div class=\"card card-avatar\">\n                    <div class=\"waves-effect waves-block waves-light\">\n                        <img class=\"activator\" src=\"assets/img/avatar2.png\">\n                    </div>\n                    <div class=\"card-content\">\n                        <span class=\"card-title activator grey-text text-darken-4\">Cat Woman<br/>\n                            <small><em><a class=\"red-text text-darken-1\" href=\"#\">Designer</a></em></small>\n                        </span>\n                        <p>\n                            <a class=\"blue-text text-lighten-2\" href=\"https://www.facebook.com/joash.c.pereira\">\n                                <i class=\"fa fa-facebook-square\"></i>\n                            </a>\n                            <a class=\"blue-text text-lighten-2\" href=\"https://twitter.com/im_joash\">\n                                <i class=\"fa fa-twitter-square\"></i>\n                            </a>\n                            <a class=\"blue-text text-lighten-2\" href=\"https://plus.google.com/u/0/+JoashPereira\">\n                                <i class=\"fa fa-google-plus-square\"></i>\n                            </a>\n                            <a class=\"blue-text text-lighten-2\" href=\"https://www.linkedin.com/in/joashp\">\n                                <i class=\"fa fa-linkedin-square\"></i>\n                            </a>\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col s12 m3\">\n                <div class=\"card card-avatar\">\n                    <div class=\"waves-effect waves-block waves-light\">\n                        <img class=\"activator\" src=\"assets/img/avatar3.png\">\n                    </div>\n                    <div class=\"card-content\">\n                        <span class=\"card-title activator grey-text text-darken-4\">\n                            Capt. America <br/>\n                            <small><em><a class=\"red-text text-darken-1\" href=\"#\">CMO</a></em></small></span>\n                        <p>\n                            <a class=\"blue-text text-lighten-2\" href=\"https://www.facebook.com/joash.c.pereira\">\n                                <i class=\"fa fa-facebook-square\"></i>\n                            </a>\n                            <a class=\"blue-text text-lighten-2\" href=\"https://twitter.com/im_joash\">\n                                <i class=\"fa fa-twitter-square\"></i>\n                            </a>\n                            <a class=\"blue-text text-lighten-2\" href=\"https://plus.google.com/u/0/+JoashPereira\">\n                                <i class=\"fa fa-google-plus-square\"></i>\n                            </a>\n                            <a class=\"blue-text text-lighten-2\" href=\"https://www.linkedin.com/in/joashp\">\n                                <i class=\"fa fa-linkedin-square\"></i>\n                            </a>\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col s12 m3\">\n                <div class=\"card card-avatar\">\n                    <div class=\"waves-effect waves-block waves-light\">\n                        <img class=\"activator\" src=\"assets/img/avatar4.png\">\n                    </div>\n                    <div class=\"card-content\">\n                        <span class=\"card-title activator grey-text text-darken-4\">Robin<br/>\n                            <small><em><a class=\"red-text text-darken-1\" href=\"#\">Developer</a></em></small></span>\n                        <p>\n                            <a class=\"blue-text text-lighten-2\" href=\"https://www.facebook.com/joash.c.pereira\">\n                                <i class=\"fa fa-facebook-square\"></i>\n                            </a>\n                            <a class=\"blue-text text-lighten-2\" href=\"https://twitter.com/im_joash\">\n                                <i class=\"fa fa-twitter-square\"></i>\n                            </a>\n                            <a class=\"blue-text text-lighten-2\" href=\"https://plus.google.com/u/0/+JoashPereira\">\n                                <i class=\"fa fa-google-plus-square\"></i>\n                            </a>\n                            <a class=\"blue-text text-lighten-2\" href=\"https://www.linkedin.com/in/joashp\">\n                                <i class=\"fa fa-linkedin-square\"></i>\n                            </a>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"section scrollspy bluegray\" id=\"ready\">\n    <div class=\"container\">\n        <h4 class=\"center header text_h2\">Are you ready to get <span class=\"span_h2\">Mesvie</span>ID ?</h4>\n        <div class=\"center-align\">\n        \t<h5 routerLink=\"/register\" class=\"header waves-effect waves-light teal darken-1 btn-large\">Daftar</h5>\n        </div>\n    </div>\n</div>\n\n<footer class=\"page-footer default_color scrollspy\" id=\"footer\">\n    <div class=\"container\">  \n        <div class=\"row\">\n            <div class=\"col l6 s12\">\n                <form class=\"col s12\" action=\"contact.php\" method=\"post\">\n                    <div class=\"row\">\n                        <div class=\"input-field col s6\">\n                            <i class=\"mdi-action-account-circle prefix white-text\"></i>\n                            <input id=\"icon_prefix\" name=\"name\" type=\"text\" class=\"validate white-text\">\n                            <label for=\"icon_prefix\" class=\"white-text\">First Name</label>\n                        </div>\n                        <div class=\"input-field col s6\">\n                            <i class=\"mdi-communication-email prefix white-text\"></i>\n                            <input id=\"icon_email\" name=\"email\" type=\"email\" class=\"validate white-text\">\n                            <label for=\"icon_email\" class=\"white-text\">Email-id</label>\n                        </div>\n                        <div class=\"input-field col s12\">\n                            <i class=\"mdi-editor-mode-edit prefix white-text\"></i>\n                            <textarea id=\"icon_prefix2\" name=\"message\" class=\"materialize-textarea white-text\"></textarea>\n                            <label for=\"icon_prefix2\" class=\"white-text\">Message</label>\n                        </div>\n                        <div class=\"col offset-s7 s5\">\n                            <button class=\"btn waves-effect waves-light  teal darken-1\" type=\"submit\">Submit\n                                <i class=\"mdi-content-send right white-text\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"col l3 s12\">\n                <h5 class=\"white-text\">Mesvie</h5>\n                <ul>\n                    <li><a class=\"white-text\" href=\"http://www.joashpereira.com/\">FAQ</a></li>\n                    <li><a class=\"white-text\" href=\"http://www.joashpereira.com/blog\">About</a></li>\n                </ul>\n            </div>\n            <div class=\"col l3 s12\">\n                <h5 class=\"white-text\">Social</h5>\n                <ul>\n                    <li>\n                        <a class=\"white-text\" href=\"\">\n                            <i class=\"small fa fa-facebook-square white-text\"></i> Facebook\n                        </a>\n                    </li>\n                    <li>\n                        <a class=\"white-text\" href=\"\">\n                            <i class=\"small fa fa-github-square white-text\"></i> Github\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"footer-copyright default_color\">\n        <div class=\"container\">\n            Made by <a class=\"white-text\" href=\"\">Mesut Özil Developer</a>. Support by MaterializeCSS & MEAN Stack.\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div *ngIf=\"films\">\n    <div class=\"parallax-container valign-wrapper\">\n        <div class=\"section no-pad-bot\">\n    \t      <div class=\"container\">\n    \t\t        <div class=\"row left\">\n    \t\t\t        <h2 class=\"header white-text col s12 light\">A modern responsive front-end framework based on Material Design</h2>\n    \t\t\t        <div class=\"row left\" style=\"padding-left: 30px;\">\n    \t\t\t            <a href=\"\" class=\"btn-large waves-effect waves-light\">Get Started</a>\n    \t\t\t        </div>\n    \t\t        </div>\n    \t      </div>\n        </div>\n        <div class=\"parallax\"><img src=\"assets/img/parallax1.jpg\"></div>\n    </div>\n\n    <div class=\"section scrollspy\" id=\"All\">\n        <div class=\"container\">\n            <h4 class=\"header text_h4 center\">Film {{ kategori }}</h4>\n            <div class=\"row\">\n                <div *ngFor=\"let film of films | filter : 'kategori' : kategori | order : 'judul' | slice:0:kategoriPerPage\" class=\"col s12 m6 l3\">\n                    <div class=\"card blue-grey lighten-5\">\n                        <div class=\"section-film-cover card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator\" src=\"https://mesvie.herokuapp.com/film/cover/{{ film.cover }}\">\n                        </div>\n                        <div class=\"card-content\">\n                            <span class=\"card-title activator grey-text text-darken-4\">{{ film.judul | truncate : 12  }}</span>\n                            <div class=\"harga default_color_text\">\n                                <i class=\"material-icons left\">copyright</i>{{ film.harga }}\n                            </div>\n                            <div class=\"center\">\n                                <a (click)=\"onFilmDetail(film._id)\" class=\"waves-effect waves-light white-text btn center\"><i class=\"material-icons\">update</i></a>\n                            </div>\n                        </div>\n                        <div class=\"card-reveal grey lighten-5\">\n                            <span class=\"card-title grey-text text-darken-4 center\">{{ film.judul }}</span>\n                            <p>{{ film.description }}</p>\n                            <div class=\"center\">\n                                <a (click)=\"onFilmDetail(film._id)\" class=\"waves-effect waves-light white-text btn center\"><i class=\"material-icons\">update</i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"loadmoreKategori\" class=\"row\">\n                <div class=\"col s12\">\n                    <button (click)=\"onLoadmoreKategori()\" class=\"col s12 waves-effect waves-light white-text btn large center\" [disabled]=\"loadmoreKategori.disable\">\n                        <span *ngIf=\"loadmoreKategori.hide\">Loadmore</span>\n                        <div *ngIf=\"!loadmoreKategori.hide\" class=\"preloader-wrapper active loadmore-loader\">\n                            <div class=\"spinner-layer spinner-red-only\">\n                                <div class=\"circle-clipper left\">\n                                    <div class=\"circle\"></div>\n                                </div>\n                                <div class=\"gap-patch\">\n                                    <div class=\"circle\"></div>\n                                </div>\n                                <div class=\"circle-clipper right\">\n                                    <div class=\"circle\"></div>\n                                </div>\n                            </div>\n                        </div>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <footer class=\"page-footer default_color scrollspy\" id=\"footer\">\n        <div class=\"footer-copyright default_color\">\n            <div class=\"container\">\n                Made by <a class=\"white-text\" href=\"\">Mesut Özil Developer</a>. Support by MaterializeCSS & MEAN Stack.\n            </div>\n        </div>\n    </footer>\n</div>"

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = "<main class=\"center\">\n    <div class=\"section\">\n      <h2 (click)=\"provider.navRoute('/welcome')\" class=\"default_color_text text_h2 logo pointer\">Mesvie</h2>\n    </div>\n\n    <div class=\"section\">\n      <h5 class=\"blue-grey-text darken-3\">Please, login into your account</h5>\n    </div>\n\n    <div class=\"container\">\n\t    <div class=\"z-depth-1 grey lighten-4 row\" style=\"display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;\">\n\t      <form class=\"col s12\">\n\t        <div class=\"row\">\n\t          <div class=\"col s12\">\n\t          </div>\n\t        </div>\n\n\t        <div class=\"row\">\n\t          <div class=\"input-field col s12\">\n\t            <input [(ngModel)]=\"email\" class=\"black-text validate\" type=\"email\" name=\"email\" required />\n\t            <label for=\"email\">Enter your email</label>\n\t          </div>\n\t        </div>\n\n\t        <div class=\"row\">\n\t          <div class=\"input-field col s12\">\n\t            <input [(ngModel)]=\"password\" class=\"black-text validate\" type=\"password\" name=\"password\" required />\n\t            <label for=\"password\">Enter your password</label>\n\t          </div>\n\t          <label style=\"float: right;\">\n\t            <a class=\"red-text\" href=\"\">Forgot Password?</a>\n\t          </label>\n\t        </div>\n\n\t        <br />\n\t        <div class=\"center\">\n\t          <div class=\"row\">\n\t            <button (click)=\"onLogin()\" class=\"col s12 btn btn-large waves-effect teal lighten-1\">Login</button>\n\t          </div>\n\t        </div>\n\t      </form>\n\t    </div>\n  \t</div>\n  \n  \t<a (click)=\"provider.navRoute('/register')\" class=\"teal-text pointer\">Create account</a>\n  \t<div class=\"section\"></div>\n</main>"

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"provider.isLoading\" class=\"progress\">\r\n\t<div class=\"indeterminate\"></div>\r\n</div>\r\n<div class=\"navbar-fixed\">\r\n\t<nav id=\"nav_f\" class=\"default_color\" role=\"navigation\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"nav-wrapper\">\r\n\t\t\t\t<a *ngIf=\"provider.isLogin()\" (click)=\"provider.navRoute('/')\" id=\"logo-container\" class=\"brand-logo pointer\">Mesvie</a>\r\n\t\t\t\t<a *ngIf=\"!provider.isLogin()\" (click)=\"provider.navRoute('/welcome')\" id=\"logo-container\" class=\"brand-logo pointer\">Mesvie</a>\r\n\r\n\t\t\t\t<ul *ngIf=\"provider.isLogin() && user && user.watcher\" class=\"menu-kiri left hide-on-med-and-down\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a materialize=\"dropdown\" class=\"dropdown-button\" href=\"\" data-activates=\"kategori\"><i class=\" material-icons\">view_list</i></a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<ul materialize=\"dropdown\" id=\"kategori\" class=\"kategori-drop dropdown-content large darken-3\">\r\n\t\t\t\t\t\t<li><a (click)=\"provider.navRoute('/kategori/action')\">Action</a></li>\r\n\t\t\t\t\t\t<li><a (click)=\"provider.navRoute('/kategori/comedy')\">Comedy</a></li>\r\n\t\t\t\t\t\t<li><a (click)=\"provider.navRoute('/kategori/horror')\">Horror</a></li>\r\n\t\t\t\t\t\t<li><a (click)=\"provider.navRoute('/kategori/romance')\">Romance</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<li>\t\r\n\t\t\t\t\t\t<div (click)=\"showSearch()\" class=\"control\">\r\n\t\t\t\t\t\t\t<a class=\"btn-material\"></a>\r\n\t\t\t\t\t\t\t<i class=\"material-icons icon-material-search\">search</i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div (click)=\"closeSearch()\" class=\"material-icons icon-close\">close</div>\r\n\t\t\t\t\t\t<div class=\"search-input\">\r\n\t\t\t\t\t\t\t<input (keyup)=\"getSearch()\" [(ngModel)]=\"search\" class=\"input-search\" placeholder=\"Search...\" type=\"text\" autofocus=\"true\">\r\n\t\t\t\t\t\t\t<span class=\"close\">Cancel</span>\r\n\t\t\t\t\t\t\t<div *ngIf=\"isSearch\" class=\"dialog\">\r\n\t\t\t\t\t\t\t\t<div *ngFor=\"let film of films | filter : 'judul' : search\" (click)=\"onFilmDetail(film._id)\" class=\"list pointer\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"http://localhost:1088/film/cover/{{ film.cover }}\" />\r\n\t\t\t\t\t\t\t\t\t<span>{{ film.judul }}</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t<ul *ngIf=\"provider.isLogin()\" class=\"right hide-on-med-and-down\">\r\n\t\t\t\t\t<li><a><i class=\"material-icons pointer\">notifications</i></a></li>                                \r\n\t\t\t\t\t\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a materialize=\"dropdown\" class=\"dropdown-button\" href=\"\" data-activates=\"account\"><i class=\" material-icons\">account_circle arrow_drop_down</i></a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<ul materialize=\"dropdown\" id=\"account\" class=\"account-drop dropdown-content blue-grey darken-3\">\r\n\t\t\t\t\t\t<li *ngIf=\"user && user.watcher\">\r\n\t\t\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t\t\t<a class=\"mdi-content-send left white-text\">{{ user.watcher.coin }}</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li *ngIf=\"user && user.watcher\"><a (click)=\"provider.navRoute('/profil')\">{{user.username}}</a></li>\r\n\t\t\t\t\t\t<li><a (click)=\"provider.navRoute('/transaksi')\">Transaksi</a></li>\r\n\t\t\t\t\t\t<li><a>Setting</a></li>\r\n\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t<li><a (click)=\"onLogout()\">Logout</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t<ul *ngIf=\"!provider.isLogin()\" class=\"right hide-on-med-and-down\">\r\n\t\t\t\t\t<li class=\"daftar\"><a (click)=\"provider.navRoute('/register')\" class=\"white-text pointer\">Daftar</a></li>\r\n\t\t\t\t\t<li><a (click)=\"provider.navRoute('/login')\" class=\"white-text pointer\">Masuk</a></li>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t<a href=\"#!\" data-activates=\"nav-mobile\" class=\"button-collapse\"><i class=\"mdi-navigation-menu\"></i></a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</nav>\r\n</div>"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n    <h4 class=\"header text_h4 center\">Pilih Paket</h4>\n    <div class=\"row\">\n        <div class=\"col s12 m6 l3\">\n            <div class=\"card blue-grey lighten-5\">\n                <div class=\"card-image\">\n                    <img class=\"activator\" src=\"img/project5.png\">\n                </div>\n                <div class=\"card-content center-align\">\n                    <a (click)=\"onPurchase('coin', 10, 8000)\" class=\"waves-effect waves-light white-text btn\">Purchase</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col s12 m6 l3\">\n            <div class=\"card blue-grey lighten-5\">\n                <div class=\"card-image\">\n                    <img class=\"activator\" src=\"img/project5.png\">\n                </div>\n                <div class=\"card-content center-align\">\n                    <a (click)=\"onPurchase('coin', 25, 14000)\" class=\"waves-effect waves-light white-text btn\">Purchase</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col s12 m6 l3\">\n            <div class=\"card blue-grey lighten-5\">\n                <div class=\"card-image\">\n                    <img class=\"activator\" src=\"img/project5.png\">\n                </div>\n                <div class=\"card-content center-align\">\n                    <a (click)=\"onPurchase('coin', 50, 25000)\" class=\"waves-effect waves-light white-text btn\">Purchase</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col s12 m6 l3\">\n            <div class=\"card blue-grey lighten-5\">\n                <div class=\"card-image\">\n                    <img class=\"activator\" src=\"img/project5.png\">\n                </div>\n                <div class=\"card-content center-align\">\n                    <a (click)=\"onPurchase('coin', 100, 40000)\" class=\"waves-effect waves-light white-text btn\">Purchase</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div *ngIf=\"user\">\n\t<div class=\"container\">\n\t    <div style=\"background: url('assets/img/maker-cover.jpg')no-repeat center center fixed;\" class=\"text-center\" id=\"hero2\">\n\t        <img id=\"avatar\" src=\"https://mesvie.herokuapp.com/user/photo/{{ user.photo }}\">\n\t        <h1 class=\"white-text\">{{ user.fullname }}</h1>\n\t        <p>@{{ user.username }} - {{ user.bio }}</p>\n\t    </div>\n\t</div>\n\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col s12\">\n\t\t\t\t<ul materialize=\"tabs\" class=\"tabs white-text bluegray\">\n\t\t\t\t\t<li class=\"tab col s3 \"><a class=\"white-text\" href=\"#usertabs1\">Riwayat</a></li>\n\t\t\t\t\t<li class=\"tab col s3 \"><a class=\"white-text\" href=\"#usertabs2\">Tonton Nanti</a></li>\n\t\t\t\t\t<li class=\"tab col s3 \"><a class=\"white-text\" href=\"#usertabs3\">Disukai</a></li>\n\t\t\t\t\t<li class=\"tab col s3 \"><a class=\"white-text\" href=\"#usertabs4\">Pengaturan</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div id=\"usertabs1\" class=\"col s12\">\n\t\t\t\t<div *ngIf=\"user.watcher._history\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t            <div *ngFor=\"let history of user.watcher._history | order : 'created_at' : false | slice:0:historyPerPage\" class=\"col s12 m6 l3\">\n\t\t\t                <div class=\"card blue-grey lighten-5\">\n\t\t\t                    <div class=\"section-film-cover card-image waves-effect waves-block waves-light\">\n\t\t\t                        <img class=\"activator\" src=\"https://mesvie.herokuapp.com/film/cover/{{ history._film.cover }}\">\n\t\t\t                    </div>\n\t\t\t                    <div class=\"card-content\">\n\t\t\t                        <span class=\"card-title activator grey-text text-darken-4\">{{ history._film.judul | truncate : 12 }}</span>\n\t\t\t                        <div class=\"center\">\n\t\t\t                            <p>{{ history.created_at | date : 'medium' }}</p>\n\t\t\t                        </div>\n\t\t\t                    </div>\n\t\t\t                    <div class=\"card-reveal grey lighten-5\">\n\t\t\t                        <span class=\"card-title grey-text text-darken-4\">{{ history._film.judul }}</span>\n\t\t\t                        <p>{{ history._film.description }}</p>\n\t\t\t                        <div class=\"center\">\n\t\t\t                            <p>{{ history.created_at | date : 'medium' }}</p>\n\t\t\t                        </div>\n\t\t\t                    </div>\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t\t        </div>\n\t\t\t        <div *ngIf=\"loadmoreHistory\" class=\"row\">\n\t\t                <div class=\"col s12\">\n\t\t                    <button (click)=\"onLoadmoreHistory()\" class=\"col s12 waves-effect waves-light white-text btn large center\" [disabled]=\"loadmoreHistory.disable\">\n\t\t                        <span *ngIf=\"loadmoreHistory.hide\">Loadmore</span>\n\t\t                        <div *ngIf=\"!loadmoreHistory.hide\" class=\"preloader-wrapper active loadmore-loader\">\n\t\t                            <div class=\"spinner-layer spinner-red-only\">\n\t\t                                <div class=\"circle-clipper left\">\n\t\t                                    <div class=\"circle\"></div>\n\t\t                                </div>\n\t\t                                <div class=\"gap-patch\">\n\t\t                                    <div class=\"circle\"></div>\n\t\t                                </div>\n\t\t                                <div class=\"circle-clipper right\">\n\t\t                                    <div class=\"circle\"></div>\n\t\t                                </div>\n\t\t                            </div>\n\t\t                        </div>\n\t\t                    </button>\n\t\t                </div>\n\t                </div>\n\t            </div>\n\n\t\t        <div *ngIf=\"user.watcher._history == ''\" class=\"card z-depth-1\">\n\t\t\t\t\t<div class=\"card-content center\">\n\t\t\t\t\t\t<p>Kamu tidak memiliki riwayat film yang sudah ditonton!</p>\n\t\t\t            <a (click)=\"showSearch()\" class=\"white-text btn waves-effect waves-light\">Get Started</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div id=\"usertabs2\" class=\"col s12\">\n\t\t\t\t<div *ngIf=\"user.watcher._watchlater\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t            <div *ngFor=\"let watchlater of user.watcher._watchlater | order : 'created_at' : false | slice:0:watchlaterPerPage\" class=\"col s12 m6 l3\">\n\t\t\t                <div class=\"card blue-grey lighten-5\">\n\t\t\t                    <div class=\"section-film-cover card-image waves-effect waves-block waves-light\">\n\t\t\t                        <img class=\"activator\" src=\"https://mesvie.herokuapp.com/film/cover/{{ watchlater._film.cover }}\">\n\t\t\t                    </div>\n\t\t\t                    <div class=\"card-content\">\n\t\t\t                        <span class=\"card-title activator grey-text text-darken-4\">{{ watchlater._film.judul | truncate : 12 }}</span>\n\t\t\t                        <div class=\"harga default_color_text\">\n\t\t\t                            <i class=\"material-icons left\">copyright</i>{{ watchlater._film.harga }}\n\t\t\t                        </div>\n\t\t\t                        <div class=\"center\">\n\t\t\t                            <a (click)=\"onWatchlater(watchlater._film._id)\" class=\"white-text btn center\"><i class=\"material-icons\">update</i></a>\n\t\t\t                        </div>\n\t\t\t                    </div>\n\t\t\t                    <div class=\"card-reveal grey lighten-5\">\n\t\t\t                        <span class=\"card-title grey-text text-darken-4\">{{ watchlater._film.judul }}</span>\n\t\t\t                        <p>{{ watchlater._film.description }}</p>\n\t\t\t                        <div class=\"center\">\n\t\t\t                            <a (click)=\"onWatchlater(watchlater._film._id)\" class=\"white-text btn center\"><i class=\"material-icons\">update</i></a>\n\t\t\t                        </div>\n\t\t\t                    </div>\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t\t        </div>\n\t\t\t        <div *ngIf=\"loadmoreWatchlater\" class=\"row\">\n\t\t                <div class=\"col s12\">\n\t\t                    <button (click)=\"onLoadmoreWatchlater()\" class=\"col s12 waves-effect waves-light white-text btn large center\" [disabled]=\"loadmoreWatchlater.disable\">\n\t\t                        <span *ngIf=\"loadmoreWatchlater.hide\">Loadmore</span>\n\t\t                        <div *ngIf=\"!loadmoreWatchlater.hide\" class=\"preloader-wrapper active loadmore-loader\">\n\t\t                            <div class=\"spinner-layer spinner-red-only\">\n\t\t                                <div class=\"circle-clipper left\">\n\t\t                                    <div class=\"circle\"></div>\n\t\t                                </div>\n\t\t                                <div class=\"gap-patch\">\n\t\t                                    <div class=\"circle\"></div>\n\t\t                                </div>\n\t\t                                <div class=\"circle-clipper right\">\n\t\t                                    <div class=\"circle\"></div>\n\t\t                                </div>\n\t\t                            </div>\n\t\t                        </div>\n\t\t                    </button>\n\t\t                </div>\n\t                </div>\n\t\t\t    </div>\n\n\t\t        <div *ngIf=\"user.watcher._watchlater == ''\" class=\"card z-depth-1\">\n\t\t\t\t\t<div class=\"card-content center\">\n\t\t\t\t\t\t<p>Kamu tidak memiliki film untuk ditonton nanti!</p>\n\t\t\t            <a (click)=\"showSearch()\" class=\"white-text btn waves-effect waves-light\">Get Started</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div id=\"usertabs3\" class=\"col s12\">\n\t\t\t\t<div *ngIf=\"user.watcher._love\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t            <div *ngFor=\"let love of user.watcher._love | order : 'created_at' : false | slice:0:lovePerPage\" class=\"col s12 m6 l3\">\n\t\t\t                <div class=\"card blue-grey lighten-5\">\n\t\t\t                    <div class=\"section-film-cover card-image waves-effect waves-block waves-light\">\n\t\t\t                        <img class=\"activator\" src=\"https://mesvie.herokuapp.com/film/cover/{{ love._film.cover }}\">\n\t\t\t                    </div>\n\t\t\t                    <div class=\"card-content\">\n\t\t\t                        <span class=\"card-title activator grey-text text-darken-4\">{{ love._film.judul | truncate : 12 }}</span>\n\t\t\t                    \t<div class=\"center\">\n\t\t\t                            <a class=\"white-text btn center\" routerLink=\"/film/{{ love._film._id }}\"><i class=\"material-icons\">update</i></a>\n\t\t\t                        </div>\n\t\t\t                    </div>\n\t\t\t                    <div class=\"card-reveal grey lighten-5\">\n\t\t\t                        <span class=\"card-title grey-text text-darken-4\">{{ love._film.judul }}</span>\n\t\t\t                        <p>{{ love._film.description }}</p>\n\t\t\t                        <div class=\"center\">\n\t\t\t                            <a class=\"white-text btn center\" routerLink=\"/film/{{ love._film._id }}\"><i class=\"material-icons\">update</i></a>\n\t\t\t                        </div>\n\t\t\t                    </div>\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t\t        </div>\n\t\t\t        <div *ngIf=\"loadmoreLove\" class=\"row\">\n\t\t                <div class=\"col s12\">\n\t\t                    <button (click)=\"onLoadmoreLove()\" class=\"col s12 waves-effect waves-light white-text btn large center\" [disabled]=\"loadmoreLove.disable\">\n\t\t                        <span *ngIf=\"loadmoreLove.hide\">Loadmore</span>\n\t\t                        <div *ngIf=\"!loadmoreLove.hide\" class=\"preloader-wrapper active loadmore-loader\">\n\t\t                            <div class=\"spinner-layer spinner-red-only\">\n\t\t                                <div class=\"circle-clipper left\">\n\t\t                                    <div class=\"circle\"></div>\n\t\t                                </div>\n\t\t                                <div class=\"gap-patch\">\n\t\t                                    <div class=\"circle\"></div>\n\t\t                                </div>\n\t\t                                <div class=\"circle-clipper right\">\n\t\t                                    <div class=\"circle\"></div>\n\t\t                                </div>\n\t\t                            </div>\n\t\t                        </div>\n\t\t                    </button>\n\t\t                </div>\n\t                </div>\n\t\t\t    </div>\n\n\t\t        <div *ngIf=\"user.watcher._love == ''\" class=\"card z-depth-1\">\n\t\t\t\t\t<div class=\"card-content center\">\n\t\t\t\t\t\t<p>Kamu belum menyukai satupun film!</p>\n\t\t\t            <a (click)=\"showSearch()\" class=\"white-text btn waves-effect waves-light\">Get Started</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div id=\"usertabs4\" class=\"col s12\">\n\t\t\t\t<ul materialize=\"collapsible\" class=\"collapsible\" data-collapsible=\"accordion\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"collapsible-header\"><i class=\"material-icons\">account_circle </i>Personal info</div>\n\t\t\t\t\t\t<div class=\"collapsible-body\">\n\t\t\t\t\t\t\t<p><strong>Email</strong> : {{ user.email }}</p>\n\t\t\t\t\t\t\t<p><strong>Phone</strong> : {{ user.phone }}</p>\n\t\t\t\t\t\t\t<p><strong>Address</strong> : {{ user.address }}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div (click)=\"provider.openModalProfil()\" class=\"collapsible-header\"><i class=\"material-icons\">settings</i>Setting</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div id=\"modal1\" class=\"modal modal-edit modal-fixed-footer\" materialize=\"modal\" [materializeParams]=\"provider.modelParams\" [materializeActions]=\"provider.modalProfilActions\">\n\t\t<div class=\"modal-content\">\n\t\t\t<form>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col s4\">\n\t\t\t\t        <div class=\"edit-photo card parallax-container valign-wrapper\">\n\t\t\t\t\t\t    <div class=\"input-box file-field input-field grey-text\">\n\t\t\t\t                <i class=\"white-text activator material-icons medium\">camera_enhance</i>\n\t\t\t\t                <input class=\"button\" type=\"file\" ng2FileSelect [uploader]=\"uploaderPhoto\" />\n\t\t\t                </div>\n\t\t\t\t\t\t    <div class=\"parallax photo\">\n\t\t\t\t\t\t    \t<img *ngIf=\"previewPhoto\" [src]=\"previewPhoto\" />\n\t\t\t\t\t\t    \t<img *ngIf=\"!previewPhoto\" src=\"user/photo/{{ user.photo }}\" />\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</div>\n\t\t            </div>\n\t\t            <div class=\"col s8\">\n\t\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t\t<input [(ngModel)]=\"user.fullname\" class=\"black-text validate\" type=\"text\" name=\"fullname\" value=\"{{ user.fullname }}\" required />\n\t\t\t\t\t\t\t<label for=\"username\">Fullname</label>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t\t<input [(ngModel)]=\"user.phone\" class=\"black-text validate\" type=\"text\" name=\"phone\" value=\"{{ user.phone }}\" required />\n\t\t\t\t\t\t\t<label for=\"username\">Phone</label>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t\t<input [(ngModel)]=\"user.address\" class=\"black-text validate\" type=\"text\" name=\"address\" value=\"{{ user.address }}\" required />\n\t\t\t\t\t\t\t<label for=\"address\">Address</label>\n\t\t\t\t\t\t</div>\n\t\t\t        </div>\n\t\t        </div>\n\t\t        <div class=\"row\">\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<textarea [(ngModel)]=\"user.bio\" id=\"textarea\" name=\"review\" class=\"materialize-textarea black-text validate\" data-length=\"200\" value=\"{{ user.bio }}\" required></textarea>\n\t\t\t\t\t\t<label for=\"textarea\">Bio</label>\n\t\t\t\t\t</div>\n\t\t        </div>\n\t\t    </form>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<a class=\"waves-effect waves-grey btn-flat\" (click)=\"onCancel()\">Cancel</a>\n\t\t\t<a class=\"waves-effect waves-grey btn-flat\" (click)=\"onUpdate()\">Update</a>\n\t\t</div>\n\t</div>\n\n\t<footer class=\"page-footer default_color scrollspy\" id=\"footer\">\n\t    <div class=\"footer-copyright default_color\">\n\t        <div class=\"container\">\n\t            Made by <a class=\"white-text\" href=\"\">Mesut Özil Developer</a>. Support by MaterializeCSS & MEAN Stack.\n\t        </div>\n\t    </div>\n\t</footer>\n</div>"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"!isChoice\">\n  <article>\n    <div class=\"inner\">\n      <h1>Viewer</h1>\n      <small>Mulai dari</small>\n      <h2 class=\"price black-text\">Get Started</h2>\n      <p>Tonton film-film dari movie maker kesayangan anda dimana saja dan kapan saja</p>\n      <p><a href=\"\" class=\"blue-grey-text darken-3 reverse\">Learn More</a></p>\n      <a (click)=\"onChoice('Watcher')\" class=\"btn-large white-text waves-light waves-effect\">Daftar</a>\n    </div>\n  </article>\n  \n  <article class=\"featured\">\n    <div class=\"inner\">\n      <h1>Movie Maker</h1>\n      <small>Mulai dari</small><h2 class=\"price black-text darken-4\">Rp.0</h2>\n      <p>Jadilah pembuat film terkenal dengan bermodalkan 0 Rupiah</p>\n      <p><a href=\"\" class=\"blue-grey-text darken-3 reverse\">Learn More</a></p>\n      <a (click)=\"onChoice('Filmmaker')\" class=\"btn-large white-text waves-light waves-effect\">Daftar</a>\n    </div>\n  </article>\n</section>\n\n<main *ngIf=\"isChoice\" class=\"center\">\n    <div class=\"section\">\n      <h2 (click)=\"provider.navRoute('/welcome')\" class=\"default_color_text text_h2 logo pointer\">Mesvie</h2>\n    </div>\n\n    <div class=\"section\">\n      <h5 class=\"blue-grey-text darken-3\">Please, login into your account</h5>\n    </div>\n\n    <div class=\"container\">\n      <div class=\"z-depth-1 grey lighten-4 row\" style=\"display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;\">\n\t      <form class=\"col s12\">\n\t        <div class=\"row\">\n\t          <div class=\"col s12\">\n\t          </div>\n\t        </div>\n\t        \n\t        <div class=\"row\">\n\t          <div class=\"input-field col s12\">\n\t            <input [(ngModel)]=\"email\" class=\"black-text validate\" type=\"email\" name=\"email\" required />\n\t            <label for=\"email\">Email</label>\n\t          </div>\n\t        </div>\n\n\t        <div class=\"row\">\n\t          <div class=\"input-field col s12\">\n\t            <input [(ngModel)]=\"username\" class=\"black-text validate\" type=\"text\" name=\"username\" required />\n\t            <label for=\"accountname\">Username</label>\n\t          </div>\n\t        </div>\n\n\t        <div class=\"row\">\n\t          <div class=\"input-field col s12\">\n\t            <input [(ngModel)]=\"password\" class=\"black-text validate\" type=\"password\" name=\"password\" required />\n\t            <label for=\"password\">Password</label>\n\t          </div>\n\t          <label style=\"float: right;\">\n\t            <p class=\"grey-text\">Password min 6 digit</p>\n\t          </label>\n\t        </div>\n\n\t        <br />\n\t        <div class=\"center\">\n\t          <div class=\"row\">\n\t            <button (click)=\"onRegister()\" class=\"col s12 btn btn-large waves-effect teal lighten-1\">Register</button>\n\t          </div>\n\t        </div>\n\t      </form>\n      </div>\n  \t</div>\n    <a class=\"teal-text\" href=\"#!\">Bantuan?</a><br />\n    <a (click)=\"provider.navRoute('/login')\" class=\"teal-text pointer\">Already have a account?</a>\n   \t<div class=\"section\"></div>\n</main>"

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(403);


/***/ })

},[761]);
//# sourceMappingURL=main.bundle.map