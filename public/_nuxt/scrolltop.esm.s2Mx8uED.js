import{s as c}from"./index.esm.Jvh-lMXK.js";import{a9 as p,ac as r,ad as u,ak as d,t as i,J as s,A as f,al as o,an as h,am as m,W as v,v as L,L as b,ao as y}from"./entry.t0tzCVyj.js";var S=`
@layer primevue {
    .p-scrolltop {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-scrolltop-sticky {
        position: sticky;
    }

    .p-scrolltop-sticky.p-link {
        margin-left: auto;
    }

    .p-scrolltop-enter-from {
        opacity: 0;
    }

    .p-scrolltop-enter-active {
        transition: opacity 0.15s;
    }

    .p-scrolltop.p-scrolltop-leave-to {
        opacity: 0;
    }

    .p-scrolltop-leave-active {
        transition: opacity 0.15s;
    }
}
`,k={root:function(n){var l=n.props;return["p-scrolltop p-link p-component",{"p-scrolltop-sticky":l.target!=="window"}]},icon:"p-scrolltop-icon"},g=p.extend({name:"scrolltop",css:S,classes:k}),w={name:"BaseScrollTop",extends:d,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"}},style:g,provide:function(){return{$parentInstance:this}}},E={name:"ScrollTop",extends:w,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount:function(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(r.clear(this.container),this.overlay=null)},methods:{onClick:function(){var n=this.target==="window"?window:this.$el.parentElement;n.scroll({top:0,behavior:this.behavior})},checkVisibility:function(n){n>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener:function(){var n=this;this.scrollListener=function(){n.checkVisibility(n.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener:function(){var n=this;this.scrollListener=function(){n.checkVisibility(u.getWindowScrollTop())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener:function(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter:function(n){r.set("overlay",n,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(n){r.clear(n)},containerRef:function(n){this.container=n}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:c}},C=["aria-label"];function T(e,n,l,A,a,t){return i(),s(y,o({name:"p-scrolltop",appear:"",onEnter:t.onEnter,onAfterLeave:t.onAfterLeave},e.ptm("transition")),{default:f(function(){return[a.visible?(i(),L("button",o({key:0,ref:t.containerRef,class:e.cx("root"),onClick:n[0]||(n[0]=function(){return t.onClick&&t.onClick.apply(t,arguments)}),type:"button","aria-label":t.scrollTopAriaLabel},e.ptm("root"),{"data-pc-name":"scrolltop"}),[v(e.$slots,"icon",{class:h(e.cx("icon"))},function(){return[(i(),s(m(e.icon?"span":"ChevronUpIcon"),o({class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16,["class"]))]})],16,C)):b("",!0)]}),_:3},16,["onEnter","onAfterLeave"])}E.render=T;export{E as default};
