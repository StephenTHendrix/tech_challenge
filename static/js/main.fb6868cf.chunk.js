(this.webpackJsonpihm_front_end=this.webpackJsonpihm_front_end||[]).push([[0],{38:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t(0),c=t.n(o),i=t(23),a=t.n(i),s=t(8),u="https://gad9m8qpj1.execute-api.us-east-2.amazonaws.com/Prod/get-song-",l=t(11),d=t(4),b=t(2),j=t(3),f={background:"#f8f3d4",brand:"#00b8a9",fadedBrand:"#f1d7c0",tableBorder:"#c33052",table:"#f6416c"};function x(){var n=Object(b.a)(["\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: ",";\n    font-family: sans-serif;\n    margin: 0;\n    font-size: 18px;\n    color: #45443b;\n}\n\na {\n    text-decoration: none;\n    color: white;\n}\n    \n    a:visited {\n    text-decoration: none;\n    color: white;\n}\n"]);return x=function(){return n},n}var g=Object(j.a)(x(),f.background);function p(){var n=Object(b.a)(["\n  color: white;\n  height: 75px;\n  width: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  background-color: ",";\n  margin: 0 5px;\n"]);return p=function(){return n},n}function h(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return h=function(){return n},n}function O(){var n=Object(b.a)(["\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: ",";\n  color: white;\n  height: 100px;\n  width: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n"]);return O=function(){return n},n}var v=j.b.div(O(),f.brand),m=j.b.div(h()),w=Object(j.b)(l.b)(p(),f.table),y=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(v,{children:"Song Database"}),Object(r.jsxs)(m,{children:[Object(r.jsx)(w,{to:"/songs",children:"See All Songs"}),Object(r.jsx)(w,{to:"/song",children:"Get Song Detail"})]})]})},S=t(17),k=t.p+"static/media/loading.89906e12.gif";function C(){var n=Object(b.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return C=function(){return n},n}var K=j.b.img(C()),D=function(){return Object(r.jsx)(K,{src:k})};function F(){var n=Object(b.a)(["\n  margin: 0 5px;\n"]);return F=function(){return n},n}function z(){var n=Object(b.a)([""]);return z=function(){return n},n}function B(){var n=Object(b.a)(["\n  font-size: 24px;\n  margin-left: 10px;\n"]);return B=function(){return n},n}function M(){var n=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  color: white;\n  font-size: 36px;\n"]);return M=function(){return n},n}function I(){var n=Object(b.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 50px;\n  margin-bottom: 100px;\n  background-color: ",";\n  height: 75px;\n"]);return I=function(){return n},n}var E=j.b.div(I(),f.brand),L=j.b.div(M()),R=j.b.div(B()),_=j.b.div(z()),G=Object(j.b)(l.b)(F()),V=function(){return Object(r.jsxs)(E,{children:[Object(r.jsxs)(L,{children:["\u266b",Object(r.jsx)(R,{children:"Song Database"})]}),Object(r.jsxs)(_,{children:[Object(r.jsx)(G,{to:"/",children:"Home"}),Object(r.jsx)(G,{to:"/song",children:"Song"}),Object(r.jsx)(G,{to:"/songs",children:"Songs"})]})]})},q=function(n){var e=n.rotate;return Object(r.jsx)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"10px",height:"10px",viewBox:"0 0 284.929 284.929",xmlSpace:"preserve",transform:e&&"rotate(180)",children:Object(r.jsx)("g",{children:Object(r.jsx)("path",{d:"M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441 L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082 c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647 c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"})})})},P=function(n){return n.includes("metric")?n.replace("metric","Metric "):"playCount"===n?"Play Count":"songReleaseDate"===n?"Song Release Date":n};function T(){var n=Object(b.a)(["\n  text-align: left;\n  width: 80%;\n  text-transform: capitalize;\n"]);return T=function(){return n},n}function W(){var n=Object(b.a)(["\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  border: 1px solid ",";\n  background-color: ",";\n"]);return W=function(){return n},n}function A(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  max-width: 300px;\n  height: 70px;\n  background-color: white;\n  border: 1px solid\n    ",";\n  border-radius: 6px;\n  cursor: pointer;\n  margin: 10px;\n"]);return A=function(){return n},n}var H=j.b.div(A(),(function(n){return n.selected?f.brand:f.border})),J=j.b.div(W(),f.border,(function(n){return n.selected?f.brand:"white"})),N=j.b.div(T()),X=function(n){var e=n.label,t=n.selected,o=n.onClick;return Object(r.jsxs)(H,{selected:t,onClick:o,children:[Object(r.jsx)(J,{selected:t}),Object(r.jsx)(N,{children:e})]})};function Z(){var n=Object(b.a)(["\n  text-align: center;\n"]);return Z=function(){return n},n}function Q(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  margin: 10px 0;\n  background-color: white;\n  border: 1px solid gray;\n  border-radius: 8px;\n  text-transform: capitalize;\n  width: 50%;\n  color: #45443b;\n"]);return Q=function(){return n},n}function U(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  background-color: ",";\n  border-radius: 8px;\n  width: 40%;\n  padding: 10px;\n  color: white;\n"]);return U=function(){return n},n}function Y(){var n=Object(b.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 50px;\n"]);return Y=function(){return n},n}function $(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  width: 50%;\n  margin: 0 auto 50px;\n"]);return $=function(){return n},n}function nn(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 200px;\n  height: 60px;\n  background-color: white;\n  ",";\n  margin: 0 5px;\n  border: 2px solid ",";\n  border-radius: 6px;\n"]);return nn=function(){return n},n}function en(){var n=Object(b.a)(["\n  width: 200px;\n  height: 60px;\n  margin: 0 5px;\n  text-align: center;\n  font-size: 14px;\n  border-radius: 6px;\n  border: 1px solid gray;\n  color: #45443b;\n\n  &:focus {\n    outline: none;\n    border: 2px solid ",";\n  }\n"]);return en=function(){return n},n}var tn=j.b.input(en(),f.brand),rn=j.b.div(nn(),(function(n){return!n.disabled&&"cursor: pointer"}),(function(n){return n.buttonBorderColor})),on=j.b.div($()),cn=j.b.div(Y()),an=j.b.div(U(),f.table),sn=j.b.div(Q()),un=j.b.div(Z()),ln=function(n){var e=n.songKeys,t=Object(o.useState)(""),c=Object(s.a)(t,2),i=c[0],a=c[1],l=Object(o.useState)([]),d=Object(s.a)(l,2),b=d[0],j=d[1],x=Object(o.useState)({}),g=Object(s.a)(x,2),p=g[0],h=g[1],O=Object(o.useState)(""),v=Object(s.a)(O,2),m=v[0],w=v[1],y=Object(o.useState)(!1),k=Object(s.a)(y,2),C=k[0],K=k[1],F=Object(o.useState)("red"),z=Object(s.a)(F,2),B=z[0],M=z[1],I=i.length>0,E=b.length>0,L=!I||!E;Object(o.useEffect)((function(){M(I||E?!I&&E||I&&!E?"#ffde7d":f.brand:f.table)}),[E,I]);var R=Object(o.useCallback)((function(n){var e=Object(S.a)(b);e.includes(n)?e=e.filter((function(e){return e!==n})):e.push(n),j(e)}),[b]),_=Object(o.useMemo)((function(){return 0===Object.keys(p).length}),[p]),G=Object(o.useMemo)((function(){return e.map((function(n){return{songKey:n,songValue:P(n)}}))}),[e]),V=Object(o.useMemo)((function(){return G.map((function(n){return Object(r.jsx)(X,{label:n.songValue,onClick:function(){return R(n.songKey)},selected:b.includes(n.songKey)},n.songKey)}))}),[R,b,G]),q=Object(o.useMemo)((function(){return Object.keys(p).map((function(n){return Object(r.jsxs)(sn,{children:[P(n),": ",p[n]]},n)}))}),[p]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(on,{children:[Object(r.jsx)(tn,{placeholder:"Enter Song Name (Required)",onChange:function(n){return a(n.target.value)}}),Object(r.jsx)(rn,{onClick:function(){L||(K(!0),fetch(u+"getSongFunction-1VLIRO38G7WD8/",{method:"POST",headers:{"Content-Type":"application/json"},body:'\n      {getSongInfo(song: "'.concat(i,'") {').concat(b.join(","),"}}")}).then((function(n){return n.json()})).then((function(n){var e,t,r;(null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.getSongInfo)?(h((null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.getSongInfo)||(null===n||void 0===n?void 0:n.errors[0])),w("")):(h({}),w(null===n||void 0===n||null===(r=n.errors[0])||void 0===r?void 0:r.message));K(!1)})).catch((function(n){K(!1),h({}),w((null===n||void 0===n?void 0:n.message)||"Something went wrong.")})))},disabled:L,buttonBorderColor:B,children:"Get Song Detail"})]}),Object(r.jsx)(un,{children:"What would you like to know? Select at least one. (Required)"}),Object(r.jsx)(cn,{children:V}),C&&Object(r.jsx)(D,{}),(!_||m)&&Object(r.jsx)(an,{children:"Failed to fetch"===m?"Couldn't retrieve data.":m?"Something went wrong. Try a different song name.":q})]})};function dn(){var n=Object(b.a)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 5px;\n"]);return dn=function(){return n},n}function bn(){var n=Object(b.a)(["\n  margin-right: auto;\n  text-transform: capitalize;\n"]);return bn=function(){return n},n}function jn(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  border-bottom: 2px solid ",";\n  padding: 20px;\n  min-width: 225px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: white;\n  background-color: ",";\n"]);return jn=function(){return n},n}function fn(){var n=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]);return fn=function(){return n},n}var xn=j.b.div(fn()),gn=j.b.div(jn(),f.tableBorder,f.table),pn=j.b.div(bn()),hn=j.b.div(dn()),On=function(n){var e=n.songs,t=n.setSongs,c=n.songKeys,i=function(n,r){var o=Object(S.a)(e).sort(function(n,e){return function(t,r){return t[n]<r[n]?"descending"===e?1:-1:t[n]>r[n]?"descending"===e?-1:1:0}}(n,r));t((function(n){return o}))},a=Object(o.useMemo)((function(){var n={};return null===c||void 0===c||c.map((function(e){return n[e]=P(e)})),n}),[c]);return Object(r.jsx)(xn,{children:c.map((function(n,e){return Object(r.jsxs)(gn,{children:[Object(r.jsx)(pn,{children:a[n]}),Object(r.jsx)(hn,{onClick:function(){return i(n,"ascending")},children:Object(r.jsx)(q,{})}),Object(r.jsx)(hn,{onClick:function(){return i(n,"descending")},children:Object(r.jsx)(q,{rotate:!0})})]},n+"-"+e)}))})};function vn(){var n=Object(b.a)(["\n  display: inline-block;\n  border-bottom: 2px solid ",";\n  padding: 40px 20px;\n  min-width: 225px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background-color: ",";\n"]);return vn=function(){return n},n}function mn(){var n=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]);return mn=function(){return n},n}var wn=j.b.div(mn()),yn=j.b.div(vn(),f.tableBorder,f.fadedBrand),Sn=function(n){var e=n.song,t=Object.values(e);return Object(r.jsx)(wn,{children:t.map((function(n,e){return Object(r.jsx)(yn,{children:n},n+"-"+e)}))})};function kn(){var n=Object(b.a)(["\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: ",";\n  color: white;\n  height: 100px;\n  width: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  text-align: center;\n"]);return kn=function(){return n},n}function Cn(){var n=Object(b.a)(["\n  margin: 0 50px 50px;\n  border: 1px solid #c33052;\n  overflow: scroll;\n  border-radius: 16px;\n"]);return Cn=function(){return n},n}var Kn=j.b.div(Cn()),Dn=j.b.div(kn(),f.table),Fn=function(n){var e=n.allSongsData,t=n.songKeys,c=n.fetchFailed,i=Object(o.useState)(e),a=Object(s.a)(i,2),u=a[0],l=a[1];return Object(r.jsx)(r.Fragment,{children:c?Object(r.jsx)(Dn,{children:"We ran into a problem retrieving the data."}):u.length?Object(r.jsxs)(Kn,{children:[Object(r.jsx)(On,{songs:u,setSongs:l,songKeys:t}),u.map((function(n,e){return Object(r.jsx)(Sn,{song:n},n.song+"-"+e)}))]}):Object(r.jsx)(D,{})})},zn=function(n){var e=n.allSongsData,t=n.songKeys,o=n.fetchFailed;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(g,{}),Object(r.jsxs)(l.a,{basename:"/",children:[Object(r.jsx)(V,{}),Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{exact:!0,path:"/",component:y}),Object(r.jsx)(d.b,{exact:!0,path:"/song",component:function(){return Object(r.jsx)(ln,{songKeys:t})}}),Object(r.jsx)(d.b,{exact:!0,path:"/songs",component:function(){return Object(r.jsx)(Fn,{allSongsData:e,songKeys:t,fetchFailed:o})}}),Object(r.jsx)(d.a,{to:"/"})]})]})]})},Bn=function(){var n=Object(o.useState)([]),e=Object(s.a)(n,2),t=e[0],c=e[1],i=Object(o.useState)([]),a=Object(s.a)(i,2),l=a[0],d=a[1],b=Object(o.useState)(!1),j=Object(s.a)(b,2),f=j[0],x=j[1];return Object(o.useEffect)((function(){fetch(u+"getAllSongsFunction-HV5IBZ9CO8GE").then((function(n){return n.json()})).then((function(n){c(n),d(Object.keys(n[0]))})).catch((function(n){x(!0)}))}),[]),Object(r.jsx)(zn,{allSongsData:t,songKeys:l,fetchFailed:f})};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Bn,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.fb6868cf.chunk.js.map