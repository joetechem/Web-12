//	HYPE.documents["SpheroIntroduction"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="SpheroIntroduction.hyperesources",c="SpheroIntroduction",e="spherointroduction_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/spherointroduction_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_584","HYPE_dtl_584",!0==(null!=a&&10>a||false==!0)?"HYPE-584.full.min.js":"HYPE-584.thin.min.js"),false==!0&&(a=a||l("HYPE_w_584","HYPE_wdtl_584","HYPE-584.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"init",source:"function(hypeDocument, element, event) {\taxInit();\n\t\n\tdocument.title = \"Introduction to Sphero\";\n\t\n\tvar axContents = '';\n\taxContents += '<p role=\"text\" style=\"top: 69px; width: 810px; left: 107px; height: 124px\">Lerne Sphero Spark Plus kennen. Dieser Roboter benutzt Bluetooth um Deinen Swift-Code zum Leben zu erwecken. Hole Dir einen unter sphero.com!</p>';\n\taxContents += '<p role=\"img\" aria-label=\"Sphero rollt in den Bildschirm, h\u00e4lt an und richtet seine Antenne auf.\" style=\"top: 254px; height: 262px;\"></p>';\n\t\n\treplaceAccessibilityContents(axContents);\n\n\thideAllWithSelector_exceptElementsWithSelector_('.axhidden, .controls', '#controls-page-1');\n\t\n\t\n}",identifier:"2642"},{name:"spheroActions",source:"function(hypeDocument, element, event) {\n\tdocument.title = \"Sphero Actions\";\n\t\n\tvar axContents = '';\n\taxContents += '<p role=\"text\" style=\"top: 77px; width: 698px; left: 163px; height: 126px;\">Dieser Spielplatz zeigt dir wie Sphero seine Farbe \u00e4ndern kann, sich bewegt und umdreht. Und vieles mehr!</p>';\n\taxContents += '<p role=\"img\" aria-label=\"Sphero leuchtet erst wei\u00df, dann blau und dann gr\u00fcn. Dann h\u00f6rt er auf zu leuchten, rollt nach rechts und dann zur\u00fcck in die Mitte.\" style=\"top: 254px; height: 262px;\"></p>';\n\t\n\treplaceAccessibilityContents(axContents);\n\n\thideAllWithSelector_exceptElementsWithSelector_('.axhidden, .controls', '#controls-page-2');\n}",identifier:"2643"},{name:"spheroArcade",source:"function(hypeDocument, element, event) {\t\n\tdocument.title = \"Sphero Aracade\";\n\t\n\tvar axContents = '';\n\taxContents += '<p role=\"text\" style=\"top: 231px; left:645px; width: 319px; height: 182px;\">In der Sphero Arcade baust du Spieleklassiker mithilfe von Sphero und Swift nach. Aber als erstes - lass uns rollen!</p>';\n\taxContents += '<p role=\"img\" aria-label=\"Es erscheint ein Spielautomat und fliegt in den Bildschirm. Sphero landet auf einem der Kn\u00f6pfe des Automaten und die Worte Sphero Arcade erscheinen auf dem Automaten.\" style=\"top: -10px; left:145px; height: 677px; width: 500px;\"></p>';\n\t\n\treplaceAccessibilityContents(axContents);\n\n\thideAllWithSelector_exceptElementsWithSelector_('.axhidden, .controls', '#controls-page-3');\n}",identifier:"2649"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_584(c,e,{"3":{p:1,n:"button_startCoding.png",g:"118",t:"@1x"},"12":{p:1,n:"satallite1_2x.png",g:"828",o:true,t:"@2x"},"21":{p:1,n:"sphero_bug.png",g:"1492",o:true,t:"@1x"},"4":{p:1,n:"Cutscene-previous-red_2x.png",g:"468",t:"@2x"},"30":{n:"sftext-regular-webfont.woff2"},"13":{p:1,n:"satallite2.png",g:"826",o:true,t:"@1x"},"5":{p:1,n:"Cutscene-next-red_2x-1.png",g:"472",o:true,t:"@1x"},"22":{p:1,n:"sphero_bug_2x.png",g:"1492",o:true,t:"@2x"},"6":{p:1,n:"Cutscene-next-red_2x-1_2x.png",g:"472",o:true,t:"@2x"},"31":{n:"sftext-semibold-webfont.woff"},"14":{p:1,n:"satallite2_2x.png",g:"826",o:true,t:"@2x"},"7":{p:1,n:"Cutscene-previous-red_2x-1-1.png",g:"474",o:true,t:"@1x"},"23":{n:"sftext-bold-webfont.woff"},"40":{p:1,n:"arcade_2x.png",g:"1569",o:true,t:"@2x"},"32":{n:"sftext-semibold-webfont.woff2"},"15":{p:1,n:"satallite0.png",g:"830",o:true,t:"@1x"},"8":{p:1,n:"Cutscene-previous-red_2x-1-1_2x.png",g:"474",o:true,t:"@2x"},"24":{n:"sftext-bold-webfont.woff2"},"9":{p:1,n:"Cutscene-previous_2x-1.png",g:"477",o:true,t:"@1x"},"33":{p:1,n:"shadow.png",g:"479",o:true,t:"@1x"},"16":{p:1,n:"satallite0_2x.png",g:"830",o:true,t:"@2x"},"25":{n:"sftext-heavy-webfont.woff"},"34":{p:1,n:"shadow_2x.png",g:"479",o:true,t:"@2x"},"17":{p:1,n:"sphero_body.png",g:"1487",o:true,t:"@1x"},"26":{n:"sftext-heavy-webfont.woff2"},"35":{p:1,n:"bg.png",g:"476",o:true,t:"@1x"},"18":{p:1,n:"sphero_body_2x.png",g:"1487",o:true,t:"@2x"},"27":{n:"sftext-medium-webfont.woff"},"36":{p:1,n:"bg_2x.png",g:"476",o:true,t:"@2x"},"19":{p:1,n:"buttonTop.png",g:"1630",o:true,t:"@1x"},"28":{n:"sftext-medium-webfont.woff2"},"-1":{n:"PIE.htc"},"37":{n:"axstyles.css"},"29":{n:"sftext-regular-webfont.woff"},"-2":{n:"blank.gif"},"38":{n:"axworkarounds.js"},"39":{p:1,n:"arcade.png",g:"1569",o:true,t:"@1x"},"10":{p:1,n:"Cutscene-previous_2x-1_2x.png",g:"477",o:true,t:"@2x"},"0":{p:1,n:"retroTV.png",g:"148",t:"@1x"},"1":{p:1,n:"button_arrow.png",g:"87",t:"@1x"},"11":{p:1,n:"satallite1.png",g:"828",o:true,t:"@1x"},"2":{p:1,n:"button_inactiveArrow.png",g:"95",t:"@1x"},"20":{p:1,n:"buttonTop_2x.png",g:"1630",o:true,t:"@2x"}},h,["<style>\n@font-face {\n    font-family: 'sfns_displayregular';\n    src: url('SpheroIntroduction.hyperesources/system_san_francisco_display_regular-webfont.woff2') format('woff2'),\n         url('SpheroIntroduction.hyperesources/system_san_francisco_display_regular-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n</style>","<style>\n@font-face {\n    font-family: 'sf_ui_textsemibold';\n    src: url('SpheroIntroduction.hyperesources/sftext-semibold-webfont.woff2') format('woff2'),\n         url('SpheroIntroduction.hyperesources/sftext-semibold-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n</style>","<style>\n@font-face {\n    font-family: 'sf_ui_textbold';\n    src: url('SpheroIntroduction.hyperesources/sftext-bold-webfont.woff2') format('woff2'),\n         url('SpheroIntroduction.hyperesources/sftext-bold-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n</style>","<style>\n@font-face {\n    font-family: 'sf_ui_textheavy';\n    src: url('SpheroIntroduction.hyperesources/sftext-heavy-webfont.woff2') format('woff2'),\n         url('SpheroIntroduction.hyperesources/sftext-heavy-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n</style>","<style>\n@font-face {\n    font-family: 'sf_ui_textmedium';\n    src: url('SpheroIntroduction.hyperesources/sftext-medium-webfont.woff2') format('woff2'),\n         url('SpheroIntroduction.hyperesources/sftext-medium-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n</style>\n","<style>\n@font-face {\n    font-family: 'sf_ui_textregular';\n    src: url('SpheroIntroduction.hyperesources/sftext-regular-webfont.woff2') format('woff2'),\n         url('SpheroIntroduction.hyperesources/sftext-regular-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n</style>"],d,[{n:"Main",o:"642",X:[0]}],[{o:"795",p:"600px",cA:false,Y:1024,Z:768,L:[],c:"#37CC8E",bY:1,d:1024,U:{"2684":{V:{"Main Timeline":"2715"},W:"2715",n:"satelliteSignals"}},T:{"2715":{c:"2684",z:1.15,i:"2715",n:"Main Timeline",a:[{f:"a",y:0,z:0.15,i:"e",e:1,s:0,o:"2685"},{f:"a",y:0,z:1,i:"e",e:0,s:1,o:"2687"},{f:"a",y:0.15,z:0.15,i:"e",e:0,s:1,o:"2685"},{y:1,i:"e",s:0,z:0,o:"2687",f:"b"},{y:1,i:"e",s:0,z:0,o:"2685",f:"b"},{f:"b",p:2,y:1.15,z:0,i:"ActionHandler",s:{a:[{b:"2715",p:3,z:false,symbolOid:"1040"}]},o:"2715"}],f:30,b:[]},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:17.06,b:[{D:1.15,H:true,E:true,z:false,F:0,G:0,C:2.19,b:"2715"}],a:[{f:"a",y:0,z:1.21,i:"e",e:1,s:0,o:"2683"},{f:"b",y:0,z:4.05,i:"cY",e:"1",s:"0",o:"2684"},{f:"b",y:0,z:5,i:"R",e:"#FBFFEF",s:"#F8FF36",o:"2711"},{f:"2614",y:0,z:2,i:"f",e:359,s:0,o:"2670"},{f:"2616",y:0,z:2,i:"a",e:436,s:-172,o:"2680"},{y:0,i:"cQ",s:1,z:0,o:"2671",f:"b"},{y:0,i:"cR",s:1,z:0,o:"2671",f:"b"},{f:"2616",y:0,z:2,i:"a",e:427,s:-175,o:"2670"},{y:0,i:"cQ",s:1,z:0,o:"2673",f:"b"},{y:0,i:"cR",s:1,z:0,o:"2673",f:"b"},{f:"b",y:0,z:5,i:"R",e:"#FBFFEF",s:"#D03EA2",o:"2712"},{f:"b",y:0,z:5,i:"e",e:0,s:1,o:"2711"},{f:"b",y:0,z:4.01,i:"cY",e:"1",s:"0",o:"2688"},{f:"b",y:0,z:5,i:"e",e:0,s:1,o:"2712"},{f:"b",y:0,z:4.01,i:"cY",e:"1",s:"0",o:"2682"},{f:"b",y:0,z:5,i:"e",e:0,s:0,o:"2710"},{f:"b",y:0,z:5,i:"cY",e:"0",s:"1",o:"2711"},{f:"b",y:0,z:5,i:"cY",e:"0",s:"1",o:"2712"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"2688"},{f:"a",y:0,z:2.19,i:"e",e:1,s:0,o:"2684"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"2682"},{f:"2614",p:2,y:0.01,z:3.29,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"643",p:7},{p:4}]},s:{a:[{p:4,h:"2642"}]},o:"kTimelineDefaultIdentifier"},{y:0.15,i:"e",s:1,z:0,o:"2688",f:"b"},{y:0.15,i:"e",s:1,z:0,o:"2682",f:"b"},{f:"b",y:1.21,z:0.27,i:"e",e:1,s:1,o:"2683"},{f:"b",y:2,z:0.18,i:"b",e:274,s:366,o:"2683"},{f:"b",y:2,z:7.08,i:"f",e:359,s:359,o:"2670"},{f:"b",y:2,z:7.08,i:"a",e:436,s:436,o:"2680"},{f:"b",y:2,z:1,i:"a",e:426,s:427,o:"2670"},{y:2.18,i:"b",s:274,z:0,o:"2683",f:"a"},{f:"a",y:2.18,z:0.02,i:"e",e:0,s:1,o:"2683"},{f:"b",y:2.19,z:1.11,i:"e",e:1,s:1,o:"2684"},{y:2.2,i:"e",s:0,z:0,o:"2683",f:"a"},{f:"b",y:3,z:6.08,i:"a",e:426,s:426,o:"2670"},{f:"e",y:3.26,z:0.04,i:"b",e:680,s:773,o:"2674"},{y:3.26,i:"cY",s:"0",z:0,o:"2672",f:"b"},{f:"b",p:2,y:4,z:0.06,i:"ActionHandler",e:{a:[{p:4,h:"2643"}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"643",p:7},{p:4}]},o:"kTimelineDefaultIdentifier"},{f:"b",y:4,z:0.04,i:"b",e:366,s:274,o:"2684"},{f:"c",y:4,z:0,i:"b",e:680,s:680,o:"2674"},{f:"b",y:4,z:0.04,i:"a",e:-1025,s:-1,o:"2689"},{f:"c",y:4,z:0.04,i:"b",e:773,s:680,o:"2674"},{f:"b",y:4,z:0.04,i:"e",e:1,s:1,o:"2684"},{y:4.01,i:"cY",s:"1",z:0,o:"2688",f:"b"},{y:4.01,i:"cY",s:"1",z:0,o:"2682",f:"b"},{f:"b",y:4.04,z:10.28,i:"a",e:-1025,s:-1025,o:"2689"},{y:4.04,i:"b",s:366,z:0,o:"2684",f:"b"},{y:4.04,i:"b",s:773,z:0,o:"2674",f:"e"},{f:"c",y:4.04,z:0.15,i:"e",e:1,s:0,o:"2714"},{f:"b",y:4.04,z:0.01,i:"e",e:1,s:1,o:"2684"},{y:4.05,i:"cY",s:"1",z:0,o:"2684",f:"b"},{y:4.05,i:"cY",s:"0",z:0,o:"2680",f:"b"},{y:4.05,i:"e",s:1,z:0,o:"2680",f:"b"},{y:4.05,i:"e",s:1,z:0,o:"2684",f:"b"},{y:4.05,i:"e",s:1,z:0,o:"2673",f:"b"},{f:"b",p:2,y:4.06,z:10.25,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"643",p:7},{p:4}]},s:{a:[{p:4,h:"2643"}]},o:"kTimelineDefaultIdentifier"},{f:"b",y:4.19,z:4.03,i:"e",e:1,s:1,o:"2714"},{f:"b",y:5,z:0.24,i:"R",e:"#FBFFEF",s:"#FBFFEF",o:"2712"},{f:"b",y:5,z:0.24,i:"R",e:"#FBFFEF",s:"#FBFFEF",o:"2711"},{y:5,i:"b",s:0,z:0,o:"2673",f:"b"},{y:5,i:"b",s:-6,z:0,o:"2672",f:"b"},{y:5,i:"cY",s:"0",z:0,o:"2712",f:"b"},{y:5,i:"cY",s:"0",z:0,o:"2711",f:"b"},{f:"b",y:5,z:0.07,i:"e",e:1,s:0,o:"2707"},{f:"b",y:5,z:0.07,i:"e",e:1,s:0,o:"2709"},{f:"c",y:5,z:0.07,i:"e",e:1,s:0,o:"2710"},{f:"b",y:5,z:0.07,i:"e",e:1,s:0,o:"2711"},{f:"b",y:5,z:0.07,i:"e",e:1,s:0,o:"2712"},{f:"b",y:5,z:0.07,i:"e",e:1,s:0,o:"2708"},{y:5.07,i:"e",s:1,z:0,o:"2707",f:"b"},{y:5.07,i:"e",s:1,z:0,o:"2709",f:"b"},{f:"b",y:5.07,z:3,i:"e",e:1,s:1,o:"2711"},{f:"b",y:5.07,z:3,i:"e",e:1,s:1,o:"2712"},{f:"b",y:5.07,z:0.18,i:"e",e:1,s:1,o:"2710"},{y:5.07,i:"e",s:1,z:0,o:"2708",f:"b"},{f:"d",y:5.24,z:0.14,i:"R",e:"#0500FF",s:"#FBFFEF",o:"2712"},{f:"d",y:5.24,z:0.14,i:"R",e:"#0500FF",s:"#FBFFEF",o:"2711"},{f:"b",y:5.25,z:0.07,i:"e",e:0,s:1,o:"2710"},{f:"d",y:6.02,z:0.01,i:"g",e:"#0345D1",s:"#FFFFFF",o:"2710"},{f:"b",y:6.02,z:0.06,i:"e",e:1,s:0,o:"2710"},{f:"e",y:6.03,z:1.01,i:"g",e:"#0345D1",s:"#0345D1",o:"2710"},{f:"d",y:6.08,z:0.18,i:"R",e:"#0500FF",s:"#0500FF",o:"2712"},{f:"d",y:6.08,z:0.18,i:"R",e:"#0500FF",s:"#0500FF",o:"2711"},{f:"b",y:6.08,z:0.19,i:"e",e:1,s:1,o:"2710"},{f:"d",y:6.26,z:0.15,i:"R",e:"#10FF00",s:"#0500FF",o:"2712"},{f:"d",y:6.26,z:0.15,i:"R",e:"#10FF00",s:"#0500FF",o:"2711"},{f:"b",y:6.27,z:0.07,i:"e",e:0,s:1,o:"2710"},{f:"d",y:7.04,z:0.01,i:"g",e:"#35DB47",s:"#0345D1",o:"2710"},{f:"b",y:7.04,z:0.07,i:"e",e:1,s:0,o:"2710"},{y:7.05,i:"g",s:"#35DB47",z:0,o:"2710",f:"e"},{f:"c",y:7.11,z:0.27,i:"R",e:"#10FF00",s:"#10FF00",o:"2712"},{f:"c",y:7.11,z:0.27,i:"R",e:"#10FF00",s:"#10FF00",o:"2711"},{y:7.11,i:"e",s:1,z:0,o:"2710",f:"b"},{f:"b",y:8.07,z:0.17,i:"e",e:0,s:1,o:"2706"},{f:"b",y:8.07,z:0.17,i:"e",e:0,s:1,o:"2712"},{f:"b",y:8.07,z:0.17,i:"e",e:0,s:1,o:"2711"},{y:8.08,i:"R",s:"#10FF00",z:0,o:"2712",f:"b"},{y:8.08,i:"R",s:"#10FF00",z:0,o:"2711",f:"b"},{f:"b",y:8.22,z:6.09,i:"e",e:1,s:1,o:"2714"},{y:8.24,i:"e",s:0,z:0,o:"2706",f:"b"},{y:8.24,i:"e",s:0,z:0,o:"2712",f:"b"},{y:8.24,i:"e",s:0,z:0,o:"2711",f:"b"},{f:"b",y:8.26,z:0.07,i:"e",e:1,s:0,o:"2701"},{f:"b",y:8.26,z:0.07,i:"e",e:1,s:0,o:"2699"},{f:"b",y:8.26,z:0.07,i:"e",e:1,s:0,o:"2700"},{f:"c",y:8.29,z:0.09,i:"a",e:65,s:0,o:"2672"},{f:"b",y:9.03,z:3.29,i:"e",e:1,s:1,o:"2701"},{y:9.03,i:"e",s:1,z:0,o:"2699",f:"b"},{y:9.03,i:"e",s:1,z:0,o:"2700",f:"b"},{f:"b",y:9.08,z:1.03,i:"f",e:720,s:359,o:"2670"},{f:"b",y:9.08,z:1.03,i:"a",e:828,s:436,o:"2680"},{f:"b",y:9.08,z:1.03,i:"a",e:819,s:426,o:"2670"},{f:"b",y:9.08,z:2.12,i:"a",e:65,s:65,o:"2672"},{f:"b",y:10.11,z:1.18,i:"f",e:720,s:720,o:"2670"},{f:"b",y:10.11,z:4.27,i:"b",e:366,s:366.5,o:"2670"},{f:"b",y:10.11,z:1.18,i:"a",e:828,s:828,o:"2680"},{f:"b",y:10.11,z:1.18,i:"a",e:819,s:819,o:"2670"},{f:"b",y:10.2,z:0.12,i:"e",e:0,s:1,o:"2698"},{y:11.02,i:"e",s:0,z:0,o:"2698",f:"b"},{f:"b",y:11.07,z:0.09,i:"e",e:1,s:0,o:"2703"},{f:"b",y:11.07,z:0.09,i:"e",e:1,s:0,o:"2704"},{y:11.16,i:"e",s:1,z:0,o:"2703",f:"b"},{y:11.16,i:"e",s:1,z:0,o:"2704",f:"b"},{f:"c",y:11.2,z:0.09,i:"a",e:-65,s:65,o:"2672"},{f:"b",y:11.29,z:1.03,i:"f",e:360,s:720,o:"2670"},{f:"b",y:11.29,z:1.03,i:"a",e:436,s:828,o:"2680"},{f:"b",y:11.29,z:1.03,i:"a",e:427,s:819,o:"2670"},{f:"b",y:11.29,z:1.27,i:"a",e:-65,s:-65,o:"2672"},{y:12,i:"d",s:163,z:0,o:"2671",f:"b"},{y:13.02,i:"f",s:360,z:0,o:"2670",f:"b"},{f:"b",y:13.02,z:2.06,i:"a",e:436,s:436,o:"2680"},{f:"b",y:13.02,z:2.06,i:"a",e:427,s:427,o:"2670"},{f:"b",y:13.02,z:0.24,i:"e",e:0,s:1,o:"2702"},{f:"b",y:13.02,z:0.24,i:"e",e:0,s:1,o:"2701"},{f:"b",y:13.26,z:0.07,i:"a",e:0,s:-65,o:"2672"},{f:"b",y:13.26,z:0.08,i:"e",e:1,s:0,o:"2713"},{y:13.26,i:"e",s:0,z:0,o:"2702",f:"b"},{y:13.26,i:"e",s:0,z:0,o:"2701",f:"b"},{y:14.03,i:"a",s:0,z:0,o:"2672",f:"b"},{f:"b",y:14.04,z:0.27,i:"e",e:1,s:1,o:"2713"},{f:"e",y:14.27,z:0.04,i:"b",e:680,s:773,o:"2690"},{f:"b",p:2,y:15.01,z:0.04,i:"ActionHandler",e:{a:[{p:4,h:"2649"}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"643",p:7},{p:4}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:15.01,z:0,i:"b",e:680,s:680,o:"2690"},{f:"c",y:15.01,z:0.04,i:"b",e:773,s:680,o:"2690"},{f:"b",y:15.01,z:0.04,i:"e",e:0,s:1,o:"2713"},{f:"c",y:15.01,z:0.04,i:"e",e:0,s:1,o:"2714"},{f:"b",y:15.02,z:0.03,i:"a",e:-2049,s:-1025,o:"2689"},{f:"b",p:2,y:15.05,z:2.01,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"897",p:7},{p:4,h:"1643"}]},s:{a:[{p:4,h:"2649"}]},o:"kTimelineDefaultIdentifier"},{f:"b",y:15.05,z:0.19,i:"b",e:91,s:777,o:"2659"},{y:15.05,i:"b",s:773,z:0,o:"2690",f:"e"},{y:15.05,i:"a",s:-2049,z:0,o:"2689",f:"b"},{y:15.05,i:"e",s:0,z:0,o:"2713",f:"b"},{y:15.05,i:"e",s:0,z:0,o:"2714",f:"b"},{f:"b",y:15.08,z:0.09,i:"c",e:55,s:157,o:"2680"},{f:"b",y:15.08,z:0.09,i:"d",e:7,s:20,o:"2680"},{f:"b",y:15.08,z:0.09,i:"b",e:516,s:527,o:"2680"},{f:"e",y:15.08,z:0.09,i:"b",e:264,s:366.5,o:"2670"},{f:"b",y:15.08,z:0.09,i:"a",e:485,s:436,o:"2680"},{y:15.08,i:"a",s:427,z:0,o:"2670",f:"e"},{f:"c",y:15.12,z:0.15,i:"e",e:1,s:0,o:"2663"},{f:"b",y:15.17,z:0.08,i:"c",e:138,s:55,o:"2680"},{f:"b",y:15.17,z:0.08,i:"d",e:55,s:7,o:"2680"},{f:"b",y:15.17,z:0.08,i:"b",e:500,s:516,o:"2680"},{f:"d",y:15.17,z:0.08,i:"b",e:369,s:264,o:"2670"},{f:"b",y:15.17,z:0.08,i:"a",e:444,s:485,o:"2680"},{f:"c",y:15.24,z:0.01,i:"b",e:418,s:412,o:"2662"},{y:15.24,i:"b",s:91,z:0,o:"2659",f:"b"},{f:"b",y:15.25,z:0.08,i:"c",e:55,s:138,o:"2680"},{f:"b",y:15.25,z:0.08,i:"d",e:7,s:55,o:"2680"},{f:"c",y:15.25,z:0.01,i:"b",e:412,s:418,o:"2662"},{f:"b",y:15.25,z:0.08,i:"b",e:516,s:500,o:"2680"},{f:"e",y:15.25,z:0.08,i:"b",e:286,s:369,o:"2670"},{f:"b",y:15.25,z:0.08,i:"a",e:485,s:444,o:"2680"},{f:"c",y:15.26,z:0.13,i:"b",e:412,s:412,o:"2662"},{y:15.27,i:"e",s:1,z:0,o:"2663",f:"b"},{f:"b",y:16.03,z:0.07,i:"c",e:138,s:55,o:"2680"},{f:"b",y:16.03,z:0.07,i:"d",e:55,s:7,o:"2680"},{f:"b",y:16.03,z:0.07,i:"b",e:500,s:516,o:"2680"},{f:"d",y:16.03,z:0.07,i:"b",e:369,s:286,o:"2670"},{f:"b",y:16.03,z:0.07,i:"a",e:444,s:485,o:"2680"},{y:16.04,i:"e",s:1,z:0,o:"2671",f:"b"},{f:"c",y:16.09,z:0.01,i:"b",e:418,s:412,o:"2662"},{f:"b",y:16.1,z:0.06,i:"c",e:75,s:138,o:"2680"},{f:"b",y:16.1,z:0.06,i:"d",e:15,s:55,o:"2680"},{f:"b",y:16.1,z:0.06,i:"a",e:475,s:444,o:"2680"},{f:"c",y:16.1,z:0.01,i:"b",e:412,s:418,o:"2662"},{f:"b",y:16.1,z:0.06,i:"b",e:512,s:500,o:"2680"},{f:"e",y:16.1,z:0.06,i:"b",e:325,s:369,o:"2670"},{f:"c",y:16.11,z:0.09,i:"b",e:412.57100000000003,s:412,o:"2662"},{y:16.15,i:"b",s:5,z:0,o:"2671",f:"b"},{f:"b",y:16.16,z:0.05,i:"c",e:138,s:75,o:"2680"},{f:"b",y:16.16,z:0.05,i:"d",e:55,s:15,o:"2680"},{f:"b",y:16.16,z:0.05,i:"a",e:444,s:475,o:"2680"},{f:"b",y:16.16,z:0.05,i:"b",e:500,s:512,o:"2680"},{f:"d",y:16.16,z:0.05,i:"b",e:369,s:325,o:"2670"},{f:"c",y:16.2,z:0.01,i:"b",e:418,s:412.57100000000003,o:"2662"},{y:16.21,i:"c",s:138,z:0,o:"2680",f:"b"},{y:16.21,i:"d",s:55,z:0,o:"2680",f:"b"},{y:16.21,i:"a",s:444,z:0,o:"2680",f:"b"},{y:16.21,i:"b",s:418,z:0,o:"2662",f:"b"},{y:16.21,i:"b",s:500,z:0,o:"2680",f:"b"},{y:16.21,i:"b",s:369,z:0,o:"2670",f:"e"},{f:"b",y:16.26,z:0.09,i:"e",e:0,s:1,o:"2661"},{f:"e",y:17.02,z:0.04,i:"b",e:699,s:773,o:"2664"},{y:17.05,i:"e",s:0,z:0,o:"2661",f:"b"},{f:"c",p:2,y:17.06,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"897",p:7},{p:4,h:"1643"}]},o:"kTimelineDefaultIdentifier"},{y:17.06,i:"b",s:699,z:0,o:"2664",f:"c"}],f:30}},bZ:180,O:["2689","2681","2705","2696","2658","2682","2660","2659","2714","2688","2713","2707","2703","2699","2697","2706","2702","2698","2704","2700","2701","2709","2708","2710","2663","2661","2683","2672","2671","2673","2670","2712","2711","2686","2687","2685","2684","2680","2662","2669","2668","2664","2667","2666","2665","2675","2674","2694","2690","2676","2692","2679","2693","2677","2695","2678","2691"],n:"iPad Landscape","_":0,v:{"2704":{G:"#FFFFFF",aU:8,c:390,d:34,aV:8,r:"inline",e:0,s:"sf_ui_textmedium",X:0,t:24,Z:"break-word",v:"normal",w:"roll (<font face=\"sf_ui_textheavy\">heading: 180</font>, speed: 50)",bF:"2702",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:108,F:"center",b:0},"2691":{c:44,d:44,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",x:"visible",j:"absolute",O:0,aJ:"50%",k:"div",C:"#D8DDE4",z:2,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",bF:"2690",P:0,a:218,aL:"50%",b:22},"2684":{x:"visible",a:470.10000000000002,cA:false,b:274,j:"absolute",cY:"0",c:84,k:"div",r:"inline",d:133,z:5,bF:"2681",e:0,bY:1,bZ:180,bX:false,cV:[]},"2677":{G:"#000000",aU:8,c:67,d:21,aV:8,r:"inline",e:0.33000000000000002,s:"sf_ui_textregular",t:17,Z:"break-word",w:"1 von 3",bF:"2674",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:101,F:"center",b:26},"2711":{b:368,z:2,K:"None",c:166,L:"None",d:166,M:0,e:1,N:0,O:0,g:"rgba(232, 235, 237, 0.000)",P:0,bF:"2705",Q:100,R:"#F8FF36",j:"absolute",S:0,aI:"50%",k:"div",T:0,aJ:"50%",aK:"50%",aL:"50%",A:"#D8DDE4",B:"#D8DDE4",r:"inline",bL:0,cY:"1",C:"#D8DDE4",D:"#D8DDE4",x:"visible",I:"None",a:427,J:"None"},"2670":{x:"visible",k:"div",c:170,d:170,z:131,cP:"axhidden",r:"inline",a:-175,j:"absolute",f:0,b:366},"2663":{G:"#FFFFFF",aU:8,c:307,d:163,aV:8,cY:"0",e:0,s:"sf_ui_textmedium",X:0,r:"inline",t:26,Y:33,Z:"break-word",v:"normal",w:"In der Sphero Arcade baust du Spieleklassiker mithilfe von Sphero und Swift nach. Aber als erstes - lass uns rollen!<br>",bF:"2658",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,E:0,aT:8,a:499,F:"left",b:251},"2699":{G:"#FFFFFF",aU:8,c:152,d:34,aV:8,r:"inline",e:0,s:"sf_ui_textheavy",X:0,t:24,Z:"break-word",v:"normal",w:"Bewegen<br>",bF:"2698",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:-70,F:"right",b:0},"2705":{k:"div",x:"visible",c:1024,d:534,z:2,a:0,j:"absolute",bF:"2696",b:0},"2678":{c:44,d:44,I:"None",cQ:1,J:"None",K:"None",cR:1,g:"#FFFFFF",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:2,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",bF:"2674",P:0,a:218,aL:"50%",b:22},"2692":{h:"472",p:"no-repeat",x:"visible",a:196,dB:"button",b:0,q:"100% 100%",j:"absolute",aA:{a:[{b:"kTimelineDefaultIdentifier",p:8,z:false,symbolOid:"897",J:false}]},z:3,k:"div",d:88,bF:"2690",cQ:0.5,aP:"pointer",aG:"Weiter",c:88,r:"inline",cR:0.5},"2685":{h:"826",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:70,k:"div",bF:"2684",d:133,c:84,cQ:1,e:0,r:"inline",cR:1},"2712":{b:368,z:3,K:"None",c:166,L:"None",d:166,M:0,e:1,N:0,O:0,g:"rgba(232, 235, 237, 0.000)",P:0,bF:"2705",Q:100,R:"#D03EA2",j:"absolute",S:0,aI:"50%",k:"div",T:0,aJ:"50%",aK:"50%",aL:"50%",A:"#D8DDE4",B:"#D8DDE4",r:"inline",bL:0,cY:"1",C:"#D8DDE4",D:"#D8DDE4",x:"visible",I:"None",a:427,J:"None"},"2671":{aI:500,x:"hidden",a:1,b:5,j:"absolute",aJ:500,z:3,k:"div",bF:"2670",d:163,aK:500,cQ:1,e:1,c:168,aL:500,cR:1},"2664":{x:"visible",i:"controls-page-3",a:309,b:773,j:"absolute",r:"inline",c:406,k:"div",z:118,d:50,cP:"controls",bD:"none"},"2706":{x:"visible",k:"div",c:544,d:51,z:1,e:1,a:240,j:"absolute",bF:"2705",b:160},"2686":{h:"830",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:72,k:"div",bF:"2684",d:133,c:84,cQ:1,r:"inline",cR:1},"2679":{c:44,d:44,I:"None",cQ:1,e:0.33000000000000002,J:"None",K:"None",cR:1,g:"#FFFFFF",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:5,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",bF:"2674",P:0,a:22,aL:"50%",b:22},"2693":{c:44,d:44,I:"None",e:1,J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",x:"visible",O:0,j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:5,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",bF:"2690",P:0,a:22,aL:"50%",b:22},"2713":{G:"#FFFFFF",aU:8,c:730,d:34,aV:8,r:"inline",e:0,s:"sf_ui_textheavy",X:0,t:26,Z:"break-word",v:"normal",w:"Und vieles mehr!<br>",bF:"2696",j:"absolute",x:"visible",k:"div",y:"preserve",z:11,aS:8,aT:8,a:139,F:"center",b:145},"2658":{x:"visible",k:"div",c:822,d:1453,z:23,cP:"axhidden",a:145,j:"absolute",b:0},"2672":{p:"no-repeat",b:-6,c:170,q:"100% 100%",d:170,r:"inline",cY:"0",cQ:1,e:1,cR:1,bU:0,bM:"0",h:"1492",bF:"2671",j:"absolute",x:"visible",k:"div",dB:"img",z:1,tX:0.5,a:0,tY:0.5},"2665":{x:"visible",k:"div",bF:"2664",c:318,d:44,z:3,r:"inline",a:86,aP:"pointer",j:"absolute",b:3},"2707":{G:"#FFFFFF",aU:8,c:229,d:34,aV:8,r:"inline",e:0,s:"sf_ui_textheavy",X:0,t:24,Z:"break-word",v:"normal",w:"Farbe \u00e4ndern<br>",bF:"2706",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:-69,F:"right",b:1},"2694":{h:"468",p:"no-repeat",x:"visible",a:0,dB:"button",b:0,q:"100% 100%",j:"absolute",aA:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"643"}]},z:6,k:"div",d:88,bF:"2690",cQ:0.5,aP:"pointer",aG:"Zur\u00fcck",c:88,r:"inline",cR:0.5},"2687":{h:"828",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:71,k:"div",bF:"2684",d:133,c:84,cQ:1,e:1,r:"inline",cR:1},"2714":{G:"#FFFFFF",aU:8,c:682,d:32,aV:8,r:"inline",e:0,s:"sf_ui_textmedium",X:1,t:26,Z:"break-word",v:"normal",w:"Dieser Spielplatz zeigt dir was Sphero alles kann:",bF:"2696",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:163,F:"center",b:97},"2700":{G:"#FFFFFF",aU:8,c:390,d:34,aV:8,r:"inline",e:0,s:"sf_ui_textmedium",X:0,t:24,Z:"break-word",v:"normal",w:"roll (heading: 0, <font face=\"sf_ui_textheavy\">speed: 50</font>)",bF:"2698",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:108,F:"center",b:0},"2666":{c:318,d:44,I:"None",J:"None",K:"None",aG:"Lege los mit dem programmieren",g:"#FFFFFF",L:"None",M:0,N:0,aI:100,A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:100,k:"div",dB:"button",z:1,C:"#D8DDE4",D:"#D8DDE4",aK:100,B:"#D8DDE4",bF:"2665",P:0,a:0,aL:100,b:0},"2659":{k:"div",x:"visible",c:499,d:677,z:1,a:0,j:"absolute",bF:"2658",b:777},"2680":{h:"479",p:"no-repeat",x:"visible",a:-172,dB:"img",b:527,q:"100% 100%",cY:"0",z:32,cP:"axhidden",j:"absolute",d:20,k:"div",cQ:1,e:1,c:157,r:"inline",cR:1},"2673":{p:"no-repeat",b:0,c:170,q:"100% 100%",d:170,r:"inline",cQ:1,e:1,cR:1,bU:0,bM:"0",h:"1487",bF:"2670",j:"absolute",x:"visible",k:"div",dB:"img",z:2,tX:0.5,a:0,tY:0.5},"2708":{c:352,d:50,I:"None",e:0,J:"None",K:"None",g:"rgba(0, 0, 0, 0.250)",L:"None",M:0,N:0,aI:20,A:"rgba(0, 0, 0, 0.250)",x:"visible",O:0,j:"absolute",aJ:20,k:"div",C:"rgba(0, 0, 0, 0.250)",z:1,B:"rgba(0, 0, 0, 0.250)",D:"rgba(0, 0, 0, 0.250)",aK:20,bF:"2706",P:0,a:187,aL:20,b:1},"2695":{G:"#000000",aU:8,c:67,d:21,aV:8,r:"inline",e:0.33000000000000002,s:"sf_ui_textregular",t:17,Z:"break-word",w:"2 von 3<br><br>",bF:"2690",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:101,F:"center",b:26},"2688":{G:"#FFFFFF",aU:8,c:794,d:61,aV:8,cY:"0",e:0,s:"sf_ui_textmedium",X:0,r:"inline",t:26,Y:33,Z:"break-word",v:"normal",w:"Dieser Roboter benutzt Bluetooth um Deinen Swift-Code zum Leben zu erwecken.\nHole Dir einen Sphero unter sphero.com!",bF:"2681",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:107,F:"center",b:129},"2701":{c:406,d:50,I:"None",e:0,J:"None",K:"None",g:"rgba(0, 0, 0, 0.250)",L:"None",M:0,N:0,aI:20,A:"rgba(0, 0, 0, 0.250)",x:"visible",O:0,j:"absolute",aJ:20,k:"div",C:"rgba(0, 0, 0, 0.250)",z:1,B:"rgba(0, 0, 0, 0.250)",D:"rgba(0, 0, 0, 0.250)",aK:20,bF:"2697",P:0,a:138,aL:20,b:0},"2674":{x:"visible",i:"controls-page-1",a:370,b:773,j:"absolute",r:"inline",c:284,k:"div",z:123,d:88,cP:"controls",bD:"none"},"2667":{G:"#FE4B26",aU:8,c:302,cP:"axhidden",d:21,aV:8,r:"inline",s:"sf_ui_textsemibold",t:17,Z:"break-word",aP:"pointer",w:"Lege los mit dem programmieren",bF:"2665",j:"absolute",x:"visible",aA:{a:[{j:"@next",p:5,k:false}]},k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,F:"center",b:2},"2681":{x:"visible",a:0,dB:"button",b:0,j:"absolute",c:1024,k:"div",z:25,d:218,cP:"axhidden",aP:"auto",bD:"auto"},"2709":{G:"#FFFFFF",aU:8,c:336,d:34,aV:8,r:"inline",e:0,s:"sf_ui_textmedium",X:0,t:24,Z:"break-word",v:"normal",w:"setMainLed (color:  &nbsp; &nbsp; )<br>",bF:"2706",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:187,F:"center",b:1},"2660":{h:"1569",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"2659",z:1,k:"div",dB:"img",d:677,c:499,r:"inline"},"2696":{x:"visible",k:"div",c:1024,d:236,z:22,cP:"axhidden",a:0,j:"absolute",b:0},"2689":{cN:"auto",w:"",h:"476",p:"no-repeat",x:"visible",a:-1,q:"100% 100%",b:0,dB:"img",j:"absolute",z:1,cP:"axhidden",k:"div",d:769,c:3073,cQ:1,r:"inline",cR:1,bD:"auto"},"2702":{x:"visible",k:"div",c:539,r:"inline",d:50,z:3,e:1,a:30,j:"absolute",bF:"2697",b:0},"2682":{G:"#FFFFFF",aU:8,c:730,d:28,aV:8,cY:"0",e:0,s:"sf_ui_textbold",X:0,r:"inline",t:26,Z:"break-word",v:"normal",w:"Lerne Sphero SPARK+ kennen.\n",bF:"2681",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:139,F:"center",b:89},"2675":{h:"477",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"2674",z:6,k:"div",c:88,d:88,r:"inline",cQ:0.5,e:0.20000000000000001,aG:"Zur\u00fcck",cR:0.5},"2668":{c:44,d:44,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",x:"visible",j:"absolute",O:0,aJ:"50%",k:"div",C:"#D8DDE4",z:4,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",bF:"2664",P:0,a:-2,aL:"50%",b:3},"2661":{c:245,d:119,I:"None",e:1,J:"None",K:"None",g:"#2F302F",L:"None",M:0,N:0,bF:"2659",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:5,P:0,D:"#D8DDE4",a:128,b:178},"2697":{k:"div",x:"visible",c:544,d:50,z:6,a:240,j:"absolute",bF:"2696",b:161},"2710":{c:21,d:21,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#FFFFFF",L:"Solid",M:1.5,N:1.5,aI:4,A:"rgba(0, 0, 0, 0.100)",x:"visible",O:1.5,j:"absolute",aJ:4,k:"div",C:"rgba(0, 0, 0, 0.100)",z:10,B:"rgba(0, 0, 0, 0.100)",D:"rgba(0, 0, 0, 0.100)",aK:4,bF:"2706",P:1.5,a:454.5,aL:4,b:14.5},"2690":{x:"visible",i:"controls-page-2",a:370,b:773,j:"absolute",r:"inline",c:284,k:"div",z:122,d:88,cP:"controls",bD:"none"},"2683":{h:"830",p:"no-repeat",x:"visible",a:470,q:"100% 100%",b:366,j:"absolute",dB:"img",z:4,k:"div",bF:"2681",d:133,c:84,cQ:1,e:0,r:"inline",cR:1},"2676":{h:"472",p:"no-repeat",x:"visible",a:196,dB:"button",b:0,q:"100% 100%",j:"absolute",aA:{a:[{b:"kTimelineDefaultIdentifier",p:8,z:false,symbolOid:"897",J:false}]},z:3,k:"div",d:88,bF:"2674",cQ:0.5,aP:"pointer",aG:"Weiter",c:88,r:"inline",cR:0.5},"2703":{G:"#FFFFFF",aU:8,c:152,d:34,aV:8,r:"inline",e:0,s:"sf_ui_textheavy",X:0,t:24,Z:"break-word",v:"normal",w:"Umdrehen<br>",bF:"2702",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:-70,F:"right",b:0},"2669":{h:"474",p:"no-repeat",x:"visible",a:-24,dB:"button",b:-19,q:"100% 100%",j:"absolute",aA:{a:[{i:4.1666665077209473,b:"kTimelineDefaultIdentifier",p:9,symbolOid:"643"},{b:"kTimelineDefaultIdentifier",p:8,z:false,symbolOid:"897",J:false}]},z:5,k:"div",d:88,bF:"2664",cQ:0.5,aP:"pointer",aG:"Zur\u00fcck",c:88,r:"inline",cR:0.5},"2662":{h:"1630",p:"no-repeat",x:"visible",a:324,q:"100% 100%",b:412,j:"absolute",bF:"2659",z:3,k:"div",dB:"img",d:34,c:86,r:"inline"},"2698":{x:"visible",k:"div",c:539,r:"inline",d:50,z:2,e:1,a:30,j:"absolute",bF:"2697",b:0}}}],{},g,{"2616":[[0,0,0,0,-0.05305,-0.03538,0.1697,0.1798],[0.1697,0.1798,0.4161,0.4179,0.6779,1.0009,1,1]],"2614":[[0,0,0.3517,-0.008493,0.6481,1.005,1,1]]},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();