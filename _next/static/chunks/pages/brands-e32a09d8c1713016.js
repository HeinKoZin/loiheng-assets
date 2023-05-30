(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6803],{3635:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/brands",function(){return n(6834)}])},6834:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return z}});var i=n(5893),r=n(7448),a=n(7357),o=n(9520),s=n(5861),l=n(6886),d=n(7036),h=n(3366),c=n(7462),u=n(7294),p=n(6010),g=n(917),x=n(4780),m=n(8606),f=n(1796),v=n(948),w=n(1657),b=n(1588),Z=n(4867);function j(t){return(0,Z.Z)("MuiSkeleton",t)}(0,b.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);let k=["animation","className","component","height","style","variant","width"],y=t=>t,C,_,S,R,N=t=>{let{classes:e,variant:n,animation:i,hasChildren:r,width:a,height:o}=t;return(0,x.Z)({root:["root",n,i,r&&"withChildren",r&&!a&&"fitContent",r&&!o&&"heightAuto"]},j,e)},$=(0,g.F4)(C||(C=y`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),B=(0,g.F4)(_||(_=y`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),E=(0,v.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver(t,e){let{ownerState:n}=t;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{let n=(0,m.Wy)(t.shape.borderRadius)||"px",i=(0,m.YL)(t.shape.borderRadius);return(0,c.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,f.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${n}/${Math.round(i/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>"pulse"===t.animation&&(0,g.iv)(S||(S=y`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),$),({ownerState:t,theme:e})=>"wave"===t.animation&&(0,g.iv)(R||(R=y`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),B,(e.vars||e).palette.action.hover)),F=u.forwardRef(function(t,e){let n=(0,w.Z)({props:t,name:"MuiSkeleton"}),{animation:r="pulse",className:a,component:o="span",height:s,style:l,variant:d="text",width:u}=n,g=(0,h.Z)(n,k),x=(0,c.Z)({},n,{animation:r,component:o,variant:d,hasChildren:Boolean(g.children)}),m=N(x);return(0,i.jsx)(E,(0,c.Z)({as:o,ref:e,className:(0,p.Z)(m.root,a),ownerState:x},g,{style:(0,c.Z)({width:u,height:s},l)}))});var P=n(5675),X=n.n(P),M=n(1664),A=n.n(M);let L=t=>{let{src:e,width:n,quality:i}=t;return"https://api.loiheng.duckdns.org".concat(e,"?q=").concat(i||75)},T=()=>{let{data:t,error:e,isValidating:n}=(0,r.Z)(),[h,c]=u.useState();return u.useEffect(()=>{t&&c(t.data)},[t,c]),(0,i.jsx)(a.Z,{sx:{py:2},children:(0,i.jsxs)(o.Z,{maxWidth:"lg",children:[(0,i.jsx)(s.Z,{variant:"h6",children:"Brands"}),(0,i.jsxs)(s.Z,{variant:"body2",children:["Show all (",null==h?void 0:h.brands.length,") results."]}),(0,i.jsx)(l.ZP,{container:!0,spacing:2,sx:{py:2},columns:15,children:null==h?void 0:h.brands.map((t,e)=>(0,i.jsx)(l.ZP,{item:!0,xs:7,md:3,children:(0,i.jsx)(a.Z,{sx:{width:"100%",height:"120px",position:"relative",border:"1px solid ".concat(d.Z[300]),"&:hover":{boxShadow:1,transition:"0.5s",transitionTimingFunction:"ease-in-out"}},children:t.picture?(0,i.jsx)(A(),{href:"/product?brands=".concat(t.id),children:(0,i.jsx)(X(),{loader:L,src:t.picture,alt:"Brand Image",fill:!0,style:{objectFit:"contain",padding:"4px"},sizes:"(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"})}):(0,i.jsx)(F,{variant:"rectangular",animation:"wave",width:"100%",height:"400px"})})},e))})]})})};var H=n(6175),O=n(9008),W=n.n(O);let q=()=>(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(W(),{children:[(0,i.jsx)("title",{children:"Loi Heng | Brands"}),(0,i.jsx)("meta",{name:"description",content:"Loi Heng Brands"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(T,{})]});q.getLayout=function(t){return(0,i.jsx)(H.Z,{children:t})};var z=q},6175:function(t,e,n){"use strict";var i=n(5893),r=n(1794),a=n(8854),o=n(7063),s=n(2734),l=n(7357);n(7294);let d=t=>{let{children:e}=t;return(0,s.Z)(),(0,i.jsxs)(l.Z,{width:"100%",height:"100%",children:[(0,i.jsx)(a.Z,{}),(0,i.jsx)(o.Z,{}),(0,i.jsx)(l.Z,{minHeight:"100vh",children:e}),(0,i.jsx)(r.Z,{})]})};e.Z=d},7448:function(t,e,n){"use strict";var i=n(8100),r=n(7860);let a=()=>{let t=(0,i.ZP)(["".concat("https://api.loiheng.duckdns.org/api/","brands?limit=1000")],r.Z);return t};e.Z=a}},function(t){t.O(0,[9718,1890,9774,2888,179],function(){return t(t.s=3635)}),_N_E=t.O()}]);