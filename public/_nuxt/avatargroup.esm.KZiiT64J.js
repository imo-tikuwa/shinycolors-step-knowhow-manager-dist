import{aa as r,al as e,t,v as n,Z as s,am as p}from"./entry.dwGJUATF.js";var o=`
@layer primevue {
    .p-avatar-group .p-avatar + .p-avatar {
        margin-left: -1rem;
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }
}
`,v={root:"p-avatar-group p-component"},l=r.extend({name:"avatargroup",css:o,classes:v}),c={name:"BaseAvatarGroup",extends:e,style:l,provide:function(){return{$parentInstance:this}}},i={name:"AvatarGroup",extends:c};function u(a,m,d,g,$,f){return t(),n("div",p({class:a.cx("root")},a.ptm("root"),{"data-pc-name":"avatargroup"}),[s(a.$slots,"default")],16)}i.render=u;export{i as default};
