import{_ as t,d as n,g as e,s as i,b as s,c as r,q as o,p as a,v as c,e as l,o as h,j as u,V as f}from"./main-557e6835.js";import{o as y}from"./ordinal-5efe1182.js";import"./init-cf76ae07.js";var d=function(t){for(var n=t.length/6|0,e=new Array(n),i=0;i<n;)e[i]="#"+t.slice(6*i,6*++i);return e}("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");function p(t,n){let e;if(void 0===n)for(const n of t)null!=n&&(e<n||void 0===e&&n>=n)&&(e=n);else{let i=-1;for(let s of t)null!=(s=n(s,++i,t))&&(e<s||void 0===e&&s>=s)&&(e=s)}return e}function g(t,n){let e;if(void 0===n)for(const n of t)null!=n&&(e>n||void 0===e&&n>=n)&&(e=n);else{let i=-1;for(let s of t)null!=(s=n(s,++i,t))&&(e>s||void 0===e&&s>=s)&&(e=s)}return e}function _(t,n){let e=0;if(void 0===n)for(let n of t)(n=+n)&&(e+=n);else{let i=-1;for(let s of t)(s=+n(s,++i,t))&&(e+=s)}return e}function x(t){return t.target.depth}function k(t,n){return t.sourceLinks.length?t.depth:n-1}function m(t){return function(){return t}}function v(t,n){return w(t.source,n.source)||t.index-n.index}function b(t,n){return w(t.target,n.target)||t.index-n.index}function w(t,n){return t.y0-n.y0}function S(t){return t.value}function E(t){return t.index}function L(t){return t.nodes}function A(t){return t.links}function M(t,n){const e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function I({nodes:t}){for(const n of t){let t=n.y0,e=t;for(const e of n.sourceLinks)e.y0=t+e.width/2,t+=e.width;for(const t of n.targetLinks)t.y1=e+t.width/2,e+=t.width}}function T(){let t,n,e,i=0,s=0,r=1,o=1,a=24,c=8,l=E,h=k,u=L,f=A,y=6;function d(){const d={nodes:u.apply(null,arguments),links:f.apply(null,arguments)};return function({nodes:t,links:n}){for(const[n,e]of t.entries())e.index=n,e.sourceLinks=[],e.targetLinks=[];const i=new Map(t.map(((n,e)=>[l(n,e,t),n])));for(const[t,e]of n.entries()){e.index=t;let{source:n,target:s}=e;"object"!=typeof n&&(n=e.source=M(i,n)),"object"!=typeof s&&(s=e.target=M(i,s)),n.sourceLinks.push(e),s.targetLinks.push(e)}if(null!=e)for(const{sourceLinks:n,targetLinks:i}of t)n.sort(e),i.sort(e)}(d),function({nodes:t}){for(const n of t)n.value=void 0===n.fixedValue?Math.max(_(n.sourceLinks,S),_(n.targetLinks,S)):n.fixedValue}(d),function({nodes:t}){const n=t.length;let e=new Set(t),i=new Set,s=0;for(;e.size;){for(const t of e){t.depth=s;for(const{target:n}of t.sourceLinks)i.add(n)}if(++s>n)throw new Error("circular link");e=i,i=new Set}}(d),function({nodes:t}){const n=t.length;let e=new Set(t),i=new Set,s=0;for(;e.size;){for(const t of e){t.height=s;for(const{source:n}of t.targetLinks)i.add(n)}if(++s>n)throw new Error("circular link");e=i,i=new Set}}(d),function(e){const l=function({nodes:t}){const e=p(t,(t=>t.depth))+1,s=(r-i-a)/(e-1),o=new Array(e);for(const n of t){const t=Math.max(0,Math.min(e-1,Math.floor(h.call(null,n,e))));n.layer=t,n.x0=i+t*s,n.x1=n.x0+a,o[t]?o[t].push(n):o[t]=[n]}if(n)for(const t of o)t.sort(n);return o}(e);t=Math.min(c,(o-s)/(p(l,(t=>t.length))-1)),function(n){const e=g(n,(n=>(o-s-(n.length-1)*t)/_(n,S)));for(const i of n){let n=s;for(const s of i){s.y0=n,s.y1=n+s.value*e,n=s.y1+t;for(const t of s.sourceLinks)t.width=t.value*e}n=(o-n+t)/(i.length+1);for(let t=0;t<i.length;++t){const e=i[t];e.y0+=n*(t+1),e.y1+=n*(t+1)}D(i)}}(l);for(let t=0;t<y;++t){const n=Math.pow(.99,t),e=Math.max(1-n,(t+1)/y);T(l,n,e),x(l,n,e)}}(d),I(d),d}function x(t,e,i){for(let s=1,r=t.length;s<r;++s){const r=t[s];for(const t of r){let n=0,i=0;for(const{source:e,value:s}of t.targetLinks){let r=s*(t.layer-e.layer);n+=j(e,t)*r,i+=r}if(!(i>0))continue;let s=(n/i-t.y0)*e;t.y0+=s,t.y1+=s,C(t)}void 0===n&&r.sort(w),P(r,i)}}function T(t,e,i){for(let s=t.length-2;s>=0;--s){const r=t[s];for(const t of r){let n=0,i=0;for(const{target:e,value:s}of t.sourceLinks){let r=s*(e.layer-t.layer);n+=$(t,e)*r,i+=r}if(!(i>0))continue;let s=(n/i-t.y0)*e;t.y0+=s,t.y1+=s,C(t)}void 0===n&&r.sort(w),P(r,i)}}function P(n,e){const i=n.length>>1,r=n[i];O(n,r.y0-t,i-1,e),N(n,r.y1+t,i+1,e),O(n,o,n.length-1,e),N(n,s,0,e)}function N(n,e,i,s){for(;i<n.length;++i){const r=n[i],o=(e-r.y0)*s;o>1e-6&&(r.y0+=o,r.y1+=o),e=r.y1+t}}function O(n,e,i,s){for(;i>=0;--i){const r=n[i],o=(r.y1-e)*s;o>1e-6&&(r.y0-=o,r.y1-=o),e=r.y0-t}}function C({sourceLinks:t,targetLinks:n}){if(void 0===e){for(const{source:{sourceLinks:t}}of n)t.sort(b);for(const{target:{targetLinks:n}}of t)n.sort(v)}}function D(t){if(void 0===e)for(const{sourceLinks:n,targetLinks:e}of t)n.sort(b),e.sort(v)}function j(n,e){let i=n.y0-(n.sourceLinks.length-1)*t/2;for(const{target:s,width:r}of n.sourceLinks){if(s===e)break;i+=r+t}for(const{source:t,width:s}of e.targetLinks){if(t===n)break;i-=s}return i}function $(n,e){let i=e.y0-(e.targetLinks.length-1)*t/2;for(const{source:s,width:r}of e.targetLinks){if(s===n)break;i+=r+t}for(const{target:t,width:s}of n.sourceLinks){if(t===e)break;i-=s}return i}return d.update=function(t){return I(t),t},d.nodeId=function(t){return arguments.length?(l="function"==typeof t?t:m(t),d):l},d.nodeAlign=function(t){return arguments.length?(h="function"==typeof t?t:m(t),d):h},d.nodeSort=function(t){return arguments.length?(n=t,d):n},d.nodeWidth=function(t){return arguments.length?(a=+t,d):a},d.nodePadding=function(n){return arguments.length?(c=t=+n,d):c},d.nodes=function(t){return arguments.length?(u="function"==typeof t?t:m(t),d):u},d.links=function(t){return arguments.length?(f="function"==typeof t?t:m(t),d):f},d.linkSort=function(t){return arguments.length?(e=t,d):e},d.size=function(t){return arguments.length?(i=s=0,r=+t[0],o=+t[1],d):[r-i,o-s]},d.extent=function(t){return arguments.length?(i=+t[0][0],r=+t[1][0],s=+t[0][1],o=+t[1][1],d):[[i,s],[r,o]]},d.iterations=function(t){return arguments.length?(y=+t,d):y},d}var P=Math.PI,N=2*P,O=1e-6,C=N-O;function D(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function j(){return new D}function $(t){return function(){return t}}function z(t){return t[0]}function F(t){return t[1]}D.prototype=j.prototype={constructor:D,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,i){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+i)},bezierCurveTo:function(t,n,e,i,s,r){this._+="C"+ +t+","+ +n+","+ +e+","+ +i+","+(this._x1=+s)+","+(this._y1=+r)},arcTo:function(t,n,e,i,s){t=+t,n=+n,e=+e,i=+i,s=+s;var r=this._x1,o=this._y1,a=e-t,c=i-n,l=r-t,h=o-n,u=l*l+h*h;if(s<0)throw new Error("negative radius: "+s);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(u>O)if(Math.abs(h*a-c*l)>O&&s){var f=e-r,y=i-o,d=a*a+c*c,p=f*f+y*y,g=Math.sqrt(d),_=Math.sqrt(u),x=s*Math.tan((P-Math.acos((d+u-p)/(2*g*_)))/2),k=x/_,m=x/g;Math.abs(k-1)>O&&(this._+="L"+(t+k*l)+","+(n+k*h)),this._+="A"+s+","+s+",0,0,"+ +(h*f>l*y)+","+(this._x1=t+m*a)+","+(this._y1=n+m*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,i,s,r){t=+t,n=+n,r=!!r;var o=(e=+e)*Math.cos(i),a=e*Math.sin(i),c=t+o,l=n+a,h=1^r,u=r?i-s:s-i;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+c+","+l:(Math.abs(this._x1-c)>O||Math.abs(this._y1-l)>O)&&(this._+="L"+c+","+l),e&&(u<0&&(u=u%N+N),u>C?this._+="A"+e+","+e+",0,1,"+h+","+(t-o)+","+(n-a)+"A"+e+","+e+",0,1,"+h+","+(this._x1=c)+","+(this._y1=l):u>O&&(this._+="A"+e+","+e+",0,"+ +(u>=P)+","+h+","+(this._x1=t+e*Math.cos(s))+","+(this._y1=n+e*Math.sin(s))))},rect:function(t,n,e,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +i+"h"+-e+"Z"},toString:function(){return this._}};var U=Array.prototype.slice;function W(t){return t.source}function G(t){return t.target}function V(t,n,e,i,s){t.moveTo(n,e),t.bezierCurveTo(n=(n+i)/2,e,n,s,i,s)}function q(){return function(t){var n=W,e=G,i=z,s=F,r=null;function o(){var o,a=U.call(arguments),c=n.apply(this,a),l=e.apply(this,a);if(r||(r=o=j()),t(r,+i.apply(this,(a[0]=c,a)),+s.apply(this,a),+i.apply(this,(a[0]=l,a)),+s.apply(this,a)),o)return r=null,o+""||null}return o.source=function(t){return arguments.length?(n=t,o):n},o.target=function(t){return arguments.length?(e=t,o):e},o.x=function(t){return arguments.length?(i="function"==typeof t?t:$(+t),o):i},o.y=function(t){return arguments.length?(s="function"==typeof t?t:$(+t),o):s},o.context=function(t){return arguments.length?(r=null==t?null:t,o):r},o}(V)}function X(t){return[t.source.x1,t.y0]}function Q(t){return[t.target.x0,t.y1]}var R=function(){var n=t((function(t,n,e,i){for(e=e||{},i=t.length;i--;e[t[i]]=n);return e}),"o"),e=[1,9],i=[1,10],s=[1,5,10,12],r={trace:t((function(){}),"trace"),yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:t((function(t,n,e,i,s,r,o){var a=r.length-1;switch(s){case 7:const t=i.findOrCreateNode(r[a-4].trim().replaceAll('""','"')),n=i.findOrCreateNode(r[a-2].trim().replaceAll('""','"')),e=parseFloat(r[a].trim());i.addLink(t,n,e);break;case 8:case 9:case 11:this.$=r[a];break;case 10:this.$=r[a-1]}}),"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:e,20:i},{1:[2,6],7:11,10:[1,12]},n(i,[2,4],{9:13,5:[1,14]}),{12:[1,15]},n(s,[2,8]),n(s,[2,9]),{19:[1,16]},n(s,[2,11]),{1:[2,1]},{1:[2,5]},n(i,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:e,20:i},{15:18,16:7,17:8,18:e,20:i},{18:[1,19]},n(i,[2,3]),{12:[1,20]},n(s,[2,10]),{15:21,16:7,17:8,18:e,20:i},n([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:t((function(t,n){if(!n.recoverable){var e=new Error(t);throw e.hash=n,e}this.trace(t)}),"parseError"),parse:t((function(n){var e=this,i=[0],s=[],r=[null],o=[],a=this.table,c="",l=0,h=0,u=o.slice.call(arguments,1),f=Object.create(this.lexer),y={yy:{}};for(var d in this.yy)Object.prototype.hasOwnProperty.call(this.yy,d)&&(y.yy[d]=this.yy[d]);f.setInput(n,y.yy),y.yy.lexer=f,y.yy.parser=this,void 0===f.yylloc&&(f.yylloc={});var p=f.yylloc;o.push(p);var g=f.options&&f.options.ranges;function _(){var t;return"number"!=typeof(t=s.pop()||f.lex()||1)&&(t instanceof Array&&(t=(s=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,t((function(t){i.length=i.length-2*t,r.length=r.length-t,o.length=o.length-t}),"popStack"),t(_,"lex");for(var x,k,m,v,b,w,S,E,L={};;){if(k=i[i.length-1],this.defaultActions[k]?m=this.defaultActions[k]:(null==x&&(x=_()),m=a[k]&&a[k][x]),void 0===m||!m.length||!m[0]){var A="";for(b in E=[],a[k])this.terminals_[b]&&b>2&&E.push("'"+this.terminals_[b]+"'");A=f.showPosition?"Parse error on line "+(l+1)+":\n"+f.showPosition()+"\nExpecting "+E.join(", ")+", got '"+(this.terminals_[x]||x)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==x?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(A,{text:f.match,token:this.terminals_[x]||x,line:f.yylineno,loc:p,expected:E})}if(m[0]instanceof Array&&m.length>1)throw new Error("Parse Error: multiple actions possible at state: "+k+", token: "+x);switch(m[0]){case 1:i.push(x),r.push(f.yytext),o.push(f.yylloc),i.push(m[1]),x=null,h=f.yyleng,c=f.yytext,l=f.yylineno,p=f.yylloc;break;case 2:if(w=this.productions_[m[1]][1],L.$=r[r.length-w],L._$={first_line:o[o.length-(w||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(w||1)].first_column,last_column:o[o.length-1].last_column},g&&(L._$.range=[o[o.length-(w||1)].range[0],o[o.length-1].range[1]]),void 0!==(v=this.performAction.apply(L,[c,h,l,y.yy,m[1],r,o].concat(u))))return v;w&&(i=i.slice(0,-1*w*2),r=r.slice(0,-1*w),o=o.slice(0,-1*w)),i.push(this.productions_[m[1]][0]),r.push(L.$),o.push(L._$),S=a[i[i.length-2]][i[i.length-1]],i.push(S);break;case 3:return!0}}return!0}),"parse")},o=function(){return{EOF:1,parseError:t((function(t,n){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,n)}),"parseError"),setInput:t((function(t,n){return this.yy=n||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:t((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:t((function(t){var n=t.length,e=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),e.length-1&&(this.yylineno-=e.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:e?(e.length===i.length?this.yylloc.first_column:0)+i[i.length-e.length].length-e[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-n]),this.yyleng=this.yytext.length,this}),"unput"),more:t((function(){return this._more=!0,this}),"more"),reject:t((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:t((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:t((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:t((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:t((function(){var t=this.pastInput(),n=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+n+"^"}),"showPosition"),test_match:t((function(t,n){var e,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e)return e;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1}),"test_match"),next:t((function(){if(this.done)return this.EOF;var t,n,e,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((e=this._input.match(this.rules[s[r]]))&&(!n||e[0].length>n[0].length)){if(n=e,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(e,s[r])))return t;if(this._backtrack){n=!1;continue}return!1}if(!this.options.flex)break}return n?!1!==(t=this.test_match(n,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:t((function(){var t=this.next();return t||this.lex()}),"lex"),begin:t((function(t){this.conditionStack.push(t)}),"begin"),popState:t((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:t((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:t((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:t((function(t){this.begin(t)}),"pushState"),stateStackSize:t((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:t((function(t,n,e,i){switch(e){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}}),"anonymous"),rules:[/^(?:sankey-beta\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}}}();function a(){this.yy={}}return r.lexer=o,t(a,"Parser"),a.prototype=r,r.Parser=a,new a}();R.parser=R;var Y=R,B=[],K=[],Z=new Map,H=t((()=>{B=[],K=[],Z=new Map,c()}),"clear"),J=class{constructor(t,n,e=0){this.source=t,this.target=n,this.value=e}static{t(this,"SankeyLink")}},tt=t(((t,n,e)=>{B.push(new J(t,n,e))}),"addLink"),nt=class{constructor(t){this.ID=t}static{t(this,"SankeyNode")}},et=t((t=>{t=l.sanitizeText(t,n());let e=Z.get(t);return void 0===e&&(e=new nt(t),Z.set(t,e),K.push(e)),e}),"findOrCreateNode"),it=t((()=>K),"getNodes"),st=t((()=>B),"getLinks"),rt=t((()=>({nodes:K.map((t=>({id:t.ID}))),links:B.map((t=>({source:t.source.ID,target:t.target.ID,value:t.value})))})),"getGraph"),ot={nodesMap:Z,getConfig:t((()=>n().sankey),"getConfig"),getNodes:it,getLinks:st,getGraph:rt,addLink:tt,findOrCreateNode:et,getAccTitle:e,setAccTitle:i,getAccDescription:s,setAccDescription:r,getDiagramTitle:o,setDiagramTitle:a,clear:H},at=class n{static{t(this,"Uid")}static{this.count=0}static next(t){return new n(t+ ++n.count)}constructor(t){this.id=t,this.href=`#${t}`}toString(){return"url("+this.href+")"}},ct={left:function(t){return t.depth},right:function(t,n){return n-1-t.height},center:function(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?g(t.sourceLinks,x)-1:0},justify:k},lt=t((function(e,i,s,r){const{securityLevel:o,sankey:a}=n(),c=h.sankey;let l;"sandbox"===o&&(l=u("#i"+i));const p=u("sandbox"===o?l.nodes()[0].contentDocument.body:"body"),g="sandbox"===o?p.select(`[id="${i}"]`):u(`[id="${i}"]`),_=a?.width??c.width,x=a?.height??c.width,k=a?.useMaxWidth??c.useMaxWidth,m=a?.nodeAlignment??c.nodeAlignment,v=a?.prefix??c.prefix,b=a?.suffix??c.suffix,w=a?.showValues??c.showValues,S=r.db.getGraph(),E=ct[m];T().nodeId((t=>t.id)).nodeWidth(10).nodePadding(10+(w?15:0)).nodeAlign(E).extent([[0,0],[_,x]])(S);const L=y(d);g.append("g").attr("class","nodes").selectAll(".node").data(S.nodes).join("g").attr("class","node").attr("id",(t=>(t.uid=at.next("node-")).id)).attr("transform",(function(t){return"translate("+t.x0+","+t.y0+")"})).attr("x",(t=>t.x0)).attr("y",(t=>t.y0)).append("rect").attr("height",(t=>t.y1-t.y0)).attr("width",(t=>t.x1-t.x0)).attr("fill",(t=>L(t.id)));const A=t((({id:t,value:n})=>w?`${t}\n${v}${Math.round(100*n)/100}${b}`:t),"getText");g.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(S.nodes).join("text").attr("x",(t=>t.x0<_/2?t.x1+6:t.x0-6)).attr("y",(t=>(t.y1+t.y0)/2)).attr("dy",(w?"0":"0.35")+"em").attr("text-anchor",(t=>t.x0<_/2?"start":"end")).text(A);const M=g.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(S.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),I=a?.linkColor??"gradient";if("gradient"===I){const t=M.append("linearGradient").attr("id",(t=>(t.uid=at.next("linearGradient-")).id)).attr("gradientUnits","userSpaceOnUse").attr("x1",(t=>t.source.x1)).attr("x2",(t=>t.target.x0));t.append("stop").attr("offset","0%").attr("stop-color",(t=>L(t.source.id))),t.append("stop").attr("offset","100%").attr("stop-color",(t=>L(t.target.id)))}let P;switch(I){case"gradient":P=t((t=>t.uid),"coloring");break;case"source":P=t((t=>L(t.source.id)),"coloring");break;case"target":P=t((t=>L(t.target.id)),"coloring");break;default:P=I}M.append("path").attr("d",q().source(X).target(Q)).attr("stroke",P).attr("stroke-width",(t=>Math.max(1,t.width))),f(void 0,g,0,k)}),"draw"),ht={draw:lt},ut=t((t=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,"\n").trim()),"prepareTextForParsing"),ft=Y.parse.bind(Y);Y.parse=t=>ft(ut(t));var yt={parser:Y,db:ot,renderer:ht};export{yt as diagram};
