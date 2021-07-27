(this["webpackJsonpanime-search"]=this["webpackJsonpanime-search"]||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},32:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r.n(c),a=r(3),s=r.n(a),i=(r(14),r(2)),l=(r(15),r(1));var o=function(){return Object(l.jsxs)("nav",{className:"nav",children:["Anime ",Object(l.jsx)("span",{className:"secondary",children:"Search"})]})};var u=function(e){var t=e.fetchData;return Object(l.jsx)("button",{className:"search-button",onClick:t,children:"Search"})},j=r(9),h={Action:1,Adventure:2,Cars:3,Comedy:4,Dementia:5,Demons:6,Mystery:7,Drama:8,Ecchi:9,Fantasy:10,Game:11,Historical:13,Horror:14,Kids:15,Magic:16,MartialArts:17,Mecha:18,Music:19,Parody:20,Samurai:21,Romance:22,School:23,SciFi:24,Shoujo:25,ShoujoAi:26,Shounen:27,ShounenAi:28,Space:29,Sports:30,SuperPower:31,Vampire:32,Yaoi:33,Yuri:34,Harem:35,SliceOfLife:36,Supernatural:37,Military:38,Police:39,Psychological:40,Thriller:41,Seinen:42,Josei:43},b=Object.keys(h).map((function(e){return{value:e.toLowerCase(),label:e}}));var d=function(e){var t=e.setSearchFilters,r=Object(c.useState)(""),n=Object(i.a)(r,2),a=n[0],s=n[1],o=Object(c.useState)([]),u=Object(i.a)(o,2),d=u[0],m=u[1],O=Object(c.useState)(""),f=Object(i.a)(O,2),p=f[0],v=f[1];return Object(c.useEffect)((function(){var e="";if(""!==a&&(e+="q=".concat(a)),d.length){var r=d.map((function(e){return h[e]}));""!==e&&(e+="&"),e+="genre=".concat(r.join(","))}""!==p&&(""!==e&&(e+="&"),e+="score=".concat(p,"&order_by=score&sort=descending")),t(e)}),[a,d,p]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"search-form",children:[Object(l.jsxs)("div",{className:"input-wrapper",children:[Object(l.jsx)("label",{className:"label",children:"Name:"}),Object(l.jsx)("input",{placeholder:"Type name of a show...",onChange:function(e){return s(e.target.value)},value:a})]}),Object(l.jsxs)("div",{className:"input-wrapper",children:[Object(l.jsx)("label",{className:"label",children:"Score:"}),Object(l.jsx)("input",{placeholder:"Will find shows above selected score",onChange:function(e){Number(e.target.value)&&v(e.target.value)},value:p})]}),Object(l.jsxs)("div",{className:"input-wrapper",children:[Object(l.jsx)("label",{className:"label",children:"Genres:"}),Object(l.jsx)(j.a,{isMulti:!0,name:"genres",onChange:function(e){var t=e.map((function(e){return e.label}));console.log(t),m(t)},options:b,className:"select"})]})]})})};var m=function(e){var t=e.requestTimer;return Object(l.jsxs)("div",{className:"warning",children:["You can make another request in ",t," seconds."]})};var O=function(e){var t=e.topAnime;return Object(l.jsxs)("div",{className:"top-anime",children:[Object(l.jsx)("h3",{children:"Top Anime"}),t.map((function(e){var t=e.title,r=e.score,c=e.url;return Object(l.jsxs)("a",{target:"_blank",href:c,className:"wrapper",rel:"noreferrer",children:[Object(l.jsx)("span",{children:t}),Object(l.jsx)("span",{children:r})]},e.mal_id)}))]})};var f=function(e){var t=e.fetchData,r=e.setSearchFilters,c=e.topAnime,n=e.requestTimer;return Object(l.jsxs)("div",{className:"left-panel",children:[Object(l.jsx)(d,{setSearchFilters:r}),n?Object(l.jsx)(m,{requestTimer:n}):null,Object(l.jsx)(u,{fetchData:t}),Object(l.jsx)(O,{topAnime:c})]})};var p=function(e){var t=e.result,r=t.url,c=t.airing,n=t.score,a=t.episodes,s=t.image_url,i=t.title,o=t.synopsis;return Object(l.jsx)("a",{target:"_blank",href:r,rel:"noreferrer",children:Object(l.jsxs)("div",{className:"card",style:{background:"url(".concat(s,")")},title:o,children:[Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("span",{title:i,children:i}),Object(l.jsx)("span",{className:c?"airing":"ended",title:c?"Airing":"Ended",children:"."})]}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("span",{className:"episodes",children:["Ep.: ",a]}),Object(l.jsxs)("span",{className:"score",children:["S: ",n]})]})]})})};var v=function(e){var t=e.searchResults;return Object(l.jsx)("div",{className:"card-container",children:t.map((function(e){return Object(l.jsx)(p,{result:e},e.mal_id)}))})};var x=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),r=t[0],n=t[1],a=Object(c.useState)([]),s=Object(i.a)(a,2),u=s[0],j=s[1],h=Object(c.useState)(""),b=Object(i.a)(h,2),d=b[0],m=b[1],O=Object(c.useState)(0),p=Object(i.a)(O,2),x=p[0],S=p[1],g="https://api.jikan.moe/v3/search/anime?";return Object(c.useEffect)((function(){if(x>0){console.log("test");var e=setInterval((function(){S((function(e){return e-1}))}),1e3);return function(){return clearInterval(e)}}}),[x]),Object(c.useEffect)((function(){fetch(g+"score=9&order_by=score&sort=descending&limit=5").then((function(e){return e.json()})).then((function(e){return j(e.results)})).catch((function(e){throw new Error(e)}))}),[g]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(f,{setSearchFilters:m,fetchData:function(){x>0||(fetch(g+d).then((function(e){return e.json()})).then((function(e){n(e.results)})).catch((function(e){throw new Error(e)})),S(5))},topAnime:u,requestTimer:x}),Object(l.jsx)(v,{searchResults:r})]})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.8af1ccb9.chunk.js.map