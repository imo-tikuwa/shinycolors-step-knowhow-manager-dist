import{ab as I,aL as c,S as k,ak as b,i as H,t as i,v as d,I as f,J as m,ap as _,A as v,H as g,am as h,al as y,as as L,at as A}from"./entry.gsaNBnQN.js";var C={},U={name:"BaseDynamicDialog",extends:b,props:{},style:C,provide:function(){return{$parentInstance:this}}},x={name:"DynamicDialog",extends:U,inheritAttrs:!1,data:function(){return{instanceMap:{}}},openListener:null,closeListener:null,currentInstance:null,mounted:function(){var n=this;this.openListener=function(u){var s=u.instance,r=I()+"_dynamic_dialog";s.visible=!0,s.key=r,n.instanceMap[r]=s},this.closeListener=function(u){var s=u.instance,r=u.params,a=s.key,o=n.instanceMap[a];o&&(o.visible=!1,o.options.onClose&&o.options.onClose({data:r,type:"config-close"}),n.currentInstance=o)},c.on("open",this.openListener),c.on("close",this.closeListener)},beforeUnmount:function(){c.off("open",this.openListener),c.off("close",this.closeListener)},methods:{onDialogHide:function(n){!this.currentInstance&&n.options.onClose&&n.options.onClose({type:"dialog-close"})},onDialogAfterHide:function(){this.currentInstance&&delete this.currentInstance,this.currentInstance=null},getTemplateItems:function(n){return Array.isArray(n)?n:[n]}},components:{DDialog:k}};function B(t,n,u,s,r,a){var o=H("DDialog");return i(!0),d(g,null,f(r.instanceMap,function(e,D){return i(),m(o,y({key:D,visible:e.visible,"onUpdate:visible":function(l){return e.visible=l},_instance:e},e.options.props,{onHide:function(l){return a.onDialogHide(e)},onAfterHide:a.onDialogAfterHide}),_({default:v(function(){return[(i(),m(h(e.content),A(L(e.options.emits)),null,16))]}),_:2},[e.options.templates&&e.options.templates.header?{name:"header",fn:v(function(){return[(i(!0),d(g,null,f(a.getTemplateItems(e.options.templates.header),function(p,l){return i(),m(h(p),y({key:l+"_header"},e.options.emits),null,16)}),128))]}),key:"0"}:void 0,e.options.templates&&e.options.templates.footer?{name:"footer",fn:v(function(){return[(i(!0),d(g,null,f(a.getTemplateItems(e.options.templates.footer),function(p,l){return i(),m(h(p),y({key:l+"_footer"},e.options.emits),null,16)}),128))]}),key:"1"}:void 0]),1040,["visible","onUpdate:visible","_instance","onHide","onAfterHide"])}),128)}x.render=B;export{x as default};
