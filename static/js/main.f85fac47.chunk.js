(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,a,t){e.exports={cls_1:"Winner_cls_1__28H4X",cls_2:"Winner_cls_2__1TR3m",cls_3:"Winner_cls_3__1lR8z",svg:"Winner_svg__1qqPT",svg2:"Winner_svg2__14hBC",firework_icon:"Winner_firework_icon__1dsjz",fireworthree:"Winner_fireworthree__1-ANZ",fireworktwo:"Winner_fireworktwo__1zFIJ",fireworkone:"Winner_fireworkone__252sK",img_firework:"Winner_img_firework__9I3dQ","elastic-pulse":"Winner_elastic-pulse__3Un1C",Winner:"Winner_Winner__2pHy-",WinnerText:"Winner_WinnerText__3vv-Q",hidden:"Winner_hidden__1KEwJ",ConfirmationText:"Winner_ConfirmationText__3CsKP",Loader:"Winner_Loader__mG9X3",WinnerForm:"Winner_WinnerForm__1OtXp",FormInput:"Winner_FormInput__2ALyL",Input:"Winner_Input__Wb7Yd",Submit:"Winner_Submit__r-pQt",ReturnButton:"Winner_ReturnButton__4GvON",Invalid:"Winner_Invalid__1_GZ3"}},100:function(e,a,t){e.exports=t.p+"static/media/rf.cd8948e8.png"},101:function(e,a,t){e.exports=t.p+"static/media/al.07351137.png"},102:function(e,a,t){e.exports=t.p+"static/media/gs.e5bf6b8a.png"},104:function(e,a,t){e.exports=t.p+"static/media/Hoopla.1892fb4f.png"},197:function(e,a,t){e.exports=t(330)},202:function(e,a,t){},203:function(e,a,t){},204:function(e,a,t){},205:function(e,a,t){e.exports=t.p+"static/media/Me.61f681a4.JPG"},21:function(e,a,t){e.exports={Black:"Drip_Black__1J5Ff",Pink:"Drip_Pink__3F0yl",Yellow:"Drip_Yellow__22eG4",Blue:"Drip_Blue__275Cq",Image:"Drip_Image__82xFR"}},29:function(e,a,t){e.exports={Footer:"Footer_Footer__1zFH8",FooterText:"Footer_FooterText__1b1JJ",FooterSocial:"Footer_FooterSocial__xqM5z",FooterSocialIcon:"Footer_FooterSocialIcon__3SjrF"}},330:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(22),r=t.n(s),c=(t(202),t(23)),o=t(24),m=t(26),i=t(25),d=t(27),u=(t(203),t(11)),_=t(331),h=t(7),p=t.n(h),E=t(10),f=t(3),g=t.n(f),v=t(70),b=t.n(v),C=function(e){return l.a.createElement("div",{className:b.a.Companies},e.companies.map(function(e,a){return l.a.createElement("div",{className:b.a.Logo,key:a},l.a.createElement("img",{src:e.logoSrc,alt:e.name}))}))},N=t(21),w=t.n(N),S=function(e){var a="",t="0px";switch(e.color){case"Blue":a=g()(w.a.Image,w.a.Blue);break;case"Pink":a=g()(w.a.Image,w.a.Pink);break;case"Yellow":a=g()(w.a.Image,w.a.Yellow);break;case"Black":a=g()(w.a.Image,w.a.Black),t="-100px";break;default:a=g()(w.a.Image,w.a.Blue)}return l.a.createElement("div",{className:a,"data-speed":e.speed,style:{top:t}})},I=(t(204),t(29)),y=t.n(I),k=function(e){return l.a.createElement("footer",{className:y.a.Footer},l.a.createElement("div",{className:y.a.FooterSocial},l.a.createElement("a",{href:"https://github.com/bcavenagh"},l.a.createElement("div",{className:y.a.FooterSocialIcon},l.a.createElement(E.g,{size:35}))),l.a.createElement("a",{href:"https://www.linkedin.com/in/ben-cavenagh/"},l.a.createElement("div",{className:y.a.FooterSocialIcon},l.a.createElement(E.j,{size:35}))),l.a.createElement("a",{href:"https://www.instagram.com/bcavvs/"},l.a.createElement("div",{className:y.a.FooterSocialIcon},l.a.createElement(E.h,{size:35}))),l.a.createElement("a",{href:"https://www.facebook.com/ben.cavenagh"},l.a.createElement("div",{className:y.a.FooterSocialIcon},l.a.createElement(E.f,{size:35})))),l.a.createElement("div",{className:y.a.FooterText},"This website was handcrafted by me, for me ",l.a.createElement("br",null),"Ben Cavenagh \xa92019"))},A=t(38),M=t.n(A),F=(t(205),t(97)),x=t.n(F),O=t(98),Z=t.n(O),H=t(99),j=t.n(H),W=t(100),T=t.n(W),B=t(101),L=t.n(B),D=t(102),P=t.n(D),Y=(window.pageYOffset,function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={companies:[{name:"Splenda",logoSrc:Z.a},{name:"Java House",logoSrc:j.a},{name:"Radio Flyer",logoSrc:T.a},{name:"Aubry Lane",logoSrc:L.a},{name:"Go Splash",logoSrc:P.a},{name:"Heartland FPG",logoSrc:x.a}],avatarClass:g()(p.a.Avatar),isFlipped:!1,coinClass:g()("ch-info"),dripOffset:100},t.onScroll=t.onScroll.bind(Object(u.a)(Object(u.a)(t))),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll,!1)}},{key:"onScroll",value:function(){var e=document.getElementById("parallax-container");if(e){var a=e.getElementsByTagName("div");if(console.log(window.pageYOffset),window.pageYOffset<800)for(var t=0;t<a.length;t++)a[t].style.transform="translateY("+window.pageYOffset*t/a.length+"px)",a[t].style.transition="all .2s",a[t].style.transitionTimingFunction="ease-out"}else console.log("The element "+e+" does not exist.")}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(_.a,{to:"/contact"},l.a.createElement("button",{className:p.a.ContactButton},"Say Hey! ",l.a.createElement(E.e,null))),l.a.createElement("div",{className:p.a.Hero},l.a.createElement("div",{id:"parallax-container"},l.a.createElement(S,{color:"Blue"}),l.a.createElement(S,{color:"Yellow"}),l.a.createElement(S,{color:"Pink"}),l.a.createElement(S,{color:"Black"})),l.a.createElement("div",{id:"intro",className:p.a.Intro},l.a.createElement("div",{id:"avatar",className:"ch-item ch-img-1"},l.a.createElement("div",{className:"ch-info-wrap"},l.a.createElement("div",{className:"ch-info"},l.a.createElement("div",{className:"ch-info-front ch-img-1"}),l.a.createElement("div",{className:"ch-info-back"})))),l.a.createElement("div",{className:p.a.HeroText},l.a.createElement("h4",null,"Ben Cavenagh"),l.a.createElement("h1",null,"Web Developer and Designer"),l.a.createElement("h3",null,"Just your friendly tech guy"))),l.a.createElement("div",{className:p.a.SeeMore},l.a.createElement("p",null,"See More About Me"),l.a.createElement(E.a,null))),l.a.createElement("div",{className:p.a.Content},l.a.createElement("div",{className:p.a.AboutSection},l.a.createElement("div",{className:p.a.About},l.a.createElement("div",{className:g()(p.a.AboutText)},l.a.createElement("h3",null,"Hey! I'm Ben Cavenagh. Nice to meet you!"),l.a.createElement("p",null,"For those of you who don't know me, welcome! Let me tell you a little about myself... I am a recent graduate of Butler University (go dawgs) and am currently the UI/UX developer at Heartland Food Products Group, a company you might know for being the owner of the world famous brand, Splenda. I have been programming for the past 7+ years and have a wide variety of experiences under my belt ranging from large, international companies like Splenda and Radio Flyer, to smaller startups like Aubry Lane and Java House. Need a website? ",l.a.createElement("span",{className:p.a.boxE},l.a.createElement(_.a,{to:"/contact",className:p.a.customUnderline},"Send me a message."))," Have a cool idea? ",l.a.createElement("span",{className:p.a.boxE},l.a.createElement(_.a,{to:"/contact",className:p.a.customUnderline},"Let's make it!"))," Just plain bored? ",l.a.createElement("span",{className:p.a.boxE},l.a.createElement(_.a,{to:"/contact",className:p.a.customUnderline},"Say hey!"))))),l.a.createElement("div",{className:p.a.SplitTable},l.a.createElement("div",{className:g()(p.a.Column,p.a.ColumnSeparator)},l.a.createElement(E.d,{color:"rgb(95, 211, 247)",size:45}),l.a.createElement("h2",null,"Front-End Development"),l.a.createElement("p",null,"Throughout my years in development I have gained knowledge of a variety of different languages and technologies. My heart has always been with front-end development."),l.a.createElement("h4",null,"My favorite languages:"),l.a.createElement("ul",null,l.a.createElement("li",null,"React/React Native"),l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"CSS/Sass")),l.a.createElement("h4",null,"Tools I Use:"),l.a.createElement("ul",null,l.a.createElement("li",null,"VS Code"),l.a.createElement("li",null,"Github"),l.a.createElement("li",null,"Foundation"),l.a.createElement("li",null,"WordPress"),l.a.createElement("li",null,"MailChimp"),l.a.createElement("li",null,"Shopify"))),l.a.createElement("div",{className:p.a.Column},l.a.createElement(E.k,{color:"rgb(95, 211, 247)",size:45}),l.a.createElement("h2",null,"Design"),l.a.createElement("p",null,"With all of the development I do I thought I'd try my hand at design also. I love to design creative, fun, and attractive digital artwork alongside my development as well."),l.a.createElement("h4",null,"I like to design:"),l.a.createElement("ul",null,l.a.createElement("li",null,"UI/UX"),l.a.createElement("li",null,"Mobile"),l.a.createElement("li",null,"Apps"),l.a.createElement("li",null,"Logos")),l.a.createElement("h4",null,"Tools I Use:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Adobe XD"),l.a.createElement("li",null,"Photoshop"),l.a.createElement("li",null,"Illustrator"),l.a.createElement("li",null,"Old Fashioned Pen & Paper"))))),l.a.createElement("div",{className:p.a.CollabContainer},l.a.createElement("div",{className:p.a.Collab},l.a.createElement("div",{className:p.a.Interested},l.a.createElement("h3",null,"Interested in working together?"),l.a.createElement("p",null,"I'm always looking for something new to do. Send me a message and lets chat!")),l.a.createElement(_.a,{to:"/contact"},l.a.createElement("button",null,"Let's Chat!")))),l.a.createElement("div",{className:p.a.Companies},l.a.createElement("h1",null,"Who I've Worked For"),l.a.createElement(C,{companies:this.state.companies}))),l.a.createElement(k,null),l.a.createElement("div",{className:p.a.GameDisclaimer},l.a.createElement("p",null,"You made it this far? Thanks for checking everything out! You may think that you've seen it all... you're wrong. I like to add little easter eggs in my personal projects so let's see if you can find it! These smiles will guide you, however, you'll need a computer to see the hints they reveal.",l.a.createElement("br",null),l.a.createElement(M.a,{title:"First Hint: Read carefully."},l.a.createElement(E.i,null)))))}}]),a}(n.Component)),G=t(46),U=t(1),z=t.n(U),J=t(31),R=t(48),q=t.n(R),Q=t(47),V=t.n(Q),X=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).handleChange=function(e){t.setState(Object(G.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var a={email:t.state.email,name:t.state.name};t.validEmail(a.email)?null!==a.name&&""!==a.name?t.sendFeedback(t.state.template_id,a,t.state.user_id):t.setState({snackbarOpen:!0,nameInputClasses:g()(z.a.Input,z.a.Invalid),errorMessage:"Please enter your name!"}):t.setState({snackbarOpen:!0,emailInputClasses:g()(z.a.Input,z.a.Invalid),errorMessage:"That's not a real email address."})},t.validEmail=function(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||(t.setState({snackbarOpen:!0,errorMessage:"You have entered an invalid email address!"}),!1)},t.sendFeedback=function(e,a,n){t.setState({formSubmitted:!0}),window.emailjs.send(t.state.service_id,e,a,n).then(function(e){t.setState({finishedSend:!0})}).catch(function(e){return t.setState({snackbarOpen:!0,errorMessage:e}),e})},t.handleClose=function(e,a){"clickaway"!==a&&t.setState({snackbarOpen:!1})},t.state={service_id:"gmail",template_id:"winner_template",user_id:"user_A4bCVDrSSIJqe4erDNHl5",email:"",name:"",formSubmitted:!1,finishedSend:!1,emailInputClasses:g()(z.a.Input),nameInputClasses:g()(z.a.Input),snackbarOpen:!1,errorMessage:null},t.handleSubmit=t.handleSubmit.bind(Object(u.a)(Object(u.a)(t))),t.handleChange=t.handleChange.bind(Object(u.a)(Object(u.a)(t))),t.handleClose=t.handleClose.bind(Object(u.a)(Object(u.a)(t))),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=g()(z.a.WinnerForm),a=g()(z.a.Loader,z.a.hidden),t=g()(z.a.ConfirmationText,z.a.hidden);return this.state.formSubmitted&&(a=g()(z.a.Loader),e=g()(z.a.WinnerForm,z.a.hidden),t=g()(z.a.ConfirmationText,z.a.hidden)),this.state.finishedSend&&(a=g()(z.a.Loader,z.a.hidden),e=g()(z.a.WinnerForm,z.a.hidden),t=g()(z.a.ConfirmationText)),l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:z.a.svg},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"firework-slide2",className:g()(z.a.firework_icon,z.a.injected_svg,z.a.img_firework,z.a.inject_svg),"data-name":"Calque 1",viewBox:"0 0 157 156"},l.a.createElement("title",null,"icon_firework_1"),l.a.createElement("path",{className:z.a.cls_3,d:"M80.52,106.92a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,106.92Z"}),l.a.createElement("path",{className:z.a.cls_3,d:"M97.72,100.91a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,97.72,100.91Z"}),l.a.createElement("path",{className:z.a.cls_3,d:"M108.32,85.95a0.61,0.61,0,0,1-.19,0l-9.55-3A0.65,0.65,0,1,1,99,81.69l9.55,3A0.65,0.65,0,0,1,108.32,85.95Z"}),l.a.createElement("path",{className:z.a.cls_3,d:"M98.77,71a0.65,0.65,0,0,1-.2-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24L99,71A0.66,0.66,0,0,1,98.77,71Z"}),l.a.createElement("path",{className:z.a.cls_3,d:"M91.7,61a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,91.7,61Z"}),l.a.createElement("path",{className:z.a.cls_3,d:"M80.52,57a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,57Z"}),l.a.createElement("path",{className:z.a.cls_3,d:"M67.64,61a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,67.64,61Z"}),l.a.createElement("path",{className:z.a.cls_3,d:"M60.57,71a0.66,0.66,0,0,1-.2,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,60.57,71Z"}),l.a.createElement("path",{className:z.a.cls_3,d:"M51,85.95a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,51,85.95Z"}),l.a.createElement("path",{className:z.a.cls_3,d:"M61.62,100.91a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,61.62,100.91Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M80.52,126.88a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,126.88Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M109.74,116.86a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,109.74,116.86Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M127.42,91.92a0.61,0.61,0,0,1-.19,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,127.42,91.92Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M117.86,65a0.65,0.65,0,0,1-.2-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.66,0.66,0,0,1,117.86,65Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M103.73,45.08a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,103.73,45.08Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M80.52,37.07a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,37.07Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M55.61,45.08a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,55.61,45.08Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M41.47,65a0.62,0.62,0,0,1-.2,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,41.47,65Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M31.92,91.93a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,31.92,91.93Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M49.59,116.86a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,49.59,116.86Z"}),"}",l.a.createElement("path",{className:z.a.cls_1,d:"M80.52,146.83a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,146.83Z"}),l.a.createElement("path",{className:z.a.cls_1,d:"M121.77,132.82a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,121.77,132.82Z"}),l.a.createElement("path",{className:z.a.cls_1,d:"M146.52,97.9a0.61,0.61,0,0,1-.19,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,146.52,97.9Z"}),l.a.createElement("path",{className:z.a.cls_1,d:"M137,59a0.65,0.65,0,0,1-.2-1.27l9.55-3A0.65,0.65,0,1,1,146.7,56l-9.55,3A0.66,0.66,0,0,1,137,59Z"}),l.a.createElement("path",{className:z.a.cls_1,d:"M115.76,29.12a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,115.76,29.12Z"}),l.a.createElement("path",{className:z.a.cls_1,d:"M80.52,17.11a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,17.11Z"}),l.a.createElement("path",{className:z.a.cls_1,d:"M22.37,59a0.62,0.62,0,0,1-.2,0l-9.55-3A0.65,0.65,0,1,1,13,54.77l9.55,3A0.65,0.65,0,0,1,22.37,59Z"}),l.a.createElement("path",{className:z.a.cls_1,d:"M12.82,97.9a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,12.82,97.9Z"}),l.a.createElement("path",{className:z.a.cls_1,d:"M43.58,29.12a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,43.58,29.12Z"}),l.a.createElement("path",{className:z.a.cls_1,d:"M37.56,132.82a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,.91-0.13,0.65,0.65,0,0,1,.13.91l-6,8A0.65,0.65,0,0,1,37.56,132.82Z"}))),l.a.createElement("span",{className:g()(z.a.svg,z.a.svg2)},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"firework-slide2",className:g()(z.a.firework_icon,z.a.injected_svg,z.a.img_firework,z.a.inject_svg),"data-name":"Calque 1",viewBox:"0 0 157 156"},l.a.createElement("title",null,"icon_firework_1"),l.a.createElement("path",{className:z.a.cls_3,d:"M80.52,106.92a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,106.92Z"}),l.a.createElement("path",{className:z.a.cls_3,d:"M97.72,100.91a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,97.72,100.91Z"}),l.a.createElement("path",{className:z.a.cls_3,d:"M108.32,85.95a0.61,0.61,0,0,1-.19,0l-9.55-3A0.65,0.65,0,1,1,99,81.69l9.55,3A0.65,0.65,0,0,1,108.32,85.95Z"}),l.a.createElement("path",{className:z.a.cls_3,d:"M98.77,71a0.65,0.65,0,0,1-.2-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24L99,71A0.66,0.66,0,0,1,98.77,71Z"}),l.a.createElement("path",{className:z.a.cls_3,d:"M91.7,61a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,91.7,61Z"}),l.a.createElement("path",{className:z.a.cls_3,d:"M80.52,57a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,57Z"}),l.a.createElement("path",{className:z.a.cls_3,d:"M67.64,61a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,67.64,61Z"}),l.a.createElement("path",{className:z.a.cls_3,d:"M60.57,71a0.66,0.66,0,0,1-.2,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,60.57,71Z"}),l.a.createElement("path",{className:z.a.cls_3,d:"M51,85.95a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,51,85.95Z"}),l.a.createElement("path",{className:z.a.cls_3,d:"M61.62,100.91a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,61.62,100.91Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M80.52,126.88a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,126.88Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M109.74,116.86a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,109.74,116.86Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M127.42,91.92a0.61,0.61,0,0,1-.19,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,127.42,91.92Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M117.86,65a0.65,0.65,0,0,1-.2-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.66,0.66,0,0,1,117.86,65Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M103.73,45.08a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,103.73,45.08Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M80.52,37.07a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,37.07Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M55.61,45.08a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,55.61,45.08Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M41.47,65a0.62,0.62,0,0,1-.2,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,41.47,65Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M31.92,91.93a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,31.92,91.93Z"}),l.a.createElement("path",{className:z.a.cls_2,d:"M49.59,116.86a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,49.59,116.86Z"}),"}",l.a.createElement("path",{className:z.a.cls_1,d:"M80.52,146.83a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,146.83Z"}),l.a.createElement("path",{className:z.a.cls_1,d:"M121.77,132.82a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,121.77,132.82Z"}),l.a.createElement("path",{className:z.a.cls_1,d:"M146.52,97.9a0.61,0.61,0,0,1-.19,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,146.52,97.9Z"}),l.a.createElement("path",{className:z.a.cls_1,d:"M137,59a0.65,0.65,0,0,1-.2-1.27l9.55-3A0.65,0.65,0,1,1,146.7,56l-9.55,3A0.66,0.66,0,0,1,137,59Z"}),l.a.createElement("path",{className:z.a.cls_1,d:"M115.76,29.12a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,115.76,29.12Z"}),l.a.createElement("path",{className:z.a.cls_1,d:"M80.52,17.11a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,17.11Z"}),l.a.createElement("path",{className:z.a.cls_1,d:"M22.37,59a0.62,0.62,0,0,1-.2,0l-9.55-3A0.65,0.65,0,1,1,13,54.77l9.55,3A0.65,0.65,0,0,1,22.37,59Z"}),l.a.createElement("path",{className:z.a.cls_1,d:"M12.82,97.9a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,12.82,97.9Z"}),l.a.createElement("path",{className:z.a.cls_1,d:"M43.58,29.12a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,43.58,29.12Z"}),l.a.createElement("path",{className:z.a.cls_1,d:"M37.56,132.82a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,.91-0.13,0.65,0.65,0,0,1,.13.91l-6,8A0.65,0.65,0,0,1,37.56,132.82Z"}))),l.a.createElement("div",{className:z.a.Winner},l.a.createElement(J.b,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.snackbarOpen,autoHideDuration:3e3,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:l.a.createElement("span",{id:"message-id"},this.state.errorMessage),action:[l.a.createElement(J.a,{key:"close","aria-label":"Close",color:"inherit",className:z.a.close,onClick:this.handleClose},l.a.createElement(q.a,null))]}),l.a.createElement("div",{className:z.a.WinnerText},l.a.createElement("h3",null,"Congratulations!"),l.a.createElement("p",null,"You've found the secret page!",l.a.createElement("br",null),"Enter your name and email here and I will email you back to explain the prize!"),l.a.createElement("div",{className:e},l.a.createElement("div",{id:"email",className:z.a.FormInput},l.a.createElement("input",{type:"email",placeholder:"name@email.com",name:"email",id:"email",autoComplete:"email",value:this.state.email,onChange:this.handleChange,className:this.state.emailInputClasses})),l.a.createElement("div",{id:"name",className:z.a.FormInput},l.a.createElement("input",{type:"text",placeholder:"What's your name?",name:"name",id:"name",value:this.state.name,onChange:this.handleChange,className:this.state.nameInputClasses})),l.a.createElement("div",{className:z.a.Submit,onClick:this.handleSubmit},l.a.createElement("h4",null,"Send"),l.a.createElement(E.c,null))),l.a.createElement("div",{className:a},l.a.createElement(V.a,{type:"Rings",color:"rgb(2,192,238",height:"100",width:"100"})),l.a.createElement("p",{className:t},"Thanks for playing! I'll add your name to the winner list ASAP!"))),l.a.createElement(_.a,{to:"/"},l.a.createElement("div",{className:z.a.ReturnButton},"Return to Site")))}}]),a}(n.Component),K=t(5),$=t.n(K),ee=(t(323),t(104)),ae=t.n(ee),te=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).handleChange=function(e){switch(t.setState(Object(G.a)({},e.target.name,e.target.value)),e.target.name){case"form_email":""!==e.target.value?t.setState({emailInputClasses:g()($.a.FormInput,$.a.focused)}):t.setState({emailInputClasses:g()($.a.FormInput)});break;case"form_name":""!==e.target.value?t.setState({nameInputClasses:g()($.a.FormInput,$.a.focused)}):t.setState({nameInputClasses:g()($.a.FormInput)});break;case"form_message":""!==e.target.value?t.setState({messageInputClasses:g()($.a.FormInput,$.a.focused)}):t.setState({messageInputClasses:g()($.a.FormInput)})}},t.validEmail=function(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||(t.setState({snackbarOpen:!0,errorMessage:"You have entered an invalid email address!"}),!1)},t.sendFeedback=function(e,a,n){t.setState({formSubmitted:!0}),window.emailjs.send(t.state.service_id,e,a,n).then(function(e){t.setState({finishedSend:!0})}).catch(function(e){return t.setState({snackbarOpen:!0,errorMessage:"You have entered an invalid email address!"}),e})},t.handleClose=function(e,a){"clickaway"!==a&&t.setState({snackbarOpen:!1})},t.setFocus=function(e){document.getElementById(e).focus()},t.state={service_id:"gmail",template_id:"contact_template",user_id:"user_A4bCVDrSSIJqe4erDNHl5",form_email:"",form_name:"",form_message:"",formSubmitted:!1,finishedSend:!1,emailInputClasses:g()($.a.FormInput),nameInputClasses:g()($.a.FormInput),messageInputClasses:g()($.a.FormInput),snackbarOpen:!1,errorMessage:null},t.handleSubmit=t.handleSubmit.bind(Object(u.a)(Object(u.a)(t))),t.handleChange=t.handleChange.bind(Object(u.a)(Object(u.a)(t))),t.handleClose=t.handleClose.bind(Object(u.a)(Object(u.a)(t))),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"handleSubmit",value:function(e){e.preventDefault();var a={email:this.state.form_email,name:this.state.form_name,message:this.state.form_message};this.validEmail(a.email)?null!==a.message&&""!==a.message?this.sendFeedback(this.state.template_id,a,this.state.user_id):this.setState({snackbarOpen:!0,messageInputClasses:g()($.a.FormInput,$.a.focused,$.a.invalid),errorMessage:"Please enter a message."}):this.setState({snackbarOpen:!0,emailInputClasses:g()($.a.FormInput,$.a.focused,$.a.invalid),errorMessage:"That's not a real email address."})}},{key:"render",value:function(){var e=this,a=g()($.a.FormContentContainer),t=g()($.a.Loader,$.a.hidden),n=g()($.a.ConfirmationText,$.a.hidden);return this.state.formSubmitted&&(t=g()($.a.Loader),a=g()($.a.FormContentContainer,$.a.hidden),n=g()($.a.ConfirmationText,$.a.hidden)),this.state.finishedSend&&(t=g()($.a.Loader,$.a.hidden),a=g()($.a.FormContentContainer,$.a.hidden),n=g()($.a.ConfirmationText)),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:$.a.ContactPage},l.a.createElement("div",{className:$.a.Stripe},l.a.createElement("p",null,"You found me! You're so close!",l.a.createElement("br",null),l.a.createElement(E.i,null),l.a.createElement("br",null),"Hint: Inspect a little more and you might just find what you're looking for!",l.a.createElement("span",{className:$.a.Secret},"You're good! Now head on over to bencavenagh.com/winner and finish the game!"))),l.a.createElement("div",{className:$.a.IntroText},l.a.createElement("h1",null,"Hey there!"),l.a.createElement("p",null,"Want to get in contact with me? Fill out the form below and send away, I'll send my reply as soon as I can!")),l.a.createElement("div",{className:$.a.ContactGrid},l.a.createElement("div",{className:$.a.ContactContent},l.a.createElement("div",{name:"contact_form",className:$.a.ContactForm,onSubmit:function(e){13===e.target.keyCode&&e.preventDefault()}},l.a.createElement(_.a,{to:"/"},l.a.createElement("button",{className:$.a.BackButton},l.a.createElement(E.b,null),l.a.createElement("h3",null,"Back to Home"))),l.a.createElement("h1",null,"Say Hey!"),l.a.createElement(J.b,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.snackbarOpen,autoHideDuration:3e3,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:l.a.createElement("span",{id:"message-id"},this.state.errorMessage),action:[l.a.createElement(J.a,{key:"close","aria-label":"Close",color:"inherit",className:$.a.close,onClick:this.handleClose},l.a.createElement(q.a,null))]}),l.a.createElement("div",{className:a},l.a.createElement("div",{id:"email",className:this.state.emailInputClasses,onClick:function(){return e.setFocus("form_email")}},l.a.createElement("label",{htmlFor:"form_email",className:$.a.FormLabel},"Email"),l.a.createElement("input",{type:"email",placeholder:"name@email.com",name:"form_email",id:"form_email",autoComplete:"email",value:this.state.form_email,onChange:this.handleChange,className:g()($.a.Input)})),l.a.createElement("div",{id:"name",className:this.state.nameInputClasses,onClick:function(){return e.setFocus("form_name")}},l.a.createElement("label",{htmlFor:"form_name",className:$.a.FormLabel},"Name"),l.a.createElement("input",{type:"text",placeholder:"Who are you?",name:"form_name",id:"form_name",onChange:this.handleChange,className:g()($.a.Input)})),l.a.createElement("div",{className:this.state.messageInputClasses,onClick:function(){return e.setFocus("form_message")}},l.a.createElement("label",{htmlFor:"form_message",className:$.a.FormLabel},"Message"),l.a.createElement("textarea",{rows:"1",type:"text",placeholder:"What's up?",name:"form_message",id:"form_message",onChange:this.handleChange,className:g()($.a.Input,$.a.LargeInput)})),l.a.createElement("div",{className:$.a.Submit,onClick:this.handleSubmit},l.a.createElement("h4",null,"Send"),l.a.createElement(E.c,null))),l.a.createElement("div",{className:$.a.Hoopla},l.a.createElement("img",{src:ae.a})),l.a.createElement("div",{className:t},l.a.createElement(V.a,{type:"Rings",color:"rgb(2,192,238",height:"100",width:"100"})),l.a.createElement("p",{className:n},"Message sent",l.a.createElement("br",null),"I'll get back to you soon. Thanks!",l.a.createElement("br",null),l.a.createElement(J.c,{title:"Hint: Can you figure out how to hide this box?"},l.a.createElement(E.i,null)))))),l.a.createElement(k,null)))}}]),a}(n.Component),ne=t(334),le=t(333),se=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("main",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",minHeight:"100vh"}},l.a.createElement(ne.a,null,l.a.createElement(le.a,{exact:!0,path:"/",component:Y}),l.a.createElement(le.a,{exact:!0,path:"/winner",component:X}),l.a.createElement(le.a,{exact:!0,path:"/contact",component:te})))}}]),a}(n.Component),re=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(se,null))}}]),a}(n.Component),ce=t(332);t(327).config(),r.a.render(l.a.createElement(ce.a,{onUpdate:function(){return window.scrollTo(0,0)}},l.a.createElement(re,null)),document.getElementById("root"))},5:function(e,a,t){e.exports={ContactPage:"Contact_ContactPage__2WUyA",IntroText:"Contact_IntroText__U2nT2",ContactGrid:"Contact_ContactGrid__3aymj",ContactContent:"Contact_ContactContent__2pxCQ",ContactForm:"Contact_ContactForm__3N_25",BackButton:"Contact_BackButton__3PFxA",FormContentContainer:"Contact_FormContentContainer__1yWZt",FormInput:"Contact_FormInput__yub6V",FormLabel:"Contact_FormLabel__3K7SB",Input:"Contact_Input__2AAKM",LargeInput:"Contact_LargeInput__2WRgx",focused:"Contact_focused__1b13L",invalid:"Contact_invalid__t1jfz",Submit:"Contact_Submit__3ydAw",Hoopla:"Contact_Hoopla__3U2Iy",Loader:"Contact_Loader__YWVaH",ConfirmationText:"Contact_ConfirmationText__o7PLs",hidden:"Contact_hidden__3cQ6Q",Stripe:"Contact_Stripe__2H0Zc",Secret:"Contact_Secret__3_iht"}},7:function(e,a,t){e.exports={ContactButton:"Home_ContactButton__1ceGR",Hero:"Home_Hero__3PZe9",BlackCover:"Home_BlackCover__2CHGI",Intro:"Home_Intro__2UZhl",Avatar:"Home_Avatar__thlUS",HeroText:"Home_HeroText__GrYTQ",SeeMore:"Home_SeeMore__WAADF",Content:"Home_Content__29Yah",AboutSection:"Home_AboutSection__2G9pY",About:"Home_About__3WEut",AboutText:"Home_AboutText__3uIeW",SplitTable:"Home_SplitTable__1pAs1",Column:"Home_Column__1x-rk",ColumnSeparator:"Home_ColumnSeparator__Zx2tP",Companies:"Home_Companies__36oOv",CollabContainer:"Home_CollabContainer__1QyVv",Collab:"Home_Collab__3fzkM",Interested:"Home_Interested__1fJiM",GameDisclaimer:"Home_GameDisclaimer__13oGV","normal-underline":"Home_normal-underline__h0j_j",customUnderline:"Home_customUnderline__InlHM","box-b":"Home_box-b__Byv8n","box-c":"Home_box-c__31czf",boxD:"Home_boxD__2eOFl",boxE:"Home_boxE__3SwBi"}},70:function(e,a,t){e.exports={Companies:"Companies_Companies__2zafn",Logo:"Companies_Logo__2r2Mh"}},97:function(e,a,t){e.exports=t.p+"static/media/hfpg.b494c328.png"},98:function(e,a,t){e.exports=t.p+"static/media/splenda.5642fbf5.png"},99:function(e,a,t){e.exports=t.p+"static/media/jh.e57f0738.png"}},[[197,1,2]]]);
//# sourceMappingURL=main.f85fac47.chunk.js.map