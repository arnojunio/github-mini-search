(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63af4f82"],{"0cb2":function(e,t,n){var r=n("e330"),c=n("7b0b"),a=Math.floor,i=r("".charAt),o=r("".replace),u=r("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,f,d){var b=n+e.length,h=r.length,p=l;return void 0!==f&&(f=c(f),p=s),o(d,p,(function(c,o){var s;switch(i(o,0)){case"$":return"$";case"&":return e;case"`":return u(t,0,n);case"'":return u(t,b);case"<":s=f[u(o,1,-1)];break;default:var l=+o;if(0===l)return c;if(l>h){var d=a(l/10);return 0===d?c:d<=h?void 0===r[d-1]?i(o,1):r[d-1]+i(o,1):c}s=r[l-1]}return void 0===s?"":s}))}},"107c":function(e,t,n){var r=n("d039"),c=n("da84"),a=c.RegExp;e.exports=r((function(){var e=a("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,n){var r=n("c65b"),c=n("825a"),a=n("1626"),i=n("c6b6"),o=n("9263"),u=TypeError;e.exports=function(e,t){var n=e.exec;if(a(n)){var s=r(n,e,t);return null!==s&&c(s),s}if("RegExp"===i(e))return r(o,e,t);throw u("RegExp#exec called on incompatible receiver")}},3511:function(e,t){var n=TypeError,r=9007199254740991;e.exports=function(e){if(e>r)throw n("Maximum allowed index exceeded");return e}},5319:function(e,t,n){"use strict";var r=n("2ba4"),c=n("c65b"),a=n("e330"),i=n("d784"),o=n("d039"),u=n("825a"),s=n("1626"),l=n("5926"),f=n("50c4"),d=n("577e"),b=n("1d80"),h=n("8aa5"),p=n("dc4a"),v=n("0cb2"),g=n("14c3"),x=n("b622"),O=x("replace"),j=Math.max,m=Math.min,k=a([].concat),y=a([].push),I=a("".indexOf),w=a("".slice),$=function(e){return void 0===e?e:String(e)},C=function(){return"$0"==="a".replace(/./,"$0")}(),E=function(){return!!/./[O]&&""===/./[O]("a","$0")}(),R=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));i("replace",(function(e,t,n){var a=E?"$":"$0";return[function(e,n){var r=b(this),a=void 0==e?void 0:p(e,O);return a?c(a,e,r,n):c(t,d(r),e,n)},function(e,c){var i=u(this),o=d(e);if("string"==typeof c&&-1===I(c,a)&&-1===I(c,"$<")){var b=n(t,i,o,c);if(b.done)return b.value}var p=s(c);p||(c=d(c));var x=i.global;if(x){var O=i.unicode;i.lastIndex=0}var C=[];while(1){var E=g(i,o);if(null===E)break;if(y(C,E),!x)break;var R=d(E[0]);""===R&&(i.lastIndex=h(o,f(i.lastIndex),O))}for(var A="",S=0,T=0;T<C.length;T++){E=C[T];for(var _=d(E[0]),D=j(m(l(E.index),o.length),0),M=[],z=1;z<E.length;z++)y(M,$(E[z]));var G=E.groups;if(p){var H=k([_],M,D,o);void 0!==G&&y(H,G);var K=d(r(c,void 0,H))}else K=v(_,o,D,M,G,c);D>=S&&(A+=w(o,S,D)+K,S=D+_.length)}return A+w(o,S)}]}),!R||!C||E)},7088:function(e,t,n){"use strict";n.r(t);n("b0c0"),n("a4d3"),n("e01a");var r=n("7a23"),c={class:"main"},a={class:"user-wrapp"},i={key:0,class:"user-profile"},o=["src"],u={class:"username"},s={class:"user-caption"},l={class:"user-info"},f={key:0,class:"user-repositories"},d=["href"],b={class:"user-repo"},h={key:1,class:"user-repositories"},p=Object(r["i"])("<div><h2>arnojunio</h2><h6>Atualizado em 18/03/2021</h6><p>Config files for my GitHub profile.</p></div><div><h2>arnojunio</h2><h6>Atualizado em 18/03/2021</h6><p>Config files for my GitHub profile.</p></div><div><h2>arnojunio</h2><h6>Atualizado em 18/03/2021</h6><p>Config files for my GitHub profile.</p></div>",3),v=[p];function g(e,t,n,p,g,x){return Object(r["u"])(),Object(r["g"])("main",null,[Object(r["h"])("div",c,[Object(r["h"])("div",a,[g.found?(Object(r["u"])(),Object(r["g"])("div",i,[Object(r["h"])("img",{src:g.user.avatar_url,alt:""},null,8,o),Object(r["h"])("div",u,[Object(r["h"])("h2",null,Object(r["C"])(g.user.login),1),Object(r["h"])("span",null,"Membro desde "+Object(r["C"])(g.user.created_at),1)]),Object(r["h"])("div",s,Object(r["C"])(g.user.bio),1)])):Object(r["f"])("",!0),Object(r["h"])("div",l,[Object(r["h"])("ul",null,[Object(r["h"])("li",null,[Object(r["h"])("a",{class:"tab-links",onClick:t[0]||(t[0]=function(e){return x.changeTab("1")})},"Repositórios")]),Object(r["h"])("li",null,[Object(r["h"])("a",{class:"tab-links",onClick:t[1]||(t[1]=function(e){return x.changeTab("2")})},"Gists")]),Object(r["h"])("li",null,[Object(r["h"])("a",{class:"tab-links",onClick:t[2]||(t[2]=function(e){return x.changeTab("3")})},"Seguidores")]),Object(r["h"])("li",null,[Object(r["h"])("a",{class:"tab-links",onClick:t[3]||(t[3]=function(e){return x.changeTab("4")})},"Seguindo")])]),1==g.choice?(Object(r["u"])(),Object(r["g"])("div",f,[(Object(r["u"])(!0),Object(r["g"])(r["a"],null,Object(r["y"])(g.results,(function(e){return Object(r["u"])(),Object(r["g"])("a",{target:"_blank",class:"repos-links",key:e.id,href:e.html_url},[Object(r["h"])("div",b,[Object(r["h"])("h2",null,Object(r["C"])(e.name),1),Object(r["h"])("h6",null,"Atualizado em "+Object(r["C"])(x.formatDate(e.updated_at)),1),Object(r["h"])("p",null,Object(r["C"])(e.description),1)])],8,d)})),128))])):Object(r["f"])("",!0),4==g.choice?(Object(r["u"])(),Object(r["g"])("div",h,v)):Object(r["f"])("",!0)])])])])}var x=n("c7eb"),O=n("1da1"),j=(n("99af"),n("ac1f"),n("5319"),{name:"User",data:function(){return{option:"Você selecionou Repositórios",choice:0,results:[],endpoint:"",user:null,found:!1}},props:{username:{type:String,required:!0}},methods:{getData:function(){var e=this;return Object(O["a"])(Object(x["a"])().mark((function t(){return Object(x["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("https://api.github.com/users/".concat(e.username).concat(e.endpoint)).then((function(t){e.user?e.results=t.data:e.user=t.data,e.found=!0})).catch((function(e){console.error(e)}));case 2:case"end":return t.stop()}}),t)})))()},formatDate:function(e){return e.replace(/(\d{4})-(\d{2})-(\d{2}).*/,"$3/$2/$1")},changeTab:function(e){switch(e){case"1":this.choice=1,this.endpoint="/repos",this.getData();break;case"2":this.choice=2;break;case"3":this.choice=3;break;case"4":this.choice=4;break}}},created:function(){this.getData()}}),m=(n("7f6c"),n("6b0d")),k=n.n(m);const y=k()(j,[["render",g]]);t["default"]=y},"7f6c":function(e,t,n){"use strict";n("8690")},8690:function(e,t,n){},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("c65b"),c=n("e330"),a=n("577e"),i=n("ad6d"),o=n("9f7f"),u=n("5692"),s=n("7c73"),l=n("69f3").get,f=n("fce3"),d=n("107c"),b=u("native-string-replace",String.prototype.replace),h=RegExp.prototype.exec,p=h,v=c("".charAt),g=c("".indexOf),x=c("".replace),O=c("".slice),j=function(){var e=/a/,t=/b*/g;return r(h,e,"a"),r(h,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),m=o.BROKEN_CARET,k=void 0!==/()??/.exec("")[1],y=j||k||m||f||d;y&&(p=function(e){var t,n,c,o,u,f,d,y=this,I=l(y),w=a(e),$=I.raw;if($)return $.lastIndex=y.lastIndex,t=r(p,$,w),y.lastIndex=$.lastIndex,t;var C=I.groups,E=m&&y.sticky,R=r(i,y),A=y.source,S=0,T=w;if(E&&(R=x(R,"y",""),-1===g(R,"g")&&(R+="g"),T=O(w,y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==v(w,y.lastIndex-1))&&(A="(?: "+A+")",T=" "+T,S++),n=new RegExp("^(?:"+A+")",R)),k&&(n=new RegExp("^"+A+"$(?!\\s)",R)),j&&(c=y.lastIndex),o=r(h,E?n:y,T),E?o?(o.input=O(o.input,S),o[0]=O(o[0],S),o.index=y.lastIndex,y.lastIndex+=o[0].length):y.lastIndex=0:j&&o&&(y.lastIndex=y.global?o.index+o[0].length:c),k&&o&&o.length>1&&r(b,o[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o&&C)for(o.groups=f=s(null),u=0;u<C.length;u++)d=C[u],f[d[0]]=o[d[1]];return o}),e.exports=p},"99af":function(e,t,n){"use strict";var r=n("23e7"),c=n("d039"),a=n("e8b5"),i=n("861d"),o=n("7b0b"),u=n("07fa"),s=n("3511"),l=n("8418"),f=n("65f0"),d=n("1dde"),b=n("b622"),h=n("2d00"),p=b("isConcatSpreadable"),v=h>=51||!c((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),g=d("concat"),x=function(e){if(!i(e))return!1;var t=e[p];return void 0!==t?!!t:a(e)},O=!v||!g;r({target:"Array",proto:!0,arity:1,forced:O},{concat:function(e){var t,n,r,c,a,i=o(this),d=f(i,0),b=0;for(t=-1,r=arguments.length;t<r;t++)if(a=-1===t?i:arguments[t],x(a))for(c=u(a),s(b+c),n=0;n<c;n++,b++)n in a&&l(d,b,a[n]);else s(b+1),l(d,b++,a);return d.length=b,d}})},"9f7f":function(e,t,n){var r=n("d039"),c=n("da84"),a=c.RegExp,i=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),o=i||r((function(){return!a("a","y").sticky})),u=i||r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:u,MISSED_STICKY:o,UNSUPPORTED_Y:i}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),c=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),c=n("cb2d"),a=n("9263"),i=n("d039"),o=n("b622"),u=n("9112"),s=o("species"),l=RegExp.prototype;e.exports=function(e,t,n,f){var d=o(e),b=!i((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),h=b&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!b||!h||n){var p=r(/./[d]),v=t(d,""[e],(function(e,t,n,c,i){var o=r(e),u=t.exec;return u===a||u===l.exec?b&&!i?{done:!0,value:p(t,n,c)}:{done:!0,value:o(n,t,c)}:{done:!1}}));c(String.prototype,e,v[0]),c(l,d,v[1])}f&&u(l[d],"sham",!0)}},fce3:function(e,t,n){var r=n("d039"),c=n("da84"),a=c.RegExp;e.exports=r((function(){var e=a(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-63af4f82.f7ec379f.js.map