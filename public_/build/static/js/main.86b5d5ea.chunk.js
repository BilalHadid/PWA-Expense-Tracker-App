(this["webpackJsonppwa-expense-tracker-app"]=this["webpackJsonppwa-expense-tracker-app"]||[]).push([[0],{15:function(e,t,n){e.exports=n(23)},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(13),o=n.n(c),l=(n(20),n(4),n(8)),u=n(14),i=n(9),m=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(i.a)(Object(i.a)({},e),{},{transaction:e.transaction.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(i.a)(Object(i.a)({},e),{},{transaction:[t.payload].concat(Object(u.a)(e.transaction))});default:return e}},s={transaction:[{id:1,text:"Bilal",ammount:40}]},p=Object(a.createContext)({}),d=function(e){var t=e.children,n=Object(a.useReducer)(m,s),c=Object(l.a)(n,2),o=c[0],u=c[1];return r.a.createElement(p.Provider,{value:{transaction:o.transaction,deleteTransaction:function(e){u({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){u({type:"ADD_TRANSACTION",payload:e})}}},t)},E=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(0),u=Object(l.a)(o,2),i=u[0],m=u[1],s=Object(a.useContext)(p).addTransaction;return r.a.createElement("div",null,r.a.createElement("h3",null,"Add new Transaction"),r.a.createElement("form",{id:"form",onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e7*Math.random()),text:n,ammount:+i};s(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{id:"text",type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter Text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"ammount"},"Ammout ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{id:"amount",type:"number",value:i,onChange:function(e){return m(e.target.value)},placeholder:"Enter ammount..."})),r.a.createElement("button",{className:"btn"},"Add Transaction")))},f=function(){var e=Object(a.useContext)(p).transaction.map((function(e,t){return e.ammount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null," $",e," "))},b=function(){var e=Object(a.useContext)(p).transaction.map((function(e){return e.ammount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expence"),r.a.createElement("p",{className:"money minus"},n)))},h=function(e){var t=e.transactions,n=Object(a.useContext)(p).deleteTransaction,c=t.ammount<0?"-":"+";return r.a.createElement("li",{className:t.ammount<0?"minus":"plus"},t.text," ",r.a.createElement("span",null,c,"$",Math.abs(t.ammount)),r.a.createElement("button",{className:"btn-delete",onClick:function(){return n(t.id)}},"x"))},v=function(){var e=Object(a.useContext)(p).transaction;return r.a.createElement(a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:"list"}," ",e.map((function(e,t){return r.a.createElement(h,{key:e.id,transactions:e})}))))},x=n(11);n(24);x.initializeApp({apiKey:"AIzaSyDI1m36PnfS-rCYb5T34GTUuBAtPV6U7sk",authDomain:"expense-tracker-app-pwa.firebaseapp.com",databaseURL:"https://expense-tracker-app-pwa.firebaseio.com",projectId:"expense-tracker-app-pwa",storageBucket:"expense-tracker-app-pwa.appspot.com",messagingSenderId:"858359331296",appId:"1:858359331296:web:249fe4c1dca3dfe89fd385"});var T=x;var O=function(){var e=T.messaging();return e.requestPermission().then((function(){return e.getToken()})).then((function(e){console.log("token",e),alert(e),prompt("token",e)})),r.a.createElement(d,null,r.a.createElement("h3",null,"Expense Tracker App "),r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(b,null),r.a.createElement(v,null),r.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.86b5d5ea.chunk.js.map