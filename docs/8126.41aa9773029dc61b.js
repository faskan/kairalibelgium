(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[8126,6594],{6594:(m,c,o)=>{o.r(c),o.d(c,{SlickCarouselComponent:()=>a,SlickCarouselModule:()=>g,SlickItemDirective:()=>f});var d=o(4888),t=o(5760),h=o(525);const u=["*"];let a=(()=>{class n{constructor(e,i,s){this.el=e,this.zone=i,this.platformId=s,this.afterChange=new t.EventEmitter,this.beforeChange=new t.EventEmitter,this.breakpoint=new t.EventEmitter,this.destroy=new t.EventEmitter,this.init=new t.EventEmitter,this.currentIndex=0,this.slides=[],this.initialized=!1,this._removedSlides=[],this._addedSlides=[]}ngOnDestroy(){this.unslick()}ngAfterViewInit(){this.ngAfterViewChecked()}ngAfterViewChecked(){if(!(0,d.isPlatformServer)(this.platformId)&&(this._addedSlides.length>0||this._removedSlides.length>0)){const e=this.slides.length-this._removedSlides.length+this._addedSlides.length;this.initialized?0===e?this.unslick():(this._addedSlides.forEach(i=>{this.slides.push(i),this.zone.runOutsideAngular(()=>{this.$instance.slick("slickAdd",i.el.nativeElement)})}),this._addedSlides=[],this._removedSlides.forEach(i=>{const s=this.slides.indexOf(i);this.slides=this.slides.filter(r=>r!==i),this.zone.runOutsideAngular(()=>{this.$instance.slick("slickRemove",s)})}),this._removedSlides=[]):e>0&&this.initSlick()}}initSlick(){this.slides=this._addedSlides,this._addedSlides=[],this._removedSlides=[],this.zone.runOutsideAngular(()=>{this.$instance=jQuery(this.el.nativeElement),this.$instance.on("init",(e,i)=>{this.zone.run(()=>{this.init.emit({event:e,slick:i})})}),this.$instance.slick(this.config),this.zone.run(()=>{this.initialized=!0,this.currentIndex=this.config?.initialSlide||0}),this.$instance.on("afterChange",(e,i,s)=>{this.zone.run(()=>{this.afterChange.emit({event:e,slick:i,currentSlide:s,first:0===s,last:i.$slides.length===s+i.options.slidesToScroll}),this.currentIndex=s})}),this.$instance.on("beforeChange",(e,i,s,r)=>{this.zone.run(()=>{this.beforeChange.emit({event:e,slick:i,currentSlide:s,nextSlide:r}),this.currentIndex=r})}),this.$instance.on("breakpoint",(e,i,s)=>{this.zone.run(()=>{this.breakpoint.emit({event:e,slick:i,breakpoint:s})})}),this.$instance.on("destroy",(e,i)=>{this.zone.run(()=>{this.destroy.emit({event:e,slick:i}),this.initialized=!1})})})}addSlide(e){this._addedSlides.push(e)}removeSlide(e){this._removedSlides.push(e)}slickGoTo(e){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickGoTo",e)})}slickNext(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickNext")})}slickPrev(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPrev")})}slickPause(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPause")})}slickPlay(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPlay")})}unslick(){this.$instance&&(this.zone.runOutsideAngular(()=>{this.$instance.slick("unslick")}),this.$instance=void 0),this.initialized=!1}ngOnChanges(e){if(this.initialized){const i=e.config;if(i.previousValue!==i.currentValue&&void 0!==i.currentValue){const s=i.currentValue.refresh,r=Object.assign({},i.currentValue);delete r.refresh,this.zone.runOutsideAngular(()=>{this.$instance.slick("slickSetOption",r,s)})}}}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(t.PLATFORM_ID))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["ngx-slick-carousel"]],inputs:{config:"config"},outputs:{afterChange:"afterChange",beforeChange:"beforeChange",breakpoint:"breakpoint",destroy:"destroy",init:"init"},exportAs:["slick-carousel"],features:[t.\u0275\u0275ProvidersFeature([{provide:h.NG_VALUE_ACCESSOR,useExisting:(0,t.forwardRef)(()=>n),multi:!0}]),t.\u0275\u0275NgOnChangesFeature],ngContentSelectors:u,decls:1,vars:0,template:function(e,i){1&e&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275projection(0))},encapsulation:2}),n})(),f=(()=>{class n{constructor(e,i,s,r){this.el=e,this.renderer=i,this.platformId=s,this.carousel=r}ngOnInit(){this.carousel.addSlide(this),(0,d.isPlatformServer)(this.platformId)&&this.carousel.slides.length>0&&this.renderer.setStyle(this.el,"display","none")}ngOnDestroy(){this.carousel.removeSlide(this)}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(t.Renderer2),t.\u0275\u0275directiveInject(t.PLATFORM_ID),t.\u0275\u0275directiveInject(a,1))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","ngxSlickItem",""]]}),n})(),g=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[d.CommonModule]}),n})()}}]);