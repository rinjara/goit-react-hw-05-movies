"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{127:function(e,t,n){n.d(t,{Df:function(){return o},M1:function(){return l},Ph:function(){return p},YJ:function(){return i},kj:function(){return f}});var r=n(861),a=n(757),c=n.n(a),u=n(44);u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var s="7bdc810ad124afd40c6daedecd43d00a",o=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("/trending/movie/day?api_key=".concat(s));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("/search/movie?api_key=".concat(s,"&query=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},247:function(e,t,n){n.r(t);var r=n(885),a=n(127),c=n(791),u=n(689),s=n(184);t.default=function(){var e=(0,u.UO)().movieId,t=(0,c.useState)(null),n=(0,r.Z)(t,2),o=n[0],i=n[1];return(0,c.useEffect)((function(){e&&(0,a.M1)(Number(e)).then((function(e){i(e)}))}),[e]),(0,s.jsx)("div",{children:o&&(0,s.jsx)("ul",{children:o.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsx)("div",{children:null!==e.profile_path&&(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.profile_path),alt:e.original_name,width:"100"})}),(0,s.jsx)("p",{children:e.original_name}),(0,s.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})})}}}]);
//# sourceMappingURL=247.4448c465.chunk.js.map