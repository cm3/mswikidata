import{_ as t,I as e,B as i,l as a,d as n,i as s,q as r,s as o,g as l,p as h,b as c,c as d,v as u,j as x,k as g}from"./main-b4c94e92.js";import{l as f}from"./linear-ac3e9633.js";import"./init-cf76ae07.js";var p=function(){var e=t((function(t,e,i,a){for(i=i||{},a=t.length;a--;i[t[a]]=e);return i}),"o"),i=[1,3],a=[1,4],n=[1,5],s=[1,6],r=[1,7],o=[1,4,5,10,12,13,14,18,25,35,37,39,41,42,48,50,51,52,53,54,55,56,57,60,61,63,64,65,66,67],l=[1,4,5,10,12,13,14,18,25,28,35,37,39,41,42,48,50,51,52,53,54,55,56,57,60,61,63,64,65,66,67],h=[55,56,57],c=[2,36],d=[1,37],u=[1,36],x=[1,38],g=[1,35],f=[1,43],p=[1,41],y=[1,14],T=[1,23],m=[1,18],q=[1,19],A=[1,20],_=[1,21],b=[1,22],S=[1,24],k=[1,25],F=[1,26],P=[1,27],C=[1,28],L=[1,29],v=[1,32],E=[1,33],D=[1,34],z=[1,39],I=[1,40],w=[1,42],N=[1,44],B=[1,62],W=[1,61],R=[4,5,8,10,12,13,14,18,44,47,49,55,56,57,63,64,65,66,67],$=[1,65],U=[1,66],Q=[1,67],O=[1,68],X=[1,69],H=[1,70],M=[1,71],Y=[1,72],j=[1,73],G=[1,74],K=[1,75],V=[1,76],Z=[4,5,6,7,8,9,10,11,12,13,14,15,18],J=[1,90],tt=[1,91],et=[1,92],it=[1,99],at=[1,93],nt=[1,96],st=[1,94],rt=[1,95],ot=[1,97],lt=[1,98],ht=[1,102],ct=[10,55,56,57],dt=[4,5,6,8,10,11,13,17,18,19,20,55,56,57],ut={trace:t((function(){}),"trace"),yy:{},symbols_:{error:2,idStringToken:3,ALPHA:4,NUM:5,NODE_STRING:6,DOWN:7,MINUS:8,DEFAULT:9,COMMA:10,COLON:11,AMP:12,BRKT:13,MULT:14,UNICODE_TEXT:15,styleComponent:16,UNIT:17,SPACE:18,STYLE:19,PCT:20,idString:21,style:22,stylesOpt:23,classDefStatement:24,CLASSDEF:25,start:26,eol:27,QUADRANT:28,document:29,line:30,statement:31,axisDetails:32,quadrantDetails:33,points:34,title:35,title_value:36,acc_title:37,acc_title_value:38,acc_descr:39,acc_descr_value:40,acc_descr_multiline_value:41,section:42,text:43,point_start:44,point_x:45,point_y:46,class_name:47,"X-AXIS":48,"AXIS-TEXT-DELIMITER":49,"Y-AXIS":50,QUADRANT_1:51,QUADRANT_2:52,QUADRANT_3:53,QUADRANT_4:54,NEWLINE:55,SEMI:56,EOF:57,alphaNumToken:58,textNoTagsToken:59,STR:60,MD_STR:61,alphaNum:62,PUNCTUATION:63,PLUS:64,EQUALS:65,DOT:66,UNDERSCORE:67,$accept:0,$end:1},terminals_:{2:"error",4:"ALPHA",5:"NUM",6:"NODE_STRING",7:"DOWN",8:"MINUS",9:"DEFAULT",10:"COMMA",11:"COLON",12:"AMP",13:"BRKT",14:"MULT",15:"UNICODE_TEXT",17:"UNIT",18:"SPACE",19:"STYLE",20:"PCT",25:"CLASSDEF",28:"QUADRANT",35:"title",36:"title_value",37:"acc_title",38:"acc_title_value",39:"acc_descr",40:"acc_descr_value",41:"acc_descr_multiline_value",42:"section",44:"point_start",45:"point_x",46:"point_y",47:"class_name",48:"X-AXIS",49:"AXIS-TEXT-DELIMITER",50:"Y-AXIS",51:"QUADRANT_1",52:"QUADRANT_2",53:"QUADRANT_3",54:"QUADRANT_4",55:"NEWLINE",56:"SEMI",57:"EOF",60:"STR",61:"MD_STR",63:"PUNCTUATION",64:"PLUS",65:"EQUALS",66:"DOT",67:"UNDERSCORE"},productions_:[0,[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[21,1],[21,2],[22,1],[22,2],[23,1],[23,3],[24,5],[26,2],[26,2],[26,2],[29,0],[29,2],[30,2],[31,0],[31,1],[31,2],[31,1],[31,1],[31,1],[31,2],[31,2],[31,2],[31,1],[31,1],[34,4],[34,5],[34,5],[34,6],[32,4],[32,3],[32,2],[32,4],[32,3],[32,2],[33,2],[33,2],[33,2],[33,2],[27,1],[27,1],[27,1],[43,1],[43,2],[43,1],[43,1],[62,1],[62,2],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[59,1],[59,1],[59,1]],performAction:t((function(t,e,i,a,n,s,r){var o=s.length-1;switch(n){case 23:case 68:this.$=s[o];break;case 24:case 69:this.$=s[o-1]+""+s[o];break;case 26:this.$=s[o-1]+s[o];break;case 27:this.$=[s[o].trim()];break;case 28:s[o-2].push(s[o].trim()),this.$=s[o-2];break;case 29:this.$=s[o-4],a.addClass(s[o-2],s[o]);break;case 37:this.$=[];break;case 42:this.$=s[o].trim(),a.setDiagramTitle(this.$);break;case 43:this.$=s[o].trim(),a.setAccTitle(this.$);break;case 44:case 45:this.$=s[o].trim(),a.setAccDescription(this.$);break;case 46:a.addSection(s[o].substr(8)),this.$=s[o].substr(8);break;case 47:a.addPoint(s[o-3],"",s[o-1],s[o],[]);break;case 48:a.addPoint(s[o-4],s[o-3],s[o-1],s[o],[]);break;case 49:a.addPoint(s[o-4],"",s[o-2],s[o-1],s[o]);break;case 50:a.addPoint(s[o-5],s[o-4],s[o-2],s[o-1],s[o]);break;case 51:a.setXAxisLeftText(s[o-2]),a.setXAxisRightText(s[o]);break;case 52:s[o-1].text+=" ⟶ ",a.setXAxisLeftText(s[o-1]);break;case 53:a.setXAxisLeftText(s[o]);break;case 54:a.setYAxisBottomText(s[o-2]),a.setYAxisTopText(s[o]);break;case 55:s[o-1].text+=" ⟶ ",a.setYAxisBottomText(s[o-1]);break;case 56:a.setYAxisBottomText(s[o]);break;case 57:a.setQuadrant1Text(s[o]);break;case 58:a.setQuadrant2Text(s[o]);break;case 59:a.setQuadrant3Text(s[o]);break;case 60:a.setQuadrant4Text(s[o]);break;case 64:case 66:this.$={text:s[o],type:"text"};break;case 65:this.$={text:s[o-1].text+""+s[o],type:s[o-1].type};break;case 67:this.$={text:s[o],type:"markdown"}}}),"anonymous"),table:[{18:i,26:1,27:2,28:a,55:n,56:s,57:r},{1:[3]},{18:i,26:8,27:2,28:a,55:n,56:s,57:r},{18:i,26:9,27:2,28:a,55:n,56:s,57:r},e(o,[2,33],{29:10}),e(l,[2,61]),e(l,[2,62]),e(l,[2,63]),{1:[2,30]},{1:[2,31]},e(h,c,{30:11,31:12,24:13,32:15,33:16,34:17,43:30,58:31,1:[2,32],4:d,5:u,10:x,12:g,13:f,14:p,18:y,25:T,35:m,37:q,39:A,41:_,42:b,48:S,50:k,51:F,52:P,53:C,54:L,60:v,61:E,63:D,64:z,65:I,66:w,67:N}),e(o,[2,34]),{27:45,55:n,56:s,57:r},e(h,[2,37]),e(h,c,{24:13,32:15,33:16,34:17,43:30,58:31,31:46,4:d,5:u,10:x,12:g,13:f,14:p,18:y,25:T,35:m,37:q,39:A,41:_,42:b,48:S,50:k,51:F,52:P,53:C,54:L,60:v,61:E,63:D,64:z,65:I,66:w,67:N}),e(h,[2,39]),e(h,[2,40]),e(h,[2,41]),{36:[1,47]},{38:[1,48]},{40:[1,49]},e(h,[2,45]),e(h,[2,46]),{18:[1,50]},{4:d,5:u,10:x,12:g,13:f,14:p,43:51,58:31,60:v,61:E,63:D,64:z,65:I,66:w,67:N},{4:d,5:u,10:x,12:g,13:f,14:p,43:52,58:31,60:v,61:E,63:D,64:z,65:I,66:w,67:N},{4:d,5:u,10:x,12:g,13:f,14:p,43:53,58:31,60:v,61:E,63:D,64:z,65:I,66:w,67:N},{4:d,5:u,10:x,12:g,13:f,14:p,43:54,58:31,60:v,61:E,63:D,64:z,65:I,66:w,67:N},{4:d,5:u,10:x,12:g,13:f,14:p,43:55,58:31,60:v,61:E,63:D,64:z,65:I,66:w,67:N},{4:d,5:u,10:x,12:g,13:f,14:p,43:56,58:31,60:v,61:E,63:D,64:z,65:I,66:w,67:N},{4:d,5:u,8:B,10:x,12:g,13:f,14:p,18:W,44:[1,57],47:[1,58],58:60,59:59,63:D,64:z,65:I,66:w,67:N},e(R,[2,64]),e(R,[2,66]),e(R,[2,67]),e(R,[2,70]),e(R,[2,71]),e(R,[2,72]),e(R,[2,73]),e(R,[2,74]),e(R,[2,75]),e(R,[2,76]),e(R,[2,77]),e(R,[2,78]),e(R,[2,79]),e(R,[2,80]),e(o,[2,35]),e(h,[2,38]),e(h,[2,42]),e(h,[2,43]),e(h,[2,44]),{3:64,4:$,5:U,6:Q,7:O,8:X,9:H,10:M,11:Y,12:j,13:G,14:K,15:V,21:63},e(h,[2,53],{59:59,58:60,4:d,5:u,8:B,10:x,12:g,13:f,14:p,18:W,49:[1,77],63:D,64:z,65:I,66:w,67:N}),e(h,[2,56],{59:59,58:60,4:d,5:u,8:B,10:x,12:g,13:f,14:p,18:W,49:[1,78],63:D,64:z,65:I,66:w,67:N}),e(h,[2,57],{59:59,58:60,4:d,5:u,8:B,10:x,12:g,13:f,14:p,18:W,63:D,64:z,65:I,66:w,67:N}),e(h,[2,58],{59:59,58:60,4:d,5:u,8:B,10:x,12:g,13:f,14:p,18:W,63:D,64:z,65:I,66:w,67:N}),e(h,[2,59],{59:59,58:60,4:d,5:u,8:B,10:x,12:g,13:f,14:p,18:W,63:D,64:z,65:I,66:w,67:N}),e(h,[2,60],{59:59,58:60,4:d,5:u,8:B,10:x,12:g,13:f,14:p,18:W,63:D,64:z,65:I,66:w,67:N}),{45:[1,79]},{44:[1,80]},e(R,[2,65]),e(R,[2,81]),e(R,[2,82]),e(R,[2,83]),{3:82,4:$,5:U,6:Q,7:O,8:X,9:H,10:M,11:Y,12:j,13:G,14:K,15:V,18:[1,81]},e(Z,[2,23]),e(Z,[2,1]),e(Z,[2,2]),e(Z,[2,3]),e(Z,[2,4]),e(Z,[2,5]),e(Z,[2,6]),e(Z,[2,7]),e(Z,[2,8]),e(Z,[2,9]),e(Z,[2,10]),e(Z,[2,11]),e(Z,[2,12]),e(h,[2,52],{58:31,43:83,4:d,5:u,10:x,12:g,13:f,14:p,60:v,61:E,63:D,64:z,65:I,66:w,67:N}),e(h,[2,55],{58:31,43:84,4:d,5:u,10:x,12:g,13:f,14:p,60:v,61:E,63:D,64:z,65:I,66:w,67:N}),{46:[1,85]},{45:[1,86]},{4:J,5:tt,6:et,8:it,11:at,13:nt,16:89,17:st,18:rt,19:ot,20:lt,22:88,23:87},e(Z,[2,24]),e(h,[2,51],{59:59,58:60,4:d,5:u,8:B,10:x,12:g,13:f,14:p,18:W,63:D,64:z,65:I,66:w,67:N}),e(h,[2,54],{59:59,58:60,4:d,5:u,8:B,10:x,12:g,13:f,14:p,18:W,63:D,64:z,65:I,66:w,67:N}),e(h,[2,47],{22:88,16:89,23:100,4:J,5:tt,6:et,8:it,11:at,13:nt,17:st,18:rt,19:ot,20:lt}),{46:[1,101]},e(h,[2,29],{10:ht}),e(ct,[2,27],{16:103,4:J,5:tt,6:et,8:it,11:at,13:nt,17:st,18:rt,19:ot,20:lt}),e(dt,[2,25]),e(dt,[2,13]),e(dt,[2,14]),e(dt,[2,15]),e(dt,[2,16]),e(dt,[2,17]),e(dt,[2,18]),e(dt,[2,19]),e(dt,[2,20]),e(dt,[2,21]),e(dt,[2,22]),e(h,[2,49],{10:ht}),e(h,[2,48],{22:88,16:89,23:104,4:J,5:tt,6:et,8:it,11:at,13:nt,17:st,18:rt,19:ot,20:lt}),{4:J,5:tt,6:et,8:it,11:at,13:nt,16:89,17:st,18:rt,19:ot,20:lt,22:105},e(dt,[2,26]),e(h,[2,50],{10:ht}),e(ct,[2,28],{16:103,4:J,5:tt,6:et,8:it,11:at,13:nt,17:st,18:rt,19:ot,20:lt})],defaultActions:{8:[2,30],9:[2,31]},parseError:t((function(t,e){if(!e.recoverable){var i=new Error(t);throw i.hash=e,i}this.trace(t)}),"parseError"),parse:t((function(e){var i=this,a=[0],n=[],s=[null],r=[],o=this.table,l="",h=0,c=0,d=r.slice.call(arguments,1),u=Object.create(this.lexer),x={yy:{}};for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(x.yy[g]=this.yy[g]);u.setInput(e,x.yy),x.yy.lexer=u,x.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var f=u.yylloc;r.push(f);var p=u.options&&u.options.ranges;function y(){var t;return"number"!=typeof(t=n.pop()||u.lex()||1)&&(t instanceof Array&&(t=(n=t).pop()),t=i.symbols_[t]||t),t}"function"==typeof x.yy.parseError?this.parseError=x.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,t((function(t){a.length=a.length-2*t,s.length=s.length-t,r.length=r.length-t}),"popStack"),t(y,"lex");for(var T,m,q,A,_,b,S,k,F={};;){if(m=a[a.length-1],this.defaultActions[m]?q=this.defaultActions[m]:(null==T&&(T=y()),q=o[m]&&o[m][T]),void 0===q||!q.length||!q[0]){var P="";for(_ in k=[],o[m])this.terminals_[_]&&_>2&&k.push("'"+this.terminals_[_]+"'");P=u.showPosition?"Parse error on line "+(h+1)+":\n"+u.showPosition()+"\nExpecting "+k.join(", ")+", got '"+(this.terminals_[T]||T)+"'":"Parse error on line "+(h+1)+": Unexpected "+(1==T?"end of input":"'"+(this.terminals_[T]||T)+"'"),this.parseError(P,{text:u.match,token:this.terminals_[T]||T,line:u.yylineno,loc:f,expected:k})}if(q[0]instanceof Array&&q.length>1)throw new Error("Parse Error: multiple actions possible at state: "+m+", token: "+T);switch(q[0]){case 1:a.push(T),s.push(u.yytext),r.push(u.yylloc),a.push(q[1]),T=null,c=u.yyleng,l=u.yytext,h=u.yylineno,f=u.yylloc;break;case 2:if(b=this.productions_[q[1]][1],F.$=s[s.length-b],F._$={first_line:r[r.length-(b||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(b||1)].first_column,last_column:r[r.length-1].last_column},p&&(F._$.range=[r[r.length-(b||1)].range[0],r[r.length-1].range[1]]),void 0!==(A=this.performAction.apply(F,[l,c,h,x.yy,q[1],s,r].concat(d))))return A;b&&(a=a.slice(0,-1*b*2),s=s.slice(0,-1*b),r=r.slice(0,-1*b)),a.push(this.productions_[q[1]][0]),s.push(F.$),r.push(F._$),S=o[a[a.length-2]][a[a.length-1]],a.push(S);break;case 3:return!0}}return!0}),"parse")},xt=function(){return{EOF:1,parseError:t((function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)}),"parseError"),setInput:t((function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:t((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:t((function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===a.length?this.yylloc.first_column:0)+a[a.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this}),"unput"),more:t((function(){return this._more=!0,this}),"more"),reject:t((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:t((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:t((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:t((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:t((function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"}),"showPosition"),test_match:t((function(t,e){var i,a,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(a=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=a.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:a?a[a.length-1].length-a[a.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var s in n)this[s]=n[s];return!1}return!1}),"test_match"),next:t((function(){if(this.done)return this.EOF;var t,e,i,a;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),s=0;s<n.length;s++)if((i=this._input.match(this.rules[n[s]]))&&(!e||i[0].length>e[0].length)){if(e=i,a=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,n[s])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[a]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:t((function(){var t=this.next();return t||this.lex()}),"lex"),begin:t((function(t){this.conditionStack.push(t)}),"begin"),popState:t((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:t((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:t((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:t((function(t){this.begin(t)}),"pushState"),stateStackSize:t((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:t((function(t,e,i,a){switch(i){case 0:case 1:case 3:break;case 2:return 55;case 4:return this.begin("title"),35;case 5:return this.popState(),"title_value";case 6:return this.begin("acc_title"),37;case 7:return this.popState(),"acc_title_value";case 8:return this.begin("acc_descr"),39;case 9:return this.popState(),"acc_descr_value";case 10:this.begin("acc_descr_multiline");break;case 11:case 23:case 25:case 31:this.popState();break;case 12:return"acc_descr_multiline_value";case 13:return 48;case 14:return 50;case 15:return 49;case 16:return 51;case 17:return 52;case 18:return 53;case 19:return 54;case 20:return 25;case 21:this.begin("md_string");break;case 22:return"MD_STR";case 24:this.begin("string");break;case 26:return"STR";case 27:this.begin("class_name");break;case 28:return this.popState(),47;case 29:return this.begin("point_start"),44;case 30:return this.begin("point_x"),45;case 32:this.popState(),this.begin("point_y");break;case 33:return this.popState(),46;case 34:return 28;case 35:return 4;case 36:return 11;case 37:return 64;case 38:return 10;case 39:case 40:return 65;case 41:return 14;case 42:return 13;case 43:return 67;case 44:return 66;case 45:return 12;case 46:return 8;case 47:return 5;case 48:return 18;case 49:return 56;case 50:return 63;case 51:return 57}}),"anonymous"),rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?: *x-axis *)/i,/^(?: *y-axis *)/i,/^(?: *--+> *)/i,/^(?: *quadrant-1 *)/i,/^(?: *quadrant-2 *)/i,/^(?: *quadrant-3 *)/i,/^(?: *quadrant-4 *)/i,/^(?:classDef\b)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?::::)/i,/^(?:^\w+)/i,/^(?:\s*:\s*\[\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?:\s*\] *)/i,/^(?:\s*,\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?: *quadrantChart *)/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s)/i,/^(?:;)/i,/^(?:[!"#$%&'*+,-.`?\\_/])/i,/^(?:$)/i],conditions:{class_name:{rules:[28],inclusive:!1},point_y:{rules:[33],inclusive:!1},point_x:{rules:[32],inclusive:!1},point_start:{rules:[30,31],inclusive:!1},acc_descr_multiline:{rules:[11,12],inclusive:!1},acc_descr:{rules:[9],inclusive:!1},acc_title:{rules:[7],inclusive:!1},title:{rules:[5],inclusive:!1},md_string:{rules:[22,23],inclusive:!1},string:{rules:[25,26],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,6,8,10,13,14,15,16,17,18,19,20,21,24,27,29,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],inclusive:!0}}}}();function gt(){this.yy={}}return ut.lexer=xt,t(gt,"Parser"),gt.prototype=ut,ut.Parser=gt,new gt}();p.parser=p;var y=p,T=e(),m=class{constructor(){this.classes=new Map,this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData()}static{t(this,"QuadrantBuilder")}getDefaultData(){return{titleText:"",quadrant1Text:"",quadrant2Text:"",quadrant3Text:"",quadrant4Text:"",xAxisLeftText:"",xAxisRightText:"",yAxisBottomText:"",yAxisTopText:"",points:[]}}getDefaultConfig(){return{showXAxis:!0,showYAxis:!0,showTitle:!0,chartHeight:i.quadrantChart?.chartWidth||500,chartWidth:i.quadrantChart?.chartHeight||500,titlePadding:i.quadrantChart?.titlePadding||10,titleFontSize:i.quadrantChart?.titleFontSize||20,quadrantPadding:i.quadrantChart?.quadrantPadding||5,xAxisLabelPadding:i.quadrantChart?.xAxisLabelPadding||5,yAxisLabelPadding:i.quadrantChart?.yAxisLabelPadding||5,xAxisLabelFontSize:i.quadrantChart?.xAxisLabelFontSize||16,yAxisLabelFontSize:i.quadrantChart?.yAxisLabelFontSize||16,quadrantLabelFontSize:i.quadrantChart?.quadrantLabelFontSize||16,quadrantTextTopPadding:i.quadrantChart?.quadrantTextTopPadding||5,pointTextPadding:i.quadrantChart?.pointTextPadding||5,pointLabelFontSize:i.quadrantChart?.pointLabelFontSize||12,pointRadius:i.quadrantChart?.pointRadius||5,xAxisPosition:i.quadrantChart?.xAxisPosition||"top",yAxisPosition:i.quadrantChart?.yAxisPosition||"left",quadrantInternalBorderStrokeWidth:i.quadrantChart?.quadrantInternalBorderStrokeWidth||1,quadrantExternalBorderStrokeWidth:i.quadrantChart?.quadrantExternalBorderStrokeWidth||2}}getDefaultThemeConfig(){return{quadrant1Fill:T.quadrant1Fill,quadrant2Fill:T.quadrant2Fill,quadrant3Fill:T.quadrant3Fill,quadrant4Fill:T.quadrant4Fill,quadrant1TextFill:T.quadrant1TextFill,quadrant2TextFill:T.quadrant2TextFill,quadrant3TextFill:T.quadrant3TextFill,quadrant4TextFill:T.quadrant4TextFill,quadrantPointFill:T.quadrantPointFill,quadrantPointTextFill:T.quadrantPointTextFill,quadrantXAxisTextFill:T.quadrantXAxisTextFill,quadrantYAxisTextFill:T.quadrantYAxisTextFill,quadrantTitleFill:T.quadrantTitleFill,quadrantInternalBorderStrokeFill:T.quadrantInternalBorderStrokeFill,quadrantExternalBorderStrokeFill:T.quadrantExternalBorderStrokeFill}}clear(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData(),this.classes=new Map,a.info("clear called")}setData(t){this.data={...this.data,...t}}addPoints(t){this.data.points=[...t,...this.data.points]}addClass(t,e){this.classes.set(t,e)}setConfig(t){a.trace("setConfig called with: ",t),this.config={...this.config,...t}}setThemeConfig(t){a.trace("setThemeConfig called with: ",t),this.themeConfig={...this.themeConfig,...t}}calculateSpace(t,e,i,a){const n=2*this.config.xAxisLabelPadding+this.config.xAxisLabelFontSize,s={top:"top"===t&&e?n:0,bottom:"bottom"===t&&e?n:0},r=2*this.config.yAxisLabelPadding+this.config.yAxisLabelFontSize,o={left:"left"===this.config.yAxisPosition&&i?r:0,right:"right"===this.config.yAxisPosition&&i?r:0},l=this.config.titleFontSize+2*this.config.titlePadding,h={top:a?l:0},c=this.config.quadrantPadding+o.left,d=this.config.quadrantPadding+s.top+h.top,u=this.config.chartWidth-2*this.config.quadrantPadding-o.left-o.right,x=this.config.chartHeight-2*this.config.quadrantPadding-s.top-s.bottom-h.top;return{xAxisSpace:s,yAxisSpace:o,titleSpace:h,quadrantSpace:{quadrantLeft:c,quadrantTop:d,quadrantWidth:u,quadrantHalfWidth:u/2,quadrantHeight:x,quadrantHalfHeight:x/2}}}getAxisLabels(t,e,i,a){const{quadrantSpace:n,titleSpace:s}=a,{quadrantHalfHeight:r,quadrantHeight:o,quadrantLeft:l,quadrantHalfWidth:h,quadrantTop:c,quadrantWidth:d}=n,u=Boolean(this.data.xAxisRightText),x=Boolean(this.data.yAxisTopText),g=[];return this.data.xAxisLeftText&&e&&g.push({text:this.data.xAxisLeftText,fill:this.themeConfig.quadrantXAxisTextFill,x:l+(u?h/2:0),y:"top"===t?this.config.xAxisLabelPadding+s.top:this.config.xAxisLabelPadding+c+o+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:u?"center":"left",horizontalPos:"top",rotation:0}),this.data.xAxisRightText&&e&&g.push({text:this.data.xAxisRightText,fill:this.themeConfig.quadrantXAxisTextFill,x:l+h+(u?h/2:0),y:"top"===t?this.config.xAxisLabelPadding+s.top:this.config.xAxisLabelPadding+c+o+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:u?"center":"left",horizontalPos:"top",rotation:0}),this.data.yAxisBottomText&&i&&g.push({text:this.data.yAxisBottomText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+l+d+this.config.quadrantPadding,y:c+o-(x?r/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:x?"center":"left",horizontalPos:"top",rotation:-90}),this.data.yAxisTopText&&i&&g.push({text:this.data.yAxisTopText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+l+d+this.config.quadrantPadding,y:c+r-(x?r/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:x?"center":"left",horizontalPos:"top",rotation:-90}),g}getQuadrants(t){const{quadrantSpace:e}=t,{quadrantHalfHeight:i,quadrantLeft:a,quadrantHalfWidth:n,quadrantTop:s}=e,r=[{text:{text:this.data.quadrant1Text,fill:this.themeConfig.quadrant1TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a+n,y:s,width:n,height:i,fill:this.themeConfig.quadrant1Fill},{text:{text:this.data.quadrant2Text,fill:this.themeConfig.quadrant2TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a,y:s,width:n,height:i,fill:this.themeConfig.quadrant2Fill},{text:{text:this.data.quadrant3Text,fill:this.themeConfig.quadrant3TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a,y:s+i,width:n,height:i,fill:this.themeConfig.quadrant3Fill},{text:{text:this.data.quadrant4Text,fill:this.themeConfig.quadrant4TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a+n,y:s+i,width:n,height:i,fill:this.themeConfig.quadrant4Fill}];for(const t of r)t.text.x=t.x+t.width/2,0===this.data.points.length?(t.text.y=t.y+t.height/2,t.text.horizontalPos="middle"):(t.text.y=t.y+this.config.quadrantTextTopPadding,t.text.horizontalPos="top");return r}getQuadrantPoints(t){const{quadrantSpace:e}=t,{quadrantHeight:i,quadrantLeft:a,quadrantTop:n,quadrantWidth:s}=e,r=f().domain([0,1]).range([a,s+a]),o=f().domain([0,1]).range([i+n,n]);return this.data.points.map((t=>{const e=this.classes.get(t.className);e&&(t={...e,...t});return{x:r(t.x),y:o(t.y),fill:t.color??this.themeConfig.quadrantPointFill,radius:t.radius??this.config.pointRadius,text:{text:t.text,fill:this.themeConfig.quadrantPointTextFill,x:r(t.x),y:o(t.y)+this.config.pointTextPadding,verticalPos:"center",horizontalPos:"top",fontSize:this.config.pointLabelFontSize,rotation:0},strokeColor:t.strokeColor??this.themeConfig.quadrantPointFill,strokeWidth:t.strokeWidth??"0px"}}))}getBorders(t){const e=this.config.quadrantExternalBorderStrokeWidth/2,{quadrantSpace:i}=t,{quadrantHalfHeight:a,quadrantHeight:n,quadrantLeft:s,quadrantHalfWidth:r,quadrantTop:o,quadrantWidth:l}=i;return[{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:s-e,y1:o,x2:s+l+e,y2:o},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:s+l,y1:o+e,x2:s+l,y2:o+n-e},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:s-e,y1:o+n,x2:s+l+e,y2:o+n},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:s,y1:o+e,x2:s,y2:o+n-e},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:s+r,y1:o+e,x2:s+r,y2:o+n-e},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:s+e,y1:o+a,x2:s+l-e,y2:o+a}]}getTitle(t){if(t)return{text:this.data.titleText,fill:this.themeConfig.quadrantTitleFill,fontSize:this.config.titleFontSize,horizontalPos:"top",verticalPos:"center",rotation:0,y:this.config.titlePadding,x:this.config.chartWidth/2}}build(){const t=this.config.showXAxis&&!(!this.data.xAxisLeftText&&!this.data.xAxisRightText),e=this.config.showYAxis&&!(!this.data.yAxisTopText&&!this.data.yAxisBottomText),i=this.config.showTitle&&!!this.data.titleText,a=this.data.points.length>0?"bottom":this.config.xAxisPosition,n=this.calculateSpace(a,t,e,i);return{points:this.getQuadrantPoints(n),quadrants:this.getQuadrants(n),axisLabels:this.getAxisLabels(a,t,e,n),borderLines:this.getBorders(n),title:this.getTitle(i)}}},q=class extends Error{static{t(this,"InvalidStyleError")}constructor(t,e,i){super(`value for ${t} ${e} is invalid, please use a valid ${i}`),this.name="InvalidStyleError"}};function A(t){return!/^#?([\dA-Fa-f]{6}|[\dA-Fa-f]{3})$/.test(t)}function _(t){return!/^\d+$/.test(t)}function b(t){return!/^\d+px$/.test(t)}t(A,"validateHexCode"),t(_,"validateNumber"),t(b,"validateSizeInPixels");var S=n();function k(t){return s(t.trim(),S)}t(k,"textSanitizer");var F=new m;function P(t){F.setData({quadrant1Text:k(t.text)})}function C(t){F.setData({quadrant2Text:k(t.text)})}function L(t){F.setData({quadrant3Text:k(t.text)})}function v(t){F.setData({quadrant4Text:k(t.text)})}function E(t){F.setData({xAxisLeftText:k(t.text)})}function D(t){F.setData({xAxisRightText:k(t.text)})}function z(t){F.setData({yAxisTopText:k(t.text)})}function I(t){F.setData({yAxisBottomText:k(t.text)})}function w(t){const e={};for(const i of t){const[t,a]=i.trim().split(/\s*:\s*/);if("radius"===t){if(_(a))throw new q(t,a,"number");e.radius=parseInt(a)}else if("color"===t){if(A(a))throw new q(t,a,"hex code");e.color=a}else if("stroke-color"===t){if(A(a))throw new q(t,a,"hex code");e.strokeColor=a}else{if("stroke-width"!==t)throw new Error(`style named ${t} is not supported.`);if(b(a))throw new q(t,a,"number of pixels (eg. 10px)");e.strokeWidth=a}}return e}function N(t,e,i,a,n){const s=w(n);F.addPoints([{x:i,y:a,text:k(t.text),className:e,...s}])}function B(t,e){F.addClass(t,w(e))}function W(t){F.setConfig({chartWidth:t})}function R(t){F.setConfig({chartHeight:t})}function $(){const t=n(),{themeVariables:e,quadrantChart:i}=t;return i&&F.setConfig(i),F.setThemeConfig({quadrant1Fill:e.quadrant1Fill,quadrant2Fill:e.quadrant2Fill,quadrant3Fill:e.quadrant3Fill,quadrant4Fill:e.quadrant4Fill,quadrant1TextFill:e.quadrant1TextFill,quadrant2TextFill:e.quadrant2TextFill,quadrant3TextFill:e.quadrant3TextFill,quadrant4TextFill:e.quadrant4TextFill,quadrantPointFill:e.quadrantPointFill,quadrantPointTextFill:e.quadrantPointTextFill,quadrantXAxisTextFill:e.quadrantXAxisTextFill,quadrantYAxisTextFill:e.quadrantYAxisTextFill,quadrantExternalBorderStrokeFill:e.quadrantExternalBorderStrokeFill,quadrantInternalBorderStrokeFill:e.quadrantInternalBorderStrokeFill,quadrantTitleFill:e.quadrantTitleFill}),F.setData({titleText:r()}),F.build()}t(P,"setQuadrant1Text"),t(C,"setQuadrant2Text"),t(L,"setQuadrant3Text"),t(v,"setQuadrant4Text"),t(E,"setXAxisLeftText"),t(D,"setXAxisRightText"),t(z,"setYAxisTopText"),t(I,"setYAxisBottomText"),t(w,"parseStyles"),t(N,"addPoint"),t(B,"addClass"),t(W,"setWidth"),t(R,"setHeight"),t($,"getQuadrantData");var U={parser:y,db:{setWidth:W,setHeight:R,setQuadrant1Text:P,setQuadrant2Text:C,setQuadrant3Text:L,setQuadrant4Text:v,setXAxisLeftText:E,setXAxisRightText:D,setYAxisTopText:z,setYAxisBottomText:I,parseStyles:w,addPoint:N,addClass:B,getQuadrantData:$,clear:t((function(){F.clear(),u()}),"clear"),setAccTitle:o,getAccTitle:l,setDiagramTitle:h,getDiagramTitle:r,getAccDescription:c,setAccDescription:d},renderer:{draw:t(((e,i,s,r)=>{function o(t){return"top"===t?"hanging":"middle"}function l(t){return"left"===t?"start":"middle"}function h(t){return`translate(${t.x}, ${t.y}) rotate(${t.rotation||0})`}t(o,"getDominantBaseLine"),t(l,"getTextAnchor"),t(h,"getTransformation");const c=n();a.debug("Rendering quadrant chart\n"+e);const d=c.securityLevel;let u;"sandbox"===d&&(u=x("#i"+i));const f=x("sandbox"===d?u.nodes()[0].contentDocument.body:"body").select(`[id="${i}"]`),p=f.append("g").attr("class","main"),y=c.quadrantChart?.chartWidth??500,T=c.quadrantChart?.chartHeight??500;g(f,T,y,c.quadrantChart?.useMaxWidth??!0),f.attr("viewBox","0 0 "+y+" "+T),r.db.setHeight(T),r.db.setWidth(y);const m=r.db.getQuadrantData(),q=p.append("g").attr("class","quadrants"),A=p.append("g").attr("class","border"),_=p.append("g").attr("class","data-points"),b=p.append("g").attr("class","labels"),S=p.append("g").attr("class","title");m.title&&S.append("text").attr("x",0).attr("y",0).attr("fill",m.title.fill).attr("font-size",m.title.fontSize).attr("dominant-baseline",o(m.title.horizontalPos)).attr("text-anchor",l(m.title.verticalPos)).attr("transform",h(m.title)).text(m.title.text),m.borderLines&&A.selectAll("line").data(m.borderLines).enter().append("line").attr("x1",(t=>t.x1)).attr("y1",(t=>t.y1)).attr("x2",(t=>t.x2)).attr("y2",(t=>t.y2)).style("stroke",(t=>t.strokeFill)).style("stroke-width",(t=>t.strokeWidth));const k=q.selectAll("g.quadrant").data(m.quadrants).enter().append("g").attr("class","quadrant");k.append("rect").attr("x",(t=>t.x)).attr("y",(t=>t.y)).attr("width",(t=>t.width)).attr("height",(t=>t.height)).attr("fill",(t=>t.fill)),k.append("text").attr("x",0).attr("y",0).attr("fill",(t=>t.text.fill)).attr("font-size",(t=>t.text.fontSize)).attr("dominant-baseline",(t=>o(t.text.horizontalPos))).attr("text-anchor",(t=>l(t.text.verticalPos))).attr("transform",(t=>h(t.text))).text((t=>t.text.text));b.selectAll("g.label").data(m.axisLabels).enter().append("g").attr("class","label").append("text").attr("x",0).attr("y",0).text((t=>t.text)).attr("fill",(t=>t.fill)).attr("font-size",(t=>t.fontSize)).attr("dominant-baseline",(t=>o(t.horizontalPos))).attr("text-anchor",(t=>l(t.verticalPos))).attr("transform",(t=>h(t)));const F=_.selectAll("g.data-point").data(m.points).enter().append("g").attr("class","data-point");F.append("circle").attr("cx",(t=>t.x)).attr("cy",(t=>t.y)).attr("r",(t=>t.radius)).attr("fill",(t=>t.fill)).attr("stroke",(t=>t.strokeColor)).attr("stroke-width",(t=>t.strokeWidth)),F.append("text").attr("x",0).attr("y",0).text((t=>t.text.text)).attr("fill",(t=>t.text.fill)).attr("font-size",(t=>t.text.fontSize)).attr("dominant-baseline",(t=>o(t.text.horizontalPos))).attr("text-anchor",(t=>l(t.text.verticalPos))).attr("transform",(t=>h(t.text)))}),"draw")},styles:t((()=>""),"styles")};export{U as diagram};