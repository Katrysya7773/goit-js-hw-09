function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire7bc7=o);var i=o("7Y9D8");const l=document.querySelector("form");document.querySelector("button");function u(t){t.preventDefault();const n=t.currentTarget.elements.amount.value,r=t.currentTarget.elements.delay.valueAsNumber,o=t.currentTarget.elements.step.valueAsNumber;for(let t=0;t<n;t++)s(t+1,r+o*t).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.warning(`❌ Rejected promise ${t} in ${n}ms`)}))}function s(e,t){return new Promise(((n,r)=>{const o=Math.random()>.3;setTimeout((()=>{o&&n({position:e,delay:t}),r({position:e,delay:t})}),t)}))}l.addEventListener("blur",u),l.addEventListener("submit",u);
//# sourceMappingURL=03-promises.b299c6c2.js.map
