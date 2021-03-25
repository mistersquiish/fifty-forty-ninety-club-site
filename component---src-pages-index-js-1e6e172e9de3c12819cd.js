/*! For license information please see component---src-pages-index-js-1e6e172e9de3c12819cd.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("qhky"),c=a("dI71"),s=a("zIRd");s.a.registerVersion("firebase","8.2.7","app"),s.a.apps.length||s.a.initializeApp({apiKey:"AIzaSyCdgp5yFigWahd-_Ai2FCox6xQOmA3NGlY",authDomain:"club-bf194.firebaseapp.com",databaseURL:void 0,projectId:"club-bf194",storageBucket:"club-bf194.appspot.com",messagingSenderId:"18799619958",appId:"1:18799619958:web:cb16a5dc67abbbc9f61457",measurementId:void 0});var o=s.a,i=a("dknK"),m=a("bWLx"),u=a("DpTn"),h=a("aUHI"),p=a("PIBi"),f=a("hlFM"),E=a("ofer");function d(){var e=new Date,t=new Date(e.getTime());t.setHours("06:00:00".split(":")[0]),t.setMinutes("06:00:00".split(":")[1]),t.setSeconds("06:00:00".split(":")[2]),e<t&&e.setDate(e.getDate()-1);var a="Last updated on: ("+e.toDateString().slice(4)+")";return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{p:2,display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement("img",{width:24.1,height:53.6,src:"https://cdn.freebiesupply.com/images/large/2x/nba-logo-transparent.png",alt:"my image"}),r.a.createElement(f.a,{pl:1},r.a.createElement(E.a,{variant:"h2"},"NBA 2020-2021 Season")),r.a.createElement(f.a,null,r.a.createElement(E.a,{variant:"h5",color:"textSecondary"},a))))}a("vnwh");var b=a("hlie");function g(){return r.a.createElement(f.a,{p:2,display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement(E.a,{variant:"body2"},'The "50-40-90 club" is an honor given to NBA players that have an excellent shooting season. The requirements are:',r.a.createElement("br",null),r.a.createElement("br",null),"Shoot at least 50.0% from the field",r.a.createElement("br",null),"Shoot at least 40.0% from three point range",r.a.createElement("br",null),"Shoot at least 90.0% from the free throw line",r.a.createElement("br",null),r.a.createElement("br",null),"In addition, players have to achieve the minimum mark to qualify for the",r.a.createElement("br",null),r.a.createElement(b.a,{href:"https://www.basketball-reference.com/about/rate_stat_req.html",target:"_blank"},"rate statistic requirements."),r.a.createElement("br",null),r.a.createElement("br",null),"Make at least 300 field goals",r.a.createElement("br",null),"Make at least 82 three point field goals",r.a.createElement("br",null),"Make at least 125 free throws",r.a.createElement("br",null),r.a.createElement("br",null)))}var y=a("Ji2X"),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={close504090Players:[],true504090Players:[]},a}Object(c.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.fetchPlayers("close504090Players"),this.fetchPlayers("true504090Players")},a.fetchPlayers=function(e){var t=this,a=o.firestore(),n=[];a.collection(e).get().then((function(a){var r;a.forEach((function(e){n.push(e.data())})),t.setState(Object.assign({},t.state,((r={})[e]=t.sortPlayers(n),r)))})).catch((function(e){console.log("Error getting documents: ",e)}))},a.sortPlayers=function(e){return e.sort((function(e,t){return t.points/t.games_played-e.points/e.games_played}))},a.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-menu"},r.a.createElement(m.a,{theme:u.a},r.a.createElement(p.a,null),r.a.createElement(y.a,{style:{backgroundColor:"white",margin:0,maxWidth:"100%"}},r.a.createElement(y.a,{maxWidth:"md"},r.a.createElement(g,null),r.a.createElement(d,null),r.a.createElement("h3",null,"Players On Pace"),r.a.createElement(i.a,{players:this.state.true504090Players}),r.a.createElement("h3",null,"Players Close"),r.a.createElement(i.a,{players:this.state.close504090Players}),r.a.createElement(h.a,null))))))},t}(r.a.Component);a("J9yo"),t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"50-40-90 Club"),r.a.createElement("meta",{name:"description",content:"See which players in the NBA 2020-2021 season are on track for a 50-40-90 shooting season"}),r.a.createElement("meta",{property:"og:title",content:"NBA 50-40-90 Club Tracker"}),r.a.createElement("meta",{property:"og:description",content:"Keep up to date with current players on track for a 50-40-90 season"})),r.a.createElement(v,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-1e6e172e9de3c12819cd.js.map