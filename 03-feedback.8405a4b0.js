function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i="Expected a function",o=0/0,r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),p=Object.prototype.toString,v=Math.max,m=Math.min,y=function(){return s.Date.now()};function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||e&&"object"==typeof e&&"[object Symbol]"==p.call(e))return o;if(b(t)){var e,n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=f.test(t);return i||a.test(t)?c(t.slice(2),i?2:8):u.test(t)?o:+t}n=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),function(t,e,n){var o,r,u,f,a,c,l=0,d=!1,s=!1,p=!0;if("function"!=typeof t)throw TypeError(i);function j(e){var n=o,i=r;return o=r=void 0,l=e,f=t.apply(i,n)}function h(t){var n=t-c,i=t-l;return void 0===c||n>=e||n<0||s&&i>=u}function T(){var t,n,i,o=y();if(h(o))return x(o);a=setTimeout(T,(t=o-c,n=o-l,i=e-t,s?m(i,u-n):i))}function x(t){return(a=void 0,p&&o)?j(t):(o=r=void 0,f)}function w(){var t,n=y(),i=h(n);if(o=arguments,r=this,c=n,i){if(void 0===a)return l=t=c,a=setTimeout(T,e),d?j(t):f;if(s)return a=setTimeout(T,e),j(c)}return void 0===a&&(a=setTimeout(T,e)),f}return e=g(e)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(g(n.maxWait)||0,e):u,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=r=a=void 0},w.flush=function(){return void 0===a?f:x(y())},w}(t,e,{leading:o,maxWait:e,trailing:r})},document.querySelector(".feedback-form"),document.querySelector('input[name="email"]'),document.querySelector('textarea[name="message"]'),form.addEventListener("submit",function(){}),input.addEventListener("input",t(n)(function(){},500)),textArea.addEventListener("input",t(n)(function(){},500));
//# sourceMappingURL=03-feedback.8405a4b0.js.map
