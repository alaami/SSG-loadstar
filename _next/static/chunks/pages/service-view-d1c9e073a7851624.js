(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{6062:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/service-view",function(){return t(95566)}])},87607:function(e,r,t){"use strict";t.d(r,{Z:function(){return N}});var i=t(85893),n=t(67294),o=t(49837),a=t(29630),s=t(9144),c=t(70918),l=t(30120),d=t(32793),u=t(1048),h=t(86010),m=t(94780),v=t(81719),p=t(78884),f=t(36622),g=t(1588),x=t(34867);function b(e){return(0,x.Z)("MuiIcon",e)}(0,g.Z)("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Z=["baseClassName","className","color","component","fontSize"],j=(0,v.ZP)("span",{name:"MuiIcon",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,"inherit"!==t.color&&r[`color${(0,f.Z)(t.color)}`],r[`fontSize${(0,f.Z)(t.fontSize)}`]]}})((({theme:e,ownerState:r})=>({userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,fontSize:{inherit:"inherit",small:e.typography.pxToRem(20),medium:e.typography.pxToRem(24),large:e.typography.pxToRem(36)}[r.fontSize],color:{primary:(e.vars||e).palette.primary.main,secondary:(e.vars||e).palette.secondary.main,info:(e.vars||e).palette.info.main,success:(e.vars||e).palette.success.main,warning:(e.vars||e).palette.warning.main,action:(e.vars||e).palette.action.active,error:(e.vars||e).palette.error.main,disabled:(e.vars||e).palette.action.disabled,inherit:void 0}[r.color]}))),S=n.forwardRef((function(e,r){const t=(0,p.Z)({props:e,name:"MuiIcon"}),{baseClassName:n="material-icons",className:o,color:a="inherit",component:s="span",fontSize:c="medium"}=t,l=(0,u.Z)(t,Z),v=(0,d.Z)({},t,{baseClassName:n,color:a,component:s,fontSize:c}),g=(e=>{const{color:r,fontSize:t,classes:i}=e,n={root:["root","inherit"!==r&&`color${(0,f.Z)(r)}`,`fontSize${(0,f.Z)(t)}`]};return(0,m.Z)(n,b,i)})(v);return(0,i.jsx)(j,(0,d.Z)({as:s,className:(0,h.Z)(n,"notranslate",g.root,o),ownerState:v,"aria-hidden":!0,ref:r},l))}));S.muiName="Icon";var y=S,w=t(62097),_=function(e){var r=(0,w.Z)(),t=e.service,n=e.bgcolor;return(0,i.jsx)(s.Z,{children:(0,i.jsxs)(o.Z,{sx:{padding:1,height:420,backgroundColor:r.palette.thirdly.main},elevation:0,children:[(0,i.jsxs)(c.Z,{sx:{width:"80%",margin:"auto",marginBottom:1,textAlign:"center",height:150,backgroundColor:r.palette.thirdly.main},elevation:0,children:[(0,i.jsx)("h2",{id:"h2service",children:t.attributes.title}),(0,i.jsx)(a.Z,{variant:"body2",color:"text.secondary",children:t.attributes.description})]}),(0,i.jsx)(l.Z,{sx:{width:"15rem",height:"15rem",margin:"auto",backgroundColor:n,borderRadius:"50%",display:"flex"},children:(0,i.jsx)(l.Z,{sx:{border:3,borderColor:r.palette.thirdly.main,width:"14rem",height:"14rem",backgroundColor:n,borderRadius:"50%",margin:"auto",marginTop:"0.3rem",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsx)(y,{sx:{fontSize:"150px !important"},children:t.attributes.icon})})})]})})},k=t(79072),N=function(e){var r=e.homeServices,t=e.bgColor;return(0,i.jsx)(i.Fragment,{children:void 0==r?(0,i.jsx)("h2",{children:"Loading"}):void 0!=r&&r.map((function(e){return(0,i.jsx)(k.ZP,{item:!0,xs:12,md:6,children:(0,i.jsx)(_,{service:e,bgcolor:t},"service__".concat(e.attributes.slug))},"service__".concat(e.attributes.slug))}))})}},95566:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return f},default:function(){return g}});var i=t(41799),n=t(85893),o=t(67294),a=t(91435),s=t(9144),c=t(69647),l=t(79072),d=t(27689),u=t(11163),h=t(79548),m=t(62097),v=t(87607),p=function(e){var r=(0,o.useContext)(h.OO).i18n.language,t=(0,u.useRouter)().pathname,i=e.servicesPage.filter((function(e){return e.attributes.locale==r})),p=(0,m.Z)(),f="";void 0!=i&&(f=i[0].attributes.cover.data.attributes.url);var g=e.serviceViewServices.data.filter((function(e){return e.attributes.locale==r}));return(0,n.jsx)("div",{className:"App",children:void 0==i?(0,n.jsxs)("h1",{children:["Loading Page ",t]}):void 0!=i&&(0,n.jsx)(s.Z,{children:(0,n.jsxs)(d.Nz,{elevation:0,children:[(0,n.jsx)(c.Z,{className:"uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin",image:f,title:i[0].attributes.title,sx:{height:600},children:(0,n.jsx)(d.yb,{children:(0,n.jsx)(d.Mf,{children:(0,n.jsx)("h1",{children:i[0].attributes.title})})})}),(0,n.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(l.ZP,{item:!0,xs:12,md:12,spacing:2,sx:{padding:10},children:(0,n.jsx)(a.D,{children:i[0].attributes.blocks[1].body})},"content__body"),(0,n.jsx)(l.ZP,{sx:{display:"flex",alignContent:"space-around"},container:!0,spacing:20,children:(0,n.jsx)(v.Z,{homeServices:g,bgColor:p.palette.secondary.main})})]})]})})})};var f=!0,g=function(e){var r={servicesPage:e.servicesPage,serviceViewServices:e.serviceViewServices};return(0,n.jsx)(p,(0,i.Z)({},r))}}},function(e){e.O(0,[833,774,888,179],(function(){return r=6062,e(e.s=r);var r}));var r=e.O();_N_E=r}]);