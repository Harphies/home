(window["webpackJsonpportfolio-app"]=window["webpackJsonpportfolio-app"]||[]).push([[0],{2:function(e){e.exports=JSON.parse('{"backgroundType":"gradient","plainBackgroundMode":"daylight","devIntro":"Olalekan Taofeek","devDesc":"| Researcher| Innovator | Futurist | Machine learning | deep learning | IoT | Optimist ","gradientColors":"#EE7752, #E73C7E, #23A6D5, #23D5AB","icons":[{"id":0,"image":"fa-github","url":"https://github.com/Harphies","style":"socialicons"},{"id":1,"image":"fa-facebook","url":"https://web.facebook.com/Harphiies","style":"socialicons"},{"id":2,"image":"fa-instagram","url":"https://www.instagram.com/harphiies/","style":"socialicons"},{"id":3,"image":"fa-linkedin","url":"https://www.linkedin.com/in/olalekan-taofeek/","style":"socialicons"}],"instaLink":"https://www.instagram.com/","instaUsername":"harphiies","instaQuerry":"/?__a=1","aboutDev":"An Innovator with 5 years experience developing smart and Intelligent machines. I care much about building machines that think.|| Co-Founder @TREPLABS || she own\'s my heart.","gitHubLink":"https://api.github.com/users/","gitHubUsername":"harphies","gitHubQuerry":"/repos?sort=updated&direction=desc"}')},20:function(e,t,a){e.exports=a(48)},25:function(e,t,a){},26:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),o=(a(25),a(19)),s=a(3),l=a(4),u=a(6),d=a(5),m=a(7),h=a(18),b=a.n(h),f=(a(26),a(2)),p=(a(27),a(8)),g=a.n(p),v=(a(46),a(16),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){window.addEventListener("scroll",a.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",a.handleScroll)},a.handleScroll=function(e){},a.toggleHover=function(e){var t=Object(o.a)(a.state.hoverstatus);"enter"===e.event?(t[e.icon.id]="socialiconshover",a.setState({hoverstatus:t}),e.icon.id):(t[e.icon.id]="socialicons",a.setState({hoverstatus:t}),e.icon.id)},a.state={backgroundType:f.backgroundType,devInfo:f.devIntro,devDesc:f.devDesc,hoverstatus:["socialicons","socialicons","socialicons","socialicons"]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=f.icons;return r.a.createElement("div",null,r.a.createElement("div",{id:"divmainbody",className:"jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{className:" container container-fluid text-center "},r.a.createElement("h1",{className:"display-1",onScroll:this.handleScroll},this.state.devInfo),r.a.createElement(b.a,{className:"lead"}," ",this.state.devDesc),r.a.createElement("div",{className:" p-5"},t.map(function(t){return r.a.createElement("a",{key:t.id,target:"_blank",rel:"noopener noreferrer",href:"".concat(t.url)},r.a.createElement("i",{className:"fab ".concat(t.image,"  fa-3x ").concat(e.state.hoverstatus[t.id]),onMouseEnter:function(){return e.toggleHover({icon:t,event:"enter"})},onMouseLeave:function(){return e.toggleHover({icon:t,event:"leave"})}}))})),r.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#divaboutme",role:"button"},"More about me"))))}}]),t}(n.Component)),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){a.handleRequest()},a.handleRequest=function(e){g.a.get(f.instaLink+f.instaUsername+f.instaQuerry).then(function(e){a.setState({instaProfilePic:e.data.graphql.user.profile_pic_url_hd})}).catch(function(e){console.log(e)}).finally(function(){})},a.state={heading:"About me",aboutDev:f.aboutDev,instaProfilePic:"bad request"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"divaboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:" container container-fluid p-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:" col-5 d-none d-lg-block align-self-center"},r.a.createElement("img",{className:" border border-secondary rounded-circle",src:this.state.instaProfilePic})),r.a.createElement("div",{className:" col-lg-7"},r.a.createElement("h1",{className:"display-4 mb-5 text-center"},this.state.heading),r.a.createElement("p",{className:" lead text-center"},this.state.aboutDev)))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){a.handleRequest()},a.handleRequest=function(e){g.a.get(f.gitHubLink+f.gitHubUsername+f.gitHubQuerry).then(function(e){a.setState({projectsArray:e.data.slice(0,4)})}).catch(function(e){console.log(e)}).finally(function(){})},a.state={heading:"Recent Projects",projectsArray:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"divproject",className:"jumbotron jumbotron-fluid bg-transparent m-0"},r.a.createElement("div",{className:" container container-fluid p-5"},r.a.createElement("h1",{className:"display-4 pb-5"},this.state.heading),r.a.createElement("div",{className:" row"},this.state.projectsArray.map(function(e){return r.a.createElement(j,{key:e.id,id:e.id,value:e})}))))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){a.handleUpdatetime()},a.handleUpdatetime=function(){var e=new Date(a.state.value.pushed_at),t=(new Date).getTime()-e.getTime(),n=Math.trunc(t/1e3/60/60);if(n<24)a.setState({updated_at:n.toString()+" hours ago"});else{var r=e.getDate(),c=e.getMonth(),i=e.getFullYear();a.setState({updated_at:"on "+r+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][c]+" "+i})}},a.state={value:a.props.value,updated_at:"0 mints",stargazers_count:a.props.value.stargazers_count,download_url:a.props.value.svn_url+"/archive/master.zip",repo_url:a.props.value.svn_url},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.state.value.name," "),r.a.createElement("p",{className:"card-text"},this.state.value.description," "),r.a.createElement("a",{href:this.state.download_url,className:" btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:this.state.repo_url,target:" _blank",className:" btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"),r.a.createElement("hr",null),r.a.createElement(w,{value:this.state.value.languages_url}),r.a.createElement("p",{className:"card-text"},r.a.createElement("a",{href:"",className:" text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},this.state.stargazers_count)),r.a.createElement("small",{className:"text-muted"},"Updated ",this.state.updated_at)))))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.componentDidMount=function(){a.handleRequest()},a.handleRequest=function(){g.a.get(a.props.value).then(function(e){a.setState({data:e.data})}).catch(function(e){console.log(e)}).finally(function(){})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=[],a=0;for(var n in this.state.data)t.push(n),a+=this.state.data[n];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",t.map(function(t){return r.a.createElement("a",{key:t,className:"badge badge-light card-link"},t,":"," ",Math.trunc(e.state.data[t]/a*1e3)/10," ","%")}))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={bgStyle:{backgroundColor:"#f5f5f5"}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{style:this.state.bgStyle,className:" mt-auto py-3 text-center"},r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:" badge badge-dark",target:"_blank",href:"https://github.com/harphies"},"Harphies")," ","using ",r.a.createElement("i",{className:"fab fa-react"}),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"}," ","If you are not feeling stupid daily you are not growing || If you know you can't fail, what would you do right now??.")))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(E,null),r.a.createElement(y,null),r.a.createElement(N,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.02066229.chunk.js.map