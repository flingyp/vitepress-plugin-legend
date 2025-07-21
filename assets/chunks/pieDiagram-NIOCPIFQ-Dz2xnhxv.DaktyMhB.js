import{t as G}from"./chunk-353BL4L5-B7HBeUXM.CSNCbZN7.js";import{p as c,d as I,c as j,e as q,f as J,n as K,m as Q,F,u as U,M as X,a4 as Y,a6 as Z,H as tt,D as et,T as at,a7 as S,a8 as nt,a9 as z}from"./theme.BWRB6Uio.js";import{S as rt}from"./treemap-75Q7IDZK-D3jYUceT.BRdDGdNv.js";import{h as L}from"./arc-ClDhV1Bo.Di-G8AON.js";import{h as it}from"./ordinal-DfAQgscy.DBZ2HlY2.js";import"./framework.B4DAyMYG.js";import"./baseUniq-BnBDe434.DbrzI20_.js";import"./basePickBy-e1_LFE0l.BXIfG2b6.js";import"./clone-C69uDLV8.B3nFcjMQ.js";import"./init-DjUOC4st.DHuO7-vr.js";function lt(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function st(t){return t}function ot(){var t=st,a=lt,s=null,m=S(0),g=S(z),w=S(0);function i(e){var n,o=(e=nt(e)).length,u,$,h=0,p=new Array(o),r=new Array(o),y=+m.apply(this,arguments),A=Math.min(z,Math.max(-z,g.apply(this,arguments)-y)),f,v=Math.min(Math.abs(A)/o,w.apply(this,arguments)),C=v*(A<0?-1:1),d;for(n=0;n<o;++n)(d=r[p[n]=n]=+t(e[n],n,e))>0&&(h+=d);for(a!=null?p.sort(function(x,T){return a(r[x],r[T])}):s!=null&&p.sort(function(x,T){return s(e[x],e[T])}),n=0,$=h?(A-o*C)/h:0;n<o;++n,y=f)u=p[n],d=r[u],f=y+(d>0?d*$:0)+C,r[u]={data:e[u],index:n,value:d,startAngle:y,endAngle:f,padAngle:v};return r}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,s=null,i):a},i.sort=function(e){return arguments.length?(s=e,a=null,i):s},i.startAngle=function(e){return arguments.length?(m=typeof e=="function"?e:S(+e),i):m},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:S(+e),i):g},i.padAngle=function(e){return arguments.length?(w=typeof e=="function"?e:S(+e),i):w},i}var pt=at.pie,R={sections:new Map,showData:!1},M=R.sections,W=R.showData,ct=structuredClone(pt),ut=c(()=>structuredClone(ct),"getConfig"),dt=c(()=>{M=new Map,W=R.showData,et()},"clear"),gt=c(({label:t,value:a})=>{M.has(t)||(M.set(t,a),F.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ft=c(()=>M,"getSections"),mt=c(t=>{W=t},"setShowData"),ht=c(()=>W,"getShowData"),N={getConfig:ut,clear:dt,setDiagramTitle:Q,getDiagramTitle:K,setAccTitle:J,getAccTitle:q,setAccDescription:j,getAccDescription:I,addSection:gt,getSections:ft,setShowData:mt,getShowData:ht},yt=c((t,a)=>{G(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),xt={parse:c(async t=>{const a=await rt("pie",t);F.debug(a),yt(a,N)},"parse")},St=c(t=>`
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
`,"getStyles"),wt=St,$t=c(t=>{const a=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,m)=>m.value-s.value);return ot().value(s=>s.value)(a)},"createPieArcs"),At=c((t,a,s,m)=>{F.debug(`rendering pie chart
`+t);const g=m.db,w=U(),i=X(g.getConfig(),w.pie),e=40,n=18,o=4,u=450,$=u,h=Y(a),p=h.append("g");p.attr("transform","translate("+$/2+","+u/2+")");const{themeVariables:r}=w;let[y]=Z(r.pieOuterStrokeWidth);y??(y=2);const A=i.textPosition,f=Math.min($,u)/2-e,v=L().innerRadius(0).outerRadius(f),C=L().innerRadius(f*A).outerRadius(f*A);p.append("circle").attr("cx",0).attr("cy",0).attr("r",f+y/2).attr("class","pieOuterCircle");const d=g.getSections(),x=$t(d),T=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],D=it(T);p.selectAll("mySlices").data(x).enter().append("path").attr("d",v).attr("fill",l=>D(l.data.label)).attr("class","pieCircle");let B=0;d.forEach(l=>{B+=l}),p.selectAll("mySlices").data(x).enter().append("text").text(l=>(l.data.value/B*100).toFixed(0)+"%").attr("transform",l=>"translate("+C.centroid(l)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const O=p.selectAll(".legend").data(D.domain()).enter().append("g").attr("class","legend").attr("transform",(l,b)=>{const k=n+o,H=k*D.domain().length/2,P=12*n,V=b*k-H;return"translate("+P+","+V+")"});O.append("rect").attr("width",n).attr("height",n).style("fill",D).style("stroke",D),O.data(x).append("text").attr("x",n+o).attr("y",n-o).text(l=>{const{label:b,value:k}=l.data;return g.getShowData()?`${b} [${k}]`:b});const _=Math.max(...O.selectAll("text").nodes().map(l=>(l==null?void 0:l.getBoundingClientRect().width)??0)),E=$+e+n+o+_;h.attr("viewBox",`0 0 ${E} ${u}`),tt(h,u,E,i.useMaxWidth)},"draw"),Tt={draw:At},Wt={parser:xt,db:N,renderer:Tt,styles:wt};export{Wt as diagram};
