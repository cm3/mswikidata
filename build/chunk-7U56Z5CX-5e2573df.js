import{g as t,s as e}from"./chunk-5HRBRIJM-e46d0873.js";import{_ as s,e as i,d as n,g as r,s as a,b as o,c as l,p as c,q as h,l as d,z as u,u as p,v as y,R as g}from"./main-77371978.js";var f=function(){var t=s((function(t,e,s,i){for(s=s||{},i=t.length;i--;s[t[i]]=e);return s}),"o"),e=[1,2],i=[1,3],n=[1,4],r=[2,4],a=[1,9],o=[1,11],l=[1,16],c=[1,17],h=[1,18],d=[1,19],u=[1,32],p=[1,20],y=[1,21],g=[1,22],f=[1,23],S=[1,24],m=[1,26],_=[1,27],T=[1,28],b=[1,29],k=[1,30],E=[1,31],x=[1,34],C=[1,35],D=[1,36],$=[1,37],v=[1,33],L=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],I=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],A=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],w={trace:s((function(){}),"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"--\x3e":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,classDef:38,CLASSDEF_ID:39,CLASSDEF_STYLEOPTS:40,DEFAULT:41,style:42,STYLE_IDS:43,STYLEDEF_STYLEOPTS:44,class:45,CLASSENTITY_IDS:46,STYLECLASS:47,direction_tb:48,direction_bt:49,direction_rl:50,direction_lr:51,eol:52,";":53,EDGE_STATE:54,STYLE_SEPARATOR:55,left_of:56,right_of:57,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"--\x3e",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"classDef",39:"CLASSDEF_ID",40:"CLASSDEF_STYLEOPTS",41:"DEFAULT",42:"style",43:"STYLE_IDS",44:"STYLEDEF_STYLEOPTS",45:"class",46:"CLASSENTITY_IDS",47:"STYLECLASS",48:"direction_tb",49:"direction_bt",50:"direction_rl",51:"direction_lr",53:";",54:"EDGE_STATE",55:"STYLE_SEPARATOR",56:"left_of",57:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[52,1],[52,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:s((function(t,e,s,i,n,r,a){var o=r.length-1;switch(n){case 3:return i.setRootDoc(r[o]),r[o];case 4:this.$=[];break;case 5:"nl"!=r[o]&&(r[o-1].push(r[o]),this.$=r[o-1]);break;case 6:case 7:case 12:this.$=r[o];break;case 8:this.$="nl";break;case 13:const t=r[o-1];t.description=i.trimColon(r[o]),this.$=t;break;case 14:this.$={stmt:"relation",state1:r[o-2],state2:r[o]};break;case 15:const e=i.trimColon(r[o]);this.$={stmt:"relation",state1:r[o-3],state2:r[o-1],description:e};break;case 19:this.$={stmt:"state",id:r[o-3],type:"default",description:"",doc:r[o-1]};break;case 20:var l=r[o],c=r[o-2].trim();if(r[o].match(":")){var h=r[o].split(":");l=h[0],c=[c,h[1]]}this.$={stmt:"state",id:l,type:"default",description:c};break;case 21:this.$={stmt:"state",id:r[o-3],type:"default",description:r[o-5],doc:r[o-1]};break;case 22:this.$={stmt:"state",id:r[o],type:"fork"};break;case 23:this.$={stmt:"state",id:r[o],type:"join"};break;case 24:this.$={stmt:"state",id:r[o],type:"choice"};break;case 25:this.$={stmt:"state",id:i.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:r[o-1].trim(),note:{position:r[o-2].trim(),text:r[o].trim()}};break;case 29:this.$=r[o].trim(),i.setAccTitle(this.$);break;case 30:case 31:this.$=r[o].trim(),i.setAccDescription(this.$);break;case 32:case 33:this.$={stmt:"classDef",id:r[o-1].trim(),classes:r[o].trim()};break;case 34:this.$={stmt:"style",id:r[o-1].trim(),styleClass:r[o].trim()};break;case 35:this.$={stmt:"applyClass",id:r[o-1].trim(),styleClass:r[o].trim()};break;case 36:i.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 37:i.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 38:i.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 39:i.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 42:case 43:this.$={stmt:"state",id:r[o].trim(),type:"default",description:""};break;case 44:case 45:this.$={stmt:"state",id:r[o-2].trim(),classes:[r[o].trim()],type:"default",description:""}}}),"anonymous"),table:[{3:1,4:e,5:i,6:n},{1:[3]},{3:5,4:e,5:i,6:n},{3:6,4:e,5:i,6:n},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],r,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:a,5:o,8:8,9:10,10:12,11:13,12:14,13:15,16:l,17:c,19:h,22:d,24:u,25:p,26:y,27:g,28:f,29:S,32:25,33:m,35:_,37:T,38:b,42:k,45:E,48:x,49:C,50:D,51:$,54:v},t(L,[2,5]),{9:38,10:12,11:13,12:14,13:15,16:l,17:c,19:h,22:d,24:u,25:p,26:y,27:g,28:f,29:S,32:25,33:m,35:_,37:T,38:b,42:k,45:E,48:x,49:C,50:D,51:$,54:v},t(L,[2,7]),t(L,[2,8]),t(L,[2,9]),t(L,[2,10]),t(L,[2,11]),t(L,[2,12],{14:[1,39],15:[1,40]}),t(L,[2,16]),{18:[1,41]},t(L,[2,18],{20:[1,42]}),{23:[1,43]},t(L,[2,22]),t(L,[2,23]),t(L,[2,24]),t(L,[2,25]),{30:44,31:[1,45],56:[1,46],57:[1,47]},t(L,[2,28]),{34:[1,48]},{36:[1,49]},t(L,[2,31]),{39:[1,50],41:[1,51]},{43:[1,52]},{46:[1,53]},t(I,[2,42],{55:[1,54]}),t(I,[2,43],{55:[1,55]}),t(L,[2,36]),t(L,[2,37]),t(L,[2,38]),t(L,[2,39]),t(L,[2,6]),t(L,[2,13]),{13:56,24:u,54:v},t(L,[2,17]),t(A,r,{7:57}),{24:[1,58]},{24:[1,59]},{23:[1,60]},{24:[2,46]},{24:[2,47]},t(L,[2,29]),t(L,[2,30]),{40:[1,61]},{40:[1,62]},{44:[1,63]},{47:[1,64]},{24:[1,65]},{24:[1,66]},t(L,[2,14],{14:[1,67]}),{4:a,5:o,8:8,9:10,10:12,11:13,12:14,13:15,16:l,17:c,19:h,21:[1,68],22:d,24:u,25:p,26:y,27:g,28:f,29:S,32:25,33:m,35:_,37:T,38:b,42:k,45:E,48:x,49:C,50:D,51:$,54:v},t(L,[2,20],{20:[1,69]}),{31:[1,70]},{24:[1,71]},t(L,[2,32]),t(L,[2,33]),t(L,[2,34]),t(L,[2,35]),t(I,[2,44]),t(I,[2,45]),t(L,[2,15]),t(L,[2,19]),t(A,r,{7:72}),t(L,[2,26]),t(L,[2,27]),{4:a,5:o,8:8,9:10,10:12,11:13,12:14,13:15,16:l,17:c,19:h,21:[1,73],22:d,24:u,25:p,26:y,27:g,28:f,29:S,32:25,33:m,35:_,37:T,38:b,42:k,45:E,48:x,49:C,50:D,51:$,54:v},t(L,[2,21])],defaultActions:{5:[2,1],6:[2,2],46:[2,46],47:[2,47]},parseError:s((function(t,e){if(!e.recoverable){var s=new Error(t);throw s.hash=e,s}this.trace(t)}),"parseError"),parse:s((function(t){var e=this,i=[0],n=[],r=[null],a=[],o=this.table,l="",c=0,h=0,d=a.slice.call(arguments,1),u=Object.create(this.lexer),p={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(p.yy[y]=this.yy[y]);u.setInput(t,p.yy),p.yy.lexer=u,p.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var g=u.yylloc;a.push(g);var f=u.options&&u.options.ranges;function S(){var t;return"number"!=typeof(t=n.pop()||u.lex()||1)&&(t instanceof Array&&(t=(n=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,s((function(t){i.length=i.length-2*t,r.length=r.length-t,a.length=a.length-t}),"popStack"),s(S,"lex");for(var m,_,T,b,k,E,x,C,D={};;){if(_=i[i.length-1],this.defaultActions[_]?T=this.defaultActions[_]:(null==m&&(m=S()),T=o[_]&&o[_][m]),void 0===T||!T.length||!T[0]){var $="";for(k in C=[],o[_])this.terminals_[k]&&k>2&&C.push("'"+this.terminals_[k]+"'");$=u.showPosition?"Parse error on line "+(c+1)+":\n"+u.showPosition()+"\nExpecting "+C.join(", ")+", got '"+(this.terminals_[m]||m)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==m?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError($,{text:u.match,token:this.terminals_[m]||m,line:u.yylineno,loc:g,expected:C})}if(T[0]instanceof Array&&T.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_+", token: "+m);switch(T[0]){case 1:i.push(m),r.push(u.yytext),a.push(u.yylloc),i.push(T[1]),m=null,h=u.yyleng,l=u.yytext,c=u.yylineno,g=u.yylloc;break;case 2:if(E=this.productions_[T[1]][1],D.$=r[r.length-E],D._$={first_line:a[a.length-(E||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(E||1)].first_column,last_column:a[a.length-1].last_column},f&&(D._$.range=[a[a.length-(E||1)].range[0],a[a.length-1].range[1]]),void 0!==(b=this.performAction.apply(D,[l,h,c,p.yy,T[1],r,a].concat(d))))return b;E&&(i=i.slice(0,-1*E*2),r=r.slice(0,-1*E),a=a.slice(0,-1*E)),i.push(this.productions_[T[1]][0]),r.push(D.$),a.push(D._$),x=o[i[i.length-2]][i[i.length-1]],i.push(x);break;case 3:return!0}}return!0}),"parse")},O=function(){return{EOF:1,parseError:s((function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)}),"parseError"),setInput:s((function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:s((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:s((function(t){var e=t.length,s=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),s.length-1&&(this.yylineno-=s.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:s?(s.length===i.length?this.yylloc.first_column:0)+i[i.length-s.length].length-s[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this}),"unput"),more:s((function(){return this._more=!0,this}),"more"),reject:s((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:s((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:s((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:s((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:s((function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"}),"showPosition"),test_match:s((function(t,e){var s,i,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],s=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s)return s;if(this._backtrack){for(var r in n)this[r]=n[r];return!1}return!1}),"test_match"),next:s((function(){if(this.done)return this.EOF;var t,e,s,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),r=0;r<n.length;r++)if((s=this._input.match(this.rules[n[r]]))&&(!e||s[0].length>e[0].length)){if(e=s,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(s,n[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:s((function(){var t=this.next();return t||this.lex()}),"lex"),begin:s((function(t){this.conditionStack.push(t)}),"begin"),popState:s((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:s((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:s((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:s((function(t){this.begin(t)}),"pushState"),stateStackSize:s((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:s((function(t,e,s,i){switch(s){case 0:return 41;case 1:case 42:return 48;case 2:case 43:return 49;case 3:case 44:return 50;case 4:case 45:return 51;case 5:case 6:case 8:case 9:case 10:case 11:case 54:case 56:case 62:break;case 7:case 77:return 5;case 12:case 32:return this.pushState("SCALE"),17;case 13:case 33:return 18;case 14:case 20:case 34:case 49:case 52:this.popState();break;case 15:return this.begin("acc_title"),33;case 16:return this.popState(),"acc_title_value";case 17:return this.begin("acc_descr"),35;case 18:return this.popState(),"acc_descr_value";case 19:this.begin("acc_descr_multiline");break;case 21:return"acc_descr_multiline_value";case 22:return this.pushState("CLASSDEF"),38;case 23:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 24:return this.popState(),this.pushState("CLASSDEFID"),39;case 25:return this.popState(),40;case 26:return this.pushState("CLASS"),45;case 27:return this.popState(),this.pushState("CLASS_STYLE"),46;case 28:return this.popState(),47;case 29:return this.pushState("STYLE"),42;case 30:return this.popState(),this.pushState("STYLEDEF_STYLES"),43;case 31:return this.popState(),44;case 35:this.pushState("STATE");break;case 36:case 39:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),25;case 37:case 40:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),26;case 38:case 41:return this.popState(),e.yytext=e.yytext.slice(0,-10).trim(),27;case 46:this.pushState("STATE_STRING");break;case 47:return this.pushState("STATE_ID"),"AS";case 48:case 64:return this.popState(),"ID";case 50:return"STATE_DESCR";case 51:return 19;case 53:return this.popState(),this.pushState("struct"),20;case 55:return this.popState(),21;case 57:return this.begin("NOTE"),29;case 58:return this.popState(),this.pushState("NOTE_ID"),56;case 59:return this.popState(),this.pushState("NOTE_ID"),57;case 60:this.popState(),this.pushState("FLOATING_NOTE");break;case 61:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 63:return"NOTE_TEXT";case 65:return this.popState(),this.pushState("NOTE_TEXT"),24;case 66:return this.popState(),e.yytext=e.yytext.substr(2).trim(),31;case 67:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),31;case 68:case 69:return 6;case 70:return 16;case 71:return 54;case 72:return 24;case 73:return e.yytext=e.yytext.trim(),14;case 74:return 15;case 75:return 28;case 76:return 55;case 78:return"INVALID"}}),"anonymous"),rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[9,10],inclusive:!1},struct:{rules:[9,10,22,26,29,35,42,43,44,45,54,55,56,57,71,72,73,74,75],inclusive:!1},FLOATING_NOTE_ID:{rules:[64],inclusive:!1},FLOATING_NOTE:{rules:[61,62,63],inclusive:!1},NOTE_TEXT:{rules:[66,67],inclusive:!1},NOTE_ID:{rules:[65],inclusive:!1},NOTE:{rules:[58,59,60],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[31],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[30],inclusive:!1},CLASS_STYLE:{rules:[28],inclusive:!1},CLASS:{rules:[27],inclusive:!1},CLASSDEFID:{rules:[25],inclusive:!1},CLASSDEF:{rules:[23,24],inclusive:!1},acc_descr_multiline:{rules:[20,21],inclusive:!1},acc_descr:{rules:[18],inclusive:!1},acc_title:{rules:[16],inclusive:!1},SCALE:{rules:[13,14,33,34],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[48],inclusive:!1},STATE_STRING:{rules:[49,50],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[9,10,36,37,38,39,40,41,46,47,51,52,53],inclusive:!1},ID:{rules:[9,10],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,10,11,12,15,17,19,22,26,29,32,35,53,57,68,69,70,71,72,73,74,76,77,78],inclusive:!0}}}}();function R(){this.yy={}}return w.lexer=O,s(R,"Parser"),R.prototype=w,w.Parser=R,new R}();f.parser=f;var S=f,m="state",_="relation",T="default",b="divider",k="fill:none",E="fill: #333",x="text",C="normal",D="rect",$="rectWithTitle",v="divider",L="roundedWithTitle",I="statediagram",A=`${I}-state`,w="transition",O=`${w} note-edge`,R=`${I}-note`,N=`${I}-cluster`,B=`${I}-cluster-alt`,F="parent",P="note",Y="----",G=`${Y}${P}`,j=`${Y}${F}`,z=s(((t,e="TB")=>{if(!t.doc)return e;let s=e;for(const e of t.doc)"dir"===e.stmt&&(s=e.value);return s}),"getDir"),U={getClasses:s((function(t,e){return e.db.extract(e.db.getRootDocV2()),e.db.getClasses()}),"getClasses"),draw:s((async function(s,i,r,a){d.info("REF0:"),d.info("Drawing state diagram (v2)",i);const{securityLevel:o,state:l,layout:c}=n();a.db.extract(a.db.getRootDocV2());const h=a.db.getData(),y=t(i,o);h.type=a.type,h.layoutAlgorithm=c,h.nodeSpacing=l?.nodeSpacing||50,h.rankSpacing=l?.rankSpacing||50,h.markers=["barb"],h.diagramId=i,await u(h,y);p.insertTitle(y,"statediagramTitleText",l?.titleTopMargin??25,a.db.getDiagramTitle()),e(y,8,I,l?.useMaxWidth??!0)}),"draw"),getDir:z},M=new Map,X=0;function H(t="",e=0,s="",i=Y){return`state-${t}${null!==s&&s.length>0?`${i}${s}`:""}-${e}`}s(H,"stateDomId");var W=s(((t,e,s,r,a,o,l,c)=>{d.trace("items",e),e.forEach((e=>{switch(e.stmt){case m:case T:Q(t,e,s,r,a,o,l,c);break;case _:{Q(t,e.state1,s,r,a,o,l,c),Q(t,e.state2,s,r,a,o,l,c);const h={id:"edge"+X,start:e.state1.id,end:e.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:k,labelStyle:"",label:i.sanitizeText(e.description,n()),arrowheadStyle:E,labelpos:"c",labelType:x,thickness:C,classes:w,look:l};a.push(h),X++}}}))}),"setupDoc"),J=s(((t,e="TB")=>{let s=e;if(t.doc)for(const e of t.doc)"dir"===e.stmt&&(s=e.value);return s}),"getDir");function V(t,e,s){if(!e.id||"</join></fork>"===e.id||"</choice>"===e.id)return;e.cssClasses&&(Array.isArray(e.cssCompiledStyles)||(e.cssCompiledStyles=[]),e.cssClasses.split(" ").forEach((t=>{if(s.get(t)){const i=s.get(t);e.cssCompiledStyles=[...e.cssCompiledStyles,...i.styles]}})));const i=t.find((t=>t.id===e.id));i?Object.assign(i,e):t.push(e)}function K(t){return t?.classes?.join(" ")??""}function q(t){return t?.styles??[]}s(V,"insertOrUpdateNode"),s(K,"getClassesFromDbInfo"),s(q,"getStylesFromDbInfo");var Q=s(((t,e,s,r,a,o,l,c)=>{const h=e.id,u=s.get(h),p=K(u),y=q(u);if(d.info("dataFetcher parsedItem",e,u,y),"root"!==h){let s=D;!0===e.start?s="stateStart":!1===e.start&&(s="stateEnd"),e.type!==T&&(s=e.type),M.get(h)||M.set(h,{id:h,shape:s,description:i.sanitizeText(h,n()),cssClasses:`${p} ${A}`,cssStyles:y});const u=M.get(h);e.description&&(Array.isArray(u.description)?(u.shape=$,u.description.push(e.description)):u.description?.length>0?(u.shape=$,u.description===h?u.description=[e.description]:u.description=[u.description,e.description]):(u.shape=D,u.description=e.description),u.description=i.sanitizeTextOrArray(u.description,n())),1===u.description?.length&&u.shape===$&&("group"===u.type?u.shape=L:u.shape=D),!u.type&&e.doc&&(d.info("Setting cluster for XCX",h,J(e)),u.type="group",u.isGroup=!0,u.dir=J(e),u.shape=e.type===b?v:L,u.cssClasses=`${u.cssClasses} ${N} ${o?B:""}`);const g={labelStyle:"",shape:u.shape,label:u.description,cssClasses:u.cssClasses,cssCompiledStyles:[],cssStyles:u.cssStyles,id:h,dir:u.dir,domId:H(h,X),type:u.type,isGroup:"group"===u.type,padding:8,rx:10,ry:10,look:l};if(g.shape===v&&(g.label=""),t&&"root"!==t.id&&(d.trace("Setting node ",h," to be child of its parent ",t.id),g.parentId=t.id),g.centerLabel=!0,e.note){const t={labelStyle:"",shape:"note",label:e.note.text,cssClasses:R,cssStyles:[],cssCompilesStyles:[],id:h+G+"-"+X,domId:H(h,X,P),type:u.type,isGroup:"group"===u.type,padding:n().flowchart.padding,look:l,position:e.note.position},s=h+j,i={labelStyle:"",shape:"noteGroup",label:e.note.text,cssClasses:u.cssClasses,cssStyles:[],id:h+j,domId:H(h,X,F),type:"group",isGroup:!0,padding:16,look:l,position:e.note.position};X++,i.id=s,t.parentId=s,V(r,i,c),V(r,t,c),V(r,g,c);let o=h,d=t.id;"left of"===e.note.position&&(o=t.id,d=h),a.push({id:o+"-"+d,start:o,end:d,arrowhead:"none",arrowTypeEnd:"",style:k,labelStyle:"",classes:O,arrowheadStyle:E,labelpos:"c",labelType:x,thickness:C,look:l})}else V(r,g,c)}e.doc&&(d.trace("Adding nodes children "),W(e,e.doc,s,r,a,!o,l,c))}),"dataFetcher"),Z=s((()=>{M.clear(),X=0}),"reset"),tt="[*]",et="start",st=tt,it="color",nt="fill";function rt(){return new Map}s(rt,"newClassesList");var at=[],ot=[],lt="LR",ct=[],ht=rt(),dt=s((()=>({relations:[],states:new Map,documents:{}})),"newDoc"),ut={root:dt()},pt=ut.root,yt=0,gt=0,ft=s((t=>JSON.parse(JSON.stringify(t))),"clone"),St=s((t=>{d.info("Setting root doc",t),ct=t}),"setRootDoc"),mt=s((()=>ct),"getRootDoc"),_t=s(((t,e,s)=>{if(e.stmt===_)_t(t,e.state1,!0),_t(t,e.state2,!1);else if(e.stmt===m&&("[*]"===e.id?(e.id=s?t.id+"_start":t.id+"_end",e.start=s):e.id=e.id.trim()),e.doc){const t=[];let s,i=[];for(s=0;s<e.doc.length;s++)if(e.doc[s].type===b){const n=ft(e.doc[s]);n.doc=ft(i),t.push(n),i=[]}else i.push(e.doc[s]);if(t.length>0&&i.length>0){const s={stmt:m,id:g(),type:"divider",doc:ft(i)};t.push(ft(s)),e.doc=t}e.doc.forEach((t=>_t(e,t,!0)))}}),"docTranslator"),Tt=s((()=>(_t({id:"root"},{id:"root",doc:ct},!0),{id:"root",doc:ct})),"getRootDocV2"),bt=s((t=>{let e;e=t.doc?t.doc:t,d.info(e),Et(!0),d.info("Extract initial document:",e),e.forEach((t=>{switch(d.warn("Statement",t.stmt),t.stmt){case m:kt(t.id.trim(),t.type,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles);break;case _:Ot(t.state1,t.state2,t.description);break;case"classDef":Ft(t.id.trim(),t.classes);break;case"style":{const e=t.id.trim().split(","),s=t.styleClass.split(",");e.forEach((t=>{let e=xt(t);if(void 0===e){const s=t.trim();kt(s),e=xt(s)}e.styles=s.map((t=>t.replace(/;/g,"")?.trim()))}))}break;case"applyClass":Yt(t.id.trim(),t.styleClass)}}));const s=Ct(),i=n().look;Z(),Q(void 0,Tt(),s,at,ot,!0,i,ht),at.forEach((t=>{if(Array.isArray(t.label)){if(t.description=t.label.slice(1),t.isGroup&&t.description.length>0)throw new Error("Group nodes can only have label. Remove the additional description for node ["+t.id+"]");t.label=t.label[0]}}))}),"extract"),kt=s((function(t,e=T,s=null,r=null,a=null,o=null,l=null,c=null){const h=t?.trim();if(pt.states.has(h)?(pt.states.get(h).doc||(pt.states.get(h).doc=s),pt.states.get(h).type||(pt.states.get(h).type=e)):(d.info("Adding state ",h,r),pt.states.set(h,{id:h,descriptions:[],type:e,doc:s,note:a,classes:[],styles:[],textStyles:[]})),r&&(d.info("Setting state description",h,r),"string"==typeof r&&Rt(h,r.trim()),"object"==typeof r&&r.forEach((t=>Rt(h,t.trim())))),a){const t=pt.states.get(h);t.note=a,t.note.text=i.sanitizeText(t.note.text,n())}if(o){d.info("Setting state classes",h,o);("string"==typeof o?[o]:o).forEach((t=>Yt(h,t.trim())))}if(l){d.info("Setting state styles",h,l);("string"==typeof l?[l]:l).forEach((t=>Gt(h,t.trim())))}if(c){d.info("Setting state styles",h,l);("string"==typeof c?[c]:c).forEach((t=>jt(h,t.trim())))}}),"addState"),Et=s((function(t){at=[],ot=[],ut={root:dt()},pt=ut.root,yt=0,ht=rt(),t||y()}),"clear"),xt=s((function(t){return pt.states.get(t)}),"getState"),Ct=s((function(){return pt.states}),"getStates"),Dt=s((function(){d.info("Documents = ",ut)}),"logDocuments"),$t=s((function(){return pt.relations}),"getRelations");function vt(t=""){let e=t;return t===tt&&(yt++,e=`${et}${yt}`),e}function Lt(t="",e=T){return t===tt?et:e}function It(t=""){let e=t;return t===st&&(e=`end${++yt}`),e}function At(t="",e=T){return t===st?"end":e}function wt(t,e,s){let r=vt(t.id.trim()),a=Lt(t.id.trim(),t.type),o=vt(e.id.trim()),l=Lt(e.id.trim(),e.type);kt(r,a,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),kt(o,l,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),pt.relations.push({id1:r,id2:o,relationTitle:i.sanitizeText(s,n())})}s(vt,"startIdIfNeeded"),s(Lt,"startTypeIfNeeded"),s(It,"endIdIfNeeded"),s(At,"endTypeIfNeeded"),s(wt,"addRelationObjs");var Ot=s((function(t,e,s){if("object"==typeof t)wt(t,e,s);else{const r=vt(t.trim()),a=Lt(t),o=It(e.trim()),l=At(e);kt(r,a),kt(o,l),pt.relations.push({id1:r,id2:o,title:i.sanitizeText(s,n())})}}),"addRelation"),Rt=s((function(t,e){const s=pt.states.get(t),r=e.startsWith(":")?e.replace(":","").trim():e;s.descriptions.push(i.sanitizeText(r,n()))}),"addDescription"),Nt=s((function(t){return":"===t.substring(0,1)?t.substr(2).trim():t.trim()}),"cleanupLabel"),Bt=s((()=>"divider-id-"+ ++gt),"getDividerId"),Ft=s((function(t,e=""){ht.has(t)||ht.set(t,{id:t,styles:[],textStyles:[]});const s=ht.get(t);null!=e&&e.split(",").forEach((t=>{const e=t.replace(/([^;]*);/,"$1").trim();if(RegExp(it).exec(t)){const t=e.replace(nt,"bgFill").replace(it,nt);s.textStyles.push(t)}s.styles.push(e)}))}),"addStyleClass"),Pt=s((function(){return ht}),"getClasses"),Yt=s((function(t,e){t.split(",").forEach((function(t){let s=xt(t);if(void 0===s){const e=t.trim();kt(e),s=xt(e)}s.classes.push(e)}))}),"setCssClass"),Gt=s((function(t,e){const s=xt(t);void 0!==s&&s.styles.push(e)}),"setStyle"),jt=s((function(t,e){const s=xt(t);void 0!==s&&s.textStyles.push(e)}),"setTextStyle"),zt=s((()=>lt),"getDirection"),Ut=s((t=>{lt=t}),"setDirection"),Mt=s((t=>t&&":"===t[0]?t.substr(1).trim():t.trim()),"trimColon"),Xt=s((()=>{const t=n();return{nodes:at,edges:ot,other:{},config:t,direction:z(Tt())}}),"getData"),Ht={getConfig:s((()=>n().state),"getConfig"),getData:Xt,addState:kt,clear:Et,getState:xt,getStates:Ct,getRelations:$t,getClasses:Pt,getDirection:zt,addRelation:Ot,getDividerId:Bt,setDirection:Ut,cleanupLabel:Nt,lineType:{LINE:0,DOTTED_LINE:1},relationType:{AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},logDocuments:Dt,getRootDoc:mt,setRootDoc:St,getRootDocV2:Tt,extract:bt,trimColon:Mt,getAccTitle:r,setAccTitle:a,getAccDescription:o,setAccDescription:l,addStyleClass:Ft,setCssClass:Yt,addDescription:Rt,setDiagramTitle:c,getDiagramTitle:h},Wt=s((t=>`\ndefs #statediagram-barbEnd {\n    fill: ${t.transitionColor};\n    stroke: ${t.transitionColor};\n  }\ng.stateGroup text {\n  fill: ${t.nodeBorder};\n  stroke: none;\n  font-size: 10px;\n}\ng.stateGroup text {\n  fill: ${t.textColor};\n  stroke: none;\n  font-size: 10px;\n\n}\ng.stateGroup .state-title {\n  font-weight: bolder;\n  fill: ${t.stateLabelColor};\n}\n\ng.stateGroup rect {\n  fill: ${t.mainBkg};\n  stroke: ${t.nodeBorder};\n}\n\ng.stateGroup line {\n  stroke: ${t.lineColor};\n  stroke-width: 1;\n}\n\n.transition {\n  stroke: ${t.transitionColor};\n  stroke-width: 1;\n  fill: none;\n}\n\n.stateGroup .composit {\n  fill: ${t.background};\n  border-bottom: 1px\n}\n\n.stateGroup .alt-composit {\n  fill: #e0e0e0;\n  border-bottom: 1px\n}\n\n.state-note {\n  stroke: ${t.noteBorderColor};\n  fill: ${t.noteBkgColor};\n\n  text {\n    fill: ${t.noteTextColor};\n    stroke: none;\n    font-size: 10px;\n  }\n}\n\n.stateLabel .box {\n  stroke: none;\n  stroke-width: 0;\n  fill: ${t.mainBkg};\n  opacity: 0.5;\n}\n\n.edgeLabel .label rect {\n  fill: ${t.labelBackgroundColor};\n  opacity: 0.5;\n}\n.edgeLabel {\n  background-color: ${t.edgeLabelBackground};\n  p {\n    background-color: ${t.edgeLabelBackground};\n  }\n  rect {\n    opacity: 0.5;\n    background-color: ${t.edgeLabelBackground};\n    fill: ${t.edgeLabelBackground};\n  }\n  text-align: center;\n}\n.edgeLabel .label text {\n  fill: ${t.transitionLabelColor||t.tertiaryTextColor};\n}\n.label div .edgeLabel {\n  color: ${t.transitionLabelColor||t.tertiaryTextColor};\n}\n\n.stateLabel text {\n  fill: ${t.stateLabelColor};\n  font-size: 10px;\n  font-weight: bold;\n}\n\n.node circle.state-start {\n  fill: ${t.specialStateColor};\n  stroke: ${t.specialStateColor};\n}\n\n.node .fork-join {\n  fill: ${t.specialStateColor};\n  stroke: ${t.specialStateColor};\n}\n\n.node circle.state-end {\n  fill: ${t.innerEndBackground};\n  stroke: ${t.background};\n  stroke-width: 1.5\n}\n.end-state-inner {\n  fill: ${t.compositeBackground||t.background};\n  // stroke: ${t.background};\n  stroke-width: 1.5\n}\n\n.node rect {\n  fill: ${t.stateBkg||t.mainBkg};\n  stroke: ${t.stateBorder||t.nodeBorder};\n  stroke-width: 1px;\n}\n.node polygon {\n  fill: ${t.mainBkg};\n  stroke: ${t.stateBorder||t.nodeBorder};;\n  stroke-width: 1px;\n}\n#statediagram-barbEnd {\n  fill: ${t.lineColor};\n}\n\n.statediagram-cluster rect {\n  fill: ${t.compositeTitleBackground};\n  stroke: ${t.stateBorder||t.nodeBorder};\n  stroke-width: 1px;\n}\n\n.cluster-label, .nodeLabel {\n  color: ${t.stateLabelColor};\n  // line-height: 1;\n}\n\n.statediagram-cluster rect.outer {\n  rx: 5px;\n  ry: 5px;\n}\n.statediagram-state .divider {\n  stroke: ${t.stateBorder||t.nodeBorder};\n}\n\n.statediagram-state .title-state {\n  rx: 5px;\n  ry: 5px;\n}\n.statediagram-cluster.statediagram-cluster .inner {\n  fill: ${t.compositeBackground||t.background};\n}\n.statediagram-cluster.statediagram-cluster-alt .inner {\n  fill: ${t.altBackground?t.altBackground:"#efefef"};\n}\n\n.statediagram-cluster .inner {\n  rx:0;\n  ry:0;\n}\n\n.statediagram-state rect.basic {\n  rx: 5px;\n  ry: 5px;\n}\n.statediagram-state rect.divider {\n  stroke-dasharray: 10,10;\n  fill: ${t.altBackground?t.altBackground:"#efefef"};\n}\n\n.note-edge {\n  stroke-dasharray: 5;\n}\n\n.statediagram-note rect {\n  fill: ${t.noteBkgColor};\n  stroke: ${t.noteBorderColor};\n  stroke-width: 1px;\n  rx: 0;\n  ry: 0;\n}\n.statediagram-note rect {\n  fill: ${t.noteBkgColor};\n  stroke: ${t.noteBorderColor};\n  stroke-width: 1px;\n  rx: 0;\n  ry: 0;\n}\n\n.statediagram-note text {\n  fill: ${t.noteTextColor};\n}\n\n.statediagram-note .nodeLabel {\n  color: ${t.noteTextColor};\n}\n.statediagram .edgeLabel {\n  color: red; // ${t.noteTextColor};\n}\n\n#dependencyStart, #dependencyEnd {\n  fill: ${t.lineColor};\n  stroke: ${t.lineColor};\n  stroke-width: 1;\n}\n\n.statediagramTitleText {\n  text-anchor: middle;\n  font-size: 18px;\n  fill: ${t.textColor};\n}\n`),"getStyles");export{Ht as a,Wt as b,U as c,S as s};
