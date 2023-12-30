import{aa as S,aN as f,aw as y,aO as g,aj as v,ak as k,ay as P,al as j,i as $,T as B,t as a,L as u,A as C,am as o,Z as c,an as D,x as d,v as m,W as b,O as T,as as A,ap as E}from"./entry._tHEZz47.js";var N=`
@layer primevue {
    .p-message-wrapper {
        display: flex;
        align-items: center;
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .p-message-close.p-link {
        margin-left: auto;
        overflow: hidden;
        position: relative;
    }

    .p-message-enter-from {
        opacity: 0;
    }

    .p-message-enter-active {
        transition: opacity 0.3s;
    }

    .p-message.p-message-leave-from {
        max-height: 1000px;
    }

    .p-message.p-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin: 0;
    }

    .p-message-leave-active {
        overflow: hidden;
        transition: max-height 0.3s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.15s;
    }

    .p-message-leave-active .p-message-close {
        display: none;
    }
}
`,L={root:function(n){var t=n.props;return"p-message p-component p-message-"+t.severity},wrapper:"p-message-wrapper",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close p-link",closeIcon:"p-message-close-icon"},M=S.extend({name:"message",css:N,classes:L}),K={name:"BaseMessage",extends:j,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!0},sticky:{type:Boolean,default:!0},life:{type:Number,default:3e3},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:M,provide:function(){return{$parentInstance:this}}},V={name:"Message",extends:K,emits:["close"],timeout:null,data:function(){return{visible:!0}},watch:{sticky:function(n){n||this.closeAfterDelay()}},mounted:function(){this.sticky||this.closeAfterDelay()},methods:{close:function(n){this.visible=!1,this.$emit("close",n)},closeAfterDelay:function(){var n=this;setTimeout(function(){n.visible=!1},this.life)}},computed:{iconComponent:function(){return{info:f,success:y,warn:g,error:v}[this.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:k},components:{TimesIcon:P,InfoCircleIcon:f,CheckIcon:y,ExclamationTriangleIcon:g,TimesCircleIcon:v}};function l(e){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},l(e)}function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),t.push.apply(t,s)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?h(Object(t),!0).forEach(function(s){z(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}function z(e,n,t){return n=R(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function R(e){var n=W(e,"string");return l(n)=="symbol"?n:String(n)}function W(e,n){if(l(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var s=t.call(e,n||"default");if(l(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Z=["aria-label"];function q(e,n,t,s,p,i){var w=$("TimesIcon"),I=B("ripple");return a(),u(E,o({name:"p-message",appear:""},e.ptm("transition")),{default:C(function(){return[b(d("div",o({class:e.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true"},e.ptm("root"),{"data-pc-name":"message"}),[e.$slots.container?c(e.$slots,"container",{key:0,onClose:i.close,closeCallback:i.close}):(a(),m("div",o({key:1,class:e.cx("wrapper")},e.ptm("wrapper")),[c(e.$slots,"messageicon",{class:"p-message-icon"},function(){return[(a(),u(D(e.icon?"span":i.iconComponent),o({class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16,["class"]))]}),d("div",o({class:["p-message-text",e.cx("text")]},e.ptm("text")),[c(e.$slots,"default")],16),e.closable?b((a(),m("button",o({key:0,class:e.cx("closeButton"),"aria-label":i.closeAriaLabel,type:"button",onClick:n[0]||(n[0]=function(O){return i.close(O)})},r(r(r({},e.closeButtonProps),e.ptm("button")),e.ptm("closeButton"))),[c(e.$slots,"closeicon",{},function(){return[e.closeIcon?(a(),m("i",o({key:0,class:[e.cx("closeIcon"),e.closeIcon]},r(r({},e.ptm("buttonIcon")),e.ptm("closeIcon"))),null,16)):(a(),u(w,o({key:1,class:[e.cx("closeIcon"),e.closeIcon]},r(r({},e.ptm("buttonIcon")),e.ptm("closeIcon"))),null,16,["class"]))]})],16,Z)),[[I]]):T("",!0)],16))],16),[[A,p.visible]])]}),_:3},16)}V.render=q;export{V as default};
