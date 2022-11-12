"use strict";(self.webpackChunkmy_shop=self.webpackChunkmy_shop||[]).push([[801],{94369:(k,M,n)=>{n.r(M),n.d(M,{default:()=>tn});var e=n(67294),i=n(68547),b=n(23724),P=n(27361),X=n.n(P);const C={i8:"4.4.6"};var $=n(78143),p=n(49656),N=n(37424),D=n(99168),K=n(61080),F=n(38914),G=n.n(F),O=n(64729),T=n(78384),U=n(45697),r=n.n(U),d=n(97132),v=n(59471),E=n(24824),f=n(67826),R=n(5493),J=n(9008),Ne=n(30741),re=n(19408),Ge=n(84040),Ue=n.n(Ge);const Fe=(0,T.default)(f.Flex)`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
`,ie=({onClose:t,onSkip:a,children:o,hideSkip:s})=>{const{formatMessage:u}=(0,d.useIntl)();return e.createElement(v.Portal,null,e.createElement(Fe,{onClick:t,padding:8,justifyContent:"center"},e.createElement(E.FocusTrap,{onEscape:t},e.createElement(J.Stack,{background:"neutral0",width:(0,i.pxToRem)(660),shadow:"popupShadow",hasRadius:!0,padding:4,spacing:8,role:"dialog","aria-modal":!0,onClick:l=>l.stopPropagation()},e.createElement(f.Flex,{justifyContent:"flex-end"},e.createElement(Ne.IconButton,{onClick:t,"aria-label":u({id:"app.utils.close-label",defaultMessage:"Close"}),icon:e.createElement(Ue(),null)})),e.createElement(R.Box,{paddingLeft:7,paddingRight:7,paddingBottom:s?8:0},o),!s&&e.createElement(f.Flex,{justifyContent:"flex-end"},e.createElement(re.Button,{variant:"tertiary",onClick:a},u({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})))))))};ie.propTypes={children:r().node.isRequired,onClose:r().func.isRequired,onSkip:r().func.isRequired,hideSkip:r().bool.isRequired};const We=ie;var le=n(73749);const de={stepContent:null,sectionIndex:null,stepIndex:null,hasSectionAfter:!1,hasStepAfter:!1},je=(t=de,a)=>(0,le.default)(t,o=>{switch(a.type){case"UPDATE_MODAL":{o.stepContent=a.content,o.sectionIndex=a.newSectionIndex,o.stepIndex=a.newStepIndex,o.hasSectionAfter=a.newHasSectionAfter,o.hasStepAfter=a.newHasStepAfter;break}default:return o}});var S=n(49425),$e=n(77602),ce=n.n($e);const Ke=T.default.li`
  list-style: disc;
`,pe=({id:t,defaultMessage:a})=>{const{formatMessage:o}=(0,d.useIntl)();return e.createElement(J.Stack,{spacing:4,paddingBottom:6},o({id:t,defaultMessage:a},{documentationLink:s=>e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"},s),b:s=>e.createElement(S.Typography,{fontWeight:"semiBold"},s),p:s=>e.createElement(S.Typography,null,s),light:s=>e.createElement(S.Typography,{textColor:"neutral600"},s),ul:s=>e.createElement(R.Box,{paddingLeft:6},e.createElement("ul",null,s)),li:s=>e.createElement(Ke,null,s)}))};pe.propTypes={id:r().string.isRequired,defaultMessage:r().string.isRequired};const Ve=pe;var w=n(89285),ze=n(96392);const q=({number:t,last:a,type:o})=>e.createElement(R.Box,{paddingTop:3,paddingBottom:a?0:3},e.createElement(ze.Z,{number:t,type:o}));q.defaultProps={number:void 0,last:!1,type:""},q.propTypes={number:r().number,last:r().bool,type:r().string};const ue=q;var W=n(99872),He=Object.defineProperty,me=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,ge=(t,a,o)=>a in t?He(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,Qe=(t,a)=>{for(var o in a||(a={}))ke.call(a,o)&&ge(t,o,a[o]);if(me)for(var o of me(a))Ze.call(a,o)&&ge(t,o,a[o]);return t};const _=({title:t,content:a,cta:o,onCtaClick:s,sectionIndex:u,stepIndex:l,hasSectionAfter:h})=>{const{formatMessage:y}=(0,d.useIntl)(),g=u>0,c=l>0,I=u+1;return e.createElement(e.Fragment,null,e.createElement(f.Flex,{alignItems:"stretch"},e.createElement(f.Flex,{marginRight:8,justifyContent:"center",minWidth:(0,i.pxToRem)(30)},g&&e.createElement(w.Z,{type:W.hx,minHeight:(0,i.pxToRem)(24)})),e.createElement(S.Typography,{variant:"sigma",textColor:"primary600"},y({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"}))),e.createElement(f.Flex,null,e.createElement(f.Flex,{marginRight:8,minWidth:(0,i.pxToRem)(30)},e.createElement(ue,{number:u+1,type:c?W.hx:W.lW})),e.createElement(S.Typography,{variant:"alpha",fontWeight:"bold",textColor:"neutral800",as:"h3",id:"title"},y(t))),e.createElement(f.Flex,{alignItems:"stretch"},e.createElement(f.Flex,{marginRight:8,direction:"column",justifyContent:"center",minWidth:(0,i.pxToRem)(30)},h&&e.createElement(e.Fragment,null,e.createElement(w.Z,{type:W.hx}),c&&e.createElement(ue,{number:I+1,type:W.lW,last:!0}))),e.createElement(R.Box,null,e.createElement(Ve,Qe({},a)),o&&(o.target?e.createElement(i.LinkButton,{endIcon:e.createElement(ce(),null),onClick:s,to:o.target},y(o.title)):e.createElement(re.Button,{endIcon:e.createElement(ce(),null),onClick:s},y(o.title))))),c&&h&&e.createElement(R.Box,{paddingTop:3},e.createElement(f.Flex,{marginRight:8,justifyContent:"center",width:(0,i.pxToRem)(30)},e.createElement(w.Z,{type:W.hx,minHeight:(0,i.pxToRem)(24)}))))};_.defaultProps={currentStep:null,cta:void 0},_.propTypes={sectionIndex:r().number.isRequired,stepIndex:r().number.isRequired,hasSectionAfter:r().bool.isRequired,content:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired}).isRequired,cta:r().shape({target:r().string,title:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired})}),currentStep:r().string,onCtaClick:r().func.isRequired,title:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired}).isRequired};const Ye=_;var Xe=Object.defineProperty,Je=Object.defineProperties,we=Object.getOwnPropertyDescriptors,fe=Object.getOwnPropertySymbols,qe=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,he=(t,a,o)=>a in t?Xe(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,et=(t,a)=>{for(var o in a||(a={}))qe.call(a,o)&&he(t,o,a[o]);if(fe)for(var o of fe(a))_e.call(a,o)&&he(t,o,a[o]);return t},tt=(t,a)=>Je(t,we(a));const nt=()=>{const{currentStep:t,guidedTourState:a,setCurrentStep:o,setStepState:s,isGuidedTourVisible:u,setSkipped:l}=(0,i.useGuidedTour)(),[h,y]=(0,e.useState)(t),[{stepContent:g,sectionIndex:c,stepIndex:I,hasSectionAfter:B,hasStepAfter:V},z]=(0,e.useReducer)(je,de),{trackUsage:j}=(0,i.useTracking)();(0,e.useEffect)(()=>{if(!t){y(!1);return}const[L]=G()(a,t);y(!L&&u)},[t,a,u]),(0,e.useEffect)(()=>{if(t){const[L]=G()(O.Z,t),H=Object.keys(a),[Q,ae]=t.split("."),Y=H.indexOf(Q),oe=Object.keys(a[Q]).indexOf(ae),se=Y<H.length-1,nn=oe<Object.keys(a[Q]).length-1;z({type:"UPDATE_MODAL",content:L,newSectionIndex:Y,newStepIndex:oe,newHasSectionAfter:se,newHasStepAfter:nn})}},[t,a]);const m=()=>{s(t,!0),j(g.trackingEvent),o(null)},x=()=>{l(!0),o(null),j("didSkipGuidedtour")};return h&&g?e.createElement(We,{hideSkip:!V&&!B,onSkip:x,onClose:m},e.createElement(Ye,tt(et({},g),{onCtaClick:m,currentStep:t,sectionIndex:c,stepIndex:I,hasSectionAfter:B}))):null};var at=n(14276),A=n(80244),ot=n(33957),st=n.n(ot),rt=n(96026),it=n.n(rt),lt=n(87569);const dt=(0,T.default)(R.Box)`
  width: ${150/16}rem;
  position: absolute;
  bottom: ${({theme:t})=>t.spaces[9]};
  left: ${({theme:t})=>t.spaces[5]};
`,Ee=(0,T.default)(p.NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  border-radius: ${({theme:t})=>t.spaces[1]};

  &:hover {
    background: ${({theme:t,logout:a})=>a?t.colors.danger100:t.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({theme:t})=>t.colors.danger600};
    }
  }
`,ye=({generalSectionLinks:t,pluginsSectionLinks:a})=>{const o=(0,e.useRef)(),[s,u]=(0,e.useState)(!1),{logos:{menu:l}}=(0,lt.Z)(),[h,y]=(0,i.usePersistentState)("navbar-condensed",!1),{userDisplayName:g}=(0,i.useAppInfos)(),{formatMessage:c}=(0,d.useIntl)(),I=g.split(" ").map(m=>m.substring(0,1)).join("").substring(0,2),B=()=>u(m=>!m),V=()=>{i.auth.clearAppStorage(),B()},z=m=>{var x,L;!m.currentTarget.contains(m.relatedTarget)&&((L=(x=m.relatedTarget)==null?void 0:x.parentElement)==null?void 0:L.id)!=="main-nav-user-button"&&u(!1)},j=c({id:"app.components.LeftMenu.navbrand.title",defaultMessage:"Strapi Dashboard"});return e.createElement(A.MainNav,{condensed:h},e.createElement(A.NavBrand,{as:p.NavLink,workplace:c({id:"app.components.LeftMenu.navbrand.workplace",defaultMessage:"Workplace"}),title:j,icon:e.createElement("img",{src:l.custom||l.default,alt:c({id:"app.components.LeftMenu.logo.alt",defaultMessage:"Application logo"})})}),e.createElement(at.Divider,null),e.createElement(A.NavSections,null,e.createElement(A.NavLink,{as:p.NavLink,to:"/content-manager",icon:e.createElement(st(),null)},c({id:"global.content-manager",defaultMessage:"Content manager"})),a.length>0?e.createElement(A.NavSection,{label:c({id:"app.components.LeftMenu.plugins",defaultMessage:"Plugins"})},a.map(m=>{const x=m.icon;return e.createElement(A.NavLink,{as:p.NavLink,to:m.to,key:m.to,icon:e.createElement(x,null)},c(m.intlLabel))})):null,t.length>0?e.createElement(A.NavSection,{label:c({id:"app.components.LeftMenu.general",defaultMessage:"General"})},t.map(m=>{const x=m.icon;return e.createElement(A.NavLink,{as:p.NavLink,badgeContent:m.notificationsCount>0&&m.notificationsCount.toString()||void 0,to:m.to,key:m.to,icon:e.createElement(x,null)},c(m.intlLabel))})):null),e.createElement(A.NavUser,{id:"main-nav-user-button",ref:o,onClick:B,initials:I},g),s&&e.createElement(dt,{onBlur:z,padding:1,shadow:"tableShadow",background:"neutral0",hasRadius:!0},e.createElement(E.FocusTrap,{onEscape:B},e.createElement(J.Stack,{spacing:0},e.createElement(Ee,{tabIndex:0,onClick:B,to:"/me"},e.createElement(S.Typography,null,c({id:"global.profile",defaultMessage:"Profile"}))),e.createElement(Ee,{tabIndex:0,onClick:V,logout:"logout",to:"/auth/login"},e.createElement(S.Typography,{textColor:"danger600"},c({id:"app.components.LeftMenu.logout",defaultMessage:"Logout"})),e.createElement(it(),null))))),e.createElement(A.NavCondense,{onClick:()=>y(m=>!m)},c(h?{id:"app.components.LeftMenu.expand",defaultMessage:"Expand the navbar"}:{id:"app.components.LeftMenu.collapse",defaultMessage:"Collapse the navbar"})))};ye.propTypes={generalSectionLinks:r().array.isRequired,pluginsSectionLinks:r().array.isRequired};const ct=ye;var pt=n(62031);const ut=(0,T.default)(R.Box)`
  flex: 1;
`,ve=({children:t,sideNav:a})=>{const{formatMessage:o}=(0,d.useIntl)();return e.createElement(R.Box,{background:"neutral100"},e.createElement(pt.SkipToContent,null,o({id:"skipToContent",defaultMessage:"Skip to content"})),e.createElement(f.Flex,{alignItems:"flex-start"},a,e.createElement(ut,null,t)))};ve.propTypes={children:r().node.isRequired,sideNav:r().node.isRequired};const mt=ve;var Te=n(8610),gt=n(36657),ee=n(67814),Pe=n(1200);const ft=(0,T.default)(R.Box)`
  position: fixed;
  bottom: ${({theme:t})=>t.spaces[2]};
  right: ${({theme:t})=>t.spaces[2]};
`,ht=T.default.button`
  width: ${({theme:t})=>t.spaces[8]};
  height: ${({theme:t})=>t.spaces[8]};
  background: ${({theme:t})=>t.colors.primary600};
  box-shadow: ${({theme:t})=>t.shadows.tableShadow};
  border-radius: 50%;
  svg {
    color: ${({theme:t})=>t.colors.buttonNeutral0};
  }
`,Et=(0,T.default)(R.Box)`
  position: absolute;
  bottom: ${({theme:t})=>`${t.spaces[9]}`};
  right: 0;
  width: ${200/16}rem;
`,yt=T.default.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>t.spaces[2]};
  padding-left: ${({theme:t})=>t.spaces[5]};

  svg {
    color: ${({theme:t})=>t.colors.neutral600};
    margin-right: ${({theme:t})=>t.spaces[2]};
  }

  &:hover {
    background: ${({theme:t})=>t.colors.neutral100};
    color: ${({theme:t})=>t.colors.neutral500};

    svg {
      color: ${({theme:t})=>t.colors.neutral700};
    }

    ${[S.Typography]} {
      color: ${({theme:t})=>t.colors.neutral700};
    }
  }

  ${[S.Typography]} {
    color: ${({theme:t})=>t.colors.neutral600};
  }
`,vt=()=>{const[t,a]=(0,e.useState)(!1),{formatMessage:o}=(0,d.useIntl)(),{showTutorials:s}=(0,$.um)();if(!s)return null;const u=[{icon:"book",label:o({id:"global.documentation",defaultMessage:"Documentation"}),destination:"https://docs.strapi.io"},{icon:"file",label:o({id:"app.static.links.cheatsheet",defaultMessage:"CheatSheet"}),destination:"https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf"}],l=()=>{a(h=>!h)};return e.createElement(ft,{as:"aside"},e.createElement(ht,{id:"onboarding","aria-label":o({id:"app.components.Onboarding.help.button",defaultMessage:"Help button"}),onClick:l},!t&&e.createElement(ee.G,{icon:Pe.faQuestion}),t&&e.createElement(ee.G,{icon:Pe.faTimes})),t&&e.createElement(E.FocusTrap,{onEscape:l},e.createElement(Et,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingBottom:2,paddingTop:2},u.map(h=>e.createElement(yt,{key:h.label,rel:"nofollow noreferrer noopener",target:"_blank",href:h.destination},e.createElement(ee.G,{icon:h.icon}),e.createElement(S.Typography,null,h.label))))))},Tt=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(7909),n.e(596),n.e(8704),n.e(8845),n.e(994)]).then(n.bind(n,77064))),Pt=(0,e.lazy)(()=>Promise.all([n.e(791),n.e(3981)]).then(n.bind(n,36717))),Mt=(0,e.lazy)(()=>n.e(3677).then(n.bind(n,14928))),Ct=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(5516)]).then(n.bind(n,51188))),Me=(0,e.lazy)(()=>Promise.resolve().then(n.bind(n,23330))),Ot=(0,e.lazy)(()=>n.e(9501).then(n.bind(n,17502))),Rt=(0,e.lazy)(()=>n.e(9497).then(n.bind(n,50166))),Ce=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(7909),n.e(596),n.e(5157),n.e(5895)]).then(n.bind(n,93500))),St=()=>{const{trackUsage:t}=(0,i.useTracking)(),a=(0,N.useDispatch)(),o=(0,N.useSelector)(s=>s.admin_app.status);(0,e.useEffect)(()=>{o==="init"&&(t("didAccessAuthenticatedAdministration"),a({type:gt.e}))},[o])},At=()=>{St();const{isLoading:t,generalSectionLinks:a,pluginsSectionLinks:o}=(0,$.H9)(),{menu:s}=(0,i.useStrapiApp)(),u=(0,e.useMemo)(()=>s.filter(l=>l.Component).map(({to:l,Component:h,exact:y})=>(0,Te.ot)(h,l,y)),[s]);return t?e.createElement(i.LoadingIndicatorPage,null):e.createElement(D.DndProvider,{backend:K.PD},e.createElement(mt,{sideNav:e.createElement(ct,{generalSectionLinks:a,pluginsSectionLinks:o})},e.createElement(e.Suspense,{fallback:e.createElement(i.LoadingIndicatorPage,null)},e.createElement(p.Switch,null,e.createElement(p.Route,{path:"/",component:Pt,exact:!0}),e.createElement(p.Route,{path:"/me",component:Rt,exact:!0}),e.createElement(p.Route,{path:"/content-manager",component:Tt}),u,e.createElement(p.Route,{path:"/settings/:settingId",component:Ce}),e.createElement(p.Route,{path:"/settings",component:Ce,exact:!0}),e.createElement(p.Route,{path:"/marketplace"},e.createElement(Ct,null)),e.createElement(p.Route,{path:"/list-plugins",exact:!0},e.createElement(Mt,null)),e.createElement(p.Route,{path:"/404",component:Me}),e.createElement(p.Route,{path:"/500",component:Ot}),e.createElement(p.Route,{path:"",component:Me}))),e.createElement(nt,null),e.createElement(vt,null)))};var It=Object.defineProperty,Oe=Object.getOwnPropertySymbols,xt=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable,Re=(t,a,o)=>a in t?It(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,Dt=(t,a)=>{for(var o in a||(a={}))xt.call(a,o)&&Re(t,o,a[o]);if(Oe)for(var o of Oe(a))Lt.call(a,o)&&Re(t,o,a[o]);return t};const Bt=t=>({plugins:Object.keys(t).reduce((a,o)=>(a[o]=Dt({},t[o]),a),{})});var bt=n(36968),Nt=n.n(bt);const Se={plugins:null},Gt=(t=Se,a)=>(0,le.default)(t,o=>{switch(a.type){case"SET_PLUGIN_READY":{Nt()(o,["plugins",a.pluginId,"isReady"],!0);break}default:return o}}),Ut=()=>{const{plugins:t}=(0,i.useStrapiApp)(),[{plugins:a},o]=(0,e.useReducer)(Gt,Se,()=>Bt(t)),s=(0,e.useRef)(l=>{o({type:"SET_PLUGIN_READY",pluginId:l})});if(Object.keys(a).some(l=>a[l].isReady===!1)){const l=Object.keys(a).reduce((h,y)=>{const g=a[y].initializer;if(g){const c=a[y].pluginId;h.push(e.createElement(g,{key:c,setPlugin:s.current}))}return h},[]);return e.createElement(e.Fragment,null,l,e.createElement(i.LoadingIndicatorPage,null))}return e.createElement(At,null)};var Ae=n(28344);const Ft=()=>({type:Ae.l}),Wt=t=>({type:Ae.m,permissions:t}),Ie=({children:t,permissions:a,refetchPermissions:o})=>{const{allPermissions:s}=(0,N.useSelector)(l=>l.rbacProvider),u=(0,N.useDispatch)();return(0,e.useEffect)(()=>(u(Wt(a)),()=>{u(Ft())}),[a,u]),s?e.createElement(i.RBACProviderContext.Provider,{value:{allPermissions:s,refetchPermissions:o}},t):e.createElement(i.LoadingIndicatorPage,null)};Ie.propTypes={children:r().element.isRequired,permissions:r().array.isRequired,refetchPermissions:r().func.isRequired};const jt=Ie;var $t=n(9669),Kt=n.n($t),Vt=n(81249),te=n.n(Vt);const xe=(t,a)=>!te().valid(t)||!te().valid(a)?!1:te().lt(t,a);var ne=n(23998),Z=(t,a,o)=>new Promise((s,u)=>{var l=g=>{try{y(o.next(g))}catch(c){u(c)}},h=g=>{try{y(o.throw(g))}catch(c){u(c)}},y=g=>g.done?s(g.value):Promise.resolve(g.value).then(l,h);y((o=o.apply(t,a)).next())});const Le=C.i8,zt=!JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF")),Ht=t=>Z(void 0,null,function*(){try{const{data:{tag_name:a}}=yield Kt().get("https://api.github.com/repos/strapi/strapi/releases/latest");return xe(Le,a)&&zt&&t({type:"info",message:{id:"notification.version.update.message"},link:{url:`https://github.com/strapi/strapi/releases/tag/${a}`,label:{id:"global.see-more"}},blockTransition:!0,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)}),a}catch(a){return Le}}),kt=()=>Z(void 0,null,function*(){try{const{data:t,headers:a}=yield ne.be.get("/admin/information");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}}),Zt=()=>Z(void 0,null,function*(){try{const{data:t,headers:a}=yield ne.be.get("/admin/users/me/permissions");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}}),Qt=()=>Z(void 0,null,function*(){try{const{data:{data:{roles:t}}}=yield ne.be.get("/admin/users/me");return t}catch(t){throw new Error(t)}});var Yt=Object.defineProperty,Xt=Object.defineProperties,Jt=Object.getOwnPropertyDescriptors,De=Object.getOwnPropertySymbols,wt=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable,Be=(t,a,o)=>a in t?Yt(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,_t=(t,a)=>{for(var o in a||(a={}))wt.call(a,o)&&Be(t,o,a[o]);if(De)for(var o of De(a))qt.call(a,o)&&Be(t,o,a[o]);return t},en=(t,a)=>Xt(t,Jt(a));const be=C.i8,tn=()=>{const{setGuidedTourVisibility:t}=(0,i.useGuidedTour)(),a=(0,i.useNotification)(),o=(0,e.useRef)(t),s=i.auth.getUserInfo(),u=X()(s,"username")||(0,Te.Pp)(s.firstname,s.lastname),[l,h]=(0,e.useState)(u),{showReleaseNotification:y}=(0,$.um)(),[{data:g,status:c},{data:I,isLoading:B},{data:V,status:z,refetch:j,isFetched:m,isFetching:x},{data:L}]=(0,b.useQueries)([{queryKey:"app-infos",queryFn:kt},{queryKey:"strapi-release",queryFn:()=>Ht(a),enabled:y,initialData:be},{queryKey:"admin-users-permission",queryFn:Zt,initialData:[]},{queryKey:"user-roles",queryFn:Qt}]),H=(0,e.useMemo)(()=>xe(be,I),[I]);(0,e.useEffect)(()=>{L&&L.find(({code:se})=>se==="strapi-super-admin")&&(g==null?void 0:g.autoReload)&&o.current(!0)},[L,g]);const ae=B||(x&&m||c==="loading"||z==="loading"),Y=(0,e.useMemo)(()=>en(_t({},g),{latestStrapiReleaseTag:I,setUserDisplayName:h,shouldUpdateStrapi:H,userDisplayName:l}),[g,I,H,l]);return ae?e.createElement(i.LoadingIndicatorPage,null):c==="error"?e.createElement("div",null,"error..."):e.createElement(i.AppInfosContext.Provider,{value:Y},e.createElement(jt,{permissions:V,refetchPermissions:j},e.createElement(Ut,null)))}},89285:(k,M,n)=>{n.d(M,{Z:()=>r});var e=n(67294),i=n(45697),b=n.n(i),P=n(68547),X=n.n(P),C=n(5493),$=n.n(C),p=n(99872),N=Object.defineProperty,D=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,G=(d,v,E)=>v in d?N(d,v,{enumerable:!0,configurable:!0,writable:!0,value:E}):d[v]=E,O=(d,v)=>{for(var E in v||(v={}))K.call(v,E)&&G(d,E,v[E]);if(D)for(var E of D(v))F.call(v,E)&&G(d,E,v[E]);return d},T=(d,v)=>{var E={};for(var f in d)K.call(d,f)&&v.indexOf(f)<0&&(E[f]=d[f]);if(d!=null&&D)for(var f of D(d))v.indexOf(f)<0&&F.call(d,f)&&(E[f]=d[f]);return E};const U=d=>{var v=d,{type:E}=v,f=T(v,["type"]);return e.createElement(C.Box,O({width:(0,P.pxToRem)(2),height:"100%",background:E===p.VM?"neutral300":"primary500",hasRadius:!0},f))};U.defaultProps={type:p.VM},U.propTypes={type:b().oneOf([p.lW,p.hx,p.VM])};const r=U},96392:(k,M,n)=>{n.d(M,{Z:()=>U});var e=n(67294),i=n(45697),b=n.n(i),P=n(68547),X=n.n(P),C=n(67826),$=n.n(C),p=n(49425),N=n.n(p),D=n(15804),K=n.n(D),F=n(84734),G=n.n(F),O=n(99872);const T=({type:r,number:d})=>r===O.hx?e.createElement(C.Flex,{background:"primary600",padding:2,borderRadius:"50%",width:(0,P.pxToRem)(30),height:(0,P.pxToRem)(30),justifyContent:"center"},e.createElement(D.Icon,{as:G(),"aria-hidden":!0,width:(0,P.pxToRem)(16),color:"neutral0"})):r===O.lW?e.createElement(C.Flex,{background:"primary600",padding:2,borderRadius:"50%",width:(0,P.pxToRem)(30),height:(0,P.pxToRem)(30),justifyContent:"center"},e.createElement(p.Typography,{fontWeight:"semiBold",textColor:"neutral0"},d)):e.createElement(C.Flex,{borderColor:"neutral500",borderWidth:"1px",borderStyle:"solid",padding:2,borderRadius:"50%",width:(0,P.pxToRem)(30),height:(0,P.pxToRem)(30),justifyContent:"center"},e.createElement(p.Typography,{fontWeight:"semiBold",textColor:"neutral600"},d));T.defaultProps={number:void 0,type:O.VM},T.propTypes={number:b().number,type:b().oneOf([O.lW,O.hx,O.VM])};const U=T},99872:(k,M,n)=>{n.d(M,{VM:()=>b,hx:()=>i,lW:()=>e});const e="isActive",i="isDone",b="isNotDone"},64729:(k,M,n)=>{n.d(M,{Z:()=>i});const i={contentTypeBuilder:{home:{title:{id:"app.components.GuidedTour.home.CTB.title",defaultMessage:"\u{1F9E0} Build the content structure"},cta:{title:{id:"app.components.GuidedTour.home.CTB.cta.title",defaultMessage:"Go to the Content type Builder"},type:"REDIRECT",target:"/plugins/content-type-builder"},trackingEvent:"didClickGuidedTourHomepageContentTypeBuilder"},create:{title:{id:"app.components.GuidedTour.CTB.create.title",defaultMessage:"\u{1F9E0} Create a first Collection type"},content:{id:"app.components.GuidedTour.CTB.create.content",defaultMessage:"<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"},cta:{title:{id:"app.components.GuidedTour.CTB.create.cta.title",defaultMessage:"Build a Collection type"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep1CollectionType"},success:{title:{id:"app.components.GuidedTour.CTB.success.title",defaultMessage:"Step 1: Completed \u2705"},content:{id:"app.components.GuidedTour.CTB.success.content",defaultMessage:"<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didCreateGuidedTourCollectionType"}},contentManager:{home:{title:{id:"app.components.GuidedTour.home.CM.title",defaultMessage:"\u26A1\uFE0F What would you like to share with the world?"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didClickGuidedTourHomepageContentManager"},create:{title:{id:"app.components.GuidedTour.CM.create.title",defaultMessage:"\u26A1\uFE0F Create content"},content:{id:"app.components.GuidedTour.CM.create.content",defaultMessage:"<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep2ContentManager"},success:{title:{id:"app.components.GuidedTour.CM.success.title",defaultMessage:"Step 2: Completed \u2705"},content:{id:"app.components.GuidedTour.CM.success.content",defaultMessage:"<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"},cta:{title:{id:"app.components.GuidedTour.CM.success.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didCreateGuidedTourEntry"}},apiTokens:{home:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},cta:{title:{id:"app.components.GuidedTour.home.apiTokens.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didClickGuidedTourHomepageApiTokens"},create:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},content:{id:"app.components.GuidedTour.apiTokens.create.content",defaultMessage:"<p>Generate an authentication token here and retrieve the content you just created.</p>"},cta:{title:{id:"app.components.GuidedTour.apiTokens.create.cta.title",defaultMessage:"Generate an API Token"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep3ApiTokens"},success:{title:{id:"app.components.GuidedTour.apiTokens.success.title",defaultMessage:"Step 3: Completed \u2705"},content:{id:"app.components.GuidedTour.apiTokens.success.content",defaultMessage:"<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"},trackingEvent:"didGenerateGuidedTourApiTokens"}}}}}]);
