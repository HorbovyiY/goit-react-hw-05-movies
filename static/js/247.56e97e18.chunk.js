"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(n,t,c){c.r(t);var e=c(439),r=c(689),o=c(791),i=c(868),a=c(184);t.default=function(){var n=(0,r.UO)().id,t=(0,o.useState)(""),c=(0,e.Z)(t,2),u=c[0],f=c[1];return(0,o.useEffect)((function(){i.NI(n).then((function(n){return n.json()})).then((function(n){f(n)})).catch((function(n){return console.log(n)}))}),[]),(0,a.jsx)("div",{children:""!==u&&(0,a.jsx)("ul",{children:u.cast.map((function(n){return(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(n.profile_path),alt:n.name}),(0,a.jsx)("p",{children:n.name}),(0,a.jsx)("span",{children:n.character}),(0,a.jsx)("hr",{})]},n.id)}))})})}},868:function(n,t,c){c.d(t,{BQ:function(){return u},NI:function(){return a},QE:function(){return f},Rg:function(){return i},Uc:function(){return o}});var e="https://api.themoviedb.org/3/",r="81b825b8414e187e449b2c712f701899",o=function(){return fetch("".concat(e,"trending/movie/day?api_key=").concat(r))},i=function(n){return fetch("".concat(e,"movie/").concat(n,"?api_key=").concat(r))},a=function(n){return fetch("".concat(e,"movie/").concat(n,"/credits?api_key=").concat(r))},u=function(n){return fetch("".concat(e,"movie/").concat(n,"/reviews?api_key=").concat(r))},f=function(n){return fetch("".concat(e,"search/movie?api_key=").concat(r,"&query=").concat(n))}}}]);
//# sourceMappingURL=247.56e97e18.chunk.js.map