"use strict";(self["webpackChunkoptinmonster_wordpress_plugin_vue_app"]=self["webpackChunkoptinmonster_wordpress_plugin_vue_app"]||[]).push([[571],{34842:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var s=function(){var t=this,e=t._self._c;return e("core-page",[e("div",{staticClass:"omapi-settings"},[e(t.componentName,{tag:"component",scopedSlots:t._u([{key:"tabs",fn:function(){return[e("common-tabnav",{attrs:{active:t.currentTab,tabs:t.allTabs},on:{go:t.goTo}})]},proxy:!0}])})],1)])},a=[],o=n(58850),i={mixins:[o.e],data:function(){return{pageSlug:"settings"}},computed:{componentName:function(){return"settings-".concat(this.currentTab)}},methods:{goTo:function(t){if("billing"===t){"billing"===this.selectedTab&&this.goTab({page:this.pageSlug});var e=window.location.href;return window.open(this.$urls.app("account/billing/?utm_source=WordPress&utm_medium=BillingSettingsTab&utm_campaign=Plugin&return=".concat(e)))}if("subaccounts"===t){"subaccounts"===this.selectedTab&&this.goTab({page:this.pageSlug});var n=window.location.href;return window.open(this.$urls.app("account/users/?utm_source=WordPress&utm_medium=SubAccountsSettingsTab&utm_campaign=Plugin&return=".concat(n)))}this.goTab({page:this.pageSlug,tab:t})}}},u=i,c=n(1001),r=(0,c.Z)(u,s,a,!1,null,null,null),g=r.exports},58850:function(t,e,n){n.d(e,{e:function(){return u}});var s=n(86080),a=n(27361),o=n.n(a),i=n(20629),u={computed:(0,s.Z)((0,s.Z)({},(0,i.Se)("tabs",["settingsTab","settingsTabs"])),{},{allTabs:function(){return this.$store.getters["tabs/".concat(this.pageSlug,"Tabs")]},currentTab:function(){return this.$store.getters["tabs/".concat(this.pageSlug,"Tab")]},selectedTab:function(){return this.$get("$route.params.selectedTab")}}),mounted:function(){this.goToSelected()},watch:{$route:function(t){this.goTo(o()(t,"params.selectedTab"))}},methods:(0,s.Z)((0,s.Z)({},(0,i.nv)("tabs",["goTab"])),{},{navTo:function(t){this.goTab({page:this.pageSlug,tab:t,baseUrl:""})},goTo:function(t){this.goTab({page:this.pageSlug,tab:t})},goToSelected:function(){this.selectedTab&&this.goTo(this.selectedTab)}})}}}]);
//# sourceMappingURL=settings.5927c35b.js.map