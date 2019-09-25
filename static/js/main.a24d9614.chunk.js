(window["webpackJsonpbook-search"]=window["webpackJsonpbook-search"]||[]).push([[0],{129:function(e,t,n){e.exports=n(276)},276:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(31),c=n.n(o),l=n(22),u=(n(137),n(24)),i=n.n(u),s=n(74),m=n.n(s),p=function(){return r.a.createElement(i.a,null,r.a.createElement(m.a,{expand:"lg",variant:"light",bg:"light"},r.a.createElement(m.a.Brand,{href:"#"},"Book Finder")))},b=n(53),E=n(118),d=n(125),f=n(119),h=n(127),k="SEARCH_BOOKS_SAGA",O=function(e){return{type:"SEARCH_BOOKS_REDUCER",payload:e}},v=n(282),w=n(281),y=n(42),g=n.n(y),j=n(121),S=n.n(j),x=n(75),B=n.n(x),L=n(35),D=n.n(L),_=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).onSubmit=function(e){var t=e.bookSearch;n.props.searchBooksSaga(t)},n.renderSearchInput=function(e){var t=e.input;return r.a.createElement(g.a.Group,{controlId:"formBasicEmail"},r.a.createElement(B.a,null,r.a.createElement(D.a,{md:2},r.a.createElement(g.a.Label,null,"Enter book name")),r.a.createElement(D.a,{md:10},r.a.createElement(g.a.Control,{type:"text",placeholder:"Enter book name",onChange:t.onChange,value:t.value}))))},n}return Object(h.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.handleSubmit;return r.a.createElement(i.a,null,r.a.createElement(g.a,{onSubmit:e(this.onSubmit),style:{marginTop:"30px",marginBottom:"30px"}},r.a.createElement(B.a,null,r.a.createElement(D.a,{md:10},r.a.createElement(v.a,{name:"bookSearch",component:this.renderSearchInput})),r.a.createElement(D.a,{md:2},r.a.createElement(S.a,{variant:"primary",type:"submit"},"Search")))))}}]),t}(r.a.Component),R=Object(w.a)({form:"SearchForm"})(_),C=Object(l.b)(null,{searchBooksSaga:function(e){return{type:k,query:e}}})(R),P=n(78),A=n.n(P),I=function(e){var t=e.book,n=t.volumeInfo,a=t.accessInfo,o=t.saleInfo,c=n.title,l=n.authors,u=n.imageLinks,i=a.epub,s=a.pdf,m=a.webReaderLink,p=o.buyLink;return r.a.createElement(A.a,{style:{marginBottom:"20px"}},r.a.createElement("img",{className:"mr-3",src:u.thumbnail?u.thumbnail:"",alt:"book cover photo"}),r.a.createElement(A.a.Body,null,r.a.createElement("h5",null,c),r.a.createElement("p",null," by",l?l.map((function(e){return r.a.createElement("span",{key:e}," ",e)})):r.a.createElement("span",null," unknown author")),r.a.createElement("div",{className:"download-links"},i.isAvailable?s.downloadLink?r.a.createElement("div",null,r.a.createElement("a",{href:i.downloadLink},"Download epub")):r.a.createElement("div",null,r.a.createElement("a",{href:i.acsTokenLink},"Download epub")):null,s.isAvailable?s.downloadLink?r.a.createElement("div",null,r.a.createElement("a",{href:s.downloadLink},"Download pdf")):r.a.createElement("div",null,r.a.createElement("a",{href:s.acsTokenLink},"Download pdf")):null,m?r.a.createElement("div",null,r.a.createElement("a",{href:m},"Read Online")):null,p?r.a.createElement("div",null,r.a.createElement("a",{href:p},"Buy Now")):null)))},N=Object(l.b)((function(e){return{booksList:e.books.books}}))((function(e){var t=e.booksList;return r.a.createElement(i.a,null,t&&t.length>0?t.map((function(e){return r.a.createElement(I,{key:e.id,book:e})})):r.a.createElement("p",{style:{color:"lightgrey"}},"no books to show"))})),K=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(C,null),r.a.createElement(N,null)))},T=n(10),q=n(126),J=n(283),F=n(122);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach((function(t){Object(F.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=Object(T.c)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_BOOKS_REDUCER":return U({},e,{books:t.payload});default:return e}},form:J.a}),z=n(18),G=n.n(z),M=n(28),V=n(123),Q=n(124),W=n.n(Q),Y=function e(){Object(b.a)(this,e)};Y.searchBooks=function(){var e=Object(V.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("".concat("https://www.googleapis.com/books/v1/volumes","?q=").concat(t,"&key=").concat("AIzaSyDxxPFogL4JlqK0NRzt3X0t7lpMJ6LKpjk"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var Z=G.a.mark(ee),$=G.a.mark(te);function ee(e){var t,n,a;return G.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.query,r.next=3,Object(M.b)(Y.searchBooks,t);case 3:return n=r.sent,console.log("saga response ",n),a=n?n.data.items:[],r.next=8,Object(M.c)(O(a));case 8:case"end":return r.stop()}}),Z)}function te(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.d)(k,ee);case 2:case"end":return e.stop()}}),$)}var ne=G.a.mark(ae);function ae(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)([te()]);case 2:case"end":return e.stop()}}),ne)}var re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d,oe=Object(q.a)(),ce=Object(T.e)(X,re(Object(T.a)(oe)));oe.run(ae);var le=ce;c.a.render(r.a.createElement(l.a,{store:le},r.a.createElement(K,null)),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.a24d9614.chunk.js.map