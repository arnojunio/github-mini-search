(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,b=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0de531":"11d31862","chunk-63af4f82":"f7ec379f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-63af4f82":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0de531":"31d6cfe0","chunk-63af4f82":"0710a84e"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var b=document.getElementsByTagName("style");for(u=0;u<b.length;u++){s=b[u],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var b=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",b.name="ChunkLoadError",b.type=r,b.request=a,n[1](b)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/github-mini-search/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var b=0;b<s.length;b++)t(s[b]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},5304:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,o){var u=Object(r["z"])("Header"),i=Object(r["z"])("router-view"),s=Object(r["z"])("Footer");return Object(r["u"])(),Object(r["g"])(r["a"],null,[Object(r["k"])(u),Object(r["k"])(i,null,{default:Object(r["H"])((function(t){var n=t.Component;return[Object(r["k"])(r["b"],{name:"fade",mode:"out-in"},{default:Object(r["H"])((function(){return[(Object(r["u"])(),Object(r["e"])(Object(r["A"])(n),{key:e.$route.path}))]})),_:2},1024)]})),_:1}),Object(r["k"])(s)],64)}var c={class:"main-header"},o={class:"main-header-content"},u=Object(r["j"])("Github | User Search"),i={class:"navbar"},s={class:""},l=Object(r["j"])("Home"),b=Object(r["j"])("About");function f(e,t,n,a,f,p){var d=Object(r["z"])("router-link");return Object(r["u"])(),Object(r["g"])("header",c,[Object(r["h"])("div",o,[Object(r["h"])("h1",null,[Object(r["k"])(d,{to:"/"},{default:Object(r["H"])((function(){return[u]})),_:1})]),Object(r["h"])("nav",i,[Object(r["h"])("ul",s,[Object(r["h"])("li",null,[Object(r["k"])(d,{to:"/"},{default:Object(r["H"])((function(){return[l]})),_:1})]),Object(r["h"])("li",null,[Object(r["k"])(d,{to:"/about"},{default:Object(r["H"])((function(){return[b]})),_:1})])])])])])}var p={name:"Header"},d=(n("7612"),n("6b0d")),h=n.n(d);const j=h()(p,[["render",f]]);var g=j,O={class:"page-footer"},m=Object(r["h"])("div",{class:"page-footer-content"},[Object(r["h"])("p",null,[Object(r["j"])("Made by arnojunio. See source code on "),Object(r["h"])("a",{href:"https://github.com/arnojunio/github-mini-search",target:"_blank"},"Github")])],-1),v=[m];function y(e,t,n,a,c,o){return Object(r["u"])(),Object(r["g"])("footer",O,v)}var k={name:"Footer"};n("ae89");const _=h()(k,[["render",y]]);var P=_,w={name:"App",components:{Header:g,Footer:P}};n("c6cb");const C=h()(w,[["render",a]]);var x=C,S=n("bc3a"),H=n.n(S),A=n("5530"),E=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),N=(n("b0c0"),{class:"main"}),T={class:"main-content"},M={class:"box-search"},z=Object(r["h"])("h1",null,"Github user search",-1),D=Object(r["h"])("div",{id:"main-content",class:"content"},[Object(r["h"])("div",{class:"img-search"})],-1),F={class:"content"},q={class:"result"},B={class:"img"},L=["src"],I=Object(r["j"])("Detalhes");function $(e,t,n,a,c,o){var u=Object(r["z"])("router-link"),i=Object(r["z"])("Paginator");return Object(r["u"])(),Object(r["g"])("main",null,[Object(r["h"])("div",N,[Object(r["h"])("header",T,[Object(r["h"])("div",M,[z,Object(r["I"])(Object(r["h"])("input",{class:"search",onChange:t[0]||(t[0]=function(){return o.getData&&o.getData.apply(o,arguments)}),"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.term=e}),type:"text",placeholder:"Search for an user...",required:""},null,544),[[r["E"],c.term]])])])]),D,Object(r["I"])(Object(r["h"])("div",F,[Object(r["h"])("div",q,[(Object(r["u"])(!0),Object(r["g"])(r["a"],null,Object(r["y"])(c.filtered,(function(e){return Object(r["u"])(),Object(r["g"])("div",{class:"card fade-in",key:e.name},[Object(r["h"])("h4",null,[Object(r["h"])("b",null,Object(r["C"])(e.login),1)]),Object(r["h"])("div",B,[Object(r["h"])("img",{src:"".concat(e.avatar_url),alt:"avatar"},null,8,L)]),Object(r["k"])(u,{to:{name:"app.user",params:{username:e.login}}},{default:Object(r["H"])((function(){return[I]})),_:2},1032,["to"])])})),128))])],512),[[r["F"],c.found]]),Object(r["k"])(i,{found:c.found,page:c.page,total:c.total,onChangepage:o.changePage},null,8,["found","page","total","onChangepage"])])}var G=n("c7eb"),U=n("1da1"),J=(n("fb6a"),{class:"paginator"}),K={key:0,class:"pages"},V=["onClick"];function Q(e,t,n,a,c,o){return Object(r["I"])((Object(r["u"])(),Object(r["g"])("div",J,[n.total>=n.perPage?(Object(r["u"])(),Object(r["g"])("ul",K,[n.page>1?(Object(r["u"])(),Object(r["g"])("li",{key:0,onClick:t[0]||(t[0]=function(e){return o.changepage(n.page-1)}),class:"points"}," prev ")):Object(r["f"])("",!0),(Object(r["u"])(!0),Object(r["g"])(r["a"],null,Object(r["y"])(Math.ceil(n.total/n.perPage),(function(e){return Object(r["u"])(),Object(r["g"])("li",{class:Object(r["q"])({active:n.page==e}),onClick:function(t){return o.changepage(e)},key:e},Object(r["C"])(e),11,V)})),128)),n.page<Math.ceil(n.total/n.perPage)?(Object(r["u"])(),Object(r["g"])("li",{key:1,onClick:t[1]||(t[1]=function(e){return o.changepage(n.page+1)}),class:"points"}," next ")):Object(r["f"])("",!0)])):Object(r["f"])("",!0)],512)),[[r["F"],n.found]])}n("a9e3");var R={name:"Paginator",props:{found:Boolean,total:Number,perPage:{type:Number,default:20},page:{type:Number,default:1}},data:function(){return{}},methods:{changepage:function(e){this.$emit("changepage",e)}}};n("a1f6");const W=h()(R,[["render",Q]]);var X=W,Y={name:"Search",data:function(){return{term:"",results:[],found:!1,total:0,filtered:[],per_page:20,page:1}},components:{Paginator:X},methods:{changePage:function(e){this.filtered=this.results.slice((e-1)*this.per_page,e*this.per_page),this.page=e},getData:function(){var e=this;return Object(U["a"])(Object(G["a"])().mark((function t(){return Object(G["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.found=!1,e.$axios.get("https://api.github.com/search/users",{params:{q:e.term,per_page:100}}).then((function(t){e.results=t.data.items,e.total=100,e.found=!0,e.filtered=e.results.slice(0,e.per_page)})).catch((function(e){console.error(e)}));case 2:case"end":return t.stop()}}),t)})))()}}};n("9df3");const Z=h()(Y,[["render",$]]);var ee=Z,te=[{path:"/",name:"search",component:ee},{path:"/about",name:"about",component:function(){return n.e("chunk-2d0de531").then(n.bind(null,"84ba"))}},{path:"/user",name:"app.user",component:function(){return n.e("chunk-63af4f82").then(n.bind(null,"7088"))},props:function(e){return Object(A["a"])(Object(A["a"])({},e.params),{},{username:e.params.username})}}],ne=Object(E["a"])({history:Object(E["b"])("/github-mini-search/"),routes:te,linkActiveClass:"app-active-link",scrollBehavior:function(e,t,n){return n||new Promise((function(e){setTimeout((function(){return e({top:0,behavior:"smooth"})}),300)}))}}),re=ne,ae=Object(r["d"])(x);ae.config.globalProperties.$axios=H.a,ae.use(re),ae.mount("#app")},"5a9e":function(e,t,n){},7612:function(e,t,n){"use strict";n("a3dc")},"9df3":function(e,t,n){"use strict";n("5304")},a1f6:function(e,t,n){"use strict";n("5a9e")},a3dc:function(e,t,n){},ae89:function(e,t,n){"use strict";n("deb7")},c6cb:function(e,t,n){"use strict";n("d954")},d954:function(e,t,n){},deb7:function(e,t,n){}});
//# sourceMappingURL=app.6afa8110.js.map