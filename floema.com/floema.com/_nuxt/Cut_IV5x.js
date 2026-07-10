import{_ as B,au as C,s as P,r as b,a as H,o as N,b as j,d as o,m as i,p,e as d,g as E,h as e,L as c,O as v,av as G,N as _,aw as L,ax as O,Y as S,Z as u,a0 as T,a1 as V,u as q,X as F,a2 as I,a3 as M,f as R,a4 as z,a5 as D,a6 as Q}from"./Cz0xhMSq.js";import{u as U}from"./DPa-uIXH.js";import{F as X}from"./BiOVltcX.js";import{P as Y}from"./BtEzFEFv.js";import{h as Z}from"./DOTWEdil.js";const J={"data-component":"article-page",class:"inner-page"},K={__name:"Article",props:{metadata:{type:[Boolean,Object],default:!1},sections:{type:[Boolean,Array],default:!1},gallery:{type:[Boolean,Object],default:!1}},setup(s){const{$preview:a}=C(),r=P(),l=b(!1);r.on("gallery-open",()=>n()),r.on("gallery-close",()=>n());function n(){l.value=!l.value}return H(()=>{}),N(()=>{r.emit("change-menu-theme","main")}),(h,g)=>(o(),j("div",J,[e(a)?(o(),i(e(Y),{key:0})):p("",!0),e(l)?(o(),i(e(G),c(v({key:1},s.gallery)),null,16)):p("",!0),d(e(L),c(_({...s.sections[0],...s.gallery})),null,16),E("main",null,[d(e(O),c(_(s.sections[1])),null,16)]),d(e(X))]))}},W=B(K,[["__scopeId","data-v-76af37bf"]]),ee=`
	_type == "articleHeader" => {
		"category": ^.presentation.category->{
			name,
			"slug": slug.current
		},
		title,
		date,
		figure {
			...,
			${u()}
		},
		"readTime": ^.sections[1]{
			"time":round(length(pt::text(content)) / 5 / 180 ),
		}.time
	}
`,ae=`
	_type == "articleContent" => {
		"type": ^._type,
		"readingTime": round(length(pt::text(content)) / 5 / 180 ),
		content[]{
			...,
			_type == 'block' => {
				...,
				markDefs[]{
					...,
					...${Z()}
				}
			},
			_type == "figure" => {
				...,
				${u()}
			},
			_type == "figureSet" => {
				...,
				figures[]{
					...,
					${u()}
				}
			},
		}
	}
`,te=`
	gallery {
		title,
		images[]{
			description,
			${u()}
		}
	}
`;function se(s,a="pt"){return T`
	*[_type == 'page.article' && metadata.slug.current == "${s}" && lang == '${a}'][0] {
		_type,
		"metadata": metadata{...${S()}},
		"sections": sections[] {
			_type,
			${ee},
			${ae},
		},
		"gallery": ${te}
	}
	`}const me={__name:"[slug]",async setup(s){var y,f;let a,r;const{locales:l,locale:n,setLocale:h}=V(),g=q(),{slug:$}=g.params,A=se($,n.value),{data:t,pending:x,error:m}=([a,r]=F(()=>Q(A)),a=await a,r(),a);if(m.value)throw I({statusCode:((y=m.value)==null?void 0:y.statusCode)||500,statusMessage:((f=m.value)==null?void 0:f.message)||"An error occurred"});!x.value&&t.value,U(t.value.metadata,n);const{onEnter:k,onLeave:w}=z();return M({bodyAttrs:{class:t.value.metadata.slug}}),(re,ne)=>(o(),i(e(D),{slug:e(t).metadata.slug,name:e(t).metadata.name,metadata:e(t).metadata,"transition-enter":e(k),"transition-leave":e(w)},{default:R(()=>[e(t)?(o(),i(e(W),c(v({key:0},e(t))),null,16)):p("",!0)]),_:1},8,["slug","name","metadata","transition-enter","transition-leave"]))}};export{me as default};
