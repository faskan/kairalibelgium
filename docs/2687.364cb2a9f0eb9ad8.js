(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[2687,4761],{2687:(Ce,O,h)=>{h.r(O),h.d(O,{A11yModule:()=>Te,ActiveDescendantKeyManager:()=>re,AriaDescriber:()=>ne,CDK_DESCRIBEDBY_HOST_ATTRIBUTE:()=>b,CDK_DESCRIBEDBY_ID_PREFIX:()=>I,CdkAriaLive:()=>Ae,CdkMonitorFocus:()=>Ee,CdkTrapFocus:()=>pe,ConfigurableFocusTrap:()=>x,ConfigurableFocusTrapFactory:()=>ye,EventListenerFocusTrapInertStrategy:()=>j,FOCUS_MONITOR_DEFAULT_OPTIONS:()=>z,FOCUS_TRAP_INERT_STRATEGY:()=>P,FocusKeyManager:()=>oe,FocusMonitor:()=>X,FocusTrap:()=>M,FocusTrapFactory:()=>S,HighContrastModeDetector:()=>q,INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS:()=>W,INPUT_MODALITY_DETECTOR_OPTIONS:()=>K,InputModalityDetector:()=>Z,InteractivityChecker:()=>C,IsFocusableConfig:()=>ce,LIVE_ANNOUNCER_DEFAULT_OPTIONS:()=>Y,LIVE_ANNOUNCER_ELEMENT_TOKEN:()=>V,LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY:()=>$,ListKeyManager:()=>T,LiveAnnouncer:()=>G,MESSAGES_CONTAINER_ID:()=>ie,isFakeMousedownFromScreenReader:()=>B,isFakeTouchstartFromScreenReader:()=>U});var l=h(4888),o=h(5760),d=h(8183),_=h(3635),a=h(6582),f=h(5893),g=h(7121),k=h(969),ee=h(9626);function v(i,s){return(i.getAttribute(s)||"").match(/\S+/g)||[]}const ie="cdk-describedby-message-container",I="cdk-describedby-message",b="cdk-describedby-host";let A=0,ne=(()=>{class i{constructor(e,t){this._platform=t,this._messageRegistry=new Map,this._messagesContainer=null,this._id=""+A++,this._document=e,this._id=(0,o.inject)(o.APP_ID)+"-"+A++}describe(e,t,n){if(!this._canBeDescribed(e,t))return;const r=E(t,n);"string"!=typeof t?(w(t,this._id),this._messageRegistry.set(r,{messageElement:t,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(t,n),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,t,n){if(!t||!this._isElementNode(e))return;const r=E(t,n);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),"string"==typeof t){const c=this._messageRegistry.get(r);c&&0===c.referenceCount&&this._deleteMessageElement(r)}0===this._messagesContainer?.childNodes.length&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){const e=this._document.querySelectorAll(`[${b}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(b);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){const n=this._document.createElement("div");w(n,this._id),n.textContent=e,t&&n.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(n),this._messageRegistry.set(E(e,t),{messageElement:n,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;const e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<t.length;r++)t[r].remove();const n=this._document.createElement("div");n.style.visibility="hidden",n.classList.add(e),n.classList.add("cdk-visually-hidden"),this._platform&&!this._platform.isBrowser&&n.setAttribute("platform","server"),this._document.body.appendChild(n),this._messagesContainer=n}_removeCdkDescribedByReferenceIds(e){const t=v(e,"aria-describedby").filter(n=>0!=n.indexOf(I));e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){const n=this._messageRegistry.get(t);(function te(i,s,e){const t=v(i,s);t.some(n=>n.trim()==e.trim())||(t.push(e.trim()),i.setAttribute(s,t.join(" ")))})(e,"aria-describedby",n.messageElement.id),e.setAttribute(b,this._id),n.referenceCount++}_removeMessageReference(e,t){const n=this._messageRegistry.get(t);n.referenceCount--,function se(i,s,e){const n=v(i,s).filter(r=>r!=e.trim());n.length?i.setAttribute(s,n.join(" ")):i.removeAttribute(s)}(e,"aria-describedby",n.messageElement.id),e.removeAttribute(b)}_isElementDescribedByMessage(e,t){const n=v(e,"aria-describedby"),r=this._messageRegistry.get(t),c=r&&r.messageElement.id;return!!c&&-1!=n.indexOf(c)}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&"object"==typeof t)return!0;const n=null==t?"":`${t}`.trim(),r=e.getAttribute("aria-label");return!(!n||r&&r.trim()===n)}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}}return i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275inject(l.DOCUMENT),o.\u0275\u0275inject(d.Platform))},i.\u0275prov=o.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function E(i,s){return"string"==typeof i?`${s||""}/${i}`:i}function w(i,s){i.id||(i.id=`${I}-${s}-${A++}`)}class T{constructor(s){this._items=s,this._activeItemIndex=-1,this._activeItem=null,this._wrap=!1,this._letterKeyStream=new _.Subject,this._typeaheadSubscription=_.Subscription.EMPTY,this._vertical=!0,this._allowedModifierKeys=[],this._homeAndEnd=!1,this._pageUpAndDown={enabled:!1,delta:10},this._skipPredicateFn=e=>e.disabled,this._pressedLetters=[],this.tabOut=new _.Subject,this.change=new _.Subject,s instanceof o.QueryList&&(this._itemChangesSubscription=s.changes.subscribe(e=>{if(this._activeItem){const n=e.toArray().indexOf(this._activeItem);n>-1&&n!==this._activeItemIndex&&(this._activeItemIndex=n)}}))}skipPredicate(s){return this._skipPredicateFn=s,this}withWrap(s=!0){return this._wrap=s,this}withVerticalOrientation(s=!0){return this._vertical=s,this}withHorizontalOrientation(s){return this._horizontal=s,this}withAllowedModifierKeys(s){return this._allowedModifierKeys=s,this}withTypeAhead(s=200){return this._typeaheadSubscription.unsubscribe(),this._typeaheadSubscription=this._letterKeyStream.pipe((0,f.tap)(e=>this._pressedLetters.push(e)),(0,f.debounceTime)(s),(0,f.filter)(()=>this._pressedLetters.length>0),(0,f.map)(()=>this._pressedLetters.join(""))).subscribe(e=>{const t=this._getItemsArray();for(let n=1;n<t.length+1;n++){const r=(this._activeItemIndex+n)%t.length,c=t[r];if(!this._skipPredicateFn(c)&&0===c.getLabel().toUpperCase().trim().indexOf(e)){this.setActiveItem(r);break}}this._pressedLetters=[]}),this}cancelTypeahead(){return this._pressedLetters=[],this}withHomeAndEnd(s=!0){return this._homeAndEnd=s,this}withPageUpDown(s=!0,e=10){return this._pageUpAndDown={enabled:s,delta:e},this}setActiveItem(s){const e=this._activeItem;this.updateActiveItem(s),this._activeItem!==e&&this.change.next(this._activeItemIndex)}onKeydown(s){const e=s.keyCode,n=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!s[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case a.TAB:return void this.tabOut.next();case a.DOWN_ARROW:if(this._vertical&&n){this.setNextItemActive();break}return;case a.UP_ARROW:if(this._vertical&&n){this.setPreviousItemActive();break}return;case a.RIGHT_ARROW:if(this._horizontal&&n){"rtl"===this._horizontal?this.setPreviousItemActive():this.setNextItemActive();break}return;case a.LEFT_ARROW:if(this._horizontal&&n){"rtl"===this._horizontal?this.setNextItemActive():this.setPreviousItemActive();break}return;case a.HOME:if(this._homeAndEnd&&n){this.setFirstItemActive();break}return;case a.END:if(this._homeAndEnd&&n){this.setLastItemActive();break}return;case a.PAGE_UP:if(this._pageUpAndDown.enabled&&n){const r=this._activeItemIndex-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}return;case a.PAGE_DOWN:if(this._pageUpAndDown.enabled&&n){const r=this._activeItemIndex+this._pageUpAndDown.delta,c=this._getItemsArray().length;this._setActiveItemByIndex(r<c?r:c-1,-1);break}return;default:return void((n||(0,a.hasModifierKey)(s,"shiftKey"))&&(s.key&&1===s.key.length?this._letterKeyStream.next(s.key.toLocaleUpperCase()):(e>=a.A&&e<=a.Z||e>=a.ZERO&&e<=a.NINE)&&this._letterKeyStream.next(String.fromCharCode(e))))}this._pressedLetters=[],s.preventDefault()}get activeItemIndex(){return this._activeItemIndex}get activeItem(){return this._activeItem}isTyping(){return this._pressedLetters.length>0}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._items.length-1,-1)}setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(s){const e=this._getItemsArray(),t="number"==typeof s?s:e.indexOf(s);this._activeItem=e[t]??null,this._activeItemIndex=t}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._letterKeyStream.complete(),this.tabOut.complete(),this.change.complete(),this._pressedLetters=[]}_setActiveItemByDelta(s){this._wrap?this._setActiveInWrapMode(s):this._setActiveInDefaultMode(s)}_setActiveInWrapMode(s){const e=this._getItemsArray();for(let t=1;t<=e.length;t++){const n=(this._activeItemIndex+s*t+e.length)%e.length;if(!this._skipPredicateFn(e[n]))return void this.setActiveItem(n)}}_setActiveInDefaultMode(s){this._setActiveItemByIndex(this._activeItemIndex+s,s)}_setActiveItemByIndex(s,e){const t=this._getItemsArray();if(t[s]){for(;this._skipPredicateFn(t[s]);)if(!t[s+=e])return;this.setActiveItem(s)}}_getItemsArray(){return this._items instanceof o.QueryList?this._items.toArray():this._items}}class re extends T{setActiveItem(s){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(s),this.activeItem&&this.activeItem.setActiveStyles()}}class oe extends T{constructor(){super(...arguments),this._origin="program"}setFocusOrigin(s){return this._origin=s,this}setActiveItem(s){super.setActiveItem(s),this.activeItem&&this.activeItem.focus(this._origin)}}class ce{constructor(){this.ignoreVisibility=!1}}let C=(()=>{class i{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return function ue(i){return!!(i.offsetWidth||i.offsetHeight||"function"==typeof i.getClientRects&&i.getClientRects().length)}(e)&&"visible"===getComputedStyle(e).visibility}isTabbable(e){if(!this._platform.isBrowser)return!1;const t=function ae(i){try{return i.frameElement}catch{return null}}(function be(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}(e));if(t&&(-1===R(t)||!this.isVisible(t)))return!1;let n=e.nodeName.toLowerCase(),r=R(e);return e.hasAttribute("contenteditable")?-1!==r:!("iframe"===n||"object"===n||this._platform.WEBKIT&&this._platform.IOS&&!function me(i){let s=i.nodeName.toLowerCase(),e="input"===s&&i.type;return"text"===e||"password"===e||"select"===s||"textarea"===s}(e))&&("audio"===n?!!e.hasAttribute("controls")&&-1!==r:"video"===n?-1!==r&&(null!==r||this._platform.FIREFOX||e.hasAttribute("controls")):e.tabIndex>=0)}isFocusable(e,t){return function ge(i){return!function he(i){return function _e(i){return"input"==i.nodeName.toLowerCase()}(i)&&"hidden"==i.type}(i)&&(function de(i){let s=i.nodeName.toLowerCase();return"input"===s||"select"===s||"button"===s||"textarea"===s}(i)||function le(i){return function fe(i){return"a"==i.nodeName.toLowerCase()}(i)&&i.hasAttribute("href")}(i)||i.hasAttribute("contenteditable")||N(i))}(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}}return i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275inject(d.Platform))},i.\u0275prov=o.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function N(i){if(!i.hasAttribute("tabindex")||void 0===i.tabIndex)return!1;let s=i.getAttribute("tabindex");return!(!s||isNaN(parseInt(s,10)))}function R(i){if(!N(i))return null;const s=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(s)?-1:s}class M{get enabled(){return this._enabled}set enabled(s){this._enabled=s,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(s,this._startAnchor),this._toggleAnchorTabIndex(s,this._endAnchor))}constructor(s,e,t,n,r=!1){this._element=s,this._checker=e,this._ngZone=t,this._document=n,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,r||this.attachAnchors()}destroy(){const s=this._startAnchor,e=this._endAnchor;s&&(s.removeEventListener("focus",this.startAnchorListener),s.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return!!this._hasAttached||(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(s){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(s)))})}focusFirstTabbableElementWhenReady(s){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(s)))})}focusLastTabbableElementWhenReady(s){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(s)))})}_getRegionBoundary(s){const e=this._element.querySelectorAll(`[cdk-focus-region-${s}], [cdkFocusRegion${s}], [cdk-focus-${s}]`);return"start"==s?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(s){const e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){const t=this._getFirstTabbableElement(e);return t?.focus(s),!!t}return e.focus(s),!0}return this.focusFirstTabbableElement(s)}focusFirstTabbableElement(s){const e=this._getRegionBoundary("start");return e&&e.focus(s),!!e}focusLastTabbableElement(s){const e=this._getRegionBoundary("end");return e&&e.focus(s),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(s){if(this._checker.isFocusable(s)&&this._checker.isTabbable(s))return s;const e=s.children;for(let t=0;t<e.length;t++){const n=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(n)return n}return null}_getLastTabbableElement(s){if(this._checker.isFocusable(s)&&this._checker.isTabbable(s))return s;const e=s.children;for(let t=e.length-1;t>=0;t--){const n=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(n)return n}return null}_createAnchor(){const s=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,s),s.classList.add("cdk-visually-hidden"),s.classList.add("cdk-focus-trap-anchor"),s.setAttribute("aria-hidden","true"),s}_toggleAnchorTabIndex(s,e){s?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(s){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(s,this._startAnchor),this._toggleAnchorTabIndex(s,this._endAnchor))}_executeOnStable(s){this._ngZone.isStable?s():this._ngZone.onStable.pipe((0,f.take)(1)).subscribe(s)}}let S=(()=>{class i{constructor(e,t,n){this._checker=e,this._ngZone=t,this._document=n}create(e,t=!1){return new M(e,this._checker,this._ngZone,this._document,t)}}return i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275inject(C),o.\u0275\u0275inject(o.NgZone),o.\u0275\u0275inject(l.DOCUMENT))},i.\u0275prov=o.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),pe=(()=>{class i{get enabled(){return this.focusTrap.enabled}set enabled(e){this.focusTrap.enabled=(0,g.coerceBooleanProperty)(e)}get autoCapture(){return this._autoCapture}set autoCapture(e){this._autoCapture=(0,g.coerceBooleanProperty)(e)}constructor(e,t,n){this._elementRef=e,this._focusTrapFactory=t,this._previouslyFocusedElement=null,this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0)}ngOnDestroy(){this.focusTrap.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap.hasAttached()||this.focusTrap.attachAnchors()}ngOnChanges(e){const t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=(0,d._getFocusedElementPierceShadowDom)(),this.focusTrap.focusInitialElementWhenReady()}}return i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275directiveInject(o.ElementRef),o.\u0275\u0275directiveInject(S),o.\u0275\u0275directiveInject(l.DOCUMENT))},i.\u0275dir=o.\u0275\u0275defineDirective({type:i,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:["cdkTrapFocus","enabled"],autoCapture:["cdkTrapFocusAutoCapture","autoCapture"]},exportAs:["cdkTrapFocus"],features:[o.\u0275\u0275NgOnChangesFeature]}),i})();class x extends M{get enabled(){return this._enabled}set enabled(s){this._enabled=s,this._enabled?this._focusTrapManager.register(this):this._focusTrapManager.deregister(this)}constructor(s,e,t,n,r,c,u){super(s,e,t,n,u.defer),this._focusTrapManager=r,this._inertStrategy=c,this._focusTrapManager.register(this)}destroy(){this._focusTrapManager.deregister(this),super.destroy()}_enable(){this._inertStrategy.preventFocus(this),this.toggleAnchors(!0)}_disable(){this._inertStrategy.allowFocus(this),this.toggleAnchors(!1)}}const P=new o.InjectionToken("FOCUS_TRAP_INERT_STRATEGY");class j{constructor(){this._listener=null}preventFocus(s){this._listener&&s._document.removeEventListener("focus",this._listener,!0),this._listener=e=>this._trapFocus(s,e),s._ngZone.runOutsideAngular(()=>{s._document.addEventListener("focus",this._listener,!0)})}allowFocus(s){this._listener&&(s._document.removeEventListener("focus",this._listener,!0),this._listener=null)}_trapFocus(s,e){const t=e.target,n=s._element;t&&!n.contains(t)&&!t.closest?.("div.cdk-overlay-pane")&&setTimeout(()=>{s.enabled&&!n.contains(s._document.activeElement)&&s.focusFirstTabbableElement()})}}let ve=(()=>{class i{constructor(){this._focusTrapStack=[]}register(e){this._focusTrapStack=this._focusTrapStack.filter(n=>n!==e);let t=this._focusTrapStack;t.length&&t[t.length-1]._disable(),t.push(e),e._enable()}deregister(e){e._disable();const t=this._focusTrapStack,n=t.indexOf(e);-1!==n&&(t.splice(n,1),t.length&&t[t.length-1]._enable())}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=o.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),ye=(()=>{class i{constructor(e,t,n,r,c){this._checker=e,this._ngZone=t,this._focusTrapManager=n,this._document=r,this._inertStrategy=c||new j}create(e,t={defer:!1}){let n;return n="boolean"==typeof t?{defer:t}:t,new x(e,this._checker,this._ngZone,this._document,this._focusTrapManager,this._inertStrategy,n)}}return i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275inject(C),o.\u0275\u0275inject(o.NgZone),o.\u0275\u0275inject(ve),o.\u0275\u0275inject(l.DOCUMENT),o.\u0275\u0275inject(P,8))},i.\u0275prov=o.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function B(i){return 0===i.buttons||0===i.offsetX&&0===i.offsetY}function U(i){const s=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!(!s||-1!==s.identifier||null!=s.radiusX&&1!==s.radiusX||null!=s.radiusY&&1!==s.radiusY)}const K=new o.InjectionToken("cdk-input-modality-detector-options"),W={ignoreKeys:[a.ALT,a.CONTROL,a.MAC_META,a.META,a.SHIFT]},m=(0,d.normalizePassiveListenerOptions)({passive:!0,capture:!0});let Z=(()=>{class i{get mostRecentModality(){return this._modality.value}constructor(e,t,n,r){this._platform=e,this._mostRecentTarget=null,this._modality=new _.BehaviorSubject(null),this._lastTouchMs=0,this._onKeydown=c=>{this._options?.ignoreKeys?.some(u=>u===c.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=(0,d._getEventTarget)(c))},this._onMousedown=c=>{Date.now()-this._lastTouchMs<650||(this._modality.next(B(c)?"keyboard":"mouse"),this._mostRecentTarget=(0,d._getEventTarget)(c))},this._onTouchstart=c=>{U(c)?this._modality.next("keyboard"):(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=(0,d._getEventTarget)(c))},this._options={...W,...r},this.modalityDetected=this._modality.pipe((0,f.skip)(1)),this.modalityChanged=this.modalityDetected.pipe((0,f.distinctUntilChanged)()),e.isBrowser&&t.runOutsideAngular(()=>{n.addEventListener("keydown",this._onKeydown,m),n.addEventListener("mousedown",this._onMousedown,m),n.addEventListener("touchstart",this._onTouchstart,m)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,m),document.removeEventListener("mousedown",this._onMousedown,m),document.removeEventListener("touchstart",this._onTouchstart,m))}}return i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275inject(d.Platform),o.\u0275\u0275inject(o.NgZone),o.\u0275\u0275inject(l.DOCUMENT),o.\u0275\u0275inject(K,8))},i.\u0275prov=o.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const V=new o.InjectionToken("liveAnnouncerElement",{providedIn:"root",factory:$});function $(){return null}const Y=new o.InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");let Ie=0,G=(()=>{class i{constructor(e,t,n,r){this._ngZone=t,this._defaultOptions=r,this._document=n,this._liveElement=e||this._createLiveElement()}announce(e,...t){const n=this._defaultOptions;let r,c;return 1===t.length&&"number"==typeof t[0]?c=t[0]:[r,c]=t,this.clear(),clearTimeout(this._previousTimeout),r||(r=n&&n.politeness?n.politeness:"polite"),null==c&&n&&(c=n.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(u=>this._currentResolve=u)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{this._liveElement.textContent=e,"number"==typeof c&&(this._previousTimeout=setTimeout(()=>this.clear(),c)),this._currentResolve(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){const e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),n=this._document.createElement("div");for(let r=0;r<t.length;r++)t[r].remove();return n.classList.add(e),n.classList.add("cdk-visually-hidden"),n.setAttribute("aria-atomic","true"),n.setAttribute("aria-live","polite"),n.id="cdk-live-announcer-"+Ie++,this._document.body.appendChild(n),n}_exposeAnnouncerToModals(e){const t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<t.length;n++){const r=t[n],c=r.getAttribute("aria-owns");c?-1===c.indexOf(e)&&r.setAttribute("aria-owns",c+" "+e):r.setAttribute("aria-owns",e)}}}return i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275inject(V,8),o.\u0275\u0275inject(o.NgZone),o.\u0275\u0275inject(l.DOCUMENT),o.\u0275\u0275inject(Y,8))},i.\u0275prov=o.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),Ae=(()=>{class i{get politeness(){return this._politeness}set politeness(e){this._politeness="off"===e||"assertive"===e?e:"polite","off"===this._politeness?this._subscription&&(this._subscription.unsubscribe(),this._subscription=null):this._subscription||(this._subscription=this._ngZone.runOutsideAngular(()=>this._contentObserver.observe(this._elementRef).subscribe(()=>{const t=this._elementRef.nativeElement.textContent;t!==this._previousAnnouncedText&&(this._liveAnnouncer.announce(t,this._politeness,this.duration),this._previousAnnouncedText=t)})))}constructor(e,t,n,r){this._elementRef=e,this._liveAnnouncer=t,this._contentObserver=n,this._ngZone=r,this._politeness="polite"}ngOnDestroy(){this._subscription&&this._subscription.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275directiveInject(o.ElementRef),o.\u0275\u0275directiveInject(G),o.\u0275\u0275directiveInject(k.ContentObserver),o.\u0275\u0275directiveInject(o.NgZone))},i.\u0275dir=o.\u0275\u0275defineDirective({type:i,selectors:[["","cdkAriaLive",""]],inputs:{politeness:["cdkAriaLive","politeness"],duration:["cdkAriaLiveDuration","duration"]},exportAs:["cdkAriaLive"]}),i})();const z=new o.InjectionToken("cdk-focus-monitor-default-options"),y=(0,d.normalizePassiveListenerOptions)({passive:!0,capture:!0});let X=(()=>{class i{constructor(e,t,n,r,c){this._ngZone=e,this._platform=t,this._inputModalityDetector=n,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new _.Subject,this._rootNodeFocusAndBlurListener=u=>{for(let p=(0,d._getEventTarget)(u);p;p=p.parentElement)"focus"===u.type?this._onFocus(u,p):this._onBlur(u,p)},this._document=r,this._detectionMode=c?.detectionMode||0}monitor(e,t=!1){const n=(0,g.coerceElement)(e);if(!this._platform.isBrowser||1!==n.nodeType)return(0,_.of)(null);const r=(0,d._getShadowRoot)(n)||this._getDocument(),c=this._elementInfo.get(n);if(c)return t&&(c.checkChildren=!0),c.subject;const u={checkChildren:t,subject:new _.Subject,rootNode:r};return this._elementInfo.set(n,u),this._registerGlobalListeners(u),u.subject}stopMonitoring(e){const t=(0,g.coerceElement)(e),n=this._elementInfo.get(t);n&&(n.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(n))}focusVia(e,t,n){const r=(0,g.coerceElement)(e);r===this._getDocument().activeElement?this._getClosestElementsInfo(r).forEach(([u,D])=>this._originChanged(u,t,D)):(this._setOrigin(t),"function"==typeof r.focus&&r.focus(n))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return 1===this._detectionMode||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused","touch"===t),e.classList.toggle("cdk-keyboard-focused","keyboard"===t),e.classList.toggle("cdk-mouse-focused","mouse"===t),e.classList.toggle("cdk-program-focused","program"===t)}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{this._origin=e,this._originFromTouchInteraction="touch"===e&&t,0===this._detectionMode&&(clearTimeout(this._originTimeoutId),this._originTimeoutId=setTimeout(()=>this._origin=null,this._originFromTouchInteraction?650:1))})}_onFocus(e,t){const n=this._elementInfo.get(t),r=(0,d._getEventTarget)(e);!n||!n.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),n)}_onBlur(e,t){const n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(n,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;const t=e.rootNode,n=this._rootNodeFocusListenerCount.get(t)||0;n||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,y),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,y)}),this._rootNodeFocusListenerCount.set(t,n+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe((0,f.takeUntil)(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){const t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){const n=this._rootNodeFocusListenerCount.get(t);n>1?this._rootNodeFocusListenerCount.set(t,n-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,y),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,y),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,n){this._setClasses(e,t),this._emitOrigin(n,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){const t=[];return this._elementInfo.forEach((n,r)=>{(r===e||n.checkChildren&&r.contains(e))&&t.push([r,n])}),t}_isLastInteractionFromInputLabel(e){const{_mostRecentTarget:t,mostRecentModality:n}=this._inputModalityDetector;if("mouse"!==n||!t||t===e||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName||e.disabled)return!1;const r=e.labels;if(r)for(let c=0;c<r.length;c++)if(r[c].contains(t))return!0;return!1}}return i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275inject(o.NgZone),o.\u0275\u0275inject(d.Platform),o.\u0275\u0275inject(Z),o.\u0275\u0275inject(l.DOCUMENT,8),o.\u0275\u0275inject(z,8))},i.\u0275prov=o.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),Ee=(()=>{class i{constructor(e,t){this._elementRef=e,this._focusMonitor=t,this._focusOrigin=null,this.cdkFocusChange=new o.EventEmitter}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){const e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,1===e.nodeType&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription&&this._monitorSubscription.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275directiveInject(o.ElementRef),o.\u0275\u0275directiveInject(X))},i.\u0275dir=o.\u0275\u0275defineDirective({type:i,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]}),i})();const Q="cdk-high-contrast-black-on-white",J="cdk-high-contrast-white-on-black",F="cdk-high-contrast-active";let q=(()=>{class i{constructor(e,t){this._platform=e,this._document=t,this._breakpointSubscription=(0,o.inject)(ee.BreakpointObserver).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const t=this._document.defaultView||window,n=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(n&&n.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return 2;case"rgb(255,255,255)":case"rgb(255,250,239)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove(F,Q,J),this._hasCheckedHighContrastMode=!0;const t=this.getHighContrastMode();1===t?e.add(F,Q):2===t&&e.add(F,J)}}}return i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275inject(d.Platform),o.\u0275\u0275inject(l.DOCUMENT))},i.\u0275prov=o.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),Te=(()=>{class i{constructor(e){e._applyBodyHighContrastModeCssClasses()}}return i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275inject(q))},i.\u0275mod=o.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=o.\u0275\u0275defineInjector({imports:[k.ObserversModule]}),i})()}}]);