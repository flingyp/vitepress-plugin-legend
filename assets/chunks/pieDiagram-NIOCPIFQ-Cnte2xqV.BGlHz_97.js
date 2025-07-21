import{t as G}from"./chunk-353BL4L5-CoZYCFcj.dUbxiBtB.js";import{p as c,e as J,d as Q,g as Z,j as _,s as q,r as H,F,u as K,I as U,a4 as X,a6 as Y,P as tt,w as et,T as at,a7 as S,a8 as nt,a9 as z}from"./theme.F6PnGTkS.js";import{S as rt}from"./treemap-75Q7IDZK-DR1A_s8Y.43Ox-goP.js";import{h as B}from"./arc-Bx--BNLJ.BhaSh8hP.js";import{h as it}from"./ordinal-DfAQgscy.DBZ2HlY2.js";import"./framework.B4DAyMYG.js";import"./baseUniq-y2HM5nbD.Vs1g8xSB.js";import"./basePickBy-zvqYOuXh.BrqSNkjb.js";import"./clone-DJqr9BGE.CJYgbQh-.js";import"./init-DjUOC4st.DHuO7-vr.js";function lt(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function st(t){return t}function ot(){var t=st,a=lt,s=null,h=S(0),g=S(z),w=S(0);function i(e){var n,o=(e=nt(e)).length,u,$,m=0,p=new Array(o),r=new Array(o),y=+h.apply(this,arguments),A=Math.min(z,Math.max(-z,g.apply(this,arguments)-y)),f,D=Math.min(Math.abs(A)/o,w.apply(this,arguments)),C=D*(A<0?-1:1),d;for(n=0;n<o;++n)(d=r[p[n]=n]=+t(e[n],n,e))>0&&(m+=d);for(a!=null?p.sort(function(x,T){return a(r[x],r[T])}):s!=null&&p.sort(function(x,T){return s(e[x],e[T])}),n=0,$=m?(A-o*C)/m:0;n<o;++n,y=f)u=p[n],d=r[u],f=y+(d>0?d*$:0)+C,r[u]={data:e[u],index:n,value:d,startAngle:y,endAngle:f,padAngle:D};return r}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,s=null,i):a},i.sort=function(e){return arguments.length?(s=e,a=null,i):s},i.startAngle=function(e){return arguments.length?(h=typeof e=="function"?e:S(+e),i):h},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:S(+e),i):g},i.padAngle=function(e){return arguments.length?(w=typeof e=="function"?e:S(+e),i):w},i}var pt=at.pie,R={sections:new Map,showData:!1},M=R.sections,L=R.showData,ct=structuredClone(pt),ut=c(()=>structuredClone(ct),"getConfig"),dt=c(()=>{M=new Map,L=R.showData,et()},"clear"),gt=c(({label:t,value:a})=>{M.has(t)||(M.set(t,a),F.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ft=c(()=>M,"getSections"),ht=c(t=>{L=t},"setShowData"),mt=c(()=>L,"getShowData"),E={getConfig:ut,clear:dt,setDiagramTitle:H,getDiagramTitle:q,setAccTitle:_,getAccTitle:Z,setAccDescription:Q,getAccDescription:J,addSection:gt,getSections:ft,setShowData:ht,getShowData:mt},yt=c((t,a)=>{G(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),xt={parse:c(async t=>{const a=await rt("pie",t);F.debug(a),yt(a,E)},"parse")},St=c(t=>`
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
`,"getStyles"),wt=St,$t=c(t=>{const a=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,h)=>h.value-s.value);return ot().value(s=>s.value)(a)},"createPieArcs"),At=c((t,a,s,h)=>{F.debug(`rendering pie chart
`+t);const g=h.db,w=K(),i=U(g.getConfig(),w.pie),e=40,n=18,o=4,u=450,$=u,m=X(a),p=m.append("g");p.attr("transform","translate("+$/2+","+u/2+")");const{themeVariables:r}=w;let[y]=Y(r.pieOuterStrokeWidth);y??(y=2);const A=i.textPosition,f=Math.min($,u)/2-e,D=B().innerRadius(0).outerRadius(f),C=B().innerRadius(f*A).outerRadius(f*A);p.append("circle").attr("cx",0).attr("cy",0).attr("r",f+y/2).attr("class","pieOuterCircle");const d=g.getSections(),x=$t(d),T=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],v=it(T);p.selectAll("mySlices").data(x).enter().append("path").attr("d",D).attr("fill",l=>v(l.data.label)).attr("class","pieCircle");let W=0;d.forEach(l=>{W+=l}),p.selectAll("mySlices").data(x).enter().append("text").text(l=>(l.data.value/W*100).toFixed(0)+"%").attr("transform",l=>"translate("+C.centroid(l)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const O=p.selectAll(".legend").data(v.domain()).enter().append("g").attr("class","legend").attr("transform",(l,b)=>{const k=n+o,I=k*v.domain().length/2,V=12*n,j=b*k-I;return"translate("+V+","+j+")"});O.append("rect").attr("width",n).attr("height",n).style("fill",v).style("stroke",v),O.data(x).append("text").attr("x",n+o).attr("y",n-o).text(l=>{const{label:b,value:k}=l.data;return g.getShowData()?`${b} [${k}]`:b});const N=Math.max(...O.selectAll("text").nodes().map(l=>(l==null?void 0:l.getBoundingClientRect().width)??0)),P=$+e+n+o+N;m.attr("viewBox",`0 0 ${P} ${u}`),tt(m,u,P,i.useMaxWidth)},"draw"),Tt={draw:At},Lt={parser:xt,db:E,renderer:Tt,styles:wt};export{Lt as diagram};
