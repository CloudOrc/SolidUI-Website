"use strict";(self.webpackChunksolidui_website=self.webpackChunksolidui_website||[]).push([[240],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(i),m=n,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return i?a.createElement(h,r(r({ref:t},d),{},{components:i})):a.createElement(h,r({ref:t},d))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=i[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},1848:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=i(7462),n=(i(7294),i(3905));const o={title:"SolidUI generates any graphics in one sentence, v0.2.0 function introduction",date:new Date("2023-09-05T00:00:00.000Z"),tags:["SolidUI","AI","stable-diffusion"]},r=void 0,l={permalink:"/SolidUI-Website/blog/2023/09/05/0.2.0-introduction",editUrl:"https://github.com/CloudOrc/SolidUI-Website/edit/dev/blog/2023-09-05-0.2.0-introduction.md",source:"@site/blog/2023-09-05-0.2.0-introduction.md",title:"SolidUI generates any graphics in one sentence, v0.2.0 function introduction",description:"Background",date:"2023-09-05T00:00:00.000Z",formattedDate:"September 5, 2023",tags:[{label:"SolidUI",permalink:"/SolidUI-Website/blog/tags/solid-ui"},{label:"AI",permalink:"/SolidUI-Website/blog/tags/ai"},{label:"stable-diffusion",permalink:"/SolidUI-Website/blog/tags/stable-diffusion"}],readingTime:4.36,hasTruncateMarker:!1,authors:[],frontMatter:{title:"SolidUI generates any graphics in one sentence, v0.2.0 function introduction",date:"2023-09-05T00:00:00.000Z",tags:["SolidUI","AI","stable-diffusion"]},prevItem:{title:"Version Update | SolidUI 0.2.0 Release",permalink:"/SolidUI-Website/blog/2023/09/05/0.2.0-Release"},nextItem:{title:"SolidUI Community - Official Website Introduction",permalink:"/SolidUI-Website/blog/2023/09/05/Official-Website-Introduction"}},s={authorsImageUrls:[]},c=[{value:"Background",id:"background",level:2},{value:"Chat Window",id:"chat-window",level:2},{value:"Prompt Words",id:"prompt-words",level:3},{value:"Chat Window Generation",id:"chat-window-generation",level:2},{value:"Input data format for bar chart",id:"input-data-format-for-bar-chart",level:3},{value:"Surface Graph",id:"surface-graph",level:3},{value:"Scatter Plot",id:"scatter-plot",level:3},{value:"Spiral Line",id:"spiral-line",level:3},{value:"Pie Chart",id:"pie-chart",level:3},{value:"Bunny Modeling",id:"bunny-modeling",level:3},{value:"Map",id:"map",level:3},{value:"Design Page",id:"design-page",level:2},{value:"Page Layout",id:"page-layout",level:3},{value:"Preview",id:"preview",level:3},{value:"Future Plans of SolidUI Community",id:"future-plans-of-solidui-community",level:2},{value:"How to Become a Contributor",id:"how-to-become-a-contributor",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"With the rise of language models for generating images from text, SolidUI aims to help people quickly build visualization tools, including 2D, 3D, and 3D scenes, for rapid construction of three-dimensional data demonstration scenes. SolidUI is an innovative project that aims to combine natural language processing (NLP) with computer graphics to realize the function of generating graphics from text. By building its own language model for generating graphics from text, SolidUI uses the RLHF (Reinforcement Learning Human Feedback) process to realize the process from text description to graphics generation."),(0,n.kt)("p",null,"Project URL: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/CloudOrc/SolidUI"},"https://github.com/CloudOrc/SolidUI")),(0,n.kt)("p",null,"Project mirror URL: ",(0,n.kt)("a",{parentName:"p",href:"https://gitee.com/CloudOrc/SolidUI"},"https://gitee.com/CloudOrc/SolidUI")),(0,n.kt)("p",null,"Community official website: ",(0,n.kt)("a",{parentName:"p",href:"https://cloudorc.github.io/SolidUI-Website/"},"https://cloudorc.github.io/SolidUI-Website/")),(0,n.kt)("p",null,"Join the group: ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/NGRNu2mGeQ"},"https://discord.gg/NGRNu2mGeQ")),(0,n.kt)("h2",{id:"chat-window"},"Chat Window"),(0,n.kt)("p",null,"One of the three main modules in SolidUI, the Model Agent, supports a variety of model APIs (ChatGLM, GPT3.5, GPT4, etc.). The Model Agent can dynamically add various models. The chat window interacts with the Model Agent, generating any graphics with a single sentence for display."),(0,n.kt)("h3",{id:"prompt-words"},"Prompt Words"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The principle of prompt words is referred to in the collection of prompt words on the SolidUI public account."),(0,n.kt)("li",{parentName:"ul"},"The input data can be manually input or automatically generated, combined with text prompt words.")),(0,n.kt)("h2",{id:"chat-window-generation"},"Chat Window Generation"),(0,n.kt)("h3",{id:"input-data-format-for-bar-chart"},"Input data format for bar chart"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'\\[{"x":"A","y":5},{"x":"B","y":8},{"x":"C","y":12},{"x":"D","y":6},{"x":"E","y":15},{"x":"F","y":10}\\] Generate a bar chart')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image description",src:i(5688).Z,width:"800",height:"1068"})),(0,n.kt)("h3",{id:"surface-graph"},"Surface Graph"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Prompt 1")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Generate a simple 3D surface graph.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image description",src:i(3650).Z,width:"612",height:"825"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Prompt 2")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Generate a 3D surface graph, where x and y are a grid of 100 points from -5 to 5, and z is the sine of (x^2 + y^2)^(1/2). Use the 'viridis' color map and display the graph.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image description",src:i(2851).Z,width:"612",height:"931"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Prompt 3")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Create a 3D surface graph, where x and y range from -5 to 5, and z is the corresponding sine of (x^2 + y^2)^(1/2). Set the graph's color map to 'viridis', and set specific size and margins, finally display the graph.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image description",src:i(9370).Z,width:"612",height:"1095"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Prompt 4")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Generate and display an interactive 3D surface graph, where the z value of the surface is the sine of the square root of the sum of x and y's squares.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image description",src:i(5222).Z,width:"800",height:"1140"})),(0,n.kt)("h3",{id:"scatter-plot"},"Scatter Plot"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Prompt 1")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Generate a 3D scatter plot, where x, y, and z coordinates are 100 points randomly generated from a standard normal distribution.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image description",src:i(5212).Z,width:"612",height:"864"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Prompt 2")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"A 3D scatter plot has been created, where each point's color is based on a random series, colors are rendered through a hot colormap, and a color bar is attached to represent the correspondence between colors and values.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image description",src:i(3810).Z,width:"612",height:"973"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Prompt 3")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"A 3D scatter plot was generated with 200 points of size 6, where the coordinates of each point are based on a trivariate normal distribution.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image description",src:i(8210).Z,width:"612",height:"929"})),(0,n.kt)("h3",{id:"spiral-line"},"Spiral Line"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Prompt 1")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Draw a spiral line in a 3D graph.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image description",src:i(5194).Z,width:"612",height:"843"})),(0,n.kt)("h3",{id:"pie-chart"},"Pie Chart"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Prompt 1")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"A pie chart is represented in five colors (gold, yellow-green, light coral, light sky blue, purple), where the sizes of the portions are 215, 130, 245, 210, 300 respectively, labeled as 'A', 'B', 'C', 'D', 'E', and the percentage of each portion is displayed in the corresponding area. The starting angle is 140 degrees.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image description",src:i(363).Z,width:"612",height:"784"})),(0,n.kt)("h3",{id:"bunny-modeling"},"Bunny Modeling"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Prompt 1")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'Download the Stanford Bunny model from "https://graphics.stanford.edu/~mdfisher/Data/Meshes/bunny.obj" and use the trimesh library to load and display this model.\n')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image description",src:i(7062).Z,width:"612",height:"578"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://faculty.cc.gatech.edu/~turk/bunny/bunny.html"},"https://faculty.cc.gatech.edu/~turk/bunny/bunny.html")),(0,n.kt)("h3",{id:"map"},"Map"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Prompt 1")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Create a map, download link")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image description",src:i(2004).Z,width:"612",height:"750"})),(0,n.kt)("h2",{id:"design-page"},"Design Page"),(0,n.kt)("h3",{id:"page-layout"},"Page Layout"),(0,n.kt)("p",null,"Manage the layout of generated graphics, divided by scenes and pages."),(0,n.kt)("h3",{id:"preview"},"Preview"),(0,n.kt)("p",null,"Click on the project preview or Design Page -> Scene -> Page preview"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image description",src:i(9768).Z,width:"612",height:"689"})),(0,n.kt)("h2",{id:"future-plans-of-solidui-community"},"Future Plans of SolidUI Community"),(0,n.kt)("p",null,"For this situation, the SolidUI community has clear future plans. First, the community will focus on the development of the chat framework to better serve users. Secondly, the community will develop model agent APIs to better integrate various artificial intelligence models. Finally, the community will continue to research visualization models to convert text descriptions into graphics."),(0,n.kt)("p",null,"This is what SolidUI always says in every weekly meeting, that its business boundaries only focus on these three areas."),(0,n.kt)("p",null,"Overall, whether facing market difficulties or technical challenges, the SolidUI community has shown a firm determination and clear planning. We look forward to the SolidUI community bringing more innovation and value to users in future development."),(0,n.kt)("h2",{id:"how-to-become-a-contributor"},"How to Become a Contributor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Official document contribution. Discovering deficiencies in documents, optimizing documents, continuously updating documents, etc. to participate in community contributions. Through document contribution, developers can familiarize themselves with how to submit PRs and truly participate in community construction. Reference strategy: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/CloudOrc/SolidUI/discussions/54"},"https://github.com/CloudOrc/SolidUI/discussions/54")),(0,n.kt)("li",{parentName:"ul"},"Code contribution. We have sorted out simple and easy-to-start tasks in the community, which are very suitable for newcomers to contribute to the code. Please check the newbie task list: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/CloudOrc/SolidUI/issues/12"},"https://github.com/CloudOrc/SolidUI/issues/12")),(0,n.kt)("li",{parentName:"ul"},"Content contribution: Publish content related to SolidUI open source components, including but not limited to installation and deployment tutorials, usage experience, case practice, etc., in any form, please submit to the little helper. For example: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/CloudOrc/SolidUI/issues/10"},"https://github.com/CloudOrc/SolidUI/issues/10")),(0,n.kt)("li",{parentName:"ul"},"Community Q&A: Actively answer questions in the community, share technology, help developers solve problems, etc.;"),(0,n.kt)("li",{parentName:"ul"},"Others: Actively participate in community activities, become community volunteers, help community publicity, provide effective suggestions for community development, etc.;")))}u.isMDXComponent=!0},2851:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/image03-af7d6197cbbd538939c13caea371ed6b.png"},5688:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/image1-e94e2d291f16a9cf47445078fe8a63e7.png"},3650:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/image2-9a1fea16ddcd20bbcd103783e45e7d1a.png"},9370:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/images04-ab547dfceec7fd4762478ac7916ec5d2.png"},5222:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/images05-4cc71d8bdadf8941e12867c8d6f8a2fe.png"},5212:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/images06-973d359adfc34c204d37ea809ac68072.png"},3810:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/images07-eddfb5d4a451dffd76a68688c45eac10.png"},8210:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/images08-585c264b6c51d1daf3b607aa17f6f20e.png"},5194:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/images09-50798acaf3380d15ad06c8e0e6e2000f.png"},363:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/images10-60d41d0c5c293845598032e51a0d2cb6.png"},7062:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/images11-a9349b7ddffabf3d8071f4545641f7db.jpeg"},2004:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/images12-2ab1592a45568d991cf485c21a451753.png"},9768:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/images13-762ce8795cec77dccf1b303f7d568ef3.png"}}]);