import{a as Qt}from"./chunk-BFAMUDN2-BEeQSmdN-BIjApDQ8.Arvu2XK9.js";import{$ as te}from"./chunk-SKB7J2MH-B8LlLTQ8-DQdYHAt-.DFFDTq0d.js";import{S as d,u as _,m as F,v as ee,X as se,d as ie,c as re,f as ae,p as ne,r as oe,z as le,aC as ce,l as K,C as he}from"./theme.CNv947xj.js";var Dt=function(){var t=d(function(P,r,a,y){for(a=a||{},y=P.length;y--;a[P[y]]=r);return a},"o"),e=[1,2],n=[1,3],s=[1,4],h=[2,4],o=[1,9],f=[1,11],S=[1,16],l=[1,17],g=[1,18],I=[1,19],b=[1,33],D=[1,20],N=[1,21],v=[1,22],O=[1,23],k=[1,24],u=[1,26],C=[1,27],$=[1,28],R=[1,29],W=[1,30],B=[1,31],G=[1,32],it=[1,35],rt=[1,36],at=[1,37],nt=[1,38],H=[1,34],p=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],ot=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,39,40,41,45,48,51,52,53,54,57],xt=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],gt={trace:d(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,CLICK:38,STRING:39,HREF:40,classDef:41,CLASSDEF_ID:42,CLASSDEF_STYLEOPTS:43,DEFAULT:44,style:45,STYLE_IDS:46,STYLEDEF_STYLEOPTS:47,class:48,CLASSENTITY_IDS:49,STYLECLASS:50,direction_tb:51,direction_bt:52,direction_rl:53,direction_lr:54,eol:55,";":56,EDGE_STATE:57,STYLE_SEPARATOR:58,left_of:59,right_of:60,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"CLICK",39:"STRING",40:"HREF",41:"classDef",42:"CLASSDEF_ID",43:"CLASSDEF_STYLEOPTS",44:"DEFAULT",45:"style",46:"STYLE_IDS",47:"STYLEDEF_STYLEOPTS",48:"class",49:"CLASSENTITY_IDS",50:"STYLECLASS",51:"direction_tb",52:"direction_bt",53:"direction_rl",54:"direction_lr",56:";",57:"EDGE_STATE",58:"STYLE_SEPARATOR",59:"left_of",60:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[9,5],[9,5],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[55,1],[55,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:d(function(P,r,a,y,m,i,x){var c=i.length-1;switch(m){case 3:return y.setRootDoc(i[c]),i[c];case 4:this.$=[];break;case 5:i[c]!="nl"&&(i[c-1].push(i[c]),this.$=i[c-1]);break;case 6:case 7:this.$=i[c];break;case 8:this.$="nl";break;case 12:this.$=i[c];break;case 13:const Z=i[c-1];Z.description=y.trimColon(i[c]),this.$=Z;break;case 14:this.$={stmt:"relation",state1:i[c-2],state2:i[c]};break;case 15:const St=y.trimColon(i[c]);this.$={stmt:"relation",state1:i[c-3],state2:i[c-1],description:St};break;case 19:this.$={stmt:"state",id:i[c-3],type:"default",description:"",doc:i[c-1]};break;case 20:var M=i[c],U=i[c-2].trim();if(i[c].match(":")){var ct=i[c].split(":");M=ct[0],U=[U,ct[1]]}this.$={stmt:"state",id:M,type:"default",description:U};break;case 21:this.$={stmt:"state",id:i[c-3],type:"default",description:i[c-5],doc:i[c-1]};break;case 22:this.$={stmt:"state",id:i[c],type:"fork"};break;case 23:this.$={stmt:"state",id:i[c],type:"join"};break;case 24:this.$={stmt:"state",id:i[c],type:"choice"};break;case 25:this.$={stmt:"state",id:y.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:i[c-1].trim(),note:{position:i[c-2].trim(),text:i[c].trim()}};break;case 29:this.$=i[c].trim(),y.setAccTitle(this.$);break;case 30:case 31:this.$=i[c].trim(),y.setAccDescription(this.$);break;case 32:this.$={stmt:"click",id:i[c-3],url:i[c-2],tooltip:i[c-1]};break;case 33:this.$={stmt:"click",id:i[c-3],url:i[c-1],tooltip:""};break;case 34:case 35:this.$={stmt:"classDef",id:i[c-1].trim(),classes:i[c].trim()};break;case 36:this.$={stmt:"style",id:i[c-1].trim(),styleClass:i[c].trim()};break;case 37:this.$={stmt:"applyClass",id:i[c-1].trim(),styleClass:i[c].trim()};break;case 38:y.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:y.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:y.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:y.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:i[c].trim(),type:"default",description:""};break;case 46:this.$={stmt:"state",id:i[c-2].trim(),classes:[i[c].trim()],type:"default",description:""};break;case 47:this.$={stmt:"state",id:i[c-2].trim(),classes:[i[c].trim()],type:"default",description:""};break}},"anonymous"),table:[{3:1,4:e,5:n,6:s},{1:[3]},{3:5,4:e,5:n,6:s},{3:6,4:e,5:n,6:s},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],h,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:o,5:f,8:8,9:10,10:12,11:13,12:14,13:15,16:S,17:l,19:g,22:I,24:b,25:D,26:N,27:v,28:O,29:k,32:25,33:u,35:C,37:$,38:R,41:W,45:B,48:G,51:it,52:rt,53:at,54:nt,57:H},t(p,[2,5]),{9:39,10:12,11:13,12:14,13:15,16:S,17:l,19:g,22:I,24:b,25:D,26:N,27:v,28:O,29:k,32:25,33:u,35:C,37:$,38:R,41:W,45:B,48:G,51:it,52:rt,53:at,54:nt,57:H},t(p,[2,7]),t(p,[2,8]),t(p,[2,9]),t(p,[2,10]),t(p,[2,11]),t(p,[2,12],{14:[1,40],15:[1,41]}),t(p,[2,16]),{18:[1,42]},t(p,[2,18],{20:[1,43]}),{23:[1,44]},t(p,[2,22]),t(p,[2,23]),t(p,[2,24]),t(p,[2,25]),{30:45,31:[1,46],59:[1,47],60:[1,48]},t(p,[2,28]),{34:[1,49]},{36:[1,50]},t(p,[2,31]),{13:51,24:b,57:H},{42:[1,52],44:[1,53]},{46:[1,54]},{49:[1,55]},t(ot,[2,44],{58:[1,56]}),t(ot,[2,45],{58:[1,57]}),t(p,[2,38]),t(p,[2,39]),t(p,[2,40]),t(p,[2,41]),t(p,[2,6]),t(p,[2,13]),{13:58,24:b,57:H},t(p,[2,17]),t(xt,h,{7:59}),{24:[1,60]},{24:[1,61]},{23:[1,62]},{24:[2,48]},{24:[2,49]},t(p,[2,29]),t(p,[2,30]),{39:[1,63],40:[1,64]},{43:[1,65]},{43:[1,66]},{47:[1,67]},{50:[1,68]},{24:[1,69]},{24:[1,70]},t(p,[2,14],{14:[1,71]}),{4:o,5:f,8:8,9:10,10:12,11:13,12:14,13:15,16:S,17:l,19:g,21:[1,72],22:I,24:b,25:D,26:N,27:v,28:O,29:k,32:25,33:u,35:C,37:$,38:R,41:W,45:B,48:G,51:it,52:rt,53:at,54:nt,57:H},t(p,[2,20],{20:[1,73]}),{31:[1,74]},{24:[1,75]},{39:[1,76]},{39:[1,77]},t(p,[2,34]),t(p,[2,35]),t(p,[2,36]),t(p,[2,37]),t(ot,[2,46]),t(ot,[2,47]),t(p,[2,15]),t(p,[2,19]),t(xt,h,{7:78}),t(p,[2,26]),t(p,[2,27]),{5:[1,79]},{5:[1,80]},{4:o,5:f,8:8,9:10,10:12,11:13,12:14,13:15,16:S,17:l,19:g,21:[1,81],22:I,24:b,25:D,26:N,27:v,28:O,29:k,32:25,33:u,35:C,37:$,38:R,41:W,45:B,48:G,51:it,52:rt,53:at,54:nt,57:H},t(p,[2,32]),t(p,[2,33]),t(p,[2,21])],defaultActions:{5:[2,1],6:[2,2],47:[2,48],48:[2,49]},parseError:d(function(P,r){if(r.recoverable)this.trace(P);else{var a=new Error(P);throw a.hash=r,a}},"parseError"),parse:d(function(P){var r=this,a=[0],y=[],m=[null],i=[],x=this.table,c="",M=0,U=0,ct=2,Z=1,St=i.slice.call(arguments,1),T=Object.create(this.lexer),X={yy:{}};for(var mt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,mt)&&(X.yy[mt]=this.yy[mt]);T.setInput(P,X.yy),X.yy.lexer=T,X.yy.parser=this,typeof T.yylloc>"u"&&(T.yylloc={});var _t=T.yylloc;i.push(_t);var qt=T.options&&T.options.ranges;typeof X.yy.parseError=="function"?this.parseError=X.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Zt(A){a.length=a.length-2*A,m.length=m.length-A,i.length=i.length-A}d(Zt,"popStack");function Lt(){var A;return A=y.pop()||T.lex()||Z,typeof A!="number"&&(A instanceof Array&&(y=A,A=y.pop()),A=r.symbols_[A]||A),A}d(Lt,"lex");for(var L,z,w,Tt,J={},ht,Y,It,dt;;){if(z=a[a.length-1],this.defaultActions[z]?w=this.defaultActions[z]:((L===null||typeof L>"u")&&(L=Lt()),w=x[z]&&x[z][L]),typeof w>"u"||!w.length||!w[0]){var bt="";dt=[];for(ht in x[z])this.terminals_[ht]&&ht>ct&&dt.push("'"+this.terminals_[ht]+"'");T.showPosition?bt="Parse error on line "+(M+1)+`:
`+T.showPosition()+`
Expecting `+dt.join(", ")+", got '"+(this.terminals_[L]||L)+"'":bt="Parse error on line "+(M+1)+": Unexpected "+(L==Z?"end of input":"'"+(this.terminals_[L]||L)+"'"),this.parseError(bt,{text:T.match,token:this.terminals_[L]||L,line:T.yylineno,loc:_t,expected:dt})}if(w[0]instanceof Array&&w.length>1)throw new Error("Parse Error: multiple actions possible at state: "+z+", token: "+L);switch(w[0]){case 1:a.push(L),m.push(T.yytext),i.push(T.yylloc),a.push(w[1]),L=null,U=T.yyleng,c=T.yytext,M=T.yylineno,_t=T.yylloc;break;case 2:if(Y=this.productions_[w[1]][1],J.$=m[m.length-Y],J._$={first_line:i[i.length-(Y||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(Y||1)].first_column,last_column:i[i.length-1].last_column},qt&&(J._$.range=[i[i.length-(Y||1)].range[0],i[i.length-1].range[1]]),Tt=this.performAction.apply(J,[c,U,M,X.yy,w[1],m,i].concat(St)),typeof Tt<"u")return Tt;Y&&(a=a.slice(0,-1*Y*2),m=m.slice(0,-1*Y),i=i.slice(0,-1*Y)),a.push(this.productions_[w[1]][0]),m.push(J.$),i.push(J._$),It=x[a[a.length-2]][a[a.length-1]],a.push(It);break;case 3:return!0}}return!0},"parse")},Vt=function(){var P={EOF:1,parseError:d(function(r,a){if(this.yy.parser)this.yy.parser.parseError(r,a);else throw new Error(r)},"parseError"),setInput:d(function(r,a){return this.yy=a||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:d(function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var a=r.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},"input"),unput:d(function(r){var a=r.length,y=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var m=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),y.length-1&&(this.yylineno-=y.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:y?(y.length===m.length?this.yylloc.first_column:0)+m[m.length-y.length].length-y[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},"unput"),more:d(function(){return this._more=!0,this},"more"),reject:d(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:d(function(r){this.unput(this.match.slice(r))},"less"),pastInput:d(function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:d(function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:d(function(){var r=this.pastInput(),a=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+a+"^"},"showPosition"),test_match:d(function(r,a){var y,m,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),m=r[0].match(/(?:\r\n?|\n).*/g),m&&(this.yylineno+=m.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:m?m[m.length-1].length-m[m.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],y=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),y)return y;if(this._backtrack){for(var x in i)this[x]=i[x];return!1}return!1},"test_match"),next:d(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,a,y,m;this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),x=0;x<i.length;x++)if(y=this._input.match(this.rules[i[x]]),y&&(!a||y[0].length>a[0].length)){if(a=y,m=x,this.options.backtrack_lexer){if(r=this.test_match(y,i[x]),r!==!1)return r;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(r=this.test_match(a,i[m]),r!==!1?r:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:d(function(){var r=this.next();return r||this.lex()},"lex"),begin:d(function(r){this.conditionStack.push(r)},"begin"),popState:d(function(){var r=this.conditionStack.length-1;return r>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:d(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:d(function(r){return r=this.conditionStack.length-1-Math.abs(r||0),r>=0?this.conditionStack[r]:"INITIAL"},"topState"),pushState:d(function(r){this.begin(r)},"pushState"),stateStackSize:d(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:d(function(r,a,y,m){switch(y){case 0:return 38;case 1:return 40;case 2:return 39;case 3:return 44;case 4:return 51;case 5:return 52;case 6:return 53;case 7:return 54;case 8:break;case 9:break;case 10:return 5;case 11:break;case 12:break;case 13:break;case 14:break;case 15:return this.pushState("SCALE"),17;case 16:return 18;case 17:this.popState();break;case 18:return this.begin("acc_title"),33;case 19:return this.popState(),"acc_title_value";case 20:return this.begin("acc_descr"),35;case 21:return this.popState(),"acc_descr_value";case 22:this.begin("acc_descr_multiline");break;case 23:this.popState();break;case 24:return"acc_descr_multiline_value";case 25:return this.pushState("CLASSDEF"),41;case 26:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 27:return this.popState(),this.pushState("CLASSDEFID"),42;case 28:return this.popState(),43;case 29:return this.pushState("CLASS"),48;case 30:return this.popState(),this.pushState("CLASS_STYLE"),49;case 31:return this.popState(),50;case 32:return this.pushState("STYLE"),45;case 33:return this.popState(),this.pushState("STYLEDEF_STYLES"),46;case 34:return this.popState(),47;case 35:return this.pushState("SCALE"),17;case 36:return 18;case 37:this.popState();break;case 38:this.pushState("STATE");break;case 39:return this.popState(),a.yytext=a.yytext.slice(0,-8).trim(),25;case 40:return this.popState(),a.yytext=a.yytext.slice(0,-8).trim(),26;case 41:return this.popState(),a.yytext=a.yytext.slice(0,-10).trim(),27;case 42:return this.popState(),a.yytext=a.yytext.slice(0,-8).trim(),25;case 43:return this.popState(),a.yytext=a.yytext.slice(0,-8).trim(),26;case 44:return this.popState(),a.yytext=a.yytext.slice(0,-10).trim(),27;case 45:return 51;case 46:return 52;case 47:return 53;case 48:return 54;case 49:this.pushState("STATE_STRING");break;case 50:return this.pushState("STATE_ID"),"AS";case 51:return this.popState(),"ID";case 52:this.popState();break;case 53:return"STATE_DESCR";case 54:return 19;case 55:this.popState();break;case 56:return this.popState(),this.pushState("struct"),20;case 57:break;case 58:return this.popState(),21;case 59:break;case 60:return this.begin("NOTE"),29;case 61:return this.popState(),this.pushState("NOTE_ID"),59;case 62:return this.popState(),this.pushState("NOTE_ID"),60;case 63:this.popState(),this.pushState("FLOATING_NOTE");break;case 64:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 65:break;case 66:return"NOTE_TEXT";case 67:return this.popState(),"ID";case 68:return this.popState(),this.pushState("NOTE_TEXT"),24;case 69:return this.popState(),a.yytext=a.yytext.substr(2).trim(),31;case 70:return this.popState(),a.yytext=a.yytext.slice(0,-8).trim(),31;case 71:return 6;case 72:return 6;case 73:return 16;case 74:return 57;case 75:return 24;case 76:return a.yytext=a.yytext.trim(),14;case 77:return 15;case 78:return 28;case 79:return 58;case 80:return 5;case 81:return"INVALID"}},"anonymous"),rules:[/^(?:click\b)/i,/^(?:href\b)/i,/^(?:"[^"]*")/i,/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[12,13],inclusive:!1},struct:{rules:[12,13,25,29,32,38,45,46,47,48,57,58,59,60,74,75,76,77,78],inclusive:!1},FLOATING_NOTE_ID:{rules:[67],inclusive:!1},FLOATING_NOTE:{rules:[64,65,66],inclusive:!1},NOTE_TEXT:{rules:[69,70],inclusive:!1},NOTE_ID:{rules:[68],inclusive:!1},NOTE:{rules:[61,62,63],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[34],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[33],inclusive:!1},CLASS_STYLE:{rules:[31],inclusive:!1},CLASS:{rules:[30],inclusive:!1},CLASSDEFID:{rules:[28],inclusive:!1},CLASSDEF:{rules:[26,27],inclusive:!1},acc_descr_multiline:{rules:[23,24],inclusive:!1},acc_descr:{rules:[21],inclusive:!1},acc_title:{rules:[19],inclusive:!1},SCALE:{rules:[16,17,36,37],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[51],inclusive:!1},STATE_STRING:{rules:[52,53],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[12,13,39,40,41,42,43,44,49,50,54,55,56],inclusive:!1},ID:{rules:[12,13],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,18,20,22,25,29,32,35,38,56,60,71,72,73,74,75,76,77,79,80,81],inclusive:!0}}};return P}();gt.lexer=Vt;function lt(){this.yy={}}return d(lt,"Parser"),lt.prototype=gt,gt.Parser=lt,new lt}();Dt.parser=Dt;var Be=Dt,de="TB",Ft="TB",vt="dir",q="state",V="root",Ct="relation",ue="classDef",pe="style",ye="applyClass",et="default",Yt="divider",Bt="fill:none",Gt="fill: #333",jt="c",Wt="text",Mt="normal",kt="rect",Et="rectWithTitle",fe="stateStart",ge="stateEnd",At="divider",wt="roundedWithTitle",Se="note",me="noteGroup",st="statediagram",_e="state",Te=`${st}-${_e}`,Xt="transition",be="note",ke="note-edge",Ee=`${Xt} ${ke}`,De=`${st}-${be}`,Ce="cluster",$e=`${st}-${Ce}`,xe="cluster-alt",Le=`${st}-${xe}`,zt="parent",Kt="note",Ie="state",$t="----",ve=`${$t}${Kt}`,Nt=`${$t}${zt}`,Ht=d((t,e=Ft)=>{if(!t.doc)return e;let n=e;for(const s of t.doc)s.stmt==="dir"&&(n=s.value);return n},"getDir"),Ae=d(function(t,e){return e.db.getClasses()},"getClasses"),we=d(async function(t,e,n,s){_.info("REF0:"),_.info("Drawing state diagram (v2)",e);const{securityLevel:h,state:o,layout:f}=F();s.db.extract(s.db.getRootDocV2());const S=s.db.getData(),l=Qt(e,h);S.type=s.type,S.layoutAlgorithm=f,S.nodeSpacing=(o==null?void 0:o.nodeSpacing)||50,S.rankSpacing=(o==null?void 0:o.rankSpacing)||50,S.markers=["barb"],S.diagramId=e,await ee(S,l);const g=8;try{(typeof s.db.getLinks=="function"?s.db.getLinks():new Map).forEach((I,b)=>{var C;const D=typeof b=="string"?b:typeof(b==null?void 0:b.id)=="string"?b.id:"";if(!D){_.warn("⚠️ Invalid or missing stateId from key:",JSON.stringify(b));return}const N=(C=l.node())==null?void 0:C.querySelectorAll("g");let v;if(N==null||N.forEach($=>{var R;((R=$.textContent)==null?void 0:R.trim())===D&&(v=$)}),!v){_.warn("⚠️ Could not find node matching text:",D);return}const O=v.parentNode;if(!O){_.warn("⚠️ Node has no parent, cannot wrap:",D);return}const k=document.createElementNS("http://www.w3.org/2000/svg","a"),u=I.url.replace(/^"+|"+$/g,"");if(k.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",u),k.setAttribute("target","_blank"),I.tooltip){const $=I.tooltip.replace(/^"+|"+$/g,"");k.setAttribute("title",$)}O.replaceChild(k,v),k.appendChild(v),_.info("🔗 Wrapped node in <a> tag for:",D,I.url)})}catch(I){_.error("❌ Error injecting clickable links:",I)}se.insertTitle(l,"statediagramTitleText",(o==null?void 0:o.titleTopMargin)??25,s.db.getDiagramTitle()),te(l,g,st,(o==null?void 0:o.useMaxWidth)??!0)},"draw"),Ge={getClasses:Ae,draw:we,getDir:Ht},yt=new Map,j=0;function ft(t="",e=0,n="",s=$t){const h=n!==null&&n.length>0?`${s}${n}`:"";return`${Ie}-${t}${h}-${e}`}d(ft,"stateDomId");var Ne=d((t,e,n,s,h,o,f,S)=>{_.trace("items",e),e.forEach(l=>{switch(l.stmt){case q:tt(t,l,n,s,h,o,f,S);break;case et:tt(t,l,n,s,h,o,f,S);break;case Ct:{tt(t,l.state1,n,s,h,o,f,S),tt(t,l.state2,n,s,h,o,f,S);const g={id:"edge"+j,start:l.state1.id,end:l.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:Bt,labelStyle:"",label:K.sanitizeText(l.description??"",F()),arrowheadStyle:Gt,labelpos:jt,labelType:Wt,thickness:Mt,classes:Xt,look:f};h.push(g),j++}break}})},"setupDoc"),Ot=d((t,e=Ft)=>{let n=e;if(t.doc)for(const s of t.doc)s.stmt==="dir"&&(n=s.value);return n},"getDir");function Q(t,e,n){if(!e.id||e.id==="</join></fork>"||e.id==="</choice>")return;e.cssClasses&&(Array.isArray(e.cssCompiledStyles)||(e.cssCompiledStyles=[]),e.cssClasses.split(" ").forEach(h=>{const o=n.get(h);o&&(e.cssCompiledStyles=[...e.cssCompiledStyles??[],...o.styles])}));const s=t.find(h=>h.id===e.id);s?Object.assign(s,e):t.push(e)}d(Q,"insertOrUpdateNode");function Ut(t){var e;return((e=t==null?void 0:t.classes)==null?void 0:e.join(" "))??""}d(Ut,"getClassesFromDbInfo");function Jt(t){return(t==null?void 0:t.styles)??[]}d(Jt,"getStylesFromDbInfo");var tt=d((t,e,n,s,h,o,f,S)=>{var N,v,O;const l=e.id,g=n.get(l),I=Ut(g),b=Jt(g),D=F();if(_.info("dataFetcher parsedItem",e,g,b),l!=="root"){let k=kt;e.start===!0?k=fe:e.start===!1&&(k=ge),e.type!==et&&(k=e.type),yt.get(l)||yt.set(l,{id:l,shape:k,description:K.sanitizeText(l,D),cssClasses:`${I} ${Te}`,cssStyles:b});const u=yt.get(l);e.description&&(Array.isArray(u.description)?(u.shape=Et,u.description.push(e.description)):(N=u.description)!=null&&N.length&&u.description.length>0?(u.shape=Et,u.description===l?u.description=[e.description]:u.description=[u.description,e.description]):(u.shape=kt,u.description=e.description),u.description=K.sanitizeTextOrArray(u.description,D)),((v=u.description)==null?void 0:v.length)===1&&u.shape===Et&&(u.type==="group"?u.shape=wt:u.shape=kt),!u.type&&e.doc&&(_.info("Setting cluster for XCX",l,Ot(e)),u.type="group",u.isGroup=!0,u.dir=Ot(e),u.shape=e.type===Yt?At:wt,u.cssClasses=`${u.cssClasses} ${$e} ${o?Le:""}`);const C={labelStyle:"",shape:u.shape,label:u.description,cssClasses:u.cssClasses,cssCompiledStyles:[],cssStyles:u.cssStyles,id:l,dir:u.dir,domId:ft(l,j),type:u.type,isGroup:u.type==="group",padding:8,rx:10,ry:10,look:f};if(C.shape===At&&(C.label=""),t&&t.id!=="root"&&(_.trace("Setting node ",l," to be child of its parent ",t.id),C.parentId=t.id),C.centerLabel=!0,e.note){const $={labelStyle:"",shape:Se,label:e.note.text,cssClasses:De,cssStyles:[],cssCompiledStyles:[],id:l+ve+"-"+j,domId:ft(l,j,Kt),type:u.type,isGroup:u.type==="group",padding:(O=D.flowchart)==null?void 0:O.padding,look:f,position:e.note.position},R=l+Nt,W={labelStyle:"",shape:me,label:e.note.text,cssClasses:u.cssClasses,cssStyles:[],id:l+Nt,domId:ft(l,j,zt),type:"group",isGroup:!0,padding:16,look:f,position:e.note.position};j++,W.id=R,$.parentId=R,Q(s,W,S),Q(s,$,S),Q(s,C,S);let B=l,G=$.id;e.note.position==="left of"&&(B=$.id,G=l),h.push({id:B+"-"+G,start:B,end:G,arrowhead:"none",arrowTypeEnd:"",style:Bt,labelStyle:"",classes:Ee,arrowheadStyle:Gt,labelpos:jt,labelType:Wt,thickness:Mt,look:f})}else Q(s,C,S)}e.doc&&(_.trace("Adding nodes children "),Ne(e,e.doc,n,s,h,!o,f,S))},"dataFetcher"),Oe=d(()=>{yt.clear(),j=0},"reset"),E={START_NODE:"[*]",START_TYPE:"start",END_NODE:"[*]",END_TYPE:"end",COLOR_KEYWORD:"color",FILL_KEYWORD:"fill",BG_FILL:"bgFill",STYLECLASS_SEP:","},Rt=d(()=>new Map,"newClassesList"),Pt=d(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),ut=d(t=>JSON.parse(JSON.stringify(t)),"clone"),pt,je=(pt=class{constructor(t){this.version=t,this.nodes=[],this.edges=[],this.rootDoc=[],this.classes=Rt(),this.documents={root:Pt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.dividerCnt=0,this.links=new Map,this.getAccTitle=ie,this.setAccTitle=re,this.getAccDescription=ae,this.setAccDescription=ne,this.setDiagramTitle=oe,this.getDiagramTitle=le,this.clear(),this.setRootDoc=this.setRootDoc.bind(this),this.getDividerId=this.getDividerId.bind(this),this.setDirection=this.setDirection.bind(this),this.trimColon=this.trimColon.bind(this)}extract(t){this.clear(!0);for(const s of Array.isArray(t)?t:t.doc)switch(s.stmt){case q:this.addState(s.id.trim(),s.type,s.doc,s.description,s.note);break;case Ct:this.addRelation(s.state1,s.state2,s.description);break;case ue:this.addStyleClass(s.id.trim(),s.classes);break;case pe:this.handleStyleDef(s);break;case ye:this.setCssClass(s.id.trim(),s.styleClass);break;case"click":this.addLink(s.id,s.url,s.tooltip);break}const e=this.getStates(),n=F();Oe(),tt(void 0,this.getRootDocV2(),e,this.nodes,this.edges,!0,n.look,this.classes);for(const s of this.nodes)if(Array.isArray(s.label)){if(s.description=s.label.slice(1),s.isGroup&&s.description.length>0)throw new Error(`Group nodes can only have label. Remove the additional description for node [${s.id}]`);s.label=s.label[0]}}handleStyleDef(t){const e=t.id.trim().split(","),n=t.styleClass.split(",");for(const s of e){let h=this.getState(s);if(!h){const o=s.trim();this.addState(o),h=this.getState(o)}h&&(h.styles=n.map(o=>{var f;return(f=o.replace(/;/g,""))==null?void 0:f.trim()}))}}setRootDoc(t){_.info("Setting root doc",t),this.rootDoc=t,this.version===1?this.extract(t):this.extract(this.getRootDocV2())}docTranslator(t,e,n){if(e.stmt===Ct){this.docTranslator(t,e.state1,!0),this.docTranslator(t,e.state2,!1);return}if(e.stmt===q&&(e.id===E.START_NODE?(e.id=t.id+(n?"_start":"_end"),e.start=n):e.id=e.id.trim()),e.stmt!==V&&e.stmt!==q||!e.doc)return;const s=[];let h=[];for(const o of e.doc)if(o.type===Yt){const f=ut(o);f.doc=ut(h),s.push(f),h=[]}else h.push(o);if(s.length>0&&h.length>0){const o={stmt:q,id:ce(),type:"divider",doc:ut(h)};s.push(ut(o)),e.doc=s}e.doc.forEach(o=>this.docTranslator(e,o,!0))}getRootDocV2(){return this.docTranslator({id:V,stmt:V},{id:V,stmt:V,doc:this.rootDoc},!0),{id:V,doc:this.rootDoc}}addState(t,e=et,n=void 0,s=void 0,h=void 0,o=void 0,f=void 0,S=void 0){const l=t==null?void 0:t.trim();if(!this.currentDocument.states.has(l))_.info("Adding state ",l,s),this.currentDocument.states.set(l,{stmt:q,id:l,descriptions:[],type:e,doc:n,note:h,classes:[],styles:[],textStyles:[]});else{const g=this.currentDocument.states.get(l);if(!g)throw new Error(`State not found: ${l}`);g.doc||(g.doc=n),g.type||(g.type=e)}if(s&&(_.info("Setting state description",l,s),(Array.isArray(s)?s:[s]).forEach(g=>this.addDescription(l,g.trim()))),h){const g=this.currentDocument.states.get(l);if(!g)throw new Error(`State not found: ${l}`);g.note=h,g.note.text=K.sanitizeText(g.note.text,F())}o&&(_.info("Setting state classes",l,o),(Array.isArray(o)?o:[o]).forEach(g=>this.setCssClass(l,g.trim()))),f&&(_.info("Setting state styles",l,f),(Array.isArray(f)?f:[f]).forEach(g=>this.setStyle(l,g.trim()))),S&&(_.info("Setting state styles",l,f),(Array.isArray(S)?S:[S]).forEach(g=>this.setTextStyle(l,g.trim())))}clear(t){this.nodes=[],this.edges=[],this.documents={root:Pt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.classes=Rt(),t||(this.links=new Map,he())}getState(t){return this.currentDocument.states.get(t)}getStates(){return this.currentDocument.states}logDocuments(){_.info("Documents = ",this.documents)}getRelations(){return this.currentDocument.relations}addLink(t,e,n){this.links.set(t,{url:e,tooltip:n}),_.warn("Adding link",t,e,n)}getLinks(){return this.links}startIdIfNeeded(t=""){return t===E.START_NODE?(this.startEndCount++,`${E.START_TYPE}${this.startEndCount}`):t}startTypeIfNeeded(t="",e=et){return t===E.START_NODE?E.START_TYPE:e}endIdIfNeeded(t=""){return t===E.END_NODE?(this.startEndCount++,`${E.END_TYPE}${this.startEndCount}`):t}endTypeIfNeeded(t="",e=et){return t===E.END_NODE?E.END_TYPE:e}addRelationObjs(t,e,n=""){const s=this.startIdIfNeeded(t.id.trim()),h=this.startTypeIfNeeded(t.id.trim(),t.type),o=this.startIdIfNeeded(e.id.trim()),f=this.startTypeIfNeeded(e.id.trim(),e.type);this.addState(s,h,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),this.addState(o,f,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),this.currentDocument.relations.push({id1:s,id2:o,relationTitle:K.sanitizeText(n,F())})}addRelation(t,e,n){if(typeof t=="object"&&typeof e=="object")this.addRelationObjs(t,e,n);else if(typeof t=="string"&&typeof e=="string"){const s=this.startIdIfNeeded(t.trim()),h=this.startTypeIfNeeded(t),o=this.endIdIfNeeded(e.trim()),f=this.endTypeIfNeeded(e);this.addState(s,h),this.addState(o,f),this.currentDocument.relations.push({id1:s,id2:o,relationTitle:n?K.sanitizeText(n,F()):void 0})}}addDescription(t,e){var h;const n=this.currentDocument.states.get(t),s=e.startsWith(":")?e.replace(":","").trim():e;(h=n==null?void 0:n.descriptions)==null||h.push(K.sanitizeText(s,F()))}cleanupLabel(t){return t.startsWith(":")?t.slice(2).trim():t.trim()}getDividerId(){return this.dividerCnt++,`divider-id-${this.dividerCnt}`}addStyleClass(t,e=""){this.classes.has(t)||this.classes.set(t,{id:t,styles:[],textStyles:[]});const n=this.classes.get(t);e&&n&&e.split(E.STYLECLASS_SEP).forEach(s=>{const h=s.replace(/([^;]*);/,"$1").trim();if(RegExp(E.COLOR_KEYWORD).exec(s)){const o=h.replace(E.FILL_KEYWORD,E.BG_FILL).replace(E.COLOR_KEYWORD,E.FILL_KEYWORD);n.textStyles.push(o)}n.styles.push(h)})}getClasses(){return this.classes}setCssClass(t,e){t.split(",").forEach(n=>{var h;let s=this.getState(n);if(!s){const o=n.trim();this.addState(o),s=this.getState(o)}(h=s==null?void 0:s.classes)==null||h.push(e)})}setStyle(t,e){var n,s;(s=(n=this.getState(t))==null?void 0:n.styles)==null||s.push(e)}setTextStyle(t,e){var n,s;(s=(n=this.getState(t))==null?void 0:n.textStyles)==null||s.push(e)}getDirectionStatement(){return this.rootDoc.find(t=>t.stmt===vt)}getDirection(){var t;return((t=this.getDirectionStatement())==null?void 0:t.value)??de}setDirection(t){const e=this.getDirectionStatement();e?e.value=t:this.rootDoc.unshift({stmt:vt,value:t})}trimColon(t){return t.startsWith(":")?t.slice(1).trim():t.trim()}getData(){const t=F();return{nodes:this.nodes,edges:this.edges,other:{},config:t,direction:Ht(this.getRootDocV2())}}getConfig(){return F().state}},d(pt,"StateDB"),pt.relationType={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},pt),Re=d(t=>`
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`,"getStyles"),We=Re;export{Be as F,Ge as G,We as U,je as j};
