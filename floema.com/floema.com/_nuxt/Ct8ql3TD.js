import{_ as h,a1 as B,v as H,k as I,a as x,o as v,b as c,d as o,g as s,t as f,r as C,F as P,C as T,e as m,ag as j,aa as b,s as E,O as y,h as e,Y as F,a0 as N,u as z,X as V,a2 as q,a3 as D,m as w,f as M,a4 as O,a5 as Q,a6 as R,p as U,L as X}from"./Cz0xhMSq.js";import{u as Y}from"./DPa-uIXH.js";import{F as G}from"./BiOVltcX.js";import{h as J}from"./DOTWEdil.js";const K={class:"g-row title-row"},W={class:"g-col xxl-9 xxl-offset-9 md-16 md-offset-7 sm-20 sm-offset-4 xs-offset-2 xs-22"},Z={class:"-title-3-medium title"},ee={class:"g-row subtitle-row"},te={class:"xxl-9 xxl-offset-9 md-16 md-offset-7 sm-20 sm-offset-4 xs-offset-2 xs-22 g-col"},ae={class:"-title-8-medium subtitle"},se={__name:"Header",props:{title:{type:[Boolean,String],default:!1},subtitle:{type:[Boolean,String],default:!1}},setup(t){const{locale:a}=B();H();const n=I("pageContext"),d=C(null),r=()=>{d.value},p=()=>{};return x(()=>{}),v(()=>{n.$page.loader.loaded.then(()=>r()),n.$page.loader.ready.then(()=>p())}),(u,i)=>(o(),c("header",{ref_key:"el",ref:d,"data-component":"legal-header"},[s("div",K,[s("div",W,[s("h1",Z,f(t.title),1)])]),s("div",ee,[s("div",te,[s("h2",ae,f(t.subtitle),1)])])],512))}},oe=h(se,[["__scopeId","data-v-41c3a4aa"]]),ne={class:"g-row content-row"},le={class:"xxl-9 xxl-offset-9 md-16 md-offset-7 sm-20 sm-offset-4 xs-offset-2 xs-22 g-col"},re={class:"content"},ce={key:0,class:"-body-medium left-title"},ie={key:1,class:"-body-medium left-title"},de={__name:"Content",props:{content:{type:[Boolean,Array],default:!1}},setup(t){const a={marks:{externalLink:b,internalLink:b}},n=r=>`${String(r+1).padStart(2,"0")}.`,d=C(null);return x(()=>{}),v(()=>{}),(r,p)=>{const u=j;return o(),c("section",{ref_key:"el",ref:d,"data-component":"legal-content"},[s("div",ne,[s("div",le,[s("div",re,[(o(!0),c(P,null,T(t.content,(i,_)=>(o(),c("div",{key:_,class:"block"},[i.leftTitle?(o(),c("p",ce,f(i.leftTitle),1)):(o(),c("p",ie,f(n(_)),1)),m(u,{blocks:i.textBlock,serializers:a},null,8,["blocks"])]))),128))])])])],512)}}},ue=h(de,[["__scopeId","data-v-7258e733"]]),_e={"data-component":"legal-page",class:"inner-page"},me={__name:"Legal",props:{metadata:{type:[Boolean,Object],default:!1},sections:{type:[Boolean,Array],default:!1}},setup(t){return E(),x(()=>{}),v(()=>{}),(a,n)=>(o(),c("div",_e,[m(e(oe),y(t.sections[0],{"data-section-intersect":"dark"}),null,16),s("main",null,[m(e(ue),y(t.sections[1],{"data-section-intersect":"dark"}),null,16)]),m(e(G))]))}},fe=h(me,[["__scopeId","data-v-0a918902"]]),pe=`
	_type == "header" => {
		title,
		subtitle,
		_updatedAt,

	}
`,ge=`
	_type == "content" => {
		"type": ^._type,
		leftTitle,
		content[]{
			...,
			_type == 'block' => {
				...,
				markDefs[]{
					...,
					...${J()}
				}
			},
		}
	}
`;function ye(t,a="pt"){return N`
	*[_type == 'page.legal' && metadata.slug.current == "${t}" && lang == '${a}' && !(_id in path("drafts.**"))][0] {
		_type,
		"metadata": metadata{...${F()}},
		"sections": sections[] {
			_type,
			${pe},
			${ge},
		},
	}
	`}const we={__name:"[slug]",async setup(t){var k,$;let a,n;const{locales:d,locale:r,setLocale:p}=B(),u=z(),{slug:i}=u.params,_=ye(i,r.value),{data:l,pending:L,error:g}=([a,n]=V(()=>R(_)),a=await a,n(),a);if(g.value)throw q({statusCode:((k=g.value)==null?void 0:k.statusCode)||500,statusMessage:(($=g.value)==null?void 0:$.message)||"An error occurred"});!L.value&&l.value,Y(l.value.metadata,r);const{onEnter:S,onLeave:A}=O();return D({bodyAttrs:{class:l.value.metadata.slug}}),(he,xe)=>(o(),w(e(Q),{slug:e(l).metadata.slug,name:e(l).metadata.name,metadata:e(l).metadata,"transition-enter":e(S),"transition-leave":e(A)},{default:M(()=>[e(l)?(o(),w(e(fe),X(y({key:0},e(l))),null,16)):U("",!0)]),_:1},8,["slug","name","metadata","transition-enter","transition-leave"]))}};export{we as default};
