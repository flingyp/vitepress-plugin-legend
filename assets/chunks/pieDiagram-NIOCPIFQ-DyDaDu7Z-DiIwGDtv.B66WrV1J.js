import{i as j}from"./chunk-353BL4L5-t05ly1Yi-BzS4aXZH.9QuM3HKp.js";import{S as p,d as q,c as E,e as G,z as X,n as J,l as K,u as O,m as U,x as Y,a4 as Z,a6 as _,M as tt,I as et,F as at,a7 as S,a8 as nt,a9 as H}from"./theme.DGywzT-0.js";import{I as rt}from"./treemap-75Q7IDZK-CIjD8Ibx-m39lfQc4.3cTrwz9Y.js";import{d as N}from"./arc-aavUJmbb-BU898awq.ocH-3mBF.js";import{g as it}from"./ordinal-DfAQgscy-BEJTu10r.vTmdWN-q.js";import"./framework.DopOb1th.js";import"./baseUniq-CZHCFN8s-CxpD0JS7.CdNPvIIL.js";import"./basePickBy-XITLGQxL-4VpGP9n9.GEbdsSEw.js";import"./clone-CVDc7lii-BIt5BNUE.eGVKondl.js";import"./init-DjUOC4st-C8Nwz6AJ.BTi8F14B.js";function ot(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function lt(t){return t}function st(){var t=lt,a=ot,l=null,m=S(0),g=S(H),w=S(0);function i(e){var n,s=(e=nt(e)).length,u,$,h=0,c=new Array(s),r=new Array(s),x=+m.apply(this,arguments),v=Math.min(H,Math.max(-H,g.apply(this,arguments)-x)),f,T=Math.min(Math.abs(v)/s,w.apply(this,arguments)),C=T*(v<0?-1:1),d;for(n=0;n<s;++n)(d=r[c[n]=n]=+t(e[n],n,e))>0&&(h+=d);for(a!=null?c.sort(function(y,A){return a(r[y],r[A])}):l!=null&&c.sort(function(y,A){return l(e[y],e[A])}),n=0,$=h?(v-s*C)/h:0;n<s;++n,x=f)u=c[n],d=r[u],f=x+(d>0?d*$:0)+C,r[u]={data:e[u],index:n,value:d,startAngle:x,endAngle:f,padAngle:T};return r}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,l=null,i):a},i.sort=function(e){return arguments.length?(l=e,a=null,i):l},i.startAngle=function(e){return arguments.length?(m=typeof e=="function"?e:S(+e),i):m},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:S(+e),i):g},i.padAngle=function(e){return arguments.length?(w=typeof e=="function"?e:S(+e),i):w},i}var ct=at.pie,F={sections:new Map,showData:!1},k=F.sections,R=F.showData,pt=structuredClone(ct),ut=p(()=>structuredClone(pt),"getConfig"),dt=p(()=>{k=new Map,R=F.showData,et()},"clear"),gt=p(({label:t,value:a})=>{k.has(t)||(k.set(t,a),O.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ft=p(()=>k,"getSections"),mt=p(t=>{R=t},"setShowData"),ht=p(()=>R,"getShowData"),P={getConfig:ut,clear:dt,setDiagramTitle:K,getDiagramTitle:J,setAccTitle:X,getAccTitle:G,setAccDescription:E,getAccDescription:q,addSection:gt,getSections:ft,setShowData:mt,getShowData:ht},xt=p((t,a)=>{j(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),yt={parse:p(async t=>{const a=await rt("pie",t);O.debug(a),xt(a,P)},"parse")},St=p(t=>`
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
`,"getStyles"),wt=St,$t=p(t=>{const a=[...t.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,m)=>m.value-l.value);return st().value(l=>l.value)(a)},"createPieArcs"),vt=p((t,a,l,m)=>{O.debug(`rendering pie chart
`+t);const g=m.db,w=U(),i=Y(g.getConfig(),w.pie),e=40,n=18,s=4,u=450,$=u,h=Z(a),c=h.append("g");c.attr("transform","translate("+$/2+","+u/2+")");const{themeVariables:r}=w;let[x]=_(r.pieOuterStrokeWidth);x??(x=2);const v=i.textPosition,f=Math.min($,u)/2-e,T=N().innerRadius(0).outerRadius(f),C=N().innerRadius(f*v).outerRadius(f*v);c.append("circle").attr("cx",0).attr("cy",0).attr("r",f+x/2).attr("class","pieOuterCircle");const d=g.getSections(),y=$t(d),A=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],D=it(A);c.selectAll("mySlices").data(y).enter().append("path").attr("d",T).attr("fill",o=>D(o.data.label)).attr("class","pieCircle");let I=0;d.forEach(o=>{I+=o}),c.selectAll("mySlices").data(y).enter().append("text").text(o=>(o.data.value/I*100).toFixed(0)+"%").attr("transform",o=>"translate("+C.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const z=c.selectAll(".legend").data(D.domain()).enter().append("g").attr("class","legend").attr("transform",(o,b)=>{const M=n+s,L=M*D.domain().length/2,Q=12*n,V=b*M-L;return"translate("+Q+","+V+")"});z.append("rect").attr("width",n).attr("height",n).style("fill",D).style("stroke",D),z.data(y).append("text").attr("x",n+s).attr("y",n-s).text(o=>{const{label:b,value:M}=o.data;return g.getShowData()?`${b} [${M}]`:b});const B=Math.max(...z.selectAll("text").nodes().map(o=>(o==null?void 0:o.getBoundingClientRect().width)??0)),W=$+e+n+s+B;h.attr("viewBox",`0 0 ${W} ${u}`),tt(h,u,W,i.useMaxWidth)},"draw"),At={draw:vt},Rt={parser:yt,db:P,renderer:At,styles:wt};export{Rt as diagram};
