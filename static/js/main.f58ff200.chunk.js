(this.webpackJsonprollgraph=this.webpackJsonprollgraph||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),i=n.n(a),o=(n(12),n(6)),u=n(3);function j(e,t){for(var n,c,r=[],a=0;a<t;a++)r.push((n=1,c=e,Math.floor(Math.random()*(c-n+1)+n)));return r}n(13);var s=n(0),l=function(){var e=Object(c.useState)(6),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(1),i=Object(u.a)(a,2),l=i[0],b=i[1],h=Object(c.useState)([]),p=Object(u.a)(h,2),O=p[0],d=p[1],g=Object(c.useState)(!1),f=Object(u.a)(g,2),x=f[0],m=f[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:"\ud83c\udfb2 rollgraph \ud83d\udcc8"})}),Object(s.jsxs)("p",{children:["I would like to roll a"," ",Object(s.jsx)("input",{type:"number",min:"1",value:n,onChange:function(e){return r(parseInt(e.target.value))}}),"-sided die"," ",Object(s.jsx)("input",{type:"number",min:"1",value:l,onChange:function(e){return b(parseInt(e.target.value))}})," ",1===l?"time":"times","."]}),Object(s.jsx)("button",{onClick:function(){d(x?[].concat(Object(o.a)(O),Object(o.a)(j(n,l))):j(n,l))},children:"Roll Dice!"}),Object(s.jsx)("p",{children:O.join(", ")}),Object(s.jsx)("input",{type:"checkbox",onChange:function(e){return m(e.target.checked)}})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(l,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.f58ff200.chunk.js.map