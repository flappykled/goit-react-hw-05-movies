"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[312],{312:function(n,t,r){r.r(t),r.d(t,{default:function(){return f}});var e,a=r(439),u=r(791),s=r(689),c=r(168),i=r(444).ZP.ul(e||(e=(0,c.Z)(["\n  p {\n    margin-left: 10px;\n    margin-bottom: 20px;\n    color: black;\n  }\n\n  span {\n    font-weight: bold;\n  }\n"]))),o=r(565),p=r(184),f=function(){var n=(0,u.useState)([]),t=(0,a.Z)(n,2),r=t[0],e=t[1],c=(0,s.UO)().moviesId;return(0,u.useEffect)((function(){""!==c&&(0,o.Hx)(c).then(e)}),[c]),(0,p.jsx)(p.Fragment,{children:0===r.length?(0,p.jsx)("p",{children:"We don't have any reviews for this movie. "}):r.map((function(n){var t=n.id,r=n.content,e=n.author;return(0,p.jsxs)(i,{children:[(0,p.jsx)("li",{children:(0,p.jsxs)("p",{children:["author: ",(0,p.jsx)("span",{children:e})]})}),(0,p.jsx)("li",{children:(0,p.jsx)("p",{children:r})})]},t)}))})}},565:function(n,t,r){r.d(t,{$L:function(){return i},Hx:function(){return m},Sg:function(){return p},XG:function(){return h},xc:function(){return d}});var e=r(861),a=r(757),u=r.n(a),s=r(243),c="2fdffbc73ca59cbf450fa0d66de3e7b7";function i(){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("/trending/all/day",{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("/movie/".concat(t),{params:{api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("/search/movie",{params:{api_key:c,page:1,query:t}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("/movie/".concat(t,"/credits"),{params:{api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("/movie/".concat(t,"/reviews"),{params:{api_key:c,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=312.289baa45.chunk.js.map