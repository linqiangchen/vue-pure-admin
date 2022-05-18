var k=Object.defineProperty,E=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var y=(s,t,a)=>t in s?k(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,v=(s,t)=>{for(var a in t||(t={}))F.call(t,a)&&y(s,a,t[a]);if(x)for(var a of x(t))C.call(t,a)&&y(s,a,t[a]);return s},S=(s,t)=>E(s,A(t));import{y as w,al as f,aT as N,t as V,N as q,O as B,aU as I,I as m,o as T,D as P,S as n,H as u,q as r,C as d,G as b,u as g}from"./index.b2cfb768.js";var D=w({name:"el-tree-line",props:{node:{type:Object,required:!0},data:{type:Array,default:()=>{}},treeData:{type:Array,default:()=>[]},indent:{type:Number,default:16},showLabelLine:{type:Boolean,default:!0}},setup(s,t){const{slots:a}=t;return{getScopedSlot:l=>{if(!l)return null;const i=l.split("||");let e=null;for(let o=0;o<i.length;o++){const c=i[o];e=(a||{})[c]}return e},getSlotValue:(l,i,e=null)=>N(l)?l(i)||e:l||e}},render(){const s=this.getScopedSlot("default"),t=this.getScopedSlot("node-label"),a=this.getScopedSlot("after-node-label"),h=s?this.getSlotValue(s,{node:this.node,data:this.data}):[t?this.getSlotValue(t,{node:this.node,data:this.data}):f("span",{class:"element-tree-node-label"},this.node.label),this.showLabelLine?f("span",{class:"element-tree-node-label-line"}):null,this.getSlotValue(a,{node:this.node,data:this.data})],p=[];let l=this.node;for(;l;){let e=l.parent;if(l.level===1&&!l.parent){if(!this.treeData||!Array.isArray(this.treeData))throw Error("if you using el-tree-v2 (Virtualized Tree) of element-plus,element-tree-line required data.");e={children:Array.isArray(this.treeData)?this.treeData.map(o=>S(v({},o),{key:o.id})):[],level:0,key:"node-0",parent:null}}if(e){const o=(e.children||e.childNodes).findIndex(c=>(c.key||c.id)===(l.key||l.id));p.unshift(o===(e.children||e.childNodes).length-1)}l=e}const i=[];for(let e=0;e<this.node.level;e++)i.push(f("span",{class:{"element-tree-node-line-ver":!0,"last-node-line":p[e]&&this.node.level-1!==e,"last-node-isLeaf-line":p[e]&&this.node.level-1===e},style:{left:this.indent*e+"px"}}));return f("span",{class:"element-tree-node-label-wrapper"},[h].concat(i).concat([f("span",{class:"element-tree-node-line-hor",style:{width:(this.node.isLeaf?24:8)+"px",left:(this.node.level-1)*this.indent+"px"}})]))}});const H=r("div",{class:"card-header"},[r("span",{class:"font-medium"}," \u6269\u5C55elemenet-plus\u7684\u6811\u5F62\u7EC4\u4EF6\u5305\u62EC\u865A\u62DF\u6811\u7EC4\u4EF6\uFF0C\u652F\u6301\u8FDE\u63A5\u7EBF ")],-1),O=r("div",{class:"card-header"},[r("span",{class:"font-medium"}," \u666E\u901A\u6811\u7ED3\u6784 ")],-1),j={class:"max-h-550px overflow-y-auto"},z={class:"text-sm"},G=r("div",{class:"card-header"},[r("span",{class:"font-medium"}," \u865A\u62DF\u6811\u7ED3\u6784 ")],-1),K={class:"max-h-550px overflow-y-auto"},U={class:"text-sm"},Q=w({setup(s){let t=V(()=>q(B().menusTree)),a=I(t.value),h={value:"uniqueId",children:"children"};return(p,l)=>{const i=m("el-tree"),e=m("el-card"),o=m("el-col"),c=m("el-tree-v2"),L=m("el-row");return T(),P(e,null,{header:n(()=>[H]),default:n(()=>[u(L,{gutter:24},{default:n(()=>[u(o,{xs:24,sm:24,md:12,lg:12,xl:12,class:"mb-20px"},{default:n(()=>[u(e,null,{header:n(()=>[O]),default:n(()=>[r("div",j,[u(i,{data:d(t),props:d(h),"show-checkbox":"","default-expand-all":"","node-key":"uniqueId",indent:30},{default:n(({node:_})=>[u(d(D),{node:_,showLabelLine:!0},{"node-label":n(()=>[r("span",z,b(d(g)(_.data.meta.title)),1)]),_:2},1032,["node"])]),_:1},8,["data","props"])])]),_:1})]),_:1}),u(o,{xs:24,sm:24,md:12,lg:12,xl:12},{default:n(()=>[u(e,null,{header:n(()=>[G]),default:n(()=>[r("div",K,[u(c,{data:d(t),props:d(h),"show-checkbox":"",height:550,"default-expanded-keys":d(a)},{default:n(({node:_})=>[u(d(D),{node:_,treeData:d(t),showLabelLine:!0,indent:30},{"node-label":n(()=>[r("span",U,b(d(g)(_.data.meta.title)),1)]),_:2},1032,["node","treeData"])]),_:1},8,["data","props","default-expanded-keys"])])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Q as default};
