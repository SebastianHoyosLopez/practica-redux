(this["webpackJsonpudemy-redux-1"]=this["webpackJsonpudemy-redux-1"]||[]).push([[0],{47:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),o=a(22),s=a.n(o),i=(a(47),a(5)),l=a(41),u=a(40),d=a(6),b=a(13),p=a.n(b),j=a(17),O=a(20),f=a.n(O),g={count:0,next:null,previous:null,results:[]},m="OBTENER_POKEMONES_EXITO",h="SIGUIENTE_POKEMONES_EXITO",x="POKE_INFO_EXITO";var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://pokeapi.co/api/v2/pokemon/1";return function(){var t=Object(j.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!localStorage.getItem(e)){t.next=4;break}return a({type:x,payload:JSON.parse(localStorage.getItem(e))}),console.log("desde localstorage"),t.abrupt("return");case 4:return t.prev=4,console.log("desde api"),t.next=8,f.a.get(e);case 8:n=t.sent,a({type:x,payload:{nombre:n.data.name,ancho:n.data.weight,alto:n.data.height,foto:n.data.sprites.front_default}}),localStorage.setItem(e,JSON.stringify({nombre:n.data.name,ancho:n.data.weight,alto:n.data.height,foto:n.data.sprites.front_default})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e){return t.apply(this,arguments)}}()},k=function(){return function(){var e=Object(j.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("offset=0")){e.next=4;break}return console.log("datos guardados"),t({type:m,payload:JSON.parse(localStorage.getItem("offset=0"))}),e.abrupt("return");case 4:return e.prev=4,console.log("datos de la api"),e.next=8,f.a.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10");case 8:a=e.sent,t({type:m,payload:a.data}),localStorage.setItem("offset=0",JSON.stringify(a.data)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}()},y=function(){var e=Object(d.b)();c.a.useEffect((function(){e(v())}),[e]);var t=Object(d.c)((function(e){return e.pokemones.unPokemon}));return t?Object(n.jsx)("div",{className:"card mt-4 text-center",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("img",{src:t.foto,className:"img-fluid",alt:""}),Object(n.jsx)("div",{className:"card-title text-uppercase",children:t.nombre}),Object(n.jsxs)("p",{className:"card-text",children:["Alto: ",t.alto," | Ancho: ",t.ancho]})]})}):null},S=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.pokemones.results})),a=Object(d.c)((function(e){return e.pokemones.next})),r=Object(d.c)((function(e){return e.pokemones.previous}));return c.a.useEffect((function(){e(k())}),[e]),Object(n.jsxs)("div",{className:"row mt-5",children:[Object(n.jsxs)("div",{className:"col-md-6",children:[Object(n.jsx)("h3",{children:"lista de pokemones"}),Object(n.jsx)("ul",{className:"list-group mt-4",children:t.map((function(t){return Object(n.jsxs)("li",{className:"list-group-item text-uppercase",children:[t.name,Object(n.jsx)("button",{onClick:function(){return e(v(t.url))},className:"btn btn-dark btn-sm float-end",children:"Info"})]},t.name)}))}),Object(n.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[0===t.length&&Object(n.jsx)("button",{onClick:function(){return e(k())},className:"btn btn-dark",children:"Get Pokemones"}),a&&Object(n.jsx)("button",{onClick:function(){return e(function(){var e=Object(j.a)(p.a.mark((function e(t,a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a().pokemones.next,!localStorage.getItem(n)){e.next=5;break}return console.log("datos guardados"),t({type:m,payload:JSON.parse(localStorage.getItem(n))}),e.abrupt("return");case 5:return e.prev=5,console.log("datos de la api"),e.next=9,f.a.get(n);case 9:r=e.sent,t({type:h,payload:r.data}),localStorage.setItem(n,JSON.stringify(r.data)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(5),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t,a){return e.apply(this,arguments)}}())},className:"btn btn-dark",children:"Siguiente"}),r&&Object(n.jsx)("button",{onClick:function(){return e(function(){var e=Object(j.a)(p.a.mark((function e(t,a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a().pokemones.previous,!localStorage.getItem(n)){e.next=5;break}return console.log("datos guardados"),t({type:m,payload:JSON.parse(localStorage.getItem(n))}),e.abrupt("return");case 5:return e.prev=5,console.log("datos de la api"),e.next=9,f.a.get(n);case 9:r=e.sent,t({type:h,payload:r.data}),localStorage.setItem(n,JSON.stringify(r.data)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(5),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t,a){return e.apply(this,arguments)}}())},className:"btn btn-dark",children:"Anterior"})]})]}),Object(n.jsxs)("div",{className:"col-md-6",children:[Object(n.jsx)("h3",{children:"Detalle Pokem\xf3n"}),Object(n.jsx)(y,{})]})]})},N=a(24);a(71);N.a.initializeApp({apiKey:"AIzaSyDXyckZJwWBvHqaa7ZBoP56zhkHOqhT1CQ",authDomain:"crud-firebase-login.firebaseapp.com",projectId:"crud-firebase-login",storageBucket:"crud-firebase-login.appspot.com",messagingSenderId:"838673483005",appId:"1:838673483005:web:ed0e4e4a3fb11fb21c2a94"});var I=N.a.auth(),E={loading:!1,activo:!1},w="LOADING",_="USARIO_ERROR",J="USUARIO_EXITO",P="CERRAR_SESION";var A=a(4),C=Object(A.g)((function(e){var t=Object(d.b)(),a=Object(d.c)((function(e){return e.usuario.loading})),r=Object(d.c)((function(e){return e.usuario.activo}));return console.log(r),c.a.useEffect((function(){r&&e.history.push("/")}),[r]),Object(n.jsxs)("div",{className:"mt-5 text-center",children:[Object(n.jsx)("h3",{children:"Ingreso con Google"}),Object(n.jsx)("hr",{}),Object(n.jsx)("button",{className:"btn btn-dark",onClick:function(){return t(function(){var e=Object(j.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:w}),e.prev=1,a=new N.a.auth.GoogleAuthProvider,e.next=5,I.signInWithPopup(a);case 5:n=e.sent,t({type:J,payload:{uid:n.user.uid,email:n.user.email}}),localStorage.setItem("usuario",JSON.stringify({uid:n.user.uid,email:n.user.email})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),t({type:_});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())},disabled:a,children:"Acceder"})]})})),R=a(15),T=Object(A.g)((function(e){var t=Object(d.b)(),a=function(){t((function(e){I.signOut(),localStorage.removeItem("usuario"),e({type:P})})),e.history.push("/login")},r=Object(d.c)((function(e){return e.usuario.activo}));return Object(n.jsxs)("div",{className:"navbar navbar-dark bg-dark",children:[Object(n.jsx)(R.b,{className:"navbar-brand",to:"/",children:"APP POKE"}),Object(n.jsx)("div",{className:"d-flex",children:r?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(R.c,{className:"btn btn-dark mr-2",to:"/",exact:!0,children:"Inicio"}),Object(n.jsx)("button",{className:"btn btn-dark mr-2",onClick:function(){return a()},children:"Cerrar Sesi\xf3n"})]}):Object(n.jsx)(R.c,{className:"btn btn-dark mr-2",to:"/login",children:"Login"})})]})}));var X=function(){var e=c.a.useState(!1),t=Object(u.a)(e,2),a=t[0],r=t[1];c.a.useEffect((function(){I.onAuthStateChanged((function(e){console.log(e),r(e||null)}))}),[]);var o=function(e){var t=e.component,r=e.path,c=Object(l.a)(e,["component","path"]);return localStorage.getItem("usuario")?JSON.parse(localStorage.getItem("usuario")).uid===a.uid?(console.log("son iguales"),Object(n.jsx)(A.b,Object(i.a)({component:t,path:r},c))):(console.log("no exite"),Object(n.jsx)(A.a,Object(i.a)({to:"/login"},c))):Object(n.jsx)(A.a,Object(i.a)({to:"/login"},c))};return!1!==a?Object(n.jsx)(R.a,{children:Object(n.jsxs)("div",{className:"container mt-3",children:[Object(n.jsx)(T,{}),Object(n.jsxs)(A.d,{children:[Object(n.jsx)(o,{component:S,path:"/",exact:!0}),Object(n.jsx)(A.b,{component:C,path:"/login",exact:!0})]})]})}):Object(n.jsx)("div",{children:"Cargando..."})},D=a(16),B=a(39),G=Object(D.c)({pokemones:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:case h:return Object(i.a)(Object(i.a)({},e),t.payload);case x:return Object(i.a)(Object(i.a)({},e),{},{unPokemon:t.payload});default:return e}},usuario:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case _:return Object(i.a)({},E);case J:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,user:t.payload,activo:!0});case P:return Object(i.a)({},E);default:return Object(i.a)({},e)}}}),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.d;var U=function(){var e,t=Object(D.e)(G,K(Object(D.a)(B.a)));return e=t.dispatch,localStorage.getItem("usuario")&&e({type:J,payload:JSON.parse(localStorage.getItem("usuario"))}),t}();s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(d.a,{store:U,children:Object(n.jsx)(X,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.3c663d35.chunk.js.map