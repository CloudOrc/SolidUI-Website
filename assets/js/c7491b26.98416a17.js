"use strict";(self.webpackChunksolidui_website=self.webpackChunksolidui_website||[]).push([[5412],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>k});var i=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t){if(null==e)return{};var l,i,n=function(e,t){if(null==e)return{};var l,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)l=o[i],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)l=o[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var u=i.createContext({}),s=function(e){var t=i.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var l=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(l),m=n,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return l?i.createElement(k,r(r({ref:t},c),{},{components:l})):i.createElement(k,r({ref:t},c))}));function k(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=l.length,r=new Array(o);r[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:n,r[1]=a;for(var s=2;s<o;s++)r[s]=l[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,l)}m.displayName="MDXCreateElement"},3179:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var i=l(7462),n=(l(7294),l(3905));const o={title:"SolidUI\u793e\u533a-\u72ec\u7acb\u90e8\u7f72\u548cDocker\u901a\u4fe1\u5206\u6790",date:new Date("2023-07-03T00:00:00.000Z"),tags:["SolidUI","AIGC","stable-diffusion"]},r=void 0,a={permalink:"/SolidUI-Website/blog/2023/07/03/independent-deployment-communication-analysis",editUrl:"https://github.com/CloudOrc/SolidUI-Website/edit/dev/blog/2023-07-03-independent-deployment-communication-analysis.md",source:"@site/blog/2023-07-03-independent-deployment-communication-analysis.md",title:"SolidUI\u793e\u533a-\u72ec\u7acb\u90e8\u7f72\u548cDocker\u901a\u4fe1\u5206\u6790",description:"\u80cc\u666f",date:"2023-07-03T00:00:00.000Z",formattedDate:"July 3, 2023",tags:[{label:"SolidUI",permalink:"/SolidUI-Website/blog/tags/solid-ui"},{label:"AIGC",permalink:"/SolidUI-Website/blog/tags/aigc"},{label:"stable-diffusion",permalink:"/SolidUI-Website/blog/tags/stable-diffusion"}],readingTime:3.635,hasTruncateMarker:!1,authors:[],frontMatter:{title:"SolidUI\u793e\u533a-\u72ec\u7acb\u90e8\u7f72\u548cDocker\u901a\u4fe1\u5206\u6790",date:"2023-07-03T00:00:00.000Z",tags:["SolidUI","AIGC","stable-diffusion"]},prevItem:{title:"SolidUI Community - Official Website Introduction",permalink:"/SolidUI-Website/blog/2023/09/05/Official-Website-Introduction"},nextItem:{title:"SolidUI\u793e\u533a-Snakemq\u901a\u4fe1\u6e90\u7801\u5206\u6790",permalink:"/SolidUI-Website/blog/2023/07/02/snakemq-communication-source-code-analysis"}},u={authorsImageUrls:[]},s=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u72ec\u7acb\u90e8\u7f72\u901a\u4fe1",id:"\u72ec\u7acb\u90e8\u7f72\u901a\u4fe1",level:2},{value:"\u4f8b\u5982",id:"\u4f8b\u5982",level:3},{value:"Docker \u90e8\u7f72\u901a\u4fe1",id:"docker-\u90e8\u7f72\u901a\u4fe1",level:2},{value:"\u4f8b\u5982",id:"\u4f8b\u5982-1",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2},{value:"\u5982\u679c\u6210\u4e3a\u8d21\u732e\u8005",id:"\u5982\u679c\u6210\u4e3a\u8d21\u732e\u8005",level:2}],c={toc:s},d="wrapper";function p(e){let{components:t,...l}=e;return(0,n.kt)(d,(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,n.kt)("p",null,"\u968f\u7740\u6587\u672c\u751f\u6210\u56fe\u50cf\u7684\u8bed\u8a00\u6a21\u578b\u5174\u8d77\uff0cSolidUI\u60f3\u5e2e\u4eba\u4eec\u5feb\u901f\u6784\u5efa\u53ef\u89c6\u5316\u5de5\u5177\uff0c\u53ef\u89c6\u5316\u5185\u5bb9\u5305\u62ec2D,3D,3D\u573a\u666f\uff0c\u4ece\u800c\u5feb\u901f\u6784\u4e09\u7ef4\u6570\u636e\u6f14\u793a\u573a\u666f\u3002SolidUI \u662f\u4e00\u4e2a\u521b\u65b0\u7684\u9879\u76ee\uff0c\u65e8\u5728\u5c06\u81ea\u7136\u8bed\u8a00\u5904\u7406\uff08NLP\uff09\u4e0e\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66\u76f8\u7ed3\u5408\uff0c\u5b9e\u73b0\u6587\u751f\u56fe\u529f\u80fd\u3002\u901a\u8fc7\u6784\u5efa\u81ea\u7814\u7684\u6587\u751f\u56fe\u8bed\u8a00\u6a21\u578b\uff0cSolidUI \u5229\u7528 RLHF (Reinforcement Learning Human Feedback) \u6d41\u7a0b\u5b9e\u73b0\u4ece\u6587\u672c\u63cf\u8ff0\u5230\u56fe\u5f62\u751f\u6210\u7684\u8fc7\u7a0b\u3002"),(0,n.kt)("p",null,"\u9879\u76ee\u5730\u5740: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/CloudOrc/SolidUI"},"https://github.com/CloudOrc/SolidUI")),(0,n.kt)("p",null,"\u9879\u76ee\u955c\u50cf\u5730\u5740: ",(0,n.kt)("a",{parentName:"p",href:"https://gitee.com/CloudOrc/SolidUI"},"https://gitee.com/CloudOrc/SolidUI")),(0,n.kt)("h2",{id:"\u72ec\u7acb\u90e8\u7f72\u901a\u4fe1"},"\u72ec\u7acb\u90e8\u7f72\u901a\u4fe1"),(0,n.kt)("p",null,"\u5355\u72ec\u90e8\u7f72\uff0c\u4e0e\u5916\u7f51\u901a\u4fe1\uff0c\u8fd9\u5757\u4e0d\u96be\u53ea\u6709\u76f8\u5e94\u516c\u7f51\uff0c\u5c31\u53ef\u4ee5\u6b63\u5e38\u8bbf\u95ee\u3002"),(0,n.kt)("p",null,"\u5355\u72ec\u90e8\u7f72\uff0c\u5185\u90e8\u8fdb\u7a0b\u95f4\u901a\u4fe1\uff0c\u5982\u679c\u6709\u591a\u4e2a\u7f51\u5361\uff0cip addr \u6d89\u53ca\u591a\u4e2aip \uff0c\u9700\u8981\u8bbe\u7f6e\u5185\u7f51ip \u6216\u8005\u57df\u540d \uff0c\u53bb\u4e00\u4e00\u5bf9\u5e94\u3002"),(0,n.kt)("h3",{id:"\u4f8b\u5982"},"\u4f8b\u5982"),(0,n.kt)("p",null,"\u5982\u679c\u6709\u591a\u4e2a\u7f51\u5361\uff0cip addr \u6d89\u53ca\u591a\u4e2aip \uff0c\u9700\u8981\u8bbe\u7f6e\u5185\u7f51ip \u6216\u8005\u57df\u540d \uff0c\u53bb\u4e00\u4e00\u5bf9\u5e94\uff0c\u6ca1\u6709\u7684\u8bdd\u7528127.0.0.1 \u5c31\u53ef\u4ee5\u3002"),(0,n.kt)("p",null,"\u8bbe\u7f6e Snakemq \u901a\u4fe1"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"soliduimodelui/.env  SNAKEMQ_LISTENER server \u76d1\u542c\u5668 \uff0c\u8bbe\u7f6e\u5185\u7f51ip\nsoliduimodelui/.env  SNAKEMQ_CONNECTOR  \u4e0eserver \u8fde\u63a5ip  \uff0c\u8bbe\u7f6e\u5185\u7f51ip\n")),(0,n.kt)("h2",{id:"docker-\u90e8\u7f72\u901a\u4fe1"},"Docker \u90e8\u7f72\u901a\u4fe1"),(0,n.kt)("p",null,"\u5bb9\u5668\u5316\u90e8\u7f72\uff0c\u5728\u6b64\u6211\u7b80\u5316\u63cf\u8ff0\uff0c\u4e0d\u5e26\u5bb9\u5668\u7ba1\u7406\u6846\u67b6\u63cf\u8ff0\uff0c\u56e0\u4e3a\u901a\u4fe1\u6700\u6839\u672c\u7684\u660e\u767d\u540e\uff0c\u5176\u5b83\u5728\u6846\u67b6\u4e2d\u4e5f\u5c31\u660e\u767d\u4e86\uff0c\u5916\u90e8\u901a\u4fe1\uff0c\u5f00\u653e\u7aef\u53e3 \uff0c\u5185\u90e8\u901a\u4fe1\uff0c\u901a\u8fc7\u8bbe\u7f6e\u7f51\u6bb5\u540d\u79f0\uff0c\u4e0d\u540c\u5bb9\u5668\u901a\u4fe1\uff0c\u901a\u8fc7\u5bb9\u5668\u540d\u79f0\u8fdb\u884c\u3002"),(0,n.kt)("h3",{id:"\u4f8b\u5982-1"},"\u4f8b\u5982"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6570\u636e\u5e93\u8fde\u63a5")),(0,n.kt)("p",null,"\u5728docker-compose.yml \u4e2d\uff0c\u8bbe\u7f6e\u4e86Mysql\u6570\u636e\u5e93\u540d\u79f0\u4e3amysql "),(0,n.kt)("p",null,"\u6240\u4ee5solidui-entrance application.yaml  \u4e2d  datasource.url  mysql \u66ff\u6362 localhost"),(0,n.kt)("p",null,"soliduimodelui/.env  DB_HOST mysql \u66ff\u6362 localhost "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"soliduimodelui/.env Snakemq \u901a\u4fe1")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"soliduimodelui/.env  SNAKEMQ_LISTENER server \u76d1\u542c\u5668 \uff0c\u8bbe\u7f6e0.0.0.0\nsoliduimodelui/.env  SNAKEMQ_CONNECTOR  \u4e0eserver \u8fde\u63a5ip  \uff0c\u8bbe\u7f6esoliduimodelui\n")),(0,n.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,n.kt)("p",null,"\u672c\u6587\u901a\u8fc7\u8bb2\u89e3\u72ec\u7acb\u90e8\u7f72 \u548c Docker \u901a\u4fe1\u5206\u6790 \uff0c\u544a\u8bc9\u90e8\u7f72\u8bbe\u7f6eip\u65f6\u5019\u65b9\u5f0f\uff0c\u4e0d\u662f\u76f2\u76ee\u8bbe\u7f6elocalhost\u5c31\u80fd\u89e3\u51b3\uff0c\u4e3a\u5927\u5bb6\u540e\u7eed\u66f4\u597d\u5171\u5efaSolidUI\u63d0\u4f9b\u601d\u8def\u3002"),(0,n.kt)("h2",{id:"\u5982\u679c\u6210\u4e3a\u8d21\u732e\u8005"},"\u5982\u679c\u6210\u4e3a\u8d21\u732e\u8005"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u6587\u6863\u8d21\u732e\u3002\u53d1\u73b0\u6587\u6863\u7684\u4e0d\u8db3\u3001\u4f18\u5316\u6587\u6863\uff0c\u6301\u7eed\u66f4\u65b0\u6587\u6863\u7b49\u65b9\u5f0f\u53c2\u4e0e\u793e\u533a\u8d21\u732e\u3002\u901a\u8fc7\u6587\u6863\u8d21\u732e\uff0c\u8ba9\u5f00\u53d1\u8005\u719f\u6089\u5982\u4f55\u63d0\u4ea4PR\u548c\u771f\u6b63\u53c2\u4e0e\u5230\u793e\u533a\u7684\u5efa\u8bbe\u3002\u53c2\u8003\u653b\u7565\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/CloudOrc/SolidUI/discussions/54"},"https://github.com/CloudOrc/SolidUI/discussions/54")),(0,n.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u8d21\u732e\u3002\u6211\u4eec\u68b3\u7406\u4e86\u793e\u533a\u4e2d\u7b80\u5355\u5e76\u4e14\u5bb9\u6613\u5165\u95e8\u7684\u7684\u4efb\u52a1\uff0c\u975e\u5e38\u9002\u5408\u65b0\u4eba\u505a\u4ee3\u7801\u8d21\u732e\u3002\u8bf7\u67e5\u9605\u65b0\u624b\u4efb\u52a1\u5217\u8868\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/CloudOrc/SolidUI/issues/12"},"https://github.com/CloudOrc/SolidUI/issues/12")),(0,n.kt)("li",{parentName:"ul"},"\u5185\u5bb9\u8d21\u732e\uff1a\u53d1\u5e03SolidUI\u5f00\u6e90\u7ec4\u4ef6\u76f8\u5173\u7684\u5185\u5bb9\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u5b89\u88c5\u90e8\u7f72\u6559\u7a0b\u3001\u4f7f\u7528\u7ecf\u9a8c\u3001\u6848\u4f8b\u5b9e\u8df5\u7b49\uff0c\u5f62\u5f0f\u4e0d\u9650\uff0c\u8bf7\u6295\u7a3f\u7ed9\u5c0f\u52a9\u624b\u3002\u4f8b\u5982\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/CloudOrc/SolidUI/issues/10"},"https://github.com/CloudOrc/SolidUI/issues/10")),(0,n.kt)("li",{parentName:"ul"},"\u793e\u533a\u7b54\u7591\uff1a\u79ef\u6781\u5728\u793e\u533a\u4e2d\u8fdb\u884c\u7b54\u7591\u3001\u5206\u4eab\u6280\u672f\u3001\u5e2e\u52a9\u5f00\u53d1\u8005\u89e3\u51b3\u95ee\u9898\u7b49\uff1b\n\u5176\u4ed6\uff1a\u79ef\u6781\u53c2\u4e0e\u793e\u533a\u6d3b\u52a8\u3001\u6210\u4e3a\u793e\u533a\u5fd7\u613f\u8005\u3001\u5e2e\u52a9\u793e\u533a\u5ba3\u4f20\u3001\u4e3a\u793e\u533a\u53d1\u5c55\u63d0\u4f9b\u6709\u6548\u5efa\u8bae\u7b49\uff1b")))}p.isMDXComponent=!0}}]);