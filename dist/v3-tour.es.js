var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,i=Object.prototype.propertyIsEnumerable,o=(e,n,i)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,r=(t,r)=>{for(var s in r||(r={}))e.call(r,s)&&o(t,s,r[s]);if(n)for(var s of n(r))i.call(r,s)&&o(t,s,r[s]);return t};import{resolveComponent as s,openBlock as a,createBlock as p,renderSlot as u,createCommentVNode as c,pushScopeId as l,popScopeId as f,createVNode as d,toDisplayString as h,withModifiers as m,withScopeId as v}from"vue";const g={onStart:()=>{},onPreviousStep:t=>{},onNextStep:t=>{},onStop:()=>{},onSkip:()=>{},onFinish:()=>{}},b={highlight:!1,labels:{buttonSkip:"Skip tour",buttonPrevious:"Previous",buttonNext:"Next",buttonStop:"Finish"},enabledButtons:{buttonSkip:!0,buttonPrevious:!0,buttonNext:!0,buttonStop:!0},startTimeout:0,stopOnTargetNotFound:!0,useKeyboardNavigation:!0,enabledNavigationKeys:{escape:!0,arrowRight:!0,arrowLeft:!0},debug:!1},y={active:"v-tour--active",targetHighlighted:"v-tour__target--highlighted",targetRelative:"v-tour__target--relative"},w="box-shadow 0s ease-in-out 0s",x={enableScrolling:!0,highlight:b.highlight,enabledButtons:b.enabledButtons,modifiers:[{name:"arrow",options:{element:".v-step__arrow",padding:10}},{name:"preventOverflow",options:{rootBoundary:"window",padding:10}},{name:"offset",options:{offset:[0,10]}}],placement:"bottom"},O=39,S=37,k=27;const E={name:"v-tour",props:{steps:{type:Array,default:()=>[]},name:{type:String},options:{type:Object,default:()=>b},callbacks:{type:Object,default:()=>g}},data:()=>({currentStep:-1}),mounted(){this.$tours[this.name]=this},beforeUnmount(){this.customOptions.useKeyboardNavigation&&window.removeEventListener("keyup",this.handleKeyup)},computed:{customOptions(){return r(r({},b),this.options)},customCallbacks(){return r(r({},g),this.callbacks)},isRunning(){return this.currentStep>-1&&this.currentStep<this.numberOfSteps},isFirst(){return 0===this.currentStep},isLast(){return this.currentStep===this.steps.length-1},numberOfSteps(){return this.steps.length},step(){return this.steps[this.currentStep]}},methods:{async start(t){this.customOptions.useKeyboardNavigation&&window.addEventListener("keyup",this.handleKeyup),t=void 0!==t?parseInt(t,10):0;let e=this.steps[t];if(void 0!==e.before)try{await e.before("start")}catch(n){return Promise.reject(n)}return await(()=>new Promise(((e,n)=>{setTimeout((()=>{this.customCallbacks.onStart(),this.currentStep=t,e()}),this.customOptions.startTimeout)})))(),Promise.resolve()},async previousStep(){let t=this.currentStep-1,e=()=>new Promise(((e,n)=>{this.customCallbacks.onPreviousStep(this.currentStep),this.currentStep=t,e()}));if(t>-1){let i=this.steps[t];if(void 0!==i.before)try{await i.before("previous")}catch(n){return Promise.reject(n)}await e()}return Promise.resolve()},async nextStep(){let t=this.currentStep+1,e=()=>new Promise(((e,n)=>{this.customCallbacks.onNextStep(this.currentStep),this.currentStep=t,e()}));if(t<this.numberOfSteps&&-1!==this.currentStep){let i=this.steps[t];if(void 0!==i.before)try{await i.before("next")}catch(n){return Promise.reject(n)}await e()}return Promise.resolve()},stop(){this.customCallbacks.onStop(),document.body.classList.remove("v-tour--active"),this.currentStep=-1},skip(){this.customCallbacks.onSkip(),this.stop()},finish(){this.customCallbacks.onFinish(),this.stop()},handleKeyup(t){switch(this.customOptions.debug&&console.log("[Vue Tour] A keyup event occured:",t),t.keyCode){case O:this.isKeyEnabled("arrowRight")&&this.nextStep();break;case S:this.isKeyEnabled("arrowLeft")&&this.previousStep();break;case k:this.isKeyEnabled("escape")&&this.stop()}},isKeyEnabled(t){const{enabledNavigationKeys:e}=this.customOptions;return!e.hasOwnProperty(t)||e[t]}}},j={class:"v-tour"};E.render=function(t,e,n,i,o,r){const l=s("v-step");return a(),p("div",j,[u(t.$slots,"default",{currentStep:o.currentStep,steps:n.steps,previousStep:r.previousStep,nextStep:r.nextStep,stop:r.stop,skip:r.skip,finish:r.finish,isFirst:r.isFirst,isLast:r.isLast,labels:r.customOptions.labels,enabledButtons:r.customOptions.enabledButtons,highlight:r.customOptions.highlight,debug:r.customOptions.debug},(()=>[n.steps[o.currentStep]?(a(),p(l,{step:n.steps[o.currentStep],key:o.currentStep,"previous-step":r.previousStep,"next-step":r.nextStep,stop:r.stop,skip:r.skip,finish:r.finish,"is-first":r.isFirst,"is-last":r.isLast,labels:r.customOptions.labels,"enabled-buttons":r.customOptions.enabledButtons,highlight:r.customOptions.highlight,"stop-on-fail":r.customOptions.stopOnTargetNotFound,debug:r.customOptions.debug,ionic:r.customOptions.ionic,onTargetNotFound:e[1]||(e[1]=e=>t.$emit("targetNotFound",e))},null,8,["step","previous-step","next-step","stop","skip","finish","is-first","is-last","labels","enabled-buttons","highlight","stop-on-fail","debug","ionic"])):c("",!0)]))])};var B="top",L="bottom",P="right",_="left",T=[B,L,P,_],A=T.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),C=[].concat(T,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),H=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function D(t){return t?(t.nodeName||"").toLowerCase():null}function F(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function N(t){return t instanceof F(t).Element||t instanceof Element}function M(t){return t instanceof F(t).HTMLElement||t instanceof HTMLElement}function R(t){return"undefined"!=typeof ShadowRoot&&(t instanceof F(t).ShadowRoot||t instanceof ShadowRoot)}var W={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},i=e.attributes[t]||{},o=e.elements[t];M(o)&&D(o)&&(Object.assign(o.style,n),Object.keys(i).forEach((function(t){var e=i[t];!1===e?o.removeAttribute(t):o.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var i=e.elements[t],o=e.attributes[t]||{},r=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{});M(i)&&D(i)&&(Object.assign(i.style,r),Object.keys(o).forEach((function(t){i.removeAttribute(t)})))}))}},requires:["computeStyles"]};function V(t){return t.split("-")[0]}var q=Math.max,$=Math.min,K=Math.round;function I(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function U(){return!/^((?!chrome|android).)*safari/i.test(I())}function z(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=!1);var i=t.getBoundingClientRect(),o=1,r=1;e&&M(t)&&(o=t.offsetWidth>0&&K(i.width)/t.offsetWidth||1,r=t.offsetHeight>0&&K(i.height)/t.offsetHeight||1);var s=(N(t)?F(t):window).visualViewport,a=!U()&&n,p=(i.left+(a&&s?s.offsetLeft:0))/o,u=(i.top+(a&&s?s.offsetTop:0))/r,c=i.width/o,l=i.height/r;return{width:c,height:l,top:u,right:p+c,bottom:u+l,left:p,x:p,y:u}}function Y(t){var e=z(t),n=t.offsetWidth,i=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:i}}function X(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&R(n)){var i=e;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function G(t){return F(t).getComputedStyle(t)}function J(t){return["table","td","th"].indexOf(D(t))>=0}function Q(t){return((N(t)?t.ownerDocument:t.document)||window.document).documentElement}function Z(t){return"html"===D(t)?t:t.assignedSlot||t.parentNode||(R(t)?t.host:null)||Q(t)}function tt(t){return M(t)&&"fixed"!==G(t).position?t.offsetParent:null}function et(t){for(var e=F(t),n=tt(t);n&&J(n)&&"static"===G(n).position;)n=tt(n);return n&&("html"===D(n)||"body"===D(n)&&"static"===G(n).position)?e:n||function(t){var e=/firefox/i.test(I());if(/Trident/i.test(I())&&M(t)&&"fixed"===G(t).position)return null;var n=Z(t);for(R(n)&&(n=n.host);M(n)&&["html","body"].indexOf(D(n))<0;){var i=G(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||e&&"filter"===i.willChange||e&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(t)||e}function nt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function it(t,e,n){return q(t,$(e,n))}function ot(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function rt(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}function st(t){return t.split("-")[1]}var at={top:"auto",right:"auto",bottom:"auto",left:"auto"};function pt(t){var e,n=t.popper,i=t.popperRect,o=t.placement,r=t.variation,s=t.offsets,a=t.position,p=t.gpuAcceleration,u=t.adaptive,c=t.roundOffsets,l=t.isFixed,f=s.x,d=void 0===f?0:f,h=s.y,m=void 0===h?0:h,v="function"==typeof c?c({x:d,y:m}):{x:d,y:m};d=v.x,m=v.y;var g=s.hasOwnProperty("x"),b=s.hasOwnProperty("y"),y=_,w=B,x=window;if(u){var O=et(n),S="clientHeight",k="clientWidth";if(O===F(n)&&"static"!==G(O=Q(n)).position&&"absolute"===a&&(S="scrollHeight",k="scrollWidth"),O=O,o===B||(o===_||o===P)&&"end"===r)w=L,m-=(l&&O===x&&x.visualViewport?x.visualViewport.height:O[S])-i.height,m*=p?1:-1;if(o===_||(o===B||o===L)&&"end"===r)y=P,d-=(l&&O===x&&x.visualViewport?x.visualViewport.width:O[k])-i.width,d*=p?1:-1}var E,j=Object.assign({position:a},u&&at),T=!0===c?function(t,e){var n=t.x,i=t.y,o=e.devicePixelRatio||1;return{x:K(n*o)/o||0,y:K(i*o)/o||0}}({x:d,y:m},F(n)):{x:d,y:m};return d=T.x,m=T.y,p?Object.assign({},j,((E={})[w]=b?"0":"",E[y]=g?"0":"",E.transform=(x.devicePixelRatio||1)<=1?"translate("+d+"px, "+m+"px)":"translate3d("+d+"px, "+m+"px, 0)",E)):Object.assign({},j,((e={})[w]=b?m+"px":"",e[y]=g?d+"px":"",e.transform="",e))}var ut={passive:!0};var ct={left:"right",right:"left",bottom:"top",top:"bottom"};function lt(t){return t.replace(/left|right|bottom|top/g,(function(t){return ct[t]}))}var ft={start:"end",end:"start"};function dt(t){return t.replace(/start|end/g,(function(t){return ft[t]}))}function ht(t){var e=F(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function mt(t){return z(Q(t)).left+ht(t).scrollLeft}function vt(t){var e=G(t),n=e.overflow,i=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+i)}function gt(t){return["html","body","#document"].indexOf(D(t))>=0?t.ownerDocument.body:M(t)&&vt(t)?t:gt(Z(t))}function bt(t,e){var n;void 0===e&&(e=[]);var i=gt(t),o=i===(null==(n=t.ownerDocument)?void 0:n.body),r=F(i),s=o?[r].concat(r.visualViewport||[],vt(i)?i:[]):i,a=e.concat(s);return o?a:a.concat(bt(Z(s)))}function yt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function wt(t,e,n){return"viewport"===e?yt(function(t,e){var n=F(t),i=Q(t),o=n.visualViewport,r=i.clientWidth,s=i.clientHeight,a=0,p=0;if(o){r=o.width,s=o.height;var u=U();(u||!u&&"fixed"===e)&&(a=o.offsetLeft,p=o.offsetTop)}return{width:r,height:s,x:a+mt(t),y:p}}(t,n)):N(e)?function(t,e){var n=z(t,!1,"fixed"===e);return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}(e,n):yt(function(t){var e,n=Q(t),i=ht(t),o=null==(e=t.ownerDocument)?void 0:e.body,r=q(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=q(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-i.scrollLeft+mt(t),p=-i.scrollTop;return"rtl"===G(o||n).direction&&(a+=q(n.clientWidth,o?o.clientWidth:0)-r),{width:r,height:s,x:a,y:p}}(Q(t)))}function xt(t,e,n,i){var o="clippingParents"===e?function(t){var e=bt(Z(t)),n=["absolute","fixed"].indexOf(G(t).position)>=0&&M(t)?et(t):t;return N(n)?e.filter((function(t){return N(t)&&X(t,n)&&"body"!==D(t)})):[]}(t):[].concat(e),r=[].concat(o,[n]),s=r[0],a=r.reduce((function(e,n){var o=wt(t,n,i);return e.top=q(o.top,e.top),e.right=$(o.right,e.right),e.bottom=$(o.bottom,e.bottom),e.left=q(o.left,e.left),e}),wt(t,s,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Ot(t){var e,n=t.reference,i=t.element,o=t.placement,r=o?V(o):null,s=o?st(o):null,a=n.x+n.width/2-i.width/2,p=n.y+n.height/2-i.height/2;switch(r){case B:e={x:a,y:n.y-i.height};break;case L:e={x:a,y:n.y+n.height};break;case P:e={x:n.x+n.width,y:p};break;case _:e={x:n.x-i.width,y:p};break;default:e={x:n.x,y:n.y}}var u=r?nt(r):null;if(null!=u){var c="y"===u?"height":"width";switch(s){case"start":e[u]=e[u]-(n[c]/2-i[c]/2);break;case"end":e[u]=e[u]+(n[c]/2-i[c]/2)}}return e}function St(t,e){void 0===e&&(e={});var n=e,i=n.placement,o=void 0===i?t.placement:i,r=n.strategy,s=void 0===r?t.strategy:r,a=n.boundary,p=void 0===a?"clippingParents":a,u=n.rootBoundary,c=void 0===u?"viewport":u,l=n.elementContext,f=void 0===l?"popper":l,d=n.altBoundary,h=void 0!==d&&d,m=n.padding,v=void 0===m?0:m,g=ot("number"!=typeof v?v:rt(v,T)),b="popper"===f?"reference":"popper",y=t.rects.popper,w=t.elements[h?b:f],x=xt(N(w)?w:w.contextElement||Q(t.elements.popper),p,c,s),O=z(t.elements.reference),S=Ot({reference:O,element:y,strategy:"absolute",placement:o}),k=yt(Object.assign({},y,S)),E="popper"===f?k:O,j={top:x.top-E.top+g.top,bottom:E.bottom-x.bottom+g.bottom,left:x.left-E.left+g.left,right:E.right-x.right+g.right},_=t.modifiersData.offset;if("popper"===f&&_){var A=_[o];Object.keys(j).forEach((function(t){var e=[P,L].indexOf(t)>=0?1:-1,n=[B,L].indexOf(t)>=0?"y":"x";j[t]+=A[n]*e}))}return j}function kt(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Et(t){return[B,P,L,_].some((function(e){return t[e]>=0}))}function jt(t,e,n){void 0===n&&(n=!1);var i,o,r=M(e),s=M(e)&&function(t){var e=t.getBoundingClientRect(),n=K(e.width)/t.offsetWidth||1,i=K(e.height)/t.offsetHeight||1;return 1!==n||1!==i}(e),a=Q(e),p=z(t,s,n),u={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==D(e)||vt(a))&&(u=(i=e)!==F(i)&&M(i)?{scrollLeft:(o=i).scrollLeft,scrollTop:o.scrollTop}:ht(i)),M(e)?((c=z(e,!0)).x+=e.clientLeft,c.y+=e.clientTop):a&&(c.x=mt(a))),{x:p.left+u.scrollLeft-c.x,y:p.top+u.scrollTop-c.y,width:p.width,height:p.height}}function Bt(t){var e=new Map,n=new Set,i=[];function o(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!n.has(t)){var i=e.get(t);i&&o(i)}})),i.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||o(t)})),i}var Lt={placement:"bottom",modifiers:[],strategy:"absolute"};function Pt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function _t(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,i=void 0===n?[]:n,o=e.defaultOptions,r=void 0===o?Lt:o;return function(t,e,n){void 0===n&&(n=r);var o,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Lt,r),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},p=[],u=!1,c={state:a,setOptions:function(n){var o="function"==typeof n?n(a.options):n;l(),a.options=Object.assign({},r,a.options,o),a.scrollParents={reference:N(t)?bt(t):t.contextElement?bt(t.contextElement):[],popper:bt(e)};var s,u,f=function(t){var e=Bt(t);return H.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}((s=[].concat(i,a.options.modifiers),u=s.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{}),Object.keys(u).map((function(t){return u[t]}))));return a.orderedModifiers=f.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,i=void 0===n?{}:n,o=t.effect;if("function"==typeof o){var r=o({state:a,name:e,instance:c,options:i}),s=function(){};p.push(r||s)}})),c.update()},forceUpdate:function(){if(!u){var t=a.elements,e=t.reference,n=t.popper;if(Pt(e,n)){a.rects={reference:jt(e,et(n),"fixed"===a.options.strategy),popper:Y(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var i=0;i<a.orderedModifiers.length;i++)if(!0!==a.reset){var o=a.orderedModifiers[i],r=o.fn,s=o.options,p=void 0===s?{}:s,l=o.name;"function"==typeof r&&(a=r({state:a,options:p,name:l,instance:c})||a)}else a.reset=!1,i=-1}}},update:(o=function(){return new Promise((function(t){c.forceUpdate(),t(a)}))},function(){return s||(s=new Promise((function(t){Promise.resolve().then((function(){s=void 0,t(o())}))}))),s}),destroy:function(){l(),u=!0}};if(!Pt(t,e))return c;function l(){p.forEach((function(t){return t()})),p=[]}return c.setOptions(n).then((function(t){!u&&n.onFirstUpdate&&n.onFirstUpdate(t)})),c}}var Tt=_t({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,i=t.options,o=i.scroll,r=void 0===o||o,s=i.resize,a=void 0===s||s,p=F(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&u.forEach((function(t){t.addEventListener("scroll",n.update,ut)})),a&&p.addEventListener("resize",n.update,ut),function(){r&&u.forEach((function(t){t.removeEventListener("scroll",n.update,ut)})),a&&p.removeEventListener("resize",n.update,ut)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=Ot({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,i=n.gpuAcceleration,o=void 0===i||i,r=n.adaptive,s=void 0===r||r,a=n.roundOffsets,p=void 0===a||a,u={placement:V(e.placement),variation:st(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,pt(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:p})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,pt(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},W,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,i=t.name,o=n.offset,r=void 0===o?[0,0]:o,s=C.reduce((function(t,n){return t[n]=function(t,e,n){var i=V(t),o=[_,B].indexOf(i)>=0?-1:1,r="function"==typeof n?n(Object.assign({},e,{placement:t})):n,s=r[0],a=r[1];return s=s||0,a=(a||0)*o,[_,P].indexOf(i)>=0?{x:a,y:s}:{x:s,y:a}}(n,e.rects,r),t}),{}),a=s[e.placement],p=a.x,u=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=p,e.modifiersData.popperOffsets.y+=u),e.modifiersData[i]=s}},{name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,i=t.name;if(!e.modifiersData[i]._skip){for(var o=n.mainAxis,r=void 0===o||o,s=n.altAxis,a=void 0===s||s,p=n.fallbackPlacements,u=n.padding,c=n.boundary,l=n.rootBoundary,f=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=e.options.placement,g=V(v),b=p||(g===v||!h?[lt(v)]:function(t){if("auto"===V(t))return[];var e=lt(t);return[dt(t),e,dt(e)]}(v)),y=[v].concat(b).reduce((function(t,n){return t.concat("auto"===V(n)?function(t,e){void 0===e&&(e={});var n=e,i=n.placement,o=n.boundary,r=n.rootBoundary,s=n.padding,a=n.flipVariations,p=n.allowedAutoPlacements,u=void 0===p?C:p,c=st(i),l=c?a?A:A.filter((function(t){return st(t)===c})):T,f=l.filter((function(t){return u.indexOf(t)>=0}));0===f.length&&(f=l);var d=f.reduce((function(e,n){return e[n]=St(t,{placement:n,boundary:o,rootBoundary:r,padding:s})[V(n)],e}),{});return Object.keys(d).sort((function(t,e){return d[t]-d[e]}))}(e,{placement:n,boundary:c,rootBoundary:l,padding:u,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),w=e.rects.reference,x=e.rects.popper,O=new Map,S=!0,k=y[0],E=0;E<y.length;E++){var j=y[E],H=V(j),D="start"===st(j),F=[B,L].indexOf(H)>=0,N=F?"width":"height",M=St(e,{placement:j,boundary:c,rootBoundary:l,altBoundary:f,padding:u}),R=F?D?P:_:D?L:B;w[N]>x[N]&&(R=lt(R));var W=lt(R),q=[];if(r&&q.push(M[H]<=0),a&&q.push(M[R]<=0,M[W]<=0),q.every((function(t){return t}))){k=j,S=!1;break}O.set(j,q)}if(S)for(var $=function(t){var e=y.find((function(e){var n=O.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return k=e,"break"},K=h?3:1;K>0;K--){if("break"===$(K))break}e.placement!==k&&(e.modifiersData[i]._skip=!0,e.placement=k,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,i=t.name,o=n.mainAxis,r=void 0===o||o,s=n.altAxis,a=void 0!==s&&s,p=n.boundary,u=n.rootBoundary,c=n.altBoundary,l=n.padding,f=n.tether,d=void 0===f||f,h=n.tetherOffset,m=void 0===h?0:h,v=St(e,{boundary:p,rootBoundary:u,padding:l,altBoundary:c}),g=V(e.placement),b=st(e.placement),y=!b,w=nt(g),x="x"===w?"y":"x",O=e.modifiersData.popperOffsets,S=e.rects.reference,k=e.rects.popper,E="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,j="number"==typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),T=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,A={x:0,y:0};if(O){if(r){var C,H="y"===w?B:_,D="y"===w?L:P,F="y"===w?"height":"width",N=O[w],M=N+v[H],R=N-v[D],W=d?-k[F]/2:0,K="start"===b?S[F]:k[F],I="start"===b?-k[F]:-S[F],U=e.elements.arrow,z=d&&U?Y(U):{width:0,height:0},X=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=X[H],J=X[D],Q=it(0,S[F],z[F]),Z=y?S[F]/2-W-Q-G-j.mainAxis:K-Q-G-j.mainAxis,tt=y?-S[F]/2+W+Q+J+j.mainAxis:I+Q+J+j.mainAxis,ot=e.elements.arrow&&et(e.elements.arrow),rt=ot?"y"===w?ot.clientTop||0:ot.clientLeft||0:0,at=null!=(C=null==T?void 0:T[w])?C:0,pt=N+tt-at,ut=it(d?$(M,N+Z-at-rt):M,N,d?q(R,pt):R);O[w]=ut,A[w]=ut-N}if(a){var ct,lt="x"===w?B:_,ft="x"===w?L:P,dt=O[x],ht="y"===x?"height":"width",mt=dt+v[lt],vt=dt-v[ft],gt=-1!==[B,_].indexOf(g),bt=null!=(ct=null==T?void 0:T[x])?ct:0,yt=gt?mt:dt-S[ht]-k[ht]-bt+j.altAxis,wt=gt?dt+S[ht]+k[ht]-bt-j.altAxis:vt,xt=d&&gt?(kt=it(yt,dt,Ot=wt))>Ot?Ot:kt:it(d?yt:mt,dt,d?wt:vt);O[x]=xt,A[x]=xt-dt}var Ot,kt;e.modifiersData[i]=A}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,i=t.name,o=t.options,r=n.elements.arrow,s=n.modifiersData.popperOffsets,a=V(n.placement),p=nt(a),u=[_,P].indexOf(a)>=0?"height":"width";if(r&&s){var c=function(t,e){return ot("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:rt(t,T))}(o.padding,n),l=Y(r),f="y"===p?B:_,d="y"===p?L:P,h=n.rects.reference[u]+n.rects.reference[p]-s[p]-n.rects.popper[u],m=s[p]-n.rects.reference[p],v=et(r),g=v?"y"===p?v.clientHeight||0:v.clientWidth||0:0,b=h/2-m/2,y=c[f],w=g-l[u]-c[d],x=g/2-l[u]/2+b,O=it(y,x,w),S=p;n.modifiersData[i]=((e={})[S]=O,e.centerOffset=O-x,e)}},effect:function(t){var e=t.state,n=t.options.element,i=void 0===n?"[data-popper-arrow]":n;null!=i&&("string"!=typeof i||(i=e.elements.popper.querySelector(i)))&&X(e.elements.popper,i)&&(e.elements.arrow=i)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,i=e.rects.reference,o=e.rects.popper,r=e.modifiersData.preventOverflow,s=St(e,{elementContext:"reference"}),a=St(e,{altBoundary:!0}),p=kt(s,i),u=kt(a,o,r),c=Et(p),l=Et(u);e.modifiersData[n]={referenceClippingOffsets:p,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:l},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":l})}}]}),At=function(t,e,n,i){return(t/=i/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e},Ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ht=function(){var t=void 0,e=void 0,n=void 0,i=void 0,o=void 0,r=void 0,s=void 0,a=void 0,p=void 0,u=void 0,c=void 0,l=void 0;function f(){return window.scrollY||window.pageYOffset}function d(t){return t.getBoundingClientRect().top+e}function h(n){p||(p=n),c=o(u=n-p,e,s,a),window.scrollTo(0,c),u<a?window.requestAnimationFrame(h):function(){window.scrollTo(0,e+s),t&&r&&(t.setAttribute("tabindex","-1"),t.focus());"function"==typeof l&&l();p=!1}()}return function(p){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a=u.duration||1e3,i=u.offset||0,l=u.callback,o=u.easing||At,r=u.a11y||!1,e=f(),void 0===p?"undefined":Ct(p)){case"number":t=void 0,r=!1,n=e+p;break;case"object":n=d(t=p);break;case"string":t=document.querySelector(p),n=d(t)}switch(s=n-e+i,Ct(u.duration)){case"number":a=u.duration;break;case"function":a=u.duration(s)}window.requestAnimationFrame(h)}}();function Dt(t,e){var n,i;if(0===e.length)return t;for(n=0,i=e.length;n<i;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t<0?-2*t:t}function Ft(t,e,n,i){var o,r=Dt(Dt(Dt(t,n),(o=e,Object.prototype.toString.call(o))),typeof e);if(null===e)return Dt(r,"null");if(void 0===e)return Dt(r,"undefined");if("object"==typeof e||"function"==typeof e){if(-1!==i.indexOf(e))return Dt(r,"[Circular]"+n);i.push(e);var s=function(t,e,n){return Object.keys(e).sort().reduce((function(t,i){return Ft(t,e[i],i,n)}),t)}(r,e,i);if(!("valueOf"in e)||"function"!=typeof e.valueOf)return s;try{return Dt(s,String(e.valueOf()))}catch(a){return Dt(s,"[valueOf exception]"+(a.stack||a.message))}}return Dt(r,e.toString())}var Nt=function(t){return function(t,e){for(;t.length<e;)t="0"+t;return t}(Ft(0,t,"",[]).toString(16),8)};const Mt={name:"v-step",props:{step:{type:Object},previousStep:{type:Function},nextStep:{type:Function},stop:{type:Function},skip:{type:Function,default:function(){this.stop()}},finish:{type:Function,default:function(){this.stop()}},isFirst:{type:Boolean},isLast:{type:Boolean},labels:{type:Object},enabledButtons:{type:Object},highlight:{type:Boolean},stopOnFail:{type:Boolean},debug:{type:Boolean},ionic:{type:Boolean}},data(){var t;return{hash:Nt(this.step.target),targetElement:this.step.parent?null==(t=document.querySelector(this.step.target))?void 0:t.parentElement:document.querySelector(this.step.target)}},computed:{params(){return r(r(r(r({},x),{highlight:this.highlight}),{enabledButtons:Object.assign({},this.enabledButtons)}),this.step.params)},isSticky(){return!this.step.target}},methods:{createStep(){this.debug&&console.log("[Vue Tour] The target element "+this.step.target+' of .v-step[id="'+this.hash+'"] is:',this.targetElement),this.isSticky?document.body.appendChild(this.$refs["v-step-"+this.hash]):this.targetElement?(this.enableScrolling(),this.createHighlight(),Tt(this.targetElement,this.$refs["v-step-"+this.hash],this.params)):(this.debug&&console.error("[Vue Tour] The target element "+this.step.target+' of .v-step[id="'+this.hash+'"] does not exist!'),this.$emit("targetNotFound",this.step),this.stopOnFail?this.stop():this.nextStep())},enableScrolling(){if(this.params.enableScrolling)if(this.step.duration||this.step.offset){let t={duration:this.step.duration||1e3,offset:this.step.offset||0,callback:void 0,a11y:!1};this.ionic?this.ionicScroll(t):Ht(this.targetElement,t)}else this.targetElement.scrollIntoView({behavior:"smooth"})},isHighlightEnabled(){return this.debug&&console.log(`[Vue Tour] Highlight is ${this.params.highlight?"enabled":"disabled"} for .v-step[id="${this.hash}"]`),this.params.highlight},createHighlight(){if(this.isHighlightEnabled()){document.body.classList.add(y.active);const t=window.getComputedStyle(this.targetElement).getPropertyValue("transition");"all 0s ease 0s"!==t&&(this.targetElement.style.transition=`${t}, ${w}`),this.targetElement.classList.add(y.targetHighlighted),this.targetElement.style.position||this.targetElement.classList.add(y.targetRelative)}else document.body.classList.remove(y.active)},removeHighlight(){if(this.isHighlightEnabled()){const t=this.targetElement,e=this.targetElement.style.transition;this.targetElement.classList.remove(y.targetHighlighted),this.targetElement.classList.remove(y.targetRelative),e.includes(w)&&setTimeout((()=>{t.style.transition=e.replace(`, ${w}`,"")}),0)}},isButtonEnabled(t){return!this.params.enabledButtons.hasOwnProperty(t)||this.params.enabledButtons[t]},getOffset(t){let e=this.targetElement.getBoundingClientRect().top;return t.offset&&(e+=t.offset),e},getIonContent(){const t=document.getElementsByClassName("ion-page");if(t.length){const e={};for(const n of t){e[window.getComputedStyle(n)["z-index"]]=n.querySelector("ion-content")}return{el:e[Math.max(...Object.keys(e).map((t=>+t)))],pages:Object.keys(e).length}}},ionicScroll(t){const e=this.getOffset(t);this.getIonContent().el.scrollByPoint(0,e,this.step.duration||1e3)}},mounted(){this.createStep()},unmounted(){this.removeHighlight()}},Rt=v("data-v-53b47940");l("data-v-53b47940");const Wt={key:0,class:"v-step__header"},Vt={class:"v-step__content"},qt={key:1},$t={class:"v-step__buttons"};f();const Kt=Rt(((t,e,n,i,o,r)=>(a(),p("div",{class:[{"v-step--sticky":r.isSticky},"v-step"],id:"v-step-"+o.hash,ref:"v-step-"+o.hash},[u(t.$slots,"header",{},(()=>[n.step.header?(a(),p("div",Wt,[n.step.header.title?(a(),p("div",{key:0,innerHTML:n.step.header.title},null,8,["innerHTML"])):c("",!0)])):c("",!0)]),{},!0),u(t.$slots,"content",{},(()=>[d("div",Vt,[n.step.content?(a(),p("div",{key:0,innerHTML:n.step.content},null,8,["innerHTML"])):(a(),p("div",qt,"This is a demo step! The id of this step is "+h(o.hash)+" and it targets "+h(n.step.target)+".",1))])]),{},!0),u(t.$slots,"actions",{},(()=>[d("div",$t,[!n.isLast&&r.isButtonEnabled("buttonSkip")?(a(),p("button",{key:0,onClick:e[1]||(e[1]=m(((...t)=>n.skip&&n.skip(...t)),["prevent"])),class:"v-step__button v-step__button-skip"},h(n.labels.buttonSkip),1)):c("",!0),!n.isFirst&&r.isButtonEnabled("buttonPrevious")?(a(),p("button",{key:1,onClick:e[2]||(e[2]=m(((...t)=>n.previousStep&&n.previousStep(...t)),["prevent"])),class:"v-step__button v-step__button-previous"},h(n.labels.buttonPrevious),1)):c("",!0),!n.isLast&&r.isButtonEnabled("buttonNext")?(a(),p("button",{key:2,onClick:e[3]||(e[3]=m(((...t)=>n.nextStep&&n.nextStep(...t)),["prevent"])),class:"v-step__button v-step__button-next"},h(n.labels.buttonNext),1)):c("",!0),n.isLast&&r.isButtonEnabled("buttonStop")?(a(),p("button",{key:3,onClick:e[4]||(e[4]=m(((...t)=>n.finish&&n.finish(...t)),["prevent"])),class:"v-step__button v-step__button-stop"},h(n.labels.buttonStop),1)):c("",!0)])]),{},!0),d("div",{class:["v-step__arrow",{"v-step__arrow--dark":n.step.header&&n.step.header.title}],"data-popper-arrow":""},null,2)],10,["id"]))));Mt.render=Kt,Mt.__scopeId="data-v-53b47940";const It={install(t,e){t.component(E.name,E),t.component(Mt.name,Mt),t.config.globalProperties.$tours={}}};export default It;
