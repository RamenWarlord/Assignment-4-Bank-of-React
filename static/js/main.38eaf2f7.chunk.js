(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(33),r=c.n(s),i=(c(39),c(4)),j=c(12),o=c(5),l=(c.p,c(40),c(7)),d=c(2),b=c(22),u=c.n(b),x=c(0);var O=function(e){return Object(x.jsxs)("div",{children:["Balance: ",e.accountBalance]})};c(18);var f=function(e){return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{className:"d-flex justify-content-center flex-wrap",children:"Bank of React"}),Object(x.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:Object(x.jsx)(O,{accountBalance:e.accountBalance})}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col d-flex justify-content-center flex-wrap",children:Object(x.jsx)(l.b,{to:"/userProfile",children:"User Profile"})}),Object(x.jsx)("div",{className:"col d-flex justify-content-center flex-wrap",children:Object(x.jsx)(l.b,{to:"/debits",children:"Debits"})}),Object(x.jsx)("div",{className:"col d-flex justify-content-center flex-wrap",children:Object(x.jsx)(l.b,{to:"/credits",children:"Credits"})})]})]})};var m=function(e){return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{className:"d-flex justify-content-center flex-wrap",children:"User Profile"}),Object(x.jsxs)("div",{className:"d-flex justify-content-center flex-wrap",children:["Username: ",e.userName]}),Object(x.jsxs)("div",{className:"d-flex justify-content-center flex-wrap",children:["Member Since: ",e.memberSince]}),Object(x.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:Object(x.jsx)(l.b,{to:"/",children:"Return to Home"})})]})},h=c(11);var p=function(e){var t=Object(n.useState)({userName:"",password:""}),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(!1),j=Object(o.a)(r,2),l=j[0],b=j[1];return l?Object(x.jsx)(d.a,{to:"/userProfile"}):Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.mockLogIn(a),b(!0)},children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"userName",children:"User Name"}),Object(x.jsx)("input",{type:"text",name:"userName",onChange:function(e){s((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(h.a)({},e.target.name,e.target.value))}))},value:a.userName})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{type:"password",name:"password"})]}),Object(x.jsx)("button",{children:"Log In"})]})})};var v=function(e){var t=Object(n.useState)(e.debitInfo),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)({id:"",description:"",amount:"",date:""}),d=Object(o.a)(r,2),b=d[0],u=d[1],f=function(e){u((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(h.a)({},e.target.name,e.target.value))}))};return a?Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{className:"d-flex justify-content-center flex-wrap",children:"Debits"}),Object(x.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:Object(x.jsx)(O,{accountBalance:e.accountBalance})}),Object(x.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:Object(x.jsx)(l.b,{to:"/",children:"Return to Home"})}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col d-flex justify-content-center flex-wrap",children:Object(x.jsx)("ul",{children:a.map((function(e){return Object(x.jsxs)("li",{children:["Item: ",e.description," ",Object(x.jsx)("br",{}),"Cost: $",e.amount," ",Object(x.jsx)("br",{}),"Date: ",e.date]},e.id)}))})}),Object(x.jsx)("div",{className:"col d-flex justify-content-center flex-wrap",children:Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:function(t){var c;t.preventDefault(),u((function(t){return Object(i.a)(Object(i.a)({},t),{},{id:e.debitInfo.length,date:Date()})})),c=b,s((function(e){return[].concat(Object(j.a)(e),[{id:c.id,description:c.description,amount:c.amount,date:c.date}])})),e.addDebit(b),e.changeBalance(b.amount)},children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"description",children:"Item Description "}),Object(x.jsx)("input",{type:"text",name:"description",onChange:f,value:b.description}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{htmlFor:"amount",children:"Cost of Item "}),Object(x.jsx)("input",{type:"number",name:"amount",onChange:f,value:b.amount}),Object(x.jsx)("br",{})]}),Object(x.jsx)("button",{type:"submit",children:"Add new debit"})]})})})]})]}):Object(x.jsx)("div",{})};var N=function(e){var t=Object(n.useState)(e.creditInfo),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)({id:"",description:"",amount:"",date:""}),d=Object(o.a)(r,2),b=d[0],u=d[1],f=function(e){u((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(h.a)({},e.target.name,e.target.value))}))};return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{className:"d-flex justify-content-center flex-wrap",children:"Credits"}),Object(x.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:Object(x.jsx)(O,{accountBalance:e.accountBalance})}),Object(x.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:Object(x.jsx)(l.b,{to:"/",children:"Return to Home"})}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col d-flex justify-content-center flex-wrap",children:Object(x.jsx)("ul",{children:a.map((function(e){return Object(x.jsxs)("li",{children:["Item: ",e.description," ",Object(x.jsx)("br",{}),"Cost: $",e.amount," ",Object(x.jsx)("br",{}),"Date: ",e.date]},e.id)}))})}),Object(x.jsx)("div",{className:"col d-flex justify-content-center flex-wrap",children:Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault(),u((function(t){return Object(i.a)(Object(i.a)({},t),{},{id:e.creditInfo.length,date:Date()})})),e.addCredit(b),s((function(e){return[].concat(Object(j.a)(e),[b])})),e.changeBalance(b.amount)},children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"description",children:"Item Description"}),Object(x.jsx)("input",{type:"text",name:"description",onChange:f,value:b.description}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{htmlFor:"amount",children:"Cost of Item"}),Object(x.jsx)("input",{type:"number",name:"amount",onChange:f,value:b.amount}),Object(x.jsx)("br",{})]}),Object(x.jsx)("button",{type:"submit",children:"Add new credit"})]})})})]})]})};var g=function(){var e=Object(n.useState)(14568.27),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)({userName:"joe_shmo",memberSince:"07/23/96"}),r=Object(o.a)(s,2),b=r[0],O=r[1],h=Object(n.useState)([]),g=Object(o.a)(h,2),w=g[0],y=g[1],S=Object(n.useState)([]),B=Object(o.a)(S,2),I=B[0],C=B[1],D=function(e){a((function(t){return(+t+ +e).toFixed(2)}))};return Object(n.useEffect)((function(){u.a.get("https://moj-api.herokuapp.com/debits").then((function(e){console.log(e),y(e.data)})).catch((function(e){console.log(e)})),u.a.get("https://moj-api.herokuapp.com/credits").then((function(e){console.log(e),C(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(x.jsx)(l.a,{children:Object(x.jsxs)(d.d,{children:[Object(x.jsx)(d.b,{exact:!0,path:"/",children:Object(x.jsx)(f,{accountBalance:c})}),Object(x.jsx)(d.b,{path:"/userProfile",children:Object(x.jsx)(m,{userName:b.userName,memberSince:b.memberSince})}),Object(x.jsx)(d.b,{exact:!0,path:"/login",children:Object(x.jsx)(p,{user:b,mockLogIn:function(e){O((function(t){return Object(i.a)(Object(i.a)({},t),{},{userName:e.userName})}))}})}),Object(x.jsx)(d.b,{path:"/debits",children:Object(x.jsx)(v,{debitInfo:w,addDebit:function(e){y((function(t){return[].concat(Object(j.a)(t),[{id:e.id,description:e.description,amount:e.amount,date:e.date}])}))},accountBalance:c,changeBalance:D})}),Object(x.jsx)(d.b,{path:"/credits",children:Object(x.jsx)(N,{creditInfo:I,addCredit:function(e){C((function(t){return[].concat(Object(j.a)(t),[{id:e.id,description:e.description,amount:e.amount,date:e.date}])}))},accountBalance:c,changeBalance:D})})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(g,{})}),document.getElementById("root")),w()}},[[68,1,2]]]);
//# sourceMappingURL=main.38eaf2f7.chunk.js.map