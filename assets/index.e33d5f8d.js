var S=Object.defineProperty;var I=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var y=(c,l,n)=>l in c?S(c,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):c[l]=n,L=(c,l)=>{for(var n in l||(l={}))B.call(l,n)&&y(c,n,l[n]);if(I)for(var n of I(l))D.call(l,n)&&y(c,n,l[n]);return c};import{d as P}from"./index.ad22cd9b.js";import{aq as F,cw as R,_ as b,y as x,ac as J,ae as Y,ax as j,as as W,a1 as O,C,o as k,p as T,Z,D as z}from"./index.b2cfb768.js";var _={exports:{}};(function(c,l){(function(n,w){c.exports=w()})(F,function(){function n(e){var p=[];return e.AMapUI&&p.push(w(e.AMapUI)),e.Loca&&p.push(m(e.Loca)),Promise.all(p)}function w(e){return new Promise(function(p,i){var u=[];if(e.plugins)for(var t=0;t<e.plugins.length;t+=1)o.AMapUI.plugins.indexOf(e.plugins[t])==-1&&u.push(e.plugins[t]);if(s.AMapUI===a.failed)i("\u524D\u6B21\u8BF7\u6C42 AMapUI \u5931\u8D25");else if(s.AMapUI===a.notload){s.AMapUI=a.loading,o.AMapUI.version=e.version||o.AMapUI.version,t=o.AMapUI.version;var A=document.body||document.head,f=document.createElement("script");f.type="text/javascript",f.src="https://webapi.amap.com/ui/"+t+"/main.js",f.onerror=function(r){s.AMapUI=a.failed,i("\u8BF7\u6C42 AMapUI \u5931\u8D25")},f.onload=function(){if(s.AMapUI=a.loaded,u.length)window.AMapUI.loadUI(u,function(){for(var r=0,v=u.length;r<v;r++){var U=u[r].split("/").slice(-1)[0];window.AMapUI[U]=arguments[r]}for(p();d.AMapUI.length;)d.AMapUI.splice(0,1)[0]()});else for(p();d.AMapUI.length;)d.AMapUI.splice(0,1)[0]()},A.appendChild(f)}else s.AMapUI===a.loaded?e.version&&e.version!==o.AMapUI.version?i("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528"):u.length?window.AMapUI.loadUI(u,function(){for(var r=0,v=u.length;r<v;r++){var U=u[r].split("/").slice(-1)[0];window.AMapUI[U]=arguments[r]}p()}):p():e.version&&e.version!==o.AMapUI.version?i("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528"):d.AMapUI.push(function(r){r?i(r):u.length?window.AMapUI.loadUI(u,function(){for(var v=0,U=u.length;v<U;v++){var E=u[v].split("/").slice(-1)[0];window.AMapUI[E]=arguments[v]}p()}):p()})})}function m(e){return new Promise(function(p,i){if(s.Loca===a.failed)i("\u524D\u6B21\u8BF7\u6C42 Loca \u5931\u8D25");else if(s.Loca===a.notload){s.Loca=a.loading,o.Loca.version=e.version||o.Loca.version;var u=o.Loca.version,t=o.AMap.version.startsWith("2"),A=u.startsWith("2");if(t&&!A||!t&&A)i("JSAPI \u4E0E Loca \u7248\u672C\u4E0D\u5BF9\u5E94\uFF01\uFF01");else{t=o.key,A=document.body||document.head;var f=document.createElement("script");f.type="text/javascript",f.src="https://webapi.amap.com/loca?v="+u+"&key="+t,f.onerror=function(r){s.Loca=a.failed,i("\u8BF7\u6C42 AMapUI \u5931\u8D25")},f.onload=function(){for(s.Loca=a.loaded,p();d.Loca.length;)d.Loca.splice(0,1)[0]()},A.appendChild(f)}}else s.Loca===a.loaded?e.version&&e.version!==o.Loca.version?i("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528"):p():e.version&&e.version!==o.Loca.version?i("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528"):d.Loca.push(function(r){r?i(r):i()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var a;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(a||(a={}));var o={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},s={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},d={AMap:[],AMapUI:[],Loca:[]},g=[],M=function(e){typeof e=="function"&&(s.AMap===a.loaded?e(window.AMap):g.push(e))};return{load:function(e){return new Promise(function(p,i){if(s.AMap==a.failed)i("");else if(s.AMap==a.notload){var u=e.key,t=e.version,A=e.plugins;u?(window.AMap&&location.host!=="lbs.amap.com"&&i("\u7981\u6B62\u591A\u79CDAPI\u52A0\u8F7D\u65B9\u5F0F\u6DF7\u7528"),o.key=u,o.AMap.version=t||o.AMap.version,o.AMap.plugins=A||o.AMap.plugins,s.AMap=a.loading,t=document.body||document.head,window.___onAPILoaded=function(r){if(delete window.___onAPILoaded,r)s.AMap=a.failed,i(r);else for(s.AMap=a.loaded,n(e).then(function(){p(window.AMap)}).catch(i);g.length;)g.splice(0,1)[0]()},A=document.createElement("script"),A.type="text/javascript",A.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+o.AMap.version+"&key="+u+"&plugin="+o.AMap.plugins.join(","),A.onerror=function(r){s.AMap=a.failed,i(r)},t.appendChild(A)):i("\u8BF7\u586B\u5199key")}else if(s.AMap==a.loaded)if(e.key&&e.key!==o.key)i("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");else if(e.version&&e.version!==o.AMap.version)i("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");else{if(u=[],e.plugins)for(t=0;t<e.plugins.length;t+=1)o.AMap.plugins.indexOf(e.plugins[t])==-1&&u.push(e.plugins[t]);u.length?window.AMap.plugin(u,function(){n(e).then(function(){p(window.AMap)}).catch(i)}):n(e).then(function(){p(window.AMap)}).catch(i)}else if(e.key&&e.key!==o.key)i("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");else if(e.version&&e.version!==o.AMap.version)i("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");else{var f=[];if(e.plugins)for(t=0;t<e.plugins.length;t+=1)o.AMap.plugins.indexOf(e.plugins[t])==-1&&f.push(e.plugins[t]);M(function(){f.length?window.AMap.plugin(f,function(){n(e).then(function(){p(window.AMap)}).catch(i)}):n(e).then(function(){p(window.AMap)}).catch(i)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,o={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},s={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},d={AMap:[],AMapUI:[],Loca:[]}}}})})(_);var N=_.exports;const q=c=>R.request("get","/getMapInfo",{params:c});var K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAUCAMAAADSpG8HAAAC91BMVEUAAAAAJQskNR8JNS8AAAAHwgAu2CIAZQIDGgccFA8aTDwVvRAtwyUNqQgcZhgsXSUQQQ0BJQcHMwIpJw4BAQCM63sRRDct5xwHswAMOzAv4SAIxAAr3xofuhZWzUwYRTMqnDEvtyRDvjgKMSwBjQCWkJRdxFNnm2A0cy8KLSgknR0hQTEydjNDYzFhjFpocEsXig9wimhcTi45hy0kTy1Vg0hQLx0EPABCSkAYSxwATQc0UjIFCwOU/4mt/6YP7wXI/8Gh/5eK/4CG/3tJfla5/7K3/7Ck/5tL/0Yq/h0ANxDi/9DG/77D/7vA/7jG/7Cz/6yb/5Gd/4WY/4GF/oFrl3Zy9WtTh2Fj319F2kklakMgbjgOSDAx/yoALBgc8RECIQ7N/8bL/7Sx/6m6/6Oq/6Gm/6Cb/5aX/410oYRuln+U/3tklXNZjGtY019Ou15y/1RV/0YlZUUs1j1E/jk8/ysiYisWZiMFUh8CsR0i6hkj/xUd2RMa+hAAPgwK+gDa/8nT/8bW/7/a/73O/7m9/7W//6qLrZyt/5qk/5GY/JB/rI2k/4eK8YeO/3aI/3N6/21w/2Jf/2Jt72Jj5GJNemJLhmBEgVtOxlhR1lZAgVE2aFEzdE0ye0w/5Uk+nkdGzUY1TUVG4EQ+u0ElXzsicTkhZjgsijYsrDI37i0kgiwhSCwAoxsTnBsY0hALgBAAEQgN4gcHowUS/wT/////8PeWt8HI47WlxK/K/6aUuqGm/52f7Zyx/5qt/5XCupS9/5C+pI+U9456m4uI9oSS/4CE/4B+9nqa/3hkjHBVgWxUxWGA/2BNtl5WvFtS4Vll/1hGpFhY2ldd/FRa71Ne+lI6eFJAXlFq/05Ks01U2ExS9EcxTUAldz481zssRDszyDcfWTc9+jAXyzAx2S4PYSwIUiscOSkitygVMSgLwyYCvCEfpiEDyCAAvR4i3xwe1xwQaxoj9xgQShcKaBYKQBYMWBQU7BAMbA8X8A0J1wsFdgsAAABw6AJ/AAAAPXRSTlMAZ1XZBPPiqUM7/v7d04B2aFdSSRb68uzp5+fn5N/e3drT0MzKxsW+vr27tLOysLCrqqmno6CQj4aEd3Ig/fi2ogAAAkNJREFUKM9ioACwmIMIFCEBYz1DU34ODkFLHUYIEORWUpPjkeU1EICp0T1xYGfnpOLKNWveva2sfP3qcfG8eZGXI0J6LhR6+qtCzBPef2by5IiI4yEhR3p7D3U5uqfYrir/5rUh4VZH2MqwLRpgRUbbN62etWR+c1ODNxA0NDa22JbHxdXVbfBysusKu10rBFKkWPD1evjDm82+vr4+Pg4ODokOHeeyor28vP68CT6WHlLKDlLEFrv6pMuyvCY3N9dWPz+gukT/xZk7plXUJfwo9PCYNJEXrKjqTqhLdESLXXJAAEidb2LSglntu7ozD5fVxsbbV0uDFMnULAx1WTrFPy011S4ZqMzVISlyblZOZnd7WY1nvH09K0gRQOLrwIraHN3d01LtgOr8/Bfdzc3NzclCUiS17j7Qukspgenpju670+zsXNsWRU+dPi38VHkVXBHb++c5LssW7LXNCHR0dAwMdHdLufd09pxr02d/9Pz0036zBEgRT2xCePiSxZ1OtrYZGba2Ts62+x48K4qKmhOzvsR+Y221CkiR1o2El1O5lh91dnZ2cnJydp4wsW9FTBFQVRx36aMS+83gcALMbNumz8tXrcgODgrqCQoKDs7O7ltbURETE/e7tOrJrz1hHCBFnAcLPAqvzJyRl3c6/+LZ/PwZM89HFr9Yu/7Lh+8bqydstYCkAv2k/gKPyPnyzJJcc8WYmZmVNbVNFDxWxpZc7RdVZ4KlFSZrPj5+YWAqs2ESgQqxW3EKMTFxArnEAgDLUd+tnLfEzAAAAABJRU5ErkJggg==";const Q={id:"mapview",ref:"mapview"},G=x({setup(c){let l,n;const w=Z(),m=J({loading:!P()}),a=()=>{n&&n.on("complete",()=>{m.loading=!1})};return Y(()=>{if(!w)return;let{MapConfigure:o}=w.appContext.config.globalProperties.$config,{options:s}=o;N.load({key:o.amapKey,version:"2.0",plugins:["AMap.MarkerCluster"]}).then(d=>{n=new d.Map(w.refs.mapview,s),n.plugin(["AMap.ToolBar","AMap.MapType"],()=>{n.addControl(new d.ToolBar),n.addControl(new d.MapType({defaultType:0}))}),l=new d.MarkerCluster(n,[],{gridSize:80,maxZoom:14,renderMarker(g){let{marker:M,data:e}=g;if(Array.isArray(e)&&e[0]){var{driver:p,plateNumber:i,orientation:u}=e[0],t=`<img style="transform: scale(1) rotate(${360-Number(u)}deg);" src='${K}' />`;M.setContent(t),M.setLabel({direction:"bottom",offset:new d.Pixel(-4,0),content:`<div> ${i}(${p})</div>`}),M.setOffset(new d.Pixel(-18,-10)),M.on("click",({lnglat:A})=>{n.setZoom(13),n.setCenter(A)})}}}),q().then(g=>{let M=g.info.map(e=>L({lnglat:[e.lng,e.lat]},e));l&&l.setData(M)}).catch(g=>{}),a()}).catch(()=>{throw m.loading=!1,"\u5730\u56FE\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D"})}),j(()=>{n&&n.destroy()&&n.clearEvents("click")}),(o,s)=>{const d=W("loading");return O((k(),T("div",Q,null,512)),[[d,C(m).loading]])}}});var h=b(G,[["__scopeId","data-v-27d96de6"]]);const V=Object.assign(h,{install(c){c.component(h.name,h)}});const X=x({setup(c){return(l,n)=>(k(),z(C(V)))}});var ne=b(X,[["__scopeId","data-v-382c87e8"]]);export{ne as default};
