(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[1750,2289],{2289:(g,u,r)=>{r.r(u),r.d(u,{BreakpointObserver:()=>L,Breakpoints:()=>E,LayoutModule:()=>w,MediaMatcher:()=>f});var n=r(5760),_=r(7121),h=r(3635),o=r(5893),b=r(8183);let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=n.\u0275\u0275defineInjector({}),e})();const M=new Set;let p,f=(()=>{class e{constructor(t){this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):y}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&function v(e){if(!M.has(e))try{p||(p=document.createElement("style"),p.setAttribute("type","text/css"),document.head.appendChild(p)),p.sheet&&(p.sheet.insertRule(`@media ${e} {body{ }}`,0),M.add(e))}catch(a){console.error(a)}}(t),this._matchMedia(t)}}return e.\u0275fac=function(t){return new(t||e)(n.\u0275\u0275inject(b.Platform))},e.\u0275prov=n.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function y(e){return{matches:"all"===e||""===e,media:e,addListener:()=>{},removeListener:()=>{}}}let L=(()=>{class e{constructor(t,i){this._mediaMatcher=t,this._zone=i,this._queries=new Map,this._destroySubject=new h.Subject}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return x((0,_.coerceArray)(t)).some(m=>this._registerQuery(m).mql.matches)}observe(t){const m=x((0,_.coerceArray)(t)).map(s=>this._registerQuery(s).observable);let d=(0,h.combineLatest)(m);return d=(0,h.concat)(d.pipe((0,o.take)(1)),d.pipe((0,o.skip)(1),(0,o.debounceTime)(0))),d.pipe((0,o.map)(s=>{const c={matches:!1,breakpoints:{}};return s.forEach(({matches:l,query:O})=>{c.matches=c.matches||l,c.breakpoints[O]=l}),c}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);const i=this._mediaMatcher.matchMedia(t),d={observable:new h.Observable(s=>{const c=l=>this._zone.run(()=>s.next(l));return i.addListener(c),()=>{i.removeListener(c)}}).pipe((0,o.startWith)(i),(0,o.map)(({matches:s})=>({query:t,matches:s})),(0,o.takeUntil)(this._destroySubject)),mql:i};return this._queries.set(t,d),d}}return e.\u0275fac=function(t){return new(t||e)(n.\u0275\u0275inject(f),n.\u0275\u0275inject(n.NgZone))},e.\u0275prov=n.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function x(e){return e.map(a=>a.split(",")).reduce((a,t)=>a.concat(t)).map(a=>a.trim())}const E={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"}}}]);