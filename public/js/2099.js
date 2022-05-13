"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2099],{37840:(e,t,r)=>{r.d(t,{Z:()=>U});var n=r(67294),o=r(73727),a=r(87462),i=r(63366),s=r(45697),c=r.n(s),l=r(94184),u=r.n(l),d=r(23663),p=["className","cssModule","active","tag"],f={tag:d.iC,active:c().bool,className:c().string,cssModule:c().object},h=function(e){var t=e.className,r=e.cssModule,o=e.active,s=e.tag,c=(0,i.Z)(e,p),l=(0,d.mx)(u()(t,!!o&&"active","breadcrumb-item"),r);return n.createElement(s,(0,a.Z)({},c,{className:l,"aria-current":o?"page":void 0}))};h.propTypes=f,h.defaultProps={tag:"li"};const b=h;var m=["className","listClassName","cssModule","children","tag","listTag","aria-label"],y={tag:d.iC,listTag:d.iC,className:c().string,listClassName:c().string,cssModule:c().object,children:c().node,"aria-label":c().string},g=function(e){var t=e.className,r=e.listClassName,o=e.cssModule,s=e.children,c=e.tag,l=e.listTag,p=e["aria-label"],f=(0,i.Z)(e,m),h=(0,d.mx)(u()(t),o),b=(0,d.mx)(u()("breadcrumb",r),o);return n.createElement(c,(0,a.Z)({},f,{className:h,"aria-label":p}),n.createElement(l,{className:b},s))};g.propTypes=y,g.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};const x=g;var v=r(14416),j=r(85893);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=E(e);if(t){var o=E(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Z(this,r)}}function Z(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(i,e);var t,r,n,a=S(i);function i(){return P(this,i),a.apply(this,arguments)}return t=i,(r=[{key:"render",value:function(){var e=this.props,t=e.items,r=e.main,n=e.icon,a=e.content.cms.pages.general.home,i=e.dark,s=void 0!==i&&i,c=null;return t&&(c=t.map((function(e,t){return(0,j.jsx)(b,{children:(0,j.jsx)(o.OL,{className:"text-border",to:e.to,children:e.content})},t)}))),(0,j.jsxs)(x,{className:"d-none d-sm-flex align-items-center",color:s?"light":"secondary",listClassName:"bg-transparent rounded-0 justify-content-end",style:{top:"50%",right:0,transform:"translateY(-10px)",position:"absolute",zIndex:1e3},children:[(0,j.jsx)(b,{children:(0,j.jsxs)(o.OL,{className:"text-green text-decoration-none",to:"/",children:[n&&(0,j.jsx)("i",{className:"fas fa-"+n+" mr-1"}),(0,j.jsx)("span",{className:"text-500 text-green-50",children:a})]})}),c,(0,j.jsx)(b,{color:"green",className:"text-decoration-none",active:!0,children:r})]})}}])&&k(t.prototype,r),n&&k(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.Component);const U=(0,v.$j)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)}))(T)},40342:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(67294),o=r(45046),a=r(32701),i=r(10684),s=r(97975),c=r(51436),l=r(92814),u=r(85893);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const f=function(e){var t=e.deleteAction,r=e.className,p=void 0===r?"":r,f=e.children,h=d((0,n.useState)(!1),2),b=h[0],m=h[1],y=function(){return m(!b)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{style:{cursor:"pointer"},onClick:y,children:f}),(0,u.jsxs)(o.Z,{isOpen:b,toggle:y,centered:!0,className:p,children:[(0,u.jsx)(a.Z,{toggle:y,children:"Delete item"}),(0,u.jsxs)(i.Z,{className:"text-center",children:[(0,u.jsx)("p",{children:"Are you sure you want to delete this item?"}),(0,u.jsxs)("div",{children:[(0,u.jsxs)(s.Z,{color:"danger",onClick:function(){y(),t()},children:["Delete ",(0,u.jsx)(l.G,{icon:c.$aW,fixedWidth:!0})]})," ",(0,u.jsxs)(s.Z,{color:"secondary",onClick:y,children:["Close ",(0,u.jsx)(l.G,{icon:c.NBC,fixedWidth:!0})]})]})]})]})]})}},17610:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(87757),o=r.n(n),a=r(67294),i=r(14416),s=r(609),c=r(57472),l=r(91592),u=r(42365),d=r(36595),p=r(92814),f=r(51436),h=r(73727),b=r(92903),m=r(93379),y=r.n(m),g=r(77579),x={insert:"head",singleton:!1};y()(g.Z,x);g.Z.locals;var v,j=r(85893);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}function P(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){N(a,n,o,i,s,"next",e)}function s(e){N(a,n,o,i,s,"throw",e)}i(void 0)}))}}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=U(e);if(t){var o=U(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return E(this,r)}}function E(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(i,e);var t,r,n,a=Z(i);function i(){var e;k(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return D(T(e=a.call.apply(a,[this].concat(r))),"state",{show:10,search:"",page:1,pageNumber:1,pageFirst:1,pageSecond:2,pageLast:3}),D(T(e),"inputChangedHandler",(function(t){var r=t.target,n=r.name,o=r.value,a=e.state,i=a.page,s=a.show,c=a.search;return e.firstPageHandler(),"show"===n?(e.props.get(i,o,c),e.setState({show:o})):"search"===n?(v&&clearTimeout(v),v=setTimeout((function(){e.props.get(i,s,o),clearTimeout(v)}),1e3),e.setState({search:o})):void 0})),D(T(e),"previousPageHandler",(function(){var t=e.state.page;t<=1||e.pageChangeHandler(t-1)})),D(T(e),"nextPageHandler",(function(){var t=e.state,r=t.page;r>=t.pageNumber||e.pageChangeHandler(r+1)})),D(T(e),"firstPageHandler",(function(){e.state.page<=1||e.pageChangeHandler(1)})),D(T(e),"lastPageHandler",(function(){var t=e.state,r=t.page,n=t.pageNumber;r>=n||e.pageChangeHandler(n)})),D(T(e),"pageChangeHandler",(function(t){var r,n=e.state,o=n.show,a=n.search,i=n.pageNumber,s=(r=t<3?1:t===i?i-2:t-1)+1,c=r+2;e.setState({page:t,pageFirst:r,pageSecond:s,pageLast:c},(function(){return e.props.get(t,o,a)}))})),D(T(e),"onClick",(function(t){t.preventDefault();var r=t.target.href;e.exportData(r)})),D(T(e),"exportData",function(){var t=P(o().mark((function t(r){var n,a,i,s,c,l,u,d,p,f,h;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props,a=n.data,i=n.title,s=r.split("/")[r.split("/").length-1],c=i+"."+s,l=localStorage.getItem("token"),t.prev=4,(u=new FormData).append("data",a),u.append("name",c),t.next=10,fetch(r,{method:"POST",mode:"cors",body:u,headers:{Authorization:l}});case 10:return d=t.sent,t.next=13,d.blob();case 13:p=t.sent,f=URL.createObjectURL(p),(h=document.createElement("a")).style.display="none",h.href=f,h.download=c,document.body.appendChild(h),h.click(),window.URL.revokeObjectURL(f),t.next=27;break;case 24:t.prev=24,t.t0=t.catch(4),console.log(t.t0);case 27:case"end":return t.stop()}}),t,null,[[4,24]])})));return function(e){return t.apply(this,arguments)}}()),e}return t=i,(r=[{key:"componentDidUpdate",value:function(e,t){var r=this.props.total,n=this.state.show;e.total===r&&t.show===n||this.setState({pageNumber:Math.ceil(r/n)})}},{key:"render",value:function(){var e=this,t=this.props,r=t.fields,n=t.array,o=t.loading,a=void 0!==o&&o,i=t.total,m=void 0===i?0:i,y=t.limit,g=t.bordered,x=t.title,v=t.subtitle,O=t.add,w=t.link,N=t.dark,P=void 0!==N&&N,k=t.borderless,C=t.outerClassName,S=void 0===C?"":C,Z=t.select,E=t.children,T=t.selectHandler,U=t.content.cms.pages.components.list,D=this.state,I=D.show,_=D.search,A=D.page,R=D.pageFirst,L=D.pageSecond,H=D.pageLast,M=D.pageNumber,z=r.map((function(e){var t=e.name,r=e.fixed;return(0,j.jsx)("th",{className:"text-nowrap",style:r?{position:"sticky",right:0}:{},children:t},t)}));z.unshift((0,j.jsx)("th",{className:"text-center align-middle",children:U.sl},"#")),Z&&z.unshift((0,j.jsx)("th",{className:"align-middle text-center",children:(0,j.jsx)("input",{type:"checkbox",onClick:T,className:"select_all"})},"select_all"));var F=n.map((function(e,t){if(y&&t>=y)return null;var n=[(0,j.jsx)("th",{className:"text-center align-middle",children:("All"===I?0:(A-1)*I)+t+1},"primary"+t)];return Z&&n.unshift((0,j.jsx)("th",{className:"text-center align-middle",children:(0,j.jsx)("input",{type:"checkbox",value:e._id})},"secondary"+t)),r.forEach((function(t){var r=t.key,o=t.minWidth,a=t.fixed;n.push((0,j.jsx)("td",{className:"align-middle text-truncate",style:(0,b.v4)({minWidth:o,maxWidth:250,borderColor:P?"#606060":"#DEE2E6"},a?{position:"sticky",right:0,backgroundColor:P?"#1B223F":"#F4F4F4"}:{}),children:e[r]},r))})),(0,j.jsx)("tr",{className:"align-middle",children:n},t+1)})),W=m%I,G=0===m?m:0!==W?W:I;return(0,j.jsxs)("div",{className:"UI List shadow "+S,children:[(0,j.jsx)("input",{type:"hidden",id:"table-show",value:I}),(0,j.jsx)("input",{type:"hidden",id:"table-page",value:A}),(0,j.jsx)("input",{type:"hidden",id:"table-search",value:_}),(0,j.jsxs)("div",{className:"header",children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{className:"title",children:x}),(0,j.jsx)("div",{className:"subtitle",children:v}),(0,j.jsx)("div",{className:"green-line"})]}),(0,j.jsxs)("div",{className:"show",children:[(0,j.jsx)("div",{className:"text",children:U.show}),(0,j.jsxs)(s.Z,{type:"select",name:"show",onChange:this.inputChangedHandler,className:"select",children:[(0,j.jsx)("option",{value:"10",children:"10"}),(0,j.jsx)("option",{value:"25",children:"25"}),(0,j.jsx)("option",{value:"50",children:"50"}),(0,j.jsx)("option",{value:"100",children:"100"}),(0,j.jsx)("option",{value:"All",children:U.all})]})]}),(0,j.jsxs)(c.Z,{className:"export",children:[(0,j.jsxs)(l.Z,{color:"green",caret:!0,children:[(0,j.jsx)("i",{className:"fas fa-file-export"}),"Export"]}),(0,j.jsxs)(u.Z,{children:[(0,j.jsxs)("a",{href:"/api/export/xlsx",onClick:this.onClick,className:"dropdown-item",children:[(0,j.jsx)("i",{className:"fas fa-file-excel"}),U.excel]}),(0,j.jsxs)("a",{href:"/api/export/pdf",onClick:this.onClick,className:"dropdown-item",children:[(0,j.jsx)("i",{className:"fas fa-file-pdf"}),U.pdf]}),(0,j.jsxs)("a",{href:"/api/export/csv",onClick:this.onClick,className:"dropdown-item",children:[(0,j.jsx)("i",{className:"fas fa-file-csv"}),U.csv]}),(0,j.jsxs)("a",{href:"/api/export/pdf",onClick:this.onClick,className:"dropdown-item",children:[(0,j.jsx)("i",{className:"fas fa-print"}),U.print]})]})]}),(0,j.jsx)("div",{className:"search",children:(0,j.jsx)(s.Z,{type:"search",name:"search",onChange:this.inputChangedHandler,placeholder:"".concat(U.search,"...")})}),O&&(0,j.jsx)(h.rU,{to:w,className:"link",children:(0,j.jsxs)("button",{className:"btn btn-green",children:[(0,j.jsx)("i",{className:"fas fa-plus"}),O]})})]}),(0,j.jsxs)("div",{className:"body",children:[(0,j.jsxs)("div",{className:"table-responsive scrollbar-blue",children:[(0,j.jsxs)(d.Z,{dark:P,bordered:g,hover:!0,borderless:k,children:[(0,j.jsx)("thead",{children:(0,j.jsx)("tr",{children:z})}),(0,j.jsx)("tbody",{children:!a&&F})]}),a&&(0,j.jsxs)("div",{className:"loading",children:[U.loading,"..."]})]}),(0,j.jsx)("div",{children:E}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{children:[U.showing," ",+A!==M&&+A>1?I:G," ",U.from," ",m," ",m>1?U.entries.plural:U.entries.singular,"."]}),(0,j.jsx)("div",{className:"pt-2 d-flex justify-content-end",children:"All"!==I&&(0,j.jsxs)("ul",{className:"pagination btn-group",children:[1!==A&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("li",{className:"btn btn-yellow",onClick:this.firstPageHandler,children:[(0,j.jsx)(p.G,{icon:f.UXu,className:"mr-2"}),U.first]}),(0,j.jsx)("li",{className:"btn btn-darkblue text-secondary",onClick:this.previousPageHandler,children:(0,j.jsx)(p.G,{icon:f.A35})})]}),(0,j.jsx)("li",{className:"btn btn-darkblue "+(A===R?"text-700 active":"secondary"),onClick:function(){return e.pageChangeHandler(R)},children:R}),M>1&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("li",{className:"btn btn-darkblue "+(A===L?"text-700 active":"secondary"),onClick:function(){return e.pageChangeHandler(L)},children:L}),M>2&&(0,j.jsx)("li",{className:"btn btn-darkblue "+(A===H?"text-700 active":"secondary"),onClick:function(){return e.pageChangeHandler(H)},children:H}),A!==M&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("li",{className:"btn btn-darkblue text-secondary",onClick:this.nextPageHandler,children:(0,j.jsx)(p.G,{icon:f._tD})}),(0,j.jsxs)("li",{className:"btn btn-primary",onClick:this.lastPageHandler,children:[U.last,(0,j.jsx)(p.G,{icon:f.cLY,className:"ml-2"})]})]})]})]})})]})]})]})}}])&&C(t.prototype,r),n&&C(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(a.Component);const _=(0,i.$j)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)}))(I)},1079:(e,t,r)=>{r.d(t,{Z:()=>c});r(67294);var n=r(93379),o=r.n(n),a=r(18793),i={insert:"head",singleton:!1};o()(a.Z,i);a.Z.locals;var s=r(85893);const c=function(e){var t=e.title,r=e.subtitle,n=e.children,o=e.icon;return(0,s.jsxs)("div",{className:"UI PageTitle",children:[(0,s.jsx)("div",{className:"green-line"}),(0,s.jsx)("div",{className:"icon",children:(0,s.jsx)("i",{className:"fas fa-"+o})}),(0,s.jsxs)("div",{className:"flex-fill",children:[(0,s.jsx)("div",{className:"title",children:t}),(0,s.jsx)("div",{children:r})]}),(0,s.jsx)("div",{children:n})]})}},34173:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(67294),o=r(45046),a=r(32701),i=r(10684),s=r(85893);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const u=function(e){var t=e.title,r=e.content,l=e.className,u=e.children,d=c((0,n.useState)(!1),2),p=d[0],f=d[1],h=function(){return f(!p)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{style:{cursor:"pointer"},onClick:h,children:u}),(0,s.jsxs)(o.Z,{isOpen:p,toggle:h,size:"lg",centered:!0,className:l,children:[t&&(0,s.jsx)(a.Z,{toggle:h,children:t}),(0,s.jsx)(i.Z,{children:(0,s.jsx)("div",{className:"p-2",children:r})})]})]})}},99412:(e,t,r)=>{r.d(t,{Z:()=>o});r(67294);var n=r(85893);const o=function(e){var t=e.err;return t?(0,n.jsx)("div",{className:"alert alert-danger",children:t.message?t.message:t}):null}},62932:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(67294),o=r(87462),a=r(63366),i=r(4942),s=r(45697),c=r.n(s),l=r(94184),u=r.n(l),d=r(23663),p=r(69638),f=["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={children:c().node,className:c().string,closeClassName:c().string,closeAriaLabel:c().string,cssModule:c().object,color:c().string,fade:c().bool,isOpen:c().bool,toggle:c().func,tag:d.iC,transition:c().shape(p.Z.propTypes),innerRef:c().oneOfType([c().object,c().string,c().func])},y={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:b(b({},p.Z.defaultProps),{},{unmountOnExit:!0})};function g(e){var t=e.className,r=e.closeClassName,i=e.closeAriaLabel,s=e.cssModule,c=e.tag,l=e.color,h=e.isOpen,m=e.toggle,y=e.children,g=e.transition,x=e.fade,v=e.innerRef,j=(0,a.Z)(e,f),O=(0,d.mx)(u()(t,"alert","alert-"+l,{"alert-dismissible":m}),s),w=(0,d.mx)(u()("close",r),s),N=b(b(b({},p.Z.defaultProps),g),{},{baseClass:x?g.baseClass:"",timeout:x?g.timeout:0});return n.createElement(p.Z,(0,o.Z)({},j,N,{tag:c,className:O,in:h,role:"alert",innerRef:v}),m?n.createElement("button",{type:"button",className:w,"aria-label":i,onClick:m},n.createElement("span",{"aria-hidden":"true"},"×")):null,y)}g.propTypes=m,g.defaultProps=y;const x=g;var v=r(85893);function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const w=function(e){var t=e.message,r=e.time,o=j((0,n.useState)(!0),2),a=o[0],i=o[1];return r&&setTimeout((function(){i(!1)}),r),t?(0,v.jsx)(x,{color:t.type,isOpen:a,children:t.content}):null}},62099:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Z});var n=r(67294),o=r(14416),a=r(32905),i=r(73727),s=r(92814),c=r(51436),l=r(99412),u=r(17610),d=r(34173),p=r(62932),f=r(1079),h=r(40342),b=r(37840),m=r(66292),y=r(92903),g=r(85893);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e,t){return N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},N(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=C(e);if(t){var o=C(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return k(this,r)}}function k(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(m,e);var t,r,n,o=P(m);function m(){return O(this,m),o.apply(this,arguments)}return t=m,(r=[{key:"componentDidMount",value:function(){this.props.get()}},{key:"componentWillUnmount",value:function(){this.props.reset()}},{key:"render",value:function(){var e=this,t=this.props,r=t.content.cms.pages,n=r.components.list,o=n.action,m=n.see,x=r.backend.pages.users,v=x.title,j=x.add,O=x.index,w=x.form,N=t.backend.users,P=N.loading,k=N.error,C=N.message,S=N.users,Z=void 0===S?[]:S,E=N.total,T=t.auth.data.role.features.find((function(e){return"users"===e.prefix})),U=!T&&(0,g.jsx)(a.l_,{to:"/user/dashboard"}),D=(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(l.Z,{err:k})}),I=this.props.location.state?(0,g.jsx)(p.Z,{time:5e3,message:this.props.location.state.message}):null,_=(0,g.jsx)(p.Z,{message:C}),A=Z.map((function(t){return(0,y.v4)(t,{created_at:(0,y.Ny)(t.created_at),photo:t.photo&&(0,g.jsxs)("div",{className:"d-flex",children:[(0,g.jsx)("span",{children:m}),(0,g.jsx)("span",{className:"ml-auto",children:(0,g.jsx)(d.Z,{title:"".concat(w.user_photo,": ").concat(t.name),content:(0,g.jsx)("img",{src:t.photo,className:"w-100"}),children:(0,g.jsx)(s.G,{icon:c.Mdf,className:"text-green mr-2",fixedWidth:!0})})})]}),action:(0,g.jsxs)("div",{className:"text-center",children:[(0,g.jsx)(i.rU,{to:"/user/users/".concat(t.id),className:"mx-1",children:(0,g.jsx)(s.G,{icon:c.Mdf,className:"text-green",fixedWidth:!0})}),JSON.parse(T.permissions).includes("u")&&(0,g.jsx)(i.rU,{to:"/user/users/".concat(t.id,"/edit"),className:"mx-1",children:(0,g.jsx)(s.G,{icon:c.Xcf,className:"text-brokenblue",fixedWidth:!0})}),JSON.parse(T.permissions).includes("d")&&(0,g.jsx)("span",{className:"mx-1",children:(0,g.jsx)(h.Z,{deleteAction:function(){return e.props.delete(t.id)},children:(0,g.jsx)(s.G,{icon:c.$aW,className:"text-red",fixedWidth:!0})})})]})})})),R=(0,g.jsx)(u.Z,{array:A,loading:P,data:JSON.stringify(Z),get:this.props.get,total:E,bordered:!0,add:j,link:"/user/users/add",icon:"user",title:O,className:"shadow-sm",fields:[{name:w.full_name,key:"name"},{name:w.email,key:"email"},{name:w.phone,key:"phone"},{name:w.role,key:"role"},{name:w.photo,key:"photo"},{name:o,key:"action",fixed:!0}]});return(0,g.jsxs)("div",{className:"Users",children:[(0,g.jsx)(f.Z,{title:v,subtitle:O,children:(0,g.jsx)(b.Z,{main:O})}),(0,g.jsxs)("div",{className:"content",children:[U,D,I,_,R]})]})}}])&&w(t.prototype,r),n&&w(t,n),Object.defineProperty(t,"prototype",{writable:!1}),m}(n.Component);const Z=(0,a.EN)((0,o.$j)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)}),(function(e){return{get:function(t,r,n){return e((0,m.Rf)(t,r,n))},delete:function(t){return e((0,m.Vt)(t))},reset:function(){return e((0,m.qh)())}}}))(S))},66292:(e,t,r)=>{r.d(t,{PR:()=>p,Q8:()=>h,Rf:()=>u,Vt:()=>b,cK:()=>f,mZ:()=>d,qh:()=>l});var n=r(92903),o=r(73501);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return n.ds.apply(void 0,["users",{start:function(){return{type:o.v$}},success:function(e){return i({type:o.nY},e)},fail:function(e){return{type:o.fe,error:e}}},e].concat(r))},l=function(){return{type:o.IH}},u=function(e,t,r){return c("index",e,t,r)},d=function(){return c("info")},p=function(e){return c("show",e)},f=function(e){return c("post",e)},h=function(e,t){return c("patch",e,t)},b=function(e){return c("delete",e)}},77579:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(23645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".UI.List{background-color:var(--white);border-radius:30px;padding:48px 69px 101px}.UI.List .header{align-items:center;display:flex;margin-bottom:86px}.UI.List .header .title{font-size:25px;font-weight:700;margin-bottom:7px}.UI.List .header .subtitle{font-size:16px;margin-bottom:21px}.UI.List .header .green-line{background-color:var(--green);border-radius:5px;height:10px;width:46px}.UI.List .header .show{align-items:center;display:none;margin-left:auto}.UI.List .header .export{display:none}.UI.List .header .search{margin-left:auto;margin-right:50px}.UI.List .header .search input{background-color:var(--border-5);border:none;border-radius:10px;color:var(--border);font-size:14px;height:60px;padding:21px 33px}.UI.List .header .link{text-decoration:none}.UI.List .header .link button{border-radius:10px;font-weight:700;height:60px;padding:0 25px}.UI.List .header .link button i{margin-right:18.25px}.UI.List .body table{color:inherit;font-size:16px}.UI.List .body table thead{background-color:var(--border-10)}",""]);const a=o},18793:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(23645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,'.UI.PageTitle{align-items:center;background-color:var(--white);display:flex;height:108px;padding-left:88px;position:-webkit-sticky;position:sticky;top:94px;z-index:1000}.UI.PageTitle:after{background-color:var(--green-10);content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.UI.PageTitle .green-line{background-color:var(--green);height:100%;left:0;position:absolute;top:0;width:9px}.UI.PageTitle .icon{color:var(--green);font-size:44px;padding-right:23px}.UI.PageTitle .title{font-size:20px;font-weight:500;margin-bottom:10px}',""]);const a=o},36595:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(87462),o=r(63366),a=r(67294),i=r(45697),s=r.n(i),c=r(94184),l=r.n(c),u=r(23663),d=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],p={className:s().string,cssModule:s().object,size:s().string,bordered:s().bool,borderless:s().bool,striped:s().bool,dark:s().bool,hover:s().bool,responsive:s().oneOfType([s().bool,s().string]),tag:u.iC,responsiveTag:u.iC,innerRef:s().oneOfType([s().func,s().string,s().object])},f=function(e){var t=e.className,r=e.cssModule,i=e.size,s=e.bordered,c=e.borderless,p=e.striped,f=e.dark,h=e.hover,b=e.responsive,m=e.tag,y=e.responsiveTag,g=e.innerRef,x=(0,o.Z)(e,d),v=(0,u.mx)(l()(t,"table",!!i&&"table-"+i,!!s&&"table-bordered",!!c&&"table-borderless",!!p&&"table-striped",!!f&&"table-dark",!!h&&"table-hover"),r),j=a.createElement(m,(0,n.Z)({},x,{ref:g,className:v}));if(b){var O=(0,u.mx)(!0===b?"table-responsive":"table-responsive-"+b,r);return a.createElement(y,{className:O},j)}return j};f.propTypes=p,f.defaultProps={tag:"table",responsiveTag:"div"};const h=f}}]);