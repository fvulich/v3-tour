var __defProp=Object.defineProperty,__hasOwnProp=Object.prototype.hasOwnProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(t,e,n)=>e in t?__defProp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,__assign=(t,e)=>{for(var n in e||(e={}))__hasOwnProp.call(e,n)&&__defNormalProp(t,n,e[n]);if(__getOwnPropSymbols)for(var n of __getOwnPropSymbols(e))__propIsEnum.call(e,n)&&__defNormalProp(t,n,e[n]);return t};!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).VueTour=e(t.Vue)}(this,(function(t){"use strict";const e={onStart:()=>{},onPreviousStep:t=>{},onNextStep:t=>{},onStop:()=>{},onSkip:()=>{},onFinish:()=>{}},n={highlight:!1,labels:{buttonSkip:"Skip tour",buttonPrevious:"Previous",buttonNext:"Next",buttonStop:"Finish"},enabledButtons:{buttonSkip:!0,buttonPrevious:!0,buttonNext:!0,buttonStop:!0},startTimeout:0,stopOnTargetNotFound:!0,useKeyboardNavigation:!0,enabledNavigationKeys:{escape:!0,arrowRight:!0,arrowLeft:!0},debug:!1},o={active:"v-tour--active",targetHighlighted:"v-tour__target--highlighted",targetRelative:"v-tour__target--relative"},i="box-shadow 0s ease-in-out 0s",r={enableScrolling:!0,highlight:n.highlight,enabledButtons:n.enabledButtons,modifiers:[{name:"arrow",options:{element:".v-step__arrow",padding:10}},{name:"preventOverflow",options:{rootBoundary:"window",padding:10}},{name:"offset",options:{offset:[0,10]}}],placement:"bottom"},s=37,a=39,c=27;const p={name:"v-tour",props:{steps:{type:Array,default:()=>[]},name:{type:String},options:{type:Object,default:()=>n},callbacks:{type:Object,default:()=>e}},data:()=>({currentStep:-1}),mounted(){this.$tours[this.name]=this},beforeUnmount(){this.customOptions.useKeyboardNavigation&&window.removeEventListener("keyup",this.handleKeyup)},computed:{customOptions(){return __assign(__assign({},n),this.options)},customCallbacks(){return __assign(__assign({},e),this.callbacks)},isRunning(){return this.currentStep>-1&&this.currentStep<this.numberOfSteps},isFirst(){return 0===this.currentStep},isLast(){return this.currentStep===this.steps.length-1},numberOfSteps(){return this.steps.length},step(){return this.steps[this.currentStep]}},methods:{async start(t){this.customOptions.useKeyboardNavigation&&window.addEventListener("keyup",this.handleKeyup),t=void 0!==t?parseInt(t,10):0;let e=this.steps[t];if(void 0!==e.before)try{await e.before("start")}catch(n){return Promise.reject(n)}return await(()=>new Promise(((e,n)=>{setTimeout((()=>{this.customCallbacks.onStart(),this.currentStep=t,e()}),this.customOptions.startTimeout)})))(),Promise.resolve()},async previousStep(){let t=this.currentStep-1,e=()=>new Promise(((e,n)=>{this.customCallbacks.onPreviousStep(this.currentStep),this.currentStep=t,e()}));if(t>-1){let o=this.steps[t];if(void 0!==o.before)try{await o.before("previous")}catch(n){return Promise.reject(n)}await e()}return Promise.resolve()},async nextStep(){let t=this.currentStep+1,e=()=>new Promise(((e,n)=>{this.customCallbacks.onNextStep(this.currentStep),this.currentStep=t,e()}));if(t<this.numberOfSteps&&-1!==this.currentStep){let o=this.steps[t];if(void 0!==o.before)try{await o.before("next")}catch(n){return Promise.reject(n)}await e()}return Promise.resolve()},stop(){this.customCallbacks.onStop(),document.body.classList.remove("v-tour--active"),this.currentStep=-1},skip(){this.customCallbacks.onSkip(),this.stop()},finish(){this.customCallbacks.onFinish(),this.stop()},handleKeyup(t){this.customOptions.debug&&console.log("[Vue Tour] A keyup event occured:",t);const e=t=>{var e,n;return!(null==(n=null==(e=this.steps[this.currentStep])?void 0:e.enabledButtons)?void 0:n.hasOwnProperty(t))||this.steps[this.currentStep].enabledButtons[t]};switch(t.keyCode){case s:console.log("AAAAAAAAAAAAAbuttonPreviousRight",e("buttonPrevious")),console.log("AAAAAAAAAAAAA",this.steps[this.currentStep]),e("buttonPrevious")&&this.isKeyEnabled("arrowRight")&&this.previousStep();break;case a:console.log("AAAAAAAAAAAAAbuttonNextLeft",e("buttonNext")),console.log("AAAAAAAAAAAAA",this.steps[this.currentStep]),e("buttonNext")&&this.isKeyEnabled("arrowLeft")&&this.nextStep();break;case c:this.isKeyEnabled("escape")&&this.stop()}},isKeyEnabled(t){const{enabledNavigationKeys:e}=this.customOptions;return!e.hasOwnProperty(t)||e[t]}}},u={class:"v-tour"};p.render=function(e,n,o,i,r,s){const a=t.resolveComponent("v-step");return t.openBlock(),t.createBlock("div",u,[t.renderSlot(e.$slots,"default",{currentStep:r.currentStep,steps:o.steps,previousStep:s.previousStep,nextStep:s.nextStep,stop:s.stop,skip:s.skip,finish:s.finish,isFirst:s.isFirst,isLast:s.isLast,labels:s.customOptions.labels,enabledButtons:s.customOptions.enabledButtons,highlight:s.customOptions.highlight,debug:s.customOptions.debug},(()=>[o.steps[r.currentStep]?(t.openBlock(),t.createBlock(a,{step:o.steps[r.currentStep],key:r.currentStep,"previous-step":s.previousStep,"next-step":s.nextStep,stop:s.stop,skip:s.skip,finish:s.finish,"is-first":s.isFirst,"is-last":s.isLast,labels:s.customOptions.labels,"enabled-buttons":s.customOptions.enabledButtons,highlight:s.customOptions.highlight,"stop-on-fail":s.customOptions.stopOnTargetNotFound,debug:s.customOptions.debug,ionic:s.customOptions.ionic,onTargetNotFound:n[1]||(n[1]=t=>e.$emit("targetNotFound",t))},null,8,["step","previous-step","next-step","stop","skip","finish","is-first","is-last","labels","enabled-buttons","highlight","stop-on-fail","debug","ionic"])):t.createCommentVNode("",!0)]))])};var l="top",f="bottom",d="right",h="left",m="auto",g=[l,f,d,h],v="start",b="end",y="viewport",w="popper",x=g.reduce((function(t,e){return t.concat([e+"-"+v,e+"-"+b])}),[]),O=[].concat(g,[m]).reduce((function(t,e){return t.concat([e,e+"-"+v,e+"-"+b])}),[]),S=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function k(t){return t?(t.nodeName||"").toLowerCase():null}function A(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function _(t){return t instanceof A(t).Element||t instanceof Element}function E(t){return t instanceof A(t).HTMLElement||t instanceof HTMLElement}function B(t){return"undefined"!=typeof ShadowRoot&&(t instanceof A(t).ShadowRoot||t instanceof ShadowRoot)}var P={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},o=e.attributes[t]||{},i=e.elements[t];E(i)&&k(i)&&(Object.assign(i.style,n),Object.keys(o).forEach((function(t){var e=o[t];!1===e?i.removeAttribute(t):i.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var o=e.elements[t],i=e.attributes[t]||{},r=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{});E(o)&&k(o)&&(Object.assign(o.style,r),Object.keys(i).forEach((function(t){o.removeAttribute(t)})))}))}},requires:["computeStyles"]};function j(t){return t.split("-")[0]}var L=Math.max,N=Math.min,C=Math.round;function T(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function D(){return!/^((?!chrome|android).)*safari/i.test(T())}function H(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=!1);var o=t.getBoundingClientRect(),i=1,r=1;e&&E(t)&&(i=t.offsetWidth>0&&C(o.width)/t.offsetWidth||1,r=t.offsetHeight>0&&C(o.height)/t.offsetHeight||1);var s=(_(t)?A(t):window).visualViewport,a=!D()&&n,c=(o.left+(a&&s?s.offsetLeft:0))/i,p=(o.top+(a&&s?s.offsetTop:0))/r,u=o.width/i,l=o.height/r;return{width:u,height:l,top:p,right:c+u,bottom:p+l,left:c,x:c,y:p}}function V(t){var e=H(t),n=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:o}}function M(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&B(n)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function F(t){return A(t).getComputedStyle(t)}function R(t){return["table","td","th"].indexOf(k(t))>=0}function W(t){return((_(t)?t.ownerDocument:t.document)||window.document).documentElement}function q(t){return"html"===k(t)?t:t.assignedSlot||t.parentNode||(B(t)?t.host:null)||W(t)}function I(t){return E(t)&&"fixed"!==F(t).position?t.offsetParent:null}function $(t){for(var e=A(t),n=I(t);n&&R(n)&&"static"===F(n).position;)n=I(n);return n&&("html"===k(n)||"body"===k(n)&&"static"===F(n).position)?e:n||function(t){var e=/firefox/i.test(T());if(/Trident/i.test(T())&&E(t)&&"fixed"===F(t).position)return null;var n=q(t);for(B(n)&&(n=n.host);E(n)&&["html","body"].indexOf(k(n))<0;){var o=F(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||e&&"filter"===o.willChange||e&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(t)||e}function K(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function U(t,e,n){return L(t,N(e,n))}function z(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function Y(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}function X(t){return t.split("-")[1]}var G={top:"auto",right:"auto",bottom:"auto",left:"auto"};function J(t){var e,n=t.popper,o=t.popperRect,i=t.placement,r=t.variation,s=t.offsets,a=t.position,c=t.gpuAcceleration,p=t.adaptive,u=t.roundOffsets,m=t.isFixed,g=s.x,v=void 0===g?0:g,y=s.y,w=void 0===y?0:y,x="function"==typeof u?u({x:v,y:w}):{x:v,y:w};v=x.x,w=x.y;var O=s.hasOwnProperty("x"),S=s.hasOwnProperty("y"),k=h,_=l,E=window;if(p){var B=$(n),P="clientHeight",j="clientWidth";if(B===A(n)&&"static"!==F(B=W(n)).position&&"absolute"===a&&(P="scrollHeight",j="scrollWidth"),B=B,i===l||(i===h||i===d)&&r===b)_=f,w-=(m&&B===E&&E.visualViewport?E.visualViewport.height:B[P])-o.height,w*=c?1:-1;if(i===h||(i===l||i===f)&&r===b)k=d,v-=(m&&B===E&&E.visualViewport?E.visualViewport.width:B[j])-o.width,v*=c?1:-1}var L,N=Object.assign({position:a},p&&G),T=!0===u?function(t,e){var n=t.x,o=t.y,i=e.devicePixelRatio||1;return{x:C(n*i)/i||0,y:C(o*i)/i||0}}({x:v,y:w},A(n)):{x:v,y:w};return v=T.x,w=T.y,c?Object.assign({},N,((L={})[_]=S?"0":"",L[k]=O?"0":"",L.transform=(E.devicePixelRatio||1)<=1?"translate("+v+"px, "+w+"px)":"translate3d("+v+"px, "+w+"px, 0)",L)):Object.assign({},N,((e={})[_]=S?w+"px":"",e[k]=O?v+"px":"",e.transform="",e))}var Q={passive:!0};var Z={left:"right",right:"left",bottom:"top",top:"bottom"};function tt(t){return t.replace(/left|right|bottom|top/g,(function(t){return Z[t]}))}var et={start:"end",end:"start"};function nt(t){return t.replace(/start|end/g,(function(t){return et[t]}))}function ot(t){var e=A(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function it(t){return H(W(t)).left+ot(t).scrollLeft}function rt(t){var e=F(t),n=e.overflow,o=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}function st(t){return["html","body","#document"].indexOf(k(t))>=0?t.ownerDocument.body:E(t)&&rt(t)?t:st(q(t))}function at(t,e){var n;void 0===e&&(e=[]);var o=st(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=A(o),s=i?[r].concat(r.visualViewport||[],rt(o)?o:[]):o,a=e.concat(s);return i?a:a.concat(at(q(s)))}function ct(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function pt(t,e,n){return e===y?ct(function(t,e){var n=A(t),o=W(t),i=n.visualViewport,r=o.clientWidth,s=o.clientHeight,a=0,c=0;if(i){r=i.width,s=i.height;var p=D();(p||!p&&"fixed"===e)&&(a=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:a+it(t),y:c}}(t,n)):_(e)?function(t,e){var n=H(t,!1,"fixed"===e);return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}(e,n):ct(function(t){var e,n=W(t),o=ot(t),i=null==(e=t.ownerDocument)?void 0:e.body,r=L(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=L(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-o.scrollLeft+it(t),c=-o.scrollTop;return"rtl"===F(i||n).direction&&(a+=L(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:s,x:a,y:c}}(W(t)))}function ut(t,e,n,o){var i="clippingParents"===e?function(t){var e=at(q(t)),n=["absolute","fixed"].indexOf(F(t).position)>=0&&E(t)?$(t):t;return _(n)?e.filter((function(t){return _(t)&&M(t,n)&&"body"!==k(t)})):[]}(t):[].concat(e),r=[].concat(i,[n]),s=r[0],a=r.reduce((function(e,n){var i=pt(t,n,o);return e.top=L(i.top,e.top),e.right=N(i.right,e.right),e.bottom=N(i.bottom,e.bottom),e.left=L(i.left,e.left),e}),pt(t,s,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function lt(t){var e,n=t.reference,o=t.element,i=t.placement,r=i?j(i):null,s=i?X(i):null,a=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2;switch(r){case l:e={x:a,y:n.y-o.height};break;case f:e={x:a,y:n.y+n.height};break;case d:e={x:n.x+n.width,y:c};break;case h:e={x:n.x-o.width,y:c};break;default:e={x:n.x,y:n.y}}var p=r?K(r):null;if(null!=p){var u="y"===p?"height":"width";switch(s){case v:e[p]=e[p]-(n[u]/2-o[u]/2);break;case b:e[p]=e[p]+(n[u]/2-o[u]/2)}}return e}function ft(t,e){void 0===e&&(e={});var n=e,o=n.placement,i=void 0===o?t.placement:o,r=n.strategy,s=void 0===r?t.strategy:r,a=n.boundary,c=void 0===a?"clippingParents":a,p=n.rootBoundary,u=void 0===p?y:p,h=n.elementContext,m=void 0===h?w:h,v=n.altBoundary,b=void 0!==v&&v,x=n.padding,O=void 0===x?0:x,S=z("number"!=typeof O?O:Y(O,g)),k=m===w?"reference":w,A=t.rects.popper,E=t.elements[b?k:m],B=ut(_(E)?E:E.contextElement||W(t.elements.popper),c,u,s),P=H(t.elements.reference),j=lt({reference:P,element:A,strategy:"absolute",placement:i}),L=ct(Object.assign({},A,j)),N=m===w?L:P,C={top:B.top-N.top+S.top,bottom:N.bottom-B.bottom+S.bottom,left:B.left-N.left+S.left,right:N.right-B.right+S.right},T=t.modifiersData.offset;if(m===w&&T){var D=T[i];Object.keys(C).forEach((function(t){var e=[d,f].indexOf(t)>=0?1:-1,n=[l,f].indexOf(t)>=0?"y":"x";C[t]+=D[n]*e}))}return C}function dt(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function ht(t){return[l,d,f,h].some((function(e){return t[e]>=0}))}function mt(t,e,n){void 0===n&&(n=!1);var o,i,r=E(e),s=E(e)&&function(t){var e=t.getBoundingClientRect(),n=C(e.width)/t.offsetWidth||1,o=C(e.height)/t.offsetHeight||1;return 1!==n||1!==o}(e),a=W(e),c=H(t,s,n),p={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(r||!r&&!n)&&(("body"!==k(e)||rt(a))&&(p=(o=e)!==A(o)&&E(o)?{scrollLeft:(i=o).scrollLeft,scrollTop:i.scrollTop}:ot(o)),E(e)?((u=H(e,!0)).x+=e.clientLeft,u.y+=e.clientTop):a&&(u.x=it(a))),{x:c.left+p.scrollLeft-u.x,y:c.top+p.scrollTop-u.y,width:c.width,height:c.height}}function gt(t){var e=new Map,n=new Set,o=[];function i(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!n.has(t)){var o=e.get(t);o&&i(o)}})),o.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||i(t)})),o}var vt={placement:"bottom",modifiers:[],strategy:"absolute"};function bt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function yt(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,o=void 0===n?[]:n,i=e.defaultOptions,r=void 0===i?vt:i;return function(t,e,n){void 0===n&&(n=r);var i,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},vt,r),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},c=[],p=!1,u={state:a,setOptions:function(n){var i="function"==typeof n?n(a.options):n;l(),a.options=Object.assign({},r,a.options,i),a.scrollParents={reference:_(t)?at(t):t.contextElement?at(t.contextElement):[],popper:at(e)};var s,p,f=function(t){var e=gt(t);return S.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}((s=[].concat(o,a.options.modifiers),p=s.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{}),Object.keys(p).map((function(t){return p[t]}))));return a.orderedModifiers=f.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,o=void 0===n?{}:n,i=t.effect;if("function"==typeof i){var r=i({state:a,name:e,instance:u,options:o}),s=function(){};c.push(r||s)}})),u.update()},forceUpdate:function(){if(!p){var t=a.elements,e=t.reference,n=t.popper;if(bt(e,n)){a.rects={reference:mt(e,$(n),"fixed"===a.options.strategy),popper:V(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var o=0;o<a.orderedModifiers.length;o++)if(!0!==a.reset){var i=a.orderedModifiers[o],r=i.fn,s=i.options,c=void 0===s?{}:s,l=i.name;"function"==typeof r&&(a=r({state:a,options:c,name:l,instance:u})||a)}else a.reset=!1,o=-1}}},update:(i=function(){return new Promise((function(t){u.forceUpdate(),t(a)}))},function(){return s||(s=new Promise((function(t){Promise.resolve().then((function(){s=void 0,t(i())}))}))),s}),destroy:function(){l(),p=!0}};if(!bt(t,e))return u;function l(){c.forEach((function(t){return t()})),c=[]}return u.setOptions(n).then((function(t){!p&&n.onFirstUpdate&&n.onFirstUpdate(t)})),u}}var wt=yt({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,o=t.options,i=o.scroll,r=void 0===i||i,s=o.resize,a=void 0===s||s,c=A(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&p.forEach((function(t){t.addEventListener("scroll",n.update,Q)})),a&&c.addEventListener("resize",n.update,Q),function(){r&&p.forEach((function(t){t.removeEventListener("scroll",n.update,Q)})),a&&c.removeEventListener("resize",n.update,Q)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=lt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,o=n.gpuAcceleration,i=void 0===o||o,r=n.adaptive,s=void 0===r||r,a=n.roundOffsets,c=void 0===a||a,p={placement:j(e.placement),variation:X(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,J(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:c})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,J(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},P,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,o=t.name,i=n.offset,r=void 0===i?[0,0]:i,s=O.reduce((function(t,n){return t[n]=function(t,e,n){var o=j(t),i=[h,l].indexOf(o)>=0?-1:1,r="function"==typeof n?n(Object.assign({},e,{placement:t})):n,s=r[0],a=r[1];return s=s||0,a=(a||0)*i,[h,d].indexOf(o)>=0?{x:a,y:s}:{x:s,y:a}}(n,e.rects,r),t}),{}),a=s[e.placement],c=a.x,p=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=p),e.modifiersData[o]=s}},{name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var i=n.mainAxis,r=void 0===i||i,s=n.altAxis,a=void 0===s||s,c=n.fallbackPlacements,p=n.padding,u=n.boundary,b=n.rootBoundary,y=n.altBoundary,w=n.flipVariations,S=void 0===w||w,k=n.allowedAutoPlacements,A=e.options.placement,_=j(A),E=c||(_===A||!S?[tt(A)]:function(t){if(j(t)===m)return[];var e=tt(t);return[nt(t),e,nt(e)]}(A)),B=[A].concat(E).reduce((function(t,n){return t.concat(j(n)===m?function(t,e){void 0===e&&(e={});var n=e,o=n.placement,i=n.boundary,r=n.rootBoundary,s=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,p=void 0===c?O:c,u=X(o),l=u?a?x:x.filter((function(t){return X(t)===u})):g,f=l.filter((function(t){return p.indexOf(t)>=0}));0===f.length&&(f=l);var d=f.reduce((function(e,n){return e[n]=ft(t,{placement:n,boundary:i,rootBoundary:r,padding:s})[j(n)],e}),{});return Object.keys(d).sort((function(t,e){return d[t]-d[e]}))}(e,{placement:n,boundary:u,rootBoundary:b,padding:p,flipVariations:S,allowedAutoPlacements:k}):n)}),[]),P=e.rects.reference,L=e.rects.popper,N=new Map,C=!0,T=B[0],D=0;D<B.length;D++){var H=B[D],V=j(H),M=X(H)===v,F=[l,f].indexOf(V)>=0,R=F?"width":"height",W=ft(e,{placement:H,boundary:u,rootBoundary:b,altBoundary:y,padding:p}),q=F?M?d:h:M?f:l;P[R]>L[R]&&(q=tt(q));var I=tt(q),$=[];if(r&&$.push(W[V]<=0),a&&$.push(W[q]<=0,W[I]<=0),$.every((function(t){return t}))){T=H,C=!1;break}N.set(H,$)}if(C)for(var K=function(t){var e=B.find((function(e){var n=N.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},U=S?3:1;U>0;U--){if("break"===K(U))break}e.placement!==T&&(e.modifiersData[o]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name,i=n.mainAxis,r=void 0===i||i,s=n.altAxis,a=void 0!==s&&s,c=n.boundary,p=n.rootBoundary,u=n.altBoundary,m=n.padding,g=n.tether,b=void 0===g||g,y=n.tetherOffset,w=void 0===y?0:y,x=ft(e,{boundary:c,rootBoundary:p,padding:m,altBoundary:u}),O=j(e.placement),S=X(e.placement),k=!S,A=K(O),_="x"===A?"y":"x",E=e.modifiersData.popperOffsets,B=e.rects.reference,P=e.rects.popper,C="function"==typeof w?w(Object.assign({},e.rects,{placement:e.placement})):w,T="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),D=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,H={x:0,y:0};if(E){if(r){var M,F="y"===A?l:h,R="y"===A?f:d,W="y"===A?"height":"width",q=E[A],I=q+x[F],z=q-x[R],Y=b?-P[W]/2:0,G=S===v?B[W]:P[W],J=S===v?-P[W]:-B[W],Q=e.elements.arrow,Z=b&&Q?V(Q):{width:0,height:0},tt=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},et=tt[F],nt=tt[R],ot=U(0,B[W],Z[W]),it=k?B[W]/2-Y-ot-et-T.mainAxis:G-ot-et-T.mainAxis,rt=k?-B[W]/2+Y+ot+nt+T.mainAxis:J+ot+nt+T.mainAxis,st=e.elements.arrow&&$(e.elements.arrow),at=st?"y"===A?st.clientTop||0:st.clientLeft||0:0,ct=null!=(M=null==D?void 0:D[A])?M:0,pt=q+rt-ct,ut=U(b?N(I,q+it-ct-at):I,q,b?L(z,pt):z);E[A]=ut,H[A]=ut-q}if(a){var lt,dt="x"===A?l:h,ht="x"===A?f:d,mt=E[_],gt="y"===_?"height":"width",vt=mt+x[dt],bt=mt-x[ht],yt=-1!==[l,h].indexOf(O),wt=null!=(lt=null==D?void 0:D[_])?lt:0,xt=yt?vt:mt-B[gt]-P[gt]-wt+T.altAxis,Ot=yt?mt+B[gt]+P[gt]-wt-T.altAxis:bt,St=b&&yt?(At=U(xt,mt,kt=Ot))>kt?kt:At:U(b?xt:vt,mt,b?Ot:bt);E[_]=St,H[_]=St-mt}var kt,At;e.modifiersData[o]=H}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,o=t.name,i=t.options,r=n.elements.arrow,s=n.modifiersData.popperOffsets,a=j(n.placement),c=K(a),p=[h,d].indexOf(a)>=0?"height":"width";if(r&&s){var u=function(t,e){return z("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:Y(t,g))}(i.padding,n),m=V(r),v="y"===c?l:h,b="y"===c?f:d,y=n.rects.reference[p]+n.rects.reference[c]-s[c]-n.rects.popper[p],w=s[c]-n.rects.reference[c],x=$(r),O=x?"y"===c?x.clientHeight||0:x.clientWidth||0:0,S=y/2-w/2,k=u[v],A=O-m[p]-u[b],_=O/2-m[p]/2+S,E=U(k,_,A),B=c;n.modifiersData[o]=((e={})[B]=E,e.centerOffset=E-_,e)}},effect:function(t){var e=t.state,n=t.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!=typeof o||(o=e.elements.popper.querySelector(o)))&&M(e.elements.popper,o)&&(e.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,o=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,s=ft(e,{elementContext:"reference"}),a=ft(e,{altBoundary:!0}),c=dt(s,o),p=dt(a,i,r),u=ht(c),l=ht(p);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:p,isReferenceHidden:u,hasPopperEscaped:l},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}}]}),xt=function(t,e,n,o){return(t/=o/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e},Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},St=function(){var t=void 0,e=void 0,n=void 0,o=void 0,i=void 0,r=void 0,s=void 0,a=void 0,c=void 0,p=void 0,u=void 0,l=void 0;function f(){return window.scrollY||window.pageYOffset}function d(t){return t.getBoundingClientRect().top+e}function h(n){c||(c=n),u=i(p=n-c,e,s,a),window.scrollTo(0,u),p<a?window.requestAnimationFrame(h):function(){window.scrollTo(0,e+s),t&&r&&(t.setAttribute("tabindex","-1"),t.focus());"function"==typeof l&&l();c=!1}()}return function(c){var p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a=p.duration||1e3,o=p.offset||0,l=p.callback,i=p.easing||xt,r=p.a11y||!1,e=f(),void 0===c?"undefined":Ot(c)){case"number":t=void 0,r=!1,n=e+c;break;case"object":n=d(t=c);break;case"string":t=document.querySelector(c),n=d(t)}switch(s=n-e+o,Ot(p.duration)){case"number":a=p.duration;break;case"function":a=p.duration(s)}window.requestAnimationFrame(h)}}();function kt(t,e){var n,o;if(0===e.length)return t;for(n=0,o=e.length;n<o;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t<0?-2*t:t}function At(t,e,n,o){var i,r=kt(kt(kt(t,n),(i=e,Object.prototype.toString.call(i))),typeof e);if(null===e)return kt(r,"null");if(void 0===e)return kt(r,"undefined");if("object"==typeof e||"function"==typeof e){if(-1!==o.indexOf(e))return kt(r,"[Circular]"+n);o.push(e);var s=function(t,e,n){return Object.keys(e).sort().reduce((function(t,o){return At(t,e[o],o,n)}),t)}(r,e,o);if(!("valueOf"in e)||"function"!=typeof e.valueOf)return s;try{return kt(s,String(e.valueOf()))}catch(a){return kt(s,"[valueOf exception]"+(a.stack||a.message))}}return kt(r,e.toString())}var _t=function(t){return function(t,e){for(;t.length<e;)t="0"+t;return t}(At(0,t,"",[]).toString(16),8)};const Et={name:"v-step",props:{step:{type:Object},previousStep:{type:Function},nextStep:{type:Function},stop:{type:Function},skip:{type:Function,default:function(){this.stop()}},finish:{type:Function,default:function(){this.stop()}},isFirst:{type:Boolean},isLast:{type:Boolean},labels:{type:Object},enabledButtons:{type:Object},highlight:{type:Boolean},stopOnFail:{type:Boolean},debug:{type:Boolean},ionic:{type:Boolean}},data(){var t;return{hash:_t(this.step.target),targetElement:this.step.parent?null==(t=document.querySelector(this.step.target))?void 0:t.parentElement:document.querySelector(this.step.target)}},computed:{params(){return __assign(__assign(__assign(__assign({},r),{highlight:this.highlight}),{enabledButtons:Object.assign({},this.enabledButtons)}),this.step.params)},isSticky(){return!this.step.target}},methods:{createStep(){this.debug&&console.log("[Vue Tour] The target element "+this.step.target+' of .v-step[id="'+this.hash+'"] is:',this.targetElement),this.isSticky?document.body.appendChild(this.$refs["v-step-"+this.hash]):this.targetElement?(this.enableScrolling(),this.createHighlight(),wt(this.targetElement,this.$refs["v-step-"+this.hash],this.params)):(this.debug&&console.error("[Vue Tour] The target element "+this.step.target+' of .v-step[id="'+this.hash+'"] does not exist!'),this.$emit("targetNotFound",this.step),this.stopOnFail?this.stop():this.nextStep())},enableScrolling(){if(this.params.enableScrolling)if(this.step.duration||this.step.offset){let t={duration:this.step.duration||1e3,offset:this.step.offset||0,callback:void 0,a11y:!1};this.ionic?this.ionicScroll(t):St(this.targetElement,t)}else this.targetElement.scrollIntoView({behavior:"smooth"})},isHighlightEnabled(){return this.debug&&console.log(`[Vue Tour] Highlight is ${this.params.highlight?"enabled":"disabled"} for .v-step[id="${this.hash}"]`),this.params.highlight},createHighlight(){if(this.isHighlightEnabled()&&this.targetElement){document.body.classList.add(o.active);const t=window.getComputedStyle(this.targetElement).getPropertyValue("transition");"all 0s ease 0s"!==t&&(this.targetElement.style.transition=`${t}, ${i}`),this.targetElement.classList.add(o.targetHighlighted),this.targetElement.style.position||this.targetElement.classList.add(o.targetRelative)}else document.body.classList.remove(o.active)},removeHighlight(){if(this.isHighlightEnabled()&&this.targetElement){const t=this.targetElement,e=this.targetElement.style.transition;this.targetElement.classList.remove(o.targetHighlighted),this.targetElement.classList.remove(o.targetRelative),e.includes(i)&&setTimeout((()=>{t.style.transition=e.replace(`, ${i}`,"")}),0)}},isButtonEnabled(t){return!this.params.enabledButtons.hasOwnProperty(t)||this.params.enabledButtons[t]},getOffset(t){let e=this.targetElement.getBoundingClientRect().top;return t.offset&&(e+=t.offset),e},getIonContent(){const t=document.getElementsByClassName("ion-page");if(t.length){const e={};for(const n of t){e[window.getComputedStyle(n)["z-index"]]=n.querySelector("ion-content")}return{el:e[Math.max(...Object.keys(e).map((t=>+t)))],pages:Object.keys(e).length}}},ionicScroll(t){const e=this.getOffset(t);this.getIonContent().el.scrollByPoint(0,e,this.step.duration||1e3)}},mounted(){this.createStep()},unmounted(){this.removeHighlight()}},Bt=t.withScopeId("data-v-ac393354");t.pushScopeId("data-v-ac393354");const Pt={key:0,class:"v-step__header"},jt={class:"v-step__content"},Lt={key:1},Nt={class:"v-step__buttons"};t.popScopeId();const Ct=Bt(((e,n,o,i,r,s)=>(t.openBlock(),t.createBlock("div",{class:[{"v-step--sticky":s.isSticky},"v-step"],id:"v-step-"+r.hash,ref:"v-step-"+r.hash},[t.renderSlot(e.$slots,"header",{},(()=>[o.step.header?(t.openBlock(),t.createBlock("div",Pt,[o.step.header.title?(t.openBlock(),t.createBlock("div",{key:0,innerHTML:o.step.header.title},null,8,["innerHTML"])):t.createCommentVNode("",!0)])):t.createCommentVNode("",!0)]),{},!0),t.renderSlot(e.$slots,"content",{},(()=>[t.createVNode("div",jt,[o.step.content?(t.openBlock(),t.createBlock("div",{key:0,innerHTML:o.step.content},null,8,["innerHTML"])):(t.openBlock(),t.createBlock("div",Lt,"This is a demo step! The id of this step is "+t.toDisplayString(r.hash)+" and it targets "+t.toDisplayString(o.step.target)+".",1))])]),{},!0),t.renderSlot(e.$slots,"actions",{},(()=>[t.createVNode("div",Nt,[!o.isLast&&s.isButtonEnabled("buttonSkip")?(t.openBlock(),t.createBlock("button",{key:0,onClick:n[1]||(n[1]=t.withModifiers(((...t)=>o.skip&&o.skip(...t)),["prevent"])),class:"v-step__button v-step__button-skip"},t.toDisplayString(o.labels.buttonSkip),1)):t.createCommentVNode("",!0),!o.isFirst&&s.isButtonEnabled("buttonPrevious")?(t.openBlock(),t.createBlock("button",{key:1,onClick:n[2]||(n[2]=t.withModifiers(((...t)=>o.previousStep&&o.previousStep(...t)),["prevent"])),class:"v-step__button v-step__button-previous"},t.toDisplayString(o.labels.buttonPrevious),1)):t.createCommentVNode("",!0),!o.isLast&&s.isButtonEnabled("buttonNext")?(t.openBlock(),t.createBlock("button",{key:2,onClick:n[3]||(n[3]=t.withModifiers(((...t)=>o.nextStep&&o.nextStep(...t)),["prevent"])),class:"v-step__button v-step__button-next"},t.toDisplayString(o.labels.buttonNext),1)):t.createCommentVNode("",!0),o.isLast&&s.isButtonEnabled("buttonStop")?(t.openBlock(),t.createBlock("button",{key:3,onClick:n[4]||(n[4]=t.withModifiers(((...t)=>o.finish&&o.finish(...t)),["prevent"])),class:"v-step__button v-step__button-stop"},t.toDisplayString(o.labels.buttonStop),1)):t.createCommentVNode("",!0)])]),{},!0),t.createVNode("div",{class:["v-step__arrow",{"v-step__arrow--dark":o.step.header&&o.step.header.title}],"data-popper-arrow":""},null,2)],10,["id"]))));Et.render=Ct,Et.__scopeId="data-v-ac393354";return{install(t,e){t.component(p.name,p),t.component(Et.name,Et),t.config.globalProperties.$tours={}}}}));
