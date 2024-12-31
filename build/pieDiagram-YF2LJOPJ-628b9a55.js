import{p as t}from"./chunk-TMUBEWPD-1720c25c.js";import{aa as e,a2 as a,aF as n,B as i,p as r,q as o,s,g as l,c,b as p,_ as d,l as u,v as f,d as g,C as h,G as m,O as y,k as x}from"./main-77371978.js";import{p as w}from"./mermaid-parser.core-54ad8a9f.js";import{d as S}from"./arc-ddd590c6.js";import{o as $}from"./ordinal-5efe1182.js";import"./_baseUniq-6462737e.js";import"./_basePickBy-1032dd32.js";import"./clone-d7d3919c.js";import"./init-cf76ae07.js";function T(t,e){return e<t?-1:e>t?1:e>=t?0:NaN}function A(t){return t}var D=i.pie,v={sections:new Map,showData:!1,config:D},C=v.sections,b=v.showData,k=structuredClone(D),M={getConfig:d((()=>structuredClone(k)),"getConfig"),clear:d((()=>{C=new Map,b=v.showData,f()}),"clear"),setDiagramTitle:r,getDiagramTitle:o,setAccTitle:s,getAccTitle:l,setAccDescription:c,getAccDescription:p,addSection:d((({label:t,value:e})=>{C.has(t)||(C.set(t,e),u.debug(`added new section: ${t}, with value: ${e}`))}),"addSection"),getSections:d((()=>C),"getSections"),setShowData:d((t=>{b=t}),"setShowData"),getShowData:d((()=>b),"getShowData")},j=d(((e,a)=>{t(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)}),"populateDb"),O={parse:d((async t=>{const e=await w("pie",t);u.debug(e),j(e,M)}),"parse")},z=d((t=>`\n  .pieCircle{\n    stroke: ${t.pieStrokeColor};\n    stroke-width : ${t.pieStrokeWidth};\n    opacity : ${t.pieOpacity};\n  }\n  .pieOuterCircle{\n    stroke: ${t.pieOuterStrokeColor};\n    stroke-width: ${t.pieOuterStrokeWidth};\n    fill: none;\n  }\n  .pieTitleText {\n    text-anchor: middle;\n    font-size: ${t.pieTitleTextSize};\n    fill: ${t.pieTitleTextColor};\n    font-family: ${t.fontFamily};\n  }\n  .slice {\n    font-family: ${t.fontFamily};\n    fill: ${t.pieSectionTextColor};\n    font-size:${t.pieSectionTextSize};\n    // fill: white;\n  }\n  .legend text {\n    fill: ${t.pieLegendTextColor};\n    font-family: ${t.fontFamily};\n    font-size: ${t.pieLegendTextSize};\n  }\n`),"getStyles"),F=d((t=>{const i=[...t.entries()].map((t=>({label:t[0],value:t[1]}))).sort(((t,e)=>e.value-t.value));return function(){var t=A,i=T,r=null,o=e(0),s=e(a),l=e(0);function c(e){var c,p,d,u,f,g=(e=n(e)).length,h=0,m=new Array(g),y=new Array(g),x=+o.apply(this,arguments),w=Math.min(a,Math.max(-a,s.apply(this,arguments)-x)),S=Math.min(Math.abs(w)/g,l.apply(this,arguments)),$=S*(w<0?-1:1);for(c=0;c<g;++c)(f=y[m[c]=c]=+t(e[c],c,e))>0&&(h+=f);for(null!=i?m.sort((function(t,e){return i(y[t],y[e])})):null!=r&&m.sort((function(t,a){return r(e[t],e[a])})),c=0,d=h?(w-g*$)/h:0;c<g;++c,x=u)p=m[c],u=x+((f=y[p])>0?f*d:0)+$,y[p]={data:e[p],index:c,value:f,startAngle:x,endAngle:u,padAngle:S};return y}return c.value=function(a){return arguments.length?(t="function"==typeof a?a:e(+a),c):t},c.sortValues=function(t){return arguments.length?(i=t,r=null,c):i},c.sort=function(t){return arguments.length?(r=t,i=null,c):r},c.startAngle=function(t){return arguments.length?(o="function"==typeof t?t:e(+t),c):o},c.endAngle=function(t){return arguments.length?(s="function"==typeof t?t:e(+t),c):s},c.padAngle=function(t){return arguments.length?(l="function"==typeof t?t:e(+t),c):l},c}().value((t=>t.value))(i)}),"createPieArcs"),B={parser:O,db:M,renderer:{draw:d(((t,e,a,n)=>{u.debug("rendering pie chart\n"+t);const i=n.db,r=g(),o=h(i.getConfig(),r.pie),s=18,l=450,c=l,p=m(e),d=p.append("g");d.attr("transform","translate(225,225)");const{themeVariables:f}=r;let[w]=y(f.pieOuterStrokeWidth);w??=2;const T=o.textPosition,A=Math.min(c,l)/2-40,D=S().innerRadius(0).outerRadius(A),v=S().innerRadius(A*T).outerRadius(A*T);d.append("circle").attr("cx",0).attr("cy",0).attr("r",A+w/2).attr("class","pieOuterCircle");const C=i.getSections(),b=F(C),k=[f.pie1,f.pie2,f.pie3,f.pie4,f.pie5,f.pie6,f.pie7,f.pie8,f.pie9,f.pie10,f.pie11,f.pie12],M=$(k);d.selectAll("mySlices").data(b).enter().append("path").attr("d",D).attr("fill",(t=>M(t.data.label))).attr("class","pieCircle");let j=0;C.forEach((t=>{j+=t})),d.selectAll("mySlices").data(b).enter().append("text").text((t=>(t.data.value/j*100).toFixed(0)+"%")).attr("transform",(t=>"translate("+v.centroid(t)+")")).style("text-anchor","middle").attr("class","slice"),d.append("text").text(i.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");const O=d.selectAll(".legend").data(M.domain()).enter().append("g").attr("class","legend").attr("transform",((t,e)=>"translate(216,"+(22*e-22*M.domain().length/2)+")"));O.append("rect").attr("width",s).attr("height",s).style("fill",M).style("stroke",M),O.data(b).append("text").attr("x",22).attr("y",14).text((t=>{const{label:e,value:a}=t.data;return i.getShowData()?`${e} [${a}]`:e}));const z=512+Math.max(...O.selectAll("text").nodes().map((t=>t?.getBoundingClientRect().width??0)));p.attr("viewBox",`0 0 ${z} 450`),x(p,l,z,o.useMaxWidth)}),"draw")},styles:z};export{B as diagram};
