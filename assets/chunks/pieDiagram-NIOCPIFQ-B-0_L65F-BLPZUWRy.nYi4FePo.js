import{i as K}from"./chunk-353BL4L5-DTbxAAGP-D40KC5yI.BwhGz5Al.js";import{S as c,f as Q,p as U,d as Z,c as j,z as q,r as H,u as O,m as J,M as X,a4 as Y,a6 as _,h as tt,C as et,N as at,a7 as S,a8 as nt,a9 as z}from"./theme.DHO_NJBY.js";import{I as rt}from"./treemap-75Q7IDZK-B9BUQzDe-CObtxkEC.D1Us8F92.js";import{d as L}from"./arc--GevPpWN-CCH2nG6P.D_02a56U.js";import{g as it}from"./ordinal-DfAQgscy-BEJTu10r.vTmdWN-q.js";import"./framework.D2JuLAqv.js";import"./baseUniq-GRlwHHAx-BzQLC0NR.C58Rvmjd.js";import"./basePickBy-CWNZ__kQ-C0bHC5hO.C63O4C9M.js";import"./clone-DeMdaVZv-Ccs-YfDS.BDIFcGcL.js";import"./init-DjUOC4st-C8Nwz6AJ.BTi8F14B.js";function ot(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function lt(t){return t}function st(){var t=lt,a=ot,l=null,m=S(0),g=S(z),w=S(0);function i(e){var n,s=(e=nt(e)).length,u,$,h=0,p=new Array(s),r=new Array(s),x=+m.apply(this,arguments),A=Math.min(z,Math.max(-z,g.apply(this,arguments)-x)),f,D=Math.min(Math.abs(A)/s,w.apply(this,arguments)),v=D*(A<0?-1:1),d;for(n=0;n<s;++n)(d=r[p[n]=n]=+t(e[n],n,e))>0&&(h+=d);for(a!=null?p.sort(function(y,T){return a(r[y],r[T])}):l!=null&&p.sort(function(y,T){return l(e[y],e[T])}),n=0,$=h?(A-s*v)/h:0;n<s;++n,x=f)u=p[n],d=r[u],f=x+(d>0?d*$:0)+v,r[u]={data:e[u],index:n,value:d,startAngle:x,endAngle:f,padAngle:D};return r}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,l=null,i):a},i.sort=function(e){return arguments.length?(l=e,a=null,i):l},i.startAngle=function(e){return arguments.length?(m=typeof e=="function"?e:S(+e),i):m},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:S(+e),i):g},i.padAngle=function(e){return arguments.length?(w=typeof e=="function"?e:S(+e),i):w},i}var pt=at.pie,R={sections:new Map,showData:!1},M=R.sections,F=R.showData,ct=structuredClone(pt),ut=c(()=>structuredClone(ct),"getConfig"),dt=c(()=>{M=new Map,F=R.showData,et()},"clear"),gt=c(({label:t,value:a})=>{M.has(t)||(M.set(t,a),O.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ft=c(()=>M,"getSections"),mt=c(t=>{F=t},"setShowData"),ht=c(()=>F,"getShowData"),V={getConfig:ut,clear:dt,setDiagramTitle:H,getDiagramTitle:q,setAccTitle:j,getAccTitle:Z,setAccDescription:U,getAccDescription:Q,addSection:gt,getSections:ft,setShowData:mt,getShowData:ht},xt=c((t,a)=>{K(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),yt={parse:c(async t=>{const a=await rt("pie",t);O.debug(a),xt(a,V)},"parse")},St=c(t=>`
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
`,"getStyles"),wt=St,$t=c(t=>{const a=[...t.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,m)=>m.value-l.value);return st().value(l=>l.value)(a)},"createPieArcs"),At=c((t,a,l,m)=>{O.debug(`rendering pie chart
`+t);const g=m.db,w=J(),i=X(g.getConfig(),w.pie),e=40,n=18,s=4,u=450,$=u,h=Y(a),p=h.append("g");p.attr("transform","translate("+$/2+","+u/2+")");const{themeVariables:r}=w;let[x]=_(r.pieOuterStrokeWidth);x??(x=2);const A=i.textPosition,f=Math.min($,u)/2-e,D=L().innerRadius(0).outerRadius(f),v=L().innerRadius(f*A).outerRadius(f*A);p.append("circle").attr("cx",0).attr("cy",0).attr("r",f+x/2).attr("class","pieOuterCircle");const d=g.getSections(),y=$t(d),T=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],C=it(T);p.selectAll("mySlices").data(y).enter().append("path").attr("d",D).attr("fill",o=>C(o.data.label)).attr("class","pieCircle");let W=0;d.forEach(o=>{W+=o}),p.selectAll("mySlices").data(y).enter().append("text").text(o=>(o.data.value/W*100).toFixed(0)+"%").attr("transform",o=>"translate("+v.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const P=p.selectAll(".legend").data(C.domain()).enter().append("g").attr("class","legend").attr("transform",(o,b)=>{const k=n+s,E=k*C.domain().length/2,I=12*n,G=b*k-E;return"translate("+I+","+G+")"});P.append("rect").attr("width",n).attr("height",n).style("fill",C).style("stroke",C),P.data(y).append("text").attr("x",n+s).attr("y",n-s).text(o=>{const{label:b,value:k}=o.data;return g.getShowData()?`${b} [${k}]`:b});const B=Math.max(...P.selectAll("text").nodes().map(o=>(o==null?void 0:o.getBoundingClientRect().width)??0)),N=$+e+n+s+B;h.attr("viewBox",`0 0 ${N} ${u}`),tt(h,u,N,i.useMaxWidth)},"draw"),Tt={draw:At},Ft={parser:yt,db:V,renderer:Tt,styles:wt};export{Ft as diagram};
