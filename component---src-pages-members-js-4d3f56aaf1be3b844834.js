(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{L8Vt:function(e,t,a){"use strict";a.r(t);var s=a("q1tI"),n=a.n(s),r=a("qhky"),l=a("dI71"),o=a("R/WZ"),i=a("iuhU"),m=a("SbMx"),_=a("5DUL"),d=a("hlFM"),p=a("ofer"),c=a("DpTn"),f=a("bWLx");function g(e){var t=e.title,a=e.percentage;return n.a.createElement(f.a,{theme:c.a},n.a.createElement(d.a,{pr:1,display:"flex"},n.a.createElement(d.a,{pr:1},n.a.createElement(p.a,{variant:"body2"},t)),n.a.createElement(d.a,{pr:1},n.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},a))))}var u=a("Ie8z"),h=Object(o.a)((function(e){return{playerPicture:{width:70,height:110}}}));function E(e){var t=e.playerData,a=e.playerStats,s=h();return n.a.createElement(d.a,{display:"flex"},n.a.createElement(d.a,{pl:1,className:s.playerPicture},n.a.createElement(u.a,{className:s.playerPicture,image:"https://www.basketball-reference.com/req/202102081/images/players/"+t.slug+".jpg",title:"Live from space album cover"})),n.a.createElement(d.a,{pt:1,width:338},n.a.createElement(d.a,{display:"flex",position:"relative",justifyContent:"center"},n.a.createElement(d.a,{display:"flex",position:"relative"},n.a.createElement(d.a,null,n.a.createElement(g,{title:"PPG",percentage:a.ppg}),n.a.createElement(g,{title:"BLK",percentage:a.blk}),n.a.createElement(d.a,{mt:1},n.a.createElement(g,{title:"FGM",percentage:t.attempted_three_point_field_goals}),n.a.createElement(g,{title:"FGA",percentage:t.attempted_field_goals}),n.a.createElement(g,{title:"FG%",percentage:a.fgPercentage}))),n.a.createElement(d.a,null,n.a.createElement(g,{title:"AST",percentage:a.ast}),n.a.createElement(g,{title:"TOV",percentage:a.tov}),n.a.createElement(d.a,{mt:1},n.a.createElement(g,{title:"3ptM",percentage:t.made_three_point_field_goals}),n.a.createElement(g,{title:"3ptA",percentage:t.attempted_three_point_field_goals}),n.a.createElement(g,{title:"3pt%",percentage:a.threePtPercentage}))),n.a.createElement(d.a,null,n.a.createElement(g,{title:"REB",percentage:a.reb}),n.a.createElement(g,{title:"STL",percentage:a.stl}),n.a.createElement(d.a,{mt:1},n.a.createElement(g,{title:"FTM",percentage:t.made_free_throws}),n.a.createElement(g,{title:"FTA",percentage:t.attempted_free_throws}),n.a.createElement(g,{title:"FT%",percentage:a.ftPercentage})))))))}function b(e){var t=e.position,a=e.name,s=e.team,r=e.season;return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{display:"flex",justifyContent:"center",pt:.5,pb:1},n.a.createElement(d.a,{pr:1},n.a.createElement(p.a,{variant:"body2",component:"p"},_.a[t])),n.a.createElement(d.a,{pr:1,display:"flex",flexWrap:"wrap"},n.a.createElement(d.a,{pr:.5},n.a.createElement(p.a,{variant:"h5",component:"p"},a)),n.a.createElement(p.a,{variant:"h6",component:"p"},"(",_.c[s],")"))),n.a.createElement(d.a,{pb:1},n.a.createElement(p.a,{variant:"h6",component:"p",color:"textSecondary"},r?r-1+"-"+r:"")))}var y=a("Ji2X"),v=a("30+C"),w=a("JQEk"),O=a("PsDL"),N=a("1iKp"),S=a.n(N),A=a("kKU3"),P=a("hlie"),k=a("E8kk"),x=a.n(k),I=Object(o.a)((function(e){return{root:{width:"100%",maxWidth:400,marginTop:10,marginBottom:10},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},summary:{width:"100%",height:20,display:"flex",flexDirection:"row",justifyContent:"center"}}}));function C(e){var t,a=e.playerData,s=I(),r=n.a.useState(!1),l=r[0],o=r[1],p={threePtPercentage:Object(m.b)(a.made_three_point_field_goals,a.attempted_three_point_field_goals),fgPercentage:Object(m.b)(a.made_field_goals,a.attempted_field_goals),ftPercentage:Object(m.b)(a.made_free_throws,a.attempted_free_throws),ppg:Object(m.a)(a.points,a.games_played),ast:Object(m.a)(a.assists,a.games_played),reb:Object(m.a)(a.defensive_rebounds+a.offensive_rebounds,a.games_played),stl:Object(m.a)(a.steals,a.games_played),tov:Object(m.a)(a.turnovers,a.games_played),blk:Object(m.a)(a.blocks,a.games_played)};return n.a.createElement(v.a,{className:s.root},n.a.createElement(d.a,{style:{height:3,backgroundColor:_.b[a.team]}}),n.a.createElement(d.a,{display:"flex"},n.a.createElement(y.a,null,n.a.createElement(b,{position:a.positions[0],name:a.name,team:a.team,season:a.season}),n.a.createElement(A.a,{in:l,timeout:500},n.a.createElement(d.a,{display:"flex",position:"relative"},n.a.createElement(d.a,{position:"absolute",bottom:7,left:-12},n.a.createElement(P.a,{href:"https://www.basketball-reference.com/players/"+a.slug[0]+"/"+a.slug+".html",target:"_blank"},n.a.createElement(x.a,{fontSize:"small",color:"action"}))))),n.a.createElement(d.a,{display:"flex",justifyContent:"center",position:"relative"},n.a.createElement(A.a,{in:!l,timeout:500},n.a.createElement("div",{className:s.summary},n.a.createElement(d.a,null,n.a.createElement(g,{title:"PPG",percentage:p.ppg})),n.a.createElement(d.a,null,n.a.createElement(g,{title:"FG%",percentage:p.fgPercentage})),n.a.createElement(d.a,null,n.a.createElement(g,{title:"3pt%",percentage:p.threePtPercentage})),n.a.createElement(d.a,null,n.a.createElement(g,{title:"FT%",percentage:p.ftPercentage})))),n.a.createElement(d.a,{position:"absolute",bottom:2,right:-20},n.a.createElement(O.a,{className:Object(i.a)(s.expand,(t={},t[s.expandOpen]=l,t)),onClick:function(){o(!l)},"aria-expanded":l,"aria-label":"show more"},n.a.createElement(S.a,null)))))),n.a.createElement(w.a,{in:l,timeout:"auto"},n.a.createElement(E,{playerStats:p,playerData:a})))}var T=a("PIBi");function D(){return n.a.createElement(d.a,{p:2,display:"flex",justifyContent:"center",alignItems:"center"},n.a.createElement(p.a,{variant:"body2"},"Currently there have been ",n.a.createElement("b",null,"eight")," 50-40-90 NBA shooting seasons. Nash and Bird are the only players to have multiple 50-40-90 seasons."))}function L(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{p:2,display:"flex",justifyContent:"center",alignItems:"center"},n.a.createElement("img",{width:24.1,height:53.6,src:"https://cdn.freebiesupply.com/images/large/2x/nba-logo-transparent.png",alt:"my image"}),n.a.createElement(d.a,{pl:1},n.a.createElement(p.a,{variant:"h2"},"Members (1979-2020)"))))}a("vnwh");var R=[{age:26,assists:205,attempted_field_goals:748,attempted_free_throws:152,attempted_three_point_field_goals:244,blocks:13,defensive_rebounds:223,games_played:64,games_started:64,made_field_goals:378,made_free_throws:141,made_three_point_field_goals:104,minutes_played:1832,name:"Malcolm Brogdon",offensive_rebounds:65,personal_fouls:102,points:1001,positions:["SHOOTING GUARD"],season:2019,slug:"brogdma01",steals:46,team:"MILWAUKEE BUCKS",turnovers:91},{age:27,assists:527,attempted_field_goals:1598,attempted_free_throws:400,attempted_three_point_field_goals:886,blocks:15,defensive_rebounds:362,games_played:79,games_started:79,made_field_goals:805,made_free_throws:363,made_three_point_field_goals:402,minutes_played:2700,name:"Stephen Curry",offensive_rebounds:68,personal_fouls:161,points:2375,positions:["POINT GUARD"],season:2016,slug:"curryst01",steals:169,team:"GOLDEN STATE WARRIORS",turnovers:262},{age:24,assists:374,attempted_field_goals:1433,attempted_free_throws:750,attempted_three_point_field_goals:334,blocks:105,defensive_rebounds:594,games_played:81,games_started:81,made_field_goals:731,made_free_throws:679,made_three_point_field_goals:139,minutes_played:3119,name:"Kevin Durant",offensive_rebounds:46,personal_fouls:143,points:2280,positions:["SMALL FORWARD"],season:2013,slug:"duranke01",steals:116,team:"OKLAHOMA CITY THUNDER",turnovers:280},{age:35,assists:892,attempted_field_goals:985,attempted_free_throws:225,attempted_three_point_field_goals:291,blocks:12,defensive_rebounds:234,games_played:81,games_started:81,made_field_goals:499,made_free_throws:211,made_three_point_field_goals:124,minutes_played:2660,name:"Steve Nash",offensive_rebounds:34,personal_fouls:108,points:1333,positions:["POINT GUARD"],season:2010,slug:"nashst01",steals:42,team:"PHOENIX SUNS",turnovers:295},{age:34,assists:717,attempted_field_goals:851,attempted_free_throws:210,attempted_three_point_field_goals:246,blocks:10,defensive_rebounds:204,games_played:74,games_started:74,made_field_goals:428,made_free_throws:196,made_three_point_field_goals:108,minutes_played:2484,name:"Steve Nash",offensive_rebounds:19,personal_fouls:108,points:1160,positions:["POINT GUARD"],season:2009,slug:"nashst01",steals:55,team:"PHOENIX SUNS",turnovers:248},{age:33,assists:898,attempted_field_goals:962,attempted_free_throws:245,attempted_three_point_field_goals:381,blocks:5,defensive_rebounds:254,games_played:81,games_started:81,made_field_goals:485,made_free_throws:222,made_three_point_field_goals:179,minutes_played:2780,name:"Steve Nash",offensive_rebounds:28,personal_fouls:113,points:1371,positions:["POINT GUARD"],season:2008,slug:"nashst01",steals:53,team:"PHOENIX SUNS",turnovers:295},{age:31,assists:826,attempted_field_goals:1056,attempted_free_throws:279,attempted_three_point_field_goals:342,blocks:12,defensive_rebounds:286,games_played:79,games_started:79,made_field_goals:541,made_free_throws:257,made_three_point_field_goals:150,minutes_played:2796,name:"Steve Nash",offensive_rebounds:47,personal_fouls:120,points:1489,positions:["POINT GUARD"],season:2006,slug:"nashst01",steals:61,team:"PHOENIX SUNS",turnovers:276},{age:28,assists:248,attempted_field_goals:1042,attempted_free_throws:444,attempted_three_point_field_goals:292,blocks:24,defensive_rebounds:182,games_played:79,games_started:79,made_field_goals:524,made_free_throws:403,made_three_point_field_goals:123,minutes_played:2638,name:"Reggie Miller",offensive_rebounds:30,personal_fouls:193,points:1574,positions:["SHOOTING GUARD"],season:1994,slug:"millere01",steals:119,team:"INDIANA PACERS",turnovers:175},{age:24,assists:631,attempted_field_goals:1006,attempted_free_throws:292,attempted_three_point_field_goals:21,blocks:7,defensive_rebounds:178,games_played:75,games_started:74,made_field_goals:529,made_free_throws:263,made_three_point_field_goals:93,minutes_played:2728,name:"Mark Price",offensive_rebounds:48,personal_fouls:98,points:1414,positions:["POINT GUARD"],season:1989,slug:"pricema01",steals:115,team:"CLEVELAND CAVALIERS",turnovers:212},{age:31,assists:467,attempted_field_goals:1672,attempted_free_throws:453,attempted_three_point_field_goals:237,blocks:57,defensive_rebounds:595,games_played:76,games_started:75,made_field_goals:881,made_free_throws:415,made_three_point_field_goals:98,minutes_played:2965,name:"Larry Bird",offensive_rebounds:108,personal_fouls:157,points:2275,positions:["SMALL FORWARD"],season:1988,slug:"birdla01",steals:125,team:"BOSTON CELTICS",turnovers:213},{age:30,assists:566,attempted_field_goals:1497,attempted_free_throws:455,attempted_three_point_field_goals:225,blocks:70,defensive_rebounds:558,games_played:74,games_started:73,made_field_goals:786,made_free_throws:414,made_three_point_field_goals:90,minutes_played:3005,name:"Larry Bird",offensive_rebounds:124,personal_fouls:185,points:2076,positions:["SMALL FORWARD"],season:1987,slug:"birdla01",steals:135,team:"BOSTON CELTICS",turnovers:240}],j=(a("aUHI"),function(e){function t(t){return e.call(this,t)||this}return Object(l.a)(t,e),t.prototype.render=function(){return n.a.createElement(f.a,{theme:c.a},n.a.createElement(n.a.Fragment,null,n.a.createElement(T.a,null),n.a.createElement(y.a,{style:{backgroundColor:"white",margin:0,maxWidth:"100%"}},n.a.createElement(y.a,{maxWidth:"md"},n.a.createElement(D,null),n.a.createElement(L,null),R.map((function(e,t){return n.a.createElement(Box,{justifyContent:"center",display:"flex",key:t},n.a.createElement(C,{playerData:e}))}))))))},t}(n.a.Component));a("J9yo"),t.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(r.a,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,"50-40-90 Club Members"),n.a.createElement("meta",{name:"description",content:"Members of the NBA 50-40-90 Club."}),n.a.createElement("meta",{property:"og:title",content:"NBA 50-40-90 Club Members"}),n.a.createElement("meta",{property:"og:description",content:"View NBA players who had astounding shooting seasons."})),n.a.createElement(j,null))}}}]);
//# sourceMappingURL=component---src-pages-members-js-4d3f56aaf1be3b844834.js.map