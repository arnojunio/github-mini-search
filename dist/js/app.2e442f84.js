(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0de531":"5d362d09","chunk-442df05a":"b8a0702f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-442df05a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0de531":"31d6cfe0","chunk-442df05a":"ff6a8e99"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],b.parentNode.removeChild(b),n(o)},b.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(b)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/github-mini-search/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var b=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0fe3":function(e,t,n){},3536:function(e,t,n){},"4a10":function(e,t,n){"use strict";n("0fe3")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,o){var u=Object(r["y"])("Header"),i=Object(r["y"])("router-view"),s=Object(r["y"])("Footer");return Object(r["t"])(),Object(r["g"])(r["a"],null,[Object(r["j"])(u),Object(r["j"])(i,null,{default:Object(r["G"])((function(t){var n=t.Component;return[Object(r["j"])(r["b"],{name:"fade",mode:"out-in"},{default:Object(r["G"])((function(){return[(Object(r["t"])(),Object(r["e"])(Object(r["z"])(n),{key:e.$route.path}))]})),_:2},1024)]})),_:1}),Object(r["j"])(s)],64)}n("c7cd");var c={class:"main-header-content"},o=Object(r["i"])("Github | User Search"),u={class:"navbar"},i={class:""},s=Object(r["i"])("Home"),l=Object(r["i"])("About");function f(e,t,n,a,f,b){var d=Object(r["y"])("router-link");return Object(r["t"])(),Object(r["g"])("header",{class:Object(r["p"])([this.fixed?"fixed":""," main-header"])},[Object(r["h"])("div",c,[Object(r["h"])("h1",null,[Object(r["j"])(d,{to:"/"},{default:Object(r["G"])((function(){return[o]})),_:1})]),Object(r["h"])("nav",u,[Object(r["h"])("ul",i,[Object(r["h"])("li",null,[Object(r["j"])(d,{to:"/"},{default:Object(r["G"])((function(){return[s]})),_:1})]),Object(r["h"])("li",null,[Object(r["j"])(d,{to:"/about"},{default:Object(r["G"])((function(){return[l]})),_:1})])])])])],2)}var b={name:"Header",data:function(){return{fixed:!1}},methods:{handleScroll:function(){this.fixed=window.scrollY>95}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount:function(){window.removeEventListener("scroll",this.handleScroll)}},d=(n("9a52"),n("6b0d")),h=n.n(d);const p=h()(b,[["render",f]]);var j=p,g={class:"page-footer"},O=Object(r["h"])("div",{class:"page-footer-content"},[Object(r["h"])("p",null,[Object(r["i"])("Made by arnojunio. See source code on "),Object(r["h"])("a",{href:"https://github.com/arnojunio/github-mini-search",target:"_blank"},"Github")])],-1),m=[O];function v(e,t,n,a,c,o){return Object(r["t"])(),Object(r["g"])("footer",g,m)}var y={name:"Footer"};n("ae89");const k=h()(y,[["render",v]]);var w=k,_={name:"App",components:{Header:j,Footer:w}};n("8774");const P=h()(_,[["render",a]]);var x=P,C=n("bc3a"),S=n.n(C),E=n("5530"),A=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),G=(n("b0c0"),{class:"main"}),H={class:"main-content"},N={class:"box-search"},T=Object(r["h"])("h1",null,"Github user search",-1),B=Object(r["h"])("div",{id:"main-content",class:"content"},[Object(r["h"])("div",{class:"img-search"})],-1),L={class:"content"},M={class:"result"},D={class:"img"},q=["src"];function F(e,t,n,a,c,o){var u=Object(r["y"])("router-link"),i=Object(r["y"])("Paginator");return Object(r["t"])(),Object(r["g"])("main",null,[Object(r["h"])("div",G,[Object(r["h"])("header",H,[Object(r["h"])("div",N,[T,Object(r["H"])(Object(r["h"])("input",{class:"search",onChange:t[0]||(t[0]=function(){return o.getData&&o.getData.apply(o,arguments)}),"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.term=e}),type:"text",placeholder:"Search for an user...",required:""},null,544),[[r["D"],c.term]])])])]),B,Object(r["H"])(Object(r["h"])("div",L,[Object(r["h"])("div",M,[(Object(r["t"])(!0),Object(r["g"])(r["a"],null,Object(r["x"])(c.filtered,(function(e){return Object(r["t"])(),Object(r["g"])("div",{class:"card fade-in",key:e.name},[Object(r["j"])(u,{to:{name:"app.user",params:{username:e.login}}},{default:Object(r["G"])((function(){return[Object(r["h"])("div",D,[Object(r["h"])("img",{src:"".concat(e.avatar_url),alt:"avatar"},null,8,q)]),Object(r["h"])("h4",null,[Object(r["h"])("b",null,Object(r["B"])(e.login),1)])]})),_:2},1032,["to"])])})),128))])],512),[[r["E"],c.found]]),Object(r["j"])(i,{found:c.found,page:c.page,total:c.total,onChangepage:o.changePage},null,8,["found","page","total","onChangepage"])])}var U=n("c7eb"),$=n("1da1"),J=(n("fb6a"),{class:"paginator"}),z={key:0,class:"pages"},I=["onClick"];function K(e,t,n,a,c,o){return Object(r["H"])((Object(r["t"])(),Object(r["g"])("div",J,[n.total>=n.perPage?(Object(r["t"])(),Object(r["g"])("ul",z,[n.page>1?(Object(r["t"])(),Object(r["g"])("li",{key:0,onClick:t[0]||(t[0]=function(e){return o.changepage(n.page-1)}),class:"points"}," prev ")):Object(r["f"])("",!0),(Object(r["t"])(!0),Object(r["g"])(r["a"],null,Object(r["x"])(Math.ceil(n.total/n.perPage),(function(e){return Object(r["t"])(),Object(r["g"])("li",{class:Object(r["p"])({active:n.page==e}),onClick:function(t){return o.changepage(e)},key:e},Object(r["B"])(e),11,I)})),128)),n.page<Math.ceil(n.total/n.perPage)?(Object(r["t"])(),Object(r["g"])("li",{key:1,onClick:t[1]||(t[1]=function(e){return o.changepage(n.page+1)}),class:"points"}," next ")):Object(r["f"])("",!0)])):Object(r["f"])("",!0)],512)),[[r["E"],n.found]])}n("a9e3");var V={name:"Paginator",props:{found:Boolean,total:Number,perPage:{type:Number,default:20},page:{type:Number,default:1}},data:function(){return{}},methods:{changepage:function(e){this.$emit("changepage",e)}}};n("a1f6");const Y=h()(V,[["render",K]]);var Q=Y,R={name:"Search",data:function(){return{term:"",results:[],found:!1,total:0,filtered:[],per_page:20,page:1}},components:{Paginator:Q},methods:{changePage:function(e){this.filtered=this.results.slice((e-1)*this.per_page,e*this.per_page),this.page=e},getData:function(){var e=this;return Object($["a"])(Object(U["a"])().mark((function t(){return Object(U["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.found=!1,e.$axios.get("https://api.github.com/search/users",{params:{q:e.term,per_page:100}}).then((function(t){e.results=t.data.items,e.total=100,e.found=!0,e.filtered=e.results.slice(0,e.per_page)})).catch((function(e){console.error(e)}));case 2:case"end":return t.stop()}}),t)})))()}}};n("4a10");const W=h()(R,[["render",F]]);var X=W,Z=[{path:"/",name:"search",component:X},{path:"/about",name:"about",component:function(){return n.e("chunk-2d0de531").then(n.bind(null,"84ba"))}},{path:"/user",name:"app.user",component:function(){return n.e("chunk-442df05a").then(n.bind(null,"7088"))},props:function(e){return Object(E["a"])(Object(E["a"])({},e.params),{},{username:e.params.username})}}],ee=Object(A["a"])({history:Object(A["b"])("/github-mini-search/"),routes:Z,linkActiveClass:"app-active-link",scrollBehavior:function(e,t,n){return n||new Promise((function(e){setTimeout((function(){return e({top:0,behavior:"smooth"})}),300)}))}}),te=ee,ne=Object(r["d"])(x);ne.config.globalProperties.$axios=S.a,ne.use(te),ne.mount("#app")},"5a9e":function(e,t,n){},"7dc5":function(e,t,n){},8774:function(e,t,n){"use strict";n("7dc5")},"9a52":function(e,t,n){"use strict";n("3536")},a1f6:function(e,t,n){"use strict";n("5a9e")},ae89:function(e,t,n){"use strict";n("deb7")},deb7:function(e,t,n){}});
//# sourceMappingURL=app.2e442f84.js.map