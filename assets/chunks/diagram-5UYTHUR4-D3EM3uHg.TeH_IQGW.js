import{t as B}from"./chunk-353BL4L5-CoZYCFcj.dUbxiBtB.js";import{p as n,d as v,e as P,s as S,r as z,g as F,j as W,I as y,a4 as T,P as E,w as D,L,T as A,F as m}from"./theme.F6PnGTkS.js";import{S as R}from"./treemap-75Q7IDZK-DR1A_s8Y.43Ox-goP.js";import"./framework.B4DAyMYG.js";import"./baseUniq-y2HM5nbD.Vs1g8xSB.js";import"./basePickBy-zvqYOuXh.BrqSNkjb.js";import"./clone-DJqr9BGE.CJYgbQh-.js";var x={packet:[]},w=structuredClone(x),Y=A.packet,H=n(()=>{const t=y({...Y,...L().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),I=n(()=>w.packet,"getPacket"),j=n(t=>{t.length>0&&w.packet.push(t)},"pushWord"),G=n(()=>{D(),w=structuredClone(x)},"clear"),u={pushWord:j,getPacket:I,getConfig:H,clear:G,setAccTitle:W,getAccTitle:F,setDiagramTitle:z,getDiagramTitle:S,getAccDescription:P,setAccDescription:v},M=1e4,X=n(t=>{B(t,u);let e=-1,o=[],l=1;const{bitsPerRow:i}=u.getConfig();for(let{start:a,end:r,bits:d,label:k}of t.blocks){if(a!==void 0&&r!==void 0&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a??(a=e+1),a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);if(d===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(r??(r=a+(d??1)-1),d??(d=r-a+1),e=r,m.debug(`Packet block ${a} - ${e} with label ${k}`);o.length<=i+1&&u.getPacket().length<M;){const[c,p]=q({start:a,end:r,bits:d,label:k},l,i);if(o.push(c),c.end+1===l*i&&(u.pushWord(o),o=[],l++),!p)break;({start:a,end:r,bits:d,label:k}=p)}}u.pushWord(o)},"populate"),q=n((t,e,o)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*o)return[t,void 0];const l=e*o-1,i=e*o;return[{start:t.start,end:l,label:t.label,bits:l-t.start},{start:i,end:t.end,label:t.label,bits:t.end-i}]},"getNextFittingBlock"),J={parse:n(async t=>{const e=await R("packet",t);m.debug(e),X(e)},"parse")},K=n((t,e,o,l)=>{const i=l.db,a=i.getConfig(),{rowHeight:r,paddingY:d,bitWidth:k,bitsPerRow:c}=a,p=i.getPacket(),s=i.getDiagramTitle(),h=r+d,b=h*(p.length+1)-(s?0:r),g=k*c+2,f=T(e);f.attr("viewbox",`0 0 ${g} ${b}`),E(f,b,g,a.useMaxWidth);for(const[$,C]of p.entries())N(f,C,$,a);f.append("text").text(s).attr("x",g/2).attr("y",b-h/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),N=n((t,e,o,{rowHeight:l,paddingX:i,paddingY:a,bitWidth:r,bitsPerRow:d,showBits:k})=>{const c=t.append("g"),p=o*(l+a)+a;for(const s of e){const h=s.start%d*r+1,b=(s.end-s.start+1)*r-i;if(c.append("rect").attr("x",h).attr("y",p).attr("width",b).attr("height",l).attr("class","packetBlock"),c.append("text").attr("x",h+b/2).attr("y",p+l/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(s.label),!k)continue;const g=s.end===s.start,f=p-2;c.append("text").attr("x",h+(g?b/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",g?"middle":"start").text(s.start),g||c.append("text").attr("x",h+b).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(s.end)}},"drawWord"),O={draw:K},Q={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},U=n(({packet:t}={})=>{const e=y(Q,t);return`
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
	`},"styles"),ot={parser:J,db:u,renderer:O,styles:U};export{ot as diagram};
