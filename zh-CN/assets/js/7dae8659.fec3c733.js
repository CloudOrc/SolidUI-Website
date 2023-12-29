"use strict";(self.webpackChunksolidui_website=self.webpackChunksolidui_website||[]).push([[7812],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),d=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(r),m=i,v=u["".concat(a,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(v,l(l({ref:t},s),{},{components:r})):n.createElement(v,l({ref:t},s))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:i,l[1]=c;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8174:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(7462),i=(r(7294),r(3905));const o={id:"development-docker",title:"Docker \u7f16\u8bd1",sidebar_position:2},l="SolidUI Docker \u7f16\u8bd1",c={unversionedId:"development/development-docker",id:"development/development-docker",title:"Docker \u7f16\u8bd1",description:"1.\u524d\u7f6e\u6761\u4ef6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/docker-images.md",sourceDirName:"development",slug:"/development/development-docker",permalink:"/SolidUI-Website/zh-CN/docs/development/development-docker",draft:!1,editUrl:"https://github.com/CloudOrc/SolidUI-Website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/docker-images.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"development-docker",title:"Docker \u7f16\u8bd1",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Commit\u987b\u77e5",permalink:"/SolidUI-Website/zh-CN/docs/development/development-commit"},next:{title:"\u9879\u76ee\u8d21\u732e",permalink:"/SolidUI-Website/zh-CN/docs/development/develop-contributing"}},a={},d=[{value:"1.\u524d\u7f6e\u6761\u4ef6",id:"1\u524d\u7f6e\u6761\u4ef6",level:2},{value:"2.\u955c\u50cf\u6784\u5efa",id:"2\u955c\u50cf\u6784\u5efa",level:2},{value:"2.1 \u670d\u52a1\u7aef\u955c\u50cf\u6784\u5efa-entrance-server",id:"21-\u670d\u52a1\u7aef\u955c\u50cf\u6784\u5efa-entrance-server",level:3},{value:"2.2 \u670d\u52a1\u7aef\u955c\u50cf\u6784\u5efa-soliduimodelui (0.2.0\u7248\u672c\u540e)",id:"22-\u670d\u52a1\u7aef\u955c\u50cf\u6784\u5efa-soliduimodelui-020\u7248\u672c\u540e",level:3},{value:"2.3 \u524d\u7aef\u955c\u50cf\u6784\u5efa",id:"23-\u524d\u7aef\u955c\u50cf\u6784\u5efa",level:3}],s={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"solidui-docker-\u7f16\u8bd1"},"SolidUI Docker \u7f16\u8bd1"),(0,i.kt)("h2",{id:"1\u524d\u7f6e\u6761\u4ef6"},"1.\u524d\u7f6e\u6761\u4ef6"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker")," 1.13.1+"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u65b9\u5f0f1\uff1a\u4ece\u5b98\u7f51\u4e0b\u8f7d\u5730\u5740: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CloudOrc/SolidUI/releases"},"https://github.com/CloudOrc/SolidUI/releases")," \uff0c\u4e0b\u8f7d\u5bf9\u5e94\u7684\u5b89\u88c5\u5305\uff08\u6574\u4f53\u5b89\u88c5\u5305\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u65b9\u5f0f2\uff1a\u6839\u636eSolidUI \u81ea\u884c\u7f16\u8bd1\u51fa\u9879\u76ee\u5b89\u88c5\u5305\u3002")),(0,i.kt)("h2",{id:"2\u955c\u50cf\u6784\u5efa"},"2.\u955c\u50cf\u6784\u5efa"),(0,i.kt)("h3",{id:"21-\u670d\u52a1\u7aef\u955c\u50cf\u6784\u5efa-entrance-server"},"2.1 \u670d\u52a1\u7aef\u955c\u50cf\u6784\u5efa-entrance-server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"tar -zxvf solidui-x.x.x-bin.tar.gz\ncd solidui-x.x.x-bin/entrance-server\n\n# \u540c\u4e00\u4e2a\u7f51\u7edc\u4e0b\u4fee\u6539jdbc mysql ip\nvi solidui-x.x.x-bin/entrance-server/conf/application.yaml\njdbc:mysql://mysql:3306/solidui?useSSL=false&useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai\n\n# Building image\ndocker build  -f ./docker/Dockerfile  -t  solidui-entrance:x.x.x .\n\n")),(0,i.kt)("h3",{id:"22-\u670d\u52a1\u7aef\u955c\u50cf\u6784\u5efa-soliduimodelui-020\u7248\u672c\u540e"},"2.2 \u670d\u52a1\u7aef\u955c\u50cf\u6784\u5efa-soliduimodelui (0.2.0\u7248\u672c\u540e)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"tar -zxvf solidui-x.x.x-bin.tar.gz\ncd solidui-x.x.x-bin\n# \u4fee\u6539.env\u914d\u7f6e\u6587\u4ef6\nvi soliduimodelui/.env\nDB_HOST=mysql\nSNAKEMQ_LISTENER=0.0.0.0\nSNAKEMQ_CONNECTOR=soliduimodelui\n\ndocker build  -f ./soliduimodelui/docker/Dockerfile  -t  soliduimodelui:x.x.x .\n")),(0,i.kt)("h3",{id:"23-\u524d\u7aef\u955c\u50cf\u6784\u5efa"},"2.3 \u524d\u7aef\u955c\u50cf\u6784\u5efa"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\ntar -zxvf solidui-x.x.x-bin.tar.gz\ncd solidui-x.x.x-bin/solidui-web\ndocker build  -f ./docker/Dockerfile  -t  solidui-web:x.x.x .\n\n")))}p.isMDXComponent=!0}}]);