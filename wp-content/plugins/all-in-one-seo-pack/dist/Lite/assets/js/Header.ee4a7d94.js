import{o as t,c as o,a as u,e as i,f as g,I as m,J as v,n as y,r as l,d}from"./vue.runtime.esm-bundler.588d3a9f.js";import{_}from"./_plugin-vue_export-helper.a6f24833.js";import{f as h}from"./links.37929787.js";import{S as $}from"./Logo.5c35a084.js";const z={},S={class:"aioseo-wizard-body"},C={class:"body-content"},W={key:0,class:"cta"},x={class:"body-footer"};function A(e,s){return t(),o("div",S,[u("div",C,[i(e.$slots,"default")]),e.$slots.cta?(t(),o("div",W,[i(e.$slots,"cta")])):g("",!0),u("div",x,[i(e.$slots,"footer")])])}const T=_(z,[["render",A]]);const w={},B={class:"aioseo-wizard-container"};function b(e,s){return t(),o("div",B,[i(e.$slots,"default")])}const U=_(w,[["render",b]]);const k={props:{steps:{type:Array,required:!0}},computed:{getSteps(){const e={spacer:!0};return[...this.steps].map((s,r)=>r<this.steps.length-1?[s,{...e}]:[s]).reduce((s,r)=>s.concat(r))}},methods:{getActiveClass(e,s){return e.spacer?!!this.getSteps[s+1].active:e.active}}},L={class:"aioseo-wizard-progress"};function N(e,s,r,p,f,a){return t(),o("div",L,[(t(!0),o(m,null,v(a.getSteps,(n,c)=>(t(),o("div",{key:c,class:y([{circle:!n.spacer},{spacer:n.spacer},{active:a.getActiveClass(n,c)}])},null,2))),128))])}const P=_(k,[["render",N]]);const V={setup(){return{setupWizardStore:h()}},components:{SvgAioseoLogo:$,WizardProgress:P},computed:{steps(){const e=[];for(let s=0;s<this.setupWizardStore.getTotalStageCount;s++)s<this.setupWizardStore.getCurrentStageCount?e.push({active:!0}):e.push({active:!1});return e}}},H={class:"aioseo-wizard-header"},q={class:"logo"};function E(e,s,r,p,f,a){const n=l("svg-aioseo-logo"),c=l("wizard-progress");return t(),o("div",H,[u("div",q,[d(n)]),d(c,{steps:a.steps},null,8,["steps"])])}const j=_(V,[["render",E]]);export{T as W,U as a,j as b};
