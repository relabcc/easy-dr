(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{411:function(e,t,i){"use strict";i.r(t);i(8);var n=i(0),I=i.n(n),a=i(431),r=i(508),c=i(583);t.default=Object(c.a)(function(e){return I.a.createElement(r.a,Object.assign({onNext:function(){return Object(a.c)("/memo/new/3")}},e))})},429:function(e,t,i){"use strict";i(5),i(3),i(1),i(11);var n=i(0),I=i.n(n),a=i(4),r=i.n(a),c=i(156);var g=function(e){var t=e.children,i=e.border,n=e.borderColor,a=e.bg,r=e.is,g=e.left,o=function(e,t){if(null==e)return{};var i,n,I={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(I[i]=e[i]);return I}(e,["children","border","borderColor","bg","is","left"]);return I.a.createElement(c.a,o,I.a.createElement(c.a,{position:"relative",pt:"100%"},I.a.createElement(c.a,{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",width:1,borderRadius:"50%",border:i,borderColor:n,bg:a,is:r},I.a.createElement(c.a,{top:"50%",left:g||"50%",transform:"translate(-50%, -50%)",position:"absolute",lineHeight:"0"},t))))};g.propTypes={children:r.a.node,border:r.a.string,borderColor:r.a.string,bg:r.a.string,is:r.a.oneOfType([r.a.string,r.a.func])},g.displayName="Circle",t.a=g},432:function(e,t,i){"use strict";var n=i(0),I=i.n(n),a=i(156),r=i(44),c=function(e){return I.a.createElement(a.a,e)};c.defaultProps={mx:"auto",px:["1em",null,"2em"],width:1,maxWidth:r.b},c.displayName="Container",t.a=c},440:function(e,t,i){"use strict";i(5),i(3),i(1),i(11),i(8);var n=i(0),I=i.n(n),a=i(156),r=i(4),c=i.n(r),g=i(467),o=i(113),M=i.n(o);var u=function(e){var t,i;function n(){for(var t,i=arguments.length,n=new Array(i),I=0;I<i;I++)n[I]=arguments[I];return(t=e.call.apply(e,[this].concat(n))||this).state={count:0,shouldCenter:!0},t.clearCount=function(){t.setState({count:0}),delete t.timer},t.handleBoxRef=function(e){t.setState({boxRef:e})},t}i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i,n.getDerivedStateFromProps=function(e,t){var i=e.size,n=t.boxRef,I=t.count;if(n&&i.height&&I<6){var a=n.getBoundingClientRect().height;if(a&&i.height)return{shouldCenter:i.height>a,count:I+1}}return{}};var r=n.prototype;return r.componentDidUpdate=function(e,t){var i=e.size,n=this.state.shouldCenter;n!==t.shouldCenter&&this.props.onAlignChange(n),i===this.props.size.height||this.timer||(this.timer=setTimeout(this.clearCount,500))},r.render=function(){var e=this.props,t=e.children,i=(e.onAlignChange,e.size,function(e,t){if(null==e)return{};var i,n,I={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(I[i]=e[i]);return I}(e,["children","onAlignChange","size"])),n=this.state.shouldCenter;return I.a.createElement(a.a,Object.assign({position:"relative",width:"100%",height:"100%"},i),I.a.createElement(a.a,{position:n&&"absolute",top:n?"50%":0,width:1,transform:n&&"translateY(-50%)",ref:this.handleBoxRef},M()(t)?t(n):t))},n}(n.PureComponent);u.displayName="VerticalCenter",u.propTypes={onAlignChange:c.a.func},u.defaultProps={onAlignChange:function(){}};var l=Object(g.withSize)({monitorHeight:!0,monitorWidth:!1})(u),m=i(44);var s=function(e){var t,i;function n(){for(var t,i=arguments.length,n=new Array(i),I=0;I<i;I++)n[I]=arguments[I];return(t=e.call.apply(e,[this].concat(n))||this).state={isCenter:!0},t.handleCenter=function(e){return t.setState({isCenter:e})},t}return i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i,n.prototype.render=function(){var e=this.props,t=e.noHeader,i=e.noFooter,n=function(e,t){if(null==e)return{};var i,n,I={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(I[i]=e[i]);return I}(e,["noHeader","noFooter"]),r=this.state.isCenter;return I.a.createElement(a.a,{height:r&&"100vh",minHeight:"100vh",mt:!t&&"-"+m.c.headerHeight,pt:!t&&m.c.headerHeight,mb:!i&&"-"+m.c.footerHeight,pb:!i&&m.c.footerHeight},I.a.createElement(l,Object.assign({onAlignChange:this.handleCenter},n)))},n}(n.PureComponent);t.a=s},448:function(e,t,i){"use strict";i(5),i(3),i(1),i(11),i(8);var n=i(0),I=i.n(n),a=i(156),r=i(425),c=i(426),g=i(428),o=i(44);t.a=function(e){e.children;var t=e.icon,i=e.title,n=e.description,M=e.fontWeight,u=e.width,l=e.mobileWidth,m=e.fontSize,s=e.desfontSize,N=e.mobileFontSize,D=e.imgwidth,C=e.textAlign,j=function(e,t){if(null==e)return{};var i,n,I={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(I[i]=e[i]);return I}(e,["children","icon","title","description","fontWeight","width","mobileWidth","fontSize","desfontSize","mobileFontSize","imgwidth","textAlign"]);return I.a.createElement(r.a,Object.assign({alignItems:"center",px:Object(o.d)("1em","2em")},j),I.a.createElement(a.a,{width:Object(o.d)(l||1/3,u||1/11),textAlign:"center",px:"1em"},I.a.createElement(g.a,{width:D,src:t})),I.a.createElement(a.a,{width:Object(o.d)(j.flexWrap?1:.75,"auto"),py:Object(o.d)("0.5em","1em"),textAlign:C||"left",mx:Object(o.d)(0,"1em")},I.a.createElement(c.a.h2,{fontSize:Object(o.d)(N||"1.25em",m||"1.5em"),whiteSpace:"pre-wrap",fontWeight:M||"bold"},i),I.a.createElement(c.a,{fontSize:Object(o.d)("1em",s||"1em"),whiteSpace:"pre-wrap"},n)))}},461:function(e,t,i){"use strict";i(8);var n=i(0),I=i.n(n),a=i(433);t.a=function(e){return I.a.createElement(a.a,Object.assign({viewBox:"0 0 29.333 29.333"},e),I.a.createElement("g",{fill:"none",stroke:"currentColor",strokeWidth:"5"},I.a.createElement("circle",{cx:"14.667",cy:"14.667",r:"14.667",stroke:"none"}),I.a.createElement("circle",{cx:"14.667",cy:"14.667",r:"12.167",fill:"none"})))}},462:function(e,t,i){"use strict";i(8);var n=i(0),I=i.n(n),a=i(433);t.a=function(e){return I.a.createElement(a.a,Object.assign({viewBox:"0 0 21.535 21.535"},e),I.a.createElement("g",{transform:"translate(-1958.732 -826.732)"},I.a.createElement("line",{id:"Line_155","data-name":"Line 155",x2:"18",y2:"18",transform:"translate(1960.5 828.5)",fill:"none",stroke:"currentColor",strokeWidth:"5"}),I.a.createElement("line",{id:"Line_156","data-name":"Line 156",x1:"18",y2:"18",transform:"translate(1960.5 828.5)",fill:"none",stroke:"currentColor",strokeWidth:"5"})))}},463:function(e,t,i){"use strict";i(5),i(3),i(1),i(11),i(8);var n=i(0),I=i.n(n),a=i(111),r=i.n(a),c=i(156),g=i(425),o=i(426),M=i(429),u=i(44);var l=["描述症狀","用藥病史","生成備忘錄"];t.a=function(e){var t=e.step,i=function(e,t){if(null==e)return{};var i,n,I={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(I[i]=e[i]);return I}(e,["step"]);return I.a.createElement(g.a,Object.assign({justifyContent:"center",mx:Object(u.d)("2em",0),pb:"1em"},i),r()(3).map(function(e){return I.a.createElement(c.a,{mx:Object(u.d)("0.5em","2em"),width:Object(u.d)(1/3,"auto"),key:e},I.a.createElement(c.a,{width:"2em",mx:"auto",position:"relative"},I.a.createElement(M.a,{color:"white",bg:e+1===t?"titleBlue":"lightBgPurple"},e+1),e<2&&I.a.createElement(c.a,{bg:"lightBgPurple",px:["2.5em","3.5em"],height:"2px",position:"absolute",top:"50%",left:"100%",transform:"translateY(-50%)"})),I.a.createElement(o.a,{textAlign:"center",mt:"0.75em",fontSize:["0.8em","1em"],fontWeight:"bold",color:e+1===t?"titleBlue":"lightBgPurple"},l[e]))}))}},464:function(e,t,i){"use strict";var n=i(0),I=i.n(n),a=i(156),r=i(44);t.a=function(e){var t=e.children;return I.a.createElement(a.a,{position:"absolute",left:"0",bottom:"0",color:"#F4F1F5",fontSize:"50vh",transform:"translateX(-33%)",lineHeight:"initial",overflowY:"hidden",display:Object(r.d)("none","block")},I.a.createElement(a.a,{transform:"translateY(14%)"},t))}},468:function(e,t,i){"use strict";i(5),i(3),i(1),i(11),i(8),i(20);var n=i(0),I=i.n(n),a=i(4),r=i.n(a),c=i(56),g=i(16),o=i(450),M=i(158),u=i.n(M),l=i(425),m=i(156),s=i(426);var N=Object(c.default)(u.a).withConfig({displayName:"Input__TextInput",componentId:"sc-18aeq9c-0"})(["font-family:inherit;width:100%;padding:0.25em 0;border:none;border-bottom:1px solid ",";line-height:1.5;border-radius:0;font-size:inherit;"," &::placeholder{color:",";}"],Object(o.a)("colors.lightOrange"),g.r,Object(o.a)("colors.gray")),D=function(e){var t=e.label,i=e.labelWidth,a=e.name,r=e.placeholder,c=e.disabled,g=e.value,o=e.onChange,M=e.onBlur,u=e.error,D=e.type,C=e.min,j=e.max,S=e.textAlign,d=e.step,y=e.autoFocus,b=e.textarea,A=e.fontSize,h=function(e,t){if(null==e)return{};var i,n,I={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(I[i]=e[i]);return I}(e,["label","labelWidth","name","placeholder","disabled","value","onChange","onBlur","error","type","min","max","textAlign","step","autoFocus","textarea","fontSize"]);return I.a.createElement(l.a,Object.assign({is:"label"},h),t&&I.a.createElement(m.a,{mr:"1em",width:i},I.a.createElement(s.a,{fontWeight:"bold"},t)),I.a.createElement(m.a,{flex:"1",fontSize:A||"1em"},Object(n.createElement)(N,{name:a,placeholder:r,disabled:c,value:g,onChange:o,onBlur:M,type:D,min:C,max:j,textAlign:S,step:d,autoFocus:y,is:b?"textarea":"input"}),u&&I.a.createElement(s.a,{fontSize:"0.8em",align:"left",color:"red",mt:"0.25rem"},u)))};D.propTypes={label:r.a.string,labelWidth:r.a.string,name:r.a.string,error:r.a.oneOfType([r.a.bool,r.a.string]),placeholder:r.a.string,disabled:r.a.bool,value:r.a.string,onChange:r.a.func,onKeyUp:r.a.func,onBlur:r.a.func},D.displayName="Input",t.a=D},481:function(e,t,i){"use strict";i(5),i(3),i(1),i(11);var n=i(0),I=i.n(n),a=i(156),r=i(461),c=i(427);t.a=function(e){var t=e.onClick,i=e.active;!function(e,t){if(null==e)return{};var i,n,I={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(I[i]=e[i])}(e,["onClick","active"]);return I.a.createElement(a.a,{width:.5,px:"0.5em",my:"1em"},I.a.createElement(c.a.choice,{active:i,onClick:t},I.a.createElement(r.a,{width:"70%"})))}},482:function(e,t,i){"use strict";i(5),i(3),i(1),i(11);var n=i(0),I=i.n(n),a=i(156),r=i(462),c=i(427);t.a=function(e){var t=e.onClick,i=e.active;!function(e,t){if(null==e)return{};var i,n,I={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(I[i]=e[i])}(e,["onClick","active"]);return I.a.createElement(a.a,{width:.5,px:"0.5em",my:"1em"},I.a.createElement(c.a.choice,{active:i,onClick:t},I.a.createElement(r.a,{width:"70%"})))}},505:function(e,t,i){var n=i(39),I=i(515),a=i(237),r="Expected a function",c=Math.max,g=Math.min;e.exports=function(e,t,i){var o,M,u,l,m,s,N=0,D=!1,C=!1,j=!0;if("function"!=typeof e)throw new TypeError(r);function S(t){var i=o,n=M;return o=M=void 0,N=t,l=e.apply(n,i)}function d(e){var i=e-s;return void 0===s||i>=t||i<0||C&&e-N>=u}function y(){var e=I();if(d(e))return b(e);m=setTimeout(y,function(e){var i=t-(e-s);return C?g(i,u-(e-N)):i}(e))}function b(e){return m=void 0,j&&o?S(e):(o=M=void 0,l)}function A(){var e=I(),i=d(e);if(o=arguments,M=this,s=e,i){if(void 0===m)return function(e){return N=e,m=setTimeout(y,t),D?S(e):l}(s);if(C)return clearTimeout(m),m=setTimeout(y,t),S(s)}return void 0===m&&(m=setTimeout(y,t)),l}return t=a(t)||0,n(i)&&(D=!!i.leading,u=(C="maxWait"in i)?c(a(i.maxWait)||0,t):u,j="trailing"in i?!!i.trailing:j),A.cancel=function(){void 0!==m&&clearTimeout(m),N=0,o=s=M=m=void 0},A.flush=function(){return void 0===m?l:b(I())},A}},507:function(e,t,i){var n;!function(I){"use strict";function a(e,t){var i=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(i>>16)<<16|65535&i}function r(e,t,i,n,I,r){return a((c=a(a(t,e),a(n,r)))<<(g=I)|c>>>32-g,i);var c,g}function c(e,t,i,n,I,a,c){return r(t&i|~t&n,e,t,I,a,c)}function g(e,t,i,n,I,a,c){return r(t&n|i&~n,e,t,I,a,c)}function o(e,t,i,n,I,a,c){return r(t^i^n,e,t,I,a,c)}function M(e,t,i,n,I,a,c){return r(i^(t|~n),e,t,I,a,c)}function u(e,t){var i,n,I,r,u;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var l=1732584193,m=-271733879,s=-1732584194,N=271733878;for(i=0;i<e.length;i+=16)n=l,I=m,r=s,u=N,l=c(l,m,s,N,e[i],7,-680876936),N=c(N,l,m,s,e[i+1],12,-389564586),s=c(s,N,l,m,e[i+2],17,606105819),m=c(m,s,N,l,e[i+3],22,-1044525330),l=c(l,m,s,N,e[i+4],7,-176418897),N=c(N,l,m,s,e[i+5],12,1200080426),s=c(s,N,l,m,e[i+6],17,-1473231341),m=c(m,s,N,l,e[i+7],22,-45705983),l=c(l,m,s,N,e[i+8],7,1770035416),N=c(N,l,m,s,e[i+9],12,-1958414417),s=c(s,N,l,m,e[i+10],17,-42063),m=c(m,s,N,l,e[i+11],22,-1990404162),l=c(l,m,s,N,e[i+12],7,1804603682),N=c(N,l,m,s,e[i+13],12,-40341101),s=c(s,N,l,m,e[i+14],17,-1502002290),l=g(l,m=c(m,s,N,l,e[i+15],22,1236535329),s,N,e[i+1],5,-165796510),N=g(N,l,m,s,e[i+6],9,-1069501632),s=g(s,N,l,m,e[i+11],14,643717713),m=g(m,s,N,l,e[i],20,-373897302),l=g(l,m,s,N,e[i+5],5,-701558691),N=g(N,l,m,s,e[i+10],9,38016083),s=g(s,N,l,m,e[i+15],14,-660478335),m=g(m,s,N,l,e[i+4],20,-405537848),l=g(l,m,s,N,e[i+9],5,568446438),N=g(N,l,m,s,e[i+14],9,-1019803690),s=g(s,N,l,m,e[i+3],14,-187363961),m=g(m,s,N,l,e[i+8],20,1163531501),l=g(l,m,s,N,e[i+13],5,-1444681467),N=g(N,l,m,s,e[i+2],9,-51403784),s=g(s,N,l,m,e[i+7],14,1735328473),l=o(l,m=g(m,s,N,l,e[i+12],20,-1926607734),s,N,e[i+5],4,-378558),N=o(N,l,m,s,e[i+8],11,-2022574463),s=o(s,N,l,m,e[i+11],16,1839030562),m=o(m,s,N,l,e[i+14],23,-35309556),l=o(l,m,s,N,e[i+1],4,-1530992060),N=o(N,l,m,s,e[i+4],11,1272893353),s=o(s,N,l,m,e[i+7],16,-155497632),m=o(m,s,N,l,e[i+10],23,-1094730640),l=o(l,m,s,N,e[i+13],4,681279174),N=o(N,l,m,s,e[i],11,-358537222),s=o(s,N,l,m,e[i+3],16,-722521979),m=o(m,s,N,l,e[i+6],23,76029189),l=o(l,m,s,N,e[i+9],4,-640364487),N=o(N,l,m,s,e[i+12],11,-421815835),s=o(s,N,l,m,e[i+15],16,530742520),l=M(l,m=o(m,s,N,l,e[i+2],23,-995338651),s,N,e[i],6,-198630844),N=M(N,l,m,s,e[i+7],10,1126891415),s=M(s,N,l,m,e[i+14],15,-1416354905),m=M(m,s,N,l,e[i+5],21,-57434055),l=M(l,m,s,N,e[i+12],6,1700485571),N=M(N,l,m,s,e[i+3],10,-1894986606),s=M(s,N,l,m,e[i+10],15,-1051523),m=M(m,s,N,l,e[i+1],21,-2054922799),l=M(l,m,s,N,e[i+8],6,1873313359),N=M(N,l,m,s,e[i+15],10,-30611744),s=M(s,N,l,m,e[i+6],15,-1560198380),m=M(m,s,N,l,e[i+13],21,1309151649),l=M(l,m,s,N,e[i+4],6,-145523070),N=M(N,l,m,s,e[i+11],10,-1120210379),s=M(s,N,l,m,e[i+2],15,718787259),m=M(m,s,N,l,e[i+9],21,-343485551),l=a(l,n),m=a(m,I),s=a(s,r),N=a(N,u);return[l,m,s,N]}function l(e){var t,i="",n=32*e.length;for(t=0;t<n;t+=8)i+=String.fromCharCode(e[t>>5]>>>t%32&255);return i}function m(e){var t,i=[];for(i[(e.length>>2)-1]=void 0,t=0;t<i.length;t+=1)i[t]=0;var n=8*e.length;for(t=0;t<n;t+=8)i[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return i}function s(e){var t,i,n="";for(i=0;i<e.length;i+=1)t=e.charCodeAt(i),n+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return n}function N(e){return unescape(encodeURIComponent(e))}function D(e){return function(e){return l(u(m(e),8*e.length))}(N(e))}function C(e,t){return function(e,t){var i,n,I=m(e),a=[],r=[];for(a[15]=r[15]=void 0,I.length>16&&(I=u(I,8*e.length)),i=0;i<16;i+=1)a[i]=909522486^I[i],r[i]=1549556828^I[i];return n=u(a.concat(m(t)),512+8*t.length),l(u(r.concat(n),640))}(N(e),N(t))}function j(e,t,i){return t?i?C(t,e):s(C(t,e)):i?D(e):s(D(e))}void 0===(n=function(){return j}.call(t,i,t,e))||(e.exports=n)}()},508:function(e,t,i){"use strict";i.d(t,"c",function(){return T}),i.d(t,"b",function(){return p});i(5),i(3),i(1),i(20),i(8);var n=i(0),I=i.n(n),a=i(507),r=i.n(a),c=i(483),g=i(505),o=i.n(g),M=i(440),u=i(156),l=i(425),m=i(427),s=i(426),N=(i(429),i(468)),D=i(428),C=i(463),j=i(481),S=i(482),d=i(448),y=i(432),b=i(44),A=i(464),h=i(519),L=i.n(h),x=i(520),z=i.n(x),Z=(i(521),i(437)),w=i(430);var T=["過去或現在有重大疾病/手術紀錄？","目前是否有正在服用的藥物？","是否有家族病史？","是否有任何藥物或食物過敏？","是否有抽菸、輪班工作、酗酒等生活習慣？","是否有偏好或感到焦慮的診療方式？如：您可能害怕打針"],p=T.map(function(e){return r()(e)}),f=p.reduce(function(e,t){var i;return Object.assign(e,((i={})[t]="",i))},{}),E=function(e){var t,i;function n(t){var i;return(i=e.call(this,t)||this).state={},i.handleSetAnswer=function(e){i.props.setAnswer(e)},i.handleChange=function(e){return function(t){e(t),i.handleSetAnswer(t.target)}},i.handleGenerating=function(){i.setState({generating:!0}),setTimeout(i.props.onNext,1500)},i.handleSetAnswer=o()(i.handleSetAnswer,500).bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(i)),i}return i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i,n.prototype.render=function(){var e=this,t=this.state.generating,i=this.props,n=i.answers,a=i.yesNo,r=i.isMobile,g=i.setAnswer,o=i.setYesNo;return t?I.a.createElement(Z.a,null,I.a.createElement(M.a,null,I.a.createElement(y.a,{textAlign:"center"},I.a.createElement(u.a,{display:"inline-block",my:"2em"},I.a.createElement(D.a,{width:"10em",src:z.a})),I.a.createElement(s.a.serif,{color:"titleBlue",fontSize:"1.5em",fontWeight:"bold"},"看診備忘錄生成中...")))):I.a.createElement(Z.a,{headerBg:Object(b.d)("lightBgOrange","auto")},I.a.createElement(A.a,null,"2"),I.a.createElement(y.a,{py:Object(b.d)("1em","3em"),position:"relative"},I.a.createElement(C.a,{step:2}),I.a.createElement(d.a,{title:"簡述自己的特殊狀況",description:"看診前先簡單自我檢測，讓醫生能更精準判斷該如何幫助你",icon:L.a}),I.a.createElement(c.c,{initialValues:Object.assign({},f,n),onSubmit:function(){g(n),e.handleGenerating()}},function(t){var i=t.handleChange,n=t.values;return I.a.createElement(c.b,null,I.a.createElement(l.a,{mx:Object(b.d)("1em",0),flexDirection:Object(b.d)("column","row"),flexWrap:"wrap",alignItems:"center",justifyContent:"center"},T.map(function(t,g){var M=p[g];return I.a.createElement(u.a,{mt:"2em",width:Object(b.d)(1,.25),key:g,mx:Object(b.d)(0,"0.5em"),boxShadow:"-0px 3px 4px 4px rgba(0,0,0,0.1)",bg:"white",borderRadius:"1em"},I.a.createElement(l.a,{bg:"questionBg",px:"1.5em",py:"1em",borderRadius:"0.8em 0.8em 0 0",height:"5em",alignItems:"center",justifyContent:"center",fontSize:Object(b.d)("1.25em","1em")},t),I.a.createElement(u.a,{pt:void 0===a[M]&&!r&&"1.5em",pb:void 0!==a[M]||r?"1em":"1.5em",mb:void 0===a[M]&&!r&&"1px"},I.a.createElement(l.a,{px:"0.5em",mx:Object(b.d)("3em","0.5em")},I.a.createElement(j.a,{active:a[M],onClick:function(){o({name:M,value:!0})}}),I.a.createElement(S.a,{active:!1===a[M],onClick:function(){o({name:M,value:!1})}})),a[M]&&I.a.createElement(u.a,{px:"2em"},I.a.createElement(N.a,{name:M,value:n[M],placeholder:"請輸入",onChange:e.handleChange(i),autoFocus:!0,fontSize:"1em"})),!1===a[M]&&!r&&I.a.createElement(u.a,{textAlign:"left",px:"2rem",pt:"0.75em",mb:"3px",color:"primary",fontSize:"1em"},"沒有"),I.a.createElement(c.a,{name:M},function(e){return I.a.createElement(s.a,{mx:"1em",color:"danger"},e)})))})),I.a.createElement(u.a,{mt:"2em",textAlign:"center"},I.a.createElement(m.a,{type:"submit"},"生成備忘錄")))})))},n}(n.PureComponent);t.a=Object(w.a)(E)},515:function(e,t,i){var n=i(36);e.exports=function(){return n.Date.now()}},519:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NSIgaGVpZ2h0PSI1OC40ODgiIHZpZXdCb3g9IjAgMCA1NSA1OC40ODgiPg0KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NjQxIC05MzM2KSI+DQogICAgPGNpcmNsZSAgY3g9IjI3LjUiIGN5PSIyNy41IiByPSIyNy41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzY0MSA5MzM2KSIgZmlsbD0iI2ZmZTRkZSIvPg0KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NjMzIDkzMzYuNjkzKSI+DQogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDQ1LjM5KSI+DQogICAgICAgIDxwYXRoIGQ9Ik01NzguNjM3LDE4ODkuOTU2YS42NDMuNjQzLDAsMCwwLC41MDgtMS4xNDYuNjQzLjY0MywwLDAsMC0uOTU0LjgxNWwtMy42NTQsNC45Ljg3OS02Ljc2Niw1Ljc4NC01LjMwNywxLjg1NiwxLjEyMiwxLjYsMS40NjEtMy40NDIsNy4wNTQtNi4yMzcsMi43NjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTc0LjUzOCAtMTg4Mi40NDgpIiBmaWxsPSIjN2Q3NmQxIi8+DQogICAgICA8L2c+DQogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjQyNikiPg0KICAgICAgICA8cGF0aCBkPSJNNTQ0LjUsMTg4Ny4yNzhsNC41OTMsMy4zNzZhMSwxLDAsMCwwLDEuNC0uMjE0bDMxLjQyMy00Mi42NTFhMy44NTIsMy44NTIsMCwwLDAtLjgyMy01LjM4NWgwYTMuODUyLDMuODUyLDAsMCwwLTUuMzg1LjgyM2wtMzEuNDIyLDQyLjY0OUExLDEsMCwwLDAsNTQ0LjUsMTg4Ny4yNzhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTQ0LjA5MyAtMTg0MS42NTYpIiBmaWxsPSIjMjIxOTViIi8+DQogICAgICAgIDxyZWN0IHdpZHRoPSI3LjcwNSIgaGVpZ2h0PSIwLjk2MyIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuODA2LCAtMC41OTIsIDAuNTkyLCAtMC44MDYsIDMxLjI2NywgMTUuMDU5KSIgZmlsbD0iIzdkNzZkMSIvPg0KICAgICAgPC9nPg0KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuNTkzIDYuMjY3KSI+DQogICAgICAgIDxwYXRoIGQ9Ik0wLDBILjkyOGEwLDAsMCwwLDEsMCwwVjE1LjE4OGEuNDE3LjQxNywwLDAsMS0uNDE3LjQxN0guNDE3QS40MTcuNDE3LDAsMCwxLDAsMTUuMTg4VjBBMCwwLDAsMCwxLDAsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMTIyIDEzLjA2MSkgcm90YXRlKC0xNDMuMjY3KSIgZmlsbD0iIzdkNzZkMSIvPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEwLjk0KSI+DQogICAgICAgICAgPHBhdGggZD0iTTU2NC41NzMsMTg1Ny41NDFsLTIuNTM4LDMuNGEyLjEyMiwyLjEyMiwwLDEsMSwyLjUzOC0zLjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTYxLjE4MiAtMTg1Ny4xMTkpIiBmaWxsPSIjN2Q3NmQxIi8+DQogICAgICAgIDwvZz4NCiAgICAgIDwvZz4NCiAgICAgIDxsaW5lIHgxPSIyLjg3MiIgeTI9IjUuNzciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNDI2IDQ4LjU4MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjUiLz4NCiAgICAgIDxsaW5lIHgxPSIyMS40OTYiIHkyPSIyOC42NDQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjM3OCAxNi43NDYpIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuNSIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo="},520:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxODEuNDI4IiBoZWlnaHQ9IjE4Ny41MDciIHZpZXdCb3g9IjAgMCAxODEuNDI4IDE4Ny41MDciPg0KICA8ZyBpZD0iR3JvdXBfMjIzMSIgZGF0YS1uYW1lPSJHcm91cCAyMjMxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDk5Ny4zMTggLTg5MjEuNDI3KSI+DQogICAgPGcgaWQ9Ikdyb3VwXzIyMTEiIGRhdGEtbmFtZT0iR3JvdXAgMjIxMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5MyAtMjg4KSI+DQogICAgICA8ZyBpZD0iR3JvdXBfMjIxMCIgZGF0YS1uYW1lPSJHcm91cCAyMjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTExMDUuMDMyIDY3MzIuMjk2KSI+DQogICAgICAgIDxwYXRoIGlkPSJQYXRoXzcxMSIgZGF0YS1uYW1lPSJQYXRoIDcxMSIgZD0iTTY3MC45NCwyNDQ4Ljd2NS4yMzlhMi4yNzksMi4yNzksMCwxLDEtMi4xNiwwVjI0NDguN2gtOS42NDl2NS4yMzlhMi4yNzksMi4yNzksMCwxLDEtMi4xNiwwVjI0NDguN2gtOS42NDh2NS4yMzlhMi4yNzksMi4yNzksMCwxLDEtMi4xNiwwVjI0NDguN2gtOS42NDh2NS4yMzlhMi4yNzksMi4yNzksMCwxLDEtMi4xNiwwVjI0NDguN2gtOS42NDh2NS4yMzlhMi4yNzksMi4yNzksMCwxLDEtMi4xNiwwVjI0NDguN0g2MTEuOXY1LjIzOWEyLjI3OSwyLjI3OSwwLDEsMS0yLjE2LDBWMjQ0OC43SDYwMC4wOXY1LjIzOWEyLjI3OSwyLjI3OSwwLDEsMS0yLjE2LDBWMjQ0OC43aC05LjY0OHY1LjIzOWEyLjI3OSwyLjI3OSwwLDEsMS0yLjE2LDBWMjQ0OC43aC05LjA5djEyMy44NjlINjgwLjIyNVYyNDQ4LjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMy42ODIgMjguNDI3KSIgZmlsbD0iI2ZmZTRkZSIvPg0KICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzgzNCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgODM0IiB3aWR0aD0iNjkuODc0IiBoZWlnaHQ9IjYuMTM4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MTcuMzc0IDI1MDUuMjc1KSIgZmlsbD0iI2ZmZiIvPg0KICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzgzNSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgODM1IiB3aWR0aD0iNjkuODc0IiBoZWlnaHQ9IjYuMTM4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MTcuMzc0IDI1MjIuMTEyKSIgZmlsbD0iI2ZmZiIvPg0KICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzgzNiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgODM2IiB3aWR0aD0iNjkuODc0IiBoZWlnaHQ9IjYuMTM4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MTcuMzc0IDI1MzguOTQ5KSIgZmlsbD0iI2ZmZiIvPg0KICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzgzNyIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgODM3IiB3aWR0aD0iNjkuODc0IiBoZWlnaHQ9IjYuMTM4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MTcuMzc0IDI1NTUuNzg3KSIgZmlsbD0iI2ZmZiIvPg0KICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzgzOCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgODM4IiB3aWR0aD0iNjkuODc0IiBoZWlnaHQ9IjYuMTM4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MTcuMzc0IDI1NzIuNjI0KSIgZmlsbD0iI2ZmZiIvPg0KICAgICAgICA8ZyBpZD0iR3JvdXBfMTIyOSIgZGF0YS1uYW1lPSJHcm91cCAxMjI5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQuMTIgMTAuMDc0KSI+DQogICAgICAgICAgPHBhdGggaWQ9IlBhdGhfMjgiIGRhdGEtbmFtZT0iUGF0aCAyOCIgZD0iTTcxMi40LDI2MTAuNjUybC04LjI1MywxNi44MDlhMjUuMTg2LDI1LjE4NiwwLDAsMCwxMS41MDksMzMuNzA4aDBhMjUuMTg2LDI1LjE4NiwwLDAsMCwzMy43MDktMTEuNTA3aDBsMTYuMzE5LTMzLjIzYTE3LjU2NiwxNy41NjYsMCwwLDEsMjMuNTA4LTguMDI2aDBhMTcuNTY2LDE3LjU2NiwwLDAsMSw4LjAyNSwyMy41MDdMNzk1LjgsMjYzNC44IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC42MSAtMTAuNzYyKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmY5OTgzIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMyIvPg0KICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMjMwIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAyMzAiIHdpZHRoPSIxOS40NzQiIGhlaWdodD0iMTcuMTA4IiByeD0iMy44MDYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcwMi4xNzQgMjYwMC4wNjUpIHJvdGF0ZSgtNjMuODUzKSIgZmlsbD0iIzU5NTA5YiIvPg0KICAgICAgICAgIDxnIGlkPSJHcm91cF8xNDciIGRhdGEtbmFtZT0iR3JvdXAgMTQ3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2OTcuMTU2IDI1NTUuMjAyKSI+DQogICAgICAgICAgICA8cGF0aCBpZD0iUGF0aF8yOSIgZGF0YS1uYW1lPSJQYXRoIDI5IiBkPSJNNzE0LjQ0NCwyNTk4LjcxM2EzMC45NjcsMzAuOTY3LDAsMCwxLTE2LjQtMzUuMTIyLDUuNDQxLDUuNDQxLDAsMCwxLDcuNjc4LTMuNmwuNTIxLjI1NWE1LjUsNS41LDAsMCwxLDIuODY2LDYuMjQ0LDE5LjQ4MiwxOS40ODIsMCwwLDAsMzQuMSwxNi43MzgsNS40OTQsNS40OTQsMCwwLDEsNi42OTEtMS41NWwuNTIzLjI1NWE1LjQ0Miw1LjQ0MiwwLDAsMSwyLjQ3OCw3LjI4Niw1LjUsNS41LDAsMCwxLS42My45OTFBMzAuOTY3LDMwLjk2NywwLDAsMSw3MTQuNDQ0LDI1OTguNzEzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY5Ny4xNTYgLTI1NTkuNDM1KSIgZmlsbD0iIzIyMTk1YiIvPg0KICAgICAgICAgIDwvZz4NCiAgICAgICAgICA8ZyBpZD0iR3JvdXBfMTQ4IiBkYXRhLW5hbWU9Ikdyb3VwIDE0OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzA1LjQ0MyAyNTI4Ljg2MikiPg0KICAgICAgICAgICAgPHBhdGggaWQ9IlBhdGhfMzAiIGRhdGEtbmFtZT0iUGF0aCAzMCIgZD0iTTcwNi43NzUsMjU1Ni43ODFzNC40NjctMjAuNzUxLDI0LjA4OC0xOS40OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcwNi43NzUgLTI1MzAuMDIyKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmY5OTgzIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMyIvPg0KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV8yMzEiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDIzMSIgd2lkdGg9IjEwLjEwNiIgaGVpZ2h0PSIxMC4xMDYiIHJ4PSIyLjUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMTg4IDkuMDcyKSByb3RhdGUoLTYzLjg1MykiIGZpbGw9IiMyMjE5NWIiLz4NCiAgICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzMxIiBkYXRhLW5hbWU9IlBhdGggMzEiIGQ9Ik03NTkuMywyNTgwLjczczEzLjY4Ny0xNi4yMjYuNjgxLTMwLjk2OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcxNC4wNDYgLTI1MzEuNzU1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmY5OTgzIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMyIvPg0KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV8yMzIiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDIzMiIgd2lkdGg9IjEwLjEwNiIgaGVpZ2h0PSIxMC4xMDYiIHJ4PSIyLjUyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzkuMDQ5IDE5LjMxMykgcm90YXRlKC02My44NTMpIiBmaWxsPSIjMjIxOTViIi8+DQogICAgICAgICAgPC9nPg0KICAgICAgICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfMzYiIGRhdGEtbmFtZT0iRWxsaXBzZSAzNiIgY3g9IjEzLjIyMSIgY3k9IjEzLjIyMSIgcj0iMTMuMjIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NzkuODIxIDI2MTUuMTg1KSIgZmlsbD0iIzIyMTk1YiIvPg0KICAgICAgICAgIDxwYXRoIGlkPSJFbGxpcHNlXzM2LTIiIGRhdGEtbmFtZT0iRWxsaXBzZSAzNiIgZD0iTTc5OC40NDcsMjY0OS44MThhMTAuNDc5LDEwLjQ3OSwwLDAsMSw4LjMxOC0xNi44NTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMy43MjMgLTE0LjQxMikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzU5NTA5YiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4NCiAgICAgICAgICA8cGF0aCBpZD0iRWxsaXBzZV8zNi0zIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzYiIGQ9Ik04MDguNDQ5LDI2MzIuOTY2YTEwLjQ3OSwxMC40NzksMCwwLDEsNi42LDE4LjYxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1LjQwNyAtMTQuNDEyKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTk1MDliIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPg0KICAgICAgICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfMzciIGRhdGEtbmFtZT0iRWxsaXBzZSAzNyIgY3g9IjMuNzY4IiBjeT0iMy43NjgiIHI9IjMuNzY4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3ODkuMjczIDI2MjQuNjM4KSIgZmlsbD0iIzU5NTA5YiIvPg0KICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzcxMiIgZGF0YS1uYW1lPSJQYXRoIDcxMiIgZD0iTTc1NS43MTEsMjU5My4yNzhzLTguMzgsMTEuMzQ3LTIyLjMxNSwxMC43MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01LjAxNyAtOC45MTcpIiBmaWxsPSJub25lIiBzdHJva2U9IiM1OTUwOWIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+DQogICAgICAgICAgPGxpbmUgaWQ9IkxpbmVfMzM3IiBkYXRhLW5hbWU9IkxpbmUgMzM3IiB4MT0iMi40MjkiIHkyPSI0LjcwNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzQ3LjI1MSAyNTQyLjA3KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTk1MDliIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPg0KICAgICAgICAgIDxsaW5lIGlkPSJMaW5lXzMzOCIgZGF0YS1uYW1lPSJMaW5lIDMzOCIgeDE9IjIuNDI5IiB5Mj0iNC43MDYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDczMS4zOTkgMjUzNC40NikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzU5NTA5YiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4NCiAgICAgICAgPC9nPg0KICAgICAgPC9nPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo="},521:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1Mi4zMyIgaGVpZ2h0PSI1MC44NjUiIHZpZXdCb3g9IjAgMCA1Mi4zMyA1MC44NjUiPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMjk2IC04MzgxLjA2NykiPgogICAgPGc+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDMzOCA3ODEyLjA2NykiPgogICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTI2MCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTI2MCIgd2lkdGg9IjM3LjE3MyIgaGVpZ2h0PSI1MC44NjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyIDU2OSkiIGZpbGw9IiNmZmU0ZGUiLz4KICAgICAgICA8cGF0aCBpZD0iUmVjdGFuZ2xlXzE4MiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTgyIiBkPSJNLTExLjMxMywyMjkwLjY2NEgxMi44MzlhMS44NDksMS44NDksMCwwLDEsMS43MjYsMS45NTJoMGExLjg1LDEuODUsMCwwLDEtMS43MjYsMS45NTJILTExLjMxM2ExLjg1LDEuODUsMCwwLDEtMS43MjYtMS45NTJoMEExLjg0OSwxLjg0OSwwLDAsMS0xMS4zMTMsMjI5MC42NjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OS44MjQgLTE3MTAuOTAzKSIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGlkPSJSZWN0YW5nbGVfMTgyLTIiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDE4MiIgZD0iTS0xMS4zMTMsMjI5Ni41NjFIMTIuODM5YTEuODUsMS44NSwwLDAsMSwxLjcyNiwxLjk1MmgwYTEuODQ5LDEuODQ5LDAsMCwxLTEuNzI2LDEuOTUySC0xMS4zMTNhMS44NDksMS44NDksMCwwLDEtMS43MjYtMS45NTJoMEExLjg1LDEuODUsMCwwLDEtMTEuMzEzLDIyOTYuNTYxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTkuODI0IC0xNzA4LjkxNykiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8cGF0aCBpZD0iUmVjdGFuZ2xlXzE4Mi0zIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxODIiIGQ9Ik0tMTEuMzEzLDIzMDIuNDU5SDEyLjgzOWExLjg0OSwxLjg0OSwwLDAsMSwxLjcyNiwxLjk1MmgwYTEuODUsMS44NSwwLDAsMS0xLjcyNiwxLjk1MkgtMTEuMzEzYTEuODUsMS44NSwwLDAsMS0xLjcyNi0xLjk1MmgwQTEuODQ5LDEuODQ5LDAsMCwxLTExLjMxMywyMzAyLjQ1OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU5LjgyNCAtMTcwNi45MzEpIiBmaWxsPSIjZmZmIi8+CiAgICAgICAgPHBhdGggaWQ9IlJlY3RhbmdsZV8xODItNCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTgyIiBkPSJNLTExLjMxMywyMzA4LjM1N0gxMi44MzlhMS44NDksMS44NDksMCwwLDEsMS43MjYsMS45NTJoMGExLjg1LDEuODUsMCwwLDEtMS43MjYsMS45NTJILTExLjMxM2ExLjg1LDEuODUsMCwwLDEtMS43MjYtMS45NTJoMEExLjg0OSwxLjg0OSwwLDAsMS0xMS4zMTMsMjMwOC4zNTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OS44MjQgLTE3MDQuOTQ0KSIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcwLjI5NCA1ODcuNzQpIj4KICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTI2MSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTI2MSIgd2lkdGg9IjguNDgxIiBoZWlnaHQ9IjI3LjQwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcuNTExIDApIHJvdGF0ZSgzOS43MTEpIiBmaWxsPSIjZmY5OTgzIi8+CiAgICAgICAgICA8cGF0aCBpZD0iUGF0aF8xOTE1IiBkYXRhLW5hbWU9IlBhdGggMTkxNSIgZD0iTTQuNTYsMjMxNy44bDEuNzM4LS4zMjEtMS43NDItMS40NDdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNC41NDQgLTIyOTAuMDk4KSIgZmlsbD0iI2ZjODI1YSIvPgogICAgICAgICAgPHBhdGggaWQ9IlBhdGhfMTkxNiIgZGF0YS1uYW1lPSJQYXRoIDE5MTYiIGQ9Ik00LjU0NywyMzEyLjRsLjAxMiw0Ljg1TDYuMywyMzE4LjdsNC43Ny0uODc5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQuNTQ3IC0yMjkxLjMyMSkiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8L2c+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="},583:function(e,t,i){"use strict";var n=i(33),I=i(159),a=i(169),r="creating";t.a=Object(I.b)(function(e){return{dots:e[r].get("dots").toJS(),yesNo:e[r].get("yesNo")?e[r].get("yesNo").toJS():{},answers:e[r].get("answers").toJS()}},function(e){return Object(n.a)({newDot:a.c,setDotData:a.f,removeDot:a.d,setAnswer:a.e,setYesNo:a.g,clearData:a.a},e)})}}]);
//# sourceMappingURL=component---src-pages-memo-new-2-js-5e3d10d2127b2baa14e1.js.map