(this["webpackJsonpanime-search"]=this["webpackJsonpanime-search"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(3),r=c.n(s),i=(c(14),c(2)),l=(c(15),c(1));var o=function(){return Object(l.jsxs)("nav",{className:"nav",children:["Anime ",Object(l.jsx)("span",{className:"secondary",children:"Search"})]})};var j=function(e){var t=e.fetchData;return Object(l.jsx)("button",{className:"search-button",onClick:t,children:"Search"})},u=c(9),h={Action:1,Adventure:2,Cars:3,Comedy:4,Dementia:5,Demons:6,Mystery:7,Drama:8,Ecchi:9,Fantasy:10,Game:11,Historical:13,Horror:14,Kids:15,Magic:16,MartialArts:17,Mecha:18,Music:19,Parody:20,Samurai:21,Romance:22,School:23,SciFi:24,Shoujo:25,ShoujoAi:26,Shounen:27,ShounenAi:28,Space:29,Sports:30,SuperPower:31,Vampire:32,Yaoi:33,Yuri:34,Harem:35,SliceOfLife:36,Supernatural:37,Military:38,Police:39,Psychological:40,Thriller:41,Seinen:42,Josei:43},b=Object.keys(h).map((function(e){return{value:e.toLowerCase(),label:e}}));var d=function(e){var t=e.setSearchFilters,c=Object(a.useState)(""),n=Object(i.a)(c,2),s=n[0],r=n[1],o=Object(a.useState)([]),j=Object(i.a)(o,2),d=j[0],m=j[1],O=Object(a.useState)(""),p=Object(i.a)(O,2),f=p[0],v=p[1];return Object(a.useEffect)((function(){var e="";if(""!=s&&(e+="q=".concat(s)),d.length){var c=d.map((function(e){return h[e]}));""!=e&&(e+="&"),e+="genre=".concat(c.join(","))}""!=f&&(""!=e&&(e+="&"),e+="score=".concat(f,"&order_by=score&sort=descending")),t(e)}),[s,d,f]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"search-form",children:[Object(l.jsxs)("div",{className:"input-wrapper",children:[Object(l.jsx)("label",{className:"label",children:"Name:"}),Object(l.jsx)("input",{placeholder:"Type name of a show...",onChange:function(e){return r(e.target.value)},value:s})]}),Object(l.jsxs)("div",{className:"input-wrapper",children:[Object(l.jsx)("label",{className:"label",children:"Score:"}),Object(l.jsx)("input",{placeholder:"Will find shows above selected score",onChange:function(e){Number(e.target.value)&&v(e.target.value)},value:f})]}),Object(l.jsxs)("div",{className:"input-wrapper",children:[Object(l.jsx)("label",{className:"label",children:"Genres:"}),Object(l.jsx)(u.a,{isMulti:!0,name:"genres",onChange:function(e){var t=e.map((function(e){return e.label}));console.log(t),m(t)},options:b,className:"select"})]})]})})};var m=function(e){var t=e.topAnime;return Object(l.jsxs)("div",{className:"top-anime",children:[Object(l.jsx)("h3",{children:"Top Anime"}),t.map((function(e){var t=e.title,c=e.score,a=e.url;return Object(l.jsxs)("a",{target:"_blank",href:a,className:"wrapper",children:[Object(l.jsx)("span",{children:t}),Object(l.jsx)("span",{children:c})]})}))]})};var O=function(e){var t=e.fetchData,c=e.setSearchFilters,a=e.topAnime;return Object(l.jsxs)("div",{className:"left-panel",children:[Object(l.jsx)(d,{setSearchFilters:c}),Object(l.jsx)(j,{fetchData:t}),Object(l.jsx)(m,{topAnime:a})]})};var p=function(e){var t=e.result,c=t.url,a=t.airing,n=t.score,s=t.episodes,r=t.image_url,i=t.title,o=t.synopsis;return Object(l.jsx)("a",{target:"_blank",href:c,children:Object(l.jsxs)("div",{className:"card",style:{background:"url(".concat(r,")")},title:o,children:[Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("span",{title:i,children:i}),Object(l.jsx)("span",{className:a?"airing":"ended",title:a?"Airing":"Ended",children:"."})]}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("span",{className:"episodes",children:["Ep.: ",s]}),Object(l.jsxs)("span",{className:"score",children:["S: ",n]})]})]})})};var f=function(e){var t=e.searchResults;return Object(l.jsx)("div",{className:"card-container",children:t.map((function(e){return Object(l.jsx)(p,{result:e},e.mal_id)}))})};var v=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),r=Object(i.a)(s,2),j=r[0],u=r[1],h=Object(a.useState)(""),b=Object(i.a)(h,2),d=b[0],m=b[1],p="https://api.jikan.moe/v3/search/anime?";return Object(a.useEffect)((function(){console.log("test"),fetch(p+"score=9&order_by=score&sort=descending&limit=5").then((function(e){return e.json()})).then((function(e){return u(e.results)})).catch((function(e){throw new Error(e)}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(O,{setSearchFilters:m,fetchData:function(){fetch(p+d).then((function(e){return e.json()})).then((function(e){n(e.results)})).catch((function(e){throw new Error(e)}))},topAnime:j}),Object(l.jsx)(f,{searchResults:c})]})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e8f2e397.chunk.js.map