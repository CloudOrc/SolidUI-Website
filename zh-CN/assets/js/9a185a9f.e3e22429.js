"use strict";(self.webpackChunksolidui_website=self.webpackChunksolidui_website||[]).push([[2449],{3905:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>c});var r=l(7294);function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function n(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){i(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,r,i=function(e,t){if(null==e)return{};var l,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):n(n({},t),e)),l},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var l=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=p(l),k=i,c=s["".concat(o,".").concat(k)]||s[k]||d[k]||a;return l?r.createElement(c,n(n({ref:t},m),{},{components:l})):r.createElement(c,n({ref:t},m))}));function c(e,t){var l=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=l.length,n=new Array(a);n[0]=k;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[s]="string"==typeof e?e:i,n[1]=u;for(var p=2;p<a;p++)n[p]=l[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,l)}k.displayName="MDXCreateElement"},436:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var r=l(7462),i=(l(7294),l(3905));const a={id:"develop-contributing",title:"\u9879\u76ee\u8d21\u732e",sidebar_position:3},n="\u5982\u4f55\u53c2\u4e0e\u9879\u76ee\u8d21\u732e",u={unversionedId:"development/develop-contributing",id:"development/develop-contributing",title:"\u9879\u76ee\u8d21\u732e",description:"\u975e\u5e38\u611f\u8c22\u8d21\u732e SolidUI \u9879\u76ee\uff01\u5728\u53c2\u4e0e\u8d21\u732e\u4e4b\u524d\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u4ee5\u4e0b\u6307\u5f15\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/develop-contributing.md",sourceDirName:"development",slug:"/development/develop-contributing",permalink:"/SolidUI-Website/zh-CN/docs/development/develop-contributing",draft:!1,editUrl:"https://github.com/CloudOrc/SolidUI-Website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/develop-contributing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"develop-contributing",title:"\u9879\u76ee\u8d21\u732e",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Docker \u7f16\u8bd1",permalink:"/SolidUI-Website/zh-CN/docs/development/development-docker"},next:{title:"\u524d\u7aef\u7f16\u8bd1",permalink:"/SolidUI-Website/zh-CN/docs/development/development-front"}},o={},p=[{value:"\u4e00\u3001\u8d21\u732e\u8303\u7574",id:"\u4e00\u8d21\u732e\u8303\u7574",level:2},{value:"1.1 Bug \u53cd\u9988\u4e0e\u4fee\u590d",id:"11-bug-\u53cd\u9988\u4e0e\u4fee\u590d",level:3},{value:"1.2 \u529f\u80fd\u4ea4\u6d41\u3001\u5b9e\u73b0\u3001\u91cd\u6784",id:"12-\u529f\u80fd\u4ea4\u6d41\u5b9e\u73b0\u91cd\u6784",level:3},{value:"1.3 Issue \u7b54\u7591",id:"13-issue-\u7b54\u7591",level:3},{value:"1.4 \u6587\u6863\u6539\u8fdb",id:"14-\u6587\u6863\u6539\u8fdb",level:3},{value:"1.5 \u5176\u4ed6",id:"15-\u5176\u4ed6",level:3},{value:"\u4e8c\u3001\u8d21\u732e\u6d41\u7a0b",id:"\u4e8c\u8d21\u732e\u6d41\u7a0b",level:2},{value:"2.1 \u5206\u652f\u7ed3\u6784",id:"21-\u5206\u652f\u7ed3\u6784",level:3},{value:"2.1.1 \u6982\u5ff5",id:"211-\u6982\u5ff5",level:4},{value:"2.1.2 \u540c\u6b65 Upstream \u4ed3\u5e93\u5206\u652f\u6700\u65b0\u4ee3\u7801\u5230\u81ea\u5df1\u7684 Fork \u4ed3\u5e93",id:"212-\u540c\u6b65-upstream-\u4ed3\u5e93\u5206\u652f\u6700\u65b0\u4ee3\u7801\u5230\u81ea\u5df1\u7684-fork-\u4ed3\u5e93",level:4},{value:"2.1.3 \u540c\u6b65 Upstream \u4ed3\u5e93\u65b0\u5206\u652f\u5230\u81ea\u5df1\u7684 Fork \u4ed3\u5e93",id:"213-\u540c\u6b65-upstream-\u4ed3\u5e93\u65b0\u5206\u652f\u5230\u81ea\u5df1\u7684-fork-\u4ed3\u5e93",level:4},{value:"2.1.4 \u4e00\u4e2a pr \u7684\u6d41\u7a0b",id:"214-\u4e00\u4e2a-pr-\u7684\u6d41\u7a0b",level:4},{value:"2.2 \u5f00\u53d1\u6307\u5f15",id:"22-\u5f00\u53d1\u6307\u5f15",level:3},{value:"2.3 Issue \u63d0\u4ea4\u6307\u5f15",id:"23-issue-\u63d0\u4ea4\u6307\u5f15",level:3},{value:"2.4 Pull Request(PR) \u63d0\u4ea4\u6307\u5f15",id:"24-pull-requestpr-\u63d0\u4ea4\u6307\u5f15",level:3},{value:"2.5 Review \u6807\u51c6",id:"25-review-\u6807\u51c6",level:3},{value:"2.5.1 \u589e\u76ca",id:"251-\u589e\u76ca",level:4},{value:"2.5.2 \u526f\u4f5c\u7528\u548c\u98ce\u9669",id:"252-\u526f\u4f5c\u7528\u548c\u98ce\u9669",level:4},{value:"2.5.3 Reviewer \u6ce8\u610f\u4e8b\u9879",id:"253-reviewer-\u6ce8\u610f\u4e8b\u9879",level:4},{value:"\u4e09\u3001\u8d21\u732e\u8fdb\u9636",id:"\u4e09\u8d21\u732e\u8fdb\u9636",level:2},{value:"3.1 \u5173\u4e8e Committers\uff08Collaborators\uff09",id:"31-\u5173\u4e8e-committerscollaborators",level:3},{value:"3.1.1 \u5982\u4f55\u6210\u4e3a Committer",id:"311-\u5982\u4f55\u6210\u4e3a-committer",level:4},{value:"3.1.2 Committer \u7684\u6743\u5229",id:"312-committer-\u7684\u6743\u5229",level:4},{value:"3.2 \u5173\u4e8e Committee",id:"32-\u5173\u4e8e-committee",level:3},{value:"3.2.1 \u5982\u4f55\u6210\u4e3a Committee \u6210\u5458",id:"321-\u5982\u4f55\u6210\u4e3a-committee-\u6210\u5458",level:4},{value:"3.2.2 Committee \u6210\u5458\u7684\u6743\u5229",id:"322-committee-\u6210\u5458\u7684\u6743\u5229",level:4}],m={toc:p},s="wrapper";function d(e){let{components:t,...l}=e;return(0,i.kt)(s,(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5982\u4f55\u53c2\u4e0e\u9879\u76ee\u8d21\u732e"},"\u5982\u4f55\u53c2\u4e0e\u9879\u76ee\u8d21\u732e"),(0,i.kt)("p",null,"\u975e\u5e38\u611f\u8c22\u8d21\u732e SolidUI \u9879\u76ee\uff01\u5728\u53c2\u4e0e\u8d21\u732e\u4e4b\u524d\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u4ee5\u4e0b\u6307\u5f15\u3002"),(0,i.kt)("h2",{id:"\u4e00\u8d21\u732e\u8303\u7574"},"\u4e00\u3001\u8d21\u732e\u8303\u7574"),(0,i.kt)("h3",{id:"11-bug-\u53cd\u9988\u4e0e\u4fee\u590d"},"1.1 Bug \u53cd\u9988\u4e0e\u4fee\u590d"),(0,i.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u65e0\u8bba\u662f Bug \u53cd\u9988\u8fd8\u662f\u4fee\u590d\uff0c\u90fd\u5148\u521b\u5efa\u4e00\u4e2a Issue \u6765\u4ed4\u7ec6\u63cf\u8ff0 Bug \u7684\u72b6\u51b5\uff0c\u4ee5\u52a9\u4e8e\u793e\u533a\u53ef\u4ee5\u901a\u8fc7 Issue \u8bb0\u5f55\u6765\u627e\u5230\u548c\u56de\u987e\u95ee\u9898\u4ee5\u53ca\u4ee3\u7801\u3002Bug \u53cd\u9988 Issue \u901a\u5e38\u9700\u8981\u5305\u542b",(0,i.kt)("strong",{parentName:"p"},"\u5b8c\u6574\u63cf\u8ff0 Bug \u7684\u4fe1\u606f"),"\u4ee5\u53ca",(0,i.kt)("strong",{parentName:"p"},"\u53ef\u590d\u73b0\u7684\u573a\u666f"),"\uff0c\u8fd9\u6837\u793e\u533a\u624d\u80fd\u5feb\u901f\u5b9a\u4f4d\u5bfc\u81f4 Bug \u7684\u539f\u56e0\u5e76\u4fee\u590d\u5b83\u3002\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"#bug")," \u6807\u7b7e\u7684\u6253\u5f00\u7684 Issue \u90fd\u662f\u9700\u8981\u88ab\u4fee\u590d\u7684\u3002"),(0,i.kt)("h3",{id:"12-\u529f\u80fd\u4ea4\u6d41\u5b9e\u73b0\u91cd\u6784"},"1.2 \u529f\u80fd\u4ea4\u6d41\u3001\u5b9e\u73b0\u3001\u91cd\u6784"),(0,i.kt)("p",null,"\u5728\u4ea4\u6d41\u8fc7\u7a0b\u4e2d\uff0c\u8be6\u7ec6\u63cf\u8ff0\u65b0\u529f\u80fd\uff08\u6216\u91cd\u6784\uff09\u7684\u7ec6\u8282\u3001\u673a\u5236\u548c\u4f7f\u7528\u573a\u666f\uff0c\u80fd\u591f\u4fc3\u4f7f\u5b83\u66f4\u597d\u66f4\u5feb\u5730\u88ab\u5b9e\u73b0\uff08\u5305\u62ec\u6d4b\u8bd5\u7528\u4f8b\u548c\u4ee3\u7801\uff0c\u53ca CI/CD \u76f8\u5173\u5de5\u4f5c\uff09\u3002",(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u8ba1\u5212\u5b9e\u73b0\u4e00\u4e2a\u91cd\u5927\u7684\u529f\u80fd\uff08\u6216\u91cd\u6784\uff09\uff0c\u8bf7\u52a1\u5fc5\u901a\u8fc7 Issue \u6216\u5176\u4ed6\u65b9\u5f0f\u4e0e\u6838\u5fc3\u5f00\u53d1\u56e2\u961f\u8fdb\u884c\u6c9f\u901a"),"\uff0c\u8fd9\u6837\u5927\u5bb6\u80fd\u4ee5\u6700\u6548\u7387\u7684\u65b9\u5f0f\u6765\u63a8\u8fdb\u5b83\u3002\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"#feature")," \u6807\u7b7e\u7684\u6253\u5f00\u7684 Issue \u90fd\u662f\u9700\u8981\u88ab\u5b9e\u73b0\u7684\u65b0\u529f\u80fd\uff0c\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"#enhancement")," \u6807\u7b7e\u6253\u5f00\u7684 Issue \u90fd\u662f\u9700\u8981\u6539\u8fdb\u91cd\u6784\u7684\u529f\u80fd\u3002"),(0,i.kt)("h3",{id:"13-issue-\u7b54\u7591"},"1.3 Issue \u7b54\u7591"),(0,i.kt)("p",null,"\u5e2e\u52a9\u56de\u7b54 Issue \u4e2d\u7684\u4f7f\u7528\u95ee\u9898\u662f\u4e3a SolidUI \u793e\u533a\u505a\u8d21\u732e\u7684\u4e00\u4e2a\u975e\u5e38\u6709\u4ef7\u503c\u7684\u65b9\u5f0f\uff1b\u793e\u533a\u4e2d\u603b\u4f1a\u6709\u65b0\u7528\u6237\u4e0d\u65ad\u8fdb\u6765\uff0c\u5728\u5e2e\u52a9\u65b0\u7528\u6237\u7684\u540c\u65f6\uff0c\u4e5f\u53ef\u4ee5\u5c55\u73b0\u60a8\u7684\u4e13\u4e1a\u77e5\u8bc6\u3002"),(0,i.kt)("h3",{id:"14-\u6587\u6863\u6539\u8fdb"},"1.4 \u6587\u6863\u6539\u8fdb"),(0,i.kt)("p",null,"SolidUI \u6587\u6863\u4f4d\u4e8e",(0,i.kt)("a",{parentName:"p",href:"https://cloudorc.github.io/SolidUI-Website/zh-CN/"},"SolidUI-Website")," \uff0c\u6587\u6863\u7684\u8865\u5145\u5b8c\u5584\u5bf9\u4e8e SolidUI \u7684\u53d1\u5c55\u4e5f\u81f3\u5173\u91cd\u8981\u3002"),(0,i.kt)("h3",{id:"15-\u5176\u4ed6"},"1.5 \u5176\u4ed6"),(0,i.kt)("p",null,"\u5305\u62ec\u53c2\u4e0e\u548c\u5e2e\u52a9\u7ec4\u7ec7\u793e\u533a\u4ea4\u6d41\u3001\u793e\u533a\u8fd0\u8425\u6d3b\u52a8\u7b49\uff0c\u5176\u4ed6\u80fd\u591f\u5e2e\u52a9 SolidUI \u9879\u76ee\u548c\u793e\u533a\u7684\u6d3b\u52a8\u3002"),(0,i.kt)("h2",{id:"\u4e8c\u8d21\u732e\u6d41\u7a0b"},"\u4e8c\u3001\u8d21\u732e\u6d41\u7a0b"),(0,i.kt)("h3",{id:"21-\u5206\u652f\u7ed3\u6784"},"2.1 \u5206\u652f\u7ed3\u6784"),(0,i.kt)("p",null,"SolidUI \u6e90\u7801\u53ef\u80fd\u4f1a\u4ea7\u751f\u4e00\u4e9b\u4e34\u65f6\u5206\u652f\uff0c\u4f46\u771f\u6b63\u6709\u660e\u786e\u610f\u4e49\u7684\u53ea\u6709\u4ee5\u4e0b\u4e8c\u4e2a\u5206\u652f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"release-*: \u7a33\u5b9a\u7684 release \u7248\u672c\uff1b"),(0,i.kt)("li",{parentName:"ul"},"dev: \u65e5\u5e38\u5f00\u53d1\u5206\u652f\uff0c\u4e5f\u662f\u5927\u5bb6\u8d21\u732e\u4ee3\u7801\u7684\u76ee\u6807\u5206\u652f\uff0c\u5982\u679c\u4f60\u60f3\u8d21\u732e\u4ee3\u7801\uff0c\u8bf7\u57fa\u4e8e dev \u5206\u652f\u521b\u5efa\u65b0\u5206\u652f\uff0c\u7248\u672c\u53d1\u5e03\u65f6\u4f1a\u57fa\u4e8edev\u65b0\u5efarelease\u5206\u652f\uff1b")),(0,i.kt)("h4",{id:"211-\u6982\u5ff5"},"2.1.1 \u6982\u5ff5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upstream \u4ed3\u5e93:",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CloudOrc/SolidUI"},"https://github.com/CloudOrc/SolidUI")," SolidUI \u4ed3\u5e93\u6587\u4e2d\u79f0\u4e3a Upstream \u4ed3\u5e93"),(0,i.kt)("li",{parentName:"ul"},"Fork \u4ed3\u5e93: \u4ece ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CloudOrc/SolidUI"},"https://github.com/CloudOrc/SolidUI")," fork \u5230\u81ea\u5df1\u4e2a\u4eba\u4ed3\u5e93 \u79f0\u4e3a Fork \u4ed3\u5e93")),(0,i.kt)("h4",{id:"212-\u540c\u6b65-upstream-\u4ed3\u5e93\u5206\u652f\u6700\u65b0\u4ee3\u7801\u5230\u81ea\u5df1\u7684-fork-\u4ed3\u5e93"},"2.1.2 \u540c\u6b65 Upstream \u4ed3\u5e93\u5206\u652f\u6700\u65b0\u4ee3\u7801\u5230\u81ea\u5df1\u7684 Fork \u4ed3\u5e93"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"step1 \u8fdb\u5165\u7528\u6237\u9879\u76ee\u9875\u9762,\u9009\u4e2d\u8981\u66f4\u65b0\u7684\u5206\u652f"),(0,i.kt)("li",{parentName:"ul"},"step2 \u70b9\u51fb code \u4e0b\u8f7d\u6309\u94ae\u4e0b\u65b9\u7684 Fetch upstream,\u9009\u62e9 Fetch and merge (\u5982\u81ea\u5df1\u7684 Fork \u4ed3\u5e93  \u8be5\u5206\u652f\u4e0d\u5c0f\u5fc3\u6c61\u67d3\u4e86\uff0c\u53ef\u4ee5\u5220\u9664\u8be5\u5206\u652f\u540e\uff0c\u540c\u6b65 Upstream \u4ed3\u5e93\u65b0\u5206\u652f\u5230\u81ea\u5df1\u7684 Fork \u4ed3\u5e93  \uff0c\u53c2\u89c1\u6307\u5f15","[\u540c\u6b65 Upstream \u4ed3\u5e93\u5206\u652f\u6700\u65b0\u4ee3\u7801\u5230\u81ea\u5df1\u7684 Fork \u4ed3\u5e93  ]","(#213-\u540c\u6b65 Upstream \u4ed3\u5e93\u65b0\u5206\u652f\u5230\u81ea\u5df1\u7684 Fork \u4ed3\u5e93  ))")),(0,i.kt)("h4",{id:"213-\u540c\u6b65-upstream-\u4ed3\u5e93\u65b0\u5206\u652f\u5230\u81ea\u5df1\u7684-fork-\u4ed3\u5e93"},"2.1.3 \u540c\u6b65 Upstream \u4ed3\u5e93\u65b0\u5206\u652f\u5230\u81ea\u5df1\u7684 Fork \u4ed3\u5e93"),(0,i.kt)("p",null,"\u573a\u666f\uff1aUpstream \u4ed3\u5e93\u6709\u65b0\u589e\u5206\u652f\uff0c\u4f46\u662f fork \u7684\u5e93\u6ca1\u6709\u8be5\u5206\u652f (\u53ef\u4ee5\u9009\u62e9\u5220\u9664\u540e\uff0c\u91cd\u65b0 fork\uff0c\u4f46\u662f\u4f1a\u4e22\u5931\u672a merge \u5230\u539f\u59cb\u4ed3\u5e93\u7684\u53d8\u66f4)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"step1 \u6253\u5f00 Git \u547d\u4ee4\u884c\u5de5\u5177\uff08\u5982 Git Bash\uff09\uff0c\u514b\u9686\u81ea\u5df1\u7684 Fork \u4ed3\u5e93\u5230\u672c\u5730")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/{your_github_username}/SolidUI.git\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"step2 \u8fdb\u5165\u672c\u5730\u4ed3\u5e93\u76ee\u5f55")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd SolidUI\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"step3 \u6dfb\u52a0 Upstream \u4ed3\u5e93\u4e3a\u8fdc\u7a0b\u4ed3\u5e93")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git remote add upstream https://github.com/CloudOrc/SolidUI.git\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"step4 \u83b7\u53d6 Upstream \u4ed3\u5e93\u7684\u5206\u652f\u4fe1\u606f")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git fetch upstream\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"step5 \u540c\u6b65 Upstream \u4ed3\u5e93\u7684\u65b0\u5206\u652f\u5230\u672c\u5730")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git checkout -b {new_branch_name} upstream/{new_branch_name}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"step6 \u5c06\u65b0\u5206\u652f\u63a8\u9001\u5230\u81ea\u5df1\u7684 Fork \u4ed3\u5e93")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git push --set-upstream origin {new_branch_name}\n")),(0,i.kt)("h4",{id:"214-\u4e00\u4e2a-pr-\u7684\u6d41\u7a0b"},"2.1.4 \u4e00\u4e2a pr \u7684\u6d41\u7a0b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"step1 \u786e\u8ba4\u5f53\u524d\u5f00\u53d1\u7684\u57fa\u7840\u5206\u652f\uff08\u4e00\u822c\u662f\u5f53\u524d\u8fdb\u884c\u7684\u4e2d\u7248\u672c\uff0c\u5982\u5f53\u524d\u793e\u533a\u5f00\u53d1\u4e2d\u7684\u7248\u672c 0.2.0\uff0c\u90a3\u4e48\u5206\u652f\u5c31\u662f dev\uff0c\u4e0d\u786e\u5b9a\u7684\u8bdd\u53ef\u4ee5\u5728\u793e\u533a\u7fa4\u91cc\u95ee\u4e0b\u6216\u5219\u5728 issue \u4e2d@\u76f8\u5173\u540c\u5b66\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"step2 \u540c\u6b65 Upstream \u4ed3\u5e93\u5206\u652f\u6700\u65b0\u4ee3\u7801\u5230\u81ea\u5df1\u7684 Fork \u4ed3\u5e93 \u5206\u652f,\u53c2\u89c1\u6307\u5f15 ","[2.1.2 \u540c\u6b65 Upstream \u4ed3\u5e93\u5206\u652f\u6700\u65b0\u4ee3\u7801\u5230\u81ea\u5df1\u7684 Fork \u4ed3\u5e93 ]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"step3 \u57fa\u4e8e\u5f00\u53d1\u5206\u652f\uff0c\u62c9\u53d6\u65b0 fix/feature \u5206\u652f (\u4e0d\u8981\u76f4\u63a5\u5728\u539f\u5206\u652f\u4e0a\u4fee\u6539\uff0c\u5982\u679c\u540e\u7eed pr \u4ee5 squash \u65b9\u5f0f merge \u540e\uff0c\u63d0\u4ea4\u7684 commit \u8bb0\u5f55\u4f1a\u88ab\u5408\u5e76\u6210\u4e00\u4e2a)"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"git checkout -b dev-fix  dev\ngit push origin dev-fix:dev-fix\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"step4  \u8fdb\u884c\u5f00\u53d1"),(0,i.kt)("li",{parentName:"ul"},"step5  \u63d0\u4ea4 pr(\u5982\u679c\u662f\u6b63\u5728\u8fdb\u884c\u4e2d,\u5f00\u53d1\u8fd8\u672a\u5b8c\u5168\u7ed3\u675f\uff0c\u8bf7\u5728 pr \u6807\u9898\u4e0a\u52a0\u4e0a WIP \u6807\u8bc6 \u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"[WIP] Dev 0.2.0 Add junit test code for [solidui-common]")," ;\u5173\u8054\u5bf9\u5e94\u7684 issue \u7b49)"),(0,i.kt)("li",{parentName:"ul"},"step6  \u7b49\u5f85\u88ab\u5408\u5e76"),(0,i.kt)("li",{parentName:"ul"},"step7  \u5220\u9664 fix/future \u5206\u652f (\u53ef\u4ee5\u5728 github \u9875\u9762\u4e0a\u8fdb\u884c\u64cd\u4f5c)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"git branch -d dev-fix\ngit push\n")),(0,i.kt)("h3",{id:"22-\u5f00\u53d1\u6307\u5f15"},"2.2 \u5f00\u53d1\u6307\u5f15"),(0,i.kt)("p",null,"SolidUI \u524d\u540e\u7aef\u4ee3\u7801\u5171\u7528\u540c\u4e00\u4e2a\u4ee3\u7801\u5e93\uff0c\u4f46\u5728\u5f00\u53d1\u4e0a\u662f\u5206\u79bb\u7684\u3002\u5728\u7740\u624b\u5f00\u53d1\u4e4b\u524d\uff0c\u8bf7\u5148\u5c06 SolidUI \u9879\u76ee fork \u4e00\u4efd\u5230\u81ea\u5df1\u7684 Github Repositories \u4e2d\uff0c \u5f00\u53d1\u65f6\u8bf7\u57fa\u4e8e\u81ea\u5df1 Github Repositories \u4e2d\u7684 SolidUI \u4ee3\u7801\u5e93\u8fdb\u884c\u5f00\u53d1\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u514b\u9686 dev \u5206\u652f\u547d\u540d\u4e3a dev-fix \u6765\u5f00\u53d1,\u540c\u65f6\u5728\u81ea\u5df1\u4ed3\u5e93\u65b0\u5efa dev-fix \u5206\u652f\uff0c\u76f4\u63a5\u5728\u539f\u5206\u652f\u4e0a\u4fee\u6539\uff0c\u5982\u679c\u540e\u7eed pr \u4ee5 squash \u65b9\u5f0f merge \u540e\uff0c\u63d0\u4ea4\u7684 commit \u8bb0\u5f55\u4f1a\u88ab\u5408\u5e76\u6210\u4e00\u4e2a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#\u62c9\u53d6\u5206\u652f\ngit clone https://github.com/{githubid}/SolidUI.git --branch dev\n#\u6839\u636e dev \u751f\u6210\u672c\u5730 dev-fix \u5206\u652f\ngit checkout -b dev-fix dev\n#\u628a\u672c\u5730 dev-fix \u5206\u652f\u63a8\u5230\u81ea\u5df1\u7684\u4ed3\u5e93\ngit push origin dev-fix dev-fix\n")),(0,i.kt)("h3",{id:"23-issue-\u63d0\u4ea4\u6307\u5f15"},"2.3 Issue \u63d0\u4ea4\u6307\u5f15"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u8fd8\u4e0d\u77e5\u9053\u600e\u6837\u5411\u5f00\u6e90\u9879\u76ee\u53d1\u8d77 PR\uff0c\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/github/managing-your-work-on-github/about-issues"},"About issues")),(0,i.kt)("li",{parentName:"ul"},"Issue \u540d\u79f0\uff0c\u5e94\u4e00\u53e5\u8bdd\u7b80\u5355\u63cf\u8ff0\u60a8\u7684\u95ee\u9898\u6216\u5efa\u8bae\uff1b\u4e3a\u4e86\u9879\u76ee\u7684\u56fd\u9645\u5316\u63a8\u5e7f\uff0c\u8bf7\u7528\u82f1\u6587\uff0c\u6216\u4e2d\u82f1\u6587\u53cc\u8bed\u4e66\u5199 issue"),(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a Issue\uff0c\u8bf7\u81f3\u5c11\u5e26\u4e0a label.\u53c2\u8003:",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CloudOrc/SolidUI/issues/63"},"issue #63"))),(0,i.kt)("h3",{id:"24-pull-requestpr-\u63d0\u4ea4\u6307\u5f15"},"2.4 Pull Request(PR) \u63d0\u4ea4\u6307\u5f15"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u8fd8\u4e0d\u77e5\u9053\u600e\u6837\u5411\u5f00\u6e90\u9879\u76ee\u53d1\u8d77 PR\uff0c\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests"},"About pull requests"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u65e0\u8bba\u662f Bug \u4fee\u590d\uff0c\u8fd8\u662f\u65b0\u529f\u80fd\u5f00\u53d1\uff0c\u8bf7\u5c06 PR \u63d0\u4ea4\u5230 dev \u5206\u652f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PR \u548c\u63d0\u4ea4\u540d\u79f0\u9075\u5faa ",(0,i.kt)("inlineCode",{parentName:"p"},"<type>(<scope>): <subject>")," \u539f\u5219\uff0c\u8be6\u60c5\u53ef\u4ee5\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/SolidUI-Website/zh-CN/docs/development/development-commit"},"Commit message \u548c Change log \u7f16\u5199\u6307\u5357"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c PR \u4e2d\u5305\u542b\u65b0\u529f\u80fd\uff0c\u7406\u5e94\u5c06\u6587\u6863\u66f4\u65b0\u5305\u542b\u5728\u672c\u6b21 PR \u4e2d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u672c\u6b21 PR \u5c1a\u672a\u51c6\u5907\u597d\u5408\u5e76\uff0c\u8bf7\u5728\u540d\u79f0\u5934\u90e8\u52a0\u4e0a ","[WIP]"," \u524d\u7f00\uff08WIP = work-in-progress\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6240\u6709\u63d0\u4ea4\u5230 dev-* \u5206\u652f\u7684\u63d0\u4ea4\u81f3\u5c11\u9700\u8981\u7ecf\u8fc7\u4e00\u6b21 Review \u624d\u53ef\u4ee5\u88ab\u5408\u5e76"))),(0,i.kt)("h3",{id:"25-review-\u6807\u51c6"},"2.5 Review \u6807\u51c6"),(0,i.kt)("p",null,"\u5728\u8d21\u732e\u4ee3\u7801\u4e4b\u524d\uff0c\u53ef\u4ee5\u4e86\u89e3\u4e00\u4e0b\u4ec0\u4e48\u6837\u7684\u63d0\u4ea4\u5728 Review \u4e2d\u662f\u53d7\u6b22\u8fce\u7684\u3002\u7b80\u5355\u6765\u8bf4\uff0c\u5982\u679c\u4e00\u9879\u63d0\u4ea4\u80fd\u5e26\u6765\u5c3d\u53ef\u80fd\u591a\u589e\u76ca\u548c\u5c3d\u53ef\u80fd\u5c11\u7684\u526f\u4f5c\u7528\u6216\u98ce\u9669\uff0c\u90a3\u5b83\u88ab\u5408\u5e76\u7684\u51e0\u7387\u5c31\u8d8a\u9ad8\uff0cReview \u7684\u901f\u5ea6\u4e5f\u4f1a\u8d8a\u5feb\u3002\u98ce\u9669\u5927\u3001\u4ef7\u503c\u4f4e\u5730\u63d0\u4ea4\u662f\u51e0\u4e4e\u4e0d\u53ef\u80fd\u88ab\u5408\u5e76\u7684\uff0c\u5e76\u4e14\u6709\u53ef\u80fd\u4f1a\u88ab\u62d2\u7edd Review\u3002"),(0,i.kt)("h4",{id:"251-\u589e\u76ca"},"2.5.1 \u589e\u76ca"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4fee\u590d\u5bfc\u81f4 Bug \u7684\u4e3b\u8981\u539f\u56e0"),(0,i.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u6216\u4fee\u590d\u4e00\u4e2a\u5927\u91cf\u7528\u6237\u4e9f\u9700\u7684\u529f\u80fd\u6216\u95ee\u9898"),(0,i.kt)("li",{parentName:"ul"},"\u7b80\u5355\u6709\u6548"),(0,i.kt)("li",{parentName:"ul"},"\u5bb9\u6613\u6d4b\u8bd5\uff0c\u6709\u6d4b\u8bd5\u7528\u4f8b"),(0,i.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u590d\u6742\u5ea6\u4ee5\u53ca\u4ee3\u7801\u91cf"),(0,i.kt)("li",{parentName:"ul"},"\u7ecf\u793e\u533a\u8ba8\u8bba\u8fc7\u7684\u3001\u786e\u5b9a\u9700\u8981\u6539\u8fdb\u7684\u95ee\u9898")),(0,i.kt)("h4",{id:"252-\u526f\u4f5c\u7528\u548c\u98ce\u9669"},"2.5.2 \u526f\u4f5c\u7528\u548c\u98ce\u9669"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4ec5\u4ec5\u4fee\u590d Bug \u7684\u8868\u9762\u73b0\u8c61"),(0,i.kt)("li",{parentName:"ul"},"\u5f15\u5165\u590d\u6742\u5ea6\u9ad8\u7684\u65b0\u529f\u80fd"),(0,i.kt)("li",{parentName:"ul"},"\u4e3a\u6ee1\u8db3\u5c0f\u4f17\u9700\u6c42\u6dfb\u52a0\u590d\u6742\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"\u6539\u52a8\u7a33\u5b9a\u7684\u73b0\u6709 API \u6216\u8bed\u4e49"),(0,i.kt)("li",{parentName:"ul"},"\u5bfc\u81f4\u5176\u4ed6\u529f\u80fd\u4e0d\u80fd\u6b63\u5e38\u8fd0\u884c"),(0,i.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5927\u91cf\u4f9d\u8d56"),(0,i.kt)("li",{parentName:"ul"},"\u968f\u610f\u6539\u53d8\u4f9d\u8d56\u7248\u672c"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u6027\u63d0\u4ea4\u5927\u91cf\u4ee3\u7801\u6216\u6539\u52a8")),(0,i.kt)("h4",{id:"253-reviewer-\u6ce8\u610f\u4e8b\u9879"},"2.5.3 Reviewer \u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u4f7f\u7528\u5efa\u8bbe\u6027\u8bed\u6c14\u64b0\u5199\u8bc4\u8bba"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u63d0\u4ea4\u8005\u8fdb\u884c\u4fee\u6539\uff0c\u8bf7\u660e\u786e\u8bf4\u660e\u5b8c\u6210\u6b64\u6b21 Pull Request \u6240\u9700\u8981\u4fee\u6539\u7684\u6240\u6709\u5185\u5bb9"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u67d0\u6b21 PR \u5728\u5408\u5e76\u540e\u53d1\u73b0\u5e26\u6765\u4e86\u65b0\u95ee\u9898\uff0cReviewer \u9700\u8981\u5411 PR \u4f5c\u8005\u8054\u7cfb\u5e76\u6c9f\u901a\u89e3\u51b3\u95ee\u9898\uff1b\u5982\u679c\u65e0\u6cd5\u8054\u7cfb\u5230 PR \u4f5c\u8005\uff0cReviewer \u9700\u8981\u5c06\u6b64\u6b21 PR \u8fdb\u884c\u8fd8\u539f")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u4e09\u8d21\u732e\u8fdb\u9636"},"\u4e09\u3001\u8d21\u732e\u8fdb\u9636"),(0,i.kt)("h3",{id:"31-\u5173\u4e8e-committerscollaborators"},"3.1 \u5173\u4e8e Committers\uff08Collaborators\uff09"),(0,i.kt)("h4",{id:"311-\u5982\u4f55\u6210\u4e3a-committer"},"3.1.1 \u5982\u4f55\u6210\u4e3a Committer"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5bf9 SolidUI \u63d0\u8fc7\u9887\u5177\u4ef7\u503c\u7684 PR \u5e76\u4e14\u88ab\u5408\u5e76\uff0c\u6216\u662f\u8fde\u7eed\u8d21\u732e\u8d85\u8fc7\u534a\u5e74\uff0c\u4e14\u81f3\u5c11\u4e3b\u5bfc\u8fc7\u4e00\u6b21\u7248\u672c\u7684\u53d1\u5e03\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5b98\u65b9\u5fae\u4fe1\u7fa4\u627e\u5230 SolidUI \u9879\u76ee\u7684\u4e00\u4e2a PMC \uff0c\u5982\u679c\u4ed6\u613f\u610f\u63d0\u540d\u60a8\u4e3a committer\uff0c\u5e76\u613f\u610f\u4e3a\u60a8\u9648\u8ff0\u60a8\u7684\u8d21\u732e\u7ed9\u6240\u6709 PMC \u548c Committer\uff0c\u90a3\u4e48\u63a5\u4e0b\u6765\u4f1a\u53d1\u8d77\u4e00\u6b21\u6295\u7968\uff1bPMC \u548c\u5176\u4ed6 Committers \u5c06\u4f1a\u4e00\u8d77\u6295\u7968\u51b3\u5b9a\u662f\u5426\u5141\u8bb8\u60a8\u7684\u52a0\u5165\uff0c\u5982\u679c\u5f97\u5230\u8db3\u591f\u7968\u6570\uff0c\u60a8\u5c06\u6210\u4e3a SolidUI \u9879\u76ee\u7684 Committer\u3002"),(0,i.kt)("h4",{id:"312-committer-\u7684\u6743\u5229"},"3.1.2 Committer \u7684\u6743\u5229"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u52a0\u5165\u5b98\u65b9\u5f00\u53d1\u8005\u5fae\u4fe1\u7fa4\uff0c\u53c2\u4e0e\u8ba8\u8bba\u548c\u5236\u5b9a SolidUI \u5f00\u53d1\u8ba1\u5212"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5bf9 Issue \u8fdb\u884c\u7ba1\u7406\uff0c\u5305\u62ec\u5173\u95ed\u3001\u6dfb\u52a0\u6807\u7b7e"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u521b\u5efa\u548c\u7ba1\u7406\u9879\u76ee\u5206\u652f\uff0cdev \u5206\u652f\u9664\u5916"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5bf9\u63d0\u4ea4\u5230 dev \u5206\u652f\u7684 PR \u8fdb\u884c Review"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7533\u8bf7\u6210\u4e3a Committee \u6210\u5458")),(0,i.kt)("h3",{id:"32-\u5173\u4e8e-committee"},"3.2 \u5173\u4e8e Committee"),(0,i.kt)("h4",{id:"321-\u5982\u4f55\u6210\u4e3a-committee-\u6210\u5458"},"3.2.1 \u5982\u4f55\u6210\u4e3a Committee \u6210\u5458"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u662f SolidUI \u9879\u76ee\u7684 Committer\uff0c\u5e76\u4e14\u60a8\u8d21\u732e\u7684\u6240\u6709\u5185\u5bb9\u5f97\u5230\u4e86\u5176\u4ed6 Committee \u6210\u5458\u7684\u8ba4\u53ef\uff0c\u60a8\u53ef\u4ee5\u7533\u8bf7\u6210\u4e3a SolidUI Committee \u6210\u5458\uff0c\u5176\u4ed6 Committee \u6210\u5458\u5c06\u4f1a\u4e00\u8d77\u6295\u7968\u51b3\u5b9a\u662f\u5426\u5141\u8bb8\u60a8\u7684\u52a0\u5165\uff0c\u5982\u679c\u5168\u7968\u901a\u8fc7\uff0c\u60a8\u5c06\u6210\u4e3a SolidUI Committee \u6210\u5458\u3002"),(0,i.kt)("h4",{id:"322-committee-\u6210\u5458\u7684\u6743\u5229"},"3.2.2 Committee \u6210\u5458\u7684\u6743\u5229"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5408\u5e76\u5176\u4ed6 Committers \u548c\u8d21\u732e\u8005\u63d0\u4ea4\u5230 dev \u5206\u652f\u7684 PR"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u53c2\u4e0e\u51b3\u5b9a SolidUI \u9879\u76ee\u7684 roadmap \u548c\u53d1\u5c55\u65b9\u5411"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u53c2\u4e0e\u65b0\u7248\u672c\u53d1\u5e03")))}d.isMDXComponent=!0}}]);