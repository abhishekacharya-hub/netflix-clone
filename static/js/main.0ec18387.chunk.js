(this["webpackJsonpnetflix-like"]=this["webpackJsonpnetflix-like"]||[]).push([[0],{22:function(e,t,n){e.exports=n(65)},27:function(e,t,n){},28:function(e,t,n){},47:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=(n(27),n(28),"b1711f35ef1165c239e88da7934667be"),l={fetchNetflixOriginals:"/discover/tv?api_key=".concat(i,"&with_networks=213"),fetchTrending:"/trending/all/day?api_key=".concat(i),fetchTopRated:"/movie/top_rated?api_key=".concat(i,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(i,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(i,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(i,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(i,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(i,"&with_genres=99")},s=n(4),u=n.n(s),m=n(5),f=n(3),v=n(17),d=n.n(v).a.create({baseURL:"https://api.themoviedb.org/3"}),h=(n(47),n(18)),p=n(21),g=n.n(p);var b=function(e){var t=e.title,n=e.fetchUrl,c=e.isLargeRow,o=Object(a.useState)([]),i=Object(f.a)(o,2),l=i[0],s=i[1],v=Object(a.useState)(""),p=Object(f.a)(v,2),b=p[0],w=p[1];return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(n);case 2:return t=e.sent,s(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"row_posters"},l.map((function(e){return r.a.createElement("img",{key:e.id,onClick:function(){return function(e){b?w(""):g()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);w(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row_poster ".concat(c&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(c?e.poster_path:e.backdrop_path),alt:e.name})}))),b&&r.a.createElement(h.a,{videoId:b,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))};n(63);var w=function(){var e,t,n=Object(a.useState)([]),c=Object(f.a)(n,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(l.fetchNetflixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(null===o||void 0===o?void 0:o.backdrop_path,")"),backgroundPosition:"center center"}}," ",r.a.createElement("div",{className:"banner_contents"},r.a.createElement("h1",{className:"banner_title"},(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)),r.a.createElement("div",{className:"banner_buttons"},r.a.createElement("button",{className:"banner_button"},"Play"),r.a.createElement("button",{className:"banner_button"},"My List")),r.a.createElement("h1",{className:"banner_description"},(e=null===o||void 0===o?void 0:o.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),r.a.createElement("div",{className:"banner-fadeBottom"})," ")};n(64);var E=function(){var e=Object(a.useState)(!1),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?c(!0):c(!1)})),function(){window.removeEventListener("scroll")}}),[]),r.a.createElement("div",{className:"nav ".concat(n&&"nav_black")},r.a.createElement("img",{className:"nav_logo",src:"./images/Netflix-logo.png",alt:"Netflix logo"}))};var _=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(E,null),r.a.createElement(w,null),r.a.createElement(b,{isLargeRow:!0,title:"NETFLIX ORIGINALS",fetchUrl:l.fetchNetflixOriginals}),r.a.createElement(b,{title:"Trending Now",fetchUrl:l.fetchTrending}),r.a.createElement(b,{title:"Top Rated",fetchUrl:l.fetchTopRated}),r.a.createElement(b,{title:"Action Movies",fetchUrl:l.fetchActionMovies}),r.a.createElement(b,{title:"Comedy Movies",fetchUrl:l.fetchComedyMovies}),r.a.createElement(b,{title:"Horror Movies",fetchUrl:l.fetchHorrorMovies}),r.a.createElement(b,{title:"Romance Movies",fetchUrl:l.fetchRomanceMovies}),r.a.createElement(b,{title:"Documentaries",fetchUrl:l.fetchDocumentaries}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.0ec18387.chunk.js.map