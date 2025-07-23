import{i as j}from"./chunk-353BL4L5-DtcqE9ZI-CMqBWpGK.BtQuATb-.js";import{C as p,M as K,E as Q,$ as U,a as X,L as Y,B as _,l as R,i as q,x as G,a4 as J,a6 as Z,c as tt,A as et,z as at,a7 as w,a8 as nt,a9 as O}from"./theme.7S-WhtVF.js";import{I as rt}from"./treemap-75Q7IDZK-BHdhidDk-DWONt0GN.D3nXpE2D.js";import{d as L}from"./arc-CY7pZT4O-ChWnmEue.CvL55ICN.js";import{g as it}from"./ordinal-DfAQgscy-BEJTu10r.vTmdWN-q.js";import"./framework.B4DAyMYG.js";import"./baseUniq-CM6_xSSK-Br9e2Mnt.COuDCSgW.js";import"./basePickBy-BVXm5F2t-DqNohrTL.CYduKtg6.js";import"./clone-DmFM0KYe-NpJPdegk.CO5CAxTQ.js";import"./init-DjUOC4st-C8Nwz6AJ.BTi8F14B.js";function lt(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function ot(t){return t}function st(){var t=ot,a=lt,o=null,m=w(0),g=w(O),$=w(0);function i(e){var n,s=(e=nt(e)).length,u,S,h=0,c=new Array(s),r=new Array(s),x=+m.apply(this,arguments),A=Math.min(O,Math.max(-O,g.apply(this,arguments)-x)),f,D=Math.min(Math.abs(A)/s,$.apply(this,arguments)),v=D*(A<0?-1:1),d;for(n=0;n<s;++n)(d=r[c[n]=n]=+t(e[n],n,e))>0&&(h+=d);for(a!=null?c.sort(function(y,T){return a(r[y],r[T])}):o!=null&&c.sort(function(y,T){return o(e[y],e[T])}),n=0,S=h?(A-s*v)/h:0;n<s;++n,x=f)u=c[n],d=r[u],f=x+(d>0?d*S:0)+v,r[u]={data:e[u],index:n,value:d,startAngle:x,endAngle:f,padAngle:D};return r}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:w(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,o=null,i):a},i.sort=function(e){return arguments.length?(o=e,a=null,i):o},i.startAngle=function(e){return arguments.length?(m=typeof e=="function"?e:w(+e),i):m},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:w(+e),i):g},i.padAngle=function(e){return arguments.length?($=typeof e=="function"?e:w(+e),i):$},i}var ct=at.pie,B={sections:new Map,showData:!1},b=B.sections,W=B.showData,pt=structuredClone(ct),ut=p(()=>structuredClone(pt),"getConfig"),dt=p(()=>{b=new Map,W=B.showData,et()},"clear"),gt=p(({label:t,value:a})=>{b.has(t)||(b.set(t,a),R.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ft=p(()=>b,"getSections"),mt=p(t=>{W=t},"setShowData"),ht=p(()=>W,"getShowData"),N={getConfig:ut,clear:dt,setDiagramTitle:_,getDiagramTitle:Y,setAccTitle:X,getAccTitle:U,setAccDescription:Q,getAccDescription:K,addSection:gt,getSections:ft,setShowData:mt,getShowData:ht},xt=p((t,a)=>{j(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),yt={parse:p(async t=>{const a=await rt("pie",t);R.debug(a),xt(a,N)},"parse")},wt=p(t=>`
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
`,"getStyles"),$t=wt,St=p(t=>{const a=[...t.entries()].map(o=>({label:o[0],value:o[1]})).sort((o,m)=>m.value-o.value);return st().value(o=>o.value)(a)},"createPieArcs"),At=p((t,a,o,m)=>{R.debug(`rendering pie chart
`+t);const g=m.db,$=q(),i=G(g.getConfig(),$.pie),e=40,n=18,s=4,u=450,S=u,h=J(a),c=h.append("g");c.attr("transform","translate("+S/2+","+u/2+")");const{themeVariables:r}=$;let[x]=Z(r.pieOuterStrokeWidth);x??(x=2);const A=i.textPosition,f=Math.min(S,u)/2-e,D=L().innerRadius(0).outerRadius(f),v=L().innerRadius(f*A).outerRadius(f*A);c.append("circle").attr("cx",0).attr("cy",0).attr("r",f+x/2).attr("class","pieOuterCircle");const d=g.getSections(),y=St(d),T=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],C=it(T);c.selectAll("mySlices").data(y).enter().append("path").attr("d",D).attr("fill",l=>C(l.data.label)).attr("class","pieCircle");let E=0;d.forEach(l=>{E+=l}),c.selectAll("mySlices").data(y).enter().append("text").text(l=>(l.data.value/E*100).toFixed(0)+"%").attr("transform",l=>"translate("+v.centroid(l)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const k=c.selectAll(".legend").data(C.domain()).enter().append("g").attr("class","legend").attr("transform",(l,z)=>{const M=n+s,V=M*C.domain().length/2,H=12*n,I=z*M-V;return"translate("+H+","+I+")"});k.append("rect").attr("width",n).attr("height",n).style("fill",C).style("stroke",C),k.data(y).append("text").attr("x",n+s).attr("y",n-s).text(l=>{const{label:z,value:M}=l.data;return g.getShowData()?`${z} [${M}]`:z});const P=Math.max(...k.selectAll("text").nodes().map(l=>(l==null?void 0:l.getBoundingClientRect().width)??0)),F=S+e+n+s+P;h.attr("viewBox",`0 0 ${F} ${u}`),tt(h,u,F,i.useMaxWidth)},"draw"),Tt={draw:At},Wt={parser:yt,db:N,renderer:Tt,styles:$t};export{Wt as diagram};
