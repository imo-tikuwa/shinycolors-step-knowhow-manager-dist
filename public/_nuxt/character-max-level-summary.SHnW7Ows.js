import{_ as N}from"./CommonHeader.vue.nV4TYf7X.js";import S from"./multiselect.esm.jRrtpFQe.js";import{d as G,E as P,r as v,F as U,G as H,o as I,v as b,z as n,A as l,H as r,I as C,m as R,t as m,J as K,K as D,L as y,B as x,y as M,x as V,M as O}from"./entry.cZJOvVR6.js";import j from"./column.esm.ijwfyDVm.js";import z from"./row.esm.cXrCQxRA.js";import W from"./columngroup.esm._XuSHTgh.js";import q from"./datatable.esm.oQMzVAXc.js";import{u as J,d as w}from"./index.Qsu_dzou.js";import"./splitbutton.esm.lofGtiA6.js";import"./index.esm.ByNG2qWg.js";import"./tieredmenu.esm.xW_yHb4S.js";import"./index.esm.rYzm1ri5.js";import"./dropdown.esm.XDRYqKBY.js";import"./virtualscroller.esm.px03Sq8e.js";import"./inputswitch.esm.Nxw8m05c.js";import"./tabpanel.esm._ZPGq2f6.js";import"./tabview.esm.IlmPR0qk.js";import"./index.esm.rT6jzZxc.js";import"./index.esm.JZ180qom.js";import"./sidebar.esm.2wPwPDod.js";import"./index.esm.0m5NxgyB.js";import"./paginator.esm.7UC0PUYj.js";import"./index.esm.Yap-pdJZ.js";import"./inputnumber.esm.BmRVuqOv.js";import"./index.esm.bLtTv9XS.js";import"./index.esm.Z4dqANXW.js";import"./inputtext.esm.PE9lUbpE.js";import"./index.esm.Vwd5qjdl.js";import"./index.esm.7_BvgwZK.js";import"./index.esm.-P5ox3TK.js";const Q={class:"container"},X=V("div",{class:"mb-3 font-bold"},"キャラクター",-1),Y=V("span",{class:"p-column-title white-space-nowrap mr-3"},"表示するノウハウ",-1),$e=G({__name:"character-max-level-summary",setup(Z){const L=P(),$=J(),{$constants:d}=R(),k=v({name:{value:null,matchMode:U.IN}}),g=H([]),u=v(d.eachCharacterPageDefaultDisplayKnowhows),h=v(d.eachCharacterPageDefaultDisplayKnowhows),B={name:null,knowhows:[]};I(()=>{const f=w($.unserializedData);d.characters.forEach(i=>{const c=w(B);c.name=i;const p=f.filter(t=>{var e;return((e=t.name)==null?void 0:e.code)===i.code});if(p.length>0){let t=[];p.forEach(e=>{e.knowhows.forEach(a=>{a.knowhow&&a.level&&t.push(w(a))})}),t=t.sort((e,a)=>e.knowhow.code!==a.knowhow.code?e.knowhow.code.localeCompare(a.knowhow.code):a.level.code-e.level.code),c.knowhows=t.reduce((e,a)=>{const _=e[e.length-1];return(!_||_.knowhow.code!==a.knowhow.code)&&e.push(a),e},[])}g.push(c)})});const E=(f,i)=>{let c=f.find(p=>{var t;return((t=p.knowhow)==null?void 0:t.code)===i.code});return c&&c.level?c.level.name:null},T=()=>{h.value.length>=25?L.require({header:"確認",message:"表示対象とするノウハウが多い場合、表示に時間が掛かる場合があります",acceptLabel:"OK",rejectLabel:"キャンセル",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",accept:()=>{u.value=w(h.value)}}):u.value=w(h.value)};return(f,i)=>{const c=N,p=S,t=O,e=j,a=z,_=W,F=q;return m(),b("div",Q,[n(c),n(F,{filters:r(k),"onUpdate:filters":i[1]||(i[1]=o=>C(k)?k.value=o:null),value:r(g),class:"p-datatable-sm mb-4",dataKey:"id",showGridlines:"",sortMode:"multiple",multiSortMeta:[{field:"id",order:1}],responsiveLayout:"scroll",filterDisplay:"menu"},{default:l(()=>[n(_,{type:"header"},{default:l(()=>[n(a,null,{default:l(()=>[n(e,{header:"キャラクター",rowspan:2,sortable:!0,sortField:"name.code",filterField:"name",showFilterMatchModes:!1,filterMenuStyle:{width:"18rem"},class:"white-space-nowrap",style:{width:"130px"}},{filter:l(({filterModel:o})=>[X,n(p,{modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,options:r(d).characters,optionLabel:"name",class:"p-column-filter",display:"chip"},null,8,["modelValue","onUpdate:modelValue","options"])]),filterclear:l(({filterCallback:o})=>[n(t,{label:"クリア",type:"button",icon:"pi pi-times",iconPos:"right",class:"p-button-sm p-button-secondary",onClick:s=>o()},null,8,["onClick"])]),filterapply:l(({filterCallback:o})=>[n(t,{label:"適用",type:"button",icon:"pi pi-check",iconPos:"right",class:"p-button-sm p-button-success",onClick:s=>o()},null,8,["onClick"])]),_:1}),n(e,{colspan:r(d).flattenKnowhows.length},{header:l(o=>[Y,n(p,{modelValue:r(h),"onUpdate:modelValue":i[0]||(i[0]=s=>C(h)?h.value=s:null),options:r(d).knowhows,optionLabel:"name",optionGroupLabel:"name",optionGroupChildren:"items",filter:!0,display:"chip",showToggleAll:!1,class:"mr-3",style:{"max-width":"200px"}},null,8,["modelValue","options"]),n(t,{label:"反映",type:"button",class:"p-button-sm p-button-success white-space-nowrap",onClick:T})]),_:1},8,["colspan"])]),_:1}),n(a,null,{default:l(()=>[r(u).length?(m(!0),b(K,{key:0},D(r(u),o=>(m(),y(e,{key:o.code,field:o.code,header:o.name,class:"white-space-nowrap"},null,8,["field","header"]))),128)):(m(),y(e,{key:1}))]),_:1})]),_:1}),n(e,{field:"name",header:"キャラクター"},{body:l(o=>{var s;return[x(M((s=o.data.name)==null?void 0:s.name),1)]}),_:1}),r(u).length?(m(!0),b(K,{key:0},D(r(u),(o,s)=>(m(),y(e,{field:"knowhow"+s,header:o.name,class:"text-center"},{body:l(A=>[x(M(E(A.data.knowhows,o)),1)]),_:2},1032,["field","header"]))),256)):(m(),y(e,{key:1}))]),_:1},8,["filters","value"])])}}});export{$e as default};