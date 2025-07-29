import{i as P}from"./chunk-353BL4L5-LfxWHbR9-CkMavkVU.BijRCD0w.js";import{S as n,c as B,l as v,v as S,r as z,o as W,s as F,L as m,a4 as E,g as T,C as A,M as D,N as I,a as x}from"./theme.DJ3VxS9h.js";import{I as L}from"./treemap-75Q7IDZK-ZgQNFTu--BNCNWmyt.b1VjuP4_.js";import"./framework.D2JuLAqv.js";import"./baseUniq-nws7t5oA-CUAghAso.Cskx6TPE.js";import"./basePickBy-BcqGVbfA-CJ09xwLQ.CuyUYld0.js";import"./clone-31Rw_TO0-nKLoicT-.sj6Uwoq1.js";var $={packet:[]},w=structuredClone($),R=I.packet,M=n(()=>{const t=m({...R,...D().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),N=n(()=>w.packet,"getPacket"),Y=n(t=>{t.length>0&&w.packet.push(t)},"pushWord"),H=n(()=>{A(),w=structuredClone($)},"clear"),u={pushWord:Y,getPacket:N,getConfig:M,clear:H,setAccTitle:F,getAccTitle:W,setDiagramTitle:z,getDiagramTitle:S,getAccDescription:v,setAccDescription:B},U=1e4,X=n(t=>{P(t,u);let e=-1,o=[],i=1;const{bitsPerRow:s}=u.getConfig();for(let{start:a,end:r,bits:c,label:k}of t.blocks){if(a!==void 0&&r!==void 0&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a??(a=e+1),a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);if(c===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(r??(r=a+(c??1)-1),c??(c=r-a+1),e=r,x.debug(`Packet block ${a} - ${e} with label ${k}`);o.length<=s+1&&u.getPacket().length<U;){const[d,p]=Z({start:a,end:r,bits:c,label:k},i,s);if(o.push(d),d.end+1===i*s&&(u.pushWord(o),o=[],i++),!p)break;({start:a,end:r,bits:c,label:k}=p)}}u.pushWord(o)},"populate"),Z=n((t,e,o)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*o)return[t,void 0];const i=e*o-1,s=e*o;return[{start:t.start,end:i,label:t.label,bits:i-t.start},{start:s,end:t.end,label:t.label,bits:t.end-s}]},"getNextFittingBlock"),j={parse:n(async t=>{const e=await L("packet",t);x.debug(e),X(e)},"parse")},G=n((t,e,o,i)=>{const s=i.db,a=s.getConfig(),{rowHeight:r,paddingY:c,bitWidth:k,bitsPerRow:d}=a,p=s.getPacket(),l=s.getDiagramTitle(),h=r+c,b=h*(p.length+1)-(l?0:r),g=k*d+2,f=E(e);f.attr("viewbox",`0 0 ${g} ${b}`),T(f,b,g,a.useMaxWidth);for(const[y,C]of p.entries())J(f,C,y,a);f.append("text").text(l).attr("x",g/2).attr("y",b-h/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),J=n((t,e,o,{rowHeight:i,paddingX:s,paddingY:a,bitWidth:r,bitsPerRow:c,showBits:k})=>{const d=t.append("g"),p=o*(i+a)+a;for(const l of e){const h=l.start%c*r+1,b=(l.end-l.start+1)*r-s;if(d.append("rect").attr("x",h).attr("y",p).attr("width",b).attr("height",i).attr("class","packetBlock"),d.append("text").attr("x",h+b/2).attr("y",p+i/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!k)continue;const g=l.end===l.start,f=p-2;d.append("text").attr("x",h+(g?b/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",g?"middle":"start").text(l.start),g||d.append("text").attr("x",h+b).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),K={draw:G},Q={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},V=n(({packet:t}={})=>{const e=m(Q,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),ot={parser:j,db:u,renderer:K,styles:V};export{ot as diagram};
