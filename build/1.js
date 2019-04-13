webpackJsonp([1],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageModule", function() { return AddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddPageModule = /** @class */ (function () {
    function AddPageModule() {
    }
    AddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add__["a" /* AddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add__["a" /* AddPage */]),
            ],
        })
    ], AddPageModule);
    return AddPageModule;
}());

//# sourceMappingURL=add.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_firestore__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddPage = /** @class */ (function () {
    function AddPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todoList = JSON.parse(localStorage.getItem("todos"));
        if (!this.todoList) {
            this.todoList = [];
        }
        this.todoTitle = "";
        this.todoDes = "";
    }
    AddPage.prototype.save = function () {
        //資料庫
        var db = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore();
        db.collection("words").add({
            first: this.todoTitle,
            last: this.todoDes
        }).then(function (data) {
            console.log(data);
        }).catch(function (err) {
            console.log(err);
        });
        this.todoList.push({
            title: this.todoTitle,
            des: this.todoDes
        });
        localStorage.setItem("todos", JSON.stringify(this.todoList));
        this.navCtrl.pop();
        //   if(this.todoTitle !=""&& this.todoDes !=""){
        //     this.todoList.push(
        //       {
        //         title:this.todoTitle,
        //         des:this.todoDes
        //       }
        //     );
        //     //儲存進todos
        //     localStorage.setItem("todos",JSON.stringify(this.todoList));
        //     this.navCtrl.pop();
        //   }
        //   else if(this.todoTitle==""){
        //     alert("未輸入Title");
        //   }
        //   else if (this.todoDes==""){
        //     alert("未輸入詳細資料");
        //   }
    };
    AddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add',template:/*ion-inline-start:"D:\work\ionic網頁\hankuko\src\pages\add\add.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>add Item</ion-title>\n    <ion-buttons end>\n      <button (click)="save()" ion-button icon-only>\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Title</ion-label>\n      <ion-input type="text" [(ngModel)]="todoTitle"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>詳細</ion-label>\n      <ion-input type="text"[(ngModel)]="todoDes"></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\work\ionic網頁\hankuko\src\pages\add\add.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], AddPage);
    return AddPage;
    var _a, _b;
}());

//# sourceMappingURL=add.js.map

/***/ })

});
//# sourceMappingURL=1.js.map