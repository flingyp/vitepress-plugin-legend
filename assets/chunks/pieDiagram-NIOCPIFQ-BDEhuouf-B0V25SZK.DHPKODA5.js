import{i as I}from"./chunk-353BL4L5-C10IpbKf-hPylYGQY.D1HoiMXw.js";import{S as p,h as H,c as J,l as U,d as Z,z as q,v as K,u as O,m as Q,M as X,a4 as Y,a6 as _,j as tt,D as et,N as at,a7 as S,a8 as nt,a9 as z}from"./theme.CIFftveG.js";import{I as rt}from"./treemap-75Q7IDZK-BvB8zvFG-DJ9LZ2Y2.B-31UpQk.js";import{d as B}from"./arc-B_E0dr7i-0zza4CVt.BRtJKN9Y.js";import{g as it}from"./ordinal-DfAQgscy-BEJTu10r.vTmdWN-q.js";import"./framework.DopOb1th.js";import"./baseUniq-B_hhX3w7-CyrqivW5.Oe7aR9Y7.js";import"./basePickBy-Cod93q3H-BT4gJoQ0.AIW9Cqio.js";import"./clone-BCZn-OSh-h0wdFFwR.80_LPgo2.js";import"./init-DjUOC4st-C8Nwz6AJ.BTi8F14B.js";function ot(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function lt(t){return t}function st(){var t=lt,a=ot,l=null,m=S(0),g=S(z),w=S(0);function i(e){var n,s=(e=nt(e)).length,u,$,h=0,c=new Array(s),r=new Array(s),x=+m.apply(this,arguments),A=Math.min(z,Math.max(-z,g.apply(this,arguments)-x)),f,T=Math.min(Math.abs(A)/s,w.apply(this,arguments)),C=T*(A<0?-1:1),d;for(n=0;n<s;++n)(d=r[c[n]=n]=+t(e[n],n,e))>0&&(h+=d);for(a!=null?c.sort(function(y,D){return a(r[y],r[D])}):l!=null&&c.sort(function(y,D){return l(e[y],e[D])}),n=0,$=h?(A-s*C)/h:0;n<s;++n,x=f)u=c[n],d=r[u],f=x+(d>0?d*$:0)+C,r[u]={data:e[u],index:n,value:d,startAngle:x,endAngle:f,padAngle:T};return r}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,l=null,i):a},i.sort=function(e){return arguments.length?(l=e,a=null,i):l},i.startAngle=function(e){return arguments.length?(m=typeof e=="function"?e:S(+e),i):m},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:S(+e),i):g},i.padAngle=function(e){return arguments.length?(w=typeof e=="function"?e:S(+e),i):w},i}var ct=at.pie,R={sections:new Map,showData:!1},M=R.sections,W=R.showData,pt=structuredClone(ct),ut=p(()=>structuredClone(pt),"getConfig"),dt=p(()=>{M=new Map,W=R.showData,et()},"clear"),gt=p(({label:t,value:a})=>{M.has(t)||(M.set(t,a),O.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ft=p(()=>M,"getSections"),mt=p(t=>{W=t},"setShowData"),ht=p(()=>W,"getShowData"),L={getConfig:ut,clear:dt,setDiagramTitle:K,getDiagramTitle:q,setAccTitle:Z,getAccTitle:U,setAccDescription:J,getAccDescription:H,addSection:gt,getSections:ft,setShowData:mt,getShowData:ht},xt=p((t,a)=>{I(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),yt={parse:p(async t=>{const a=await rt("pie",t);O.debug(a),xt(a,L)},"parse")},St=p(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),wt=St,$t=p(t=>{const a=[...t.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,m)=>m.value-l.value);return st().value(l=>l.value)(a)},"createPieArcs"),At=p((t,a,l,m)=>{O.debug(`rendering pie chart
`+t);const g=m.db,w=Q(),i=X(g.getConfig(),w.pie),e=40,n=18,s=4,u=450,$=u,h=Y(a),c=h.append("g");c.attr("transform","translate("+$/2+","+u/2+")");const{themeVariables:r}=w;let[x]=_(r.pieOuterStrokeWidth);x??(x=2);const A=i.textPosition,f=Math.min($,u)/2-e,T=B().innerRadius(0).outerRadius(f),C=B().innerRadius(f*A).outerRadius(f*A);c.append("circle").attr("cx",0).attr("cy",0).attr("r",f+x/2).attr("class","pieOuterCircle");const d=g.getSections(),y=$t(d),D=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],v=it(D);c.selectAll("mySlices").data(y).enter().append("path").attr("d",T).attr("fill",o=>v(o.data.label)).attr("class","pieCircle");let F=0;d.forEach(o=>{F+=o}),c.selectAll("mySlices").data(y).enter().append("text").text(o=>(o.data.value/F*100).toFixed(0)+"%").attr("transform",o=>"translate("+C.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const P=c.selectAll(".legend").data(v.domain()).enter().append("g").attr("class","legend").attr("transform",(o,b)=>{const k=n+s,j=k*v.domain().length/2,E=12*n,G=b*k-j;return"translate("+E+","+G+")"});P.append("rect").attr("width",n).attr("height",n).style("fill",v).style("stroke",v),P.data(y).append("text").attr("x",n+s).attr("y",n-s).text(o=>{const{label:b,value:k}=o.data;return g.getShowData()?`${b} [${k}]`:b});const V=Math.max(...P.selectAll("text").nodes().map(o=>(o==null?void 0:o.getBoundingClientRect().width)??0)),N=$+e+n+s+V;h.attr("viewBox",`0 0 ${N} ${u}`),tt(h,u,N,i.useMaxWidth)},"draw"),Dt={draw:At},Wt={parser:yt,db:L,renderer:Dt,styles:wt};export{Wt as diagram};
