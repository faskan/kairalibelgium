(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[8484,445],{445:(_,d,o)=>{o.r(d),o.d(d,{BidiModule:()=>D,DIR_DOCUMENT:()=>a,Dir:()=>h,Directionality:()=>c});var e=o(5760),u=o(4888);const a=new e.InjectionToken("cdk-dir-doc",{providedIn:"root",factory:function l(){return(0,e.inject)(u.DOCUMENT)}}),f=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function s(t){const n=t?.toLowerCase()||"";return"auto"===n&&typeof navigator<"u"&&navigator?.language?f.test(navigator.language)?"rtl":"ltr":"rtl"===n?"rtl":"ltr"}let c=(()=>{class t{constructor(i){this.value="ltr",this.change=new e.EventEmitter,i&&(this.value=s((i.body?i.body.dir:null)||(i.documentElement?i.documentElement.dir:null)||"ltr"))}ngOnDestroy(){this.change.complete()}}return t.\u0275fac=function(i){return new(i||t)(e.\u0275\u0275inject(a,8))},t.\u0275prov=e.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),h=(()=>{class t{constructor(){this._dir="ltr",this._isInitialized=!1,this.change=new e.EventEmitter}get dir(){return this._dir}set dir(i){const r=this._dir;this._dir=s(i),this._rawDir=i,r!==this._dir&&this._isInitialized&&this.change.emit(this._dir)}get value(){return this.dir}ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["","dir",""]],hostVars:1,hostBindings:function(i,r){2&i&&e.\u0275\u0275attribute("dir",r._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],features:[e.\u0275\u0275ProvidersFeature([{provide:c,useExisting:t}])]}),t})(),D=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({}),t})()}}]);