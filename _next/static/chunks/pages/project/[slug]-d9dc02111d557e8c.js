(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[252],{44373:function(t,e,i){"use strict";var r=i(1048),n=i(32793),a=i(67294),o=i(86010),l=i(94780),s=i(41796),c=i(81719),d=i(78884),h=i(75741),u=i(85893);const g=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],v=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.root,i.absolute&&e.absolute,e[i.variant],i.light&&e.light,"vertical"===i.orientation&&e.vertical,i.flexItem&&e.flexItem,i.children&&e.withChildren,i.children&&"vertical"===i.orientation&&e.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignLeft]}})((({theme:t,ownerState:e})=>(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,s.Fq)(t.palette.divider,.08)},"inset"===e.variant&&{marginLeft:72},"middle"===e.variant&&"horizontal"===e.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===e.variant&&"vertical"===e.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===e.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:t,ownerState:e})=>(0,n.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:t,ownerState:e})=>(0,n.Z)({},e.children&&"vertical"===e.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(t.vars||t).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:t})=>(0,n.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),p=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.wrapper,"vertical"===i.orientation&&e.wrapperVertical]}})((({theme:t,ownerState:e})=>(0,n.Z)({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},"vertical"===e.orientation&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}))),m=a.forwardRef((function(t,e){const i=(0,d.Z)({props:t,name:"MuiDivider"}),{absolute:a=!1,children:s,className:c,component:m=(s?"div":"hr"),flexItem:f=!1,light:x=!1,orientation:b="horizontal",role:j=("hr"!==m?"separator":void 0),textAlign:w="center",variant:Z="fullWidth"}=i,S=(0,r.Z)(i,g),_=(0,n.Z)({},i,{absolute:a,component:m,flexItem:f,light:x,orientation:b,role:j,textAlign:w,variant:Z}),A=(t=>{const{absolute:e,children:i,classes:r,flexItem:n,light:a,orientation:o,textAlign:s,variant:c}=t,d={root:["root",e&&"absolute",c,a&&"light","vertical"===o&&"vertical",n&&"flexItem",i&&"withChildren",i&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.Z)(d,h.V,r)})(_);return(0,u.jsx)(v,(0,n.Z)({as:m,className:(0,o.Z)(A.root,c),role:j,ref:e,ownerState:_},S,{children:s?(0,u.jsx)(p,{className:A.wrapper,ownerState:_,children:s}):null}))}));e.Z=m},50533:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[slug]",function(){return i(64407)}])},64407:function(t,e,i){"use strict";i.r(e),i.d(e,{__N_SSG:function(){return x},default:function(){return b}});var r=i(41799),n=i(85893),a=i(67294),o=i(70918),l=i(79072),s=i(75084),c=i(44373),d=i(9144),h=i(29630),u=i(91435),g=i(27689),v=i(11163),p=i(79548),m=i(62097),f=function(t){var e=(0,a.useContext)(p.OO).i18n.language,i=((0,v.useRouter)(),t.projectDetails.filter((function(t){return t.attributes.locale==e})));void 0!=i&&i[0].attributes.image.data.attributes.url;var r=(0,m.Z)();return(0,n.jsx)(d.Z,{children:void 0==i?(0,n.jsx)("h1",{children:"Loading project details..."}):void 0!=i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.Mt,{children:(0,n.jsx)(l.ZP,{container:!0,children:(0,n.jsx)(l.ZP,{item:!0,md:12,children:(0,n.jsx)(g.jc,{image:i[0].attributes.cover.data.attributes.url,children:(0,n.jsx)(g.yb,{children:(0,n.jsx)(g.Mf,{children:(0,n.jsx)(h.Z,{variant:"h2",component:"div",align:"center",gutterBottom:!0,children:i[0].attributes.title})})})})})})}),(0,n.jsx)(l.ZP,{container:!0,spacing:4,children:void 0!=i[0].attributes.blocks[1]&&null!=i[0].attributes.blocks[1].files.data&&i[0].attributes.blocks[1].files.data.map((function(t){return(0,n.jsx)(l.ZP,{item:!0,xs:12,md:4,children:(0,n.jsx)(g.rg,{elevation:0,children:(0,n.jsx)(g.t5,{children:(0,n.jsx)(g.qJ,{image:t.attributes.url})})})},t.attributes.name)}))}),(0,n.jsxs)(g.EF,{container:!0,spacing:4,children:[(0,n.jsxs)(l.ZP,{item:!0,xs:12,md:8,children:[(0,n.jsx)(h.Z,{variant:"h6",gutterBottom:!0,children:i[0].attributes.title}),(0,n.jsx)(c.Z,{}),(0,n.jsx)(u.D,{children:void 0!=i[0].attributes.blocks[0]?i[0].attributes.blocks[0].body:""})]}),(0,n.jsxs)(l.ZP,{item:!0,xs:12,md:4,children:[(0,n.jsxs)(o.Z,{sx:{bgcolor:r.palette.thirdly.main},elevation:0,children:[(0,n.jsx)(h.Z,{variant:"h6",gutterBottom:!0,children:"About"}),(0,n.jsx)(h.Z,{children:i[0].attributes.description})]}),(0,n.jsx)(h.Z,{variant:"h6",gutterBottom:!0,children:"Technos"}),void 0!=i[0].attributes.blocks[2]&&i[0].attributes.blocks[2].buttons.map((function(t){return(0,n.jsx)(s.Z,{sx:{marginLeft:1,marginTop:1},variant:"contained",color:"secondary",children:t.title},t.title)}))]})]})]})})};var x=!0,b=function(t){var e={projectDetails:t.projectDetails};return(0,n.jsx)(f,(0,r.Z)({},e))}}},function(t){t.O(0,[833,774,888,179],(function(){return e=50533,t(t.s=e);var e}));var e=t.O();_N_E=e}]);