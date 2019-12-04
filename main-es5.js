(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "../../libs/score-polygon/src/index.ts": 
        /*!***********************************************************************************!*\
          !*** C:/Users/Novalife/Desktop/aiwa-lab/aiwa-lab/libs/score-polygon/src/index.ts ***!
          \***********************************************************************************/
        /*! exports provided: ScorePolygonComponent, ScorePolygonModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _lib_score_polygon_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/score-polygon.module */ "../../libs/score-polygon/src/lib/score-polygon.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScorePolygonModule", function () { return _lib_score_polygon_module__WEBPACK_IMPORTED_MODULE_1__["ScorePolygonModule"]; });
            /* harmony import */ var _lib_score_polygon_score_polygon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/score-polygon/score-polygon.component */ "../../libs/score-polygon/src/lib/score-polygon/score-polygon.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScorePolygonComponent", function () { return _lib_score_polygon_score_polygon_component__WEBPACK_IMPORTED_MODULE_2__["ScorePolygonComponent"]; });
            /***/ 
        }),
        /***/ "../../libs/score-polygon/src/lib/SVG-mappers.ts": 
        /*!*********************************************************************************************!*\
          !*** C:/Users/Novalife/Desktop/aiwa-lab/aiwa-lab/libs/score-polygon/src/lib/SVG-mappers.ts ***!
          \*********************************************************************************************/
        /*! exports provided: poinToSVGLine, polygonToSVGPath, scoresToSVGPolygon */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poinToSVGLine", function () { return poinToSVGLine; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polygonToSVGPath", function () { return polygonToSVGPath; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoresToSVGPolygon", function () { return scoresToSVGPolygon; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _score_polygon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score-polygon */ "../../libs/score-polygon/src/lib/score-polygon.ts");
            function poinToSVGLine(_a) {
                var x = _a.x, y = _a.y;
                return x + "," + y + " ";
            }
            function polygonToSVGPath(points) {
                return points.map(poinToSVGLine).join(' ');
            }
            function scoresToSVGPolygon(scores, polygonWidth) {
                if (polygonWidth === void 0) { polygonWidth = 200; }
                return polygonToSVGPath(new _score_polygon__WEBPACK_IMPORTED_MODULE_1__["ScorePolygon"]({ width: polygonWidth, scores: scores }).points);
            }
            /***/ 
        }),
        /***/ "../../libs/score-polygon/src/lib/score-polygon.module.ts": 
        /*!******************************************************************************************************!*\
          !*** C:/Users/Novalife/Desktop/aiwa-lab/aiwa-lab/libs/score-polygon/src/lib/score-polygon.module.ts ***!
          \******************************************************************************************************/
        /*! exports provided: ScorePolygonModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScorePolygonModule", function () { return ScorePolygonModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _score_polygon_score_polygon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./score-polygon/score-polygon.component */ "../../libs/score-polygon/src/lib/score-polygon/score-polygon.component.ts");
            var ScorePolygonModule = /** @class */ (function () {
                function ScorePolygonModule() {
                }
                return ScorePolygonModule;
            }());
            ScorePolygonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    declarations: [_score_polygon_score_polygon_component__WEBPACK_IMPORTED_MODULE_3__["ScorePolygonComponent"]],
                    exports: [_score_polygon_score_polygon_component__WEBPACK_IMPORTED_MODULE_3__["ScorePolygonComponent"]]
                })
            ], ScorePolygonModule);
            /***/ 
        }),
        /***/ "../../libs/score-polygon/src/lib/score-polygon.ts": 
        /*!***********************************************************************************************!*\
          !*** C:/Users/Novalife/Desktop/aiwa-lab/aiwa-lab/libs/score-polygon/src/lib/score-polygon.ts ***!
          \***********************************************************************************************/
        /*! exports provided: ScorePolygon, angleToRadians, scaleScore */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScorePolygon", function () { return ScorePolygon; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angleToRadians", function () { return angleToRadians; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleScore", function () { return scaleScore; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /**
             * Creates a polygon based on scaled scores in a range of 0-10.
             * Having n vortex, equal to the number of scores provided.
             **/
            var ScorePolygon = /** @class */ (function () {
                function ScorePolygon(config) {
                    var _this = this;
                    this.faces = config.scores.length;
                    this.RADIUS = config.width / 2;
                    this.THETHA = 360 / this.faces;
                    this.points = config.scores.map(function (score, i) { return _this.scoreToVortex(score, i); });
                }
                ScorePolygon.prototype.scoreToVortex = function (score, index) {
                    var angle = angleToRadians(this.THETHA * index);
                    var TOPCENTERCORRECTION = 33;
                    return {
                        x: Math.cos(angle - TOPCENTERCORRECTION) * score * (this.RADIUS / 10),
                        y: Math.sin(angle - TOPCENTERCORRECTION) * score * (this.RADIUS / 10)
                    };
                };
                return ScorePolygon;
            }());
            function angleToRadians(angle) {
                return angle * (Math.PI / 180);
            }
            function scaleScore(rawScore, maxScore, scale) {
                if (maxScore === void 0) { maxScore = 10; }
                if (scale === void 0) { scale = 10; }
                return ((rawScore * scale) / maxScore).toFixed(2);
            }
            /***/ 
        }),
        /***/ "../../libs/score-polygon/src/lib/score-polygon/score-polygon.component.scss": 
        /*!*************************************************************************************************************************!*\
          !*** C:/Users/Novalife/Desktop/aiwa-lab/aiwa-lab/libs/score-polygon/src/lib/score-polygon/score-polygon.component.scss ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("text {\n  font-size: 8px;\n  font-variant: small-caps;\n}\n\ntext#score-detail {\n  font-variant: normal;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc2NvcmUtcG9seWdvbi9zcmMvbGliL3Njb3JlLXBvbHlnb24vQzpcXFVzZXJzXFxOb3ZhbGlmZVxcRGVza3RvcFxcYWl3YS1sYWJcXGFpd2EtbGFiL2xpYnNcXHNjb3JlLXBvbHlnb25cXHNyY1xcbGliXFxzY29yZS1wb2x5Z29uXFxzY29yZS1wb2x5Z29uLmNvbXBvbmVudC5zY3NzIiwibGlicy9zY29yZS1wb2x5Z29uL3NyYy9saWIvc2NvcmUtcG9seWdvbi9zY29yZS1wb2x5Z29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJsaWJzL3Njb3JlLXBvbHlnb24vc3JjL2xpYi9zY29yZS1wb2x5Z29uL3Njb3JlLXBvbHlnb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZXh0IHtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2Fwcztcbn1cblxudGV4dCNzY29yZS1kZXRhaWwge1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuIiwidGV4dCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XG59XG5cbnRleHQjc2NvcmUtZGV0YWlsIHtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "../../libs/score-polygon/src/lib/score-polygon/score-polygon.component.ts": 
        /*!***********************************************************************************************************************!*\
          !*** C:/Users/Novalife/Desktop/aiwa-lab/aiwa-lab/libs/score-polygon/src/lib/score-polygon/score-polygon.component.ts ***!
          \***********************************************************************************************************************/
        /*! exports provided: ScorePolygonComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScorePolygonComponent", function () { return ScorePolygonComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _score_polygon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../score-polygon */ "../../libs/score-polygon/src/lib/score-polygon.ts");
            /* harmony import */ var _SVG_mappers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SVG-mappers */ "../../libs/score-polygon/src/lib/SVG-mappers.ts");
            var ScorePolygonComponent = /** @class */ (function () {
                function ScorePolygonComponent(changeDetector) {
                    this.changeDetector = changeDetector;
                    this.maxScore = 10;
                    this.showText = false;
                    this.showIcons = true;
                    this.showPercentPolygons = true;
                    this.showOuterCircle = true;
                    this.scorePolygonColor = '#0e529e';
                    this.maxScorePolygonColor = '#dadada';
                    this.innerLinesColor = 'green';
                    this.iconCircleColor = 'lightgrey';
                    this.outerCircleColor = 'lightgrey';
                }
                ScorePolygonComponent.prototype.ngOnChanges = function () {
                    var rawScores = this.scores.map(function (sc) { return sc.score; });
                    var polygon = new _score_polygon__WEBPACK_IMPORTED_MODULE_2__["ScorePolygon"]({
                        width: 200,
                        scores: rawScores
                    });
                    var wrapperPolygon = new _score_polygon__WEBPACK_IMPORTED_MODULE_2__["ScorePolygon"]({
                        width: 200,
                        scores: rawScores.map(function (sc) { return 10; })
                    });
                    this.pointList = wrapperPolygon.points;
                    this.points = Object(_SVG_mappers__WEBPACK_IMPORTED_MODULE_3__["polygonToSVGPath"])(polygon.points);
                    this.vortex = Object(_SVG_mappers__WEBPACK_IMPORTED_MODULE_3__["scoresToSVGPolygon"])(rawScores.map(function (sc) { return 10; }), 200);
                    this.polyscale.nativeElement.beginElement();
                };
                ScorePolygonComponent.prototype.showScoreTooltip = function (i) {
                    this.activeScore = this.scores[i];
                };
                ScorePolygonComponent.prototype.getScaledPolygon = function (i) {
                    return "scale(" + i / 10 + ")";
                };
                ScorePolygonComponent.prototype.getLine = function (i, point) {
                    return "0,0 " + point.x + "," + point.y;
                };
                ScorePolygonComponent.prototype.getMarkerPattern = function (i) {
                    return "url(#pattern-" + i + ")";
                };
                return ScorePolygonComponent;
            }());
            ScorePolygonComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('polyscale', { static: true }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
            ], ScorePolygonComponent.prototype, "polyscale", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
            ], ScorePolygonComponent.prototype, "scores", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], ScorePolygonComponent.prototype, "maxScore", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], ScorePolygonComponent.prototype, "showText", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], ScorePolygonComponent.prototype, "showIcons", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], ScorePolygonComponent.prototype, "showPercentPolygons", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], ScorePolygonComponent.prototype, "showOuterCircle", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], ScorePolygonComponent.prototype, "scorePolygonColor", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], ScorePolygonComponent.prototype, "maxScorePolygonColor", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], ScorePolygonComponent.prototype, "innerLinesColor", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], ScorePolygonComponent.prototype, "iconCircleColor", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], ScorePolygonComponent.prototype, "outerCircleColor", void 0);
            ScorePolygonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'ng-score-polygon',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./score-polygon.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/score-polygon/src/lib/score-polygon/score-polygon.component.html")).default,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./score-polygon.component.scss */ "../../libs/score-polygon/src/lib/score-polygon/score-polygon.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
            ], ScorePolygonComponent);
            /***/ 
        }),
        /***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/score-polygon/src/lib/score-polygon/score-polygon.component.html": 
        /*!*********************************************************************************************************************************************************************************************************!*\
          !*** C:/Users/Novalife/Desktop/aiwa-lab/aiwa-lab/node_modules/raw-loader/dist/cjs.js!C:/Users/Novalife/Desktop/aiwa-lab/aiwa-lab/libs/score-polygon/src/lib/score-polygon/score-polygon.component.html ***!
          \*********************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<svg viewBox=\"0 0 200 200\">\n  <ng-container *ngIf=\"activeScore\">\n    <text x=\"20\"\n          y=\"10\">{{activeScore.label}}</text>\n    <text x=\"150\"\n          y=\"10\"> Score: {{activeScore.score}}/10</text>\n  </ng-container>\n\n  <g transform=\"translate(100,100) scale(.8)\">\n    <circle id=\"surrounding-circle\"\n            *ngIf=\"showOuterCircle\"\n            r=\"100\"\n            [attr.stroke]=\"outerCircleColor\"\n            opacity=\"0.5\"\n            stroke-width=\"1\"\n            fill=\"none\" />\n\n    <defs>\n      <polygon id=\"wrapper-polygon\"\n               [attr.points]=\"vortex\"\n               [style.opacity]=\".2\"\n               [style.stroke]=\"maxScorePolygonColor\" />\n    </defs>\n\n    <polygon [attr.points]=\"vortex\"\n             [style.opacity]=\"1\"\n             [style.fill]=\"maxScorePolygonColor\" />\n\n    <ng-container *ngIf=\"showPercentPolygons\">\n      <use href=\"#wrapper-polygon\"\n           *ngFor=\"let i of [1,2,3,4,5,6,7,8,9,10]\"\n           [style.transform]=\"getScaledPolygon(i)\">\n      </use>\n    </ng-container>\n\n    <polygon id=\"score-polygon\"\n             [attr.points]=\"points\"\n             [style.fill]=\"scorePolygonColor\"\n             style=\"opacity:.9\">\n\n      <animateTransform #polyscale\n                        id=\"polyscale\"\n                        attributeName=\"transform\"\n                        type=\"scale\"\n                        begin=\"0s\"\n                        from=\"0\"\n                        to=\"1\"\n                        dur=\"0.5s\" />\n    </polygon>\n\n    <ng-container *ngFor=\"let point of pointList; let i=index\">\n      <defs *ngIf=\"showIcons\">\n        <pattern [id]=\"'pattern-'+i\"\n                 transform=\"rotate(65deg)\"\n                 width=\"16\"\n                 height=\"16\">\n          <image [attr.href]=\"scores[i].markerImage\"\n                 preserveAspectRatio=\"none\"\n                 width=\"16\"\n                 height=\"16\" />\n        </pattern>\n      </defs>\n\n      <polyline class=\"core-lines\"\n                [attr.points]=\"getLine(i, point)\"\n                [style.stroke]=\"innerLinesColor\"\n                style=\"opacity:.15\">\n      </polyline>\n\n      <circle *ngIf=\"showIcons\"\n              class=\"edge-marker\"\n              [attr.fill]=\"getMarkerPattern(i)\"\n              r=\"8\"\n              [attr.cx]=\"point.x\"\n              [attr.cy]=\"point.y\"\n              [attr.stroke]=\"iconCircleColor\"\n              (click)=\"showScoreTooltip(i)\"\n              (mouseover)=\"showScoreTooltip(i)\">\n      </circle>\n\n      <text *ngIf=\"showText\"\n            [attr.x]=\"point.x\"\n            transform=\"translate(-12, -10)\"\n            [attr.y]=\"point.y\"\n            (mouseover)=\"showScoreTooltip(i)\"\n            (click)=\"showScoreTooltip(i)\">\n        {{scores[i].label}}\n      </text>\n    </ng-container>\n  </g>\n</svg>\n");
            /***/ 
        }),
        /***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!********************************************************************************************************************!*\
          !*** C:/Users/Novalife/Desktop/aiwa-lab/aiwa-lab/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <h1>NG Score Polygon</h1>\r\n  <a href=\"https://www.npmjs.com/package/ng-score-polygon\"\r\n     target=\"_blank\"> <img alt=\"npm\"\r\n         src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAdVBMVEXLODf////KMC/ciYnKMzLIJiTvycnXcnHHGRf/+/vUY2Pbg4Pdjo3JKyrkpaTLNjXIIB/JKSfjoKD46OjOSEf89PTz2NfIIiDmqqrRVlXafX3HFhTswsLhmJfotLTSXFv24eHVaWnx0dDNPz7Wbm7PT07ZeHdo9cgpAAADpUlEQVR4nO3d63aiMBSG4QQChZZMAoggxbbS1vu/xImnJVVgajuKe6/v/a/NswIJnoqQw+VhlfhP64c7bv3kJ1WYjyDEEK5aCRtoz/PUXecGqAMrVtUQshdYvCwirYwgk1FptHgpvgkskjRVUw/58lSaJj3Ec2AWaEJz183oIPsnsFEpUd4mk6pwHFhbwrxNxtYjwHympx7g79OzfAjYUlxbzlPpvB8YPhM/PA+Z57APGFI//Y4ZG54DWy7zt8k8t6fA3GPk22yJ+QlwxmJ9OaY+vwJ9BvvD11K/C2yjqcfz/4vaDvCd1Qm4y7wfgVU69WiuUVAdgDHl6+vhTBrvgRnLCXTrTLYHGpYT6KbQ7IBNOfVIrlXZbIErZnv8MbXaAAuGe+ChKHbAJph6GNcraByw9qYexvXyagecMV1DN5mZFAXbNdRlgkLMOQNFORcN08uYXWkjKnavBLvpSiwZL6JuGV2KhDcwET5voA8g7QCkHoDUA5B6AFIPQOoBSD0AqQcg9QAcTUU3zt4WqB5lfOMuFv4WeOsu/igTQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAfxGTfZnqOz0n22QBNZWD2V9DsCn4b/pJQACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggN3Mog1/VPuhBp9UPYw96cV3lv/dLVFM8MOGfU449sCLh4ib2lAPQOoBSD0AqQcg9QCkHoDUA5B6AFIPQOoBSD0HTHgDE/7ATE89iGumM/GSTj2Ia5a+iMvf76dUEIr88nugE8rmIvbM1KO4XsaLhXwd+6yHeOpVCrlkvIzqpQPOGZ+Edu6Aku9JaJTcABO2x6hOtsA3tseofdsC2a6jbg3dAUOmU2jDPVAuWE7hdgJ3QJ47hdsjDkBZM1xIdS2PwILfXmi8ogOU4cXfArv3ov2NDPdAuSynHtH/rVzKr0D5weo01B/yFCg/Gb375H3Kc2C8YCP0FnEP0AmZHKW64+sCpVyz2PDtumv6ApRVRH4/VFElh4Fy/p6SJpr0fS7HgG5DtITXGs8uTz1nQJnXEc0LN+NFdX7GOQc6oq9Hvzd+l6lA++e8fqDbMZrHqNSKyEQapcvosYl7Kf3AjbHNVqK0P/3lwO2ypVhlYb9uDLitePvhbz9uV/tWjBL+AruTePt2wL28AAAAAElFTkSuQmCC\"\r\n         width=\"30\">\r\n  </a>\r\n  <a href=\"https://github.com/FerAiwa/ng-score-polygon\"\r\n     target=\"_blank\">\r\n    <img alt=\"Github repo\"\r\n         src=\"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png\"\r\n         width=\"30\">\r\n  </a>\r\n\r\n  <a href=\"https://www.linkedin.com/in/ferayguavives\"\r\n     target=\"_blank\">\r\n    <img id=\"github-logo\"\r\n         alt=\"Fer Ayguavives Linkedin\"\r\n         src=\"data:image/png;base64,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\"\r\n         width=\"30\">\r\n  </a>\r\n\r\n</header>\r\n\r\n\r\n<div style=\"display:flex; width: 100%;  justify-content: left; flex-flow: row wrap-reverse\">\r\n  <section class=\"polygon-inputs\">\r\n    <div>\r\n      <label>Number of edges: {{scores.length}}</label>\r\n      <input type=\"range\"\r\n             step=\"1\"\r\n             value=\"{{scores.length}}\"\r\n             min=\"3\"\r\n             max=\"10\"\r\n             (change)=\"updateEdges($event.target.value)\">\r\n      <p>\r\n        <button (click)=\"randomizeScores()\">Randomize scores</button>\r\n      </p>\r\n    </div>\r\n\r\n    <h2>Colors</h2>\r\n    <div>\r\n      <label>Score polygon </label>\r\n      <input type=\"color\"\r\n             value=\"#0e529e\"\r\n             (change)=\"updateColor($event.target.value)\">\r\n    </div>\r\n    <div>\r\n      <label>Max Score Polygon</label>\r\n      <input type=\"color\"\r\n             value=\"#dadada\"\r\n             (change)=\"updateBackgroundColor($event.target.value)\">\r\n    </div>\r\n    <div>\r\n      <label>Inner lines</label>\r\n      <input (change)=\"updateInnerLinesColor($event.target.value)\"\r\n             value=\"#90ee90\"\r\n             type=\"color\">\r\n    </div>\r\n\r\n    <h2>Extra</h2>\r\n    <div>\r\n      <label for=\"markers-text\">Show text markers</label>\r\n      <input type=\"checkbox\"\r\n             id=\"markers-text\"\r\n             (change)=\"updateTextMarkerDisplay($event.target.checked)\">\r\n    </div>\r\n    <div>\r\n      <label for=\"markers-icon\">Show icon markers</label>\r\n      <input id=\"markers-icon\"\r\n             type=\"checkbox\"\r\n             checked\r\n             (change)=\"updateIconMarkersDisplay($event.target.checked)\">\r\n    </div>\r\n    <div>\r\n      <label for=\"markers-percent\">Show Percentual polygons</label>\r\n      <input id=\"markers-percent\"\r\n             type=\"checkbox\"\r\n             checked\r\n             (change)=\"updatePercentPolygonDisplay($event.target.checked)\">\r\n    </div>\r\n    <div>\r\n      <label for=\"outer-circle\">Show Outer Circle </label>\r\n      <input id=\"outer-circle\"\r\n             type=\"checkbox\"\r\n             checked\r\n             (change)=\"updateOuterCircleDisplay($event.target.checked)\">\r\n    </div>\r\n\r\n  </section>\r\n  <ng-score-polygon style=\"flex:1;  max-width: 620px;\"\r\n                    [scores]=\"scores\">\r\n  </ng-score-polygon>\r\n\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "../../node_modules/tslib/tslib.es6.js": 
        /*!***********************************************************************************!*\
          !*** C:/Users/Novalife/Desktop/aiwa-lab/aiwa-lab/node_modules/tslib/tslib.es6.js ***!
          \***********************************************************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
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
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n * Remove template code below\n */\n:host {\n  display: block;\n  font-family: sans-serif;\n}\n.polygon-inputs {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  border: 1px solid lightslategray;\n  border-radius: 8px;\n  padding: 2rem;\n  position: relative;\n  padding-top: 0.25rem;\n}\n.polygon-inputs label {\n  display: block;\n  margin-top: 0.85rem 0;\n  font: 1rem \"Fira Sans\", sans-serif;\n  width: 200px;\n}\nh2 {\n  font-size: 1.2rem;\n  margin: 1rem 0;\n  background-color: lightgray;\n}\na {\n  text-decoration: none;\n  color: black;\n}\nheader {\n  background-color: #1b1c1d;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 1rem;\n  padding: 0 2rem;\n}\nheader h1 {\n  -webkit-box-flex: 1;\n          flex: 1;\n  font-variant: small-caps;\n  font-size: 1.7rem;\n  margin: 0.2rem;\n  color: white;\n}\nheader img {\n  margin: 0.5rem;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvYWl3YS1wb3J0Zm9saW8vc3JjL2FwcC9DOlxcVXNlcnNcXE5vdmFsaWZlXFxEZXNrdG9wXFxhaXdhLWxhYlxcYWl3YS1sYWIvYXBwc1xcYWl3YS1wb3J0Zm9saW9cXHNyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJhcHBzL2Fpd2EtcG9ydGZvbGlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUFBO0FBR0E7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7QUNDRjtBREdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQUY7QURFRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNDRjtBRENBO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRUY7QURERTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0dKO0FEREU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNHSiIsImZpbGUiOiJhcHBzL2Fpd2EtcG9ydGZvbGlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFJlbW92ZSB0ZW1wbGF0ZSBjb2RlIGJlbG93XG4gKi9cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAvLyBwYWRkaW5nOiAxcmVtIDNyZW07XG59XG5cbi5wb2x5Z29uLWlucHV0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0c2xhdGVncmF5O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG5cbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDAuODVyZW0gMDtcbiAgICBmb250OiAxcmVtICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuaDIge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjFjMWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgaDEge1xuICAgIGZsZXg6IDE7XG4gICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIG1hcmdpbjogMC4ycmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBpbWcge1xuICAgIG1hcmdpbjogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuIiwiLypcbiAqIFJlbW92ZSB0ZW1wbGF0ZSBjb2RlIGJlbG93XG4gKi9cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4ucG9seWdvbi1pbnB1dHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHNsYXRlZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xufVxuLnBvbHlnb24taW5wdXRzIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDAuODVyZW0gMDtcbiAgZm9udDogMXJlbSBcIkZpcmEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMjAwcHg7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbjogMXJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWMxZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZzogMCAycmVtO1xufVxuaGVhZGVyIGgxIHtcbiAgZmxleDogMTtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgbWFyZ2luOiAwLjJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmhlYWRlciBpbWcge1xuICBtYXJnaW46IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _aiwa_lab_score_polygon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aiwa-lab/score-polygon */ "../../libs/score-polygon/src/index.ts");
            /* harmony import */ var _assets_data_scores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/data/scores */ "./src/assets/data/scores.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.updateEdges(5);
                };
                AppComponent.prototype.updateEdges = function (quantity) {
                    this.scores = _assets_data_scores__WEBPACK_IMPORTED_MODULE_3__["SCORESMOCK"].slice().splice(0, quantity);
                    this.randomizeScores();
                };
                AppComponent.prototype.randomizeScores = function () {
                    this.scores = this.scores.map(function (score) { return (Object.assign({}, score, { score: (Math.random() * 10).toFixed(0) })); });
                };
                AppComponent.prototype.updateColor = function (color) {
                    this.updatePolygonComponent('scorePolygonColor', color);
                };
                AppComponent.prototype.updateBackgroundColor = function (color) {
                    this.updatePolygonComponent('maxScorePolygonColor', color);
                };
                AppComponent.prototype.updateInnerLinesColor = function (color) {
                    this.updatePolygonComponent('innerLinesColor', color);
                };
                AppComponent.prototype.updatePercentPolygonDisplay = function (checked) {
                    this.updatePolygonComponent('showPercentPolygons', checked);
                };
                AppComponent.prototype.updateIconMarkersDisplay = function (checked) {
                    this.updatePolygonComponent('showIcons', checked);
                };
                AppComponent.prototype.updateTextMarkerDisplay = function (checked) {
                    this.updatePolygonComponent('showText', checked);
                };
                AppComponent.prototype.updatePolygonComponent = function (part, value) {
                    this.polygonComponent[part] = value;
                    this.polygonComponent.changeDetector.markForCheck();
                };
                AppComponent.prototype.updateOuterCircleDisplay = function (checked) {
                    this.updatePolygonComponent('showOuterCircle', checked);
                };
                return AppComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_aiwa_lab_score_polygon__WEBPACK_IMPORTED_MODULE_2__["ScorePolygonComponent"], { static: false }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _aiwa_lab_score_polygon__WEBPACK_IMPORTED_MODULE_2__["ScorePolygonComponent"])
            ], AppComponent.prototype, "polygonComponent", void 0);
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'aiwa-lab-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _aiwa_lab_score_polygon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aiwa-lab/score-polygon */ "../../libs/score-polygon/src/index.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _aiwa_lab_score_polygon__WEBPACK_IMPORTED_MODULE_4__["ScorePolygonModule"]],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/assets/data/scores.ts": 
        /*!***********************************!*\
          !*** ./src/assets/data/scores.ts ***!
          \***********************************/
        /*! exports provided: SCORESMOCK */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCORESMOCK", function () { return SCORESMOCK; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            var SCORESMOCK = [
                {
                    label: 'Angular',
                    score: 10,
                    markerImage: 'https://cdn.worldvectorlogo.com/logos/angular-icon.svg'
                },
                {
                    label: 'Javascript',
                    score: 8,
                    markerImage: 'https://icon-library.net/images/js-icon/js-icon-24.jpg'
                },
                {
                    label: 'NodeJs',
                    score: 7,
                    markerImage: 'https://image.flaticon.com/icons/png/512/919/919825.png'
                },
                {
                    label: 'HTML5',
                    score: 7,
                    markerImage: 'data:image/png;base64,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'
                },
                {
                    label: 'MongoDb',
                    score: 9.5,
                    markerImage: 'https://mpng.pngfly.com/20190401/zsf/kisspng-mongodb-document-oriented-database-nosql-openshift-web-app-development-servcie-in-dehradun-5ca1b8cb8a0f32.3708278115541024755655.jpg'
                },
                {
                    label: 'RxJs',
                    score: 6.5,
                    markerImage: 'https://user-images.githubusercontent.com/10064416/53419313-ebe74700-39d9-11e9-8368-325b23b1cd4f.jpg'
                },
                {
                    label: 'React',
                    score: 0,
                    markerImage: 'https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png'
                },
                {
                    label: 'Github',
                    score: 6,
                    markerImage: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                },
                {
                    label: 'CSS3',
                    score: 7.5,
                    markerImage: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png'
                },
                {
                    label: 'Jest',
                    score: 7,
                    markerImage: 'https://avatars3.githubusercontent.com/u/32196900?s=400&v=4'
                }
            ];
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
                .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Novalife\Desktop\aiwa-lab\aiwa-lab\apps\aiwa-portfolio\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map