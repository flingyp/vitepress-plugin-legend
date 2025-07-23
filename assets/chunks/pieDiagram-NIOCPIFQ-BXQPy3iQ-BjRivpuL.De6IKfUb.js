import{i as H}from"./chunk-353BL4L5-8RL_rMKC-SL9_8R8Y.KRrwHKCA.js";import{_ as c,d as _,P as j,e as E,q as Z,H as G,r as J,u as O,f as K,I as Q,a4 as X,a6 as Y,U as tt,z as et,N as at,a7 as w,a8 as nt,a9 as z}from"./theme.BB_k4Az6.js";import{I as rt}from"./treemap-75Q7IDZK-DXztvJ2e-BSUAwKiX.DKPR31WB.js";import{d as I}from"./arc-BVZO_xsq-CNZcnQT3.U-Ft_ukb.js";import{g as it}from"./ordinal-DfAQgscy-BEJTu10r.vTmdWN-q.js";import"./framework.CBoQAKmm.js";import"./baseUniq-CNqCRbrC-BdcmcNSm.BU1mroIp.js";import"./basePickBy-CWYLlH2g-Ddz4xLdB.DYCO7ML1.js";import"./clone-BYhKjDMH-CJuBb9uG.Cjl_WD2T.js";import"./init-DjUOC4st-C8Nwz6AJ.BTi8F14B.js";function ot(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function lt(t){return t}function st(){var t=lt,a=ot,l=null,m=w(0),g=w(z),S=w(0);function i(e){var n,s=(e=nt(e)).length,u,$,h=0,p=new Array(s),r=new Array(s),x=+m.apply(this,arguments),A=Math.min(z,Math.max(-z,g.apply(this,arguments)-x)),f,T=Math.min(Math.abs(A)/s,S.apply(this,arguments)),C=T*(A<0?-1:1),d;for(n=0;n<s;++n)(d=r[p[n]=n]=+t(e[n],n,e))>0&&(h+=d);for(a!=null?p.sort(function(y,v){return a(r[y],r[v])}):l!=null&&p.sort(function(y,v){return l(e[y],e[v])}),n=0,$=h?(A-s*C)/h:0;n<s;++n,x=f)u=p[n],d=r[u],f=x+(d>0?d*$:0)+C,r[u]={data:e[u],index:n,value:d,startAngle:x,endAngle:f,padAngle:T};return r}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:w(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,l=null,i):a},i.sort=function(e){return arguments.length?(l=e,a=null,i):l},i.startAngle=function(e){return arguments.length?(m=typeof e=="function"?e:w(+e),i):m},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:w(+e),i):g},i.padAngle=function(e){return arguments.length?(S=typeof e=="function"?e:w(+e),i):S},i}var pt=at.pie,N={sections:new Map,showData:!1},k=N.sections,W=N.showData,ct=structuredClone(pt),ut=c(()=>structuredClone(ct),"getConfig"),dt=c(()=>{k=new Map,W=N.showData,et()},"clear"),gt=c(({label:t,value:a})=>{k.has(t)||(k.set(t,a),O.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ft=c(()=>k,"getSections"),mt=c(t=>{W=t},"setShowData"),ht=c(()=>W,"getShowData"),L={getConfig:ut,clear:dt,setDiagramTitle:J,getDiagramTitle:G,setAccTitle:Z,getAccTitle:E,setAccDescription:j,getAccDescription:_,addSection:gt,getSections:ft,setShowData:mt,getShowData:ht},xt=c((t,a)=>{H(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),yt={parse:c(async t=>{const a=await rt("pie",t);O.debug(a),xt(a,L)},"parse")},wt=c(t=>`
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
`,"getStyles"),St=wt,$t=c(t=>{const a=[...t.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,m)=>m.value-l.value);return st().value(l=>l.value)(a)},"createPieArcs"),At=c((t,a,l,m)=>{O.debug(`rendering pie chart
`+t);const g=m.db,S=K(),i=Q(g.getConfig(),S.pie),e=40,n=18,s=4,u=450,$=u,h=X(a),p=h.append("g");p.attr("transform","translate("+$/2+","+u/2+")");const{themeVariables:r}=S;let[x]=Y(r.pieOuterStrokeWidth);x??(x=2);const A=i.textPosition,f=Math.min($,u)/2-e,T=I().innerRadius(0).outerRadius(f),C=I().innerRadius(f*A).outerRadius(f*A);p.append("circle").attr("cx",0).attr("cy",0).attr("r",f+x/2).attr("class","pieOuterCircle");const d=g.getSections(),y=$t(d),v=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],D=it(v);p.selectAll("mySlices").data(y).enter().append("path").attr("d",T).attr("fill",o=>D(o.data.label)).attr("class","pieCircle");let F=0;d.forEach(o=>{F+=o}),p.selectAll("mySlices").data(y).enter().append("text").text(o=>(o.data.value/F*100).toFixed(0)+"%").attr("transform",o=>"translate("+C.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const M=p.selectAll(".legend").data(D.domain()).enter().append("g").attr("class","legend").attr("transform",(o,R)=>{const b=n+s,V=b*D.domain().length/2,q=12*n,B=R*b-V;return"translate("+q+","+B+")"});M.append("rect").attr("width",n).attr("height",n).style("fill",D).style("stroke",D),M.data(y).append("text").attr("x",n+s).attr("y",n-s).text(o=>{const{label:R,value:b}=o.data;return g.getShowData()?`${R} [${b}]`:R});const U=Math.max(...M.selectAll("text").nodes().map(o=>(o==null?void 0:o.getBoundingClientRect().width)??0)),P=$+e+n+s+U;h.attr("viewBox",`0 0 ${P} ${u}`),tt(h,u,P,i.useMaxWidth)},"draw"),vt={draw:At},Wt={parser:yt,db:L,renderer:vt,styles:St};export{Wt as diagram};
