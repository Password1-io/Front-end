(()=>{var e={};e.id=6093,e.ids=[6093],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},90881:(e,s,a)=>{"use strict";a.r(s),a.d(s,{GlobalError:()=>n.a,__next_app__:()=>h,originalPathname:()=>m,pages:()=>d,routeModule:()=>g,tree:()=>o});var i=a(50482),l=a(69108),t=a(62563),n=a.n(t),r=a(68300),c={};for(let e in r)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>r[e]);a.d(s,c);let o=["",{children:["home",{children:["app-landing",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,86291)),"/Users/varand/Documents/Coding/Password1/app/home/app-landing/page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,73472)),"/Users/varand/Documents/Coding/Password1/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,98211)),"/Users/varand/Documents/Coding/Password1/app/not-found.jsx"]}],d=["/Users/varand/Documents/Coding/Password1/app/home/app-landing/page.jsx"],m="/home/app-landing/page",h={require:a,loadChunk:()=>Promise.resolve()},g=new i.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/home/app-landing/page",pathname:"/home/app-landing",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},17491:(e,s,a)=>{Promise.resolve().then(a.bind(a,47651)),Promise.resolve().then(a.bind(a,66352)),Promise.resolve().then(a.bind(a,17651)),Promise.resolve().then(a.bind(a,99316)),Promise.resolve().then(a.t.bind(a,31900,23)),Promise.resolve().then(a.t.bind(a,61476,23))},47651:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>c});var i=a(95344),l=a(3729),t=a(97357),n=a(56506),r=a(89410);let c=()=>{let[e,s]=(0,l.useState)(!1),a=()=>{window.scrollY>=10?s(!0):s(!1)};return(0,l.useEffect)(()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}),[]),i.jsx("header",{className:`theme-main-menu sticky-menu theme-menu-three white-vr ${e?"fixed":""}`,children:i.jsx("div",{className:"inner-content position-relative",children:(0,i.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[i.jsx("div",{className:"logo order-lg-0",children:i.jsx(n.default,{href:"/",className:"d-block",children:i.jsx(r.default,{src:"/images/logo/logo_02.png",alt:"logo",width:95,height:30})})}),(0,i.jsxs)("div",{className:"right-widget ms-auto d-flex align-items-center order-lg-3",children:[i.jsx(n.default,{href:"/login",className:"login-btn-two fw-500 d-flex align-items-center me-3",children:"Login"}),(0,i.jsxs)(n.default,{href:"/signup",className:"signup-btn-one tran3s position-relative ps-3 d-none d-lg-block",children:[i.jsx("span",{className:"fw-500",children:"Sign up"}),"- It’s Free"]})]}),i.jsx(t.Z,{})]})})})}},66352:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>n});var i=a(95344),l=a(3729),t=a(33408);let n=()=>{let[e,s]=(0,l.useState)(!1),[a,n]=(0,l.useState)(""),[r,c]=(0,l.useState)(!1),o=(e,s)=>{e.preventDefault(),n(s),c(!1)};return(0,i.jsxs)(i.Fragment,{children:[i.jsx(t.Z,{channel:"youtube",autoplay:!0,isOpen:e,videoId:"20QUNgFIrK0",onClose:()=>s(!1)}),(0,i.jsxs)("div",{className:"d-sm-flex align-items-center",children:[(0,i.jsxs)("div",{className:"fancybox video-icon tran3s mb-25 d-flex align-items-center order-sm-last",onClick:()=>s(!0),role:"button",children:[i.jsx("i",{className:"bi bi-play"}),(0,i.jsxs)("div",{className:"ps-3",children:[i.jsx("span",{className:"d-block fs-15 text-uppercase",children:"Watch"}),i.jsx("strong",{className:"fs-18 fw-normal tx-dark d-block",children:"Intro Video"})]})]}),(0,i.jsxs)("div",{className:"dropdown download-btn d-inline-block mb-25 me-4 order-sm-first",onClick:()=>{c(!r)},children:[i.jsx("button",{className:"dropdown-toggle tran3s",type:"button",id:"appDownBtn","data-bs-toggle":"dropdown","aria-expanded":"false",children:a||"Download - It’s free"}),i.jsx("ul",{className:`dropdown-menu ${r?"show":""}`,"aria-labelledby":"appDownBtn",children:[{value:"IOS & Android",label:"IOS & Android",icon:"/images/icon/icon_22.svg"},{value:"Mac & Windows",label:"Mac & Windows",icon:"/images/icon/icon_23.svg"}].map((e,s)=>i.jsx("li",{children:(0,i.jsxs)("a",{className:"dropdown-item d-flex align-items-center fw-500",href:"#",onClick:s=>o(s,e.label),children:[i.jsx("img",{src:e.icon,alt:""}),i.jsx("span",{className:"ps-2",children:e.label})]})},s))})]})]})]})}},17651:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});var i=a(95344),l=a(56506);let t=()=>(0,i.jsxs)("div",{className:"subscribe-form m-auto","data-aos":"fade-up",children:[(0,i.jsxs)("form",{onSubmit:e=>{e.preventDefault()},action:"#",className:"position-relative",children:[i.jsx("input",{type:"email",placeholder:"Email address"}),i.jsx("button",{className:"tran3s position-absolute fw-500",children:"Try for free"})]}),(0,i.jsxs)("p",{className:"m0 pt-20 text-white",children:["Already a member?"," ",i.jsx(l.default,{href:"/login",className:"fw-500 text-decoration-underline",children:"Sign in."})]})]})},99316:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>n});var i=a(95344);a(3729);var l=a(11655);let t=[{name:"Martin Jonas",location:"USA",image:"/images/media/img_18.jpg",rating:5,feedback:"We have 9,000 agents around the country. Find agents near your neighborhood."},{name:"Rashed ka.",location:"Brazil",image:"/images/media/img_19.jpg",rating:5,feedback:"We have 9,000 agents around the country. Find agents near your neighborhood."},{name:"Jannatul Fa.",location:"England",image:"/images/media/img_20.jpg",rating:5,feedback:"We have 9,000 agents around the country. Find agents near your neighborhood."},{name:"Martin Jonas",location:"USA",image:"/images/media/img_18.jpg",rating:5,feedback:"We have 9,000 agents around the country. Find agents near your neighborhood."},{name:"Rashed ka.",location:"Brazil",image:"/images/media/img_19.jpg",rating:5,feedback:"We have 9,000 agents around the country. Find agents near your neighborhood."}],n=()=>i.jsx(l.Z,{dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}},{breakpoint:576,settings:{slidesToShow:1,dots:!1}}],children:t.map((e,s)=>i.jsx("div",{className:"item",children:(0,i.jsxs)("div",{className:"feedback-block-three",children:[i.jsx("ul",{className:"style-none d-flex rating",children:[...Array(e.rating)].map((e,s)=>i.jsx("li",{children:i.jsx("i",{className:"bi bi-star-fill"})},s))}),i.jsx("p",{children:e.feedback}),(0,i.jsxs)("div",{className:"d-flex align-items-center",children:[i.jsx("img",{src:e.image,alt:"media",className:"avatar rounded-circle"}),(0,i.jsxs)("h6",{className:"name fs-20 fw-500 m0 ps-4",children:[e.name," ",i.jsx("span",{className:"d-block fw-normal",children:e.location})]}),i.jsx("img",{src:"/images/icon/icon_35.svg",alt:"media",className:"ms-auto"})]})]})},s))})},86291:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>W,metadata:()=>T});var i=a(25036);a(40002);var l=a(86843);let t=(0,l.createProxy)(String.raw`/Users/varand/Documents/Coding/Password1/components/home-page/home-7/Header.jsx`),{__esModule:n,$$typeof:r}=t,c=t.default,o=(0,l.createProxy)(String.raw`/Users/varand/Documents/Coding/Password1/components/home-page/home-7/HeroBtnGroup.jsx`),{__esModule:d,$$typeof:m}=o,h=o.default,g=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("a",{href:"#",className:"slogan d-inline-block",children:[i.jsx("strong",{className:"fw-500",children:"Offer"})," is going on till friday, $1.99/mo. ",i.jsx("i",{className:"fas fa-chevron-right"})]}),i.jsx("h1",{className:"hero-heading fw-bold mt-45 mb-40 md-mt-20",children:"Word’s No. 1 app for Online training."}),i.jsx("p",{className:"text-lg mb-50 lg-mb-30 pe-xxl-4",children:"Janu delivered blazing fast performance, striking word soludtion"}),i.jsx(h,{}),i.jsx("h2",{className:"fw-500 mt-40 mb-5",children:"A+ Rating "}),i.jsx("p",{className:"fs-18 opacity-75",children:"Avg rating 4.8 makes us world most best apps."})]}),p=[{id:1,icon:"/images/icon/icon_24.svg",title:"Core WP",text:"The core of our service is based on the objective investment advice we seek to provide supported.",backgroundColor:"#FFEBDB"},{id:2,icon:"/images/icon/icon_25.svg",title:"Easy Customizable",text:"Through our Family Office Services, we are able to provide the expertise derived from our beginnings.",backgroundColor:"#E0F8F8"},{id:3,icon:"/images/icon/icon_26.svg",title:"Fast Support",text:"Capco’s response is proven by our superb record of driving change through effective portfolio.",backgroundColor:"#F7EDFF"}],x=({icon:e,title:s,text:a,backgroundColor:l})=>(0,i.jsxs)("div",{className:"card-style-four text-center position-relative mt-40 xs-mt-20",children:[i.jsx("div",{className:"icon rounded-circle m-auto d-flex align-items-center justify-content-center",style:{backgroundColor:l},children:i.jsx("img",{src:e,alt:"icon",className:"lazy-img"})}),i.jsx("h4",{className:"fw-500 mt-35 mb-25",children:i.jsx("a",{href:"#",className:"tran3s tx-dark",children:s})}),i.jsx("p",{className:"mb-30",children:a}),i.jsx("a",{href:"#",children:i.jsx("img",{src:"/images/icon/icon_05.svg",alt:"icon",className:"lazy-img"})})]}),u=()=>i.jsx(i.Fragment,{children:p.map(e=>i.jsx("div",{className:"col-lg-4 col-md-6","data-aos":"fade-up","data-aos-delay":100*e.id,children:i.jsx(x,{icon:e.icon,title:e.title,text:e.text,backgroundColor:e.backgroundColor})},e.id))}),j=()=>(0,i.jsxs)("div",{className:"block-style-three","data-aos":"fade-right",children:[i.jsx("div",{className:"title-style-four",children:(0,i.jsxs)("h2",{className:"main-title fw-500 tx-dark m0",children:["Grow your business by using our ",i.jsx("span",{children:"apps."})]})}),i.jsx("p",{className:"text-lg pt-35 pb-30 lg-pb-10",children:"Things go wrong have questions. We’ve understand. So we have people"}),i.jsx("ul",{className:"style-none list-item fs-18",children:["Amazing communication.","Best trending designing experience.","Email & Live chat."].map((e,s)=>i.jsx("li",{children:e},s))}),i.jsx("div",{className:"d-sm-flex align-items-center platform-button-group mt-60 lg-mt-30",children:[{href:"#",imgSrc:"/images/icon/apple.svg",imgAlt:"media",platform:"App store"},{href:"#",imgSrc:"/images/icon/playstore.svg",imgAlt:"media",platform:"Google play"}].map((e,s)=>(0,i.jsxs)("a",{href:e.href,className:`d-flex align-items-center ${"App store"===e.platform?"ios-button":"windows-button"}`,children:[i.jsx("img",{src:e.imgSrc,alt:e.imgAlt,className:"lazy-img icon"}),(0,i.jsxs)("div",{children:[i.jsx("span",{children:"Download on the"}),i.jsx("strong",{children:e.platform})]})]},s))})]}),v=()=>{let e=[{iconSrc:"/images/icon/icon_27.svg",title:"Friendly user interface"},{iconSrc:"/images/icon/icon_28.svg",title:"Quality & fast support"},{iconSrc:"/images/icon/icon_29.svg",title:"SEO Optimization"}];return(0,i.jsxs)("div",{className:"screen-container position-relative ms-auto",children:[i.jsx("img",{src:"/images/shape/shape_45.svg",alt:"shape",className:"lazy-img shapes bg-round-shape"}),i.jsx("div",{className:"block-content",children:(0,i.jsxs)("div",{className:"row gx-xxl-5 align-items-center",children:[i.jsx("div",{className:"col-sm-6",children:e.slice(0,2).map((e,s)=>(0,i.jsxs)("div",{className:`card-style-five  ${0===s?"fadeInDown":"fadeInUp"}`,"data-aos":"fade-up","data-aos-delay":"200",children:[i.jsx("div",{className:"icon d-flex align-items-end",children:i.jsx("img",{src:e.iconSrc,alt:"shape",className:"lazy-img"})}),i.jsx("h4",{children:e.title})]},s))}),i.jsx("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"card-style-five xs-mt-10","data-aos-delay":"200","data-aos":"fade-left",children:[i.jsx("div",{className:"icon d-flex align-items-end",children:i.jsx("img",{src:e[2].iconSrc,alt:"shape",className:"lazy-img"})}),i.jsx("h4",{children:e[2].title})]})})]})})]})},f=()=>(0,i.jsxs)("div",{className:"wrapper position-relative","data-aos":"fade-up",children:[(0,i.jsxs)("div",{className:"circle-one rounded-circle position-relative m-auto",children:[[{className:"block-bg shapes tran3s block-one d-flex align-items-center justify-content-center",text:"Trusted & strong security"},{className:"block-bg shapes tran3s block-two d-flex align-items-center justify-content-center",text:"Free cloud storage"},{className:"block-bg shapes tran3s block-three d-flex align-items-center justify-content-center",text:"Easy Customizable"},{className:"block-bg shapes tran3s block-four d-flex align-items-center justify-content-center",text:"SEO Optimized"},{className:"block-bg shapes tran3s block-five d-flex align-items-center justify-content-center",text:"User Friendly Interface"}].map((e,s)=>i.jsx("div",{className:e.className,children:i.jsx("span",{children:e.text})},s)),(0,i.jsxs)("div",{className:"circle-two rounded-circle position-relative",children:[i.jsx("div",{children:[{src:"/images/icon/icon_30.svg",alt:"shape",className:"lazy-img shapes icon-one"},{src:"/images/icon/icon_31.svg",alt:"shape",className:"lazy-img shapes icon-two"},{src:"/images/icon/icon_32.svg",alt:"shape",className:"lazy-img shapes icon-three"},{src:"/images/icon/icon_33.svg",alt:"shape",className:"lazy-img shapes icon-four"},{src:"/images/icon/icon_34.svg",alt:"shape",className:"lazy-img shapes icon-five"}].map((e,s)=>i.jsx("img",{src:e.src,alt:e.alt,className:e.className},s))}),i.jsx("div",{className:"circle-three rounded-circle"})]})]}),i.jsx("div",{className:"mobile-screen",children:i.jsx("img",{src:"/images/media/img_17.png",alt:"shape",className:"lazy-img m-auto"})}),i.jsx("img",{src:"/images/shape/shape_47.svg",alt:"shape",className:"lazy-img shapes fancy-shape"})]}),N=(0,l.createProxy)(String.raw`/Users/varand/Documents/Coding/Password1/components/home-page/home-7/Testimonial.jsx`),{__esModule:b,$$typeof:y}=N,w=N.default,k=[{id:"1",question:"How does the free trial work?",answer:"Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt."},{id:"2",question:"How do you weigh different criteria in process?",answer:"Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt."},{id:"3",question:"What does janu look for in an idea?",answer:"Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt."},{id:"4",question:"What do you look for in a founding team?",answer:"Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt."}],_=()=>i.jsx("div",{className:"accordion accordion-style-one md-mt-40",id:"accordionOne",children:k.map(e=>(0,i.jsxs)("div",{className:"accordion-item",children:[i.jsx("div",{className:"accordion-header",id:"heading"+e.id,children:i.jsx("button",{className:`accordion-button${"3"!==e.id?" collapsed":""}`,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse"+e.id,"aria-expanded":"3"===e.id?"true":"false","aria-controls":"collapse"+e.id,children:e.question})}),i.jsx("div",{id:"collapse"+e.id,className:`accordion-collapse collapse${"3"===e.id?" show":""}`,"aria-labelledby":"heading"+e.id,"data-bs-parent":"#accordionOne",children:i.jsx("div",{className:"accordion-body",children:i.jsx("p",{children:e.answer})})})]},e.id))}),P=[{id:"reguler",price:"$13",plan:"Reguler Plan",features:["Unlimited Email","5gb Hosting & Domain","Email & Live chat.","Cloud"]},{id:"flexible",price:"$20",plan:"Flexible Plan",features:["Unlimited Email","5gb Hosting & Domain","2 website 3 sub domain","Email & Live chat.","Backling","Discount Programe"],active:!0},{id:"business",price:"$43",plan:"Business Plan",features:["Unlimited Email","5gb Hosting & Domain","Email & Live chat.","Cloud"]}],z=[{id:"reguler",price:"$113",plan:"Reguler Plan",features:["Unlimited Email","5gb Hosting & Domain","Email & Live chat.","Cloud"]},{id:"flexible",price:"$210",plan:"Flexible Plan",features:["Unlimited Email","5gb Hosting & Domain","2 website 3 sub domain","Email & Live chat.","Backling","Discount Programe"],active:!0},{id:"business",price:"$413",plan:"Business Plan",features:["Unlimited Email","5gb Hosting & Domain","Email & Live chat.","Cloud"]}],F=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("ul",{className:"nav nav-tabs justify-content-center border-0 pricing-nav-two","data-aos":"fade-up",role:"tablist",children:[i.jsx("li",{className:"nav-item",role:"presentation",children:i.jsx("button",{className:"nav-link active","data-bs-toggle":"tab","data-bs-target":"#month",type:"button",role:"tab",children:"Monthly"})}),i.jsx("li",{className:"nav-item",role:"presentation",children:i.jsx("button",{className:"nav-link","data-bs-toggle":"tab","data-bs-target":"#year",type:"button",role:"tab",children:"Yearly"})})]}),i.jsx("div",{className:"mt-80 lg-mt-50","data-aos":"fade-up",children:(0,i.jsxs)("div",{className:"tab-content",children:[i.jsx("div",{className:"tab-pane show active",id:"month",children:i.jsx("div",{className:"row",children:i.jsx("div",{className:"col-xxl-11 m-auto",children:i.jsx("div",{className:"row gx-xxl-5 align-items-center pricing-table-area-two",children:P.map(e=>i.jsx("div",{className:"col-lg-4 col-sm-6",children:(0,i.jsxs)("div",{className:`pr-column mt-40 ${e.active?"active":""}`,children:[(0,i.jsxs)("div",{className:"pr-header pb-30 mb-45",children:[i.jsx("div",{className:"price fw-500 tx-dark",children:e.price}),i.jsx("div",{className:"plan tx-dark",children:e.plan})]}),i.jsx("div",{className:"pr-body",children:i.jsx("ul",{className:"style-none text-start",children:e.features.map((e,s)=>i.jsx("li",{children:e},s))})}),(0,i.jsxs)("div",{className:"pr-footer pt-55 lg-pt-30",children:[i.jsx("div",{className:"trial-text opacity-75 mb-20",children:"Up to 7 user + 1.99 per user"}),i.jsx("a",{href:"#",className:"signup-btn fw-500 tran3s w-100",children:"Sign up"})]})]})},e.id))})})})}),i.jsx("div",{className:"tab-pane",id:"year",children:i.jsx("div",{className:"row",children:i.jsx("div",{className:"col-xxl-11 m-auto",children:i.jsx("div",{className:"row gx-xxl-5 align-items-center pricing-table-area-two",children:z.map(e=>i.jsx("div",{className:"col-lg-4 col-sm-6",children:(0,i.jsxs)("div",{className:`pr-column mt-40 ${e.active?"active":""}`,children:[(0,i.jsxs)("div",{className:"pr-header pb-30 mb-45",children:[i.jsx("div",{className:"price fw-500 tx-dark",children:e.price}),i.jsx("div",{className:"plan tx-dark",children:e.plan})]}),i.jsx("div",{className:"pr-body",children:i.jsx("ul",{className:"style-none text-start",children:e.features.map((e,s)=>i.jsx("li",{children:e},s))})}),(0,i.jsxs)("div",{className:"pr-footer pt-55 lg-pt-30",children:[i.jsx("div",{className:"trial-text opacity-75 mb-20",children:"Up to 7 user + 1.99 per user"}),i.jsx("a",{href:"#",className:"signup-btn fw-500 tran3s w-100",children:"Sign up"})]})]})},e.id))})})})})]})})]}),S=()=>i.jsx(i.Fragment,{children:["Plogo-7.png","Plogo-8.png","Plogo-9.png","Plogo-10.png","Plogo-11.png","Plogo-12.png","Plogo-13.png"].map((e,s)=>i.jsx("div",{className:"logo d-flex align-items-center justify-content-center",children:i.jsx("img",{src:`/images/logo/${e}`,alt:"logo",className:"lazy-img"})},s))}),C=()=>i.jsx(i.Fragment,{children:[{icon:"/images/icon/icon_37.svg",title:"Our Address",address:"1012 Pebda Parkway, Mirpur 2\nDhaka, Bangladesh"},{icon:"/images/icon/icon_38.svg",title:"Contact Info",address:"Open a chat or give us call at\n310.841.5500"}].map((e,s)=>i.jsx("div",{className:"col-md-6 d-flex",children:(0,i.jsxs)("div",{className:"address-block-one",children:[i.jsx("div",{className:"icon position-absolute",children:i.jsx("img",{src:e.icon,alt:"icon",className:"lazy-img"})}),(0,i.jsxs)("div",{className:"text-meta",children:[i.jsx("h4",{className:"title",children:e.title}),i.jsx("p",{className:"fs-18",children:e.address})]})]})},s))}),E=(0,l.createProxy)(String.raw`/Users/varand/Documents/Coding/Password1/components/home-page/home-7/Subsribe.jsx`),{__esModule:D,$$typeof:A}=E,q=E.default,$=()=>i.jsx("ul",{className:"d-flex justify-content-center social-icon style-none",children:[{platform:"facebook-f",url:"#"},{platform:"twitter",url:"#"},{platform:"linkedin",url:"#"}].map(e=>i.jsx("li",{children:i.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:i.jsx("i",{className:`fab fa-${e.platform}`})})},e.platform))});var U=a(16274),O=a(2813);let T={title:"App Landing || Jano - Creative Multipurpose React NextJS Template"},W=()=>(0,i.jsxs)(i.Fragment,{children:[i.jsx(c,{}),(0,i.jsxs)("div",{className:"hero-banner-three position-relative pt-200 md-pt-150","data-aos":"fade-right",children:[i.jsx("div",{className:"container",children:i.jsx("div",{className:"row",children:i.jsx("div",{className:"col-lg-6",children:i.jsx(g,{})})})}),i.jsx("div",{className:"mobile-screen","data-aos":"fade-right",children:(0,i.jsxs)("div",{className:"row gx-xxl-5 justify-content-center align-items-center",children:[i.jsx("div",{className:"col-6",children:i.jsx(O.default,{width:332,height:666,src:"/images/media/img_13.png",alt:"media",className:"lazy-img screen-one"})}),(0,i.jsxs)("div",{className:"col-6",children:[(0,i.jsxs)("div",{className:"card-one d-flex align-items-center mb-50 xs-mb-20",children:[i.jsx("div",{className:"icon rounded-circle d-none d-sm-flex align-items-center justify-content-center",children:i.jsx("i",{className:"bi bi-check-lg"})}),i.jsx("h6",{className:"fw-500 fs-20 ps-sm-4 m0",children:"Save up to 50% in Yearly plan."})]}),i.jsx(O.default,{width:329,height:661,src:"/images/media/img_14.png",alt:"media",className:"lazy-img screen-two"})]})]})})]}),(0,i.jsxs)("div",{className:"fancy-feature-seven pt-200 lg-pt-100",children:[i.jsx("div",{className:"container",children:(0,i.jsxs)("div",{className:"row align-items-center",children:[i.jsx("div",{className:"col-xl-6 col-lg-5","data-aos":"fade-right",children:i.jsx("div",{className:"title-style-four text-center text-lg-start",children:(0,i.jsxs)("h2",{className:"main-title fw-500 tx-dark m0",children:["Our Application ",i.jsx("span",{children:"Features."})]})})}),i.jsx("div",{className:"col-lg-6 ms-auto","data-aos":"fade-left",children:i.jsx("p",{className:"text-lg text-center text-lg-start md-pt-30 m0",children:"Commonly used in the graphic, print publishing industris for previewing visual mockups. limited social discrimination."})})]})}),i.jsx("div",{className:"container pt-50 lg-pt-10",children:i.jsx("div",{className:"row gx-xxl-5",children:i.jsx(u,{})})})]}),(0,i.jsxs)("div",{className:"fancy-feature-eight position-relative mt-225 xl-mt-150 md-mt-100",children:[i.jsx("div",{className:"container",children:i.jsx("div",{className:"row",children:i.jsx("div",{className:"col-xl-5 col-lg-6 col-md-7 ms-auto order-lg-last",children:i.jsx(j,{})})})}),(0,i.jsxs)("div",{className:"illustration-holder",children:[i.jsx("img",{src:"/images/media/img_15.jpg",alt:"media",className:"lazy-img main-img"}),i.jsx("img",{src:"/images/media/img_16.png",alt:"media",className:"lazy-img shapes screen-one"}),i.jsx("img",{src:"/images/shape/shape_44.svg",alt:"media",className:"lazy-img shapes shape-one"})]})]}),i.jsx("div",{className:"fancy-feature-nine position-relative pt-250 lg-pt-130",children:i.jsx("div",{className:"container",children:(0,i.jsxs)("div",{className:"row align-items-center",children:[i.jsx("div",{className:"col-lg-5",children:(0,i.jsxs)("div",{className:"block-style-three","data-data-aos":"fade-right",children:[(0,i.jsxs)("div",{className:"title-style-four",children:[(0,i.jsxs)("div",{className:"sc-title",children:["Over",i.jsx("span",{className:"text-decoration-underline",style:{color:"#6A45FF"},children:"150,000+ client"})]}),(0,i.jsxs)("h2",{className:"main-title fw-500 tx-dark m0",children:["Why you choose Jano ",i.jsx("span",{children:"app?"})]})]}),i.jsx("p",{className:"fs-20 pt-45 pe-xxl-5",children:"Lorem ipsum dolor on adipisci elit sed do eiusmod tempor dolo mag dsu aliqua enim ad minimum quis text."})]})}),i.jsx("div",{className:"col-lg-7 col-md-9 m-auto text-center text-lg-right","data-data-aos":"fade-left",children:i.jsx(v,{})})]})})}),i.jsx("div",{className:"fancy-feature-ten position-relative mt-170 lg-mt-100",children:(0,i.jsxs)("div",{className:"container",children:[i.jsx("div",{className:"row",children:i.jsx("div",{className:"col-lg-6 col-md-8 m-auto",children:(0,i.jsxs)("div",{className:"title-style-four text-center pb-100","data-aos":"fade-up",children:[i.jsx("div",{className:"sc-title-two",style:{color:"#6A45FF"},children:"Features"}),(0,i.jsxs)("h2",{className:"main-title fw-500 tx-dark m0",children:["Check key features of our ",i.jsx("span",{children:"apps"})]})]})})}),i.jsx(f,{})]})}),(0,i.jsxs)("div",{className:"feedback-section-three position-relative mt-225 lg-mt-120 pb-100","data-data-aos":"fade-up",children:[(0,i.jsxs)("div",{className:"container",children:[i.jsx("div",{className:"row",children:i.jsx("div",{className:"col-xl-5 col-lg-6 ms-auto",children:(0,i.jsxs)("div",{className:"title-style-four text-center text-lg-start pb-100 lg-pb-30",children:[i.jsx("div",{className:"sc-title-two",style:{color:"#6A45FF"},children:"Testimonials"}),(0,i.jsxs)("h2",{className:"main-title fw-500 tx-dark m0",children:["You’r gonna love us ",i.jsx("span",{children:"forever."})]})]})})}),i.jsx("div",{className:"slider-wrapper",children:i.jsx("div",{className:"feedback_slider_three",children:i.jsx(w,{})})})]}),(0,i.jsxs)("div",{className:"shape-holder",children:[i.jsx("img",{src:"/images/shape/shape_48.svg",alt:"shape",className:"lazy-img"}),i.jsx("img",{src:"/images/media/img_22.jpg",alt:"media",className:"lazy-img shapes rounded-circle avatar-one",style:{width:"50px",height:"50px"}}),i.jsx("img",{src:"/images/media/img_23.jpg",alt:"media",className:"lazy-img shapes rounded-circle avatar-two",style:{width:"80px",height:"80px"}}),i.jsx("img",{src:"/images/media/img_24.jpg",alt:"media",className:"lazy-img shapes rounded-circle avatar-three",style:{width:"60px",height:"60px"}}),i.jsx("img",{src:"/images/media/img_25.jpg",alt:"media",className:"lazy-img shapes rounded-circle avatar-four",style:{width:"80px",height:"80px"}})]})]}),(0,i.jsxs)("div",{className:"fancy-feature-eleven position-relative mt-200 lg-mt-120 md-mt-10",children:[i.jsx("div",{className:"container",children:(0,i.jsxs)("div",{className:"row align-items-start align-items-xl-center",children:[(0,i.jsxs)("div",{className:"col-xl-5 col-lg-6","data-aos":"fade-right",children:[(0,i.jsxs)("div",{className:"title-style-four",children:[i.jsx("div",{className:"sc-title-two",style:{color:"#6A45FF"},children:"Questions & Answers"}),(0,i.jsxs)("h2",{className:"main-title fw-500 tx-dark m0",children:["Have any thought ",i.jsx("span",{children:"find"})," here."]})]}),i.jsx("div",{className:"fs-15 fw-500 pt-70 pb-5 lg-pt-40",style:{color:"#6A45FF"},children:"Confusion?"}),i.jsx("p",{className:"text-lg mb-45",children:"Don’t find your answer here? just send us a message for help"}),i.jsx(U.default,{href:"/contact",className:"btn-seven",children:"Contact us"})]}),i.jsx("div",{className:"col-lg-6 ms-auto","data-aos":"fade-left",children:i.jsx(_,{})})]})}),i.jsx("img",{src:"/images/shape/shape_49.svg",alt:"shape",className:"lazy-img shapes shape-one"}),i.jsx("img",{src:"/images/shape/shape_50.svg",alt:"shape",className:"lazy-img shapes shape-two"}),i.jsx("img",{src:"/images/shape/shape_51.svg",alt:"shape",className:"lazy-img shapes shape-three"})]}),(0,i.jsxs)("div",{className:"pricing-section-two position-relative pt-150 pb-150 mt-180 lg-mt-120 lg-pt-70 lg-pb-70",children:[(0,i.jsxs)("div",{className:"container",children:[i.jsx("div",{className:"row",children:i.jsx("div",{className:"col-lg-8 col-md-9 m-auto",children:i.jsx("div",{className:"title-style-four text-center pb-70 lg-pb-40 ","data-aos":"fade-up",children:(0,i.jsxs)("h2",{className:"main-title fw-500 tx-dark m0",children:["No hidden ",i.jsx("span",{children:"charge"}),", Choose your plan."]})})})}),i.jsx(F,{})]}),i.jsx("img",{src:"/images/shape/shape_52.svg",alt:"shape",className:"lazy-img shapes shape-one"}),i.jsx("img",{src:"/images/shape/shape_53.svg",alt:"shape",className:"lazy-img shapes shape-two"}),i.jsx("img",{src:"/images/shape/shape_54.svg",alt:"shape",className:"lazy-img shapes shape-three"}),i.jsx("img",{src:"/images/shape/shape_55.svg",alt:"shape",className:"lazy-img shapes shape-four"})]}),(0,i.jsxs)("div",{className:"partner-section-two position-relative mt-225 mb-250 md-mt-120 md-mb-120",children:[i.jsx("div",{className:"container",children:i.jsx("div",{className:"row align-items-center",children:(0,i.jsxs)("div",{className:"col-xl-5 col-lg-6","data-data-aos":"fade-right",children:[(0,i.jsxs)("div",{className:"title-style-four",children:[i.jsx("div",{className:"sc-title-two",style:{color:"#6A45FF"},children:"Our Partners"}),i.jsx("h2",{className:"main-title fw-500 tx-dark m0",children:"Our Trusted Partners."})]}),i.jsx("p",{className:"fs-20 pt-30 pe-xxl-5",children:"Lorem ipsum dolor on adipisci elit sed do eiusmod tempor dolo mag dsu aliqua eni ad minim lut emit."})]})})}),i.jsx("div",{className:"logo-wrapper d-flex flex-wrap justify-content-center align-items-center",children:i.jsx(S,{})}),i.jsx("img",{src:"/images/shape/shape_49.svg",alt:"logo",className:"lazy-img shapes shape-one"}),i.jsx("img",{src:"/images/shape/shape_50.svg",alt:"logo",className:"lazy-img shapes shape-two"}),i.jsx("img",{src:"/images/shape/shape_51.svg",alt:"logo",className:"lazy-img shapes shape-three"})]}),i.jsx("div",{className:"fancy-short-banner-four position-relative",children:i.jsx("div",{className:"container",children:i.jsx("div",{className:"row",children:i.jsx("div",{className:"col-lg-10 m-auto",children:i.jsx("div",{className:"row gx-xxl-5",children:i.jsx(C,{})})})})})}),(0,i.jsxs)("div",{className:"footer-style-three position-relative",children:[i.jsx("div",{className:"container",children:i.jsx("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-xxl-8 col-xl-9 col-md-9 m-auto text-center",children:[i.jsx("div",{className:"title-style-four","data-aos":"fade-up",children:(0,i.jsxs)("h2",{className:"main-title fw-500 text-white m0",children:["Ready to use our App? It’s just a matter of",i.jsx("span",{children:"one Click"})]})}),i.jsx("p",{className:"text-lg text-white mt-35 mb-70 lg-mt-30 lg-mb-50","data-data-aos":"fade-up",children:"Try it risk free — we don’t charge cancellation fees."}),i.jsx(q,{})]})})}),i.jsx("div",{className:"bottom-footer mt-80 lg-mt-50",children:i.jsx("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[i.jsx("div",{className:"col-lg-4",children:i.jsx("div",{className:"logo d-flex justify-content-center justify-content-lg-start",children:i.jsx(U.default,{href:"/",children:i.jsx("img",{src:"/images/logo/logo_03.png",alt:"",width:77})})})}),(0,i.jsxs)("div",{className:"col-lg-4 text-center md-mt-30 md-mb-30",children:[i.jsx("h4",{className:"text-white",children:"Find us on social media"}),i.jsx($,{})]}),(0,i.jsxs)("div",{className:"col-lg-4 text-center",children:[i.jsx("h4",{className:"text-white",children:"We’r always happy to help."}),i.jsx("a",{href:"mailto:ask@januinc.com",className:"mail",children:"ask@januinc.com"})]})]})})}),i.jsx("img",{src:"/images/assets/ils_01.svg",alt:"illustration",className:"lazy-img bg-illustration w-100 shapes"})]})]})}};var s=require("../../../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),i=s.X(0,[8609,1655,3408,5030],()=>a(90881));module.exports=i})();