import{a9 as s,ak as o,t as n,v as t,W as p,al as l,y as m,J as u,an as c,am as d,L as v}from"./entry.gsaNBnQN.js";var g=`
@layer primevue {
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
    }

    .p-avatar.p-avatar-image {
        background-color: transparent;
    }

    .p-avatar.p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar .p-avatar-icon {
        font-size: 1rem;
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }
}
`,y={root:function(e){var r=e.props;return["p-avatar p-component",{"p-avatar-image":r.image!=null,"p-avatar-circle":r.shape==="circle","p-avatar-lg":r.size==="large","p-avatar-xl":r.size==="xlarge"}]},label:"p-avatar-text",icon:"p-avatar-icon"},b=s.extend({name:"avatar",css:g,classes:y}),f={name:"BaseAvatar",extends:o,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:b,provide:function(){return{$parentInstance:this}}},h={name:"Avatar",extends:f,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}}},S=["aria-labelledby","aria-label"],k=["src","alt"];function $(a,e,r,z,E,i){return n(),t("div",l({class:a.cx("root"),"aria-labelledby":a.ariaLabelledby,"aria-label":a.ariaLabel},a.ptm("root"),{"data-pc-name":"avatar"}),[p(a.$slots,"default",{},function(){return[a.label?(n(),t("span",l({key:0,class:a.cx("label")},a.ptm("label")),m(a.label),17)):a.$slots.icon?(n(),u(d(a.$slots.icon),{key:1,class:c(a.cx("icon"))},null,8,["class"])):a.icon?(n(),t("span",l({key:2,class:[a.cx("icon"),a.icon]},a.ptm("icon")),null,16)):a.image?(n(),t("img",l({key:3,src:a.image,alt:a.ariaLabel,onError:e[0]||(e[0]=function(){return i.onError&&i.onError.apply(i,arguments)})},a.ptm("image")),null,16,k)):v("",!0)]})],16,S)}h.render=$;export{h as default};
