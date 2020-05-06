function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-food-item/add-food-item.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-food-item/add-food-item.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddFoodItemAddFoodItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<div class=\"container-fluid\" id=\"grad\" style=\"padding-top: 100px;\">\n\n\n  <div class=\"bg-white signupbox\">\n\n    <h2 class=\"font1 p-5 text-center\">Add New Product</h2>\n\n    <div class=\"container\">\n\n\n      <form action=\"addFoodItem\" class=\"was-validated\">\n\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter Food Item\" name=\"name\" [(ngModel)]=\"menuItem.foodItem\" required>\n          <div class=\"valid-feedback\">Valid.</div>\n          <div class=\"invalid-feedback\">Please fill out this field.</div>\n        </div>\n        <!--<div class=\"form-group\">\n          <input type=\"file\" (change)=\"onFileSelected($event)\" class=\"form-control\" name=\"image\" required>\n        </div>-->\n        <div class=\"\">                                                                                                                                                                      </div>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" id=\"price\" placeholder=\"Enter Price\" name=\"price\" [(ngModel)]=\"menuItem.price\" required>\n          <div class=\"valid-feedback\">Valid.</div>\n          <div class=\"invalid-feedback\">Please fill out this field.</div>\n        </div>\n\n\n        <div class=\"form-group\">\n          <select [(ngModel)]=\"menuItem.type\"  class=\"form-control custom-select\" name=\"foodType\" required>\n            <option >Vegeterian</option>\n            <option >Non Vegeterian</option>\n          </select>\n          <div class=\"valid-feedback\">Valid.</div>\n          <div class=\"invalid-feedback\">Please fill out this field.</div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-info mt-3 mb-3 w-100\" (click)=\"addFoodItem()\">Add Product</button>\n\n\n      </form>\n    </div>\n\n  </div>\n\n\n\n</div>\n<app-footer></app-footer>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<div class=\"container bg-light mt-5\">\n  <div class=\"container-fluid pb-5\">\n\n\n    <h1 class=\"font1 text-center pt-5 text-black-50 mt-5\">My Shopping Bag</h1>\n    <hr class=\"mb-4\">\n\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <h3 class=\"font1 text-black-50\">Your Bag's Total:- <i class=\"fa p-1\">&#xf156;</i><span class=\"font-weight-bold\">{{this.total}}</span></h3>\n        </div>\n        <div class=\"col-sm-6\">\n          <h3 class=\"font1 text-black-50 text-right\">Your Bag's Total Unique Items:- <span class=\"font-weight-bold\">{{this.length}}</span></h3>\n        </div>\n      </div>\n\n      <hr>\n\n\n      <div *ngFor=\"let product of myProducts\" class=\"row border-bottom\" style=\"padding-bottom: 40px; padding-top: 20px;\">\n        <div class=\"col-sm-6 m-2\">\n          <h2 class=\"font1\">{{product.menuItem.foodItem}}</h2><br>\n          <div><b>Quantity :-</b>&nbsp;\n            <button class=\"btn btn-success\"(click)=\"removeOneQuantity(product.menuItem.foodId)\">-&nbsp;</button>\n            &nbsp;<span class=\"badge badge-light\">{{product.quantity}}</span>&nbsp;\n            <button class=\"btn btn-success\" (click)=\"addOneQuantity(product.menuItem.foodId)\">+&nbsp;</button></div><br>\n          <div><b>Price per Quantity&nbsp;<i class=\"fa p-1\">&#xf02b;</i>:-</b>&nbsp;<i class=\"fa p-1\">&#xf156;</i><span class=\"font-weight-\">{{product.menuItem.price}}</span></div><br><hr>\n          <button class=\"btn btn-danger\" (click)=\"removeProduct(product.menuItem.foodId)\"><i class=\"fa p-1\">&#xf1f8;&nbsp;</i>Remove</button>\n          <a class=\"btn btn-success ml-5\" href=\"index\"><i class=\"fa p-1\">&#xf07a;&nbsp;</i>Continue Shopping</a>\n        </div>\n        <div class=\"col-sm-5 m-2\">\n          <b>You are ordering from :-</b><br>\n          <h1 class=\"font1\">{{product.menuItem.restaurant.restaurantName}}</h1><br>\n          <a class=\"btn btn-info w-100\" href=\"visitRestaurant/{{product.menuItem.restaurant.restaurantId}}\"><i class=\"fa p-1\">&#xf07a;&nbsp;</i>Menu</a><br><br>\n\n        </div>\n        <hr>\n      </div>\n    </div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-success mt-5 mb-5 w-100\" (click)=\"checkOut()\">PLACE ORDER</button>\n</div>\n\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"footer\">Made By Hitesh Munjal, Chitkara University, 1710991325</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<div class=\"container mt-5 pt-5\">\n\n  <div class=\"row\">\n\n    <div class=\"col-md-7 col-lg-7 mt-5 pt-5\">\n      <h1 style=\"color: #1782FD; font-size: 60px;\" class=\"font1 font-weight-bolder\"><i class=\"fa p-1\">&#xf0f5;</i>foodShala</h1><br>\n      <p class=\"text-black-50 font-weight-bold\" style=\"height: 50px; font-size: 30px;\">\n        Order food online and explore Restaurants from home.</p>\n\n    </div>\n    <div class=\"col-md-5 col-lg-5\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n</div>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIndexIndexComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n\n<div class=\"mt-5 grid\">\n  <h1 class=\"p-5  text-center text-capitalize font1 text-info\">Welcome to FoodShala</h1>\n</div>\n<div class=\"container-fluid\">\n\n<div class=\"container\">\n\n<div *ngFor=\"let food of allFood\">\n\n<div *ngIf=\"food.type == 'Vegeterian'\">\n  <div class=\"row p-2 m-4 gridGreen\">\n    <div class=\"col-sm-4\">\n      <h3 class=\"font1\">{{food.foodItem}}</h3><br>\n    </div>\n    <div class=\"col-sm-1\">\n      <b><i class=\"fa my-3\">&#xf156;</i>{{food.price}}</b>\n    </div>\n    <div class=\"col-sm-3 \">\n      <h3>{{food.restaurant.restaurantName}}</h3>\n    </div>\n    <div class=\"col-sm-2 \">\n      <button class=\"ml-2 btn btn-sm btn-success\" (click)=\"addToCart(food.foodId)\" *ngIf=\"!loginService.isUserLoggedIn() || role != 'restaurant' \">Order</button>\n    </div>\n    <div class=\"col-sm-2\">\n      <button class=\"btn btn-sm btn-success mr-2\" (click)=\"seeMenu(food.restaurant.restaurantId)\">Menu</button>\n    </div>\n\n  </div>\n</div>\n\n  <div *ngIf=\"food.type != 'Vegeterian'\">\n    <div class=\"row p-2 m-4 gridRed\">\n      <div class=\"col-sm-4\">\n        <h3 class=\"font1\">{{food.foodItem}}</h3><br>\n      </div>\n      <div class=\"col-sm-1\">\n        <b><i class=\"fa my-3\">&#xf156;</i>{{food.price}}</b>\n      </div>\n      <div class=\"col-sm-3 \">\n        <h3>{{food.restaurant.restaurantName}}</h3>\n      </div>\n      <div class=\"col-sm-2 \">\n        <button class=\"ml-2 btn btn-sm btn-danger\" (click)=\"addToCart(food.foodId)\" *ngIf=\"!loginService.isUserLoggedIn() || role != 'restaurant' \">Order</button>\n      </div>\n      <div class=\"col-sm-2\">\n        <button class=\"btn btn-sm btn-danger mr-2\" (click)=\"seeMenu(food.restaurant.restaurantId)\">Menu</button>\n      </div>\n\n    </div>\n  </div>\n\n\n\n  </div>\n\n\n\n\n\n\n</div>\n</div>\n<app-footer></app-footer>\n\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n<form class=\"is-validated mt-4 pt-3\">\n  <div class=\"form-group\">\n    <label>Email Address</label><br>\n    <input type=\"email\" class=\"form-control\" id=\"uname\" placeholder=\"Your Email Address\" name=\"username\" [(ngModel)]=\"username\" required>\n    <div class=\"valid-feedback\">Valid.</div>\n    <div class=\"invalid-feedback\">Please fill out this field.</div>\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label><br>\n    <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter Password\" name=\"password\" [(ngModel)]=\"password\" required>\n    <div class=\"valid-feedback\">Valid.</div>\n    <div class=\"invalid-feedback\">Please fill out this field.</div>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-info mt-5 mb-5 w-100\" (click)=\"checkLoginCustomer()\" >LOG IN</button>\n</form>\n<small>Want to Register Yourself? <a href=\"authentication/registerCustomer\">Sign Up here</a></small><br>\n<small>Want to Register Your Restaurant? <a href=\"authentication/registerRestaurant\">Sign Up here</a></small>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLogoutLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>logout works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!--Upper Navbar-->\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand text-success active font1\" href=\"index\"><i class=\"fa p-1\">&#xf0f5;</i>FoodShala</a>\n\n  <ul class=\"nav navbar-nav float-sm-right\">\n\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"index\"><i class=\"fa p-1\">&#xf015;</i>&nbsp;Home</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"loginService.isUserLoggedIn() && role=='restaurant'\">\n      <a class=\"nav-link\" href=\"restaurantMenu\"><i class=\"fa p-1\">&#xf118;&nbsp;</i>Restaurant Menu</a>\n    </li>\n\n  </ul>\n\n<!--  <ul class=\"nav navbar-nav float-sm-right m-auto ml-4\">-->\n<!--    <form class=\"form-inline\">-->\n<!--      <input class=\"form-control mr-sm-2\" size=\"50\" type=\"text\" placeholder=\"Search for your favourite food\">-->\n<!--      <button class=\"btn btn-success\" type=\"submit\" ><i class=\"fa\">&#xf002;</i>&nbsp;Search</button>-->\n<!--    </form>-->\n<!--  </ul>-->\n\n  <ul class=\"nav navbar-nav float-sm-right ml-auto\">\n\n    <li class=\"nav-item\" *ngIf=\"loginService.isUserLoggedIn() && role=='restaurant'\">\n      <a class=\"nav-link\" href=\"addFoodItem\"><i class=\"fa p-1\">&#xf067;&nbsp;</i>Food Item</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"!loginService.isUserLoggedIn()\" >\n      <a class=\"nav-link\" href=\"authentication/login\"><i class=\"fa p-1\">&#xf118;&nbsp;</i>Login</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"!loginService.isUserLoggedIn()\"  >\n      <a class=\"nav-link\" href=\"authentication/registerCustomer\"><i class=\"fa p-1\">&#xf2bb;&nbsp;</i>Register</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"!loginService.isUserLoggedIn()\"  >\n      <a class=\"nav-link\" href=\"authentication/registerRestaurant\"><i class=\"fa p-1\">&#xf0b1;&nbsp;</i>Business</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"loginService.isUserLoggedIn() && role =='customer'\"  >\n      <a class=\"nav-link\" href=\"cart\"><i class=\"fa p-1\">&#xf290;&nbsp;</i>Bag</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"loginService.isUserLoggedIn() && role !=='customer'\"  >\n      <a class=\"nav-link\" href=\"viewOrders\"><i class=\"fa p-1\">&#xf2b0;&nbsp;</i>View Orders</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"loginService.isUserLoggedIn()\"  >\n      <a class=\"nav-link\" href=\"logout\"><i class=\"fa p-1\">&#xf03b;&nbsp;</i>Logout</a>\n    </li>\n\n\n<!--    <li class=\"nav-item dropdown\">-->\n<!--      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa p-1\">&#xf007;&nbsp;</i>Your Account</a>-->\n<!--      <div class=\"dropdown-menu\">-->\n<!--        <a class=\"nav-link dropdown-item text-dark\" href=\"myAccount\"><i class=\"fa p-1\">&#xf044;&nbsp;</i>Edit Profile</a>-->\n<!--        <a class=\"nav-link dropdown-item text-dark\" href=\"logout\"><i class=\"fa p-1\">&#xf03b;&nbsp;</i>Logout</a>-->\n<!--      </div>-->\n<!--    </li>-->\n<!--    <li class=\"nav-item\">-->\n<!--      <a class=\"nav-link\" href=\"cart\"><i class=\"fa p-1\">&#xf290;&nbsp;</i>Bag</a>-->\n<!--    </li>-->\n<!--    <li class=\"nav-item\">-->\n<!--      <a class=\"nav-link\" href=\"orderHistory\"><i class=\"fa p-1\">&#xf1da;&nbsp;</i>Order History</a>-->\n<!--    </li>-->\n  </ul>\n</nav>\n\n<!--&lt;!&ndash;Lower navbar&ndash;&gt;-->\n\n<!--<nav class=\"navbar navbar-expand-lg navbar-light bg-white font1 sticky-top\" style=\"box-shadow: 10px 2px 5px lightslategrey; padding-top: 65px;\">-->\n<!--  <ul class=\"nav navbar-nav float-sm-left mr-auto ml-auto\">-->\n\n<!--    <li class=\"nav-item pr-5 mr-5\" [style.color]=\"'orange'\">-->\n<!--      <a class=\"nav-link\" href=\"items/veg\" [style.color]=\"'green'\"><i class=\"fa p-1\" >&#xf111;</i>&nbsp;Veg</a>-->\n<!--    </li>-->\n<!--    <li class=\"nav-item pl-5 ml-5\">-->\n<!--      <a class=\"nav-link\" href=\"items/nonveg\" [style.color]=\"'red'\"><i class=\"fa p-1\">&#xf111;</i>&nbsp;Non Veg</a>-->\n<!--    </li>-->\n\n<!--  </ul>-->\n<!--  -->\n<!--  -->\n<!--</nav>-->\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>page-not-found works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register-customer/register-customer.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register-customer/register-customer.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterCustomerRegisterCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form action=\"login\" class=\"was-validated mt-4\">\n\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" name=\"name\" [(ngModel)]=\"customer.name\"  required>\n    <div class=\"valid-feedback\">Valid.</div>\n    <div class=\"invalid-feedback\">Please fill out this field.</div>\n  </div>\n  <div>\n    <input type=\"email\" [formControl]=\"emailref\" class=\"form-control\" id=\"uname\"  placeholder=\"Your Email Address\"  name=\"username\" [(ngModel)]=\"customer.email\" required>\n    <div *ngIf=\"emailref.invalid && (emailref.dirty || emailref.touched)\"\n         class=\"alert alert-danger\">\n      <div *ngIf=\"emailref.errors.required\">\n        Email is required.\n      </div>\n      <div *ngIf=\"emailref.errors.email\">\n        Please enter a valid email.\n      </div>\n    </div>\n    <div *ngIf=\"emailref.errors.validateEmail\">\n      Please enter valid email\n    </div >\n    <div class=\"valid-feedback\">Valid.</div>\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control mt-4\" id=\"pwd\" placeholder=\"Choose Password\" name=\"pswd\" [(ngModel)]=\"customer.password\" required>\n    <div class=\"valid-feedback\">Valid.</div>\n    <div class=\"invalid-feedback\">Please fill out this field.</div>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" [pattern]=\"mobPattern\" #mobNo=\"ngModel\" id=\"number\" placeholder=\"Mobile Number\" name=\"mob\" [(ngModel)]=\"customer.mobileNo\" required>\n    <div *ngIf=\"mobNo.errors.pattern\"  class=\"alert alert-danger p-2\">Mobile Number Not Valid\n    </div>\n    <div class=\"valid-feedback\">Valid.</div>\n\n  </div>\n  <b class=\"ml-1\">I'm a:- </b>&nbsp;\n  <div class=\"form-group\">\n    <select [(ngModel)]=\"customer.gender\"  class=\"form-control custom-select\" name=\"gender\" required>\n      <option >Male</option>\n      <option >Female</option>\n      <option >Transgender</option>\n    </select>\n    <div class=\"valid-feedback\">Valid.</div>\n    <div class=\"invalid-feedback\">Please fill out this field.</div>\n  </div>\n  <b class=\"ml-1\">Food Preference:- </b>&nbsp;\n  <div class=\"form-group\">\n    <select [(ngModel)]=\"customer.preference\"  class=\"form-control custom-select\" name=\"gender\" required>\n      <option >Vegeterian</option>\n      <option >Non Vegeterian</option>\n    </select>\n    <div class=\"valid-feedback\">Valid.</div>\n    <div class=\"invalid-feedback\">Please fill out this field.</div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-info mt-3 mb-3 w-100\" (click)=\"createUser()\">REGISTER</button>\n</form>\n\n<small>Already using foodshala?<a href=\"authentication/login\"> Log In here</a></small><br>\n<small>Want to register your restaurant?<a href=\"authentication/registerRestaurant\"> Register here</a></small>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register-restaurant/register-restaurant.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register-restaurant/register-restaurant.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRestaurantRegisterRestaurantComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form action=\"login\" class=\"was-validated mt-4\">\n\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Restaurant's Name\" name=\"name\" [(ngModel)]=\"restaurant.restaurantName\" required>\n    <div class=\"valid-feedback\">Valid.</div>\n    <div class=\"invalid-feedback\">Please fill out this field.</div>\n  </div>\n  <div>\n    <input type=\"email\" [formControl]=\"emailref\"   class=\"form-control\" id=\"uname\"  placeholder=\"Restaurant's Email Address\"  name=\"username\" [(ngModel)]=\"restaurant.email\" required>\n    <div *ngIf=\"emailref.invalid && (emailref.dirty || emailref.touched)\"\n         class=\"alert alert-danger\">\n      <div *ngIf=\"emailref.errors.required\">\n        Email is required.\n      </div>\n      <div *ngIf=\"emailref.errors.email\">\n        Please enter a valid email.\n      </div>\n    </div>\n    <div *ngIf=\"emailref.errors.validateEmail\">\n      Please enter valid email\n    </div >\n    <div class=\"valid-feedback\">Valid.</div>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control mt-4\" id=\"pwd\" placeholder=\"Choose Password\" name=\"pswd\" [(ngModel)]=\"restaurant.password\" required>\n    <div class=\"valid-feedback\">Valid.</div>\n    <div class=\"invalid-feedback\">Please fill out this field.</div>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" [pattern]=\"mobPattern\" #mobNo=\"ngModel\" id=\"number\" placeholder=\"Mobile Number\" name=\"mob\" [(ngModel)]=\"restaurant.mobileNo\" required>\n    <div *ngIf=\"mobNo.errors.pattern\"  class=\"alert alert-danger p-2\">Mobile Number Not Valid\n    </div>\n    <div class=\"valid-feedback\">Valid.</div>\n\n  </div>\n\n\n  <button type=\"submit\" class=\"btn btn-info mt-3 mb-3 w-100\" (click)=\"addRestaurant()\">REGISTER</button>\n</form>\n\n<small>Already using foodshala?<a href=\"authentication/login\"> Log In here</a></small><br>\n<small>Want to register yourself?<a href=\"authentication/registerRestaurant\">Register Here</a></small>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurant-menu/restaurant-menu.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurant-menu/restaurant-menu.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRestaurantMenuRestaurantMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<div class=\"container\">\n<div class=\"row pt-5 mt-3\">\n\n  <div class=\"col-sm-6 mt-1\">\n\n    <div class=\"mb-3\" ><h1 class=\"text-success font1 text-center\">Vegeterian Food</h1></div>\n\n    <div class=\"container\" >\n      <table class=\"table table-hover\">\n        <thead>\n        <tr>\n          <th>FoodItem</th>\n          <th>Price</th>\n        </tr>\n        </thead>\n        <tbody *ngFor=\"let food of allFood\">\n        <tr *ngIf=\"food.type=='Vegeterian'\">\n          <td class=\"pt-3\">{{food.foodItem}}</td>\n          <td><i class=\"fa my-3\">&#xf156;</i>{{food.price}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n\n\n\n  </div>\n\n  <div class=\"col-sm-6 mt-1\">\n\n    <div class=\"mb-3\"><h1 class=\"text-danger font1 text-center\">Non Vegeterian Food</h1></div>\n\n    <div class=\"container\">\n\n      <table class=\"table table-hover\">\n        <thead>\n        <tr>\n          <th>FoodItem</th>\n          <th>Price</th>\n        </tr>\n        </thead>\n        <tbody *ngFor=\"let food of allFood\">\n        <tr *ngIf=\"food.type!=='Vegeterian'\">\n          <td class=\"pt-3\">{{food.foodItem}}</td>\n          <td><i class=\"fa my-3\">&#xf156;</i>{{food.price}}</td>\n        </tr>\n        </tbody>\n      </table>\n\n\n\n\n\n    </div>\n\n\n\n  </div>\n\n\n\n\n\n\n</div>\n</div>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-order/view-order.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-order/view-order.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewOrderViewOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<app-navbar></app-navbar>\n<div class=\"container bg-light mt-5\">\n  <div class=\"container-fluid pb-5\">\n\n\n    <h1 class=\"font1 text-center pt-5 text-black-50 mt-5\">My Orders</h1>\n    <hr class=\"mb-4\">\n\n\n    <div class=\"container\" *ngFor=\"let order of myOrders;\">\n\n\n\n      <div class=\"row\" >\n\n\n        <div class=\"col-sm-6\">\n          <h2 class=\"font1\">{{order[0].customer.name}}</h2>\n          <b>Phone No :- </b><small>{{order[0].customer.mobileNo}}</small><br>\n          <b>Email :- </b><small>{{order[0].customer.email}}</small><br>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <table class=\"table table-hover\">\n            <thead>\n            <tr>\n              <th>FoodItem</th>\n              <th>Price</th>\n              <th>Quantity</th>\n            </tr>\n            </thead>\n            <tbody >\n              <tr *ngFor=\"let x of order\">\n                <td class=\"pt-3\">{{x.item.foodItem}}</td>\n                <td><i class=\"fa my-3\">&#xf156;</i>{{x.item.price}}</td>\n                <td>{{x.quantity}}</td>\n              </tr>\n            </tbody>\n          </table>\n\n\n        </div>\n        <hr>\n\n\n      </div>\n      <hr>\n\n\n\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/visit-restaurant/visit-restaurant.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/visit-restaurant/visit-restaurant.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVisitRestaurantVisitRestaurantComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n  <div class=\"row pt-5 mt-3\">\n\n    <div class=\"col-sm-6 mt-1\">\n\n      <div class=\"mb-3\"><h1 class=\"text-success font1 text-center\">Vegeterian Food</h1></div>\n\n\n      <div class=\"container\" >\n        <table class=\"table table-hover\">\n          <thead>\n          <tr>\n            <th>FoodItem</th>\n            <th>Price</th>\n            <th>Restaurant Name</th>\n            <th *ngIf=\"role != 'restaurant'\">Order</th>\n          </tr>\n          </thead>\n          <tbody *ngFor=\"let food of allFoodOfRestaurant\">\n          <tr *ngIf=\"food.type == 'Vegeterian'\">\n            <td class=\"pt-3\">{{food.foodItem}}</td>\n            <td><i class=\"fa my-3\">&#xf156;</i>{{food.price}}</td>\n            <td>{{food.restaurant.restaurantName}}</td>\n            <td  *ngIf=\"role != 'restaurant'\"><button class=\"ml-2 btn btn-sm btn-info\" (click)=\"orderFood(food.foodId)\">Order</button><td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n\n\n\n\n\n\n\n\n\n    </div>\n\n    <div class=\"col-sm-6 mt-1\">\n\n      <div class=\"mb-3\"><h1 class=\"text-danger font1 text-center\">Non Vegeterian Food</h1></div>\n      <div class=\"container\" >\n        <table class=\"table table-hover\">\n          <thead>\n          <tr>\n            <th>FoodItem</th>\n            <th>Price</th>\n            <th>Restaurant Name</th>\n            <th *ngIf=\"role != 'restaurant'\">Order</th>\n          </tr>\n          </thead>\n          <tbody *ngFor=\"let food of allFoodOfRestaurant\">\n          <tr *ngIf=\"food.type!='Vegeterian'\">\n            <td class=\"pt-3\">{{food.foodItem}}</td>\n            <td><i class=\"fa my-3\">&#xf156;</i>{{food.price}}</td>\n            <td>{{food.restaurant.restaurantName}}</td>\n            <td *ngIf=\"role != 'restaurant'\"><button class=\"ml-2 btn btn-sm btn-info\" (click)=\"orderFood(food.foodId)\">Order</button><td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n\n\n\n\n\n  </div>\n</div>\n</div>\n\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/add-food-item/add-food-item.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/add-food-item/add-food-item.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddFoodItemAddFoodItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Allerta+Stencil&display=swap\");\n#grad {\n  height: 750px;\n  background-color: #F9E3F5;\n  background-image: linear-gradient(to bottom right, #F9E4F8, #F6F9CB);\n}\n.font1 {\n  font-family: \"Allerta Stencil\", sans-serif;\n}\n.signupbox {\n  height: auto;\n  width: 400px;\n  position: absolute;\n  margin-top: 15px;\n  margin-left: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWZvb2QtaXRlbS9DOlxcVXNlcnNcXExFTk9WT1xcRGVza3RvcFxcZm9vZFNoYWxhRnJvbnRlbmQvc3JjXFxhcHBcXGFkZC1mb29kLWl0ZW1cXGFkZC1mb29kLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkZC1mb29kLWl0ZW0vYWRkLWZvb2QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRUSxtRkFBQTtBQVJSO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0VBQUE7QUNFRjtBREFBO0VBQ0UsMENBQUE7QUNHRjtBRENBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2FkZC1mb29kLWl0ZW0vYWRkLWZvb2QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNncmFkIHtcclxuICBoZWlnaHQ6IDc1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUUzRjU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI0Y5RTRGOCwgI0Y2RjlDQik7XHJcbn1cclxuLmZvbnQxIHtcclxuICBmb250LWZhbWlseTogJ0FsbGVydGEgU3RlbmNpbCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGxlcnRhK1N0ZW5jaWwmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uc2lnbnVwYm94IHtcclxuICBoZWlnaHQgOiBhdXRvO1xyXG4gIHdpZHRoIDogNDAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGxlcnRhK1N0ZW5jaWwmZGlzcGxheT1zd2FwXCIpO1xuI2dyYWQge1xuICBoZWlnaHQ6IDc1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlFM0Y1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjRjlFNEY4LCAjRjZGOUNCKTtcbn1cblxuLmZvbnQxIHtcbiAgZm9udC1mYW1pbHk6IFwiQWxsZXJ0YSBTdGVuY2lsXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5zaWdudXBib3gge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA0MDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMzUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/add-food-item/add-food-item.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/add-food-item/add-food-item.component.ts ***!
    \**********************************************************/

  /*! exports provided: AddFoodItemComponent */

  /***/
  function srcAppAddFoodItemAddFoodItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddFoodItemComponent", function () {
      return AddFoodItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _restaurant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../restaurant.service */
    "./src/app/restaurant.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../menu.service */
    "./src/app/menu.service.ts");

    var AddFoodItemComponent = /*#__PURE__*/function () {
      // selectedFile: File = null;
      function AddFoodItemComponent(restaurantService, router, menuService) {
        _classCallCheck(this, AddFoodItemComponent);

        this.restaurantService = restaurantService;
        this.router = router;
        this.menuService = menuService; // tslint:disable-next-line:new-parens

        this.menuItem = new ( /*#__PURE__*/function () {
          function _class() {
            _classCallCheck(this, _class);
          }

          return _class;
        }())();
      }

      _createClass(AddFoodItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addFoodItem",
        value: function addFoodItem() {
          var _this = this;

          console.log(this.menuItem);

          if (this.menuItem.foodItem != null && this.menuItem.type != null && this.menuItem.price != null) {
            this.menuService.addFoodItem(this.menuItem).subscribe(function (data) {
              alert('New Product Added Successfully');

              _this.router.navigate(['restaurantMenu']);
            });
          } else {
            alert('Please fill all the details.');
          }
        }
      }]);

      return AddFoodItemComponent;
    }();

    AddFoodItemComponent.ctorParameters = function () {
      return [{
        type: _restaurant_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]
      }];
    };

    AddFoodItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-food-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-food-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-food-item/add-food-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-food-item.component.scss */
      "./src/app/add-food-item/add-food-item.component.scss"))["default"]]
    })], AddFoodItemComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.route */
    "./src/app/app.route.ts");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_route__WEBPACK_IMPORTED_MODULE_3__["MAIN_ROUTES"])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'foodShala';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./index/index.component */
    "./src/app/index/index.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _register_customer_register_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./register-customer/register-customer.component */
    "./src/app/register-customer/register-customer.component.ts");
    /* harmony import */


    var _register_restaurant_register_restaurant_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./register-restaurant/register-restaurant.component */
    "./src/app/register-restaurant/register-restaurant.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _add_food_item_add_food_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./add-food-item/add-food-item.component */
    "./src/app/add-food-item/add-food-item.component.ts");
    /* harmony import */


    var _restaurant_menu_restaurant_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./restaurant-menu/restaurant-menu.component */
    "./src/app/restaurant-menu/restaurant-menu.component.ts");
    /* harmony import */


    var _logout_logout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./logout/logout.component */
    "./src/app/logout/logout.component.ts");
    /* harmony import */


    var _visit_restaurant_visit_restaurant_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./visit-restaurant/visit-restaurant.component */
    "./src/app/visit-restaurant/visit-restaurant.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _view_order_view_order_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./view-order/view-order.component */
    "./src/app/view-order/view-order.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _register_customer_register_customer_component__WEBPACK_IMPORTED_MODULE_10__["RegisterCustomerComponent"], _register_restaurant_register_restaurant_component__WEBPACK_IMPORTED_MODULE_11__["RegisterRestaurantComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _add_food_item_add_food_item_component__WEBPACK_IMPORTED_MODULE_14__["AddFoodItemComponent"], _restaurant_menu_restaurant_menu_component__WEBPACK_IMPORTED_MODULE_15__["RestaurantMenuComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_16__["LogoutComponent"], _visit_restaurant_visit_restaurant_component__WEBPACK_IMPORTED_MODULE_17__["VisitRestaurantComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_18__["CartComponent"], _view_order_view_order_component__WEBPACK_IMPORTED_MODULE_19__["ViewOrderComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.route.ts":
  /*!******************************!*\
    !*** ./src/app/app.route.ts ***!
    \******************************/

  /*! exports provided: MAIN_ROUTES */

  /***/
  function srcAppAppRouteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAIN_ROUTES", function () {
      return MAIN_ROUTES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index/index.component */
    "./src/app/index/index.component.ts");
    /* harmony import */


    var _register_customer_register_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./register-customer/register-customer.component */
    "./src/app/register-customer/register-customer.component.ts");
    /* harmony import */


    var _register_restaurant_register_restaurant_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register-restaurant/register-restaurant.component */
    "./src/app/register-restaurant/register-restaurant.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _add_food_item_add_food_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-food-item/add-food-item.component */
    "./src/app/add-food-item/add-food-item.component.ts");
    /* harmony import */


    var _restaurant_menu_restaurant_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./restaurant-menu/restaurant-menu.component */
    "./src/app/restaurant-menu/restaurant-menu.component.ts");
    /* harmony import */


    var _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./logout/logout.component */
    "./src/app/logout/logout.component.ts");
    /* harmony import */


    var _visit_restaurant_visit_restaurant_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./visit-restaurant/visit-restaurant.component */
    "./src/app/visit-restaurant/visit-restaurant.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _view_order_view_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./view-order/view-order.component */
    "./src/app/view-order/view-order.component.ts");
    /* harmony import */


    var _auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./auth-guard.service */
    "./src/app/auth-guard.service.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");

    var MAIN_ROUTES = [{
      path: '',
      redirectTo: '/index',
      pathMatch: 'full'
    }, {
      path: 'index',
      component: _index_index_component__WEBPACK_IMPORTED_MODULE_1__["IndexComponent"]
    }, {
      path: 'authentication',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
      children: [{
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }, {
        path: 'registerCustomer',
        component: _register_customer_register_customer_component__WEBPACK_IMPORTED_MODULE_2__["RegisterCustomerComponent"]
      }, {
        path: 'registerRestaurant',
        component: _register_restaurant_register_restaurant_component__WEBPACK_IMPORTED_MODULE_3__["RegisterRestaurantComponent"]
      }]
    }, {
      path: 'restaurantMenu',
      component: _restaurant_menu_restaurant_menu_component__WEBPACK_IMPORTED_MODULE_7__["RestaurantMenuComponent"],
      canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]]
    }, {
      path: 'addFoodItem',
      component: _add_food_item_add_food_item_component__WEBPACK_IMPORTED_MODULE_6__["AddFoodItemComponent"],
      canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]]
    }, {
      path: 'visitRestaurant/:id',
      component: _visit_restaurant_visit_restaurant_component__WEBPACK_IMPORTED_MODULE_9__["VisitRestaurantComponent"]
    }, {
      path: 'cart',
      component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"],
      canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]]
    }, {
      path: 'viewOrders',
      component: _view_order_view_order_component__WEBPACK_IMPORTED_MODULE_11__["ViewOrderComponent"],
      canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]]
    }, {
      path: 'logout',
      component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"]
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/auth-guard.service.ts":
  /*!***************************************!*\
    !*** ./src/app/auth-guard.service.ts ***!
    \***************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication.service.ts");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(router, authService) {
        _classCallCheck(this, AuthGuardService);

        this.router = router;
        this.authService = authService;
      } // tslint:disable-next-line:max-line-length


      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.authService.isUserLoggedIn()) {
            return true;
          }

          alert('You are being redirected to Login Page');
          this.router.navigate(['authenticatication/login']);
          return false;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/authentication.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/authentication.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registration.service */
    "./src/app/registration.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http, registrationService) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.registrationService = registrationService;
      } // authenticate(username, password) {
      //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      //   return this.http.get('http://localhost:2020/validateCustomerLogin' || 'http://localhost:2020/validateRestaurantLogin', {headers}).pipe(
      //     map(
      //       userData => {
      //         sessionStorage.setItem('username', username);
      //         const authString = 'Basic ' + btoa(username + ':' + password);
      //         sessionStorage.setItem('basicAuth', authString);
      //         return userData;
      //       }
      //     )
      //   );
      // }


      _createClass(AuthenticationService, [{
        key: "authenticateCustomer",
        value: function authenticateCustomer(username, password) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Basic ' + btoa(username + ':' + password)
          });
          return this.http.get('http://localhost:2020/validateCustomerLogin', {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (userData) {
            sessionStorage.setItem('username', username);
            var authString = 'Basic ' + btoa(username + ':' + password);
            sessionStorage.setItem('basicAuth', authString);
            return userData;
          }));
        }
      }, {
        key: "authenticateRestaurant",
        value: function authenticateRestaurant(username, password) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Basic ' + btoa(username + ':' + password)
          });
          return this.http.get('http://localhost:2020/validateRestaurantLogin', {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (userData) {
            sessionStorage.setItem('username', username);
            var authString = 'Basic ' + btoa(username + ':' + password);
            sessionStorage.setItem('basicAuth', authString);
            return userData;
          }));
        }
      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          var user = sessionStorage.getItem('username');
          console.log(!(user === null));
          return !(user === null);
        }
      }, {
        key: "logOut",
        value: function logOut() {
          sessionStorage.removeItem('username');
          sessionStorage.removeItem('basicAuth');
          sessionStorage.removeItem('role');
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/cart.service.ts":
  /*!*********************************!*\
    !*** ./src/app/cart.service.ts ***!
    \*********************************/

  /*! exports provided: CartService */

  /***/
  function srcAppCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CartService = /*#__PURE__*/function () {
      function CartService(http) {
        _classCallCheck(this, CartService);

        this.http = http;
        this.url = 'http://localhost:2020';
      }

      _createClass(CartService, [{
        key: "addToCart",
        value: function addToCart(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: sessionStorage.getItem('basicAuth')
          });
          return this.http.get(this.url + '/addToCart/' + id, {
            headers: headers
          });
        }
      }, {
        key: "showMyCart",
        value: function showMyCart() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: sessionStorage.getItem('basicAuth')
          });
          return this.http.get(this.url + '/showCart', {
            headers: headers
          });
        }
      }, {
        key: "removeOne",
        value: function removeOne(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: sessionStorage.getItem('basicAuth')
          });
          return this.http.get(this.url + '/removeOneFromCart/' + id, {
            headers: headers
          });
        }
      }, {
        key: "removeWholeProduct",
        value: function removeWholeProduct(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: sessionStorage.getItem('basicAuth')
          });
          return this.http.get(this.url + '/removeFromCart/' + id, {
            headers: headers
          });
        } // showOrderHistory() {
        //   const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
        //   return this.http.get(this.url + '/checkout', {headers});
        //
        // }

      }, {
        key: "checkout",
        value: function checkout() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: sessionStorage.getItem('basicAuth')
          });
          return this.http.get(this.url + '/checkout', {
            headers: headers
          });
        }
      }]);

      return CartService;
    }();

    CartService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CartService);
    /***/
  },

  /***/
  "./src/app/cart/cart.component.scss":
  /*!******************************************!*\
    !*** ./src/app/cart/cart.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCartCartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Allerta+Stencil&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans&display=swap\");\n.font1 {\n  font-family: \"Allerta Stencil\", sans-serif;\n}\n.font2 {\n  font-family: \"Fira Sans\", sans-serif;\n}\n.cart {\n  border: 1px solid darkgrey;\n  width: 100%;\n  border-radius: 7px;\n  margin-bottom: 10px;\n}\n.place_order {\n  border-left: 1px solid darkgrey;\n}\n#grad {\n  background-image: linear-gradient(to bottom right, #F9E4F8, #F6F9CB);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9DOlxcVXNlcnNcXExFTk9WT1xcRGVza3RvcFxcZm9vZFNoYWxhRnJvbnRlbmQvc3JjXFxhcHBcXGNhcnRcXGNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUSxtRkFBQTtBQUtBLDZFQUFBO0FBUlI7RUFDRSwwQ0FBQTtBQ0dGO0FEQ0E7RUFDRSxvQ0FBQTtBQ0VGO0FERUE7RUFFRSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQUY7QURJQTtFQUNFLCtCQUFBO0FDREY7QURLQTtFQUNFLG9FQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnQWxsZXJ0YSBTdGVuY2lsJywgc2Fucy1zZXJpZjtcclxufVxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsbGVydGErU3RlbmNpbCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5mb250MiB7XHJcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmlyYStTYW5zJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmNhcnQge1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbn1cclxuXHJcbi5wbGFjZV9vcmRlciB7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBkYXJrZ3JleTtcclxufVxyXG5cclxuXHJcbiNncmFkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjRjlFNEY4LCAjRjZGOUNCKTtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGxlcnRhK1N0ZW5jaWwmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmlyYStTYW5zJmRpc3BsYXk9c3dhcFwiKTtcbi5mb250MSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFsbGVydGEgU3RlbmNpbFwiLCBzYW5zLXNlcmlmO1xufVxuXG4uZm9udDIge1xuICBmb250LWZhbWlseTogXCJGaXJhIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNhcnQge1xuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnBsYWNlX29yZGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBkYXJrZ3JleTtcbn1cblxuI2dyYWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjRjlFNEY4LCAjRjZGOUNCKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/cart/cart.component.ts":
  /*!****************************************!*\
    !*** ./src/app/cart/cart.component.ts ***!
    \****************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cart.service */
    "./src/app/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CartComponent = /*#__PURE__*/function () {
      function CartComponent(cartService, router) {
        _classCallCheck(this, CartComponent);

        this.cartService = cartService;
        this.router = router;
        this.total = 0;
        this.length = 0;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.cartService.showMyCart().subscribe(function (data) {
            _this2.myProducts = data; // console.log(this.myProducts);

            _this2.length = _this2.myProducts.length;
            var sum = 0;

            for (var i = 0; i < _this2.length; i++) {
              sum = sum + Number(_this2.myProducts[i].menuItem.price) * Number(_this2.myProducts[i].quantity);
            }

            _this2.total = sum;
          });
        }
      }, {
        key: "removeOneQuantity",
        value: function removeOneQuantity(id) {
          var _this3 = this;

          this.cartService.removeOne(id).subscribe(function (data1) {
            _this3.cartService.showMyCart().subscribe(function (data) {
              _this3.myProducts = data;
              _this3.length = _this3.myProducts.length;
              var sum = 0;

              for (var i = 0; i < _this3.length; i++) {
                sum = sum + Number(_this3.myProducts[i].products.price) * Number(_this3.myProducts[i].quantity);
              }

              _this3.total = sum;
            });
          });
        }
      }, {
        key: "addOneQuantity",
        value: function addOneQuantity(id) {
          var _this4 = this;

          this.cartService.addToCart(id).subscribe(function (data1) {
            _this4.cartService.showMyCart().subscribe(function (data) {
              _this4.myProducts = data;
              _this4.length = _this4.myProducts.length;
              var sum = 0;

              for (var i = 0; i < _this4.length; i++) {
                sum = sum + Number(_this4.myProducts[i].products.price) * Number(_this4.myProducts[i].quantity);
              }

              _this4.total = sum;
            });
          });
        }
      }, {
        key: "removeProduct",
        value: function removeProduct(id) {
          var _this5 = this;

          this.cartService.removeWholeProduct(id).subscribe(function (data1) {
            _this5.cartService.showMyCart().subscribe(function (data) {
              _this5.myProducts = data;
              _this5.length = _this5.myProducts.length;
              var sum = 0;

              for (var i = 0; i < _this5.length; i++) {
                sum = sum + Number(_this5.myProducts[i].products.price) * Number(_this5.myProducts[i].quantity);
              }

              _this5.total = sum;
            });
          });
        }
      }, {
        key: "checkOut",
        value: function checkOut() {
          var _this6 = this;

          this.cartService.checkout().subscribe(function (data) {
            alert('Your order has been placed successfully. Thanks for ordering.');

            _this6.router.navigate(['index']);
          });
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ctorParameters = function () {
      return [{
        type: _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.component.scss */
      "./src/app/cart/cart.component.scss"))["default"]]
    })], CartComponent);
    /***/
  },

  /***/
  "./src/app/customer.service.ts":
  /*!*************************************!*\
    !*** ./src/app/customer.service.ts ***!
    \*************************************/

  /*! exports provided: CustomerService */

  /***/
  function srcAppCustomerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
      return CustomerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CustomerService = function CustomerService() {
      _classCallCheck(this, CustomerService);
    };

    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CustomerService);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #60605F;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcTEVOT1ZPXFxEZXNrdG9wXFxmb29kU2hhbGFGcm9udGVuZC9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwNjA1RjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIi5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNUY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Allerta+Stencil&display=swap\");\na {\n  color: white;\n}\na:active {\n  color: white;\n}\na:hover {\n  color: white;\n}\na:visited {\n  color: white;\n}\n.font1 {\n  font-family: \"Allerta Stencil\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXExFTk9WT1xcRGVza3RvcFxcZm9vZFNoYWxhRnJvbnRlbmQvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlUSxtRkFBQTtBQWZSO0VBQ0UsWUFBQTtBQ0VGO0FEQUE7RUFDRSxZQUFBO0FDR0Y7QUREQTtFQUNFLFlBQUE7QUNJRjtBREZBO0VBQ0UsWUFBQTtBQ0tGO0FESEE7RUFDRSwwQ0FBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG5hOmFjdGl2ZXtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG5hOmhvdmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5hOnZpc2l0ZWR7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5mb250MSB7XHJcbiAgZm9udC1mYW1pbHk6ICdBbGxlcnRhIFN0ZW5jaWwnLCBzYW5zLXNlcmlmO1xyXG59XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxsZXJ0YStTdGVuY2lsJmRpc3BsYXk9c3dhcCcpO1xyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGxlcnRhK1N0ZW5jaWwmZGlzcGxheT1zd2FwXCIpO1xuYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTphY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmE6dmlzaXRlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvbnQxIHtcbiAgZm9udC1mYW1pbHk6IFwiQWxsZXJ0YSBTdGVuY2lsXCIsIHNhbnMtc2VyaWY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/index/index.component.scss":
  /*!********************************************!*\
    !*** ./src/app/index/index.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppIndexIndexComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Allerta+Stencil&display=swap\");\n.font1 {\n  font-family: \"Allerta Stencil\", sans-serif;\n}\n.grid {\n  background-color: lavenderblush;\n}\n.gridGreen {\n  background-color: #D3FCC2;\n}\n.gridRed {\n  background-color: #FCC2CC;\n}\n.customerClass {\n  width: 40%;\n  height: 300px;\n  border: 5px solid black;\n  padding: 50px;\n  margin: 10px;\n  background-color: #D3F790;\n  margin-left: 100px;\n}\n.customerClass:hover {\n  box-shadow: 5px 10px #888888;\n}\n.restaurantClass {\n  background-color: beige;\n  width: 40%;\n  height: 300px;\n  padding: 50px;\n  border: 5px solid black;\n  margin: 10px;\n}\n.restaurantClass:hover {\n  box-shadow: 5px 10px #888888;\n}\na:link {\n  color: #60605F;\n}\na:visited {\n  color: #60605F;\n  text-underline: none;\n}\na:hover {\n  color: black;\n  text-decoration: none;\n}\na:active {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvQzpcXFVzZXJzXFxMRU5PVk9cXERlc2t0b3BcXGZvb2RTaGFsYUZyb250ZW5kL3NyY1xcYXBwXFxpbmRleFxcaW5kZXguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdRLG1GQUFBO0FBSFI7RUFDRSwwQ0FBQTtBQ0VGO0FER0E7RUFDRSwrQkFBQTtBQ0FGO0FER0E7RUFDRSx5QkFBQTtBQ0FGO0FERUE7RUFDRSx5QkFBQTtBQ0NGO0FER0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQUY7QURJQTtFQUNFLDRCQUFBO0FDREY7QURJQTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDREY7QURJQTtFQUNFLDRCQUFBO0FDREY7QURJQTtFQUNFLGNBQUE7QUNERjtBRElBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FDREY7QURJQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQ0RGO0FESUE7RUFDRSxZQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250MSB7XHJcbiAgZm9udC1mYW1pbHk6ICdBbGxlcnRhIFN0ZW5jaWwnLCBzYW5zLXNlcmlmO1xyXG59XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxsZXJ0YStTdGVuY2lsJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcbi5ncmlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcmJsdXNoO1xyXG59XHJcblxyXG4uZ3JpZEdyZWVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNGQ0MyO1xyXG59XHJcbi5ncmlkUmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNDMkNDO1xyXG59XHJcblxyXG5cclxuLmN1c3RvbWVyQ2xhc3Mge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNGNzkwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuXHJcbn1cclxuXHJcbi5jdXN0b21lckNsYXNzOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiA1cHggMTBweCAjODg4ODg4O1xyXG59XHJcblxyXG4ucmVzdGF1cmFudENsYXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5yZXN0YXVyYW50Q2xhc3M6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4ICM4ODg4ODg7XHJcbn1cclxuXHJcbmE6bGluayB7XHJcbiAgY29sb3I6ICM2MDYwNUY7XHJcbn1cclxuXHJcbmE6dmlzaXRlZCB7XHJcbiAgY29sb3I6ICM2MDYwNUY7XHJcbiAgdGV4dC11bmRlcmxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6YWN0aXZlIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxsZXJ0YStTdGVuY2lsJmRpc3BsYXk9c3dhcFwiKTtcbi5mb250MSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFsbGVydGEgU3RlbmNpbFwiLCBzYW5zLXNlcmlmO1xufVxuXG4uZ3JpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyYmx1c2g7XG59XG5cbi5ncmlkR3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNGQ0MyO1xufVxuXG4uZ3JpZFJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0MyQ0M7XG59XG5cbi5jdXN0b21lckNsYXNzIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QzRjc5MDtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG4uY3VzdG9tZXJDbGFzczpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDVweCAxMHB4ICM4ODg4ODg7XG59XG5cbi5yZXN0YXVyYW50Q2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcGFkZGluZzogNTBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnJlc3RhdXJhbnRDbGFzczpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDVweCAxMHB4ICM4ODg4ODg7XG59XG5cbmE6bGluayB7XG4gIGNvbG9yOiAjNjA2MDVGO1xufVxuXG5hOnZpc2l0ZWQge1xuICBjb2xvcjogIzYwNjA1RjtcbiAgdGV4dC11bmRlcmxpbmU6IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTphY3RpdmUge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/index/index.component.ts":
  /*!******************************************!*\
    !*** ./src/app/index/index.component.ts ***!
    \******************************************/

  /*! exports provided: IndexComponent */

  /***/
  function srcAppIndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
      return IndexComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _restaurant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../restaurant.service */
    "./src/app/restaurant.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../cart.service */
    "./src/app/cart.service.ts");

    var IndexComponent = /*#__PURE__*/function () {
      function IndexComponent(restaurantService, router, loginService, cartService) {
        _classCallCheck(this, IndexComponent);

        this.restaurantService = restaurantService;
        this.router = router;
        this.loginService = loginService;
        this.cartService = cartService;
      }

      _createClass(IndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          // this.restaurantService.getAllRestaurants().subscribe(data => {
          //   this.allRestaurants = data;
          //   console.log(data);
          // });
          this.restaurantService.getAllFoodItems().subscribe(function (data) {
            _this7.allFood = data;
          });
          this.role = sessionStorage.getItem('role');
        }
      }, {
        key: "addToCart",
        value: function addToCart(id) {
          if (this.loginService.isUserLoggedIn()) {
            this.cartService.addToCart(id).subscribe(function (data) {
              return console.log(data);
            });
            alert('Product added to cart.');
          } else {
            alert('Please Login First');
          }
        }
      }, {
        key: "seeMenu",
        value: function seeMenu(restaurantId) {
          this.router.navigate(['visitRestaurant', restaurantId]);
        }
      }]);

      return IndexComponent;
    }();

    IndexComponent.ctorParameters = function () {
      return [{
        type: _restaurant_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
      }];
    };

    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-index',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./index.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./index.component.scss */
      "./src/app/index/index.component.scss"))["default"]]
    })], IndexComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _restaurant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../restaurant.service */
    "./src/app/restaurant.service.ts");
    /* harmony import */


    var _customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../customer.service */
    "./src/app/customer.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, loginservice, restrauntService, customerService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.loginservice = loginservice;
        this.restrauntService = restrauntService;
        this.customerService = customerService;
        this.username = '';
        this.password = '';
        this.invalidLogin = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "checkLoginCustomer",
        value: function checkLoginCustomer() {
          var _this8 = this;

          this.loginservice.authenticateCustomer(this.username, this.password).subscribe(function (data) {
            console.log(data);
            _this8.invalidLogin = false;

            if (!_this8.invalidLogin) {
              _this8.restrauntService.checkLogin(_this8.username).subscribe(function (data2) {
                _this8.role = data2;
                sessionStorage.setItem('role', _this8.role);
                console.log(data2);

                if (_this8.role === 'customer') {
                  // if logged in user is customer
                  _this8.router.navigate(['index']);
                } else {
                  // if logged in user is restaurant owner
                  _this8.router.navigate(['restaurantMenu']);
                }
              });
            }
          }, function (error) {
            _this8.invalidLogin = true;

            _this8.checkLoginRestaurant();

            if (_this8.invalidLogin) {
              alert('Invalid username or password. Please try again.');
              location.reload();
            }
          });
        }
      }, {
        key: "checkLoginRestaurant",
        value: function checkLoginRestaurant() {
          var _this9 = this;

          this.loginservice.authenticateRestaurant(this.username, this.password).subscribe(function (data) {
            _this9.router.navigate(['index']);

            _this9.invalidLogin = false;
          }, function (error) {
            _this9.invalidLogin = true;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _restaurant_service__WEBPACK_IMPORTED_MODULE_4__["RestaurantService"]
      }, {
        type: _customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/logout/logout.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/logout/logout.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLogoutLogoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/logout/logout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/logout/logout.component.ts ***!
    \********************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LogoutComponent = /*#__PURE__*/function () {
      function LogoutComponent(loginService, router) {
        _classCallCheck(this, LogoutComponent);

        this.loginService = loginService;
        this.router = router;
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginService.logOut();
          this.router.navigate(['index']);
        }
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logout.component.scss */
      "./src/app/logout/logout.component.scss"))["default"]]
    })], LogoutComponent);
    /***/
  },

  /***/
  "./src/app/menu.service.ts":
  /*!*********************************!*\
    !*** ./src/app/menu.service.ts ***!
    \*********************************/

  /*! exports provided: MenuService */

  /***/
  function srcAppMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuService", function () {
      return MenuService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var MenuService = /*#__PURE__*/function () {
      function MenuService(http) {
        _classCallCheck(this, MenuService);

        this.http = http;
        this.url = 'http://localhost:2020';
      }

      _createClass(MenuService, [{
        key: "getMyMenu",
        value: function getMyMenu() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: sessionStorage.getItem('basicAuth')
          });
          return this.http.get(this.url + '/getMyMenu', {
            headers: headers
          });
        }
      }, {
        key: "addFoodItem",
        value: function addFoodItem(menuItem) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: sessionStorage.getItem('basicAuth')
          });
          return this.http.post(this.url + '/addMenuItem', menuItem, {
            headers: headers
          });
        }
      }]);

      return MenuService;
    }();

    MenuService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MenuService);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/navbar/navbar.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Allerta+Stencil&display=swap\");\n.font1 {\n  font-family: \"Allerta Stencil\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcTEVOT1ZPXFxEZXNrdG9wXFxmb29kU2hhbGFGcm9udGVuZC9zcmNcXGFwcFxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1EsbUZBQUE7QUFIUjtFQUNFLDBDQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnQxIHtcclxuICBmb250LWZhbWlseTogJ0FsbGVydGEgU3RlbmNpbCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGxlcnRhK1N0ZW5jaWwmZGlzcGxheT1zd2FwJyk7XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsbGVydGErU3RlbmNpbCZkaXNwbGF5PXN3YXBcIik7XG4uZm9udDEge1xuICBmb250LWZhbWlseTogXCJBbGxlcnRhIFN0ZW5jaWxcIiwgc2Fucy1zZXJpZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(loginService) {
        _classCallCheck(this, NavbarComponent);

        this.loginService = loginService;
        this.role = sessionStorage.getItem('role');
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/navbar/navbar.component.scss"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent(router, loginService) {
        _classCallCheck(this, PageNotFoundComponent);

        this.router = router;
        this.loginService = loginService;
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginService.logOut();
          this.router.navigate(['index']);
        }
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.scss */
      "./src/app/page-not-found/page-not-found.component.scss"))["default"]]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/register-customer/register-customer.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/register-customer/register-customer.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterCustomerRegisterCustomerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWN1c3RvbWVyL3JlZ2lzdGVyLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/register-customer/register-customer.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/register-customer/register-customer.component.ts ***!
    \******************************************************************/

  /*! exports provided: RegisterCustomerComponent */

  /***/
  function srcAppRegisterCustomerRegisterCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterCustomerComponent", function () {
      return RegisterCustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../registration.service */
    "./src/app/registration.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterCustomerComponent = /*#__PURE__*/function () {
      function RegisterCustomerComponent(register, router) {
        _classCallCheck(this, RegisterCustomerComponent);

        this.register = register;
        this.router = router; // tslint:disable-next-line:new-parens

        this.customer = new ( /*#__PURE__*/function () {
          function _class2() {
            _classCallCheck(this, _class2);
          }

          return _class2;
        }())();
        this.emailref = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.mobPattern = '^((\\+91-?)|0)?[0-9]{10}$';
      }

      _createClass(RegisterCustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createUser",
        value: function createUser() {
          var _this10 = this;

          if (this.customer.name != null && this.customer.email != null && this.customer.password != null && this.customer.mobileNo != null && this.customer.gender != null) {
            this.register.createCustomer(this.customer).subscribe(function (data) {
              alert('User created successfully.');

              _this10.router.navigate(['authentication/login']);
            });
          } else {
            alert('Please fill all the details.');
          }
        }
      }]);

      return RegisterCustomerComponent;
    }();

    RegisterCustomerComponent.ctorParameters = function () {
      return [{
        type: _registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegisterCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register-customer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register-customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register-customer/register-customer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register-customer.component.scss */
      "./src/app/register-customer/register-customer.component.scss"))["default"]]
    })], RegisterCustomerComponent);
    /***/
  },

  /***/
  "./src/app/register-restaurant/register-restaurant.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/register-restaurant/register-restaurant.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRestaurantRegisterRestaurantComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLXJlc3RhdXJhbnQvcmVnaXN0ZXItcmVzdGF1cmFudC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/register-restaurant/register-restaurant.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/register-restaurant/register-restaurant.component.ts ***!
    \**********************************************************************/

  /*! exports provided: RegisterRestaurantComponent */

  /***/
  function srcAppRegisterRestaurantRegisterRestaurantComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterRestaurantComponent", function () {
      return RegisterRestaurantComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../registration.service */
    "./src/app/registration.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterRestaurantComponent = /*#__PURE__*/function () {
      function RegisterRestaurantComponent(register, router) {
        _classCallCheck(this, RegisterRestaurantComponent);

        this.register = register;
        this.router = router; // tslint:disable-next-line:new-parens

        this.restaurant = new ( /*#__PURE__*/function () {
          function _class3() {
            _classCallCheck(this, _class3);
          }

          return _class3;
        }())();
        this.emailref = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.mobPattern = '^((\\+91-?)|0)?[0-9]{10}$';
      }

      _createClass(RegisterRestaurantComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addRestaurant",
        value: function addRestaurant() {
          var _this11 = this;

          if (this.restaurant.restaurantName != null && this.restaurant.email != null && this.restaurant.password != null && this.restaurant.mobileNo != null) {
            this.register.addRestaurant(this.restaurant).subscribe(function (data) {
              alert('Restaurant added successfully.');

              _this11.router.navigate(['authentication/login']);
            });
          } else {
            alert('Please fill all the details.');
          }
        }
      }]);

      return RegisterRestaurantComponent;
    }();

    RegisterRestaurantComponent.ctorParameters = function () {
      return [{
        type: _registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegisterRestaurantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register-restaurant',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register-restaurant.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register-restaurant/register-restaurant.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register-restaurant.component.scss */
      "./src/app/register-restaurant/register-restaurant.component.scss"))["default"]]
    })], RegisterRestaurantComponent);
    /***/
  },

  /***/
  "./src/app/registration.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/registration.service.ts ***!
    \*****************************************/

  /*! exports provided: RegistrationService */

  /***/
  function srcAppRegistrationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationService", function () {
      return RegistrationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var RegistrationService = /*#__PURE__*/function () {
      function RegistrationService(http) {
        _classCallCheck(this, RegistrationService);

        this.http = http;
        this.url = 'http://localhost:2020';
      }

      _createClass(RegistrationService, [{
        key: "createCustomer",
        value: function createCustomer(customer) {
          return this.http.post(this.url + '/addCustomer', customer);
        }
      }, {
        key: "addRestaurant",
        value: function addRestaurant(restautant) {
          return this.http.post(this.url + '/addRestaurant', restautant);
        }
      }]);

      return RegistrationService;
    }();

    RegistrationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RegistrationService);
    /***/
  },

  /***/
  "./src/app/restaurant-menu/restaurant-menu.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/restaurant-menu/restaurant-menu.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRestaurantMenuRestaurantMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Allerta+Stencil&display=swap\");\n.font1 {\n  font-family: \"Allerta Stencil\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudC1tZW51L0M6XFxVc2Vyc1xcTEVOT1ZPXFxEZXNrdG9wXFxmb29kU2hhbGFGcm9udGVuZC9zcmNcXGFwcFxccmVzdGF1cmFudC1tZW51XFxyZXN0YXVyYW50LW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3RhdXJhbnQtbWVudS9yZXN0YXVyYW50LW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1EsbUZBQUE7QUFIUjtFQUNFLDBDQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9yZXN0YXVyYW50LW1lbnUvcmVzdGF1cmFudC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnQxIHtcclxuICBmb250LWZhbWlseTogJ0FsbGVydGEgU3RlbmNpbCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGxlcnRhK1N0ZW5jaWwmZGlzcGxheT1zd2FwJyk7XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsbGVydGErU3RlbmNpbCZkaXNwbGF5PXN3YXBcIik7XG4uZm9udDEge1xuICBmb250LWZhbWlseTogXCJBbGxlcnRhIFN0ZW5jaWxcIiwgc2Fucy1zZXJpZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/restaurant-menu/restaurant-menu.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/restaurant-menu/restaurant-menu.component.ts ***!
    \**************************************************************/

  /*! exports provided: RestaurantMenuComponent */

  /***/
  function srcAppRestaurantMenuRestaurantMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestaurantMenuComponent", function () {
      return RestaurantMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../menu.service */
    "./src/app/menu.service.ts");
    /* harmony import */


    var _restaurant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../restaurant.service */
    "./src/app/restaurant.service.ts");

    var RestaurantMenuComponent = /*#__PURE__*/function () {
      function RestaurantMenuComponent(menuService, restaurantService) {
        _classCallCheck(this, RestaurantMenuComponent);

        this.menuService = menuService;
        this.restaurantService = restaurantService;
      }

      _createClass(RestaurantMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          // this.menuService.getMyMenu().subscribe(data => {
          //   this.allFoodItems = data;
          // });
          this.restaurantService.myRestarauntFood().subscribe(function (data) {
            _this12.allFood = data;
            console.log(_this12.allFood);
          });
        }
      }]);

      return RestaurantMenuComponent;
    }();

    RestaurantMenuComponent.ctorParameters = function () {
      return [{
        type: _menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]
      }, {
        type: _restaurant_service__WEBPACK_IMPORTED_MODULE_3__["RestaurantService"]
      }];
    };

    RestaurantMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-restaurant-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./restaurant-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurant-menu/restaurant-menu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./restaurant-menu.component.scss */
      "./src/app/restaurant-menu/restaurant-menu.component.scss"))["default"]]
    })], RestaurantMenuComponent);
    /***/
  },

  /***/
  "./src/app/restaurant.service.ts":
  /*!***************************************!*\
    !*** ./src/app/restaurant.service.ts ***!
    \***************************************/

  /*! exports provided: RestaurantService */

  /***/
  function srcAppRestaurantServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestaurantService", function () {
      return RestaurantService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var RestaurantService = /*#__PURE__*/function () {
      function RestaurantService(http) {
        _classCallCheck(this, RestaurantService);

        this.http = http;
        this.url = 'http://localhost:2020';
      }

      _createClass(RestaurantService, [{
        key: "checkLogin",
        value: function checkLogin(username) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: sessionStorage.getItem('basicAuth')
          }); // username = sessionStorage.getItem('username');
          // console.log(this.http.get(this.url + '/getRole/' + username, {headers}));

          return this.http.get(this.url + '/getRole/' + username, {
            headers: headers
          });
        }
      }, {
        key: "getMyMenu",
        value: function getMyMenu() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: sessionStorage.getItem('basicAuth')
          });
          return this.http.get(this.url + '/getMyMenu', {
            headers: headers
          });
        }
      }, {
        key: "getAllRestaurants",
        value: function getAllRestaurants() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: sessionStorage.getItem('basicAuth')
          });
          return this.http.get(this.url + '/getAllRestaurants', {
            headers: headers
          });
        }
      }, {
        key: "getAllFoodItems",
        value: function getAllFoodItems() {
          // const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
          return this.http.get(this.url + '/getAllFoodItems');
        }
      }, {
        key: "getAllFoodItemsOfRestaurants",
        value: function getAllFoodItemsOfRestaurants(id) {
          return this.http.get(this.url + '/getAllFoodItemsOfRestaurants/' + id);
        }
      }, {
        key: "myRestarauntFood",
        value: function myRestarauntFood() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: sessionStorage.getItem('basicAuth')
          });
          return this.http.get(this.url + '/getMyRestaurantsFood', {
            headers: headers
          });
        }
      }, {
        key: "getMyOrders",
        value: function getMyOrders() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: sessionStorage.getItem('basicAuth')
          });
          return this.http.get(this.url + '/getMyOrders', {
            headers: headers
          });
        }
      }]);

      return RestaurantService;
    }();

    RestaurantService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RestaurantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RestaurantService);
    /***/
  },

  /***/
  "./src/app/view-order/view-order.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/view-order/view-order.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewOrderViewOrderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Allerta+Stencil&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans&display=swap\");\n.font1 {\n  font-family: \"Allerta Stencil\", sans-serif;\n}\n.font2 {\n  font-family: \"Fira Sans\", sans-serif;\n}\n.cart {\n  border: 1px solid darkgrey;\n  width: 100%;\n  border-radius: 7px;\n  margin-bottom: 10px;\n}\n.place_order {\n  border-left: 1px solid darkgrey;\n}\n#grad {\n  background-image: linear-gradient(to bottom right, #F9E4F8, #F6F9CB);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1vcmRlci9DOlxcVXNlcnNcXExFTk9WT1xcRGVza3RvcFxcZm9vZFNoYWxhRnJvbnRlbmQvc3JjXFxhcHBcXHZpZXctb3JkZXJcXHZpZXctb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXctb3JkZXIvdmlldy1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUSxtRkFBQTtBQUtBLDZFQUFBO0FBUlI7RUFDRSwwQ0FBQTtBQ0dGO0FEQ0E7RUFDRSxvQ0FBQTtBQ0VGO0FERUE7RUFFRSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQUY7QURJQTtFQUNFLCtCQUFBO0FDREY7QURLQTtFQUNFLG9FQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC92aWV3LW9yZGVyL3ZpZXctb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnQWxsZXJ0YSBTdGVuY2lsJywgc2Fucy1zZXJpZjtcclxufVxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsbGVydGErU3RlbmNpbCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5mb250MiB7XHJcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmlyYStTYW5zJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmNhcnQge1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbn1cclxuXHJcbi5wbGFjZV9vcmRlciB7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBkYXJrZ3JleTtcclxufVxyXG5cclxuXHJcbiNncmFkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjRjlFNEY4LCAjRjZGOUNCKTtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGxlcnRhK1N0ZW5jaWwmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmlyYStTYW5zJmRpc3BsYXk9c3dhcFwiKTtcbi5mb250MSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFsbGVydGEgU3RlbmNpbFwiLCBzYW5zLXNlcmlmO1xufVxuXG4uZm9udDIge1xuICBmb250LWZhbWlseTogXCJGaXJhIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNhcnQge1xuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnBsYWNlX29yZGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBkYXJrZ3JleTtcbn1cblxuI2dyYWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjRjlFNEY4LCAjRjZGOUNCKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/view-order/view-order.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/view-order/view-order.component.ts ***!
    \****************************************************/

  /*! exports provided: ViewOrderComponent */

  /***/
  function srcAppViewOrderViewOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewOrderComponent", function () {
      return ViewOrderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _restaurant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../restaurant.service */
    "./src/app/restaurant.service.ts");

    var ViewOrderComponent = /*#__PURE__*/function () {
      function ViewOrderComponent(restaurantService) {
        _classCallCheck(this, ViewOrderComponent);

        this.restaurantService = restaurantService;
      }

      _createClass(ViewOrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.restaurantService.getMyOrders().subscribe(function (data) {
            _this13.myOrders = data;
          });
        }
      }]);

      return ViewOrderComponent;
    }();

    ViewOrderComponent.ctorParameters = function () {
      return [{
        type: _restaurant_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantService"]
      }];
    };

    ViewOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-order',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-order.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-order/view-order.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-order.component.scss */
      "./src/app/view-order/view-order.component.scss"))["default"]]
    })], ViewOrderComponent);
    /***/
  },

  /***/
  "./src/app/visit-restaurant/visit-restaurant.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/visit-restaurant/visit-restaurant.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVisitRestaurantVisitRestaurantComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Allerta+Stencil&display=swap\");\n.font1 {\n  font-family: \"Allerta Stencil\", sans-serif;\n}\n.gridGreen {\n  background-color: #D3FCC2;\n}\n.gridRed {\n  background-color: #FCC2CC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzaXQtcmVzdGF1cmFudC9DOlxcVXNlcnNcXExFTk9WT1xcRGVza3RvcFxcZm9vZFNoYWxhRnJvbnRlbmQvc3JjXFxhcHBcXHZpc2l0LXJlc3RhdXJhbnRcXHZpc2l0LXJlc3RhdXJhbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Zpc2l0LXJlc3RhdXJhbnQvdmlzaXQtcmVzdGF1cmFudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUSxtRkFBQTtBQUhSO0VBQ0UsMENBQUE7QUNFRjtBREVBO0VBQ0UseUJBQUE7QUNDRjtBRENBO0VBQ0UseUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3Zpc2l0LXJlc3RhdXJhbnQvdmlzaXQtcmVzdGF1cmFudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250MSB7XHJcbiAgZm9udC1mYW1pbHk6ICdBbGxlcnRhIFN0ZW5jaWwnLCBzYW5zLXNlcmlmO1xyXG59XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxsZXJ0YStTdGVuY2lsJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmdyaWRHcmVlbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QzRkNDMjtcclxufVxyXG4uZ3JpZFJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDQzJDQztcclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGxlcnRhK1N0ZW5jaWwmZGlzcGxheT1zd2FwXCIpO1xuLmZvbnQxIHtcbiAgZm9udC1mYW1pbHk6IFwiQWxsZXJ0YSBTdGVuY2lsXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5ncmlkR3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNGQ0MyO1xufVxuXG4uZ3JpZFJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0MyQ0M7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/visit-restaurant/visit-restaurant.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/visit-restaurant/visit-restaurant.component.ts ***!
    \****************************************************************/

  /*! exports provided: VisitRestaurantComponent */

  /***/
  function srcAppVisitRestaurantVisitRestaurantComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisitRestaurantComponent", function () {
      return VisitRestaurantComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _restaurant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../restaurant.service */
    "./src/app/restaurant.service.ts");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../cart.service */
    "./src/app/cart.service.ts");

    var VisitRestaurantComponent = /*#__PURE__*/function () {
      function VisitRestaurantComponent(route, restaurantService, loginService, cartService) {
        _classCallCheck(this, VisitRestaurantComponent);

        this.route = route;
        this.restaurantService = restaurantService;
        this.loginService = loginService;
        this.cartService = cartService;
      }

      _createClass(VisitRestaurantComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.route.paramMap.subscribe(function (params) {
            // tslint:disable-next-line:radix
            var id = parseInt(params.get('id'));
            _this14.restaurantId = id;
            console.log(_this14.restaurantId);
            _this14.role = sessionStorage.getItem('role');
          });
          this.restaurantService.getAllFoodItemsOfRestaurants(this.restaurantId).subscribe(function (data) {
            _this14.allFoodOfRestaurant = data;
            console.log(_this14.allFoodOfRestaurant);
          });
        }
      }, {
        key: "orderFood",
        value: function orderFood(foodId) {
          if (this.loginService.isUserLoggedIn()) {
            this.cartService.addToCart(foodId).subscribe(function (data) {
              return console.log(data);
            });
            alert('Product added to cart.');
          } else {
            alert('Please Login First');
          }
        }
      }]);

      return VisitRestaurantComponent;
    }();

    VisitRestaurantComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _restaurant_service__WEBPACK_IMPORTED_MODULE_3__["RestaurantService"]
      }, {
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
      }];
    };

    VisitRestaurantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-visit-restaurant',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./visit-restaurant.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/visit-restaurant/visit-restaurant.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./visit-restaurant.component.scss */
      "./src/app/visit-restaurant/visit-restaurant.component.scss"))["default"]]
    })], VisitRestaurantComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\LENOVO\Desktop\foodShalaFrontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map