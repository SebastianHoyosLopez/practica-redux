(this["webpackJsonpudemy-redux-1"]=this["webpackJsonpudemy-redux-1"]||[]).push([[0],{52:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(1),r=a.n(c),o=a(28),s=a.n(o),i=(a(52),a(6)),l=a(46),u=a(26),d=a(8),b=a(10),p=a.n(b),j=a(20),m=a(27),O=a.n(m),f={count:0,next:null,previous:null,results:[]},g="OBTENER_POKEMONES_EXITO",h="SIGUIENTE_POKEMONES_EXITO",x="POKE_INFO_EXITO";var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://pokeapi.co/api/v2/pokemon/1";return function(){var t=Object(j.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!localStorage.getItem(e)){t.next=4;break}return a({type:x,payload:JSON.parse(localStorage.getItem(e))}),console.log("desde localstorage"),t.abrupt("return");case 4:return t.prev=4,console.log("desde api"),t.next=8,O.a.get(e);case 8:n=t.sent,a({type:x,payload:{nombre:n.data.name,ancho:n.data.weight,alto:n.data.height,foto:n.data.sprites.front_default}}),localStorage.setItem(e,JSON.stringify({nombre:n.data.name,ancho:n.data.weight,alto:n.data.height,foto:n.data.sprites.front_default})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e){return t.apply(this,arguments)}}()},N=function(){return function(){var e=Object(j.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("offset=0")){e.next=4;break}return console.log("datos guardados"),t({type:g,payload:JSON.parse(localStorage.getItem("offset=0"))}),e.abrupt("return");case 4:return e.prev=4,console.log("datos de la api"),e.next=8,O.a.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10");case 8:a=e.sent,t({type:g,payload:a.data}),localStorage.setItem("offset=0",JSON.stringify(a.data)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}()},y=function(){var e=Object(d.b)();r.a.useEffect((function(){e(v())}),[e]);var t=Object(d.c)((function(e){return e.pokemones.unPokemon}));return t?Object(n.jsx)("div",{className:"card mt-4 text-center",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("img",{src:t.foto,className:"img-fluid",alt:""}),Object(n.jsx)("div",{className:"card-title text-uppercase",children:t.nombre}),Object(n.jsxs)("p",{className:"card-text",children:["Alto: ",t.alto," | Ancho: ",t.ancho]})]})}):null},k=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.pokemones.results})),a=Object(d.c)((function(e){return e.pokemones.next})),c=Object(d.c)((function(e){return e.pokemones.previous}));return r.a.useEffect((function(){e(N())}),[e]),Object(n.jsxs)("div",{className:"row mt-5",children:[Object(n.jsxs)("div",{className:"col-md-6",children:[Object(n.jsx)("h3",{children:"lista de pokemones"}),Object(n.jsx)("ul",{className:"list-group mt-4",children:t.map((function(t){return Object(n.jsxs)("li",{className:"list-group-item text-uppercase",children:[t.name,Object(n.jsx)("button",{onClick:function(){return e(v(t.url))},className:"btn btn-dark btn-sm float-end",children:"Info"})]},t.name)}))}),Object(n.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[0===t.length&&Object(n.jsx)("button",{onClick:function(){return e(N())},className:"btn btn-dark",children:"Get Pokemones"}),a&&Object(n.jsx)("button",{onClick:function(){return e(function(){var e=Object(j.a)(p.a.mark((function e(t,a){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a().pokemones.next,!localStorage.getItem(n)){e.next=5;break}return console.log("datos guardados"),t({type:g,payload:JSON.parse(localStorage.getItem(n))}),e.abrupt("return");case 5:return e.prev=5,console.log("datos de la api"),e.next=9,O.a.get(n);case 9:c=e.sent,t({type:h,payload:c.data}),localStorage.setItem(n,JSON.stringify(c.data)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(5),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t,a){return e.apply(this,arguments)}}())},className:"btn btn-dark",children:"Siguiente"}),c&&Object(n.jsx)("button",{onClick:function(){return e(function(){var e=Object(j.a)(p.a.mark((function e(t,a){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a().pokemones.previous,!localStorage.getItem(n)){e.next=5;break}return console.log("datos guardados"),t({type:g,payload:JSON.parse(localStorage.getItem(n))}),e.abrupt("return");case 5:return e.prev=5,console.log("datos de la api"),e.next=9,O.a.get(n);case 9:c=e.sent,t({type:h,payload:c.data}),localStorage.setItem(n,JSON.stringify(c.data)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(5),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t,a){return e.apply(this,arguments)}}())},className:"btn btn-dark",children:"Anterior"})]})]}),Object(n.jsxs)("div",{className:"col-md-6",children:[Object(n.jsx)("h3",{children:"Detalle Pokem\xf3n"}),Object(n.jsx)(y,{})]})]})},S=a(23);a(75),a(79),a(80);S.a.initializeApp({apiKey:"AIzaSyDXyckZJwWBvHqaa7ZBoP56zhkHOqhT1CQ",authDomain:"crud-firebase-login.firebaseapp.com",projectId:"crud-firebase-login",storageBucket:"crud-firebase-login.appspot.com",messagingSenderId:"838673483005",appId:"1:838673483005:web:ed0e4e4a3fb11fb21c2a94"});var I=S.a.auth(),E=S.a.firestore(),w=(S.a.storage(),{loading:!1,activo:!1}),_="LOADING",J="USARIO_ERROR",C="USUARIO_EXITO",P="CERRAR_SESION";var A=a(7),R=Object(A.g)((function(e){var t=Object(d.b)(),a=Object(d.c)((function(e){return e.usuario.loading})),c=Object(d.c)((function(e){return e.usuario.activo}));return console.log(c),r.a.useEffect((function(){c&&e.history.push("/")}),[c,e.history]),Object(n.jsxs)("div",{className:"mt-5 text-center",children:[Object(n.jsx)("h3",{children:"Ingreso con Google"}),Object(n.jsx)("hr",{}),Object(n.jsx)("button",{className:"btn btn-dark",onClick:function(){return t(function(){var e=Object(j.a)(p.a.mark((function e(t){var a,n,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:_}),e.prev=1,a=new S.a.auth.GoogleAuthProvider,e.next=5,I.signInWithPopup(a);case 5:return n=e.sent,console.log(n.user),c={uid:n.user.uid,email:n.user.email,displayName:n.user.displayName,photoURL:n.user.photoURL},e.next=10,E.collection("usuarios").doc(c.email).get();case 10:if(r=e.sent,console.log(r),!r.exists){e.next=17;break}t({type:C,payload:r.data()}),localStorage.setItem("usuario",JSON.stringify(r.data())),e.next=21;break;case 17:return e.next=19,E.collection("usuarios").doc(c.email).set(c);case 19:t({type:C,payload:c}),localStorage.setItem("usuario",JSON.stringify(c));case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(1),console.log(e.t0),t({type:J});case 27:case"end":return e.stop()}}),e,null,[[1,23]])})));return function(t){return e.apply(this,arguments)}}())},disabled:a,children:"Acceder"})]})})),T=a(18),U=Object(A.g)((function(e){var t=Object(d.b)(),a=function(){t((function(e){I.signOut(),localStorage.removeItem("usuario"),e({type:P})})),e.history.push("/login")},c=Object(d.c)((function(e){return e.usuario.activo}));return Object(n.jsxs)("div",{className:"navbar navbar-dark bg-dark",children:[Object(n.jsx)(T.b,{className:"navbar-brand",to:"/",children:"APP POKE"}),Object(n.jsx)("div",{className:"d-flex",children:c?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(T.c,{className:"btn btn-dark mr-2",to:"/",exact:!0,children:"Inicio"}),Object(n.jsx)(T.c,{className:"btn btn-dark mr-2",to:"/perfil",exact:!0,children:"Perfil"}),Object(n.jsx)("button",{className:"btn btn-dark mr-2",onClick:function(){return a()},children:"Cerrar Sesi\xf3n"})]}):Object(n.jsx)(T.c,{className:"btn btn-dark mr-2",to:"/login",children:"Login"})})]})})),L=function(){var e=Object(d.c)((function(e){return e.usuario.user})),t=Object(d.c)((function(e){return e.usuario.loading})),a=r.a.useState(e.displayName),c=Object(u.a)(a,2),o=c[0],s=c[1],l=r.a.useState(!1),b=Object(u.a)(l,2),m=b[0],O=b[1],f=Object(d.b)(),g=function(){var e;o.trim()?(f((e=o,function(){var t=Object(j.a)(p.a.mark((function t(a,n){var c,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:_}),c=n().usuario.user,console.log(c),t.prev=3,t.next=6,E.collection("usuarios").doc(c.email).update({displayName:e});case 6:r=Object(i.a)(Object(i.a)({},c),{},{displayName:e}),a({type:C,payload:r}),localStorage.setItem("usuario",JSON.stringify(r)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e,a){return t.apply(this,arguments)}}())),O(!1)):console.log("Nombre Vac\xedo")};return Object(n.jsx)("div",{className:"mt-5 text-center",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("img",{src:e.photoURL,width:"100px",className:"img-fluid",alt:""}),Object(n.jsxs)("h5",{className:"card-title",children:["Nombre: ",e.displayName]}),Object(n.jsxs)("p",{className:"card-text",children:["Email: ",e.email]}),Object(n.jsx)("button",{className:"btn btn-dark",onClick:function(){return O(!0)},children:"Editar Nombre"})]}),t&&Object(n.jsx)("div",{className:"cardbody",children:Object(n.jsx)("div",{className:"d-flex justify-content-center my-3",children:Object(n.jsx)("div",{className:"spinner-grow text-dark",role:"status",children:Object(n.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}),m&&Object(n.jsx)("div",{className:"card-dody",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{className:"col-md-5",children:Object(n.jsxs)("div",{className:"input-group mb-3",children:[Object(n.jsx)("input",{type:"text",className:"form-control",value:o,onChange:function(e){return s(e.target.value)}}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"btn btn-dark",type:"button",onClick:function(){return g()},children:"Actualizar"})})]})})})})]})})};var X=function(){var e=r.a.useState(!1),t=Object(u.a)(e,2),a=t[0],c=t[1];r.a.useEffect((function(){I.onAuthStateChanged((function(e){console.log(e),c(e||null)}))}),[]);var o=function(e){var t=e.component,c=e.path,r=Object(l.a)(e,["component","path"]);return localStorage.getItem("usuario")?JSON.parse(localStorage.getItem("usuario")).uid===a.uid?(console.log("son iguales"),Object(n.jsx)(A.b,Object(i.a)({component:t,path:c},r))):(console.log("no exite"),Object(n.jsx)(A.a,Object(i.a)({to:"/login"},r))):Object(n.jsx)(A.a,Object(i.a)({to:"/login"},r))};return!1!==a?Object(n.jsx)(T.a,{children:Object(n.jsxs)("div",{className:"container mt-3",children:[Object(n.jsx)(U,{}),Object(n.jsxs)(A.d,{children:[Object(n.jsx)(o,{component:k,path:"/",exact:!0}),Object(n.jsx)(o,{component:L,path:"/perfil",exact:!0}),Object(n.jsx)(A.b,{component:R,path:"/login",exact:!0})]})]})}):Object(n.jsx)("div",{children:"Cargando..."})},D=a(21),B=a(45),G=Object(D.c)({pokemones:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:case h:return Object(i.a)(Object(i.a)({},e),t.payload);case x:return Object(i.a)(Object(i.a)({},e),{},{unPokemon:t.payload});default:return e}},usuario:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case J:return Object(i.a)({},w);case C:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,user:t.payload,activo:!0});case P:return Object(i.a)({},w);default:return Object(i.a)({},e)}}}),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.d;var z=function(){var e,t=Object(D.e)(G,K(Object(D.a)(B.a)));return e=t.dispatch,localStorage.getItem("usuario")&&e({type:C,payload:JSON.parse(localStorage.getItem("usuario"))}),t}();s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(d.a,{store:z,children:Object(n.jsx)(X,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.61b00243.chunk.js.map