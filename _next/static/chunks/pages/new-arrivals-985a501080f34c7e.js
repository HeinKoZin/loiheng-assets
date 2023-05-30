(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9901],{9648:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new-arrivals",function(){return n(9378)}])},9378:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var i=n(5893),r=n(7629),s=n(424),o=n(2734),a=n(8396),l=n(7357),c=n(9520),d=n(5861),x=n(6886),u=n(6447),h=n(5054),p=n(7294);let f=()=>{let[e,t]=(0,p.useState)(1),[n,f]=(0,p.useState)(1),Z=(0,o.Z)(),g=(0,a.Z)(Z.breakpoints.down("sm")),{data:j,error:m,isValidating:v}=(0,r.Z)(e),[w,y]=p.useState(),b=(e,n)=>{t(n)};return p.useEffect(()=>{j&&(y(j.data),f(j.data.pagination.last_page))},[j,y]),(0,i.jsx)(l.Z,{sx:{py:2},children:(0,i.jsxs)(c.Z,{maxWidth:"lg",children:[(0,i.jsx)(d.Z,{variant:"h6",children:"New Arrivals"}),(0,i.jsxs)(d.Z,{variant:"body2",children:["Show all (",null==w?void 0:w.products.length,") results."]}),(0,i.jsx)(x.ZP,{container:!0,spacing:1,sx:{py:2},columns:15,children:null==w?void 0:w.products.map((e,t)=>(0,i.jsx)(x.ZP,{item:!0,xs:15,md:3,children:(0,i.jsx)(s.Z,{data:e})},t))}),(0,i.jsx)(u.Z,{sx:{paddingY:Z.spacing(5),marginTop:Z.spacing(5)},justifyContent:"center",alignItems:"center",children:(0,i.jsx)(h.Z,{count:n,page:e,onChange:b,variant:"outlined",shape:"rounded",showFirstButton:!0,showLastButton:!0,size:g?"medium":"large"})})]})})};var Z=n(6175),g=n(9008),j=n.n(g);let m=()=>(0,i.jsxs)(l.Z,{children:[(0,i.jsxs)(j(),{children:[(0,i.jsx)("title",{children:"Loi Heng | New Arrival"}),(0,i.jsx)("meta",{name:"description",content:"Loi Heng New Arrivals"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(f,{})]});m.getLayout=function(e){return(0,i.jsx)(Z.Z,{children:e})};var v=m},424:function(e,t,n){"use strict";var i=n(5893),r=n(2734),s=n(8396),o=n(7357),a=n(7036),l=n(859),c=n(5861),d=n(3321),x=n(4745),u=n(265),h=n(948),p=n(3946),f=n(5675),Z=n.n(f);n(7294);var g=n(8151),j=n(5120),m=n(1664),v=n.n(m),w=n(3735),y=n(3299),b=n(3173),k=n(6737);let C=e=>{let{src:t,width:n,quality:i}=e;return"https://api.loiheng.duckdns.org".concat(t,"?q=").concat(i||75)},_=(e,t)=>{if(e){let{getState:n}=w.Z,i=n().wishlists,r=n().addWishlist,s=n().removeWishlist;t&&((null==i?void 0:i.find(e=>e.id===t.id))?s(e,t):r(e,t))}else(0,y.signIn)()},S=e=>{let{data:t}=(0,y.useSession)(),n=(0,w.Z)(e=>e.wishlists),h=(0,k.Q)(e.data,n),p=(0,b.Z)(e=>e.addToCart),f=(t,n)=>{if(t){let i=e.data;t&&i&&p(t,i.id,null)}else(0,y.signIn)()},m=(0,r.Z)(),S=(0,s.Z)(m.breakpoints.down("md"));return(0,i.jsxs)(o.Z,{sx:{border:"1px solid ".concat(a.Z[300]),p:1,position:"relative",borderRadius:"4px","&:hover":{transition:"0.8s",border:"1px solid ".concat(l.Z[500])},display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"370px"},children:[(0,i.jsx)(v(),{href:"/product/".concat(e.data.id),legacyBehavior:!0,children:(0,i.jsxs)(W,{children:[(0,i.jsx)(o.Z,{sx:{position:"relative",width:"100%",height:S?"250px":"200px",transition:"transform 0.3s","&:hover":{transform:"scale(1.05)"}},children:(0,i.jsx)(Z(),{src:e.data.cover_img,alt:"ProductImage",fill:!0,loader:C,style:{objectFit:"contain"},sizes:"(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"})}),(0,i.jsx)(c.Z,{sx:{textAlign:"center",fontSize:12,color:a.Z[600],fontWeight:500,py:"6px"},children:e.data.category[0].name}),(0,i.jsx)(c.Z,{sx:{textAlign:"center",fontSize:12,fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",WebkitLineClamp:{xs:2,lg:2},lineClamp:{xs:2,lg:2},display:"-webkit-box",WebkitBoxOrient:"vertical"},children:(0,i.jsx)(v(),{href:"/product/".concat(e.data.id),passHref:!0,legacyBehavior:!0,children:(0,i.jsx)(W,{children:e.data.name})})}),e.data.discount.length>0?(0,i.jsxs)(c.Z,{sx:{textAlign:"center",fontSize:14,color:a.Z[700],py:"4px",fontWeight:600},children:[(0,i.jsx)("del",{style:{fontSize:12,color:a.Z[600],fontWeight:400},children:new Intl.NumberFormat("mm-MM",{style:"currency",currency:"MMK",currencyDisplay:"code"}).format(e.data.price)}),(0,i.jsx)("br",{}),(0,i.jsx)("span",{children:new Intl.NumberFormat("mm-MM",{style:"currency",currency:"MMK",currencyDisplay:"code"}).format(e.data.discount[0].promo_price)})]}):(0,i.jsx)(c.Z,{sx:{textAlign:"center",fontSize:14,color:a.Z[700],py:"4px",fontWeight:500},children:(0,i.jsx)("span",{children:new Intl.NumberFormat("mm-MM",{style:"currency",currency:"MMK",currencyDisplay:"code"}).format(e.data.price)})})]})}),(0,i.jsxs)(o.Z,{sx:{display:"flex",gap:2,justifyContent:"center"},children:[e.data.stock<=0?(0,i.jsx)(d.Z,{size:"small",disabled:!0,variant:"contained",fullWidth:!0,sx:{height:"30px"},children:"Out Of Stock"}):(0,i.jsx)(d.Z,{size:"small",variant:"contained",color:"inherit",fullWidth:!0,sx:{boxShadow:0,backgroundColor:l.Z[500],color:"#fff",height:"30px","&:hover":{boxShadow:"4px",backgroundColor:l.Z[700]}},onClick(){e.data&&f(t,e.data.id)},children:"Add to Cart"}),(0,i.jsx)(M,{size:"small",onClick(){e.data&&_(t,e.data)},children:h?(0,i.jsx)(j.Z,{sx:{color:x.Z[500]}}):(0,i.jsx)(g.Z,{})})]}),e.data.discount.length>0?(0,i.jsx)(o.Z,{sx:{position:"absolute",right:8,top:8,backgroundColor:u.Z[500],borderRadius:"4px",color:"#fff",padding:"2px 6px"},children:(0,i.jsxs)(c.Z,{children:["- ",e.data.discount[0].percent," %"]})}):""]})},M=(0,h.ZP)(p.Z)(e=>{let{theme:t}=e;return{color:l.Z[500],borderRadius:"5px",height:"30px",border:"1px solid ".concat(l.Z[500]),transition:"0.3s"}}),W=(0,h.ZP)("a")(e=>{let{theme:t}=e;return{cursor:"pointer",textDecoration:"none",color:"black"}});t.Z=S},6175:function(e,t,n){"use strict";var i=n(5893),r=n(1794),s=n(8854),o=n(7063),a=n(2734),l=n(7357);n(7294);let c=e=>{let{children:t}=e;return(0,a.Z)(),(0,i.jsxs)(l.Z,{width:"100%",height:"100%",children:[(0,i.jsx)(s.Z,{}),(0,i.jsx)(o.Z,{}),(0,i.jsx)(l.Z,{minHeight:"100vh",children:t}),(0,i.jsx)(r.Z,{})]})};t.Z=c},7629:function(e,t,n){"use strict";var i=n(8100),r=n(7860);let s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=(0,i.ZP)(["".concat("https://api.loiheng.duckdns.org/api/","products/new-arrivals?page=").concat(e)],r.Z);return t};t.Z=s},6737:function(e,t,n){"use strict";n.d(t,{Q:function(){return i}});let i=(e,t)=>{let n=t?t.find(t=>(null==t?void 0:t.id)===(null==e?void 0:e.id)):[];return void 0!==n}}},function(e){e.O(0,[9718,1431,1890,9774,2888,179],function(){return e(e.s=9648)}),_N_E=e.O()}]);