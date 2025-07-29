import{i as P}from"./chunk-353BL4L5-LfxWHbR9-CkMavkVU.BijRCD0w.js";import{S as l,c as S,l as I,v as E,r as F,o as R,s as z,a4 as D,C as G,L as v,M as w,N as W,a as Z,aa as B}from"./theme.DJ3VxS9h.js";import{I as V}from"./treemap-75Q7IDZK-ZgQNFTu--BNCNWmyt.b1VjuP4_.js";import"./framework.D2JuLAqv.js";import"./baseUniq-nws7t5oA-CUAghAso.Cskx6TPE.js";import"./basePickBy-BcqGVbfA-CJ09xwLQ.CuyUYld0.js";import"./clone-31Rw_TO0-nKLoicT-.sj6Uwoq1.js";var u={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},b={axes:[],curves:[],options:u},h=structuredClone(b),_=W.radar,j=l(()=>v({..._,...w().radar}),"getConfig"),C=l(()=>h.axes,"getAxes"),H=l(()=>h.curves,"getCurves"),N=l(()=>h.options,"getOptions"),U=l(a=>{h.axes=a.map(t=>({name:t.name,label:t.label??t.name}))},"setAxes"),J=l(a=>{h.curves=a.map(t=>({name:t.name,label:t.label??t.name,entries:K(t.entries)}))},"setCurves"),K=l(a=>{if(a[0].axis==null)return a.map(e=>e.value);const t=C();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const r=a.find(s=>{var n;return((n=s.axis)==null?void 0:n.$refText)===e.name});if(r===void 0)throw new Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),Q=l(a=>{var e,r,s,n,o;const t=a.reduce((i,c)=>(i[c.name]=c,i),{});h.options={showLegend:((e=t.showLegend)==null?void 0:e.value)??u.showLegend,ticks:((r=t.ticks)==null?void 0:r.value)??u.ticks,max:((s=t.max)==null?void 0:s.value)??u.max,min:((n=t.min)==null?void 0:n.value)??u.min,graticule:((o=t.graticule)==null?void 0:o.value)??u.graticule}},"setOptions"),X=l(()=>{G(),h=structuredClone(b)},"clear"),f={getAxes:C,getCurves:H,getOptions:N,setAxes:U,setCurves:J,setOptions:Q,getConfig:j,clear:X,setAccTitle:z,getAccTitle:R,setDiagramTitle:F,getDiagramTitle:E,getAccDescription:I,setAccDescription:S},Y=l(a=>{P(a,f);const{axes:t,curves:e,options:r}=a;f.setAxes(t),f.setCurves(e),f.setOptions(r)},"populate"),q={parse:l(async a=>{const t=await V("radar",a);Z.debug(t),Y(t)},"parse")},tt=l((a,t,e,r)=>{const s=r.db,n=s.getAxes(),o=s.getCurves(),i=s.getOptions(),c=s.getConfig(),d=s.getDiagramTitle(),p=D(t),g=et(p,c),x=i.max??Math.max(...o.map(y=>Math.max(...y.entries))),m=i.min,$=Math.min(c.width,c.height)/2;at(g,n,$,i.ticks,i.graticule),rt(g,n,$,c),M(g,n,o,m,x,i.graticule,c),A(g,o,i.showLegend,c),g.append("text").attr("class","radarTitle").text(d).attr("x",0).attr("y",-c.height/2-c.marginTop)},"draw"),et=l((a,t)=>{const e=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,s={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return a.attr("viewbox",`0 0 ${e} ${r}`).attr("width",e).attr("height",r),a.append("g").attr("transform",`translate(${s.x}, ${s.y})`)},"drawFrame"),at=l((a,t,e,r,s)=>{if(s==="circle")for(let n=0;n<r;n++){const o=e*(n+1)/r;a.append("circle").attr("r",o).attr("class","radarGraticule")}else if(s==="polygon"){const n=t.length;for(let o=0;o<r;o++){const i=e*(o+1)/r,c=t.map((d,p)=>{const g=2*p*Math.PI/n-Math.PI/2,x=i*Math.cos(g),m=i*Math.sin(g);return`${x},${m}`}).join(" ");a.append("polygon").attr("points",c).attr("class","radarGraticule")}}},"drawGraticule"),rt=l((a,t,e,r)=>{const s=t.length;for(let n=0;n<s;n++){const o=t[n].label,i=2*n*Math.PI/s-Math.PI/2;a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*Math.cos(i)).attr("y2",e*r.axisScaleFactor*Math.sin(i)).attr("class","radarAxisLine"),a.append("text").text(o).attr("x",e*r.axisLabelFactor*Math.cos(i)).attr("y",e*r.axisLabelFactor*Math.sin(i)).attr("class","radarAxisLabel")}},"drawAxes");function M(a,t,e,r,s,n,o){const i=t.length,c=Math.min(o.width,o.height)/2;e.forEach((d,p)=>{if(d.entries.length!==i)return;const g=d.entries.map((x,m)=>{const $=2*Math.PI*m/i-Math.PI/2,y=L(x,r,s,c),k=y*Math.cos($),O=y*Math.sin($);return{x:k,y:O}});n==="circle"?a.append("path").attr("d",T(g,o.curveTension)).attr("class",`radarCurve-${p}`):n==="polygon"&&a.append("polygon").attr("points",g.map(x=>`${x.x},${x.y}`).join(" ")).attr("class",`radarCurve-${p}`)})}l(M,"drawCurves");function L(a,t,e,r){const s=Math.min(Math.max(a,t),e);return r*(s-t)/(e-t)}l(L,"relativeRadius");function T(a,t){const e=a.length;let r=`M${a[0].x},${a[0].y}`;for(let s=0;s<e;s++){const n=a[(s-1+e)%e],o=a[s],i=a[(s+1)%e],c=a[(s+2)%e],d={x:o.x+(i.x-n.x)*t,y:o.y+(i.y-n.y)*t},p={x:i.x-(c.x-o.x)*t,y:i.y-(c.y-o.y)*t};r+=` C${d.x},${d.y} ${p.x},${p.y} ${i.x},${i.y}`}return`${r} Z`}l(T,"closedRoundCurve");function A(a,t,e,r){if(!e)return;const s=(r.width/2+r.marginRight)*3/4,n=-(r.height/2+r.marginTop)*3/4,o=20;t.forEach((i,c)=>{const d=a.append("g").attr("transform",`translate(${s}, ${n+c*o})`);d.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${c}`),d.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(i.label)})}l(A,"drawLegend");var st={draw:tt},it=l((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){const s=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${s};
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
		}
		`}return e},"genIndexStyles"),nt=l(a=>{const t=B(),e=w(),r=v(t,e.themeVariables),s=v(r.radar,a);return{themeVariables:r,radarOptions:s}},"buildRadarStyleOptions"),ot=l(({radar:a}={})=>{const{themeVariables:t,radarOptions:e}=nt(a);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${it(t,e)}
	`},"styles"),ut={parser:q,db:f,renderer:st,styles:ot};export{ut as diagram};
