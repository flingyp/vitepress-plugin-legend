import{i as B}from"./chunk-353BL4L5-8RL_rMKC-SL9_8R8Y.KRrwHKCA.js";import{_ as n,P,d as v,H as z,r as R,e as W,q as S,I as m,a4 as F,U as E,z as T,J as H,N as D,u as x}from"./theme.BB_k4Az6.js";import{I}from"./treemap-75Q7IDZK-DXztvJ2e-BSUAwKiX.DKPR31WB.js";import"./framework.CBoQAKmm.js";import"./baseUniq-CNqCRbrC-BdcmcNSm.BU1mroIp.js";import"./basePickBy-CWYLlH2g-Ddz4xLdB.DYCO7ML1.js";import"./clone-BYhKjDMH-CJuBb9uG.Cjl_WD2T.js";var $={packet:[]},w=structuredClone($),A=D.packet,N=n(()=>{const t=m({...A,...H().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),q=n(()=>w.packet,"getPacket"),L=n(t=>{t.length>0&&w.packet.push(t)},"pushWord"),U=n(()=>{T(),w=structuredClone($)},"clear"),u={pushWord:L,getPacket:q,getConfig:N,clear:U,setAccTitle:S,getAccTitle:W,setDiagramTitle:R,getDiagramTitle:z,getAccDescription:v,setAccDescription:P},Y=1e4,_=n(t=>{B(t,u);let e=-1,o=[],s=1;const{bitsPerRow:i}=u.getConfig();for(let{start:a,end:r,bits:d,label:k}of t.blocks){if(a!==void 0&&r!==void 0&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a??(a=e+1),a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);if(d===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(r??(r=a+(d??1)-1),d??(d=r-a+1),e=r,x.debug(`Packet block ${a} - ${e} with label ${k}`);o.length<=i+1&&u.getPacket().length<Y;){const[c,p]=j({start:a,end:r,bits:d,label:k},s,i);if(o.push(c),c.end+1===s*i&&(u.pushWord(o),o=[],s++),!p)break;({start:a,end:r,bits:d,label:k}=p)}}u.pushWord(o)},"populate"),j=n((t,e,o)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*o)return[t,void 0];const s=e*o-1,i=e*o;return[{start:t.start,end:s,label:t.label,bits:s-t.start},{start:i,end:t.end,label:t.label,bits:t.end-i}]},"getNextFittingBlock"),J={parse:n(async t=>{const e=await I("packet",t);x.debug(e),_(e)},"parse")},M=n((t,e,o,s)=>{const i=s.db,a=i.getConfig(),{rowHeight:r,paddingY:d,bitWidth:k,bitsPerRow:c}=a,p=i.getPacket(),l=i.getDiagramTitle(),h=r+d,b=h*(p.length+1)-(l?0:r),g=k*c+2,f=F(e);f.attr("viewbox",`0 0 ${g} ${b}`),E(f,b,g,a.useMaxWidth);for(const[y,C]of p.entries())X(f,C,y,a);f.append("text").text(l).attr("x",g/2).attr("y",b-h/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),X=n((t,e,o,{rowHeight:s,paddingX:i,paddingY:a,bitWidth:r,bitsPerRow:d,showBits:k})=>{const c=t.append("g"),p=o*(s+a)+a;for(const l of e){const h=l.start%d*r+1,b=(l.end-l.start+1)*r-i;if(c.append("rect").attr("x",h).attr("y",p).attr("width",b).attr("height",s).attr("class","packetBlock"),c.append("text").attr("x",h+b/2).attr("y",p+s/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!k)continue;const g=l.end===l.start,f=p-2;c.append("text").attr("x",h+(g?b/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",g?"middle":"start").text(l.start),g||c.append("text").attr("x",h+b).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),G={draw:M},K={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},O=n(({packet:t}={})=>{const e=m(K,t);return`
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
	`},"styles"),ot={parser:J,db:u,renderer:G,styles:O};export{ot as diagram};
