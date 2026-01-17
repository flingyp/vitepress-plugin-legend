import{i as B}from"./chunk-353BL4L5-t05ly1Yi-Dx5qEekx.D4bTKX3L.js";import{I as n,e as v,n as W,q as P,o as z,t as F,J as S,E as m,a4 as T,f as E,Q as D,F as A,L as I,T as x}from"./theme.DOABti_p.js";import{I as L}from"./treemap-75Q7IDZK-CIjD8Ibx-Dz6JGoMJ.BI3SFMds.js";import"./framework.DopOb1th.js";import"./baseUniq-CZHCFN8s-CZmRzJ5K.4Tay9CAz.js";import"./basePickBy-XITLGQxL-CDI3CxSD.BwFbf8aw.js";import"./clone-CVDc7lii-Bnr5ppd1.BnFjA9J4.js";var $={packet:[]},w=structuredClone($),Y=I.packet,H=n(()=>{const t=m({...Y,...A().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),J=n(()=>w.packet,"getPacket"),Q=n(t=>{t.length>0&&w.packet.push(t)},"pushWord"),R=n(()=>{D(),w=structuredClone($)},"clear"),u={pushWord:Q,getPacket:J,getConfig:H,clear:R,setAccTitle:S,getAccTitle:F,setDiagramTitle:z,getDiagramTitle:P,getAccDescription:W,setAccDescription:v},j=1e4,q=n(t=>{B(t,u);let e=-1,o=[],i=1;const{bitsPerRow:s}=u.getConfig();for(let{start:a,end:r,bits:d,label:k}of t.blocks){if(a!==void 0&&r!==void 0&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a??(a=e+1),a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);if(d===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(r??(r=a+(d??1)-1),d??(d=r-a+1),e=r,x.debug(`Packet block ${a} - ${e} with label ${k}`);o.length<=s+1&&u.getPacket().length<j;){const[c,b]=M({start:a,end:r,bits:d,label:k},i,s);if(o.push(c),c.end+1===i*s&&(u.pushWord(o),o=[],i++),!b)break;({start:a,end:r,bits:d,label:k}=b)}}u.pushWord(o)},"populate"),M=n((t,e,o)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*o)return[t,void 0];const i=e*o-1,s=e*o;return[{start:t.start,end:i,label:t.label,bits:i-t.start},{start:s,end:t.end,label:t.label,bits:t.end-s}]},"getNextFittingBlock"),N={parse:n(async t=>{const e=await L("packet",t);x.debug(e),q(e)},"parse")},X=n((t,e,o,i)=>{const s=i.db,a=s.getConfig(),{rowHeight:r,paddingY:d,bitWidth:k,bitsPerRow:c}=a,b=s.getPacket(),l=s.getDiagramTitle(),h=r+d,p=h*(b.length+1)-(l?0:r),g=k*c+2,f=T(e);f.attr("viewbox",`0 0 ${g} ${p}`),E(f,p,g,a.useMaxWidth);for(const[y,C]of b.entries())G(f,C,y,a);f.append("text").text(l).attr("x",g/2).attr("y",p-h/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),G=n((t,e,o,{rowHeight:i,paddingX:s,paddingY:a,bitWidth:r,bitsPerRow:d,showBits:k})=>{const c=t.append("g"),b=o*(i+a)+a;for(const l of e){const h=l.start%d*r+1,p=(l.end-l.start+1)*r-s;if(c.append("rect").attr("x",h).attr("y",b).attr("width",p).attr("height",i).attr("class","packetBlock"),c.append("text").attr("x",h+p/2).attr("y",b+i/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!k)continue;const g=l.end===l.start,f=b-2;c.append("text").attr("x",h+(g?p/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",g?"middle":"start").text(l.start),g||c.append("text").attr("x",h+p).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),K={draw:X},O={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},U=n(({packet:t}={})=>{const e=m(O,t);return`
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
	`},"styles"),ot={parser:N,db:u,renderer:K,styles:U};export{ot as diagram};
