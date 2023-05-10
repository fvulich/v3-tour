var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable,i=(e,n,o)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,r=(t,r)=>{for(var s in r||(r={}))e.call(r,s)&&i(t,s,r[s]);if(n)for(var s of n(r))o.call(r,s)&&i(t,s,r[s]);return t};import{resolveComponent as s,openBlock as a,createBlock as u,renderSlot as p,createCommentVNode as c,pushScopeId as l,popScopeId as f,createVNode as d,toDisplayString as h,withModifiers as m,withScopeId as v}from"vue";const g={onStart:()=>{},onPreviousStep:t=>{},onNextStep:t=>{},onStop:()=>{},onSkip:()=>{},onFinish:()=>{}},b={highlight:!1,labels:{buttonSkip:"Skip tour",buttonPrevious:"Previous",buttonNext:"Next",buttonStop:"Finish"},enabledButtons:{buttonSkip:!0,buttonPrevious:!0,buttonNext:!0,buttonStop:!0},startTimeout:0,stopOnTargetNotFound:!0,useKeyboardNavigation:!0,enabledNavigationKeys:{escape:!0,arrowRight:!0,arrowLeft:!0},debug:!1},y={active:"v-tour--active",targetHighlighted:"v-tour__target--highlighted",targetRelative:"v-tour__target--relative"},w="box-shadow 0s ease-in-out 0s",O={enableScrolling:!0,highlight:b.highlight,enabledButtons:b.enabledButtons,modifiers:[{name:"arrow",options:{element:".v-step__arrow",padding:10}},{name:"preventOverflow",options:{rootBoundary:"window",padding:10}},{name:"offset",options:{offset:[0,10]}}],placement:"bottom"},x=39,A=37,S=27;const k={name:"v-tour",props:{steps:{type:Array,default:()=>[]},name:{type:String},options:{type:Object,default:()=>b},callbacks:{type:Object,default:()=>g}},data:()=>({currentStep:-1}),mounted(){this.$tours[this.name]=this},beforeUnmount(){this.customOptions.useKeyboardNavigation&&window.removeEventListener("keyup",this.handleKeyup)},computed:{customOptions(){return r(r({},b),this.options)},customCallbacks(){return r(r({},g),this.callbacks)},isRunning(){return this.currentStep>-1&&this.currentStep<this.numberOfSteps},isFirst(){return 0===this.currentStep},isLast(){return this.currentStep===this.steps.length-1},numberOfSteps(){return this.steps.length},step(){return this.steps[this.currentStep]}},methods:{async start(t){this.customOptions.useKeyboardNavigation&&window.addEventListener("keyup",this.handleKeyup),t=void 0!==t?parseInt(t,10):0;let e=this.steps[t];if(void 0!==e.before)try{await e.before("start")}catch(n){return Promise.reject(n)}return await(()=>new Promise(((e,n)=>{setTimeout((()=>{this.customCallbacks.onStart(),this.currentStep=t,e()}),this.customOptions.startTimeout)})))(),Promise.resolve()},async previousStep(){let t=this.currentStep-1,e=()=>new Promise(((e,n)=>{this.customCallbacks.onPreviousStep(this.currentStep),this.currentStep=t,e()}));if(t>-1){let o=this.steps[t];if(void 0!==o.before)try{await o.before("previous")}catch(n){return Promise.reject(n)}await e()}return Promise.resolve()},async nextStep(){let t=this.currentStep+1,e=()=>new Promise(((e,n)=>{this.customCallbacks.onNextStep(this.currentStep),this.currentStep=t,e()}));if(t<this.numberOfSteps&&-1!==this.currentStep){let o=this.steps[t];if(void 0!==o.before)try{await o.before("next")}catch(n){return Promise.reject(n)}await e()}return Promise.resolve()},stop(){this.customCallbacks.onStop(),document.body.classList.remove("v-tour--active"),this.currentStep=-1},skip(){this.customCallbacks.onSkip(),this.stop()},finish(){this.customCallbacks.onFinish(),this.stop()},handleKeyup(t){this.customOptions.debug&&console.log("[Vue Tour] A keyup event occured:",t);const e=t=>!this.customOptions.enabledButtons.hasOwnProperty(t)||this.customOptions.enabledButtons[t];switch(t.keyCode){case x:console.log("AAAAAAAAAAAAAbuttonPrevious",e("buttonPrevious")),console.log("AAAAAAAAAAAAA",this.customOptions.enabledButtons),console.log("AAAAAAAAAAAAA",this.customOptions),e("buttonPrevious")&&this.isKeyEnabled("arrowRight")&&this.nextStep();break;case A:console.log("AAAAAAAAAAAAAbuttonNext",e("buttonNext")),console.log("AAAAAAAAAAAAA",this.customOptions.enabledButtons),console.log("AAAAAAAAAAAAA",this.customOptions),e("buttonNext")&&this.isKeyEnabled("arrowLeft")&&this.previousStep();break;case S:this.isKeyEnabled("escape")&&this.stop()}},isKeyEnabled(t){const{enabledNavigationKeys:e}=this.customOptions;return!e.hasOwnProperty(t)||e[t]}}},E={class:"v-tour"};k.render=function(t,e,n,o,i,r){const l=s("v-step");return a(),u("div",E,[p(t.$slots,"default",{currentStep:i.currentStep,steps:n.steps,previousStep:r.previousStep,nextStep:r.nextStep,stop:r.stop,skip:r.skip,finish:r.finish,isFirst:r.isFirst,isLast:r.isLast,labels:r.customOptions.labels,enabledButtons:r.customOptions.enabledButtons,highlight:r.customOptions.highlight,debug:r.customOptions.debug},(()=>[n.steps[i.currentStep]?(a(),u(l,{step:n.steps[i.currentStep],key:i.currentStep,"previous-step":r.previousStep,"next-step":r.nextStep,stop:r.stop,skip:r.skip,finish:r.finish,"is-first":r.isFirst,"is-last":r.isLast,labels:r.customOptions.labels,"enabled-buttons":r.customOptions.enabledButtons,highlight:r.customOptions.highlight,"stop-on-fail":r.customOptions.stopOnTargetNotFound,debug:r.customOptions.debug,ionic:r.customOptions.ionic,onTargetNotFound:e[1]||(e[1]=e=>t.$emit("targetNotFound",e))},null,8,["step","previous-step","next-step","stop","skip","finish","is-first","is-last","labels","enabled-buttons","highlight","stop-on-fail","debug","ionic"])):c("",!0)]))])};var j="top",B="bottom",P="right",L="left",_=[j,B,P,L],T=_.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),C=[].concat(_,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),H=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function D(t){return t?(t.nodeName||"").toLowerCase():null}function N(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function F(t){return t instanceof N(t).Element||t instanceof Element}function M(t){return t instanceof N(t).HTMLElement||t instanceof HTMLElement}function R(t){return"undefined"!=typeof ShadowRoot&&(t instanceof N(t).ShadowRoot||t instanceof ShadowRoot)}var W={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},o=e.attributes[t]||{},i=e.elements[t];M(i)&&D(i)&&(Object.assign(i.style,n),Object.keys(o).forEach((function(t){var e=o[t];!1===e?i.removeAttribute(t):i.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var o=e.elements[t],i=e.attributes[t]||{},r=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{});M(o)&&D(o)&&(Object.assign(o.style,r),Object.keys(i).forEach((function(t){o.removeAttribute(t)})))}))}},requires:["computeStyles"]};function V(t){return t.split("-")[0]}var q=Math.max,$=Math.min,K=Math.round;function I(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function U(){return!/^((?!chrome|android).)*safari/i.test(I())}function z(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=!1);var o=t.getBoundingClientRect(),i=1,r=1;e&&M(t)&&(i=t.offsetWidth>0&&K(o.width)/t.offsetWidth||1,r=t.offsetHeight>0&&K(o.height)/t.offsetHeight||1);var s=(F(t)?N(t):window).visualViewport,a=!U()&&n,u=(o.left+(a&&s?s.offsetLeft:0))/i,p=(o.top+(a&&s?s.offsetTop:0))/r,c=o.width/i,l=o.height/r;return{width:c,height:l,top:p,right:u+c,bottom:p+l,left:u,x:u,y:p}}function Y(t){var e=z(t),n=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:o}}function X(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&R(n)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function G(t){return N(t).getComputedStyle(t)}function J(t){return["table","td","th"].indexOf(D(t))>=0}function Q(t){return((F(t)?t.ownerDocument:t.document)||window.document).documentElement}function Z(t){return"html"===D(t)?t:t.assignedSlot||t.parentNode||(R(t)?t.host:null)||Q(t)}function tt(t){return M(t)&&"fixed"!==G(t).position?t.offsetParent:null}function et(t){for(var e=N(t),n=tt(t);n&&J(n)&&"static"===G(n).position;)n=tt(n);return n&&("html"===D(n)||"body"===D(n)&&"static"===G(n).position)?e:n||function(t){var e=/firefox/i.test(I());if(/Trident/i.test(I())&&M(t)&&"fixed"===G(t).position)return null;var n=Z(t);for(R(n)&&(n=n.host);M(n)&&["html","body"].indexOf(D(n))<0;){var o=G(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||e&&"filter"===o.willChange||e&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(t)||e}function nt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ot(t,e,n){return q(t,$(e,n))}function it(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function rt(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}function st(t){return t.split("-")[1]}var at={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ut(t){var e,n=t.popper,o=t.popperRect,i=t.placement,r=t.variation,s=t.offsets,a=t.position,u=t.gpuAcceleration,p=t.adaptive,c=t.roundOffsets,l=t.isFixed,f=s.x,d=void 0===f?0:f,h=s.y,m=void 0===h?0:h,v="function"==typeof c?c({x:d,y:m}):{x:d,y:m};d=v.x,m=v.y;var g=s.hasOwnProperty("x"),b=s.hasOwnProperty("y"),y=L,w=j,O=window;if(p){var x=et(n),A="clientHeight",S="clientWidth";if(x===N(n)&&"static"!==G(x=Q(n)).position&&"absolute"===a&&(A="scrollHeight",S="scrollWidth"),x=x,i===j||(i===L||i===P)&&"end"===r)w=B,m-=(l&&x===O&&O.visualViewport?O.visualViewport.height:x[A])-o.height,m*=u?1:-1;if(i===L||(i===j||i===B)&&"end"===r)y=P,d-=(l&&x===O&&O.visualViewport?O.visualViewport.width:x[S])-o.width,d*=u?1:-1}var k,E=Object.assign({position:a},p&&at),_=!0===c?function(t,e){var n=t.x,o=t.y,i=e.devicePixelRatio||1;return{x:K(n*i)/i||0,y:K(o*i)/i||0}}({x:d,y:m},N(n)):{x:d,y:m};return d=_.x,m=_.y,u?Object.assign({},E,((k={})[w]=b?"0":"",k[y]=g?"0":"",k.transform=(O.devicePixelRatio||1)<=1?"translate("+d+"px, "+m+"px)":"translate3d("+d+"px, "+m+"px, 0)",k)):Object.assign({},E,((e={})[w]=b?m+"px":"",e[y]=g?d+"px":"",e.transform="",e))}var pt={passive:!0};var ct={left:"right",right:"left",bottom:"top",top:"bottom"};function lt(t){return t.replace(/left|right|bottom|top/g,(function(t){return ct[t]}))}var ft={start:"end",end:"start"};function dt(t){return t.replace(/start|end/g,(function(t){return ft[t]}))}function ht(t){var e=N(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function mt(t){return z(Q(t)).left+ht(t).scrollLeft}function vt(t){var e=G(t),n=e.overflow,o=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}function gt(t){return["html","body","#document"].indexOf(D(t))>=0?t.ownerDocument.body:M(t)&&vt(t)?t:gt(Z(t))}function bt(t,e){var n;void 0===e&&(e=[]);var o=gt(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=N(o),s=i?[r].concat(r.visualViewport||[],vt(o)?o:[]):o,a=e.concat(s);return i?a:a.concat(bt(Z(s)))}function yt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function wt(t,e,n){return"viewport"===e?yt(function(t,e){var n=N(t),o=Q(t),i=n.visualViewport,r=o.clientWidth,s=o.clientHeight,a=0,u=0;if(i){r=i.width,s=i.height;var p=U();(p||!p&&"fixed"===e)&&(a=i.offsetLeft,u=i.offsetTop)}return{width:r,height:s,x:a+mt(t),y:u}}(t,n)):F(e)?function(t,e){var n=z(t,!1,"fixed"===e);return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}(e,n):yt(function(t){var e,n=Q(t),o=ht(t),i=null==(e=t.ownerDocument)?void 0:e.body,r=q(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=q(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-o.scrollLeft+mt(t),u=-o.scrollTop;return"rtl"===G(i||n).direction&&(a+=q(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:s,x:a,y:u}}(Q(t)))}function Ot(t,e,n,o){var i="clippingParents"===e?function(t){var e=bt(Z(t)),n=["absolute","fixed"].indexOf(G(t).position)>=0&&M(t)?et(t):t;return F(n)?e.filter((function(t){return F(t)&&X(t,n)&&"body"!==D(t)})):[]}(t):[].concat(e),r=[].concat(i,[n]),s=r[0],a=r.reduce((function(e,n){var i=wt(t,n,o);return e.top=q(i.top,e.top),e.right=$(i.right,e.right),e.bottom=$(i.bottom,e.bottom),e.left=q(i.left,e.left),e}),wt(t,s,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function xt(t){var e,n=t.reference,o=t.element,i=t.placement,r=i?V(i):null,s=i?st(i):null,a=n.x+n.width/2-o.width/2,u=n.y+n.height/2-o.height/2;switch(r){case j:e={x:a,y:n.y-o.height};break;case B:e={x:a,y:n.y+n.height};break;case P:e={x:n.x+n.width,y:u};break;case L:e={x:n.x-o.width,y:u};break;default:e={x:n.x,y:n.y}}var p=r?nt(r):null;if(null!=p){var c="y"===p?"height":"width";switch(s){case"start":e[p]=e[p]-(n[c]/2-o[c]/2);break;case"end":e[p]=e[p]+(n[c]/2-o[c]/2)}}return e}function At(t,e){void 0===e&&(e={});var n=e,o=n.placement,i=void 0===o?t.placement:o,r=n.strategy,s=void 0===r?t.strategy:r,a=n.boundary,u=void 0===a?"clippingParents":a,p=n.rootBoundary,c=void 0===p?"viewport":p,l=n.elementContext,f=void 0===l?"popper":l,d=n.altBoundary,h=void 0!==d&&d,m=n.padding,v=void 0===m?0:m,g=it("number"!=typeof v?v:rt(v,_)),b="popper"===f?"reference":"popper",y=t.rects.popper,w=t.elements[h?b:f],O=Ot(F(w)?w:w.contextElement||Q(t.elements.popper),u,c,s),x=z(t.elements.reference),A=xt({reference:x,element:y,strategy:"absolute",placement:i}),S=yt(Object.assign({},y,A)),k="popper"===f?S:x,E={top:O.top-k.top+g.top,bottom:k.bottom-O.bottom+g.bottom,left:O.left-k.left+g.left,right:k.right-O.right+g.right},L=t.modifiersData.offset;if("popper"===f&&L){var T=L[i];Object.keys(E).forEach((function(t){var e=[P,B].indexOf(t)>=0?1:-1,n=[j,B].indexOf(t)>=0?"y":"x";E[t]+=T[n]*e}))}return E}function St(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function kt(t){return[j,P,B,L].some((function(e){return t[e]>=0}))}function Et(t,e,n){void 0===n&&(n=!1);var o,i,r=M(e),s=M(e)&&function(t){var e=t.getBoundingClientRect(),n=K(e.width)/t.offsetWidth||1,o=K(e.height)/t.offsetHeight||1;return 1!==n||1!==o}(e),a=Q(e),u=z(t,s,n),p={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==D(e)||vt(a))&&(p=(o=e)!==N(o)&&M(o)?{scrollLeft:(i=o).scrollLeft,scrollTop:i.scrollTop}:ht(o)),M(e)?((c=z(e,!0)).x+=e.clientLeft,c.y+=e.clientTop):a&&(c.x=mt(a))),{x:u.left+p.scrollLeft-c.x,y:u.top+p.scrollTop-c.y,width:u.width,height:u.height}}function jt(t){var e=new Map,n=new Set,o=[];function i(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!n.has(t)){var o=e.get(t);o&&i(o)}})),o.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||i(t)})),o}var Bt={placement:"bottom",modifiers:[],strategy:"absolute"};function Pt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function Lt(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,o=void 0===n?[]:n,i=e.defaultOptions,r=void 0===i?Bt:i;return function(t,e,n){void 0===n&&(n=r);var i,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Bt,r),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},u=[],p=!1,c={state:a,setOptions:function(n){var i="function"==typeof n?n(a.options):n;l(),a.options=Object.assign({},r,a.options,i),a.scrollParents={reference:F(t)?bt(t):t.contextElement?bt(t.contextElement):[],popper:bt(e)};var s,p,f=function(t){var e=jt(t);return H.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}((s=[].concat(o,a.options.modifiers),p=s.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{}),Object.keys(p).map((function(t){return p[t]}))));return a.orderedModifiers=f.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,o=void 0===n?{}:n,i=t.effect;if("function"==typeof i){var r=i({state:a,name:e,instance:c,options:o}),s=function(){};u.push(r||s)}})),c.update()},forceUpdate:function(){if(!p){var t=a.elements,e=t.reference,n=t.popper;if(Pt(e,n)){a.rects={reference:Et(e,et(n),"fixed"===a.options.strategy),popper:Y(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var o=0;o<a.orderedModifiers.length;o++)if(!0!==a.reset){var i=a.orderedModifiers[o],r=i.fn,s=i.options,u=void 0===s?{}:s,l=i.name;"function"==typeof r&&(a=r({state:a,options:u,name:l,instance:c})||a)}else a.reset=!1,o=-1}}},update:(i=function(){return new Promise((function(t){c.forceUpdate(),t(a)}))},function(){return s||(s=new Promise((function(t){Promise.resolve().then((function(){s=void 0,t(i())}))}))),s}),destroy:function(){l(),p=!0}};if(!Pt(t,e))return c;function l(){u.forEach((function(t){return t()})),u=[]}return c.setOptions(n).then((function(t){!p&&n.onFirstUpdate&&n.onFirstUpdate(t)})),c}}var _t=Lt({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,o=t.options,i=o.scroll,r=void 0===i||i,s=o.resize,a=void 0===s||s,u=N(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&p.forEach((function(t){t.addEventListener("scroll",n.update,pt)})),a&&u.addEventListener("resize",n.update,pt),function(){r&&p.forEach((function(t){t.removeEventListener("scroll",n.update,pt)})),a&&u.removeEventListener("resize",n.update,pt)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=xt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,o=n.gpuAcceleration,i=void 0===o||o,r=n.adaptive,s=void 0===r||r,a=n.roundOffsets,u=void 0===a||a,p={placement:V(e.placement),variation:st(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,ut(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:u})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,ut(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},W,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,o=t.name,i=n.offset,r=void 0===i?[0,0]:i,s=C.reduce((function(t,n){return t[n]=function(t,e,n){var o=V(t),i=[L,j].indexOf(o)>=0?-1:1,r="function"==typeof n?n(Object.assign({},e,{placement:t})):n,s=r[0],a=r[1];return s=s||0,a=(a||0)*i,[L,P].indexOf(o)>=0?{x:a,y:s}:{x:s,y:a}}(n,e.rects,r),t}),{}),a=s[e.placement],u=a.x,p=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=u,e.modifiersData.popperOffsets.y+=p),e.modifiersData[o]=s}},{name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var i=n.mainAxis,r=void 0===i||i,s=n.altAxis,a=void 0===s||s,u=n.fallbackPlacements,p=n.padding,c=n.boundary,l=n.rootBoundary,f=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=e.options.placement,g=V(v),b=u||(g===v||!h?[lt(v)]:function(t){if("auto"===V(t))return[];var e=lt(t);return[dt(t),e,dt(e)]}(v)),y=[v].concat(b).reduce((function(t,n){return t.concat("auto"===V(n)?function(t,e){void 0===e&&(e={});var n=e,o=n.placement,i=n.boundary,r=n.rootBoundary,s=n.padding,a=n.flipVariations,u=n.allowedAutoPlacements,p=void 0===u?C:u,c=st(o),l=c?a?T:T.filter((function(t){return st(t)===c})):_,f=l.filter((function(t){return p.indexOf(t)>=0}));0===f.length&&(f=l);var d=f.reduce((function(e,n){return e[n]=At(t,{placement:n,boundary:i,rootBoundary:r,padding:s})[V(n)],e}),{});return Object.keys(d).sort((function(t,e){return d[t]-d[e]}))}(e,{placement:n,boundary:c,rootBoundary:l,padding:p,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),w=e.rects.reference,O=e.rects.popper,x=new Map,A=!0,S=y[0],k=0;k<y.length;k++){var E=y[k],H=V(E),D="start"===st(E),N=[j,B].indexOf(H)>=0,F=N?"width":"height",M=At(e,{placement:E,boundary:c,rootBoundary:l,altBoundary:f,padding:p}),R=N?D?P:L:D?B:j;w[F]>O[F]&&(R=lt(R));var W=lt(R),q=[];if(r&&q.push(M[H]<=0),a&&q.push(M[R]<=0,M[W]<=0),q.every((function(t){return t}))){S=E,A=!1;break}x.set(E,q)}if(A)for(var $=function(t){var e=y.find((function(e){var n=x.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return S=e,"break"},K=h?3:1;K>0;K--){if("break"===$(K))break}e.placement!==S&&(e.modifiersData[o]._skip=!0,e.placement=S,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name,i=n.mainAxis,r=void 0===i||i,s=n.altAxis,a=void 0!==s&&s,u=n.boundary,p=n.rootBoundary,c=n.altBoundary,l=n.padding,f=n.tether,d=void 0===f||f,h=n.tetherOffset,m=void 0===h?0:h,v=At(e,{boundary:u,rootBoundary:p,padding:l,altBoundary:c}),g=V(e.placement),b=st(e.placement),y=!b,w=nt(g),O="x"===w?"y":"x",x=e.modifiersData.popperOffsets,A=e.rects.reference,S=e.rects.popper,k="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,E="number"==typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),_=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,T={x:0,y:0};if(x){if(r){var C,H="y"===w?j:L,D="y"===w?B:P,N="y"===w?"height":"width",F=x[w],M=F+v[H],R=F-v[D],W=d?-S[N]/2:0,K="start"===b?A[N]:S[N],I="start"===b?-S[N]:-A[N],U=e.elements.arrow,z=d&&U?Y(U):{width:0,height:0},X=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=X[H],J=X[D],Q=ot(0,A[N],z[N]),Z=y?A[N]/2-W-Q-G-E.mainAxis:K-Q-G-E.mainAxis,tt=y?-A[N]/2+W+Q+J+E.mainAxis:I+Q+J+E.mainAxis,it=e.elements.arrow&&et(e.elements.arrow),rt=it?"y"===w?it.clientTop||0:it.clientLeft||0:0,at=null!=(C=null==_?void 0:_[w])?C:0,ut=F+tt-at,pt=ot(d?$(M,F+Z-at-rt):M,F,d?q(R,ut):R);x[w]=pt,T[w]=pt-F}if(a){var ct,lt="x"===w?j:L,ft="x"===w?B:P,dt=x[O],ht="y"===O?"height":"width",mt=dt+v[lt],vt=dt-v[ft],gt=-1!==[j,L].indexOf(g),bt=null!=(ct=null==_?void 0:_[O])?ct:0,yt=gt?mt:dt-A[ht]-S[ht]-bt+E.altAxis,wt=gt?dt+A[ht]+S[ht]-bt-E.altAxis:vt,Ot=d&&gt?(St=ot(yt,dt,xt=wt))>xt?xt:St:ot(d?yt:mt,dt,d?wt:vt);x[O]=Ot,T[O]=Ot-dt}var xt,St;e.modifiersData[o]=T}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,o=t.name,i=t.options,r=n.elements.arrow,s=n.modifiersData.popperOffsets,a=V(n.placement),u=nt(a),p=[L,P].indexOf(a)>=0?"height":"width";if(r&&s){var c=function(t,e){return it("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:rt(t,_))}(i.padding,n),l=Y(r),f="y"===u?j:L,d="y"===u?B:P,h=n.rects.reference[p]+n.rects.reference[u]-s[u]-n.rects.popper[p],m=s[u]-n.rects.reference[u],v=et(r),g=v?"y"===u?v.clientHeight||0:v.clientWidth||0:0,b=h/2-m/2,y=c[f],w=g-l[p]-c[d],O=g/2-l[p]/2+b,x=ot(y,O,w),A=u;n.modifiersData[o]=((e={})[A]=x,e.centerOffset=x-O,e)}},effect:function(t){var e=t.state,n=t.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!=typeof o||(o=e.elements.popper.querySelector(o)))&&X(e.elements.popper,o)&&(e.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,o=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,s=At(e,{elementContext:"reference"}),a=At(e,{altBoundary:!0}),u=St(s,o),p=St(a,i,r),c=kt(u),l=kt(p);e.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:p,isReferenceHidden:c,hasPopperEscaped:l},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":l})}}]}),Tt=function(t,e,n,o){return(t/=o/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e},Ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ht=function(){var t=void 0,e=void 0,n=void 0,o=void 0,i=void 0,r=void 0,s=void 0,a=void 0,u=void 0,p=void 0,c=void 0,l=void 0;function f(){return window.scrollY||window.pageYOffset}function d(t){return t.getBoundingClientRect().top+e}function h(n){u||(u=n),c=i(p=n-u,e,s,a),window.scrollTo(0,c),p<a?window.requestAnimationFrame(h):function(){window.scrollTo(0,e+s),t&&r&&(t.setAttribute("tabindex","-1"),t.focus());"function"==typeof l&&l();u=!1}()}return function(u){var p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a=p.duration||1e3,o=p.offset||0,l=p.callback,i=p.easing||Tt,r=p.a11y||!1,e=f(),void 0===u?"undefined":Ct(u)){case"number":t=void 0,r=!1,n=e+u;break;case"object":n=d(t=u);break;case"string":t=document.querySelector(u),n=d(t)}switch(s=n-e+o,Ct(p.duration)){case"number":a=p.duration;break;case"function":a=p.duration(s)}window.requestAnimationFrame(h)}}();function Dt(t,e){var n,o;if(0===e.length)return t;for(n=0,o=e.length;n<o;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t<0?-2*t:t}function Nt(t,e,n,o){var i,r=Dt(Dt(Dt(t,n),(i=e,Object.prototype.toString.call(i))),typeof e);if(null===e)return Dt(r,"null");if(void 0===e)return Dt(r,"undefined");if("object"==typeof e||"function"==typeof e){if(-1!==o.indexOf(e))return Dt(r,"[Circular]"+n);o.push(e);var s=function(t,e,n){return Object.keys(e).sort().reduce((function(t,o){return Nt(t,e[o],o,n)}),t)}(r,e,o);if(!("valueOf"in e)||"function"!=typeof e.valueOf)return s;try{return Dt(s,String(e.valueOf()))}catch(a){return Dt(s,"[valueOf exception]"+(a.stack||a.message))}}return Dt(r,e.toString())}var Ft=function(t){return function(t,e){for(;t.length<e;)t="0"+t;return t}(Nt(0,t,"",[]).toString(16),8)};const Mt={name:"v-step",props:{step:{type:Object},previousStep:{type:Function},nextStep:{type:Function},stop:{type:Function},skip:{type:Function,default:function(){this.stop()}},finish:{type:Function,default:function(){this.stop()}},isFirst:{type:Boolean},isLast:{type:Boolean},labels:{type:Object},enabledButtons:{type:Object},highlight:{type:Boolean},stopOnFail:{type:Boolean},debug:{type:Boolean},ionic:{type:Boolean}},data(){var t;return{hash:Ft(this.step.target),targetElement:this.step.parent?null==(t=document.querySelector(this.step.target))?void 0:t.parentElement:document.querySelector(this.step.target)}},computed:{params(){return r(r(r(r({},O),{highlight:this.highlight}),{enabledButtons:Object.assign({},this.enabledButtons)}),this.step.params)},isSticky(){return!this.step.target}},methods:{createStep(){this.debug&&console.log("[Vue Tour] The target element "+this.step.target+' of .v-step[id="'+this.hash+'"] is:',this.targetElement),this.isSticky?document.body.appendChild(this.$refs["v-step-"+this.hash]):this.targetElement?(this.enableScrolling(),this.createHighlight(),_t(this.targetElement,this.$refs["v-step-"+this.hash],this.params)):(this.debug&&console.error("[Vue Tour] The target element "+this.step.target+' of .v-step[id="'+this.hash+'"] does not exist!'),this.$emit("targetNotFound",this.step),this.stopOnFail?this.stop():this.nextStep())},enableScrolling(){if(this.params.enableScrolling)if(this.step.duration||this.step.offset){let t={duration:this.step.duration||1e3,offset:this.step.offset||0,callback:void 0,a11y:!1};this.ionic?this.ionicScroll(t):Ht(this.targetElement,t)}else this.targetElement.scrollIntoView({behavior:"smooth"})},isHighlightEnabled(){return this.debug&&console.log(`[Vue Tour] Highlight is ${this.params.highlight?"enabled":"disabled"} for .v-step[id="${this.hash}"]`),this.params.highlight},createHighlight(){if(this.isHighlightEnabled()&&this.targetElement){document.body.classList.add(y.active);const t=window.getComputedStyle(this.targetElement).getPropertyValue("transition");"all 0s ease 0s"!==t&&(this.targetElement.style.transition=`${t}, ${w}`),this.targetElement.classList.add(y.targetHighlighted),this.targetElement.style.position||this.targetElement.classList.add(y.targetRelative)}else document.body.classList.remove(y.active)},removeHighlight(){if(this.isHighlightEnabled()&&this.targetElement){const t=this.targetElement,e=this.targetElement.style.transition;this.targetElement.classList.remove(y.targetHighlighted),this.targetElement.classList.remove(y.targetRelative),e.includes(w)&&setTimeout((()=>{t.style.transition=e.replace(`, ${w}`,"")}),0)}},isButtonEnabled(t){return!this.params.enabledButtons.hasOwnProperty(t)||this.params.enabledButtons[t]},getOffset(t){let e=this.targetElement.getBoundingClientRect().top;return t.offset&&(e+=t.offset),e},getIonContent(){const t=document.getElementsByClassName("ion-page");if(t.length){const e={};for(const n of t){e[window.getComputedStyle(n)["z-index"]]=n.querySelector("ion-content")}return{el:e[Math.max(...Object.keys(e).map((t=>+t)))],pages:Object.keys(e).length}}},ionicScroll(t){const e=this.getOffset(t);this.getIonContent().el.scrollByPoint(0,e,this.step.duration||1e3)}},mounted(){this.createStep()},unmounted(){this.removeHighlight()}},Rt=v("data-v-ac393354");l("data-v-ac393354");const Wt={key:0,class:"v-step__header"},Vt={class:"v-step__content"},qt={key:1},$t={class:"v-step__buttons"};f();const Kt=Rt(((t,e,n,o,i,r)=>(a(),u("div",{class:[{"v-step--sticky":r.isSticky},"v-step"],id:"v-step-"+i.hash,ref:"v-step-"+i.hash},[p(t.$slots,"header",{},(()=>[n.step.header?(a(),u("div",Wt,[n.step.header.title?(a(),u("div",{key:0,innerHTML:n.step.header.title},null,8,["innerHTML"])):c("",!0)])):c("",!0)]),{},!0),p(t.$slots,"content",{},(()=>[d("div",Vt,[n.step.content?(a(),u("div",{key:0,innerHTML:n.step.content},null,8,["innerHTML"])):(a(),u("div",qt,"This is a demo step! The id of this step is "+h(i.hash)+" and it targets "+h(n.step.target)+".",1))])]),{},!0),p(t.$slots,"actions",{},(()=>[d("div",$t,[!n.isLast&&r.isButtonEnabled("buttonSkip")?(a(),u("button",{key:0,onClick:e[1]||(e[1]=m(((...t)=>n.skip&&n.skip(...t)),["prevent"])),class:"v-step__button v-step__button-skip"},h(n.labels.buttonSkip),1)):c("",!0),!n.isFirst&&r.isButtonEnabled("buttonPrevious")?(a(),u("button",{key:1,onClick:e[2]||(e[2]=m(((...t)=>n.previousStep&&n.previousStep(...t)),["prevent"])),class:"v-step__button v-step__button-previous"},h(n.labels.buttonPrevious),1)):c("",!0),!n.isLast&&r.isButtonEnabled("buttonNext")?(a(),u("button",{key:2,onClick:e[3]||(e[3]=m(((...t)=>n.nextStep&&n.nextStep(...t)),["prevent"])),class:"v-step__button v-step__button-next"},h(n.labels.buttonNext),1)):c("",!0),n.isLast&&r.isButtonEnabled("buttonStop")?(a(),u("button",{key:3,onClick:e[4]||(e[4]=m(((...t)=>n.finish&&n.finish(...t)),["prevent"])),class:"v-step__button v-step__button-stop"},h(n.labels.buttonStop),1)):c("",!0)])]),{},!0),d("div",{class:["v-step__arrow",{"v-step__arrow--dark":n.step.header&&n.step.header.title}],"data-popper-arrow":""},null,2)],10,["id"]))));Mt.render=Kt,Mt.__scopeId="data-v-ac393354";const It={install(t,e){t.component(k.name,k),t.component(Mt.name,Mt),t.config.globalProperties.$tours={}}};export default It;
