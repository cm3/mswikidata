import{p as t}from"./chunk-TMUBEWPD-1720c25c.js";import{B as e,s as a,g as r,p as o,q as n,b as l,c as s,_ as i,l as c,C as d,D as p,v as k,G as b,k as g}from"./main-77371978.js";import{p as h}from"./mermaid-parser.core-54ad8a9f.js";import"./_baseUniq-6462737e.js";import"./_basePickBy-1032dd32.js";import"./clone-d7d3919c.js";var f={packet:[]},m=structuredClone(f),u=e.packet,x=i((()=>{const t=d({...u,...p().packet});return t.showBits&&(t.paddingY+=10),t}),"getConfig"),$=i((()=>m.packet),"getPacket"),w={pushWord:i((t=>{t.length>0&&m.packet.push(t)}),"pushWord"),getPacket:$,getConfig:x,clear:i((()=>{k(),m=structuredClone(f)}),"clear"),setAccTitle:a,getAccTitle:r,setDiagramTitle:o,getDiagramTitle:n,getAccDescription:l,setAccDescription:s},y=i((e=>{t(e,w);let a=-1,r=[],o=1;const{bitsPerRow:n}=w.getConfig();for(let{start:t,end:l,label:s}of e.blocks){if(l&&l<t)throw new Error(`Packet block ${t} - ${l} is invalid. End must be greater than start.`);if(t!==a+1)throw new Error(`Packet block ${t} - ${l??t} is not contiguous. It should start from ${a+1}.`);for(a=l??t,c.debug(`Packet block ${t} - ${a} with label ${s}`);r.length<=n+1&&w.getPacket().length<1e4;){const[e,a]=C({start:t,end:l,label:s},o,n);if(r.push(e),e.end+1===o*n&&(w.pushWord(r),r=[],o++),!a)break;({start:t,end:l,label:s}=a)}}w.pushWord(r)}),"populate"),C=i(((t,e,a)=>{if(void 0===t.end&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*a?[t,void 0]:[{start:t.start,end:e*a-1,label:t.label},{start:e*a,end:t.end,label:t.label}]}),"getNextFittingBlock"),B={parse:i((async t=>{const e=await h("packet",t);c.debug(e),y(e)}),"parse")},P=i(((t,e,a,r)=>{const o=r.db,n=o.getConfig(),{rowHeight:l,paddingY:s,bitWidth:i,bitsPerRow:c}=n,d=o.getPacket(),p=o.getDiagramTitle(),k=l+s,h=k*(d.length+1)-(p?0:l),f=i*c+2,m=b(e);m.attr("viewbox",`0 0 ${f} ${h}`),g(m,h,f,n.useMaxWidth);for(const[t,e]of d.entries())W(m,e,t,n);m.append("text").text(p).attr("x",f/2).attr("y",h-k/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")}),"draw"),W=i(((t,e,a,{rowHeight:r,paddingX:o,paddingY:n,bitWidth:l,bitsPerRow:s,showBits:i})=>{const c=t.append("g"),d=a*(r+n)+n;for(const t of e){const e=t.start%s*l+1,a=(t.end-t.start+1)*l-o;if(c.append("rect").attr("x",e).attr("y",d).attr("width",a).attr("height",r).attr("class","packetBlock"),c.append("text").attr("x",e+a/2).attr("y",d+r/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(t.label),!i)continue;const n=t.end===t.start,p=d-2;c.append("text").attr("x",e+(n?a/2:0)).attr("y",p).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",n?"middle":"start").text(t.start),n||c.append("text").attr("x",e+a).attr("y",p).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(t.end)}}),"drawWord"),S={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},z={parser:B,db:w,renderer:{draw:P},styles:i((({packet:t}={})=>{const e=d(S,t);return`\n\t.packetByte {\n\t\tfont-size: ${e.byteFontSize};\n\t}\n\t.packetByte.start {\n\t\tfill: ${e.startByteColor};\n\t}\n\t.packetByte.end {\n\t\tfill: ${e.endByteColor};\n\t}\n\t.packetLabel {\n\t\tfill: ${e.labelColor};\n\t\tfont-size: ${e.labelFontSize};\n\t}\n\t.packetTitle {\n\t\tfill: ${e.titleColor};\n\t\tfont-size: ${e.titleFontSize};\n\t}\n\t.packetBlock {\n\t\tstroke: ${e.blockStrokeColor};\n\t\tstroke-width: ${e.blockStrokeWidth};\n\t\tfill: ${e.blockFillColor};\n\t}\n\t`}),"styles")};export{z as diagram};
