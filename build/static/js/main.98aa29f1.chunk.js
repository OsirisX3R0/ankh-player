(this["webpackJsonpankh-player"]=this["webpackJsonpankh-player"]||[]).push([[0],{32:function(e,n,t){e.exports=t(62)},37:function(e,n,t){},62:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(27),o=t.n(l),c=t(30),i=t(4);var u=function(){return r.a.createElement("header",null,r.a.createElement("h3",null,"Ankh"))},s=(t(37),t(12)),f=t(31),m=t(14),d=t.n(m),h={getFolders:function(e){return d.a.get("".concat("http://localhost:8080/","api/folders?path=").concat(e))},scanLibrary:function(e){return d.a.post("".concat("http://localhost:8080/","api/build"),{songs:e})}},g=function(e){return[JSON.parse(localStorage.getItem(e)),function(n){return localStorage.setItem(e,JSON.stringify(n))}]},p=function(){var e=g("songs"),n=Object(s.a)(e,2);n[0],n[1];return r.a.createElement("div",{className:"folder-select"},r.a.createElement("h3",null,"Select Folders"),r.a.createElement("label",{className:"custom-input",htmlFor:"select-folders"},"Select Files"),r.a.createElement("input",{type:"file",className:"file-input",id:"select-folders",onChange:function(e){if(e.target.files.length>0){var n=Object(f.a)(e.target.files).filter((function(e){return e.type.includes("audio")})).map((function(e){return e.webkitRelativePath}));h.scanLibrary(n)}},webkitdirectory:"true",directory:"true",multiple:!0}))},E=function(){return r.a.createElement("div",null,"Now Playing")},v=function(){return r.a.createElement(a.Fragment,null)},b=function(e){var n=e.albums;return r.a.createElement(a.Fragment,null,function(){if(n)return n.map((function(e,n){return r.a.createElement(v,{key:n,album:e})}))}())},w=t(6),y=function(){var e,n=g("songs"),t=Object(s.a)(n,2),l=t[0];t[1];return r.a.createElement(a.Fragment,null,r.a.createElement(w.d,null,r.a.createElement(w.c,null,(e=r.a.createElement(b,null),l?e:r.a.createElement(p,null))),r.a.createElement(w.c,null,"Artists"),r.a.createElement(w.c,null,"Songs"),r.a.createElement(w.c,null,"Playlists"),r.a.createElement(w.b,null,r.a.createElement(w.a,null,"Albums"),r.a.createElement(w.a,null,"Artists"),r.a.createElement(w.a,null,"Songs"),r.a.createElement(w.a,null,"Playlists"))),r.a.createElement(E,null))},k=function(){return r.a.createElement(a.Fragment,null)};var S=function(){return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(i.a,{exact:!0,from:"/",to:"/library"}),r.a.createElement(i.b,{exact:!0,path:"/library",component:y}),r.a.createElement(i.b,{exact:!0,path:"/player",component:k}))},A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(c.a,null,r.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");A?(!function(e,n){fetch(e).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):F(n,e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.98aa29f1.chunk.js.map