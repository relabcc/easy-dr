(window.webpackJsonp=window.webpackJsonp||[]).push([[18,4],{415:function(e,t,i){"use strict";i.r(t);var n=i(601);t.default=n.a},425:function(e,t,i){"use strict";var n=i(16),r=i(56),a=i(156),M=i(157),o=Object(r.default)(a.a).withConfig({displayName:"Flex",componentId:"sc-1wakzhz-0"})(["",""],n.h);o.defaultProps={display:"flex",blacklist:M.a},o.displayName="Flex",t.a=o},426:function(e,t,i){"use strict";i(520),i(8);var n=i(0),r=i.n(n),a=i(56),M=i(110),o=i.n(M),c=i(16),s=i(158),u=i.n(s),I=i(157),l=i(43),L=i(44),g=Object(a.default)(u.a).withConfig({displayName:"Text",componentId:"sc-1vna78b-0"})(["margin-top:0;margin-bottom:0;"," "," "," "," "," "," ",""],c.s,c.e,c.p,c.d,c.o,Object(l.a)("textTransform"),Object(l.a)("whiteSpace"));g.defaultProps={is:"p",fontSize:"1em",lineHeight:1.5,blacklist:I.a},g.inline=function(e){return r.a.createElement(g,Object.assign({is:"span"},e))},g.serif=function(e){return r.a.createElement(g,Object.assign({fontFamily:L.c.serifFont},e))},g.bold=function(e){return r.a.createElement(g,Object.assign({fontWeight:"bold"},e))},g.thin=function(e){return r.a.createElement(g,Object.assign({fontWeight:"200"},e))},o()(1,7).forEach(function(e){var t="h"+e;g[t]=function(i){return r.a.createElement(g.serif,Object.assign({is:t,color:"titleBlue",fontSize:1+.125*(6-e)+"em"},i))}}),g.displayName="Text",t.a=g},427:function(e,t,i){"use strict";i(5),i(3),i(1),i(11),i(8);var n=i(0),r=i.n(n),a=i(56),M=i(16),o=i(449),c=i(158),s=i.n(c),u=i(156),I=i(44),l=i(441),L=i(157);var g=Object(a.css)(["",";",";",";font-weight:bold;"],Object(l.a)("hoverColor"),Object(l.a)("hoverBg","backgroundColor"),Object(l.a)("hoverBorder","borderColor")),j=Object(a.css)(["padding:0;border:none;font-family:inherit;line-height:1;text-decoration:none;"," "," "," "," "," "," "," appearance:none;transition:all ","ms;cursor:pointer;&:hover,&:focus{"," outline:none;}"," ",""],M.s,M.k,M.o,M.p,M.d,M.a,M.b,Object(o.a)("duration",250),function(e){return!e.disabled&&g},function(e){return e.active&&!e.disabled&&g},function(e){return e.disabled&&"\n    border-color: "+I.c.colors.gray+"\n    color: "+I.c.colors.gray+"\n    cursor: not-allowed;\n    opacity: 0.5;\n  "}),N=Object(a.default)(s.a).withConfig({displayName:"Button__ButtonBase",componentId:"onvwh0-0"})(["",";"],j),w=function(e){return r.a.createElement(u.a,Object.assign({is:"span"},e))},C=function(e){var t=e.leftIcon,i=e.rightIcon,n=e.iconSpacing,a=e.children,M=e.verticalAlign,o=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,["leftIcon","rightIcon","iconSpacing","children","verticalAlign"]);return r.a.createElement(N,o,t?r.a.createElement(u.a,{is:t,mr:n,verticalAlign:M}):null,r.a.createElement(w,{verticalAlign:M},a),i?r.a.createElement(u.a,{is:i,ml:n,verticalAlign:M}):null)};C.defaultProps={blacklist:L.a,is:"button",border:"2px solid",borderColor:"lightOrange",bg:"white",color:"text",hoverColor:"white",hoverBg:"primaryHover",hoverBorder:"primaryHover",px:"2.5em",py:"0.75em",iconSpacing:"0.25em",borderRadius:"1.5em",display:"inline-block",textAlign:"center"},C.displayName="Button",C.danger=function(e){return r.a.createElement(C,Object.assign({bg:"danger",borderColor:"danger",hoverBg:"dangerHover",hoverBorder:"dangerHover"},e))},C.choice=function(e){return r.a.createElement(C,Object.assign({color:"colorOrange",borderRadius:"1em",type:"button",px:"1em",width:"100%"},e))},C.open=function(e){return r.a.createElement(C,Object.assign({bg:"titleBlue",border:"2px solid",borderColor:"titleBlue",color:"white",px:"4.25em",borderRadius:"2em"},e))},C.tabs=function(e){return r.a.createElement(C,Object.assign({bg:"lightPurple",color:"white",border:"2px solid",borderColor:"lightPurple",hoverColor:"titleBlue",hoverBg:"white",hoverBorder:"white",borderRadius:"1em 1em 0 0"},e))},C.circle=function(e){return r.a.createElement(C,Object.assign({hoverColor:"white",borderRadius:"50%",px:"0",py:"0"},e))},C.download=function(e){return r.a.createElement(C,Object.assign({color:"lightOrange",hoverColor:"white",borderRadius:"50%",px:"0",py:"0"},e))},C.secondary=function(e){return r.a.createElement(C,Object.assign({bg:"secondary",borderColor:"secondary",hoverBg:"secondaryHover",hoverBorder:"secondaryHover"},e))},(C.outline=function(e){return r.a.createElement(C,Object.assign({border:"2px solid",borderColor:"primary",bg:"transparent",color:"primary",hoverColor:"white"},e))}).danger=function(e){return r.a.createElement(C.danger,Object.assign({border:"2px solid",borderColor:"danger",bg:"transparent",color:"danger",hoverColor:"white"},e))},C.menu=function(e){return r.a.createElement(C,Object.assign({border:"1px solid transparent",borderColor:"transparent",bg:"transparent",color:"text",px:"6em",borderRadius:"0"},e))},C.transparent=function(e){return r.a.createElement(C,Object.assign({border:"1px solid transparent",borderColor:"transparent",bg:"transparent",color:"titleBlue",hoverColor:"titleBlue",hoverBg:"transparent",hoverBorder:"transparent"},e))},t.a=C},428:function(e,t,i){"use strict";var n=i(56),r=i(16),a=i(158),M=i.n(a),o=i(157),c=Object(n.default)(M.a.img).withConfig({displayName:"Image",componentId:"sc-18hwxqz-0"})([""," "," ",""],r.p,r.k,r.n);c.defaultProps={blacklist:o.a,width:1},c.displayName="Image",t.a=c},430:function(e,t,i){"use strict";var n=i(159);t.a=function(e){return Object(n.b)(function(e){var t=e.browser;return{browser:t,isMobile:t.lessThan.md}})(e)}},431:function(e,t,i){"use strict";i.d(t,"b",function(){return I});var n=i(0),r=i.n(n),a=i(4),M=i.n(a),o=i(108),c=i.n(o);i.d(t,"a",function(){return c.a}),i.d(t,"d",function(){return o.withPrefix}),i.d(t,"c",function(){return o.navigate});i(440);var s=r.a.createContext({});function u(e){var t=e.staticQueryData,i=e.data,n=e.query,a=e.render,M=i?i.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,M&&a(M),!M&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var I=function(e){var t=e.data,i=e.query,n=e.render,a=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:i,render:n||a,staticQueryData:e})})};I.propTypes={data:M.a.object,query:M.a.string.isRequired,render:M.a.func,children:M.a.func}},432:function(e,t,i){"use strict";var n=i(0),r=i.n(n),a=i(156),M=i(44),o=function(e){return r.a.createElement(a.a,e)};o.defaultProps={mx:"auto",px:["1em",null,"2em"],width:1,maxWidth:M.b},o.displayName="Container",t.a=o},433:function(e,t,i){"use strict";i(5),i(3),i(1),i(11),i(8);var n=i(0),r=i.n(n),a=i(56),M=i(16),o=i(158),c=i.n(o),s=i(431),u=i(157),I=i(441);var l=Object(a.css)(["color:inherit;"," "," "," "," "," "," "," text-decoration:none;"," &:hover{",";}"],M.i,M.p,M.d,M.j,M.m,M.l,M.e,function(e){return e.disabled&&"\n    pointer-events: none;\n  "},Object(I.a)("hoverColor")),L=Object(a.default)(c.a).withConfig({displayName:"Link__NomalLink",componentId:"sc-53k5wg-0"})(["",""],l),g=Object(a.default)(s.a).withConfig({displayName:"Link__GatsbyStyledLink",componentId:"sc-53k5wg-1"})(["",""],l),j=function(e){var t=e.to,i=(e.button,e.blacklist),n=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,["to","button","blacklist"]);return t?r.a.createElement(g,Object.assign({to:t},n)):r.a.createElement(L,Object.assign({is:"a",target:"_blank",blacklist:i},n))};j.displayName="Link",j.defaultProps={color:"text",blacklist:u.a},t.a=j},436:function(e,t,i){"use strict";i(5),i(3),i(1),i(11),i(8),i(24);var n=i(0),r=i.n(n),a=i(4),M=i.n(a),o=i(464),c=i(450),s=i(156);var u=function(e){try{var t=e.split(" "),i=t[0],n=t[1],r=t[2];return(t[3]-n)/(r-i)}catch(a){return 1}},I=function(e){var t,i;function n(t){var i;return(i=e.call(this,t)||this).ratio=u(t.viewBox),i}i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var a=n.prototype;return a.componentDidMount=function(){this.props.measure()},a.render=function(){var e=this.props,t=e.viewBox,i=e.children,n=(e.measure,e.measureRef),a=e.contentRect.bounds.width,M=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,["viewBox","children","measure","measureRef","contentRect"]);return c.a?r.a.createElement(s.a,Object.assign({is:"span",ref:n},M),r.a.createElement(s.a,{is:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:t,width:a,height:this.ratio*a,verticalAlign:"auto"},i)):r.a.createElement(s.a,Object.assign({is:"svg",ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:t},M),i)},n}(n.PureComponent);I.propTypes={viewBox:M.a.string,children:M.a.node.isRequired},I.defaultProps={display:"inline-block"},I.displayName="SVG",t.a=Object(o.b)("bounds")(I)},437:function(e,t,i){"use strict";i(5),i(3),i(1),i(11),i(8);var n=i(466),r=i(0),a=i.n(r),M=i(4),o=i.n(M),c=i(519),s=i.n(c),u=i(431),I=i(477),l=i.n(I),L=i(455),g=i(156),j=i(427),N=i(425),w=i(433),C=i(426),y=i(428),D=i(44),m=i(468),x=i.n(m),d=i(430);var T=Object(d.a)(function(e){var t=e.siteTitle,i=e.currentState,n=e.menuClick,r=e.setState,M=e.isMobile,o=e.bg,c=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,["siteTitle","currentState","menuClick","setState","isMobile","bg"]);return a.a.createElement(N.a,Object.assign({position:"fixed",bg:M?o:"transparent",top:0,left:0,right:0,alignItems:"center",zOrder:2},c),a.a.createElement(g.a,{px:"1em",flex:1},a.a.createElement(N.a,{justifyContent:"space-between",alignItems:"center",mx:"1em"},a.a.createElement(j.a.transparent,{px:"0",py:"0",color:"titleBlue",onClick:n},a.a.createElement(L.b,{size:"2em"})),a.a.createElement(w.a,{to:"/",color:"titleBlue"},a.a.createElement(C.a.serif,null,t)))),Boolean(i)&&a.a.createElement(g.a,{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",bg:"rgba(0,0,0,0.7)",onClick:function(){return r(0)},cursor:"unset"}))});var A=[{label:"看診好幫手",to:"/"},{label:"我的看診備忘錄",to:"/memo"},{label:"看診中注意事項",to:"/notice"},{label:"檢測你的看診表現",to:"/test/start"}],z=function(e){var t=e.children,i=e.noHeader,M=e.noFooter,o=(e.intl,e.headerBg),c=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,["children","noHeader","noFooter","intl","headerBg"]);return a.a.createElement(u.b,{query:"2669241669",render:function(e){var n=e.site.siteMetadata,I=n.title,m=n.description,d=Object(r.useState)(0),z=d[0],E=d[1];return a.a.createElement("div",null,a.a.createElement(s.a,null,a.a.createElement("html",{lang:"zh-Hant-TW"}),a.a.createElement("title",null,I),a.a.createElement("meta",{name:"description",content:m}),a.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:Object(u.d)("/apple-touch-icon.png")}),a.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:Object(u.d)("/favicon-32x32.png")}),a.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:Object(u.d)("/favicon-16x16.png")}),a.a.createElement("link",{rel:"mask-icon",color:"#5bbad",href:Object(u.d)("/safari-pinned-tab.svg")}),a.a.createElement("meta",{name:"msapplication-TileColor",content:"#da532c"}),a.a.createElement("meta",{name:"theme-color",content:"#ffffff"}),a.a.createElement("meta",{property:"og:url",content:n.url}),a.a.createElement("meta",{property:"og:title",content:I}),a.a.createElement("meta",{property:"og:description",content:m}),a.a.createElement("meta",{property:"og:image",content:n.url+"/fb.png"})),!i&&a.a.createElement(T,{height:D.c.headerHeight,siteTitle:I,menuClick:function(){return Boolean(z)?E(0):E(1)},currentState:z,setState:E,bg:o}),a.a.createElement(g.a,Object.assign({minHeight:"100vh",pt:!i&&D.c.headerHeight,pb:!M&&D.c.footerHeight},c),t),a.a.createElement(N.a,{mt:"-"+D.c.footerHeight,height:D.c.footerHeight,bg:"titleBlue",alignItems:"center",justifyContent:"center",position:"relative"},a.a.createElement(C.a,{color:"white",fontSize:"0.8em"},"Copyright © ",l()(new Date,"YYYY"),". All rights reserved.")),a.a.createElement(g.a,{bg:"bgOrange",position:"fixed",top:"0",bottom:"0",transform:Boolean(z)?"translateX(0)":"translateX(-120%)",transition:"transform 0.5s",pt:D.c.headerHeight,overflow:"hidden",zOrder:3},a.a.createElement(g.a,{transform:"translateY(-"+D.c.headerHeight+")",ml:"2em"},a.a.createElement(j.a.transparent,{px:"0",py:"0",color:"titleBlue",onClick:function(){return E(0)}},a.a.createElement(L.a,{size:"3em"}))),a.a.createElement(g.a,{position:"absolute",left:"0",bottom:"0",transform:["translateY(25%)",null,null,"translateY(20%)",null,"translateY(10%)","translateY(0)"],width:"80%"},a.a.createElement(y.a,{src:x.a})),a.a.createElement(g.a,{bg:"bgOrange",position:"relative"},A.map(function(e){var t=e.label,i=e.to;return a.a.createElement(g.a,{pt:"1em",key:t},a.a.createElement(j.a.menu,{textAlign:"left",width:1,is:w.a,to:i},t))}))))},data:n})};z.propTypes={children:o.a.node.isRequired};t.a=z},439:function(e,t,i){"use strict";i(5),i(3),i(1),i(11),i(8);var n=i(0),r=i.n(n),a=i(156),M=i(4),o=i.n(M),c=i(463),s=i(112),u=i.n(s);var I=function(e){var t,i;function n(){for(var t,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={count:0,shouldCenter:!0},t.clearCount=function(){t.setState({count:0}),delete t.timer},t.handleBoxRef=function(e){t.setState({boxRef:e})},t}i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i,n.getDerivedStateFromProps=function(e,t){var i=e.size,n=t.boxRef,r=t.count;if(n&&i.height&&r<6){var a=n.getBoundingClientRect().height;if(a&&i.height)return{shouldCenter:i.height>a,count:r+1}}return{}};var M=n.prototype;return M.componentDidUpdate=function(e,t){var i=e.size,n=this.state.shouldCenter;n!==t.shouldCenter&&this.props.onAlignChange(n),i===this.props.size.height||this.timer||(this.timer=setTimeout(this.clearCount,500))},M.render=function(){var e=this.props,t=e.children,i=(e.onAlignChange,e.size,function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,["children","onAlignChange","size"])),n=this.state.shouldCenter;return r.a.createElement(a.a,Object.assign({position:"relative",width:"100%",height:"100%"},i),r.a.createElement(a.a,{position:n&&"absolute",top:n?"50%":0,width:1,transform:n&&"translateY(-50%)",ref:this.handleBoxRef},u()(t)?t(n):t))},n}(n.PureComponent);I.displayName="VerticalCenter",I.propTypes={onAlignChange:o.a.func},I.defaultProps={onAlignChange:function(){}};var l=Object(c.withSize)({monitorHeight:!0,monitorWidth:!1})(I),L=i(44);var g=function(e){var t,i;function n(){for(var t,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={isCenter:!0},t.handleCenter=function(e){return t.setState({isCenter:e})},t}return i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i,n.prototype.render=function(){var e=this.props,t=e.noHeader,i=e.noFooter,n=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,["noHeader","noFooter"]),M=this.state.isCenter;return r.a.createElement(a.a,{height:M&&"100vh",minHeight:"100vh",mt:!t&&"-"+L.c.headerHeight,pt:!t&&L.c.headerHeight,mb:!i&&"-"+L.c.footerHeight,pb:!i&&L.c.footerHeight},r.a.createElement(l,Object.assign({onAlignChange:this.handleCenter},n)))},n}(n.PureComponent);t.a=g},440:function(e,t,i){var n;e.exports=(n=i(467))&&n.default||n},441:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var n=i(16),r=function(e,t){return void 0===t&&(t="color"),Object(n.q)({prop:e,cssProperty:t,key:"colors"})}},442:function(e,t,i){"use strict";i(5),i(3),i(1),i(11),i(8);var n=i(0),r=i.n(n),a=i(156),M=i(425),o=i(426),c=i(428),s=i(44);t.a=function(e){e.children;var t=e.icon,i=e.title,n=e.description,u=e.fontWeight,I=e.width,l=e.mobileWidth,L=e.fontSize,g=e.desfontSize,j=e.imgwidth,N=e.textAlign,w=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,["children","icon","title","description","fontWeight","width","mobileWidth","fontSize","desfontSize","imgwidth","textAlign"]);return r.a.createElement(M.a,Object.assign({alignItems:"center",px:Object(s.d)("1em","2em")},w),r.a.createElement(a.a,{width:Object(s.d)(l||1/3,I||1/11),textAlign:"center",px:"1em"},r.a.createElement(c.a,{width:j,src:t})),r.a.createElement(a.a,{width:Object(s.d)(w.flexWrap?1:.75,"auto"),py:Object(s.d)("0.5em","1em"),textAlign:N||"left",mx:Object(s.d)(0,"1em")},r.a.createElement(o.a.h2,{fontSize:Object(s.d)("1.25em",L||"1.5em"),whiteSpace:"pre-wrap",fontWeight:u||"bold"},i),r.a.createElement(o.a,{fontSize:Object(s.d)("1em",g||"1em"),whiteSpace:"pre-wrap"},n)))}},450:function(e,t,i){"use strict";var n,r=i(521);"undefined"!=typeof window&&(n="Internet Explorer"===i.n(r).a.getParser(window.navigator.userAgent).getBrowserName());t.a=n},457:function(e,t,i){"use strict";i(8);var n=i(0),r=i.n(n),a=i(436);t.a=function(e){return r.a.createElement(a.a,Object.assign({viewBox:"0 0 29.333 29.333"},e),r.a.createElement("g",{fill:"none",stroke:"currentColor",strokeWidth:"5"},r.a.createElement("circle",{cx:"14.667",cy:"14.667",r:"14.667",stroke:"none"}),r.a.createElement("circle",{cx:"14.667",cy:"14.667",r:"12.167",fill:"none"})))}},458:function(e,t,i){"use strict";i(8);var n=i(0),r=i.n(n),a=i(436);t.a=function(e){return r.a.createElement(a.a,Object.assign({viewBox:"0 0 21.535 21.535"},e),r.a.createElement("g",{transform:"translate(-1958.732 -826.732)"},r.a.createElement("line",{id:"Line_155","data-name":"Line 155",x2:"18",y2:"18",transform:"translate(1960.5 828.5)",fill:"none",stroke:"currentColor",strokeWidth:"5"}),r.a.createElement("line",{id:"Line_156","data-name":"Line 156",x1:"18",y2:"18",transform:"translate(1960.5 828.5)",fill:"none",stroke:"currentColor",strokeWidth:"5"})))}},466:function(e){e.exports={data:{site:{siteMetadata:{title:"看診好幫手",description:"問對問題，看診絕對沒問題",url:"https://relabcc.github.io/health-knowledge"}}}}},467:function(e,t,i){"use strict";i.r(t);i(8);var n=i(0),r=i.n(n),a=i(4),M=i.n(a),o=i(161),c=function(e){var t=e.location,i=e.pageResources;return i?r.a.createElement(o.a,Object.assign({location:t,pageResources:i},i.json)):null};c.propTypes={location:M.a.shape({pathname:M.a.string.isRequired}).isRequired},t.default=c},468:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDEgMzY0LjIiPgogIDxnPgogICAgPHJlY3QgeT0iMC4yIiB3aWR0aD0iMjQxIiBoZWlnaHQ9IjM2NCIgZmlsbD0ibm9uZSIvPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0xMDUuMzcsOTguMTVjLTIuOSwyLjg3LDQyLjgxLDU2LDQyLjgxLDU2czUyLjU2LTI5LDU0LjUtMjljMCwwLDEwLjEtMTYuNDQsOC44Ny0yNi4wNlMxMDUuMzcsOTguMTUsMTA1LjM3LDk4LjE1WiIgZmlsbD0iI2ZmZiIvPgogICAgICA8Zz4KICAgICAgICA8Zz4KICAgICAgICAgIDxwYXRoIGQ9Ik0yMjYuMTgsNTUuMzVsNS44OS0xNS43OHM1LjY3LTQuMjYsNy44Nyw1LjFhMzMuNzMsMzMuNzMsMCwwLDEtLjUsMTcuMTZsLTMuNzUsOS4xMVoiIGZpbGw9IiNmZmU2Y2QiLz4KICAgICAgICAgIDxwYXRoIGQ9Ik0yMjEuODcsNjEuMTRzMS4xMy03LjY3LjI5LTkuNjksMi42NS0xLjg4LDIuOTEuODgsMS41NCw0LjIyLDIsMiwuODctNS4xMSwyLjI4LTUuNCwyLjIzLDEuNzMsMi4yMywxLjczYTEsMSwwLDAsMSwxLjA5LS44M2MuOTMuMDcsMi4zNCwxLjEyLDIsMi4yYTEuMDYsMS4wNiwwLDAsMSwxLjIzLS44M2wuMTIsMGMxLjA2LjM0LDIuMDksMS4xNiwxLjc3LDIuMDgsMCwwLC4zNi0uOTEsMi4wNi0uMDdzLTEsMTAuNTMtMS42MiwxMS41My00LjE5LDQuODgtNC4xOSw0Ljg4WiIgZmlsbD0iI2ZmZTZjZCIvPgogICAgICAgICAgPHBhdGggZD0iTTE4NS40NywxMDcuNGMxLTEuNjgsMzUuNTMtNDguNzgsMzUuNTMtNDguNzgsOC40LTEuNDgsMTcuMzYsOS45MiwxNy4zNiw5Ljkycy0zMi42NCw1My4zOC0zNC41NCw1NS4zOWMwLDAtMS43LDMuODctMTIuNC43MUMxNzEuMDgsMTE4LjY0LDE4NCwxMDkuODksMTg1LjQ3LDEwNy40WiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDwvZz4KICAgICAgICA8cGF0aCBkPSJNMjIxLDU4LjYycy0xLjU4LDIuMTQtNC4wNiw1LjUzYzMuMjkuOTQsOSwzLjc0LDE4LjMsMTEuMzYsMS45LTQuMjIsMy4xMi03LDMuMTItN1MyMjkuNCw1Ny4xNCwyMjEsNTguNjJaIiBmaWxsPSIjZmY4NzYwIi8+CiAgICAgIDwvZz4KICAgICAgPHBhdGggZD0iTTE0NS4wNyw0NTAuNjVINzMuMzF2LTE4NWg0OC42M1oiIGZpbGw9IiNmMmYyZjIiLz4KICAgICAgPHBhdGggZD0iTTEzNC4wNiwyNTMuMTVINjIuMzFWMTIzLjA2bDYxLjc4LTE2Ljk0WiIgZmlsbD0iI2ZmODc2MCIvPgogICAgICA8cGF0aCBkPSJNODcuNjMsODQuMDVhNDUsNDUsMCwwLDEsOC41OSwxTDk4LDIyNC4yNkMtMywxOTkuNTMsNDEuODgsMTE1Ljg4LDY1LjIxLDkzLjY2QTU2LjY1LDU2LjY1LDAsMCwwLDg3LjYzLDg0LjA1WiIgZmlsbD0iI2ZmODc2MCIvPgogICAgICA8cGF0aCBkPSJNNDQuOCwyOTUuODVzLTQsMTE0LjctMy43NSwxMjUuODljLjMsMTEuMzgtMi42NSw3NC4yOC0xLjQsODYuMzlINjUuMTFzNy41My0zNi44Miw4LjItNTMuOWMzLjUtODkuMTMsMTcuNzctMTY3LjE4LDE5LjMyLTE2OC4xMnMxMi0xLjI4LDEyLTEuMjhTMTA4LDQ0NC43NCwxMDcsNDUxLjI2cy0xLjQ1LDQ5LjMzLTEuNDUsNDkuMzMsMjYuNjIsMi4zOSwyOS43My44NGMwLDAtMS02NC4wNS0uMzQtNzkuMjYuNy0xNS41MiwxLjczLTExOS0uNDQtMTM4LjUycy0xMC4yNS01MS0xMC4yNS01MWwtNzEuMDctM1oiIGZpbGw9IiMyMjE5NWIiLz4KICAgICAgPHBhdGggZD0iTTk3Ljg4LDg0LjA1czExLjMyLDcuNSwyMy44MywxNi4yYy0yLjIsMTQuNS0xMi40MSw3OS4zNS0yMy44MywxMTEuOTRaIiBmaWxsPSIjZmY4NzYwIi8+CiAgICAgIDxwYXRoIGQ9Ik0xMDAuNTcsMTEzLjU1bDQuMjYsODIuNjVMOTQuMDcsMjEwLjE0bC02LTEyLjk1czQuMjEtNTYuNjIsMi45MS04NC4xM0M5MSwxMTMuMDYsOTYuNjYsMTEzLjU1LDEwMC41NywxMTMuNTVaIiBmaWxsPSIjMjIxOTViIi8+CiAgICAgIDxwYXRoIGQ9Ik0xMDQuNyw3Ni40OHMwLDEyLjYxLDQuNzIsMTUuMzNjMCwwLTYuMjIsMTIuNDQtMTMsMTIuNDFTNzMuMzEsOTAuMzksNzMuMzEsOTAuMzlzNi0yLjgyLDcuMjctMTUuODZDODEsNzAuNTUsMTA0LjcsNzYuNDgsMTA0LjcsNzYuNDhaIiBmaWxsPSIjZmZlNmNkIi8+CiAgICAgIDxwYXRoIGQ9Ik0xMjEuNzEsMTAwLjI1YzQuNDIsMy4wNywzNy42NiwxOC40LDM2Ljg3LDE5Ljc4LTIsMy40MS0yNi4xMiw5OC42Ni0yNS41NiwxMDQuNCwxLjU1LDE1Ljg0LDI0LjkyLDIxOC41OSwxNy4zMiwyMjEuNzFzLTMxLjI0LDEuMzItMzMuOTEtLjg2LTguNjUtMTg3LjY3LTguNjUtMTg3LjY3bC4wOS02My43NEMxMTkuMjksMTYxLjI4LDExOS41MSwxMTQuNzUsMTIxLjcxLDEwMC4yNVoiIGZpbGw9IiNmZmYiLz4KICAgICAgPGc+CiAgICAgICAgPGc+CiAgICAgICAgICA8cGF0aCBkPSJNMTA3LjE0LDM0czguNjUsNDUuNiwyLDQ3LjEyLTI4LjU4LDQtMjkuMjgtMS4yOS0xLjctNTIuNCwzLjM3LTUzUzEwNiwyNC4wNiwxMDcuMTQsMzRaIiBmaWxsPSIjZmZlNmNkIi8+CiAgICAgICAgICA8cGF0aCBkPSJNODIuMDcsNDguODdzLTQtNC43Ni02LjYtMS4yMmMtNC42NCw2LjM2LDUuNDksMTAuMjIsNyw5LjE3UzgyLjA3LDQ4Ljg3LDgyLjA3LDQ4Ljg3WiIgZmlsbD0iI2ZmZTZjZCIvPgogICAgICAgICAgPHBhdGggZD0iTTgxLjcsNTJhMTguNjcsMTguNjcsMCwwLDAtNC42LTMsLjIxLjIxLDAsMCwwLS4yOC4wOS4yLjIsMCwwLDAsLjA2LjI1YzEuNTUsMS4yNyw0LjM4LDMuNjcsNC41OCw0LjQ3WiIgZmlsbD0iI2ZmZDVhYyIgb3BhY2l0eT0iMC4zIiBzdHlsZT0iaXNvbGF0aW9uOiBpc29sYXRlIi8+CiAgICAgICAgICA8cGF0aCBkPSJNMTAwLjksNDguMTJzMS40LDUuNzUsMi4xNCw4LjYyYy42NiwyLjU1LTEuNzEsNC40MS0xLjcxLDQuNDFsMi43NC0uMTlzMi42My0yLjcyLDItNC40NUEyMy42NywyMy42NywwLDAsMCwxMDAuOSw0OC4xMloiIGZpbGw9IiNmZmQ1YWMiIG9wYWNpdHk9IjAuNSIgc3R5bGU9Imlzb2xhdGlvbjogaXNvbGF0ZSIvPgogICAgICAgICAgPHBhdGggZD0iTTExMC4xLDI3LjEycy4zMSw3LjQ3LTEwLjcsNy45M2MtMTIuMzQuNTItMTguMDgsMy4xOC0xOC45Miw1LjYycy00LjcyLTExLS4wOS0xNS45MiwyNS41Ni0uMjUsMjguMy0zLjE0QzExMC44MiwxOS4zNywxMTAuMSwyNy4xMiwxMTAuMSwyNy4xMloiIGZpbGw9IiMyMjE5NWIiLz4KICAgICAgICAgIDxwYXRoIGQ9Ik04NC41MiwzNi42NVM4Mi4wOCw0OS41Myw4Mi44OCw1MS41cy0zLTMuMy0zLjM2LTQuNjQuNzYtMTIuNTcuNzYtMTIuNTdaIiBmaWxsPSIjMjIxOTViIi8+CiAgICAgICAgICA8Y2lyY2xlIGN4PSI5NC4wNyIgY3k9IjQ4LjEyIiByPSIxLjY1IiBmaWxsPSIjMjIxOTViIi8+CiAgICAgICAgICA8Y2lyY2xlIGN4PSIxMDYuMTQiIGN5PSI0Ni40NyIgcj0iMS42NSIgZmlsbD0iIzIyMTk1YiIvPgogICAgICAgIDwvZz4KICAgICAgICA8cGF0aCBkPSJNMTAzLjYyLDYzLjkycy00LjcxLjA2LTYtMS4zYzAsMCwuODIsNC4zNiwzLDQuMVMxMDMuNjIsNjMuOTIsMTAzLjYyLDYzLjkyWiIgZmlsbD0iIzIyMTk1YiIvPgogICAgICAgIDxwYXRoIGQ9Ik04NC43LDc5LjNzMTEuMDksNC41NiwyMS41MiwzLjI2IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjE5NWIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjAuNDUiLz4KICAgICAgPC9nPgogICAgICA8cGF0aCBkPSJNMTAwLjYsMTAzYTM0LjkzLDM0LjkzLDAsMCwwLTEwLjQxLjI4cy0xLjU3LDYuMDcuNzcsMTEuMjVjMCwwLDcuMS43Miw5LjY2LS4zOUMxMDAuNjIsMTE0LjE4LDEwMy43MSwxMDgsMTAwLjYsMTAzWiIgZmlsbD0iIzIyMTk1YiIvPgogICAgICA8cGF0aCBkPSJNOTYsMTAyLjgxYy4zLS43LDUsNi44OCw3LjMxLDEwLjc2YTIuMTQsMi4xNCwwLDAsMCwyLjk0LjcyLDEuNzIsMS43MiwwLDAsMCwuMzItLjIzbDE1LjM1LTEzLjYzLTEyLjczLTguOFoiIGZpbGw9IiNmZjg3NjAiLz4KICAgICAgPHBhdGggZD0iTTk2LjA2LDEwMi43N2wwLDBBLjEuMSwwLDAsMSw5Ni4wNiwxMDIuNzdaIiBmaWxsPSIjZjJmMmYyIi8+CiAgICAgIDxwYXRoIGQ9Ik05Ni40NCwxMDIuODFjLS4zLS43LTUsNi44OC03LjMxLDEwLjc2YTIuMTQsMi4xNCwwLDAsMS0yLjk0LjcyLDEuNzIsMS43MiwwLDAsMS0uMzItLjIzbC0yMS41OC0yMCwxMS4wOC02LjUxWiIgZmlsbD0iI2ZmODc2MCIvPgogICAgICA8cGF0aCBkPSJNOTUuOSwxMDIuODhjLS4zLS43LTQuNDMsNi44LTYuNzcsMTAuNjlhMi4xNCwyLjE0LDAsMCwxLTIuOTQuNzIsMi4zNSwyLjM1LDAsMCwxLS4zMi0uMjNMNzMuMzEsMTAyLjQzIiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjE5NWIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjAuNDUiLz4KICAgICAgPHBhdGggZD0iTTk1LjksMTAyLjg4Yy4zMS0uNyw1Ljc0LDYuOCw4LjA4LDEwLjY5YTIuMTQsMi4xNCwwLDAsMCwyLjk0LjcyLDEuNzIsMS43MiwwLDAsMCwuMzItLjIzbDEyLjU2LTExLjYzIiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjE5NWIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjAuNDUiLz4KICAgICAgPHBhdGggZD0iTTk2LjM5LDEwMi43N2wwLDBBLjA3LjA3LDAsMCwwLDk2LjM5LDEwMi43N1oiIGZpbGw9IiNmMmYyZjIiLz4KICAgICAgPHBhdGggZD0iTTEyMS43MSwxMDAuMjVjNC40MiwzLjA3LDksNi4yOSwxMy4yNyw5LjM4bC0xMC4wOSw2NS4xMyw0LjU1LDEwLjI5YTQuMjEsNC4yMSwwLDAsMS0xLjQ3LDUuMTlsLTIwLjE5LDEzLjgzLjUtMTEuMzNDMTE5LjcsMTYwLjE1LDExOS41MSwxMTQuNzUsMTIxLjcxLDEwMC4yNVoiIGZpbGw9IiNmMmYyZjIiLz4KICAgICAgPHBhdGggZD0iTTIzLjI4LDExMi4zN2MyLjUyLTIuMzIsMjEuMjItOS43NSw0MS45My0xOC43MUM2OSwxMTUuMTIsNjUsMTcxLjM0LDc4Ljc3LDE5OC41Mkw2Ni40Miw0NTAuNjZzLTM5LjgyLDEuOTEtNDAuNzYuODNTMzUuODYsMjI0LjksMzQsMjE1LjY3QzMxLjk0LDIwNS41OSwxOS4yNSwxMTYuMDksMjMuMjgsMTEyLjM3WiIgZmlsbD0iI2ZmZiIvPgogICAgICA8cGF0aCBkPSJNNzguNzcsMTk4LjUxQzczLjUsMTg3LjIyLDY4LjEsOTIuNDUsNjguMSw5Mi40NXMtMTEuOTQsNS0xMi4yNyw1LjI5Yy0uOC44NC43OCw3OC43OC44NSw3OC45M0EyOS43MywyOS43MywwLDAsMSw1MywxODIuNDVjLTIuNTYsMy4yLDI1LjIxLDI1LjYsMjUuMjEsMjUuNloiIGZpbGw9IiNmMmYyZjIiLz4KICAgICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTQ2LjA4LDI0Ny41NHM4LjQ0LDIuODIsMTAuODgsMi4yOCwxLjYsMy4zNy0xLjU4LDMuMTEtNS4wNy44OC0yLjcxLDEuODYsNS42LDIsNS42MywzLjY3LTIuNCwyLjE4LTIuNCwyLjE4YTEuMTYsMS4xNiwwLDAsMSwuNzIsMS40Yy0uMjcsMS0xLjc0LDIuNDEtMi44OSwxLjg0YTEuMjEsMS4yMSwwLDAsMSwuNjksMS41NWwtLjA2LjEyYy0uNiwxLjEzLTEuNzMsMi4xMy0yLjcsMS41OCwwLDAsMSwuNTktLjM1LDIuMzRzLTExLjY4LTMuMjMtMTIuNjgtNC4xNVMzNCwyNTkuNiwzNCwyNTkuNloiIGZpbGw9IiNmZmU2Y2QiLz4KICAgICAgICA8cGF0aCBkPSJNNDIuMzcsMjQzLjM5bDQuNDEsNC40Yy0yLjY3LDYuNDYtMTEuMjIsMTMuNy0xMS4yMiwxMy43bC00Ljg3LTQuMzJDMzYuMDksMjUyLjg1LDQwLjczLDI0Niw0Mi4zNywyNDMuMzlaIiBmaWxsPSIjZmY4NzYwIi8+CiAgICAgICAgPHBhdGggZD0iTS0xMywxODkuNzFjMS0xLjA4LDQzLjY5LTI4LjA3LDQzLjY5LTI4LjA3bDguOTEtNTUuMTdzLTkuMjgtNS4xNC0zOCwyMy43NmMtMjkuNzgsMzAtNDIuMjksNDMuNy00Mi4yOSw0My43cy0xMi44NywxNC01LjU0LDIwLjE3TDMyLDI1OS43NEMzNy44NCwyNTUsNDMsMjQ3LjcyLDQ0Ljc4LDI0NSwzMCwyMzAuMy0xMS4xLDE3Ny4wNi0xMS45MiwxNzYuMTUiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8cGF0aCBkPSJNNTUuMzEsMjYzLjY4bC02LjA4LTMuMTVzLS42LjM5LDEuMTQsMS4yNWEyNi41MSwyNi41MSwwLDAsMSwzLjM2LDIuMDlBMS42NiwxLjY2LDAsMCwwLDU1LjMxLDI2My42OFoiIGZpbGw9IiNmZmQ1YWMiIG9wYWNpdHk9IjAuMyIgc3R5bGU9Imlzb2xhdGlvbjogaXNvbGF0ZSIvPgogICAgICAgIDxwYXRoIGQ9Ik01Ni42OSwyNjAuMzdhNDIuNzMsNDIuNzMsMCwwLDEtNS42Ni0yLjNzLS40NS4xNywxLC44OCwzLjg5LDEuNjksMy44OSwxLjY5QTIsMiwwLDAsMCw1Ni42OSwyNjAuMzdaIiBmaWxsPSIjZmZkNWFjIiBvcGFjaXR5PSIwLjMiIHN0eWxlPSJpc29sYXRpb246IGlzb2xhdGUiLz4KICAgICAgICA8cGF0aCBkPSJNNTIuNywyNjcuMkE2Ni4xNSw2Ni4xNSwwLDAsMSw0Ni44NCwyNjRzMSwxLjU4LDQuODIsMy4xMUExLDEsMCwwLDAsNTIuNywyNjcuMloiIGZpbGw9IiNmZmQ1YWMiIG9wYWNpdHk9IjAuMyIgc3R5bGU9Imlzb2xhdGlvbjogaXNvbGF0ZSIvPgogICAgICA8L2c+CiAgICAgIDxwYXRoIGQ9Ik0xMjkuMTgsMjY5LjMybC04LjQ1LTcuNTdhLjUzLjUzLDAsMCwwLS45My4zNHYzLjU1YS41Ni41NiwwLDAsMCwuMTMuMzVsOC40NSw2Ljg5YS41My41MywwLDAsMCwuNzQsMCwuNS41LDAsMCwwLC4xOC0uMzl2LTIuODhBLjUuNSwwLDAsMCwxMjkuMTgsMjY5LjMyWiIgZmlsbD0iI2Y2Y2ZjNiIvPgogICAgICA8cGF0aCBkPSJNNTEuOCwyNzUuNSw2Ni41LDI2M2EuNTMuNTMsMCwwLDEsLjkzLjMzdjMuNTVhLjUxLjUxLDAsMCwxLS4xMy4zNUw1Mi42LDI3OS4wNmEuNTEuNTEsMCwwLDEtLjc0LDAsLjUzLjUzLDAsMCwxLS4xOC0uMzl2LTIuODdBLjU0LjU0LDAsMCwxLDUxLjgsMjc1LjVaIiBmaWxsPSIjZjZjZmM2Ii8+CiAgICAgIDxsaW5lIHgxPSIyMTEuMzgiIHkxPSI3Mi4zNyIgeDI9IjE4OS4xMSIgeTI9IjEwMi43NiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjIxOTViIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIwLjQ1Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTE3MS4yNywwSDEzNS45MUE0LDQsMCwwLDAsMTMyLDQuMTFWMzEuMjNhNCw0LDAsMCwwLDMuOTIsNC4xMWgzNS4zNmE0LDQsMCwwLDAsMy45My00LjExVjQuMTFBNCw0LDAsMCwwLDE3MS4yNywwWiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xNTYuNzEsMjcuODZhMTAuODcsMTAuODcsMCwwLDEtMy42NCw4Ljk0LDE5LjgxLDE5LjgxLDAsMCwxLTYuMiwzLjczLjYuNiwwLDAsMS0uNzYtLjM5LjYyLjYyLDAsMCwxLC4xMS0uNTcsMTMuMzYsMTMuMzYsMCwwLDAsMi0xMS45NSIgZmlsbD0iI2ZmZiIvPgogICAgICA8L2c+CiAgICAgIDxjaXJjbGUgY3g9IjE0My4zNSIgY3k9IjE4LjAyIiByPSIyLjciIGZpbGw9IiNmZjk5ODMiLz4KICAgICAgPGNpcmNsZSBjeD0iMTU0LjE1IiBjeT0iMTguMDIiIHI9IjIuNyIgZmlsbD0iI2ZmOTk4MyIvPgogICAgICA8Y2lyY2xlIGN4PSIxNjQuOTYiIGN5PSIxOC4wMiIgcj0iMi43IiBmaWxsPSIjZmY5OTgzIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"},478:function(e,t,i){"use strict";i(5),i(3),i(1),i(11);var n=i(0),r=i.n(n),a=i(156),M=i(457),o=i(427);t.a=function(e){var t=e.onClick,i=e.active;!function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i])}(e,["onClick","active"]);return r.a.createElement(a.a,{width:.5,px:"0.5em",my:"1em"},r.a.createElement(o.a.choice,{active:i,onClick:t},r.a.createElement(M.a,{width:"70%"})))}},479:function(e,t,i){"use strict";i(5),i(3),i(1),i(11);var n=i(0),r=i.n(n),a=i(156),M=i(458),o=i(427);t.a=function(e){var t=e.onClick,i=e.active;!function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i])}(e,["onClick","active"]);return r.a.createElement(a.a,{width:.5,px:"0.5em",my:"1em"},r.a.createElement(o.a.choice,{active:i,onClick:t},r.a.createElement(M.a,{width:"70%"})))}},586:function(e,t,i){"use strict";var n=i(32),r=i(159),a=i(174);t.a=Object(r.b)(function(e){return{testAnswers:e.setting.get("testAnswers").toJS()}},function(e){return Object(n.a)({setAnswer:a.b},e)})},601:function(e,t,i){"use strict";i.d(t,"b",function(){return d});i(5),i(3),i(1);var n=i(0),r=i.n(n),a=i(431),M=i(480),o=i(32),c=(i(621),i(156)),s=i(426),u=i(432),I=i(425),l=i(478),L=i(479),g=i(427),j=i(442),N=i(439),w=i(44),C=i(586),y=i(604),D=i.n(y),m=i(437),x=i(430);var d=["是否明確告訴\n醫師所有不適症狀？","是否詢問醫師\n你的症狀是哪種病？","是否告知醫師\n你的病史或過敏情形？","是否充分了解\n自己需要進行那些治療？","是否充分了解\n藥物的服用方式？","是否充分了解\n所服用藥物得副作用？","是否遵從醫師\n的服藥指示按時用藥？","在看診後是否\n有紀錄醫師說的注意事項"],T=function(e){var t,i;function n(){return e.apply(this,arguments)||this}return i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i,n.prototype.render=function(){var e=this.props,t=e.setAnswer,i=e.isMobile,n=r.a.createElement(u.a,{py:"1em"},r.a.createElement(j.a,{icon:D.a,title:"上一次看診時，你的表現如何",justifyContent:"center"}),r.a.createElement(M.c,{initialValues:{q:[]},onSubmit:function(e){var i=e.q;t(i),Object(a.c)("/test/result")}},function(e){var t=e.handleChange,i=e.values;return console.log(i.q)||r.a.createElement(M.b,null,r.a.createElement(I.a,{flexDirection:Object(w.d)("column","row"),flexWrap:"wrap",alignItems:"center"},d.map(function(e,n){return r.a.createElement(c.a,{mt:"2em",width:Object(w.d)(1,.25),key:n},r.a.createElement(c.a,{mx:Object(w.d)("1em","0.5em"),bg:"white",boxShadow:"0px 3px 4px 4px rgba(0,0,0,0.1)",borderRadius:"1em"},r.a.createElement(I.a,{bg:"questionBg",px:"2.5em",borderRadius:"1em 1em 0 0",height:Object(w.d)("6em","4.5em"),alignItems:"center",justifyContent:"center"},r.a.createElement(s.a,{textAlign:"center",whiteSpace:"pre",lineHeight:"1.4",fontSize:Object(w.d)("1.25em","1em")},e)),r.a.createElement(I.a,{px:"0.5em",py:"0.5em",mx:Object(w.d)("2em","0.5em")},r.a.createElement(l.a,{active:i.q[n],onClick:function(){return t({target:{name:"q["+n+"]",value:!0},persist:function(){}})}}),r.a.createElement(L.a,{active:!1===i.q[n],onClick:function(){return t({target:{name:"q["+n+"]",value:!1},persist:function(){}})}}))))})),r.a.createElement(c.a,{my:"2em",textAlign:"center"},r.a.createElement(g.a,{type:"submit",px:"2em"},"查看測驗結果")))}));return r.a.createElement(m.a,{headerBg:Object(w.d)("lightBgOrange","auto")},i?n:r.a.createElement(N.a,null,n))},n}(n.PureComponent);t.a=Object(o.c)(C.a,x.a)(T)},604:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MSIgaGVpZ2h0PSI5MSIgdmlld0JveD0iMCAwIDkxIDkxIj4KICA8ZyBpZD0iR3JvdXBfMjIzNiIgZGF0YS1uYW1lPSJHcm91cCAyMjM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDgxMSAtMTI0MjYpIj4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfMTA0MCIgZGF0YS1uYW1lPSJFbGxpcHNlIDEwNDAiIGN4PSI0NS41IiBjeT0iNDUuNSIgcj0iNDUuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwODExIDEyNDI2KSIgZmlsbD0iI2ZmZTRkZSIvPgogICAgPGcgaWQ9Ikdyb3VwXzIyMjIiIGRhdGEtbmFtZT0iR3JvdXAgMjIyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOTQwLjg2NSAxMDkxOC4xOTkpIj4KICAgICAgPHBhdGggaWQ9IlJlY3RhbmdsZV8zMzEiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDMzMSIgZD0iTTExNTEuMjI2LDE1MjYuOGg0OC4yNTFhNS40ODksNS40ODksMCwwLDEsNS4zNjEsNS42MDh2MzcuMDE1YTUuNDg5LDUuNDg5LDAsMCwxLTUuMzYxLDUuNjA4aC00OC4yNTFhNS40ODksNS40ODksMCwwLDEtNS4zNjEtNS42MDh2LTM3LjAxNUE1LjQ4OSw1LjQ4OSwwLDAsMSwxMTUxLjIyNiwxNTI2LjhaIiBmaWxsPSIjMjIxOTViIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzk1MCIgZGF0YS1uYW1lPSJQYXRoIDk1MCIgZD0iTTExNjYuNjc0LDE1NjQuODI4Yy0uNTU1LDQuNTU5LDEuNyw5LjEyNSw0Ljk3MiwxMi4xOWEyNi42NzYsMjYuNjc2LDAsMCwwLDguNDU1LDUuMDkxLjgxNy44MTcsMCwwLDAsLjg4My0xLjMsMTguMiwxOC4yLDAsMCwxLTIuNzI0LTE2LjMxIiBmaWxsPSIjMjIxOTViIi8+CiAgICAgIDxnIGlkPSJHcm91cF8xMzY2IiBkYXRhLW5hbWU9Ikdyb3VwIDEzNjYiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoXzk1MSIgZGF0YS1uYW1lPSJQYXRoIDk1MSIgZD0iTTExNzAuNzMxLDE1NTUuOTM5di0uNzczYzAtMi44MjksMS4xMjUtNC45MDYsNC4yNTctNy42OTQsMS43NTgtMS41NzUsMi4yODMtMi44NDUsMi4yODMtNC4zMzhhMi43MTEsMi43MTEsMCwwLDAtMi45NzEtMi45MTNjLTIuMzcxLDAtMy4xOTMsMS42MzYtMy40MTQsMy42ODhoLTUuOTQ3Yy4yLTMuNTQ1LDIuNDUyLTguMzkyLDkuNDc4LTguMzU1LDYuOTMxLjAzNyw4Ljk2Niw0LjUxNiw4Ljk2Niw3LjgsMCwyLjY1LS44NjYsNC40ODktMy45MjEsNy4zMTctMS44LDEuNy0yLjQxMSwzLjA3My0yLjQxMSw0LjgyNXYuNDQ1Wm0wLDkuMTg5di03LjAwNWg2LjMydjcuMDA1WiIgZmlsbD0iI2ZhN2U1YiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-test-index-js-835bba2e2a8bf7b018f1.js.map