import{d as ft,g as rt,h as gt,o as mt}from"./chunk-67H74DCK-CpazWKUa-BbjrTqgb.BFDq6u7u.js";import{l as xt}from"./chunk-E2GYISFI-BVZ2tVD2-D6TBnz9O.IgJF6oDE.js";import{S as s,d as kt,c as bt,e as _t,z as vt,n as wt,l as $t,m as V,f as Y,M as Tt,I as St}from"./theme.DGywzT-0.js";import{d as tt}from"./arc-aavUJmbb-BU898awq.ocH-3mBF.js";import"./framework.DopOb1th.js";var U=function(){var t=s(function(d,i,a,u){for(a=a||{},u=d.length;u--;a[d[u]]=i);return a},"o"),e=[6,8,10,11,12,14,16,17,18],r=[1,9],l=[1,10],n=[1,11],y=[1,12],c=[1,13],h=[1,14],f={trace:s(function(){},"trace"),yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:s(function(d,i,a,u,p,o,x){var k=o.length-1;switch(p){case 1:return o[k-1];case 2:this.$=[];break;case 3:o[k-1].push(o[k]),this.$=o[k-1];break;case 4:case 5:this.$=o[k];break;case 6:case 7:this.$=[];break;case 8:u.setDiagramTitle(o[k].substr(6)),this.$=o[k].substr(6);break;case 9:this.$=o[k].trim(),u.setAccTitle(this.$);break;case 10:case 11:this.$=o[k].trim(),u.setAccDescription(this.$);break;case 12:u.addSection(o[k].substr(8)),this.$=o[k].substr(8);break;case 13:u.addTask(o[k-1],o[k]),this.$="task";break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:r,12:l,14:n,16:y,17:c,18:h},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:15,11:r,12:l,14:n,16:y,17:c,18:h},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,16]},{15:[1,17]},t(e,[2,11]),t(e,[2,12]),{19:[1,18]},t(e,[2,4]),t(e,[2,9]),t(e,[2,10]),t(e,[2,13])],defaultActions:{},parseError:s(function(d,i){if(i.recoverable)this.trace(d);else{var a=new Error(d);throw a.hash=i,a}},"parseError"),parse:s(function(d){var i=this,a=[0],u=[],p=[null],o=[],x=this.table,k="",E=0,P=0,ut=2,J=1,pt=o.slice.call(arguments,1),b=Object.create(this.lexer),I={yy:{}};for(var D in this.yy)Object.prototype.hasOwnProperty.call(this.yy,D)&&(I.yy[D]=this.yy[D]);b.setInput(d,I.yy),I.yy.lexer=b,I.yy.parser=this,typeof b.yylloc>"u"&&(b.yylloc={});var H=b.yylloc;o.push(H);var yt=b.options&&b.options.ranges;typeof I.yy.parseError=="function"?this.parseError=I.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function dt(v){a.length=a.length-2*v,p.length=p.length-v,o.length=o.length-v}s(dt,"popStack");function Q(){var v;return v=u.pop()||b.lex()||J,typeof v!="number"&&(v instanceof Array&&(u=v,v=u.pop()),v=i.symbols_[v]||v),v}s(Q,"lex");for(var _,A,w,q,j={},N,S,K,O;;){if(A=a[a.length-1],this.defaultActions[A]?w=this.defaultActions[A]:((_===null||typeof _>"u")&&(_=Q()),w=x[A]&&x[A][_]),typeof w>"u"||!w.length||!w[0]){var X="";O=[];for(N in x[A])this.terminals_[N]&&N>ut&&O.push("'"+this.terminals_[N]+"'");b.showPosition?X="Parse error on line "+(E+1)+`:
`+b.showPosition()+`
Expecting `+O.join(", ")+", got '"+(this.terminals_[_]||_)+"'":X="Parse error on line "+(E+1)+": Unexpected "+(_==J?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(X,{text:b.match,token:this.terminals_[_]||_,line:b.yylineno,loc:H,expected:O})}if(w[0]instanceof Array&&w.length>1)throw new Error("Parse Error: multiple actions possible at state: "+A+", token: "+_);switch(w[0]){case 1:a.push(_),p.push(b.yytext),o.push(b.yylloc),a.push(w[1]),_=null,P=b.yyleng,k=b.yytext,E=b.yylineno,H=b.yylloc;break;case 2:if(S=this.productions_[w[1]][1],j.$=p[p.length-S],j._$={first_line:o[o.length-(S||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(S||1)].first_column,last_column:o[o.length-1].last_column},yt&&(j._$.range=[o[o.length-(S||1)].range[0],o[o.length-1].range[1]]),q=this.performAction.apply(j,[k,P,E,I.yy,w[1],p,o].concat(pt)),typeof q<"u")return q;S&&(a=a.slice(0,-1*S*2),p=p.slice(0,-1*S),o=o.slice(0,-1*S)),a.push(this.productions_[w[1]][0]),p.push(j.$),o.push(j._$),K=x[a[a.length-2]][a[a.length-1]],a.push(K);break;case 3:return!0}}return!0},"parse")},m=function(){var d={EOF:1,parseError:s(function(i,a){if(this.yy.parser)this.yy.parser.parseError(i,a);else throw new Error(i)},"parseError"),setInput:s(function(i,a){return this.yy=a||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:s(function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var a=i.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},"input"),unput:s(function(i){var a=i.length,u=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var p=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),u.length-1&&(this.yylineno-=u.length-1);var o=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:u?(u.length===p.length?this.yylloc.first_column:0)+p[p.length-u.length].length-u[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[o[0],o[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},"unput"),more:s(function(){return this._more=!0,this},"more"),reject:s(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:s(function(i){this.unput(this.match.slice(i))},"less"),pastInput:s(function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:s(function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:s(function(){var i=this.pastInput(),a=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+a+"^"},"showPosition"),test_match:s(function(i,a){var u,p,o;if(this.options.backtrack_lexer&&(o={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(o.yylloc.range=this.yylloc.range.slice(0))),p=i[0].match(/(?:\r\n?|\n).*/g),p&&(this.yylineno+=p.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:p?p[p.length-1].length-p[p.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],u=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),u)return u;if(this._backtrack){for(var x in o)this[x]=o[x];return!1}return!1},"test_match"),next:s(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,a,u,p;this._more||(this.yytext="",this.match="");for(var o=this._currentRules(),x=0;x<o.length;x++)if(u=this._input.match(this.rules[o[x]]),u&&(!a||u[0].length>a[0].length)){if(a=u,p=x,this.options.backtrack_lexer){if(i=this.test_match(u,o[x]),i!==!1)return i;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(i=this.test_match(a,o[p]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:s(function(){var i=this.next();return i||this.lex()},"lex"),begin:s(function(i){this.conditionStack.push(i)},"begin"),popState:s(function(){var i=this.conditionStack.length-1;return i>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:s(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:s(function(i){return i=this.conditionStack.length-1-Math.abs(i||0),i>=0?this.conditionStack[i]:"INITIAL"},"topState"),pushState:s(function(i){this.begin(i)},"pushState"),stateStackSize:s(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:s(function(i,a,u,p){switch(u){case 0:break;case 1:break;case 2:return 10;case 3:break;case 4:break;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}};return d}();f.lexer=m;function g(){this.yy={}}return s(g,"Parser"),g.prototype=f,f.Parser=g,new g}();U.parser=U;var Mt=U,F="",Z=[],B=[],R=[],Ct=s(function(){Z.length=0,B.length=0,F="",R.length=0,St()},"clear"),Et=s(function(t){F=t,Z.push(t)},"addSection"),It=s(function(){return Z},"getSections"),At=s(function(){let t=et();const e=100;let r=0;for(;!t&&r<e;)t=et(),r++;return B.push(...R),B},"getTasks"),Pt=s(function(){const t=[];return B.forEach(e=>{e.people&&t.push(...e.people)}),[...new Set(t)].sort()},"updateActors"),jt=s(function(t,e){const r=e.substr(1).split(":");let l=0,n=[];r.length===1?(l=Number(r[0]),n=[]):(l=Number(r[0]),n=r[1].split(","));const y=n.map(h=>h.trim()),c={section:F,type:F,people:y,task:t,score:l};R.push(c)},"addTask"),Ft=s(function(t){const e={section:F,type:F,description:t,task:t,classes:[]};B.push(e)},"addTaskOrg"),et=s(function(){const t=s(function(r){return R[r].processed},"compileTask");let e=!0;for(const[r,l]of R.entries())t(r),e=e&&l.processed;return e},"compileTasks"),Vt=s(function(){return Pt()},"getActors"),it={getConfig:s(()=>V().journey,"getConfig"),clear:Ct,setDiagramTitle:$t,getDiagramTitle:wt,setAccTitle:vt,getAccTitle:_t,setAccDescription:bt,getAccDescription:kt,addSection:Et,getSections:It,getTasks:At,addTask:jt,addTaskOrg:Ft,getActors:Vt},Bt=s(t=>`.label {
    font-family: ${t.fontFamily};
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
    font-family: ${t.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0?`fill: ${t.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0?`fill: ${t.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0?`fill: ${t.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0?`fill: ${t.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0?`fill: ${t.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0?`fill: ${t.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0?`fill: ${t.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0?`fill: ${t.fillType7}`:""};
  }

  .actor-0 {
    ${t.actor0?`fill: ${t.actor0}`:""};
  }
  .actor-1 {
    ${t.actor1?`fill: ${t.actor1}`:""};
  }
  .actor-2 {
    ${t.actor2?`fill: ${t.actor2}`:""};
  }
  .actor-3 {
    ${t.actor3?`fill: ${t.actor3}`:""};
  }
  .actor-4 {
    ${t.actor4?`fill: ${t.actor4}`:""};
  }
  .actor-5 {
    ${t.actor5?`fill: ${t.actor5}`:""};
  }
  ${xt()}
`,"getStyles"),Rt=Bt,G=s(function(t,e){return mt(t,e)},"drawRect"),Lt=s(function(t,e){const r=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),l=t.append("g");l.append("circle").attr("cx",e.cx-15/3).attr("cy",e.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),l.append("circle").attr("cx",e.cx+15/3).attr("cy",e.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function n(h){const f=tt().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);h.append("path").attr("class","mouth").attr("d",f).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}s(n,"smile");function y(h){const f=tt().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);h.append("path").attr("class","mouth").attr("d",f).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}s(y,"sad");function c(h){h.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return s(c,"ambivalent"),e.score>3?n(l):e.score<3?y(l):c(l),r},"drawFace"),ot=s(function(t,e){const r=t.append("circle");return r.attr("cx",e.cx),r.attr("cy",e.cy),r.attr("class","actor-"+e.pos),r.attr("fill",e.fill),r.attr("stroke",e.stroke),r.attr("r",e.r),r.class!==void 0&&r.attr("class",r.class),e.title!==void 0&&r.append("title").text(e.title),r},"drawCircle"),lt=s(function(t,e){return gt(t,e)},"drawText"),Nt=s(function(t,e){function r(n,y,c,h,f){return n+","+y+" "+(n+c)+","+y+" "+(n+c)+","+(y+h-f)+" "+(n+c-f*1.2)+","+(y+h)+" "+n+","+(y+h)}s(r,"genPoints");const l=t.append("polygon");l.attr("points",r(e.x,e.y,50,20,7)),l.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,lt(t,e)},"drawLabel"),Ot=s(function(t,e,r){const l=t.append("g"),n=rt();n.x=e.x,n.y=e.y,n.fill=e.fill,n.width=r.width*e.taskCount+r.diagramMarginX*(e.taskCount-1),n.height=r.height,n.class="journey-section section-type-"+e.num,n.rx=3,n.ry=3,G(l,n),ct(r)(e.text,l,n.x,n.y,n.width,n.height,{class:"journey-section section-type-"+e.num},r,e.colour)},"drawSection"),nt=-1,zt=s(function(t,e,r){const l=e.x+r.width/2,n=t.append("g");nt++;const y=300+5*30;n.append("line").attr("id","task"+nt).attr("x1",l).attr("y1",e.y).attr("x2",l).attr("y2",y).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),Lt(n,{cx:l,cy:300+(5-e.score)*30,score:e.score});const c=rt();c.x=e.x,c.y=e.y,c.fill=e.fill,c.width=r.width,c.height=r.height,c.class="task task-type-"+e.num,c.rx=3,c.ry=3,G(n,c);let h=e.x+14;e.people.forEach(f=>{const m=e.actors[f].color,g={cx:h,cy:e.y,r:7,fill:m,stroke:"#000",title:f,pos:e.actors[f].position};ot(n,g),h+=10}),ct(r)(e.task,n,c.x,c.y,c.width,c.height,{class:"task"},r,e.colour)},"drawTask"),Dt=s(function(t,e){ft(t,e)},"drawBackgroundRect"),ct=function(){function t(n,y,c,h,f,m,g,d){const i=y.append("text").attr("x",c+f/2).attr("y",h+m/2+5).style("font-color",d).style("text-anchor","middle").text(n);l(i,g)}s(t,"byText");function e(n,y,c,h,f,m,g,d,i){const{taskFontSize:a,taskFontFamily:u}=d,p=n.split(/<br\s*\/?>/gi);for(let o=0;o<p.length;o++){const x=o*a-a*(p.length-1)/2,k=y.append("text").attr("x",c+f/2).attr("y",h).attr("fill",i).style("text-anchor","middle").style("font-size",a).style("font-family",u);k.append("tspan").attr("x",c+f/2).attr("dy",x).text(p[o]),k.attr("y",h+m/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),l(k,g)}}s(e,"byTspan");function r(n,y,c,h,f,m,g,d){const i=y.append("switch"),a=i.append("foreignObject").attr("x",c).attr("y",h).attr("width",f).attr("height",m).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");a.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(n),e(n,i,c,h,f,m,g,d),l(a,g)}s(r,"byFo");function l(n,y){for(const c in y)c in y&&n.attr(c,y[c])}return s(l,"_setTextAttrs"),function(n){return n.textPlacement==="fo"?r:n.textPlacement==="old"?t:e}}(),Ht=s(function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},"initGraphics"),L={drawRect:G,drawCircle:ot,drawSection:Ot,drawText:lt,drawLabel:Nt,drawTask:zt,drawBackgroundRect:Dt,initGraphics:Ht},qt=s(function(t){Object.keys(t).forEach(function(e){T[e]=t[e]})},"setConf"),M={},z=0;function ht(t){const e=V().journey,r=e.maxLabelWidth;z=0;let l=60;Object.keys(M).forEach(n=>{const y=M[n].color,c={cx:20,cy:l,r:7,fill:y,stroke:"#000",pos:M[n].position};L.drawCircle(t,c);let h=t.append("text").attr("visibility","hidden").text(n);const f=h.node().getBoundingClientRect().width;h.remove();let m=[];if(f<=r)m=[n];else{const g=n.split(" ");let d="";h=t.append("text").attr("visibility","hidden"),g.forEach(i=>{const a=d?`${d} ${i}`:i;if(h.text(a),h.node().getBoundingClientRect().width>r){if(d&&m.push(d),d=i,h.text(i),h.node().getBoundingClientRect().width>r){let u="";for(const p of i)u+=p,h.text(u+"-"),h.node().getBoundingClientRect().width>r&&(m.push(u.slice(0,-1)+"-"),u=p);d=u}}else d=a}),d&&m.push(d),h.remove()}m.forEach((g,d)=>{const i={x:40,y:l+7+d*20,fill:"#666",text:g,textMargin:e.boxTextMargin??5},a=L.drawText(t,i).node().getBoundingClientRect().width;a>z&&a>e.leftMargin-a&&(z=a)}),l+=Math.max(20,m.length*20)})}s(ht,"drawActorLegend");var T=V().journey,C=0,Xt=s(function(t,e,r,l){const n=V(),y=n.journey.titleColor,c=n.journey.titleFontSize,h=n.journey.titleFontFamily,f=n.securityLevel;let m;f==="sandbox"&&(m=Y("#i"+e));const g=f==="sandbox"?Y(m.nodes()[0].contentDocument.body):Y("body");$.init();const d=g.select("#"+e);L.initGraphics(d);const i=l.db.getTasks(),a=l.db.getDiagramTitle(),u=l.db.getActors();for(const P in M)delete M[P];let p=0;u.forEach(P=>{M[P]={color:T.actorColours[p%T.actorColours.length],position:p},p++}),ht(d),C=T.leftMargin+z,$.insert(0,0,C,Object.keys(M).length*50),Yt(d,i,0);const o=$.getBounds();a&&d.append("text").text(a).attr("x",C).attr("font-size",c).attr("font-weight","bold").attr("y",25).attr("fill",y).attr("font-family",h);const x=o.stopy-o.starty+2*T.diagramMarginY,k=C+o.stopx+2*T.diagramMarginX;Tt(d,x,k,T.useMaxWidth),d.append("line").attr("x1",C).attr("y1",T.height*4).attr("x2",k-C-4).attr("y2",T.height*4).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");const E=a?70:0;d.attr("viewBox",`${o.startx} -25 ${k} ${x+E}`),d.attr("preserveAspectRatio","xMinYMin meet"),d.attr("height",x+E+25)},"draw"),$={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:s(function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},"init"),updateVal:s(function(t,e,r,l){t[e]===void 0?t[e]=r:t[e]=l(r,t[e])},"updateVal"),updateBounds:s(function(t,e,r,l){const n=V().journey,y=this;let c=0;function h(f){return s(function(m){c++;const g=y.sequenceItems.length-c+1;y.updateVal(m,"starty",e-g*n.boxMargin,Math.min),y.updateVal(m,"stopy",l+g*n.boxMargin,Math.max),y.updateVal($.data,"startx",t-g*n.boxMargin,Math.min),y.updateVal($.data,"stopx",r+g*n.boxMargin,Math.max),f!=="activation"&&(y.updateVal(m,"startx",t-g*n.boxMargin,Math.min),y.updateVal(m,"stopx",r+g*n.boxMargin,Math.max),y.updateVal($.data,"starty",e-g*n.boxMargin,Math.min),y.updateVal($.data,"stopy",l+g*n.boxMargin,Math.max))},"updateItemBounds")}s(h,"updateFn"),this.sequenceItems.forEach(h())},"updateBounds"),insert:s(function(t,e,r,l){const n=Math.min(t,r),y=Math.max(t,r),c=Math.min(e,l),h=Math.max(e,l);this.updateVal($.data,"startx",n,Math.min),this.updateVal($.data,"starty",c,Math.min),this.updateVal($.data,"stopx",y,Math.max),this.updateVal($.data,"stopy",h,Math.max),this.updateBounds(n,c,y,h)},"insert"),bumpVerticalPos:s(function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},"bumpVerticalPos"),getVerticalPos:s(function(){return this.verticalPos},"getVerticalPos"),getBounds:s(function(){return this.data},"getBounds")},W=T.sectionFills,st=T.sectionColours,Yt=s(function(t,e,r){const l=V().journey;let n="";const y=l.height*2+l.diagramMarginY,c=r+y;let h=0,f="#CCC",m="black",g=0;for(const[d,i]of e.entries()){if(n!==i.section){f=W[h%W.length],g=h%W.length,m=st[h%st.length];let u=0;const p=i.section;for(let x=d;x<e.length&&e[x].section==p;x++)u=u+1;const o={x:d*l.taskMargin+d*l.width+C,y:50,text:i.section,fill:f,num:g,colour:m,taskCount:u};L.drawSection(t,o,l),n=i.section,h++}const a=i.people.reduce((u,p)=>(M[p]&&(u[p]=M[p]),u),{});i.x=d*l.taskMargin+d*l.width+C,i.y=c,i.width=l.diagramMarginX,i.height=l.diagramMarginY,i.colour=m,i.fill=f,i.num=g,i.actors=a,L.drawTask(t,i,l),$.insert(i.x,i.y,i.x+i.width+l.taskMargin,300+5*30)}},"drawTasks"),at={setConf:qt,draw:Xt},Qt={parser:Mt,db:it,renderer:at,styles:Rt,init:s(t=>{at.setConf(t.journey),it.clear()},"init")};export{Qt as diagram};
