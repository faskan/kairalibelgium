(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[6317],{7873:(ze,I,l)=>{l.r(I),l.d(I,{AnimationCurves:()=>he,AnimationDurations:()=>me,DateAdapter:()=>D,ErrorStateMatcher:()=>Ce,MATERIAL_SANITY_CHECKS:()=>w,MAT_DATE_FORMATS:()=>N,MAT_DATE_LOCALE:()=>S,MAT_DATE_LOCALE_FACTORY:()=>L,MAT_NATIVE_DATE_FORMATS:()=>j,MAT_OPTGROUP:()=>O,MAT_OPTION_PARENT_COMPONENT:()=>C,MAT_RIPPLE_GLOBAL_OPTIONS:()=>W,MatCommonModule:()=>c,MatLine:()=>Oe,MatLineModule:()=>Te,MatNativeDateModule:()=>Ee,MatOptgroup:()=>Pe,MatOption:()=>Le,MatOptionModule:()=>je,MatOptionSelectionChange:()=>Q,MatPseudoCheckbox:()=>G,MatPseudoCheckboxModule:()=>Z,MatRipple:()=>$,MatRippleModule:()=>K,NativeDateAdapter:()=>F,NativeDateModule:()=>B,RippleRef:()=>V,RippleRenderer:()=>m,ShowOnDirtyErrorStateMatcher:()=>ye,VERSION:()=>v,_MatOptgroupBase:()=>X,_MatOptionBase:()=>J,_countGroupLabelsBeforeOption:()=>Ne,_getOptionScrollPosition:()=>Fe,defaultRippleAnimationConfig:()=>y,mixinColor:()=>_e,mixinDisableRipple:()=>ge,mixinDisabled:()=>P,mixinErrorState:()=>be,mixinInitialized:()=>ve,mixinTabIndex:()=>Me,setLines:()=>xe});var o=l(5760),_=l(2240),R=l(6235),g=(l(5119),l(4888)),p=l(8183),h=l(7121),M=l(3635),oe=l(5893),A=l(1775),b=l(6582);const ae=["*",[["mat-option"],["ng-container"]]],re=["*","mat-option, ng-container"],se=["text"];function le(i,t){if(1&i&&o.\u0275\u0275element(0,"mat-pseudo-checkbox",6),2&i){const e=o.\u0275\u0275nextContext();o.\u0275\u0275property("state",e.selected?"checked":"unchecked")("disabled",e.disabled)}}function de(i,t){if(1&i&&o.\u0275\u0275element(0,"mat-pseudo-checkbox",7),2&i){const e=o.\u0275\u0275nextContext();o.\u0275\u0275property("disabled",e.disabled)}}function ce(i,t){if(1&i&&(o.\u0275\u0275elementStart(0,"span",8),o.\u0275\u0275text(1),o.\u0275\u0275elementEnd()),2&i){const e=o.\u0275\u0275nextContext();o.\u0275\u0275advance(1),o.\u0275\u0275textInterpolate1("(",e.group.label,")")}}const ue=[[["mat-icon"]],"*"],pe=["mat-icon","*"],v=new o.Version("15.2.3");let he=(()=>{class i{}return i.STANDARD_CURVE="cubic-bezier(0.4,0.0,0.2,1)",i.DECELERATION_CURVE="cubic-bezier(0.0,0.0,0.2,1)",i.ACCELERATION_CURVE="cubic-bezier(0.4,0.0,1,1)",i.SHARP_CURVE="cubic-bezier(0.4,0.0,0.6,1)",i})(),me=(()=>{class i{}return i.COMPLEX="375ms",i.ENTERING="225ms",i.EXITING="195ms",i})();const w=new o.InjectionToken("mat-sanity-checks",{providedIn:"root",factory:function fe(){return!0}});let c=(()=>{class i{constructor(e,n,a){this._sanityChecks=n,this._document=a,this._hasDoneGlobalChecks=!1,e._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(e){return!(0,p._isTestEnvironment)()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[e])}}return i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275inject(_.HighContrastModeDetector),o.\u0275\u0275inject(w,8),o.\u0275\u0275inject(g.DOCUMENT))},i.\u0275mod=o.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=o.\u0275\u0275defineInjector({imports:[R.BidiModule,R.BidiModule]}),i})();function P(i){return class extends i{get disabled(){return this._disabled}set disabled(t){this._disabled=(0,h.coerceBooleanProperty)(t)}constructor(...t){super(...t),this._disabled=!1}}}function _e(i,t){return class extends i{get color(){return this._color}set color(e){const n=e||this.defaultColor;n!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove(`mat-${this._color}`),n&&this._elementRef.nativeElement.classList.add(`mat-${n}`),this._color=n)}constructor(...e){super(...e),this.defaultColor=t,this.color=t}}}function ge(i){return class extends i{get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=(0,h.coerceBooleanProperty)(t)}constructor(...t){super(...t),this._disableRipple=!1}}}function Me(i,t=0){return class extends i{get tabIndex(){return this.disabled?-1:this._tabIndex}set tabIndex(e){this._tabIndex=null!=e?(0,h.coerceNumberProperty)(e):this.defaultTabIndex}constructor(...e){super(...e),this._tabIndex=t,this.defaultTabIndex=t}}}function be(i){return class extends i{updateErrorState(){const t=this.errorState,r=(this.errorStateMatcher||this._defaultErrorStateMatcher).isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);r!==t&&(this.errorState=r,this.stateChanges.next())}constructor(...t){super(...t),this.errorState=!1}}}function ve(i){return class extends i{constructor(...t){super(...t),this._isInitialized=!1,this._pendingSubscribers=[],this.initialized=new M.Observable(e=>{this._isInitialized?this._notifySubscriber(e):this._pendingSubscribers.push(e)})}_markInitialized(){this._isInitialized=!0,this._pendingSubscribers.forEach(this._notifySubscriber),this._pendingSubscribers=null}_notifySubscriber(t){t.next(),t.complete()}}}const S=new o.InjectionToken("MAT_DATE_LOCALE",{providedIn:"root",factory:L});function L(){return(0,o.inject)(o.LOCALE_ID)}class D{constructor(){this._localeChanges=new M.Subject,this.localeChanges=this._localeChanges}getValidDateOrNull(t){return this.isDateInstance(t)&&this.isValid(t)?t:null}deserialize(t){return null==t||this.isDateInstance(t)&&this.isValid(t)?t:this.invalid()}setLocale(t){this.locale=t,this._localeChanges.next()}compareDate(t,e){return this.getYear(t)-this.getYear(e)||this.getMonth(t)-this.getMonth(e)||this.getDate(t)-this.getDate(e)}sameDate(t,e){if(t&&e){let n=this.isValid(t),a=this.isValid(e);return n&&a?!this.compareDate(t,e):n==a}return t==e}clampDate(t,e,n){return e&&this.compareDate(t,e)<0?e:n&&this.compareDate(t,n)>0?n:t}}const N=new o.InjectionToken("mat-date-formats"),De=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;function E(i,t){const e=Array(i);for(let n=0;n<i;n++)e[n]=t(n);return e}let F=(()=>{class i extends D{constructor(e,n){super(),this.useUtcForDisplay=!1,super.setLocale(e)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){const n=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return E(12,a=>this._format(n,new Date(2017,a,1)))}getDateNames(){const e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return E(31,n=>this._format(e,new Date(2017,0,n+1)))}getDayOfWeekNames(e){const n=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return E(7,a=>this._format(n,new Date(2017,0,a+1)))}getYearName(e){const n=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(n,e)}getFirstDayOfWeek(){return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,n,a){let r=this._createDateWithOverflow(e,n,a);return r.getMonth(),r}today(){return new Date}parse(e,n){return"number"==typeof e?new Date(e):e?new Date(Date.parse(e)):null}format(e,n){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");const a=new Intl.DateTimeFormat(this.locale,{...n,timeZone:"utc"});return this._format(a,e)}addCalendarYears(e,n){return this.addCalendarMonths(e,12*n)}addCalendarMonths(e,n){let a=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+n,this.getDate(e));return this.getMonth(a)!=((this.getMonth(e)+n)%12+12)%12&&(a=this._createDateWithOverflow(this.getYear(a),this.getMonth(a),0)),a}addCalendarDays(e,n){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+n)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if("string"==typeof e){if(!e)return null;if(De.test(e)){let n=new Date(e);if(this.isValid(n))return n}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}_createDateWithOverflow(e,n,a){const r=new Date;return r.setFullYear(e,n,a),r.setHours(0,0,0,0),r}_2digit(e){return("00"+e).slice(-2)}_format(e,n){const a=new Date;return a.setUTCFullYear(n.getFullYear(),n.getMonth(),n.getDate()),a.setUTCHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e.format(a)}}return i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275inject(S,8),o.\u0275\u0275inject(p.Platform))},i.\u0275prov=o.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac}),i})();const j={parse:{dateInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"}}};let B=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=o.\u0275\u0275defineInjector({providers:[{provide:D,useClass:F}]}),i})(),Ee=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=o.\u0275\u0275defineInjector({providers:[{provide:N,useValue:j}],imports:[B]}),i})(),ye=(()=>{class i{isErrorState(e,n){return!!(e&&e.invalid&&(e.dirty||n&&n.submitted))}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=o.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac}),i})(),Ce=(()=>{class i{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=o.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),Oe=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=o.\u0275\u0275defineDirective({type:i,selectors:[["","mat-line",""],["","matLine",""]],hostAttrs:[1,"mat-line"]}),i})();function xe(i,t,e="mat"){i.changes.pipe((0,oe.startWith)(i)).subscribe(({length:n})=>{f(t,`${e}-2-line`,!1),f(t,`${e}-3-line`,!1),f(t,`${e}-multi-line`,!1),2===n||3===n?f(t,`${e}-${n}-line`,!0):n>3&&f(t,`${e}-multi-line`,!0)})}function f(i,t,e){i.nativeElement.classList.toggle(t,e)}let Te=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=o.\u0275\u0275defineInjector({imports:[c,c]}),i})();class V{constructor(t,e,n,a=!1){this._renderer=t,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=a,this.state=3}fadeOut(){this._renderer.fadeOutRipple(this)}}const U=(0,p.normalizePassiveListenerOptions)({passive:!0,capture:!0});class Ie{constructor(){this._events=new Map,this._delegateEventHandler=t=>{const e=(0,p._getEventTarget)(t);e&&this._events.get(t.type)?.forEach((n,a)=>{(a===e||a.contains(e))&&n.forEach(r=>r.handleEvent(t))})}}addHandler(t,e,n,a){const r=this._events.get(e);if(r){const s=r.get(n);s?s.add(a):r.set(n,new Set([a]))}else this._events.set(e,new Map([[n,new Set([a])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,U)})}removeHandler(t,e,n){const a=this._events.get(t);if(!a)return;const r=a.get(e);r&&(r.delete(n),0===r.size&&a.delete(e),0===a.size&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,U)))}}const y={enterDuration:225,exitDuration:150},z=(0,p.normalizePassiveListenerOptions)({passive:!0,capture:!0}),Y=["mousedown","touchstart"],H=["mouseup","mouseleave","touchend","touchcancel"];class m{constructor(t,e,n,a){this._target=t,this._ngZone=e,this._platform=a,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,a.isBrowser&&(this._containerElement=(0,h.coerceElement)(n))}fadeInRipple(t,e,n={}){const a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r={...y,...n.animation};n.centered&&(t=a.left+a.width/2,e=a.top+a.height/2);const s=n.radius||function ke(i,t,e){const n=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),a=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(n*n+a*a)}(t,e,a),Be=t-a.left,Ve=e-a.top,x=r.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=Be-s+"px",d.style.top=Ve-s+"px",d.style.height=2*s+"px",d.style.width=2*s+"px",null!=n.color&&(d.style.backgroundColor=n.color),d.style.transitionDuration=`${x}ms`,this._containerElement.appendChild(d);const q=window.getComputedStyle(d),ee=q.transitionDuration,T="none"===q.transitionProperty||"0s"===ee||"0s, 0s"===ee||0===a.width&&0===a.height,u=new V(this,d,n,T);d.style.transform="scale3d(1, 1, 1)",u.state=0,n.persistent||(this._mostRecentTransientRipple=u);let te=null;return!T&&(x||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{const ie=()=>this._finishRippleTransition(u),ne=()=>this._destroyRipple(u);d.addEventListener("transitionend",ie),d.addEventListener("transitioncancel",ne),te={onTransitionEnd:ie,onTransitionCancel:ne}}),this._activeRipples.set(u,te),(T||!x)&&this._finishRippleTransition(u),u}fadeOutRipple(t){if(2===t.state||3===t.state)return;const e=t.element,n={...y,...t.config.animation};e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",t.state=2,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){const e=(0,h.coerceElement)(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Y.forEach(n=>{m._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(t){"mousedown"===t.type?this._onMousedown(t):"touchstart"===t.type?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{H.forEach(e=>{this._triggerElement.addEventListener(e,this,z)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){0===t.state?this._startFadeOutTransition(t):2===t.state&&this._destroyRipple(t)}_startFadeOutTransition(t){const e=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=1,!n&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){const e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=3,null!==e&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel)),t.element.remove()}_onMousedown(t){const e=(0,_.isFakeMousedownFromScreenReader)(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!(0,_.isFakeTouchstartFromScreenReader)(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const e=t.changedTouches;for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{!t.config.persistent&&(1===t.state||t.config.terminateOnPointerUp&&0===t.state)&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){const t=this._triggerElement;t&&(Y.forEach(e=>m._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&H.forEach(e=>t.removeEventListener(e,this,z)))}}m._eventManager=new Ie;const W=new o.InjectionToken("mat-ripple-global-options");let $=(()=>{class i{get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}constructor(e,n,a,r,s){this._elementRef=e,this._animationMode=s,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=r||{},this._rippleRenderer=new m(this,n,e,a)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:{...this._globalOptions.animation,..."NoopAnimations"===this._animationMode?{enterDuration:0,exitDuration:0}:{},...this.animation},terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,a){return"number"==typeof e?this._rippleRenderer.fadeInRipple(e,n,{...this.rippleConfig,...a}):this._rippleRenderer.fadeInRipple(0,0,{...this.rippleConfig,...e})}}return i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275directiveInject(o.ElementRef),o.\u0275\u0275directiveInject(o.NgZone),o.\u0275\u0275directiveInject(p.Platform),o.\u0275\u0275directiveInject(W,8),o.\u0275\u0275directiveInject(A.ANIMATION_MODULE_TYPE,8))},i.\u0275dir=o.\u0275\u0275defineDirective({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,n){2&e&&o.\u0275\u0275classProp("mat-ripple-unbounded",n.unbounded)},inputs:{color:["matRippleColor","color"],unbounded:["matRippleUnbounded","unbounded"],centered:["matRippleCentered","centered"],radius:["matRippleRadius","radius"],animation:["matRippleAnimation","animation"],disabled:["matRippleDisabled","disabled"],trigger:["matRippleTrigger","trigger"]},exportAs:["matRipple"]}),i})(),K=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=o.\u0275\u0275defineInjector({imports:[c,c]}),i})(),G=(()=>{class i{constructor(e){this._animationMode=e,this.state="unchecked",this.disabled=!1,this.appearance="full"}}return i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275directiveInject(A.ANIMATION_MODULE_TYPE,8))},i.\u0275cmp=o.\u0275\u0275defineComponent({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(e,n){2&e&&o.\u0275\u0275classProp("mat-pseudo-checkbox-indeterminate","indeterminate"===n.state)("mat-pseudo-checkbox-checked","checked"===n.state)("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal","minimal"===n.appearance)("mat-pseudo-checkbox-full","full"===n.appearance)("_mat-animation-noopable","NoopAnimations"===n._animationMode)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(e,n){},styles:['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-full{border:2px solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}'],encapsulation:2,changeDetection:0}),i})(),Z=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=o.\u0275\u0275defineInjector({imports:[c]}),i})();const C=new o.InjectionToken("MAT_OPTION_PARENT_COMPONENT"),Ae=P(class{});let we=0,X=(()=>{class i extends Ae{constructor(e){super(),this._labelId="mat-optgroup-label-"+we++,this._inert=e?.inertGroups??!1}}return i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275directiveInject(C,8))},i.\u0275dir=o.\u0275\u0275defineDirective({type:i,inputs:{label:"label"},features:[o.\u0275\u0275InheritDefinitionFeature]}),i})();const O=new o.InjectionToken("MatOptgroup");let Pe=(()=>{class i extends X{}return i.\u0275fac=function(){let t;return function(n){return(t||(t=o.\u0275\u0275getInheritedFactory(i)))(n||i)}}(),i.\u0275cmp=o.\u0275\u0275defineComponent({type:i,selectors:[["mat-optgroup"]],hostAttrs:[1,"mat-mdc-optgroup"],hostVars:3,hostBindings:function(e,n){2&e&&o.\u0275\u0275attribute("role",n._inert?null:"group")("aria-disabled",n._inert?null:n.disabled.toString())("aria-labelledby",n._inert?null:n._labelId)},inputs:{disabled:"disabled"},exportAs:["matOptgroup"],features:[o.\u0275\u0275ProvidersFeature([{provide:O,useExisting:i}]),o.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:re,decls:5,vars:4,consts:[["aria-hidden","true",1,"mat-mdc-optgroup-label",3,"id"],[1,"mdc-list-item__primary-text"]],template:function(e,n){1&e&&(o.\u0275\u0275projectionDef(ae),o.\u0275\u0275elementStart(0,"span",0)(1,"span",1),o.\u0275\u0275text(2),o.\u0275\u0275projection(3),o.\u0275\u0275elementEnd()(),o.\u0275\u0275projection(4,1)),2&e&&(o.\u0275\u0275classProp("mdc-list-item--disabled",n.disabled),o.\u0275\u0275property("id",n._labelId),o.\u0275\u0275advance(2),o.\u0275\u0275textInterpolate1("",n.label," "))},styles:[".mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;min-height:48px}.mat-mdc-optgroup-label:focus{outline:none}[dir=rtl] .mat-mdc-optgroup-label,.mat-mdc-optgroup-label[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{white-space:normal}"],encapsulation:2,changeDetection:0}),i})(),Se=0;class Q{constructor(t,e=!1){this.source=t,this.isUserInput=e}}let J=(()=>{class i{get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}get disabled(){return this.group&&this.group.disabled||this._disabled}set disabled(e){this._disabled=(0,h.coerceBooleanProperty)(e)}get disableRipple(){return!(!this._parent||!this._parent.disableRipple)}get hideSingleSelectionIndicator(){return!(!this._parent||!this._parent.hideSingleSelectionIndicator)}constructor(e,n,a,r){this._element=e,this._changeDetectorRef=n,this._parent=a,this.group=r,this._selected=!1,this._active=!1,this._disabled=!1,this._mostRecentViewValue="",this.id="mat-option-"+Se++,this.onSelectionChange=new o.EventEmitter,this._stateChanges=new M.Subject}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent())}deselect(){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent())}focus(e,n){const a=this._getHostElement();"function"==typeof a.focus&&a.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===b.ENTER||e.keyCode===b.SPACE)&&!(0,b.hasModifierKey)(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=!this.multiple||!this._selected,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){const e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Q(this,e))}}return i.\u0275fac=function(e){o.\u0275\u0275invalidFactory()},i.\u0275dir=o.\u0275\u0275defineDirective({type:i,viewQuery:function(e,n){if(1&e&&o.\u0275\u0275viewQuery(se,7),2&e){let a;o.\u0275\u0275queryRefresh(a=o.\u0275\u0275loadQuery())&&(n._text=a.first)}},inputs:{value:"value",id:"id",disabled:"disabled"},outputs:{onSelectionChange:"onSelectionChange"}}),i})(),Le=(()=>{class i extends J{constructor(e,n,a,r){super(e,n,a,r)}}return i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275directiveInject(o.ElementRef),o.\u0275\u0275directiveInject(o.ChangeDetectorRef),o.\u0275\u0275directiveInject(C,8),o.\u0275\u0275directiveInject(O,8))},i.\u0275cmp=o.\u0275\u0275defineComponent({type:i,selectors:[["mat-option"]],hostAttrs:["role","option",1,"mat-mdc-option","mat-mdc-focus-indicator","mdc-list-item"],hostVars:12,hostBindings:function(e,n){1&e&&o.\u0275\u0275listener("click",function(){return n._selectViaInteraction()})("keydown",function(r){return n._handleKeydown(r)}),2&e&&(o.\u0275\u0275hostProperty("id",n.id),o.\u0275\u0275attribute("tabindex",n._getTabIndex())("aria-selected",n.selected)("aria-disabled",n.disabled.toString()),o.\u0275\u0275classProp("mdc-list-item--selected",n.selected)("mat-mdc-option-multiple",n.multiple)("mat-mdc-option-active",n.active)("mdc-list-item--disabled",n.disabled))},exportAs:["matOption"],features:[o.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:pe,decls:8,vars:5,consts:[["class","mat-mdc-option-pseudo-checkbox",3,"state","disabled",4,"ngIf"],[1,"mdc-list-item__primary-text"],["text",""],["class","mat-mdc-option-pseudo-checkbox","state","checked","appearance","minimal",3,"disabled",4,"ngIf"],["class","cdk-visually-hidden",4,"ngIf"],["mat-ripple","",1,"mat-mdc-option-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-mdc-option-pseudo-checkbox",3,"state","disabled"],["state","checked","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"]],template:function(e,n){1&e&&(o.\u0275\u0275projectionDef(ue),o.\u0275\u0275template(0,le,1,2,"mat-pseudo-checkbox",0),o.\u0275\u0275projection(1),o.\u0275\u0275elementStart(2,"span",1,2),o.\u0275\u0275projection(4,1),o.\u0275\u0275elementEnd(),o.\u0275\u0275template(5,de,1,1,"mat-pseudo-checkbox",3),o.\u0275\u0275template(6,ce,2,1,"span",4),o.\u0275\u0275element(7,"div",5)),2&e&&(o.\u0275\u0275property("ngIf",n.multiple),o.\u0275\u0275advance(5),o.\u0275\u0275property("ngIf",!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator),o.\u0275\u0275advance(1),o.\u0275\u0275property("ngIf",n.group&&n.group._inert),o.\u0275\u0275advance(1),o.\u0275\u0275property("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disabled||n.disableRipple))},dependencies:[$,g.NgIf,G],styles:['.mat-mdc-option{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);min-height:48px}.mat-mdc-option:focus{outline:none}[dir=rtl] .mat-mdc-option,.mat-mdc-option[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-option.mdc-list-item{align-items:center}.mat-mdc-option.mdc-list-item--disabled{opacity:.38;cursor:default}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}.cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{right:auto;left:16px}.mat-mdc-option-active::before{content:""}'],encapsulation:2,changeDetection:0}),i})();function Ne(i,t,e){if(e.length){let n=t.toArray(),a=e.toArray(),r=0;for(let s=0;s<i+1;s++)n[s].group&&n[s].group===a[r]&&r++;return r}return 0}function Fe(i,t,e,n){return i<e?i:i+t>e+n?Math.max(0,i-n+t):e}let je=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=o.\u0275\u0275defineInjector({imports:[K,g.CommonModule,c,Z]}),i})()}}]);