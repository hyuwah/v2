(window.webpackJsonp=window.webpackJsonp||[]).push([[3,5],{245:function(t,a,e){},246:function(t,a,e){},247:function(t,a,e){"use strict";e(245)},248:function(t,a,e){"use strict";e(246)},249:function(t,a,e){"use strict";e.r(a);e(93);var s={methods:{toHome(){this.$router.push("/")}}},i=e(15),o=Object(i.a)(s,(function(){var t=this._self._c;return t("v-app-bar",{staticClass:"white",attrs:{app:"","inverted-scroll":this.$frontmatter.home}},[t("v-spacer"),this._v(" "),t("v-toolbar-title",{staticStyle:{cursor:"pointer"},on:{click:this.toHome}},[t("v-layout",{staticClass:"primary--text",attrs:{"align-center":""}},[t("img",{attrs:{height:"36px",src:"https://hyuwah.github.io/assets/images/logo.png"}}),this._v(" "),t("h5",{staticClass:"headline font-weight-bold"},[this._v("hyuwah")]),this._v(" "),t("h5",{staticClass:"headline"},[this._v(".my.id")])])],1),this._v(" "),t("v-spacer")],1)}),[],!1,null,null,null).exports,r={},l=(e(247),{name:"DefaultLayout",components:{Navbar:o,Footer:Object(i.a)(r,(function(){var t=this,a=t._self._c;return a("v-footer",{attrs:{color:"primary",dark:"",height:"auto",padless:""}},[a("v-row",{staticClass:"mt-2",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-row",{staticClass:"pa-2"},[a("v-col",{attrs:{cols:"10",md:"3",offset:"1","offset-md":"8"}},[a("v-row",{attrs:{align:"center",justify:"end"}},[a("img",{attrs:{height:"48px",src:"https://hyuwah.github.io/assets/images/logo.png"}}),t._v(" "),a("h5",{staticClass:"headline font-weight-bold"},[t._v("hyuwah")]),t._v(" "),a("h5",{staticClass:"headline"},[t._v(".my.id")])]),t._v(" "),a("v-row",{staticClass:"mt-2",attrs:{justify:"end"}},[a("span",{staticClass:"text-right"},[t._v("A website to showcase the work of Muhamad Wahyudin")])])],1)],1),t._v(" "),a("v-row",{staticClass:"primary darken-1 pa-2 font-weight-light ma-2",attrs:{justify:"center"}},[a("span",{staticClass:"px-3 primary--text text--lighten-4"},[t._v("\n          hyuwah © "+t._s((new Date).getFullYear())+" | Made with\n          "),a("v-icon",{staticClass:"red--text text--lighten-2",attrs:{small:""}},[t._v("favorite")]),t._v(" in\n          Indonesia\n        ")],1)])],1)],1)],1)}),[],!1,null,null,null).exports}}),n=(e(248),Object(i.a)(l,(function(){var t=this._self._c;return t("v-app",{staticClass:"theme-container gfont"},[t("Navbar"),this._v(" "),t("v-main",[this._t("default")],2),this._v(" "),t("Footer")],1)}),[],!1,null,null,null));a.default=n.exports},250:function(t,a,e){},259:function(t,a,e){},260:function(t,a,e){"use strict";e(250)},282:function(t,a,e){"use strict";e(259)},288:function(t,a,e){"use strict";e.r(a);var s=e(249),i={data:()=>({name:"",email:"",message:""})},o=e(15),r=Object(o.a)(i,(function(){var t=this,a=t._self._c;return a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"10",md:"8","offset-sm":"1","offset-md":"2"}},[a("h2",{staticClass:"display-2 primary--text mb-3"},[t._v("Contact")]),t._v(" "),a("p",[t._v("\n        If you'd like to discuss something or just want to say hi, feel free\n        to contact me via links below or this form. 😊\n      ")]),t._v(" "),a("form",{attrs:{id:"contactForm",action:"https://formspree.io/muhammad.whydn@gmail.com",method:"POST","accept-charset":"UTF-8"}},[a("v-text-field",{attrs:{filled:"",name:"name",label:"Name"},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}}),t._v(" "),a("v-text-field",{attrs:{filled:"",name:"email",label:"Email",required:""},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),t._v(" "),a("v-textarea",{attrs:{filled:"",name:"message",label:"Message",required:""},model:{value:t.message,callback:function(a){t.message=a},expression:"message"}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"_subject",value:"New submission from hyuwah.github.io"}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"_next",value:"https://hyuwah.github.io/thanks"}}),t._v(" "),a("input",{staticStyle:{display:"none"},attrs:{type:"text",name:"_gotcha"}}),t._v(" "),a("v-layout",{attrs:{"justify-end":""}},[a("v-btn",{attrs:{dark:"",type:"submit",value:"Send",color:"green"},on:{click:()=>{}}},[t._v("Send "),a("v-icon",{attrs:{right:""}},[t._v("send")])],1)],1)],1)])],1)],1)}),[],!1,null,null,null).exports,l=(e(93),{data:()=>({items:[{key:"3",src:"https://res.cloudinary.com/hyuwah-github-io/image/upload/v1591783251/Muslim%20Companion%20Apps/mvp_ayah_prayer_qibla.gif",title:"Muslim Companion App",subtitle:"Show quran verse, prayer times & qibla",desc:"A work in progress app to show random quran verse, prayer times & qibla compass. Data provided by Al Quran Cloud API & Aladhan API.",github:{url:"https://github.com/hyuwah/android-muslim-companion-app",stars:"https://img.shields.io/github/stars/hyuwah/android-muslim-companion-app?style=social",forks:"https://img.shields.io/github/forks/hyuwah/android-muslim-companion-app?style=social"},playstore:"",type:"android"},{key:"4",src:"https://lh3.googleusercontent.com/0FsJRDl4zaxo4LrIfgXtAe9C0dETEPTOn4VkJEikGRoutPOaXsvlsDO0ZQuonIK-uocT=w1920-h929-rw",title:"CatatanKu",subtitle:"Android app for notes & todos",desc:"Simple note taking android app developed with Java. Basic CRUD using Cursor Loader pattern into SQLite database. CatatanKu is a lightweight notepad application to keep track of your thoughts and ideas.",github:{url:"https://github.com/hyuwah/android-catatanku",stars:"",forks:""},playstore:"https://play.google.com/store/apps/details?id=io.github.hyuwah.catatanku&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",type:"android"},{key:"7",src:"https://camo.githubusercontent.com/51a62edccd651596f52cf46e61f59235afc314b0/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6879757761682d6769746875622d696f2f696d6167652f75706c6f61642f76313539323434383137302f476974687562557365724578706c6f7265722f696e69742d757365722d736f6369616c2d6f7074696d697a65642e676966",title:"Github User Explorer",subtitle:"Architectural sample of modern android development",desc:"Github API App with MVVM + Dagger Hilt + Jetpack Navigation + Coroutine + Retrofit",github:{url:"https://github.com/hyuwah/github-user-explorer-app",stars:"https://img.shields.io/github/stars/hyuwah/github-user-explorer-app?style=social",forks:"https://img.shields.io/github/forks/hyuwah/github-user-explorer-app?style=social"},playstore:"",type:"android"},{key:"8",src:"https://camo.githubusercontent.com/c07b5192a349e2a9753790664fbe3151ec44fb5c/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6879757761682d6769746875622d696f2f696d6167652f75706c6f61642f76313539333134313232332f4d6f76696544422532304578706c6f7265722f626173635f666c6f775f6f7074696d697a65642e676966",title:"MovieDB Explorer",subtitle:"Architectural sample of modern android development",desc:"The MovieDB App with MVVM + Koin + Jetpack Navigation + Coroutine + Retrofit + Room",github:{url:"https://github.com/hyuwah/moviedb-explorer-app",stars:"https://img.shields.io/github/stars/hyuwah/moviedb-explorer-app?style=social",forks:"https://img.shields.io/github/forks/hyuwah/moviedb-explorer-app?style=social"},playstore:"",type:"android"},{key:"98",src:"https://res.cloudinary.com/hyuwah-github-io/image/upload/v1588829097/IdentitasKu/1200.gif",title:"IdentitasKu",subtitle:"App to help you save your important data that you don't have time to remember",desc:"Save your ID card, handphone number, address data in a centralized way. Send those data to other applications such as chat app. Or copy the data wherever the data is needed. Data protected with password / fingerprint & encryption",github:{url:"https://github.com/hyuwah/IdentitasKu",stars:"https://img.shields.io/github/stars/hyuwah/IdentitasKu?style=social",forks:"https://img.shields.io/github/forks/hyuwah/IdentitasKu?style=social"},playstore:"https://play.google.com/store/apps/details?id=com.muhammadwahyudin.identitasku",type:"android"},{key:"99",src:"https://camo.githubusercontent.com/9c31c2ae13e5e79e6328a61ed94a540a429b7e88/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3331342f312a644d7a494a6c543132686d53546b566b7a4e6e7845512e676966",title:"DraggableView",subtitle:"Android library to make floating draggable view easy.",desc:"DraggableView is an Android library to make floating draggable view easily inside app or overlaying other app",github:{url:"https://github.com/hyuwah/DraggableView",stars:"https://img.shields.io/github/stars/hyuwah/DraggableView?style=social",forks:"https://img.shields.io/github/forks/hyuwah/DraggableView?style=social"},playstore:"",type:"android library"}]}),methods:{toPortfolioPage(){this.$router.push(this.$frontmatter.portfolio)},getCarouselHeight(){return"xs"==this.$vuetify.breakpoint.name?"75vh":"55vh"},toUrl(t){console.log(t),window.open(t,"_blank")}}}),n=(e(260),Object(o.a)(l,(function(){var t=this,a=t._self._c;return a("v-col",{staticClass:"pb-5 mt-5 mb-5",attrs:{cols:"12",sm:"10",md:"8","offset-sm":"1","offset-md":"2"}},[a("v-row",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:250},expression:"{ delay: 250 }"}],staticClass:"mb-4",attrs:{align:"end"}},[a("h2",{staticClass:"display-2 white--text"},[t._v("Featured Portfolios")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{text:"",dark:""},on:{click:t.toPortfolioPage}},[t._v("\n      Show More\n      "),a("v-icon",{attrs:{right:""}},[t._v("chevron_right")])],1)],1),t._v(" "),a("v-row",t._l(t.items.slice().reverse(),(function(e,s){return a("v-col",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:250},expression:"{ delay: 250 }"}],key:s,attrs:{cols:"12",md:"12",lg:"6"}},[a("v-card",{staticClass:"rounded-lg pl-2 pr-2"},[a("v-row",{staticClass:"pa-3"},[a("v-col",{attrs:{"align-self":"center",cols:"12",sm:"6"}},[a("v-img",{attrs:{width:"100%",contain:"",src:e.src}})],1),t._v(" "),a("v-col",{staticClass:"pa-3",attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"text-h6 font-weight-bold"},[t._v(t._s(e.title))]),t._v(" "),e.github.stars||e.github.fork?a("v-row",{staticClass:"pl-3 pr-3 pb-3 pt-1"},[e.github.stars?a("img",{staticClass:"mr-2",attrs:{src:e.github.stars}}):t._e(),t._v(" "),e.github.forks?a("img",{attrs:{src:e.github.forks}}):t._e()]):t._e(),t._v(" "),a("p",{staticClass:"text-subtitle-2 text--secondary"},[t._v(t._s(e.subtitle))]),t._v(" "),a("p",{staticClass:"text-body-1"},[t._v(t._s(e.desc))])],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),e.github.url?a("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:function(a){return t.toUrl(e.github.url)}}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v("fab fa-github")]),t._v("\n            Repository\n          ")],1):t._e(),t._v(" "),e.playstore?a("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:function(a){return t.toUrl(e.playstore)}}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v("fab fa-google-play")]),t._v("\n            Playstore\n          ")],1):t._e()],1)],1)],1)})),1)],1)}),[],!1,null,null,null).exports),c=(e(261),e(278)),h=e.n(c);var d={name:"CodingStats",data:function(){return{langResponse:{},langSeries:[],langLabels:[],langSeriesOther:0,caResponse:{},caSeries:[{name:"Coding Mins",data:[]}],caLabels:[]}},computed:{caOptions(){return{chart:{type:"bar"},colors:["#fdd835"],labels:this.caLabels,plotOptions:{bar:{horizontal:!0,dataLabels:{position:"bottom"}}},dataLabels:{enabled:!0,textAnchor:"center",formatter:function(t,a){return`${e=t,s=e/60,i=Math.floor(s),o=60*(s-i),r="",i>0&&(r+=i+" hrs "),r+=Math.round(o)+" mins"} (${t})`;var e,s,i,o,r},dropShadow:{enabled:!1,opacity:.5},style:{colors:["#0a0a0a"]},offsetX:0}}},langOptions(){return{chart:{type:"donut"},plotOptions:{pie:{donut:{size:"60%"}}},labels:this.langLabels,legend:{show:!0,position:"bottom",itemMargin:{horizontal:3,vertical:2}},dataLabels:{enabled:!0,style:{fontSize:"16px"}}}}},beforeMount(){h()("https://wakatime.com/share/@hyuwah/9235ab47-5904-489c-9a70-2c141cbe079b.json",null,(t,a)=>{t?console.error(t.message):(this.langResponse=a.data,this.langSeries=this.langResponse.map(t=>{return t.percent>2?t.percent:(this.langSeriesOther=(a=this.langSeriesOther+t.percent,e=(e=2)||0,e=Math.pow(10,e),Math.floor(a*e)/e),-1);var a,e}),this.langSeries=this.langSeries.filter(t=>-1!=t),this.langSeries.push(this.langSeriesOther),this.langLabels=this.langResponse.map(t=>t.name),this.langLabels=this.langLabels.slice(0,this.langSeries.length-1),this.langLabels.push("Other"))}),h()("https://wakatime.com/share/@hyuwah/0c9861c2-73ad-4f05-9c82-abe115b163e1.json",null,(t,a)=>{t?console.error(t.message):(this.caResponse=a.data.reverse(),this.caSeries[0].data=this.caResponse.map(t=>Math.round(t.grand_total.total_seconds/60)),this.caLabels=this.caResponse.map(t=>t.range.text))})}},p=Object(o.a)(d,(function(){var t=this,a=t._self._c;return a("v-col",{staticClass:"pb-5 mt-5 mb-5",attrs:{cols:"12",sm:"10",md:"8","offset-sm":"1","offset-md":"2"}},[a("v-row",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:250},expression:"{ delay: 250 }"}],staticClass:"mb-4",attrs:{"align-end":""}},[a("h2",{staticClass:"display-2 white--text"},[t._v("Coding Stats")])]),t._v(" "),a("v-row",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:250},expression:"{ delay: 250 }"}]},[a("v-col",{attrs:{cols:"12",md:"12",lg:"6"}},[a("v-card",{staticClass:"pa-3"},[a("v-card-title",{attrs:{"primary-title":""}},[a("h2",[t._v("Languages")])]),t._v(" "),a("v-card-text",[a("ClientOnly",[a("apexcharts",{attrs:{options:t.langOptions,series:t.langSeries}})],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("span",{staticClass:"text-caption"},[t._v("Over last 7 days")])],1)],1)],1),t._v(" "),a("v-col",{attrs:{cols:"12",md:"12",lg:"6"}},[a("v-card",{staticClass:"pa-3"},[a("v-card-title",{attrs:{"primary-title":""}},[a("h2",[t._v("Activity")])]),t._v(" "),a("v-card-text",{staticClass:"ma-2"},[a("ClientOnly",[a("apexcharts",{attrs:{options:t.caOptions,series:t.caSeries}})],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("span",{staticClass:"text-caption"},[t._v("Over last 7 days")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports,u={components:{DefaultLayout:s.default,Contact:r,PortfolioWidget:n,CodingStats:p},data:()=>({window:{width:0,height:0},socmedItems:[{title:"Github",img:"https://res.cloudinary.com/hyuwah-github-io/image/upload/v1547297332/img_github_gsbxtx.png",link:"https://github.com/hyuwah"},{title:"LinkedIn",img:"https://res.cloudinary.com/hyuwah-github-io/image/upload/v1547297332/img_linkedin_gzqqg1.png",link:"https://www.linkedin.com/in/hyuwah/"},{title:"DEV.to",img:"https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg",link:"https://dev.to/hyuwah"},{title:"Codepen",img:"https://res.cloudinary.com/hyuwah-github-io/image/upload/v1547297332/img_codepen_uxypzn.png",link:"https://codepen.io/hyuwah/"}]}),methods:{handleResize(){this.window.width=window.innerWidth,this.window.height=window.innerHeight}},mounted(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed(){window.removeEventListener("resize",this.handleResize)}},v=(e(282),Object(o.a)(u,(function(){var t=this,a=t._self._c;return a("DefaultLayout",[a("v-parallax",{attrs:{id:"heroParallax",src:"https://res.cloudinary.com/hyuwah-github-io/image/upload/v1566016247/hyuwah.github.io/v2-header-alt.webp"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{align:"center"}},[a("v-avatar",{staticClass:"mb-2",attrs:{size:"96px"}},[a("v-img",{attrs:{src:"https://hyuwah.github.io/assets/images/pp-square.webp"}})],1),t._v(" "),a("h1",{staticClass:"display-2 font-weight-bold ma-3"},[t._v("\n        MUHAMAD WAHYUDIN\n      ")]),t._v(" "),a("h3",{staticClass:"font-weight-light"},[t._v("\n        Software Engineer - Android\n      ")])],1)],1)],1),t._v(" "),a("div",{staticClass:"primary bg"},[a("v-container",[a("v-row",{attrs:{wrap:""}},[a("v-col",{staticClass:"pb-5",staticStyle:{"margin-top":"-100px","z-index":"1"},attrs:{cols:"12",sm:"10",md:"8","offset-sm":"1","offset-md":"2"}},[a("v-hover",[a("v-card",{attrs:{hover:"",shaped:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("v-col",{attrs:{align:"center"}},[a("h2",{staticClass:"primary--text mb-2"},[t._v("Hello There!")]),t._v(" "),a("h5",{staticClass:"font-weight-light",staticStyle:{"word-break":"break-word"}},[t._v("\n                    I'm Wahyu, a Software Engineer handling mobile development specifically on Android with 5+ years of experience in the startup industry. I was a Google Certified Associate Android Developer from 2019 until 2022. I am passionate about creating innovative and user-friendly mobile apps, and I am always looking for new ways to use technology to solve real-world problems.\n                  ")])])],1),t._v(" "),a("v-card-text",{staticClass:"pr-4 pl-4 pb-4 pt-0 text-center"},[a("v-col",{staticClass:"mb-2",attrs:{align:"center"}},[a("a",{attrs:{href:"https://www.credential.net/62f48fc6-dfef-4604-a900-b59a5d2cc17c",target:"_blank",rel:"noopener"}},[a("v-avatar",{staticClass:"elevation-4",attrs:{size:"128px"}},[a("v-img",{attrs:{src:"https://res.cloudinary.com/hyuwah-github-io/image/upload/v1689983366/hyuwah.github.io/associate-android-dev-badge-kotlin.png"}})],1)],1)]),t._v(" "),a("v-row",{staticClass:"mt-4",attrs:{justify:"center"}},t._l(t.socmedItems,(function(e){return a("v-col",{key:e.id,staticClass:"socmed-item",attrs:{cols:"4",sm:"2"}},[a("a",{staticClass:"socmed-item",attrs:{href:e.link,target:"_blank",rel:"noopener"}},[a("v-row",[a("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[a("img",{attrs:{src:e.img,height:"48px",alt:e.title}})]),t._v(" "),a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("span",{staticClass:"font-weight-medium grey--text text--darken-4"},[t._v(t._s(e.title))])])],1)],1)])})),1)],1)],1)],1)],1),t._v(" "),a("PortfolioWidget")],1)],1)],1),t._v(" "),a("v-parallax",{attrs:{height:"300",src:"https://hyuwah.github.io/assets/images/arduino.webp"}}),t._v(" "),a("div",{staticClass:"elevation-4 pt-4 pb-4"},[a("Contact")],1)],1)}),[],!1,null,null,null));a.default=v.exports}}]);