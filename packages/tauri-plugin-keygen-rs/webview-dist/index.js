var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};var t=function(){return t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},t.apply(this,arguments)};function n(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))}function r(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return c.label++,{value:s[1],done:!1};case 5:c.label++,r=s[1],s=[0];continue;case 7:s=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){c=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){c.label=s[1];break}if(6===s[0]&&c.label<o[1]){c.label=o[1],o=s;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(s);break}o[2]&&c.ops.pop(),c.trys.pop();continue}s=t.call(e,c)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}function o(e,t=!1){const n=window.crypto.getRandomValues(new Uint32Array(1))[0],r=`_${n}`;return Object.defineProperty(window,r,{value:n=>(t&&Reflect.deleteProperty(window,r),null==e?void 0:e(n)),writable:!1,configurable:!0}),n}async function i(e,t={}){return new Promise(((n,r)=>{const i=o((e=>{n(e),Reflect.deleteProperty(window,`_${c}`)}),!0),c=o((e=>{r(e),Reflect.deleteProperty(window,`_${i}`)}),!0);window.__TAURI_IPC__({cmd:e,callback:i,error:c,...t})}))}"function"==typeof SuppressedError&&SuppressedError;var c=function(t){function n(e,n){var r=t.call(this,"Keygen error: ".concat(e," - ").concat(n))||this;return r.code=e,r.detail=n,r.name,r}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}(n,t),n}(Error),s=["NO_MACHINE","NO_MACHINES","FINGERPRINT_SCOPE_MISMATCH"];function u(e){return"object"==typeof e&&(null==e?void 0:e.hasOwnProperty("code"))}function a(e,n){return t(t({},e),{valid:n})}function l(){return n(this,void 0,void 0,(function(){var e,t,n;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,i("plugin:keygen-rs|get_license_key")];case 1:return[2,r.sent()];case 2:if(u(e=r.sent()))throw t=e.code,n=e.detail,new c(t,n);throw new c("ERROR",e.message);case 3:return[2]}}))}))}function f(){return n(this,void 0,void 0,(function(){var e,t,n,o,s,l;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,Promise.all([i("plugin:keygen-rs|get_license"),i("plugin:keygen-rs|is_license_valid")])];case 1:return e=r.sent(),t=e[0],n=e[1],[2,a(t,n)];case 2:if(u(o=r.sent()))throw s=o.code,l=o.detail,new c(s,l);throw new c("ERROR",o.message);case 3:return[2]}}))}))}function h(e,t){return n(this,void 0,void 0,(function(){var n,o,l;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,6]),[4,i("plugin:keygen-rs|validate_key",{key:e,entitlements:t})];case 1:case 4:return[2,a(r.sent(),!0)];case 2:if(!u(n=r.sent()))return[3,5];if(o=n.code,l=n.detail,!s.includes(o))throw new c(o,l);return[4,i("plugin:keygen-rs|activate",{})];case 3:return r.sent(),[4,i("plugin:keygen-rs|validate_key",{key:e,entitlements:t})];case 5:throw new c("ERROR",n.message);case 6:return[2]}}))}))}function p(){return n(this,void 0,void 0,(function(){var e,t,n;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,i("plugin:keygen-rs|deactivate")];case 1:return r.sent(),[3,3];case 2:if(u(e=r.sent()))throw t=e.code,n=e.detail,new c(t,n);throw new c("ERROR",e.message);case 3:return[2]}}))}))}function w(e,t){return n(this,void 0,void 0,(function(){var n,o,s;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,i("plugin:keygen-rs|checkout_license",{ttl:e,include:t})];case 1:return r.sent(),[3,3];case 2:if(u(n=r.sent()))throw o=n.code,s=n.detail,new c(o,s);throw new c("ERROR",n.message);case 3:return[2]}}))}))}function d(e,t){return n(this,void 0,void 0,(function(){var n,o,s;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,i("plugin:keygen-rs|checkout_machine",{ttl:e,include:t})];case 1:return r.sent(),[3,3];case 2:if(u(n=r.sent()))throw o=n.code,s=n.detail,new c(o,s);throw new c("ERROR",n.message);case 3:return[2]}}))}))}function y(){return n(this,void 0,void 0,(function(){var e,t,n;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,i("plugin:keygen-rs|reset_license")];case 1:return r.sent(),[3,3];case 2:if(u(e=r.sent()))throw t=e.code,n=e.detail,new c(t,n);throw new c("ERROR",e.message);case 3:return[2]}}))}))}export{c as KeygenError,w as checkoutLicense,d as checkoutMachine,p as deactivate,f as getLicense,l as getLicenseKey,y as resetLicense,h as validateKey};
