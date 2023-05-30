"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8555],{8555:function(e,s,i){i.d(s,{F:function(){return G},c:function(){return ek}});var n,t,r=i(5893),l=i(2734),o=i(8396),a=i(7357),c=i(9520),d=i(6886),x=i(6447),h=i(2280),p=i(7036),Z=i(8895),j=i(5861),u=i(2797),g=i(3457),f=i(480),m=i(9368),y=i(7720),b=i(1184),v=i(4054),w=i(3841),S=i(315),k=i(2224),I=i(3946),C=i(859),_=i(5054),z=i(7294),P=i(5675),E=i.n(P),N=i(3508),T=i(4492),R=i(6130),W=i(424),M=i(8100),A=i(7860);let D=function(e,s){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:15,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=(0,M.ZP)(["".concat("https://api.loiheng.duckdns.org/api/","products?category_id=").concat(e,"&brand_id=").concat(s,"&limit=").concat(t,"&page=").concat(n,"&search=").concat(i,"&sort_by=").concat(r)],A.Z);return l};var F=i(10),O=i(1163),B=i(4887);(n=t||(t={})).NONE="",n.IS_FEATURE="is_feature_product",n.LOWEST_PRICE="lowest_price",n.HIGHEST_PRICE="highest_price";let L=e=>{let{src:s,width:i,quality:n}=e;return"".concat(s,"?q=").concat(n||75)},q=e=>{let[s,i]=(0,z.useState)(!0),[n,P]=z.useState(t.NONE),[M,A]=z.useState([0,1e3]),[q,G]=z.useState([0,1e3]),[H,K]=(0,z.useState)(0),[Y,U]=(0,z.useState)(1),[Q,X]=(0,z.useState)([]),[V,J]=(0,z.useState)(""),{brands:$,categories:ee}=function(){let[e,s]=(0,z.useState)([]),[i,n]=(0,z.useState)([]),t=(0,O.useRouter)();return(0,z.useEffect)(()=>{let e=t.query.brands,i=t.query.categories;e?n(e.split(",").map(e=>parseInt(e))):n([]),i?s(i.split(",").map(e=>parseInt(e))):s([])},[t]),{brands:i,categories:e}}(),{data:es,error:ei,isValidating:en}=D(ee,$,V,Y,15,n),[et,er]=z.useState(),el=(0,l.Z)(),eo=(0,O.useRouter)(),ea=(0,o.Z)(el.breakpoints.down("sm")),ec=e=>{let{value:s,checked:i}=e.target,n=parseInt(s);if(i){let t=B.Z.stringify({brands:[...$,n],categories:ee},{arrayFormat:"comma"});console.log(t),eo.push("?"+t,"?"+t,{shallow:!0})}else{let r=B.Z.stringify({brands:$.filter(e=>e!==n),categories:ee},{arrayFormat:"comma"});eo.push("?"+r,"?"+r,{shallow:!0})}},ed=e=>{let{value:s,checked:i}=e.target,n=parseInt(s);if(i){let t=B.Z.stringify({categories:[...ee,n],brands:$},{arrayFormat:"comma"});eo.push("?"+t,"?"+t,{shallow:!0})}else{let r=B.Z.stringify({categories:ee.filter(e=>e!==n),brands:$},{arrayFormat:"comma"});eo.push("?"+r,"?"+r,{shallow:!0})}},ex=e=>{void 0!==e.target.value&&P(e.target.value)},eh=(e,s)=>{A(s)},ep=(e,s)=>{U(s)},eZ=()=>{i(!0)},ej=()=>{i(!1)};return z.useEffect(()=>{if(es){let s=Math.min(...es.data.products.map(e=>e.price)),i=Math.max(...es.data.products.map(e=>e.price));er(es.data),G([s,i]),A([s,i]),K(es.data.pagination.last_page),U(es.data.pagination.current_page)}if(e.categories){let n=e.categories.data.categories.map(e=>e.sub_category).flat();X(n)}},[es,er,e]),z.useEffect(()=>{let e=eo.query.keyword;e&&J(e)},[eo]),(0,r.jsx)(a.Z,{sx:{py:2},children:(0,r.jsx)(c.Z,{maxWidth:"lg",children:(0,r.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,r.jsx)(d.ZP,{item:!0,xs:12,lg:3,children:(0,r.jsxs)(x.Z,{spacing:2,children:[(0,r.jsx)(a.Z,{children:(0,r.jsxs)(h.Z,{elevation:0,defaultExpanded:!0,sx:{border:"1px solid ".concat(p.Z[300]),p:0},children:[(0,r.jsx)(Z.Z,{expandIcon:(0,r.jsx)(N.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,r.jsx)(j.Z,{children:"CATEGORIES"})}),(0,r.jsx)(u.Z,{sx:{p:0,pl:1},children:(0,r.jsx)(a.Z,{sx:{height:"220px",position:"relative",overflow:"scroll"},children:Q.map(e=>(0,r.jsx)(g.Z,{children:(0,r.jsx)(f.Z,{control:(0,r.jsx)(m.Z,{value:e.id,checked:-1!==ee.indexOf(e.id),onChange:e=>ed(e)}),label:e.name})},e.id))})})]})}),(0,r.jsx)(a.Z,{children:(0,r.jsxs)(h.Z,{elevation:0,defaultExpanded:!0,sx:{border:"1px solid ".concat(p.Z[300])},children:[(0,r.jsx)(Z.Z,{expandIcon:(0,r.jsx)(N.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,r.jsx)(j.Z,{children:"BRANDS"})}),(0,r.jsx)(u.Z,{sx:{p:0,pl:1},children:(0,r.jsx)(a.Z,{sx:{height:"220px",position:"relative",overflow:"scroll"},children:e.brands.data.brands.map(e=>(0,r.jsx)(g.Z,{children:(0,r.jsx)(f.Z,{control:(0,r.jsx)(m.Z,{value:e.id,checked:-1!==$.indexOf(e.id),onChange:e=>ec(e)}),label:e.name})},e.id))})})]})}),(0,r.jsxs)(a.Z,{sx:{border:"1px solid ".concat(p.Z[300])},children:[(0,r.jsx)(j.Z,{sx:{p:2},children:"PRICE RANGE"}),(0,r.jsx)(y.Z,{}),(0,r.jsx)(a.Z,{sx:{p:2},children:(0,r.jsx)(b.ZP,{getAriaLabel:()=>"Price Range",value:M,step:100,min:q[0],max:q[1],valueLabelDisplay:"auto",onChange:eh})})]})]})}),(0,r.jsxs)(d.ZP,{item:!0,xs:12,lg:9,children:[(0,r.jsxs)(x.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,r.jsx)(a.Z,{children:(0,r.jsx)(j.Z,{variant:"h6",children:"Product Lists"})}),(0,r.jsxs)(a.Z,{sx:{display:"flex",gap:2},children:[(0,r.jsxs)(x.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(j.Z,{children:"Sort By: "}),(0,r.jsxs)(v.Z,{sx:{m:1,minWidth:120},size:"small",children:[(0,r.jsx)(w.Z,{id:"demo-select-small",children:"Type"}),(0,r.jsxs)(S.Z,{labelId:"demo-select-small",id:"demo-select-small",value:n,label:"Age",onChange:ex,children:[(0,r.jsx)(k.Z,{value:t.NONE,children:(0,r.jsx)("em",{children:"None"})}),(0,r.jsx)(k.Z,{value:t.IS_FEATURE,children:"Feature Product"}),(0,r.jsx)(k.Z,{value:t.LOWEST_PRICE,children:"Lowest Price"}),(0,r.jsx)(k.Z,{value:t.HIGHEST_PRICE,children:"Highest Price"})]})]})]}),(0,r.jsxs)(x.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(j.Z,{children:"View: "}),(0,r.jsxs)(a.Z,{sx:{display:"flex"},children:[(0,r.jsx)(I.Z,{onClick:eZ,children:(0,r.jsx)(T.Z,{fontSize:"small",sx:{color:!0==s?C.Z[500]:""}})}),(0,r.jsx)(I.Z,{onClick:ej,children:(0,r.jsx)(R.Z,{fontSize:"small",sx:{color:!0==s?"":C.Z[500]}})})]})]})]})]}),(0,r.jsx)(a.Z,{sx:{display:!0==s?"block":"none"},children:(0,r.jsx)(d.ZP,{container:!0,spacing:1,children:et?et.products.length<=0?(0,r.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",flexDirection:"column"},children:[(0,r.jsx)(a.Z,{sx:{position:"relative",width:"300px",height:"300px"},children:(0,r.jsx)(E(),{src:"/no-prod.gif",alt:"Shipping Gif",loader:L,fill:!0,sizes:"(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"})}),(0,r.jsx)(j.Z,{children:"No product found!"})]}):et.products.map((e,s)=>(0,r.jsx)(d.ZP,{item:!0,xs:12,md:3,children:(0,r.jsx)(W.Z,{data:e})},s)):""})}),(0,r.jsx)(a.Z,{sx:{display:!1==s?"block":"none"},children:et?et.products.length<=0?(0,r.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",flexDirection:"column"},children:[(0,r.jsx)(a.Z,{sx:{position:"relative",width:"300px",height:"300px"},children:(0,r.jsx)(E(),{src:"/no-prod.gif",alt:"Shipping Gif",loader:L,fill:!0,sizes:"(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"})}),(0,r.jsx)(j.Z,{children:"No product found!"})]}):(0,r.jsx)(x.Z,{spacing:1,children:null==et?void 0:et.products.map((e,s)=>(0,r.jsx)(a.Z,{children:(0,r.jsx)(F.Z,{data:e})},s))}):""}),(0,r.jsx)(x.Z,{sx:{paddingY:el.spacing(5),marginTop:el.spacing(5)},justifyContent:"center",alignItems:"center",children:(0,r.jsx)(_.Z,{count:H,page:Y,onChange:ep,variant:"outlined",color:"primary",showFirstButton:!0,showLastButton:!0,size:ea?"medium":"large"})})]})]})})})};var G=q,H=i(948),K=i(8102),Y=i(9755),U=i(3816),Q=i(265),X=i(787),V=i(3486),J=i(4745),$=i(3321),ee=i(1703),es=i(44),ei=i(6653),en=i(3750),et=i(6893),er=i(8151),el=i(5434),eo=i(6540),ea=i(4895),ec=i(1649),ed=i(6066);i(1548),i(3873);var ex=i(1664),eh=i.n(ex),ep=i(3299),eZ=i(3735),ej=i(5120),eu=i(6737),eg=i(3173),ef=i(6025);function em(e){let{children:s,value:i,index:n,...t}=e;return(0,r.jsx)(a.Z,{role:"tabpanel",hidden:i!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n),...t,children:i===n&&(0,r.jsx)(a.Z,{sx:{p:2,height:"100%"},children:s})})}function ey(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function eb(e){let{style:s,onClick:i}=e;return(0,r.jsx)("div",{style:{...s,display:"block"},onClick:i,children:(0,r.jsx)(ec.WMs,{className:"slick-arrow-icon-right"})})}function ev(e){let{style:s,onClick:i}=e;return(0,r.jsx)("div",{style:{...s,display:"block"},className:"test",onClick:i,children:(0,r.jsx)(ec.Oul,{className:"slick-arrow-icon-left"})})}(0,H.ZP)(K.Z)(e=>{let{theme:s}=e;return{["&.".concat(Y.Z.head)]:{borderBottom:"2px solid ".concat(p.Z[700])},["&.".concat(Y.Z.body)]:{fontSize:14}}}),(0,H.ZP)(U.Z)(e=>{let{theme:s}=e;return{"&:nth-of-type(odd)":{backgroundColor:s.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}});let ew=e=>{var s,i,n;let[t,h]=z.useState(0),[Z,u]=z.useState(1),g=(0,z.useRef)(null),f=(0,z.useRef)(null),[m,b]=(0,z.useState)(),[v,w]=(0,z.useState)(),{data:S}=(0,ep.useSession)(),k=(0,l.Z)(),_=(0,o.Z)(k.breakpoints.down("sm")),P=(0,O.useRouter)(),N=(e,s)=>{h(s)},T=()=>{var s;let i=null!==(s=e.stock)&&void 0!==s?s:0;i>Z&&u(Z+1)},R=()=>{Z>1&&u(Z-1)},{data:M,error:A,isValidating:F}=D([],[],"",1),[B,L]=z.useState();(0,z.useEffect)(()=>{b(g.current),w(f.current),M&&L(M.data)},[M,L]);let q=()=>{if(S){let{getState:s}=eZ.Z,i=s().wishlists,n=s().addWishlist,t=s().removeWishlist;e&&((null==i?void 0:i.find(s=>s.id===e.id))?t(S,e):n(S,e))}else(0,ep.signIn)()},G={dots:!1,infinite:!0,speed:500,slidesToShow:5,swipeToSlide:!0,nextArrow:(0,r.jsx)(eb,{}),prevArrow:(0,r.jsx)(ev,{}),responsive:[{breakpoint:1024,settings:{slidesToShow:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,initialSlide:2,arrows:!1}},{breakpoint:480,settings:{slidesToShow:1,arrows:!1}}]},H={slidesToShow:5,swipeToSlide:!0,focusOnSelect:!0,infinite:!1,nextArrow:(0,r.jsx)(eb,{}),prevArrow:(0,r.jsx)(ev,{}),dots:!1},K=(0,eZ.Z)(e=>e.wishlists),Y=(0,eu.Q)(e,K),{addToCart:U}=(0,eg.Z)(),ec=()=>{S?U(S,e.id,Z):(0,ep.signIn)()};return(0,r.jsx)(a.Z,{sx:{py:4},children:(0,r.jsxs)(c.Z,{maxWidth:"lg",children:[(0,r.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,r.jsx)(d.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,r.jsxs)("div",{style:{display:"flex",gap:4,flexDirection:"column"},children:[(0,r.jsx)(ed.Z,{infinite:!1,asNavFor:v,ref:g,arrows:!1,children:e.product_pictures.map(e=>(0,r.jsx)(a.Z,{sx:{width:"100%",height:_?"300px":"350px",position:"relative",p:3,border:"1px solid ".concat(p.Z[300])},children:(0,r.jsx)(ef.Z,{src:"https://api.loiheng.duckdns.org/"+e.image,className:"absolute object-contain",zoomType:"click",zoomPreload:!0})},e.id))}),(0,r.jsx)(ed.Z,{asNavFor:m,ref:f,...H,children:e.product_pictures.map(e=>(0,r.jsx)(a.Z,{sx:{p:"2px"},children:(0,r.jsx)(a.Z,{width:"100%",height:"70px",position:"relative",children:(0,r.jsx)(E(),{src:"https://api.loiheng.duckdns.org/"+e.image,alt:"Product Image",fill:!0,style:{border:"1px solid ".concat(p.Z[300]),boxShadow:"1px 1px 5px ".concat(p.Z[300]),borderRadius:"4px"}})})},e.id))})]})}),(0,r.jsx)(d.ZP,{item:!0,xs:12,md:6,lg:5,children:(0,r.jsxs)(x.Z,{children:[(0,r.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)(j.Z,{sx:{fontWeight:500,fontSize:16},children:null!==(s=e.name)&&void 0!==s?s:"Name"}),(0,r.jsx)(en.Dqf,{})]}),(0,r.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"space-between",color:C.Z[500]},children:[e.discount.length>0?(0,r.jsxs)(j.Z,{children:[(0,r.jsx)("del",{style:{color:Q.Z[500]},children:new Intl.NumberFormat("mm-MM",{style:"currency",currency:"MMK",currencyDisplay:"code"}).format(null!==(i=e.price)&&void 0!==i?i:1e3)}),(0,r.jsx)("span",{style:{paddingLeft:"6px"},children:new Intl.NumberFormat("mm-MM",{style:"currency",currency:"MMK",currencyDisplay:"code"}).format(e.discount[0].promo_price)})]}):(0,r.jsx)(j.Z,{children:new Intl.NumberFormat("mm-MM",{style:"currency",currency:"MMK",currencyDisplay:"code"}).format(null!==(n=e.price)&&void 0!==n?n:1e3)}),(0,r.jsx)(j.Z,{children:"Be The First Review"})]}),(0,r.jsx)(a.Z,{sx:{py:2},children:e.short_description?(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:e.short_description}}):"-"}),(0,r.jsxs)(a.Z,{sx:{display:"flex",gap:2,alignItems:"center",pb:1},children:[(0,r.jsx)(j.Z,{sx:{fontWeight:600},children:"Brands:"}),(0,r.jsx)(j.Z,{sx:{fontSize:14},children:e.brand.map(e=>(0,r.jsxs)(eh(),{href:"/product?brands="+e.id,children:[(0,r.jsx)("span",{children:e.name}),", "]},e.id))})]}),(0,r.jsxs)(a.Z,{sx:{display:"flex",gap:2,alignItems:"center",pb:1},children:[(0,r.jsx)(j.Z,{sx:{fontWeight:600},children:"Category:"}),(0,r.jsx)(j.Z,{sx:{fontSize:14},children:e.category.map(e=>(0,r.jsxs)(eh(),{href:"/product?categories="+e.id,children:[(0,r.jsx)("span",{children:e.name}),", "]},e.id))})]}),(0,r.jsxs)(a.Z,{sx:{display:"flex",gap:2,alignItems:"center",pb:1},children:[(0,r.jsx)(j.Z,{sx:{fontWeight:600},children:"SKU :"}),(0,r.jsx)(j.Z,{sx:{fontSize:14},children:e.sku})]}),e.discount.length>0?(0,r.jsxs)(a.Z,{sx:{display:"flex",gap:2,alignItems:"center"},children:[(0,r.jsx)(j.Z,{sx:{fontWeight:600},children:"Discount :"}),(0,r.jsxs)(j.Z,{sx:{fontSize:14,color:Q.Z[500],fontWeight:500},children:[e.discount[0].percent," %"]})]}):"",(0,r.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"space-between",py:4},children:[(0,r.jsx)(a.Z,{sx:{display:"flex",gap:1,alignItems:"center"},children:e.stock&&e.stock>0?(0,r.jsxs)(a.Z,{display:"flex",gap:1,alignItems:"center",children:[(0,r.jsx)(I.Z,{sx:{color:Q.Z[500],backgroundColor:p.Z[100]},onClick:()=>R(),children:(0,r.jsx)(ea.Z,{})}),(0,r.jsx)(X.ZP,{sx:{border:"2px solid ".concat(C.Z[500]),width:"60px",height:"40px",borderRadius:"4px",textAlign:"center",px:1,"& input":{textAlign:"center"}},value:Z}),(0,r.jsx)(I.Z,{sx:{color:V.Z[500],backgroundColor:p.Z[100]},onClick:()=>T(),children:(0,r.jsx)(eo.Z,{})}),(0,r.jsxs)(j.Z,{sx:{color:p.Z[500],fontSize:14},children:["Only ",e.stock," items"]})]}):""}),(0,r.jsxs)(a.Z,{sx:{display:"flex",gap:2,alignItems:"center"},children:[e.stock?e.stock>0?(0,r.jsx)(j.Z,{sx:{fontWeight:600,color:V.Z[600]},children:"In Stock"}):e.is_preorder?(0,r.jsx)(j.Z,{sx:{fontWeight:600,color:V.Z[600]},children:"Pre-order"}):(0,r.jsx)(j.Z,{sx:{fontWeight:600,color:Q.Z[600]},children:"Out of Stock"}):(0,r.jsx)(j.Z,{sx:{fontWeight:600,color:Q.Z[600]},children:"Out of Stock"}),(0,r.jsx)(eS,{size:"small",onClick:()=>q(),children:Y?(0,r.jsx)(ej.Z,{sx:{color:J.Z[500]}}):(0,r.jsx)(er.Z,{})})]})]}),e.stock&&e.stock>0?(0,r.jsxs)(a.Z,{sx:{display:"flex",gap:2},children:[(0,r.jsx)($.Z,{size:"small",variant:"contained",sx:{backgroundColor:C.Z[500],boxShadow:0,color:"#fff","&:hover":{boxShadow:0,backgroundColor:C.Z[700]}},onClick:()=>ec(),children:"Add to cart"}),(0,r.jsx)($.Z,{size:"small",variant:"contained",sx:{backgroundColor:C.Z[500],boxShadow:0,color:"#fff","&:hover":{boxShadow:0,backgroundColor:C.Z[700]}},onClick(){P.push("/checkout?product_id=".concat(e.id,"&qty=").concat(Z))},children:"Buy Now"})]}):""]})}),(0,r.jsxs)(d.ZP,{item:!0,xs:12,md:6,lg:3,children:[(0,r.jsxs)(x.Z,{spacing:2,sx:{border:"1px solid ".concat(p.Z[300]),p:2},children:[(0,r.jsx)(j.Z,{sx:{fontWeight:500},children:"Delivery"}),(0,r.jsxs)(a.Z,{sx:{display:"flex",alignItems:"start",gap:2},children:[(0,r.jsx)(ei.Sw5,{style:{color:C.Z[500],fontSize:20}}),(0,r.jsx)(j.Z,{sx:{fontSize:12},children:"No.10, Nanthar Road, Ahlone Township, Yangon , Myanmar (Burma)."})]}),(0,r.jsx)(y.Z,{}),(0,r.jsxs)(a.Z,{sx:{display:"flex",alignItems:"start",gap:2},children:[(0,r.jsx)(en.qaI,{style:{color:C.Z[500],fontSize:20}}),(0,r.jsx)(j.Z,{sx:{fontSize:12},children:"32 hours for downtown YGN & 1-5 days for the others"})]}),(0,r.jsx)(y.Z,{}),(0,r.jsxs)(a.Z,{sx:{display:"flex",alignItems:"start",gap:2},children:[(0,r.jsx)(en.yn9,{style:{color:C.Z[500],fontSize:20}}),(0,r.jsx)(j.Z,{sx:{fontSize:12},children:"Cash On Delivery is available"})]}),(0,r.jsx)(y.Z,{}),(0,r.jsxs)(a.Z,{sx:{display:"flex",alignItems:"start",gap:2},children:[(0,r.jsx)(et.bxQ,{style:{color:C.Z[500],fontSize:20}}),(0,r.jsx)(j.Z,{sx:{fontSize:12},children:"Shipping is available"})]})]}),(0,r.jsxs)(x.Z,{spacing:2,sx:{border:"1px solid ".concat(p.Z[300]),p:2,mt:2},children:[(0,r.jsx)(j.Z,{sx:{fontWeight:500},children:"Service"}),e.product_warranties.map(e=>(0,r.jsxs)(a.Z,{sx:{display:"flex",alignItems:"start",gap:2},children:["shield"===e.service_key?(0,r.jsx)(el.AXp,{style:{color:C.Z[500],fontSize:20}}):(0,r.jsx)(ei.Sw5,{style:{color:C.Z[500],fontSize:20}}),(0,r.jsx)(j.Z,{sx:{fontSize:12},children:e.service_value}),(0,r.jsx)(y.Z,{})]},e.id))]})]})]}),(0,r.jsx)(a.Z,{sx:{borderBottom:1,marginTop:10,borderColor:"divider"},children:(0,r.jsxs)(ee.Z,{value:t,onChange:N,"aria-label":"basic tabs example",children:[(0,r.jsx)(es.Z,{label:"Description",...ey(0)}),(0,r.jsx)(es.Z,{label:"Other Specification",...ey(1)}),(0,r.jsx)(es.Z,{label:"Support & Download",...ey(2)})]})}),(0,r.jsx)(em,{value:t,index:0,children:(0,r.jsx)(a.Z,{sx:{overflowX:"scroll"},children:e.description?(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:e.description}}):"-"})}),(0,r.jsx)(em,{value:t,index:1,children:"-"}),(0,r.jsx)(em,{value:t,index:2,children:e.desc_file?(0,r.jsx)("a",{href:"https://api.loiheng.duckdns.org"+e.desc_file,children:"Support & Download"}):""}),(0,r.jsx)(em,{value:t,index:3}),(0,r.jsxs)(a.Z,{sx:{marginTop:10},children:[(0,r.jsx)(j.Z,{variant:"h5",children:"You may also like"}),(0,r.jsx)(a.Z,{sx:{py:2},children:(0,r.jsx)(ed.Z,{...G,children:null==B?void 0:B.products.map((e,s)=>(0,r.jsx)(a.Z,{sx:{pr:1},children:(0,r.jsx)(W.Z,{data:e})},s))})})]})]})})},eS=(0,H.ZP)(I.Z)(e=>{let{theme:s}=e;return{color:C.Z[500],borderRadius:"5px",border:"1px solid ".concat(C.Z[500]),transition:"0.3s"}});var ek=ew}}]);