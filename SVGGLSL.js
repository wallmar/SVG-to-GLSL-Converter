
'use strict';

var SVGGLSL = this.SVGGLSL = function SVGGLSL(canvas) {
    if (!canvas) {
        canvas = document.createElement('canvas');
    }
    window.canvas = canvas;
    window.gl2d = WebGL2D.enable(canvas); // adds new context "webgl-2d" to canvas
};

SVGGLSL.prototype.convert = function (svg, callback) {
    canvg(window.canvas, svg, {
        ignoreMouse: true,
        ignoreAnimation: true,
        ignoreDimensions: true,
        ignoreClear: true,
        renderCallback: callback
    });
};

SVGGLSL.prototype.getVertexShaderSource = function () {
    return window.gl2d.getVertexShaderSource();
};

SVGGLSL.prototype.getFragmentShaderSource = function () {
    return window.gl2d.getFragmentShaderSource();
};
