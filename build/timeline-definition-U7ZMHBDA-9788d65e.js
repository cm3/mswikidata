import{_ as t,T as e,U as n,v as i,j as s,d as r,l as a,V as o,W as c,X as l,Y as h}from"./main-77371978.js";import{d}from"./arc-ddd590c6.js";var u=function(){var e=t((function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n}),"o"),n=[6,8,10,11,12,14,16,17,20,21],i=[1,9],s=[1,10],r=[1,11],a=[1,12],o=[1,13],c=[1,16],l=[1,17],h={trace:t((function(){}),"trace"),yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,period_statement:18,event_statement:19,period:20,event:21,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",20:"period",21:"event"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,1],[18,1],[19,1]],performAction:t((function(t,e,n,i,s,r,a){var o=r.length-1;switch(s){case 1:return r[o-1];case 2:case 6:case 7:this.$=[];break;case 3:r[o-1].push(r[o]),this.$=r[o-1];break;case 4:case 5:this.$=r[o];break;case 8:i.getCommonDb().setDiagramTitle(r[o].substr(6)),this.$=r[o].substr(6);break;case 9:this.$=r[o].trim(),i.getCommonDb().setAccTitle(this.$);break;case 10:case 11:this.$=r[o].trim(),i.getCommonDb().setAccDescription(this.$);break;case 12:i.addSection(r[o].substr(8)),this.$=r[o].substr(8);break;case 15:i.addTask(r[o],0,""),this.$=r[o];break;case 16:i.addEvent(r[o].substr(2)),this.$=r[o]}}),"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},e(n,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:i,12:s,14:r,16:a,17:o,18:14,19:15,20:c,21:l},e(n,[2,7],{1:[2,1]}),e(n,[2,3]),{9:18,11:i,12:s,14:r,16:a,17:o,18:14,19:15,20:c,21:l},e(n,[2,5]),e(n,[2,6]),e(n,[2,8]),{13:[1,19]},{15:[1,20]},e(n,[2,11]),e(n,[2,12]),e(n,[2,13]),e(n,[2,14]),e(n,[2,15]),e(n,[2,16]),e(n,[2,4]),e(n,[2,9]),e(n,[2,10])],defaultActions:{},parseError:t((function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)}),"parseError"),parse:t((function(e){var n=this,i=[0],s=[],r=[null],a=[],o=this.table,c="",l=0,h=0,d=a.slice.call(arguments,1),u=Object.create(this.lexer),p={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(p.yy[y]=this.yy[y]);u.setInput(e,p.yy),p.yy.lexer=u,p.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var g=u.yylloc;a.push(g);var f=u.options&&u.options.ranges;function m(){var t;return"number"!=typeof(t=s.pop()||u.lex()||1)&&(t instanceof Array&&(t=(s=t).pop()),t=n.symbols_[t]||t),t}"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,t((function(t){i.length=i.length-2*t,r.length=r.length-t,a.length=a.length-t}),"popStack"),t(m,"lex");for(var x,b,k,_,w,v,S,$,E={};;){if(b=i[i.length-1],this.defaultActions[b]?k=this.defaultActions[b]:(null==x&&(x=m()),k=o[b]&&o[b][x]),void 0===k||!k.length||!k[0]){var T="";for(w in $=[],o[b])this.terminals_[w]&&w>2&&$.push("'"+this.terminals_[w]+"'");T=u.showPosition?"Parse error on line "+(l+1)+":\n"+u.showPosition()+"\nExpecting "+$.join(", ")+", got '"+(this.terminals_[x]||x)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==x?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(T,{text:u.match,token:this.terminals_[x]||x,line:u.yylineno,loc:g,expected:$})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+b+", token: "+x);switch(k[0]){case 1:i.push(x),r.push(u.yytext),a.push(u.yylloc),i.push(k[1]),x=null,h=u.yyleng,c=u.yytext,l=u.yylineno,g=u.yylloc;break;case 2:if(v=this.productions_[k[1]][1],E.$=r[r.length-v],E._$={first_line:a[a.length-(v||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(v||1)].first_column,last_column:a[a.length-1].last_column},f&&(E._$.range=[a[a.length-(v||1)].range[0],a[a.length-1].range[1]]),void 0!==(_=this.performAction.apply(E,[c,h,l,p.yy,k[1],r,a].concat(d))))return _;v&&(i=i.slice(0,-1*v*2),r=r.slice(0,-1*v),a=a.slice(0,-1*v)),i.push(this.productions_[k[1]][0]),r.push(E.$),a.push(E._$),S=o[i[i.length-2]][i[i.length-1]],i.push(S);break;case 3:return!0}}return!0}),"parse")},d=function(){return{EOF:1,parseError:t((function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)}),"parseError"),setInput:t((function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:t((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:t((function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this}),"unput"),more:t((function(){return this._more=!0,this}),"more"),reject:t((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:t((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:t((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:t((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:t((function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"}),"showPosition"),test_match:t((function(t,e){var n,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1}),"test_match"),next:t((function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((n=this._input.match(this.rules[s[r]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:t((function(){var t=this.next();return t||this.lex()}),"lex"),begin:t((function(t){this.conditionStack.push(t)}),"begin"),popState:t((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:t((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:t((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:t((function(t){this.begin(t)}),"pushState"),stateStackSize:t((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:t((function(t,e,n,i){switch(n){case 0:case 1:case 3:case 4:break;case 2:return 10;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 21;case 16:return 20;case 17:return 6;case 18:return"INVALID"}}),"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^:\n]+)/i,/^(?::\s[^:\n]+)/i,/^(?:[^#:\n]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18],inclusive:!0}}}}();function u(){this.yy={}}return h.lexer=d,t(u,"Parser"),u.prototype=h,h.Parser=u,new u}();u.parser=u;var p=u,y={};e(y,{addEvent:()=>E,addSection:()=>w,addTask:()=>$,addTaskOrg:()=>T,clear:()=>_,default:()=>M,getCommonDb:()=>k,getSections:()=>v,getTasks:()=>S});var g="",f=0,m=[],x=[],b=[],k=t((()=>n),"getCommonDb"),_=t((function(){m.length=0,x.length=0,g="",b.length=0,i()}),"clear"),w=t((function(t){g=t,m.push(t)}),"addSection"),v=t((function(){return m}),"getSections"),S=t((function(){let t=I();let e=0;for(;!t&&e<100;)t=I(),e++;return x.push(...b),x}),"getTasks"),$=t((function(t,e,n){const i={id:f++,section:g,type:g,task:t,score:e||0,events:n?[n]:[]};b.push(i)}),"addTask"),E=t((function(t){b.find((t=>t.id===f-1)).events.push(t)}),"addEvent"),T=t((function(t){const e={section:g,type:g,description:t,task:t,classes:[]};x.push(e)}),"addTaskOrg"),I=t((function(){const e=t((function(t){return b[t].processed}),"compileTask");let n=!0;for(const[t,i]of b.entries())e(t),n=n&&i.processed;return n}),"compileTasks"),M={clear:_,getCommonDb:k,addSection:w,getSections:v,getTasks:S,addTask:$,addTaskOrg:T,addEvent:E},N=t((function(t,e){const n=t.append("rect");return n.attr("x",e.x),n.attr("y",e.y),n.attr("fill",e.fill),n.attr("stroke",e.stroke),n.attr("width",e.width),n.attr("height",e.height),n.attr("rx",e.rx),n.attr("ry",e.ry),void 0!==e.class&&n.attr("class",e.class),n}),"drawRect"),A=t((function(e,n){const i=15,s=e.append("circle").attr("cx",n.cx).attr("cy",n.cy).attr("class","face").attr("r",i).attr("stroke-width",2).attr("overflow","visible"),r=e.append("g");function a(t){const e=d().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(7.5).outerRadius(i/2.2);t.append("path").attr("class","mouth").attr("d",e).attr("transform","translate("+n.cx+","+(n.cy+2)+")")}function o(t){const e=d().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(7.5).outerRadius(i/2.2);t.append("path").attr("class","mouth").attr("d",e).attr("transform","translate("+n.cx+","+(n.cy+7)+")")}function c(t){t.append("line").attr("class","mouth").attr("stroke",2).attr("x1",n.cx-5).attr("y1",n.cy+7).attr("x2",n.cx+5).attr("y2",n.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return r.append("circle").attr("cx",n.cx-5).attr("cy",n.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),r.append("circle").attr("cx",n.cx+5).attr("cy",n.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),t(a,"smile"),t(o,"sad"),t(c,"ambivalent"),n.score>3?a(r):n.score<3?o(r):c(r),s}),"drawFace"),C=t((function(t,e){const n=t.append("circle");return n.attr("cx",e.cx),n.attr("cy",e.cy),n.attr("class","actor-"+e.pos),n.attr("fill",e.fill),n.attr("stroke",e.stroke),n.attr("r",e.r),void 0!==n.class&&n.attr("class",n.class),void 0!==e.title&&n.append("title").text(e.title),n}),"drawCircle"),L=t((function(t,e){const n=e.text.replace(/<br\s*\/?>/gi," "),i=t.append("text");i.attr("x",e.x),i.attr("y",e.y),i.attr("class","legend"),i.style("text-anchor",e.anchor),void 0!==e.class&&i.attr("class",e.class);const s=i.append("tspan");return s.attr("x",e.x+2*e.textMargin),s.text(n),i}),"drawText"),P=t((function(e,n){function i(t,e,n,i,s){return t+","+e+" "+(t+n)+","+e+" "+(t+n)+","+(e+i-s)+" "+(t+n-1.2*s)+","+(e+i)+" "+t+","+(e+i)}t(i,"genPoints");const s=e.append("polygon");s.attr("points",i(n.x,n.y,50,20,7)),s.attr("class","labelBox"),n.y=n.y+n.labelMargin,n.x=n.x+.5*n.labelMargin,L(e,n)}),"drawLabel"),H=t((function(t,e,n){const i=t.append("g"),s=z();s.x=e.x,s.y=e.y,s.fill=e.fill,s.width=n.width,s.height=n.height,s.class="journey-section section-type-"+e.num,s.rx=3,s.ry=3,N(i,s),B(n)(e.text,i,s.x,s.y,s.width,s.height,{class:"journey-section section-type-"+e.num},n,e.colour)}),"drawSection"),O=-1,j=t((function(t,e,n){const i=e.x+n.width/2,s=t.append("g");O++;s.append("line").attr("id","task"+O).attr("x1",i).attr("y1",e.y).attr("x2",i).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),A(s,{cx:i,cy:300+30*(5-e.score),score:e.score});const r=z();r.x=e.x,r.y=e.y,r.fill=e.fill,r.width=n.width,r.height=n.height,r.class="task task-type-"+e.num,r.rx=3,r.ry=3,N(s,r),B(n)(e.task,s,r.x,r.y,r.width,r.height,{class:"task"},n,e.colour)}),"drawTask"),R=t((function(t,e){N(t,{x:e.startx,y:e.starty,width:e.stopx-e.startx,height:e.stopy-e.starty,fill:e.fill,class:"rect"}).lower()}),"drawBackgroundRect"),D=t((function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}}),"getTextObj"),z=t((function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}}),"getNoteRect"),B=function(){function e(t,e,n,i,r,a,o,c){s(e.append("text").attr("x",n+r/2).attr("y",i+a/2+5).style("font-color",c).style("text-anchor","middle").text(t),o)}function n(t,e,n,i,r,a,o,c,l){const{taskFontSize:h,taskFontFamily:d}=c,u=t.split(/<br\s*\/?>/gi);for(let t=0;t<u.length;t++){const c=t*h-h*(u.length-1)/2,p=e.append("text").attr("x",n+r/2).attr("y",i).attr("fill",l).style("text-anchor","middle").style("font-size",h).style("font-family",d);p.append("tspan").attr("x",n+r/2).attr("dy",c).text(u[t]),p.attr("y",i+a/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),s(p,o)}}function i(t,e,i,r,a,o,c,l){const h=e.append("switch"),d=h.append("foreignObject").attr("x",i).attr("y",r).attr("width",a).attr("height",o).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");d.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),n(t,h,i,r,a,o,c,l),s(d,c)}function s(t,e){for(const n in e)n in e&&t.attr(n,e[n])}return t(e,"byText"),t(n,"byTspan"),t(i,"byFo"),t(s,"_setTextAttrs"),function(t){return"fo"===t.textPlacement?i:"old"===t.textPlacement?e:n}}(),F=t((function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")}),"initGraphics");function W(t,e){t.each((function(){var t,n=s(this),i=n.text().split(/(\s+|<br>)/).reverse(),r=[],a=n.attr("y"),o=parseFloat(n.attr("dy")),c=n.text(null).append("tspan").attr("x",0).attr("y",a).attr("dy",o+"em");for(let s=0;s<i.length;s++)t=i[i.length-1-s],r.push(t),c.text(r.join(" ").trim()),(c.node().getComputedTextLength()>e||"<br>"===t)&&(r.pop(),c.text(r.join(" ").trim()),r="<br>"===t?[""]:[t],c=n.append("tspan").attr("x",0).attr("y",a).attr("dy","1.1em").text(t))}))}t(W,"wrap");var V=t((function(t,e,n,i){const s=n%12-1,r=t.append("g");e.section=s,r.attr("class",(e.class?e.class+" ":"")+"timeline-node section-"+s);const a=r.append("g"),o=r.append("g"),c=o.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(W,e.width).node().getBBox(),l=i.fontSize?.replace?i.fontSize.replace("px",""):i.fontSize;return e.height=c.height+1.1*l*.5+e.padding,e.height=Math.max(e.height,e.maxHeight),e.width=e.width+2*e.padding,o.attr("transform","translate("+e.width/2+", "+e.padding/2+")"),U(a,e,s,i),e}),"drawNode"),G=t((function(t,e,n){const i=t.append("g"),s=i.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(W,e.width).node().getBBox(),r=n.fontSize?.replace?n.fontSize.replace("px",""):n.fontSize;return i.remove(),s.height+1.1*r*.5+e.padding}),"getVirtualNodeHeight"),U=t((function(t,e,n){t.append("path").attr("id","node-"+e.id).attr("class","node-bkg node-"+e.type).attr("d",`M0 ${e.height-5} v${10-e.height} q0,-5 5,-5 h${e.width-10} q5,0 5,5 v${e.height-5} H0 Z`),t.append("line").attr("class","node-line-"+n).attr("x1",0).attr("y1",e.height).attr("x2",e.width).attr("y2",e.height)}),"defaultBkg"),Y={drawRect:N,drawCircle:C,drawSection:H,drawText:L,drawLabel:P,drawTask:j,drawBackgroundRect:R,getTextObj:D,getNoteRect:z,initGraphics:F,drawNode:V,getVirtualNodeHeight:G},q=t((function(t,e,n,i){const c=r(),l=c.leftMargin??50;a.debug("timeline",i.db);const h=c.securityLevel;let d;"sandbox"===h&&(d=s("#i"+e));const u=s("sandbox"===h?d.nodes()[0].contentDocument.body:"body").select("#"+e);u.append("g");const p=i.db.getTasks(),y=i.db.getCommonDb().getDiagramTitle();a.debug("task",p),Y.initGraphics(u);const g=i.db.getSections();a.debug("sections",g);let f=0,m=0,x=0,b=0,k=50+l,_=50;b=50;let w=0,v=!0;g.forEach((function(t){const e={number:w,descr:t,section:w,width:150,padding:20,maxHeight:f},n=Y.getVirtualNodeHeight(u,e,c);a.debug("sectionHeight before draw",n),f=Math.max(f,n+20)}));let S=0,$=0;a.debug("tasks.length",p.length);for(const[t,e]of p.entries()){const n={number:t,descr:e,section:e.section,width:150,padding:20,maxHeight:m},i=Y.getVirtualNodeHeight(u,n,c);a.debug("taskHeight before draw",i),m=Math.max(m,i+20),S=Math.max(S,e.events.length);let s=0;for(const t of e.events){const n={descr:t,section:e.section,number:e.section,width:150,padding:20,maxHeight:50};s+=Y.getVirtualNodeHeight(u,n,c)}$=Math.max($,s)}a.debug("maxSectionHeight before draw",f),a.debug("maxTaskHeight before draw",m),g&&g.length>0?g.forEach((t=>{const e=p.filter((e=>e.section===t)),n={number:w,descr:t,section:w,width:200*Math.max(e.length,1)-50,padding:20,maxHeight:f};a.debug("sectionNode",n);const i=u.append("g"),s=Y.drawNode(i,n,w,c);a.debug("sectionNode output",s),i.attr("transform",`translate(${k}, 50)`),_+=f+50,e.length>0&&X(u,e,w,k,_,m,c,S,$,f,!1),k+=200*Math.max(e.length,1),_=50,w++})):(v=!1,X(u,p,w,k,_,m,c,S,$,f,!0));const E=u.node().getBBox();a.debug("bounds",E),y&&u.append("text").text(y).attr("x",E.width/2-l).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),x=v?f+m+150:m+100;u.append("g").attr("class","lineWrapper").append("line").attr("x1",l).attr("y1",x).attr("x2",E.width+3*l).attr("y2",x).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),o(void 0,u,c.timeline?.padding??50,c.timeline?.useMaxWidth??!1)}),"draw"),X=t((function(t,e,n,i,s,r,o,c,l,h,d){for(const c of e){const e={descr:c.task,section:n,number:n,width:150,padding:20,maxHeight:r};a.debug("taskNode",e);const u=t.append("g").attr("class","taskWrapper"),p=Y.drawNode(u,e,n,o).height;if(a.debug("taskHeight after draw",p),u.attr("transform",`translate(${i}, ${s})`),r=Math.max(r,p),c.events){const e=t.append("g").attr("class","lineWrapper");let a=r;s+=100,a+=Z(t,c.events,n,i,s,o),s-=100,e.append("line").attr("x1",i+95).attr("y1",s+r).attr("x2",i+95).attr("y2",s+r+(d?r:h)+l+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}i+=200,d&&!o.timeline?.disableMulticolor&&n++}s-=10}),"drawTasks"),Z=t((function(t,e,n,i,s,r){let o=0;const c=s;s+=100;for(const c of e){const e={descr:c,section:n,number:n,width:150,padding:20,maxHeight:50};a.debug("eventNode",e);const l=t.append("g").attr("class","eventWrapper"),h=Y.drawNode(l,e,n,r).height;o+=h,l.attr("transform",`translate(${i}, ${s})`),s=s+10+h}return s=c,o}),"drawEvents"),J={setConf:t((()=>{}),"setConf"),draw:q},K=t((t=>{let e="";for(let e=0;e<t.THEME_COLOR_LIMIT;e++)t["lineColor"+e]=t["lineColor"+e]||t["cScaleInv"+e],c(t["lineColor"+e])?t["lineColor"+e]=l(t["lineColor"+e],20):t["lineColor"+e]=h(t["lineColor"+e],20);for(let n=0;n<t.THEME_COLOR_LIMIT;n++){const i=""+(17-3*n);e+=`\n    .section-${n-1} rect, .section-${n-1} path, .section-${n-1} circle, .section-${n-1} path  {\n      fill: ${t["cScale"+n]};\n    }\n    .section-${n-1} text {\n     fill: ${t["cScaleLabel"+n]};\n    }\n    .node-icon-${n-1} {\n      font-size: 40px;\n      color: ${t["cScaleLabel"+n]};\n    }\n    .section-edge-${n-1}{\n      stroke: ${t["cScale"+n]};\n    }\n    .edge-depth-${n-1}{\n      stroke-width: ${i};\n    }\n    .section-${n-1} line {\n      stroke: ${t["cScaleInv"+n]} ;\n      stroke-width: 3;\n    }\n\n    .lineWrapper line{\n      stroke: ${t["cScaleLabel"+n]} ;\n    }\n\n    .disabled, .disabled circle, .disabled text {\n      fill: lightgray;\n    }\n    .disabled text {\n      fill: #efefef;\n    }\n    `}return e}),"genSections"),Q={db:y,renderer:J,parser:p,styles:t((t=>`\n  .edge {\n    stroke-width: 3;\n  }\n  ${K(t)}\n  .section-root rect, .section-root path, .section-root circle  {\n    fill: ${t.git0};\n  }\n  .section-root text {\n    fill: ${t.gitBranchLabel0};\n  }\n  .icon-container {\n    height:100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .edge {\n    fill: none;\n  }\n  .eventWrapper  {\n   filter: brightness(120%);\n  }\n`),"getStyles")};export{Q as diagram};
