(()=>{var e={};e.id=548,e.ids=[548],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},92843:(e,s,a)=>{"use strict";a.r(s),a.d(s,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>h,tree:()=>d});var i=a(50482),t=a(69108),r=a(62563),l=a.n(r),n=a(68300),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);a.d(s,o);let d=["",{children:["blog",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,37615)),"/Users/varand/Documents/Coding/Password1/app/blog/[id]/page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,73472)),"/Users/varand/Documents/Coding/Password1/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,98211)),"/Users/varand/Documents/Coding/Password1/app/not-found.jsx"]}],c=["/Users/varand/Documents/Coding/Password1/app/blog/[id]/page.jsx"],m="/blog/[id]/page",u={require:a,loadChunk:()=>Promise.resolve()},h=new i.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/blog/[id]/page",pathname:"/blog/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},57666:(e,s,a)=>{Promise.resolve().then(a.bind(a,31267)),Promise.resolve().then(a.bind(a,4317)),Promise.resolve().then(a.bind(a,73097)),Promise.resolve().then(a.bind(a,72671)),Promise.resolve().then(a.t.bind(a,31900,23)),Promise.resolve().then(a.t.bind(a,61476,23))},31267:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});var i=a(95344);let t=()=>(0,i.jsxs)("form",{action:"#",className:"mt-30",onSubmit:e=>{e.preventDefault()},children:[(0,i.jsxs)("div",{className:"input-wrapper mb-35",children:[i.jsx("label",{children:"Name*"}),i.jsx("input",{type:"text",placeholder:"Rashed Kabir",required:!0})]}),(0,i.jsxs)("div",{className:"input-wrapper mb-40",children:[i.jsx("label",{children:"Email*"}),i.jsx("input",{type:"email",placeholder:"rshdkabir@gmail.com",required:!0})]}),i.jsx("div",{className:"input-wrapper mb-30",children:i.jsx("textarea",{placeholder:"Your Comment",defaultValue:""})}),i.jsx("button",{className:"btn-twentyTwo fw-500 tran3s",children:"Post Comment"})]})},37615:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>w,metadata:()=>y});var i=a(25036),t=a(1819),r=a(46653),l=a(17550),n=a(11823),o=a(373),d=a(83860);let c=()=>(0,i.jsxs)("ul",{className:"d-flex tags style-none pb-20",children:[i.jsx("li",{children:"Tag:"}),(0,i.jsxs)("li",{children:[i.jsx("a",{href:"#",children:"business"}),","]}),(0,i.jsxs)("li",{children:[i.jsx("a",{href:"#",children:"makreting"}),","]}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"tips"})})]}),m=()=>(0,i.jsxs)("ul",{className:"d-flex share-icon align-items-center style-none pb-20",children:[i.jsx("li",{children:"Share:"}),i.jsx("li",{children:i.jsx("a",{href:"#",children:i.jsx("i",{className:"bi bi-google"})})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:i.jsx("i",{className:"bi bi-twitter"})})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:i.jsx("i",{className:"bi bi-instagram"})})})]});var u=a(2813);let h=[{name:"Al Hasani",avatar:"/images/blog/avatar_01.jpg",date:"13 June, 2022, 7:30pm",text:"One touch of a red-hot stove is usually all we need to avoid that kind of lorem discomfort in future. The same true we experience"},{name:"Rashed ka.",avatar:"/images/blog/avatar_02.jpg",date:"13 June, 2022, 7:30pm",text:"One touch of a red-hot stove is usually all we need to avoid that kind of lorem discomfort in future. The same true we experience"}],x=()=>i.jsx(i.Fragment,{children:h.map((e,s)=>(0,i.jsxs)("div",{className:"comment d-flex",children:[i.jsx(u.default,{width:60,height:60,src:e.avatar,alt:"blog",className:"user-avatar rounded-circle"}),(0,i.jsxs)("div",{className:"comment-text",children:[i.jsx("div",{className:"name fw-500 tx-dark",children:e.name}),i.jsx("div",{className:"date",children:e.date}),i.jsx("p",{children:e.text}),i.jsx("a",{href:"#",className:"reply-btn fw-500 tran3s",children:"Reply"})]})]},s))}),p=(0,a(86843).createProxy)(String.raw`/Users/varand/Documents/Coding/Password1/components/blog/blog-details/CommentBox.jsx`),{__esModule:g,$$typeof:j}=p,b=p.default;var f=a(16274),v=a(845),N=a.n(v);let y={title:"Dynamic Blog Details || Jano - Creative Multipurpose React NextJS Template"},w=({params:e})=>{let s=e.id,a=N().find(e=>e.id==s)||N()[0];return(0,i.jsxs)(i.Fragment,{children:[i.jsx(t.ZP,{}),(0,i.jsxs)("div",{className:"fancy-feature-fiftyOne position-relative mt-250 lg-mt-200",children:[i.jsx("div",{className:"container",children:i.jsx("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-xxl-8 col-lg-9","data-aos":"fade-right",children:[(0,i.jsxs)("p",{className:"blog-pubish-date",children:["Digital Marketing . 2 July . By",i.jsx("a",{href:"#",className:"fw-500",children:"Hasan Ira"})]}),i.jsx("h2",{className:"blog-heading-one tx-dark",children:a?.title})]})})}),i.jsx("img",{src:"/images/shape/shape_172.svg",alt:"shape",className:"lazy-img shapes shape-two"})]}),i.jsx("div",{className:"blog-details-one mt-80 lg-mt-60",children:i.jsx("div",{className:"container",children:i.jsx("div",{className:"border-bottom pb-130 lg-pb-60",children:(0,i.jsxs)("div",{className:"row gx-xl-5",children:[i.jsx("div",{className:"col-lg-8",children:(0,i.jsxs)("div",{className:"blog-meta-wrapper pe-xxl-5",children:[(0,i.jsxs)("article",{className:"blog-details-content",children:[a.imageSrc&&i.jsx(u.default,{width:816,height:597,layout:"responsive",src:a.imageSrc,alt:a.title,className:"lazy-img image-meta w-100"}),i.jsx("p",{children:"Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge. cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Suspendisse interdum consectetur libero id faucibu nisl. Lacus vel facilisis volutpat est velit egestas."}),i.jsx("p",{children:"Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Sit amet ris nullam eget felis. Enim praesent elementum facilisis leo. Ultricies leo integer."}),i.jsx(u.default,{width:800,height:410,src:"/images/blog/blog_img_26.jpg",alt:"blog",className:"lazy-img image-meta w-100"}),i.jsx("h4",{children:"This response is important for our ability to from mistakes but it alsogives rise to self-criticism."}),i.jsx("p",{children:"One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future The same is true as we experienc the emotional of stress from our instances. We are quickly learn to fear and thus automatically. Lorem ipsum dolor sit amet, consectetur adipis elit quis extraction labore."}),i.jsx("h2",{children:"Work Harder & Gain Succsess"}),i.jsx("p",{children:"One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in quis elit future. The same Duis aute irure dolor in reprehenderit ."}),i.jsx("p",{children:"is true as we experience the emotional sensation of stress from our firs social rejec ridicule.We quickly learn to fear and thus automatically. potentially stressful situation of wlir ext quiert all kinds, including the most common of all."}),(0,i.jsxs)("div",{className:"bottom-widget d-sm-flex align-items-center justify-content-between",children:[i.jsx(c,{}),i.jsx(m,{})]})]}),(0,i.jsxs)("div",{className:"blog-comment-area",children:[i.jsx("h3",{className:"blog-inner-title tx-dark pb-15",children:"2 Comments"}),i.jsx(x,{})]}),(0,i.jsxs)("div",{className:"blog-comment-form",children:[i.jsx("h3",{className:"blog-inner-title tx-dark",children:"Leave A Comment"}),(0,i.jsxs)("p",{children:[i.jsx(f.default,{href:"/login",className:"text-decoration-underline",children:"Sign"}),"in to post your comment or signup if you dont have any account."]}),i.jsx(b,{})]})]})}),i.jsx("div",{className:"col-lg-4 col-md-8",children:(0,i.jsxs)("div",{className:"blog-sidebar md-mt-70",children:[i.jsx("div",{className:"blog-sidebar-search mb-55 md-mb-40",children:i.jsx(l.ZP,{})}),(0,i.jsxs)("div",{className:"blog-sidebar-category mb-60 md-mb-50",children:[i.jsx("h4",{className:"sidebar-title",children:"Category"}),i.jsx(n.Z,{})]}),(0,i.jsxs)("div",{className:"sidebar-recent-news mb-60 md-mb-50",children:[i.jsx("h4",{className:"sidebar-title",children:"Recent News"}),i.jsx(o.Z,{})]}),i.jsx(d.Z,{})]})})]})})})}),i.jsx(r.Z,{})]})}}};var s=require("../../../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),i=s.X(0,[8609,5030,7676],()=>a(92843));module.exports=i})();