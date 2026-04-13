import{i as X}from"./chunk-353BL4L5-C1ZAb07r-BMNIXPVo.BrTHsupo.js";import{q as c,a7 as Y,a6 as q,a8 as E,a9 as K,ap as _,ao as j,O as W,A as H,aB as J,aT as Q,aV as Z,ab as tt,au as et,aD as at,aW as w,aX as nt,aY as z}from"./theme.RSZ6spDQ.js";import{I as rt}from"./treemap-75Q7IDZK-CjtfQE8u-DBGEKm3F.BVKp4Z9E.js";import{d as L}from"./arc-CegaQWj_-yn6JxQT-.etCs3Ami.js";import{g as it}from"./ordinal-DfAQgscy-BEJTu10r.vTmdWN-q.js";import"./framework.DopOb1th.js";import"./baseUniq-BxlSXXQG-mwChZi-I.D3iAwJYS.js";import"./basePickBy-CC-D1y2F-DXbJFnnh.HYNNllGB.js";import"./clone-78XdctpQ-DP6jZ9da.CIOvJUd5.js";import"./init-DjUOC4st-C8Nwz6AJ.BTi8F14B.js";function ot(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function lt(t){return t}function st(){var t=lt,a=ot,l=null,m=w(0),g=w(z),S=w(0);function i(e){var n,s=(e=nt(e)).length,u,$,h=0,p=new Array(s),r=new Array(s),x=+m.apply(this,arguments),v=Math.min(z,Math.max(-z,g.apply(this,arguments)-x)),f,D=Math.min(Math.abs(v)/s,S.apply(this,arguments)),b=D*(v<0?-1:1),d;for(n=0;n<s;++n)(d=r[p[n]=n]=+t(e[n],n,e))>0&&(h+=d);for(a!=null?p.sort(function(y,A){return a(r[y],r[A])}):l!=null&&p.sort(function(y,A){return l(e[y],e[A])}),n=0,$=h?(v-s*b)/h:0;n<s;++n,x=f)u=p[n],d=r[u],f=x+(d>0?d*$:0)+b,r[u]={data:e[u],index:n,value:d,startAngle:x,endAngle:f,padAngle:D};return r}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:w(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,l=null,i):a},i.sort=function(e){return arguments.length?(l=e,a=null,i):l},i.startAngle=function(e){return arguments.length?(m=typeof e=="function"?e:w(+e),i):m},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:w(+e),i):g},i.padAngle=function(e){return arguments.length?(S=typeof e=="function"?e:w(+e),i):S},i}var pt=at.pie,B={sections:new Map,showData:!1},M=B.sections,R=B.showData,ct=structuredClone(pt),ut=c(()=>structuredClone(ct),"getConfig"),dt=c(()=>{M=new Map,R=B.showData,et()},"clear"),gt=c(({label:t,value:a})=>{M.has(t)||(M.set(t,a),W.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ft=c(()=>M,"getSections"),mt=c(t=>{R=t},"setShowData"),ht=c(()=>R,"getShowData"),I={getConfig:ut,clear:dt,setDiagramTitle:j,getDiagramTitle:_,setAccTitle:K,getAccTitle:E,setAccDescription:q,getAccDescription:Y,addSection:gt,getSections:ft,setShowData:mt,getShowData:ht},xt=c((t,a)=>{X(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),yt={parse:c(async t=>{const a=await rt("pie",t);W.debug(a),xt(a,I)},"parse")},wt=c(t=>`
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
`,"getStyles"),St=wt,$t=c(t=>{const a=[...t.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,m)=>m.value-l.value);return st().value(l=>l.value)(a)},"createPieArcs"),vt=c((t,a,l,m)=>{W.debug(`rendering pie chart
`+t);const g=m.db,S=H(),i=J(g.getConfig(),S.pie),e=40,n=18,s=4,u=450,$=u,h=Q(a),p=h.append("g");p.attr("transform","translate("+$/2+","+u/2+")");const{themeVariables:r}=S;let[x]=Z(r.pieOuterStrokeWidth);x??(x=2);const v=i.textPosition,f=Math.min($,u)/2-e,D=L().innerRadius(0).outerRadius(f),b=L().innerRadius(f*v).outerRadius(f*v);p.append("circle").attr("cx",0).attr("cy",0).attr("r",f+x/2).attr("class","pieOuterCircle");const d=g.getSections(),y=$t(d),A=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],T=it(A);p.selectAll("mySlices").data(y).enter().append("path").attr("d",D).attr("fill",o=>T(o.data.label)).attr("class","pieCircle");let V=0;d.forEach(o=>{V+=o}),p.selectAll("mySlices").data(y).enter().append("text").text(o=>(o.data.value/V*100).toFixed(0)+"%").attr("transform",o=>"translate("+b.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const O=p.selectAll(".legend").data(T.domain()).enter().append("g").attr("class","legend").attr("transform",(o,C)=>{const k=n+s,P=k*T.domain().length/2,U=12*n,G=C*k-P;return"translate("+U+","+G+")"});O.append("rect").attr("width",n).attr("height",n).style("fill",T).style("stroke",T),O.data(y).append("text").attr("x",n+s).attr("y",n-s).text(o=>{const{label:C,value:k}=o.data;return g.getShowData()?`${C} [${k}]`:C});const N=Math.max(...O.selectAll("text").nodes().map(o=>(o==null?void 0:o.getBoundingClientRect().width)??0)),F=$+e+n+s+N;h.attr("viewBox",`0 0 ${F} ${u}`),tt(h,u,F,i.useMaxWidth)},"draw"),At={draw:vt},Rt={parser:yt,db:I,renderer:At,styles:St};export{Rt as diagram};
