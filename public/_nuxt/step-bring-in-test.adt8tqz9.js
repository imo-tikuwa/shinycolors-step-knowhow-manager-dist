import{_ as D,d as T,N as P,v as f,x as d,z as s,A as r,W as V,J as u,H as b,E as N,G as K,r as A,o as O,R,S as x,t as l,T as z,I as g,B as C,y as M,K as G,m as L}from"./entry.zX07hrtw.js";import{_ as j}from"./CommonHeader.oS7UITbC.js";import q from"./column.esm.6LXuuxCK.js";import H from"./row.esm.IyumFxtz.js";import U from"./columngroup.esm.bnQx5iQL.js";import F from"./datatable.esm.fLYTU-bs.js";import J from"./checkbox.esm.UfvUMje-.js";import{_ as W}from"./KnowhowBookInfoTableRow.Yv1BT_Cx.js";import{u as Q,d as $}from"./index.KTmeBRPX.js";import"./splitbutton.esm.-CBszUe_.js";import"./index.esm.V1jII7cY.js";import"./tieredmenu.esm.kvqJfd_S.js";import"./index.esm.KoHNMxBI.js";import"./dropdown.esm.PzhnsLAF.js";import"./virtualscroller.esm.3Ix1Hfa5.js";import"./inputswitch.esm.LAX7PWJR.js";import"./tabpanel.esm.77wBcfbi.js";import"./tabview.esm.mAqrET4Q.js";import"./index.esm.YntRyUDQ.js";import"./index.esm.VYNYbR43.js";import"./sidebar.esm.Uv7D9hX9.js";import"./paginator.esm.bS7W66n5.js";import"./index.esm.6r1R_Plo.js";import"./inputnumber.esm.ZLCagCv-.js";import"./index.esm.QZMzJl_h.js";import"./index.esm.QhbPU_2n.js";import"./inputtext.esm.bl7-CRWg.js";import"./index.esm.GdP6gr9v.js";import"./index.esm.gQQukR6S.js";import"./index.esm.URaD3IHl.js";const X=T({setup(){const o=N(),m=Q(),{$constants:B}=L(),_=K({displaySelectModal:!1}),h=K([]),y=A([]),p=K([]),w=K([]);O(()=>{h.splice(0,h.length,...$(m.unserializedData)),h.forEach((c,t)=>{c.id=t+1}),a()});const a=()=>{y.value=[],_.displaySelectModal=!0},k=()=>{_.displaySelectModal=!1},v=()=>{const c=h.filter(t=>y.value.includes(t.id));if(c.length!==3)return o.require({header:"選択エラー",message:"ノウハウブックは3冊選択してください",acceptLabel:"OK",acceptIcon:"pi pi-check",rejectClass:"hidden"}),!1;p.splice(0),c.forEach(t=>{p.push($(t))}),w.splice(0),p.forEach(t=>{t.knowhows.forEach(i=>{i.knowhow&&i.level&&!w.find(e=>e.code===i.knowhow.code)&&w.push(i.knowhow)})}),w.sort((t,i)=>{const e=B.flattenKnowhowCodes.indexOf(t.code),n=B.flattenKnowhowCodes.indexOf(i.code);return e-n}),_.displaySelectModal=!1},I=(c,t)=>{let i=c.find(e=>{var n;return((n=e.knowhow)==null?void 0:n.code)===t.code});return i?i.level.name:null},S=c=>{let t=0;return p.forEach(i=>{i.knowhows.find(e=>{var n;return((n=e.knowhow)==null?void 0:n.code)===c.code})&&t++}),t};return{...R(_),knowhowBooks:h,bringInKnowhowBookIds:y,bringInKnowhowBooks:p,includesKnowhows:w,openSelectModal:a,closeSelectModal:k,closeSelectModalAndDisplayKnowhowBooks:v,displayKnowhow:I,displayKnowhowCount:S}}}),Y={class:"container"},Z={class:"flex flex-column mx-2"},oo={key:0,class:"flex justify-content-center"},eo=d("span",{class:"p-column-title white-space-nowrap mr-3"},"ノウハウ",-1),to={class:"grid"},no={class:"col-12"},so=d("h4",null,"STEPに持ち込むノウハウブックを3冊選択してください",-1),lo={class:"p-datatable p-component p-datatable-gridlines p-datatable-sm"},ao={class:"p-datatable-wrapper"},io={class:"p-datatable-table"},ro={class:"p-datatable-tbody"};function co(o,m,B,_,h,y){const p=G,w=j,a=q,k=H,v=U,I=F,S=J,c=W,t=x,i=P("tooltip");return l(),f(b,null,[d("div",Y,[s(w,null,{"unique-functions":r(()=>[d("div",Z,[z(s(p,{label:"ノウハウブックを3冊選択",icon:"pi pi-book",class:"p-button-sm white-space-nowrap w-full",iconPos:"right",onClick:o.openSelectModal},null,8,["onClick"]),[[i,{value:"STEPに持ち込むノウハウブック3冊を選択します",class:"custom-tooltip"},void 0,{bottom:!0}]])])]),_:1}),o.bringInKnowhowBooks.length<=0?(l(),f("div",oo,[d("span",{style:V({color:"var(--red-500)"})}," ↑「ノウハウブックを3冊選択」ボタンよりSTEPに持ち込むノウハウブックを3冊選択してください ",4)])):(l(),u(I,{key:1,value:o.bringInKnowhowBooks,class:"p-datatable-sm mb-4",dataKey:"id",showGridlines:"",responsiveLayout:"scroll"},{default:r(()=>[s(v,{type:"header"},{default:r(()=>[s(k,null,{default:r(()=>[s(a,{header:"キャラクター",rowspan:2,field:"name.code",class:"white-space-nowrap",style:{width:"130px"}}),s(a,{colspan:o.includesKnowhows.length},{header:r(e=>[eo]),_:1},8,["colspan"])]),_:1}),s(k,null,{default:r(()=>[o.includesKnowhows.length?(l(!0),f(b,{key:0},g(o.includesKnowhows,e=>(l(),u(a,{field:e.code,header:e.name,key:e.code,class:"white-space-nowrap"},null,8,["field","header"]))),128)):(l(),u(a,{key:1}))]),_:1})]),_:1}),s(a,{field:"name",header:"キャラクター"},{body:r(e=>{var n;return[C(M((n=e.data.name)==null?void 0:n.name),1)]}),_:1}),o.includesKnowhows&&o.includesKnowhows.length?(l(!0),f(b,{key:0},g(o.includesKnowhows,(e,n)=>(l(),u(a,{field:"knowhow"+n,header:e.name,class:"text-center"},{body:r(E=>[C(M(o.displayKnowhow(E.data.knowhows,e)),1)]),_:2},1032,["field","header"]))),256)):(l(),u(a,{key:1})),s(v,{type:"footer"},{default:r(()=>[s(k,null,{default:r(()=>[s(a,{footer:"冊数"}),o.includesKnowhows&&o.includesKnowhows.length?(l(!0),f(b,{key:0},g(o.includesKnowhows,(e,n)=>(l(),u(a,{footer:o.displayKnowhowCount(e),class:"text-center"},null,8,["footer"]))),256)):(l(),u(a,{key:1}))]),_:1})]),_:1})]),_:1},8,["value"]))]),s(t,{header:"ノウハウブックを3冊選択",visible:o.displaySelectModal,"onUpdate:visible":m[1]||(m[1]=e=>o.displaySelectModal=e),breakpoints:{"1200px":"90vw","960px":"90vw","760px":"90vw"},style:{width:"65vw"},modal:!0},{footer:r(()=>[s(p,{label:"キャンセル",icon:"pi pi-times",class:"p-button-sm p-button-text",iconPos:"right",onClick:o.closeSelectModal},null,8,["onClick"]),s(p,{label:"OK",icon:"pi pi-check",class:"p-button-sm",iconPos:"right",onClick:o.closeSelectModalAndDisplayKnowhowBooks,autofocus:""},null,8,["onClick"])]),default:r(()=>[d("div",to,[d("div",no,[so,d("div",lo,[d("div",ao,[d("table",io,[d("tbody",ro,[(l(!0),f(b,null,g(o.knowhowBooks,e=>(l(),u(c,{knowhowBook:e},{"first-row-append":r(()=>[s(S,{modelValue:o.bringInKnowhowBookIds,"onUpdate:modelValue":m[0]||(m[0]=n=>o.bringInKnowhowBookIds=n),value:e.id,disabled:o.bringInKnowhowBookIds.length>=3&&!o.bringInKnowhowBookIds.includes(e.id)},null,8,["modelValue","value","disabled"])]),_:2},1032,["knowhowBook"]))),256))])])])])])])]),_:1},8,["visible"])],64)}const Go=D(X,[["render",co]]);export{Go as default};
