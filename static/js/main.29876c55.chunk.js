(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports={Blue:"Drip_Blue__1PVUG",Pink:"Drip_Pink__163c6",Yellow:"Drip_Yellow__3WfwW",Black:"Drip_Black__1rLRC",Image:"Drip_Image__p0jtu"}},193:function(e,a,t){e.exports=t(300)},198:function(e,a,t){},199:function(e,a,t){},200:function(e,a,t){},201:function(e,a,t){e.exports=t.p+"static/media/Me.61f681a4.JPG"},3:function(e,a,t){e.exports={cls_1:"Winner_cls_1__2y2Tm",cls_2:"Winner_cls_2__1-t1j",cls_3:"Winner_cls_3__PZoq5",svg:"Winner_svg__3JAFG",firework_icon:"Winner_firework_icon__1tziL",fireworthree:"Winner_fireworthree__2e3ip",fireworktwo:"Winner_fireworktwo__1zMnn",fireworkone:"Winner_fireworkone__21YnO",img_firework:"Winner_img_firework__2nK7y","elastic-pulse":"Winner_elastic-pulse__1lupS",Winner:"Winner_Winner__mi3WK",WinnerText:"Winner_WinnerText__1fkCo",ReturnButton:"Winner_ReturnButton__2jjAf"}},300:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(29),r=t.n(c),o=(t(198),t(22)),s=t(23),m=t(25),i=t(24),u=t(26),d=(t(199),t(11)),_=t(301),p=t(7),h=t.n(p),E=t(14),f=t(4),g=t.n(f),v=t(59),b=t.n(v),C=function(e){return l.a.createElement("div",{className:b.a.Companies},e.companies.map(function(e,a){return l.a.createElement("div",{className:b.a.Logo,key:a},l.a.createElement("img",{src:e.logoSrc,alt:e.name}))}))},N=t(16),I=t.n(N),k=function(e){var a="";switch(e.color){case"Blue":a=g()(I.a.Image,I.a.Blue);break;case"Pink":a=g()(I.a.Image,I.a.Pink);break;case"Yellow":a=g()(I.a.Image,I.a.Yellow);break;case"Black":a=g()(I.a.Image,I.a.Black);break;default:a=g()(I.a.Image,I.a.Blue)}return l.a.createElement("div",{className:a,"data-speed":e.speed})},w=(t(200),t(201),t(86)),S=t.n(w),F=t(87),y=t.n(F),A=t(88),M=t.n(A),O=t(89),j=t.n(O),H=t(90),x=t.n(H),B=t(91),L=t.n(B),Z=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={companies:[{name:"Splenda",logoSrc:y.a},{name:"Java House",logoSrc:M.a},{name:"Radio Flyer",logoSrc:j.a},{name:"Aubry Lane",logoSrc:x.a},{name:"Go Splash",logoSrc:L.a},{name:"Heartland FPG",logoSrc:S.a}],avatarClass:g()(h.a.Avatar),isFlipped:!1,coinClass:g()("ch-info")},t.toggleFlip=t.toggleFlip.bind(Object(d.a)(Object(d.a)(t))),t.onScroll=t.onScroll.bind(Object(d.a)(Object(d.a)(t))),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll,!1)}},{key:"onScroll",value:function(){var e=document.getElementById("parallax-container");if(e){for(var a=e.getElementsByTagName("div"),t=document.getElementById("cover"),n=0;n<a.length;n++)a[n].style.transform="translateY("+window.pageYOffset*n/a.length+"px)";t.style.height=.8*window.pageYOffset+"px"}else console.log("The element "+e+" does not exist.")}},{key:"toggleFlip",value:function(){this.state.isFlipped;this.setState(function(e,a){return{isFlipped:!e.isFlipped}})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:h.a.Hero},l.a.createElement("div",{id:"cover",className:h.a.BlackCover}),l.a.createElement("div",{id:"parallax-container"},l.a.createElement(k,{color:"Black"}),l.a.createElement(k,{color:"Yellow"}),l.a.createElement(k,{color:"Pink"}),l.a.createElement(k,{color:"Blue"})),l.a.createElement("div",{id:"intro",className:h.a.Intro},l.a.createElement("div",{id:"avatar",className:"ch-item ch-img-1"},l.a.createElement("div",{className:"ch-info-wrap"},l.a.createElement("div",{className:"ch-info"},l.a.createElement("div",{className:"ch-info-front ch-img-1"}),l.a.createElement("div",{className:"ch-info-back"})))),l.a.createElement("div",{className:h.a.HeroText},l.a.createElement("h1",null,"Web Developer and Designer"),l.a.createElement("h3",null,"I help make the web and I love what I do."))),l.a.createElement("div",{className:h.a.SeeMore},l.a.createElement("p",null,"See More About Me"),l.a.createElement(E.a,null))),l.a.createElement("div",{className:h.a.Content},l.a.createElement("div",{className:h.a.AboutSection},l.a.createElement("div",{className:h.a.About},l.a.createElement("div",{className:h.a.AboutText},l.a.createElement("h3",null,"Hey! I'm Ben. Nice to meet you!"),l.a.createElement("p",null,"Let me tell you a little about myself. I am a recent Butler University graduate and currently a UI/UX developer for Heartland Food Products Group, known for the popular brand Splenda. I have been programming for about 7 years now and have a variety of different experiences under my belt ranging from large international companies like Radio Flyer and Splenda to smaller startups like Aubry Lane and Java House. My main focus has always been front-end devlopment and I have recently started to pick up more web design in my free time. I am quick to learn, calm-natured, and I love what I do. Have an idea? Let's make it a reality."))),l.a.createElement("div",{className:h.a.SplitTable},l.a.createElement("div",{className:g()(h.a.Column,h.a.ColumnSeparator)},l.a.createElement(E.d,{color:"rgb(95, 211, 247)",size:45}),l.a.createElement("h2",null,"Front-End Development"),l.a.createElement("p",null,"Throughout my years in development I have gained knowledge of an assortment of different languages however, my heart has always been with front-end development."),l.a.createElement("h4",null,"My favorite languages:"),l.a.createElement("ul",null,l.a.createElement("li",null,"React/React Native"),l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"CSS/Sass")),l.a.createElement("h4",null,"Tools I Use:"),l.a.createElement("ul",null,l.a.createElement("li",null,"VS Code"),l.a.createElement("li",null,"Github"),l.a.createElement("li",null,"Foundation"),l.a.createElement("li",null,"WordPress"))),l.a.createElement("div",{className:h.a.Column},l.a.createElement(E.i,{color:"rgb(95, 211, 247)",size:45}),l.a.createElement("h2",null,"Design"),l.a.createElement("p",null,"I have always considered myself a creative person so naturally my next step from development was to start learning design."),l.a.createElement("h4",null,"I like to design:"),l.a.createElement("ul",null,l.a.createElement("li",null,"UI/UX"),l.a.createElement("li",null,"Mobile"),l.a.createElement("li",null,"Apps"),l.a.createElement("li",null,"Logos")),l.a.createElement("h4",null,"Tools I Use:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Photoshop"),l.a.createElement("li",null,"XD"),l.a.createElement("li",null,"Illustrator"),l.a.createElement("li",null,"Pen & Paper"))))),l.a.createElement("div",{className:h.a.CollabContainer},l.a.createElement("div",{className:h.a.Collab},l.a.createElement("div",{className:h.a.Interested},l.a.createElement("h3",null,"Interested in working together?"),l.a.createElement("p",null,"I'm always looking for something new to do. Send me a message and lets chat.")),l.a.createElement(_.a,{to:"/contact"},l.a.createElement("button",null,"Let's Chat!")))),l.a.createElement("div",{className:h.a.Companies},l.a.createElement("h1",null,"Who I've Worked For"),l.a.createElement(C,{companies:this.state.companies}))),l.a.createElement("footer",{className:h.a.Footer},l.a.createElement("div",{className:h.a.FooterSocial},l.a.createElement("a",{href:"https://github.com/bcavenagh"},l.a.createElement("div",{className:h.a.FooterSocialIcon},l.a.createElement(E.f,{size:35}))),l.a.createElement("a",{href:"https://www.linkedin.com/in/ben-cavenagh/"},l.a.createElement("div",{className:h.a.FooterSocialIcon},l.a.createElement(E.h,{size:35}))),l.a.createElement("a",{href:"https://www.instagram.com/bcavvs/"},l.a.createElement("div",{className:h.a.FooterSocialIcon},l.a.createElement(E.g,{size:35}))),l.a.createElement("a",{href:"https://www.facebook.com/ben.cavenagh"},l.a.createElement("div",{className:h.a.FooterSocialIcon},l.a.createElement(E.e,{size:35})))),l.a.createElement("div",{className:h.a.FooterText},"This website was handcrafted by me, for me ",l.a.createElement("br",null),"Ben Cavenagh \xa92019")))}}]),a}(n.Component),W=t(3),P=t.n(W),T=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:P.a.svg},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"firework-slide2",className:g()(P.a.firework_icon,P.a.injected_svg,P.a.img_firework,P.a.inject_svg),"data-name":"Calque 1",viewBox:"0 0 157 156"},l.a.createElement("title",null,"icon_firework_1"),l.a.createElement("path",{className:P.a.cls_3,d:"M80.52,106.92a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,106.92Z"}),l.a.createElement("path",{className:P.a.cls_3,d:"M97.72,100.91a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,97.72,100.91Z"}),l.a.createElement("path",{className:P.a.cls_3,d:"M108.32,85.95a0.61,0.61,0,0,1-.19,0l-9.55-3A0.65,0.65,0,1,1,99,81.69l9.55,3A0.65,0.65,0,0,1,108.32,85.95Z"}),l.a.createElement("path",{className:P.a.cls_3,d:"M98.77,71a0.65,0.65,0,0,1-.2-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24L99,71A0.66,0.66,0,0,1,98.77,71Z"}),l.a.createElement("path",{className:P.a.cls_3,d:"M91.7,61a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,91.7,61Z"}),l.a.createElement("path",{className:P.a.cls_3,d:"M80.52,57a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,57Z"}),l.a.createElement("path",{className:P.a.cls_3,d:"M67.64,61a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,67.64,61Z"}),l.a.createElement("path",{className:P.a.cls_3,d:"M60.57,71a0.66,0.66,0,0,1-.2,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,60.57,71Z"}),l.a.createElement("path",{className:P.a.cls_3,d:"M51,85.95a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,51,85.95Z"}),l.a.createElement("path",{className:P.a.cls_3,d:"M61.62,100.91a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,61.62,100.91Z"}),l.a.createElement("path",{className:P.a.cls_2,d:"M80.52,126.88a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,126.88Z"}),l.a.createElement("path",{className:P.a.cls_2,d:"M109.74,116.86a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,109.74,116.86Z"}),l.a.createElement("path",{className:P.a.cls_2,d:"M127.42,91.92a0.61,0.61,0,0,1-.19,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,127.42,91.92Z"}),l.a.createElement("path",{className:P.a.cls_2,d:"M117.86,65a0.65,0.65,0,0,1-.2-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.66,0.66,0,0,1,117.86,65Z"}),l.a.createElement("path",{className:P.a.cls_2,d:"M103.73,45.08a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,103.73,45.08Z"}),l.a.createElement("path",{className:P.a.cls_2,d:"M80.52,37.07a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,37.07Z"}),l.a.createElement("path",{className:P.a.cls_2,d:"M55.61,45.08a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,55.61,45.08Z"}),l.a.createElement("path",{className:P.a.cls_2,d:"M41.47,65a0.62,0.62,0,0,1-.2,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,41.47,65Z"}),l.a.createElement("path",{className:P.a.cls_2,d:"M31.92,91.93a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,31.92,91.93Z"}),l.a.createElement("path",{className:P.a.cls_2,d:"M49.59,116.86a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,49.59,116.86Z"}),"}",l.a.createElement("path",{className:P.a.cls_1,d:"M80.52,146.83a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,146.83Z"}),l.a.createElement("path",{className:P.a.cls_1,d:"M121.77,132.82a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,121.77,132.82Z"}),l.a.createElement("path",{className:P.a.cls_1,d:"M146.52,97.9a0.61,0.61,0,0,1-.19,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,146.52,97.9Z"}),l.a.createElement("path",{className:P.a.cls_1,d:"M137,59a0.65,0.65,0,0,1-.2-1.27l9.55-3A0.65,0.65,0,1,1,146.7,56l-9.55,3A0.66,0.66,0,0,1,137,59Z"}),l.a.createElement("path",{className:P.a.cls_1,d:"M115.76,29.12a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,115.76,29.12Z"}),l.a.createElement("path",{className:P.a.cls_1,d:"M80.52,17.11a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,17.11Z"}),l.a.createElement("path",{className:P.a.cls_1,d:"M22.37,59a0.62,0.62,0,0,1-.2,0l-9.55-3A0.65,0.65,0,1,1,13,54.77l9.55,3A0.65,0.65,0,0,1,22.37,59Z"}),l.a.createElement("path",{className:P.a.cls_1,d:"M12.82,97.9a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,12.82,97.9Z"}),l.a.createElement("path",{className:P.a.cls_1,d:"M43.58,29.12a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,43.58,29.12Z"}),l.a.createElement("path",{className:P.a.cls_1,d:"M37.56,132.82a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,.91-0.13,0.65,0.65,0,0,1,.13.91l-6,8A0.65,0.65,0,0,1,37.56,132.82Z"}))),l.a.createElement("div",{className:P.a.Winner},l.a.createElement("div",{className:P.a.WinnerText},l.a.createElement("h3",null,"Congratulations!"),l.a.createElement("p",null,"You've found the secret page!"))),l.a.createElement(_.a,{to:"/"},l.a.createElement("div",{className:P.a.ReturnButton},"Return to Site")))}}]),a}(n.Component),D=t(92),R=t(5),G=t.n(R),U=(t(204),t(60)),Y=t(95),z=t.n(Y),J=t(93),V=t.n(J),q=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).handleChange=function(e){switch(t.setState(Object(D.a)({},e.target.name,e.target.value)),e.target.name){case"form_email":""!==e.target.value?t.setState({emailInputClasses:g()(G.a.FormInput,G.a.focused)}):t.setState({emailInputClasses:g()(G.a.FormInput)});break;case"form_name":""!==e.target.value?t.setState({nameInputClasses:g()(G.a.FormInput,G.a.focused)}):t.setState({nameInputClasses:g()(G.a.FormInput)});break;case"form_message":""!==e.target.value?t.setState({messageInputClasses:g()(G.a.FormInput,G.a.focused)}):t.setState({messageInputClasses:g()(G.a.FormInput)})}},t.validEmail=function(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||(t.setState({snackbarOpen:!0,errorMessage:"You have entered an invalid email address!"}),!1)},t.handleClose=function(e,a){"clickaway"!==a&&t.setState({snackbarOpen:!1})},t.setFocus=function(e){document.getElementById(e).focus(),console.log("focusing")},t.state={service_id:Object({NODE_ENV:"production",PUBLIC_URL:"/bcavenagh"}).REACT_APP_EMAIL_SERVICE_ID,template_id:Object({NODE_ENV:"production",PUBLIC_URL:"/bcavenagh"}).REACT_APP_EMAIL_TEMPLATE_ID,user_id:Object({NODE_ENV:"production",PUBLIC_URL:"/bcavenagh"}).REACT_APP_EMAIL_USER_ID,form_email:"",form_name:"",form_message:"",formSubmitted:!1,emailInputClasses:g()(G.a.FormInput),nameInputClasses:g()(G.a.FormInput),messageInputClasses:g()(G.a.FormInput),snackbarOpen:!1,errorMessage:null},t.handleSubmit=t.handleSubmit.bind(Object(d.a)(Object(d.a)(t))),t.handleChange=t.handleChange.bind(Object(d.a)(Object(d.a)(t))),t.handleClose=t.handleClose.bind(Object(d.a)(Object(d.a)(t))),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var a={email:this.state.form_email,name:this.state.form_name,message:this.state.form_message};this.validEmail(a.email)?null!==a.message&&""!==a.message?this.sendFeedback(this.state.template_id,a,this.state.user_id):this.setState({snackbarOpen:!0,messageInputClasses:g()(G.a.FormInput,G.a.focused,G.a.invalid),errorMessage:"Please enter a message."}):this.setState({snackbarOpen:!0,emailInputClasses:g()(G.a.FormInput,G.a.focused,G.a.invalid),errorMessage:"That's not a real email address."}),this.setState({formSubmitted:!0})}},{key:"sendFeedback",value:function(e,a,t){console.log("uncomment sendFeedback in Contact.js to send emails again")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:G.a.ContactPage},l.a.createElement("div",{className:G.a.Stripe}),l.a.createElement("div",{className:G.a.ContactGrid},l.a.createElement(_.a,{to:"/"},l.a.createElement("button",{className:G.a.BackButton},l.a.createElement(E.b,null),"Back")),l.a.createElement("div",{className:G.a.ContactContent},l.a.createElement("form",{name:"contact_form",className:G.a.ContactForm},l.a.createElement("h1",null,"Say Hey!"),l.a.createElement(U.b,{anchorOrigin:{vertical:"top",horizontal:"center"},open:this.state.snackbarOpen,autoHideDuration:3e3,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:l.a.createElement("span",{id:"message-id"},this.state.errorMessage),action:[l.a.createElement(U.a,{key:"close","aria-label":"Close",color:"inherit",className:G.a.close,onClick:this.handleClose},l.a.createElement(z.a,null))]}),l.a.createElement("div",{id:"email",className:this.state.emailInputClasses,onClick:function(){return e.setFocus("form_email")}},l.a.createElement("label",{htmlFor:"form_email",className:G.a.FormLabel},"Email"),l.a.createElement("input",{type:"email",placeholder:"name@email.com",name:"form_email",id:"form_email",autoComplete:"email",value:this.state.form_email,onChange:this.handleChange,className:g()(G.a.Input)})),l.a.createElement("div",{id:"name",className:this.state.nameInputClasses,onClick:function(){return e.setFocus("form_name")}},l.a.createElement("label",{htmlFor:"form_name",className:G.a.FormLabel},"Name"),l.a.createElement("input",{type:"text",placeholder:"Who are you?",name:"form_name",id:"form_name",onChange:this.handleChange,className:g()(G.a.Input)})),l.a.createElement("div",{className:this.state.messageInputClasses,onClick:function(){return e.setFocus("form_message")}},l.a.createElement("label",{htmlFor:"form_message",className:G.a.FormLabel},"Message"),l.a.createElement("textarea",{rows:"1",type:"text",placeholder:"What's up?",name:"form_message",id:"form_message",onChange:this.handleChange,className:g()(G.a.Input,G.a.LargeInput)})),l.a.createElement("div",{className:G.a.Submit,onClick:this.handleSubmit},l.a.createElement("h4",null,"Send"),l.a.createElement(E.c,null)),l.a.createElement("div",{className:G.a.Hoopla},l.a.createElement("img",{src:V.a}))))))}}]),a}(n.Component),K=t(303),X=t(304),Q=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("main",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",minHeight:"97vh",minWidth:"99vw"}},l.a.createElement(K.a,null,l.a.createElement(X.a,{exact:!0,path:"/",component:Z}),l.a.createElement(X.a,{exact:!0,path:"/winner",component:T}),l.a.createElement(X.a,{exact:!0,path:"/contact",component:q})))}}]),a}(n.Component),$=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(Q,null))}}]),a}(n.Component),ee=t(302);t(297).config(),r.a.render(l.a.createElement(ee.a,null,l.a.createElement($,null)),document.getElementById("root"))},5:function(e,a,t){e.exports={ContactPage:"Contact_ContactPage__28ZDb",ContactGrid:"Contact_ContactGrid__1WCJ_",Stripe:"Contact_Stripe__ZHLaO",BackButton:"Contact_BackButton__KTgZK",ContactContent:"Contact_ContactContent__hfGsV",ContactForm:"Contact_ContactForm__2ooCx",FormInput:"Contact_FormInput__38pq9",FormLabel:"Contact_FormLabel__2codv",Input:"Contact_Input__2RZ3i",LargeInput:"Contact_LargeInput__EA9Qx",focused:"Contact_focused__2XMDA",invalid:"Contact_invalid__1LcSb",Submit:"Contact_Submit__12Gzm",Hoopla:"Contact_Hoopla__2ypG1"}},59:function(e,a,t){e.exports={Companies:"Companies_Companies__1GIFa",Logo:"Companies_Logo__c9Hde"}},7:function(e,a,t){e.exports={Hero:"Home_Hero__36smY",BlueCover:"Home_BlueCover__2Cq5P",BlackCover:"Home_BlackCover__1hH3Q",Intro:"Home_Intro__15Dnd",Avatar:"Home_Avatar__32ls-",SeeMore:"Home_SeeMore__MLC5L",Content:"Home_Content__G2KYf",AboutSection:"Home_AboutSection__EFW3H",About:"Home_About__3gYqG",AboutText:"Home_AboutText__2taK3",SplitTable:"Home_SplitTable__1lQmv",Column:"Home_Column__27iSL",ColumnSeparator:"Home_ColumnSeparator__1imCC",Companies:"Home_Companies__3_Q4s",CollabContainer:"Home_CollabContainer__1jpSH",Collab:"Home_Collab__3Hj_5",Interested:"Home_Interested__28u5X",Footer:"Home_Footer__IEBFL",FooterText:"Home_FooterText__269I9",FooterSocial:"Home_FooterSocial__3Imiu",FooterSocialIcon:"Home_FooterSocialIcon__TRDhu"}},86:function(e,a,t){e.exports=t.p+"static/media/hfpg.b494c328.png"},87:function(e,a,t){e.exports=t.p+"static/media/splenda.5642fbf5.png"},88:function(e,a,t){e.exports=t.p+"static/media/jh.e57f0738.png"},89:function(e,a,t){e.exports=t.p+"static/media/rf.cd8948e8.png"},90:function(e,a,t){e.exports=t.p+"static/media/al.07351137.png"},91:function(e,a,t){e.exports=t.p+"static/media/gs.e5bf6b8a.png"},93:function(e,a,t){e.exports=t.p+"static/media/Hoopla.1892fb4f.png"}},[[193,1,2]]]);
//# sourceMappingURL=main.29876c55.chunk.js.map