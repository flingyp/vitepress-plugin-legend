import{i as j}from"./chunk-353BL4L5-C1ZAb07r-D1nP-mZR.Bmk1EEK-.js";import{F as c,n as q,e as E,a as J,c as Q,q as H,p as K,T as W,_ as U,I as X,a4 as Y,a6 as Z,d as tt,B as et,M as at,a7 as S,a8 as nt,a9 as O}from"./theme.BmBFdcv2.js";import{I as rt}from"./treemap-75Q7IDZK-CjtfQE8u-CpNGz5UP.CO1jx1pq.js";import{d as L}from"./arc-CegaQWj_-DUexKeov.-vi_LuWc.js";import{g as it}from"./ordinal-DfAQgscy-BEJTu10r.vTmdWN-q.js";import"./framework.DopOb1th.js";import"./baseUniq-BxlSXXQG-CXmu503g.BAnaQu9G.js";import"./basePickBy-CC-D1y2F-DY-X7LfZ.D0JZdXLQ.js";import"./clone-78XdctpQ-DHi-Mpdh.CTFehPuX.js";import"./init-DjUOC4st-C8Nwz6AJ.BTi8F14B.js";function ot(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function lt(t){return t}function st(){var t=lt,a=ot,l=null,m=S(0),g=S(O),w=S(0);function i(e){var n,s=(e=nt(e)).length,u,$,h=0,p=new Array(s),r=new Array(s),x=+m.apply(this,arguments),T=Math.min(O,Math.max(-O,g.apply(this,arguments)-x)),f,v=Math.min(Math.abs(T)/s,w.apply(this,arguments)),C=v*(T<0?-1:1),d;for(n=0;n<s;++n)(d=r[p[n]=n]=+t(e[n],n,e))>0&&(h+=d);for(a!=null?p.sort(function(y,b){return a(r[y],r[b])}):l!=null&&p.sort(function(y,b){return l(e[y],e[b])}),n=0,$=h?(T-s*C)/h:0;n<s;++n,x=f)u=p[n],d=r[u],f=x+(d>0?d*$:0)+C,r[u]={data:e[u],index:n,value:d,startAngle:x,endAngle:f,padAngle:v};return r}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,l=null,i):a},i.sort=function(e){return arguments.length?(l=e,a=null,i):l},i.startAngle=function(e){return arguments.length?(m=typeof e=="function"?e:S(+e),i):m},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:S(+e),i):g},i.padAngle=function(e){return arguments.length?(w=typeof e=="function"?e:S(+e),i):w},i}var pt=at.pie,R={sections:new Map,showData:!1},M=R.sections,F=R.showData,ct=structuredClone(pt),ut=c(()=>structuredClone(ct),"getConfig"),dt=c(()=>{M=new Map,F=R.showData,et()},"clear"),gt=c(({label:t,value:a})=>{M.has(t)||(M.set(t,a),W.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ft=c(()=>M,"getSections"),mt=c(t=>{F=t},"setShowData"),ht=c(()=>F,"getShowData"),N={getConfig:ut,clear:dt,setDiagramTitle:K,getDiagramTitle:H,setAccTitle:Q,getAccTitle:J,setAccDescription:E,getAccDescription:q,addSection:gt,getSections:ft,setShowData:mt,getShowData:ht},xt=c((t,a)=>{j(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),yt={parse:c(async t=>{const a=await rt("pie",t);W.debug(a),xt(a,N)},"parse")},St=c(t=>`
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
`,"getStyles"),wt=St,$t=c(t=>{const a=[...t.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,m)=>m.value-l.value);return st().value(l=>l.value)(a)},"createPieArcs"),Tt=c((t,a,l,m)=>{W.debug(`rendering pie chart
`+t);const g=m.db,w=U(),i=X(g.getConfig(),w.pie),e=40,n=18,s=4,u=450,$=u,h=Y(a),p=h.append("g");p.attr("transform","translate("+$/2+","+u/2+")");const{themeVariables:r}=w;let[x]=Z(r.pieOuterStrokeWidth);x??(x=2);const T=i.textPosition,f=Math.min($,u)/2-e,v=L().innerRadius(0).outerRadius(f),C=L().innerRadius(f*T).outerRadius(f*T);p.append("circle").attr("cx",0).attr("cy",0).attr("r",f+x/2).attr("class","pieOuterCircle");const d=g.getSections(),y=$t(d),b=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],A=it(b);p.selectAll("mySlices").data(y).enter().append("path").attr("d",v).attr("fill",o=>A(o.data.label)).attr("class","pieCircle");let B=0;d.forEach(o=>{B+=o}),p.selectAll("mySlices").data(y).enter().append("text").text(o=>(o.data.value/B*100).toFixed(0)+"%").attr("transform",o=>"translate("+C.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const z=p.selectAll(".legend").data(A.domain()).enter().append("g").attr("class","legend").attr("transform",(o,D)=>{const k=n+s,V=k*A.domain().length/2,G=12*n,_=D*k-V;return"translate("+G+","+_+")"});z.append("rect").attr("width",n).attr("height",n).style("fill",A).style("stroke",A),z.data(y).append("text").attr("x",n+s).attr("y",n-s).text(o=>{const{label:D,value:k}=o.data;return g.getShowData()?`${D} [${k}]`:D});const P=Math.max(...z.selectAll("text").nodes().map(o=>(o==null?void 0:o.getBoundingClientRect().width)??0)),I=$+e+n+s+P;h.attr("viewBox",`0 0 ${I} ${u}`),tt(h,u,I,i.useMaxWidth)},"draw"),bt={draw:Tt},Ft={parser:yt,db:N,renderer:bt,styles:wt};export{Ft as diagram};
