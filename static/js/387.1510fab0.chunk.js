"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{127:function(e,n,t){t.d(n,{Df:function(){return o},M1:function(){return f},Ph:function(){return p},YJ:function(){return i},kj:function(){return l}});var r=t(861),a=t(757),c=t.n(a),u=t(44);u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var s="7bdc810ad124afd40c6daedecd43d00a",o=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("/trending/movie/day?api_key=".concat(s));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("/movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("/search/movie?api_key=".concat(s,"&query=").concat(n));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("/movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("/movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()},387:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r,a,c=t(885),u=t(127),s=t(791),o=t(689),i=t(168),p=t(444),f=p.ZP.div(r||(r=(0,i.Z)(["\n  padding: 0 24px;\n"]))),l=p.ZP.ul(a||(a=(0,i.Z)(["\n  padding-right: 24px;\n"]))),v=t(184),d=function(){var e=(0,o.UO)().movieId,n=(0,s.useState)(null),t=(0,c.Z)(n,2),r=t[0],a=t[1];if((0,s.useEffect)((function(){e&&(0,u.kj)(Number(e)).then((function(e){a(e)}))}),[e]),r)return 0===r.length?(0,v.jsx)(f,{children:(0,v.jsx)("p",{children:" We don`t have any reviews for this movie."})}):(0,v.jsx)(l,{children:r.map((function(e){return(0,v.jsxs)("li",{children:[(0,v.jsxs)("h3",{children:["Author: ",e.author]}),(0,v.jsx)("p",{children:e.content})]},e.id)}))})}}}]);
//# sourceMappingURL=387.1510fab0.chunk.js.map