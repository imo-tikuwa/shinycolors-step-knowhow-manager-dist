import{s as C}from"./index.esm.5XTLrjkf.js";import{aa as B,al as v,am as a,t as r,v as s,L as c,ao as I,an as b,O as m,y as O,i as h,x as w,J as f,K as x,Z as P,z as y}from"./entry.dwGJUATF.js";var N=`
@layer primevue {
    .p-breadcrumb {
        overflow-x: auto;
    }

    .p-breadcrumb .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
    }

    .p-breadcrumb .p-menuitem-text {
        line-height: 1;
    }

    .p-breadcrumb .p-menuitem-link {
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    .p-breadcrumb .p-menuitem-separator {
        display: flex;
        align-items: center;
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }
}
`,S={root:"p-breadcrumb p-component",menu:"p-breadcrumb-list",home:"p-breadcrumb-home",separator:"p-menuitem-separator",menuitem:function(i){var t=i.instance;return["p-menuitem",{"p-disabled":t.disabled()}]},action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text"},U=B.extend({name:"breadcrumb",css:N,classes:S}),M={name:"BaseBreadcrumb",extends:v,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:U,provide:function(){return{$parentInstance:this}}},k={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:v,props:{item:null,templates:null,index:null},methods:{onClick:function(i){this.item.command&&this.item.command({originalEvent:i,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var i=this.item,t=i.to,l=i.url,o=typeof window<"u"?window.location.pathname:"";return t===o||l===o?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var i=this;return{action:a({class:this.cx("action"),"aria-current":this.isCurrentUrl(),onClick:function(l){return i.onClick(l)}},this.ptm("action",this.ptmOptions)),icon:a({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:a({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},R=["href","target","aria-current"];function V(e,i,t,l,o,n){return n.visible()?(r(),s("li",a({key:0,class:[e.cx("menuitem"),t.item.class]},e.ptm("menuitem",n.ptmOptions)),[t.templates.item?(r(),c(b(t.templates.item),{key:1,item:t.item,label:n.label(),props:n.getMenuItemProps},null,8,["item","label","props"])):(r(),s("a",a({key:0,href:t.item.url||"#",class:e.cx("action"),target:t.item.target,"aria-current":n.isCurrentUrl(),onClick:i[0]||(i[0]=function(){return n.onClick&&n.onClick.apply(n,arguments)})},e.ptm("action",n.ptmOptions)),[t.templates&&t.templates.itemicon?(r(),c(b(t.templates.itemicon),{key:0,item:t.item,class:I(e.cx("icon",n.ptmOptions))},null,8,["item","class"])):t.item.icon?(r(),s("span",a({key:1,class:[e.cx("icon"),t.item.icon]},e.ptm("icon",n.ptmOptions)),null,16)):m("",!0),t.item.label?(r(),s("span",a({key:2,class:e.cx("label")},e.ptm("label",n.ptmOptions)),O(n.label()),17)):m("",!0)],16,R))],16)):m("",!0)}k.render=V;var z={name:"Breadcrumb",extends:M,components:{BreadcrumbItem:k,ChevronRightIcon:C}};function D(e,i,t,l,o,n){var p=h("BreadcrumbItem"),g=h("ChevronRightIcon");return r(),s("nav",a({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"breadcrumb"}),[w("ol",a({class:e.cx("menu")},e.ptm("menu")),[e.home?(r(),c(p,a({key:0,item:e.home,class:e.cx("home"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("home")),null,16,["item","class","templates","pt","unstyled"])):m("",!0),(r(!0),s(f,null,x(e.model,function(d,u){return r(),s(f,{key:d.label+"_"+u},[e.home||u!==0?(r(),s("li",a({key:0,class:e.cx("separator")},e.ptm("separator")),[P(e.$slots,"separator",{},function(){return[y(g,a({"aria-hidden":"true"},e.ptm("separatorIcon")),null,16)]})],16)):m("",!0),y(p,{item:d,index:u,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}z.render=D;export{z as default};
