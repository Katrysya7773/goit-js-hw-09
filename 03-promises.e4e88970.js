!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=r);var i=r("6JpON"),u=document.querySelector("form");document.querySelector("button");function a(n){n.preventDefault();for(var t=n.currentTarget.elements.amount.value,o=n.currentTarget.elements.delay.valueAsNumber,r=n.currentTarget.elements.step.valueAsNumber,u=0;u<t;u++)l(u+1,o+r*u).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.warning("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}function l(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r&&t({position:e,delay:n}),o({position:e,delay:n})}),n)}))}u.addEventListener("blur",a),u.addEventListener("submit",a)}();
//# sourceMappingURL=03-promises.e4e88970.js.map
