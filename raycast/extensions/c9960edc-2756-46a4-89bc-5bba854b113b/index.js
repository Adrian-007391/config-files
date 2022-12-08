"use strict";var ee=Object.create;var Or=Object.defineProperty;var oe=Object.getOwnPropertyDescriptor;var ne=Object.getOwnPropertyNames;var ie=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty;var ur=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),ue=(r,t)=>{for(var o in t)Or(r,o,{get:t[o],enumerable:!0})},mt=(r,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ne(t))!ae.call(r,i)&&i!==o&&Or(r,i,{get:()=>t[i],enumerable:!(n=oe(t,i))||n.enumerable});return r};var fr=(r,t,o)=>(o=r!=null?ee(ie(r)):{},mt(t||!r||!r.__esModule?Or(o,"default",{value:r,enumerable:!0}):o,r)),fe=r=>mt(Or({},"__esModule",{value:!0}),r);var lt=ur((Dr,ct)=>{(function(r,t){typeof Dr=="object"&&typeof ct<"u"?t(Dr):typeof define=="function"&&define.amd?define(["exports"],t):t((r||self).logseqDateutils={})})(Dr,function(r){var t=function(n){return n+(n>0?["th","st","nd","rd"][n>3&&n<21||n%10>3?0:n%10]:"")},o=function(n){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n.getDay()]};r.getDateForPage=function(n,i){var m=n.getFullYear(),h=n.toString().substring(4,7),x=n.getMonth()+1,S=n.getDate(),M=n.toLocaleString("default",{month:"long"});if(i==="MMM do yyyy")return"[["+h+" "+t(S)+", "+m+"]]";if(i.includes("yyyy")&&(i.includes("MM")||i.includes("MMM"))&&i.includes("dd")&&(i.includes("EEEE")||i.includes("EEE")||i.includes("E"))){var T=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],P={yyyy:m,dd:("0"+S).slice(-2),MM:("0"+x).slice(-2),MMMM:M,EEEE:T[n.getDay()],EEE:T[n.getDay()].substring(0,3),E:T[n.getDay()].substring(0,1)};return"[["+i.replace(/yyyy|dd|MM|EEEE|EEE|E/gi,function(B){return P[B]})+"]]"}if(i==="do MMMM yyyy"||i==="MMMM do, yyyy"){var X={yyyy:m,do:t(S),MMMM:M};return"[["+i.replace(/yyyy|do|MMMM/gi,function(B){return X[B]})+"]]"}if(i.includes("yyyy")&&i.includes("MM")&&i.includes("dd")){var ir={yyyy:m,dd:("0"+S).slice(-2),MM:("0"+x).slice(-2)};return"[["+i.replace(/yyyy|dd|MM/gi,function(B){return ir[B]})+"]]"}return"[["+h+" "+t(S)+", "+m+"]]"},r.getDateForPageWithoutBrackets=function(n,i){var m=n.getFullYear(),h=n.toString().substring(4,7),x=n.getMonth()+1,S=n.getDate(),M=n.toLocaleString("default",{month:"long"});if(i==="MMM do yyyy")return h+" "+t(S)+", "+m;if(i.includes("yyyy")&&i.includes("MM")&&i.includes("dd")&&(i.includes("EEEE")||i.includes("EEE")||i.includes("E"))){var T=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],P={yyyy:m,dd:("0"+S).slice(-2),MM:("0"+x).slice(-2),EEEE:T[n.getDay()],EEE:T[n.getDay()].substring(0,3),E:T[n.getDay()].substring(0,1)};return""+i.replace(/yyyy|dd|MM|EEEE|EEE|E/gi,function(B){return P[B]})}if(i==="do MMMM yyyy"||i==="MMMM do, yyyy"){var X={yyyy:m,do:t(S),MMMM:M};return""+i.replace(/yyyy|do|MMMM/gi,function(B){return X[B]})}if(i.includes("yyyy")&&i.includes("MM")&&i.includes("dd")){var ir={yyyy:m,dd:("0"+S).slice(-2),MM:("0"+x).slice(-2)};return""+i.replace(/yyyy|dd|MM/gi,function(B){return ir[B]})}return i==="MMMM do, yyyy"?n.toLocaleString("default",{month:"long"})+" "+t(S)+", "+m:i==="do MMM yyyy"?t(S)+" "+h+" "+m:h+" "+t(S)+", "+m},r.getDayInText=o,r.getScheduledDeadlineDateDay=function(n){return n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()+" "+o(n).substring(0,3)},r.getScheduledDeadlineDateDayTime=function(n){return n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()+" "+o(n).substring(0,3)+" "+n.toTimeString().substring(0,5)},r.getYYMMDDTHHMMFormat=function(n){return[n.getFullYear(),("0"+(n.getMonth()+1)).slice(-2),("0"+n.getDate()).slice(-2)].join("-")+"T"+n.toTimeString().substring(0,5)},r.getYYYMMDD=function(n){return[n.getFullYear(),("0"+(n.getMonth()+1)).slice(-2),("0"+n.getDate()).slice(-2)].join("")}})});var dt=ur(sr=>{"use strict";Object.defineProperty(sr,"__esModule",{value:!0});sr.parseEDNString=sr.EDNListParser=void 0;var C;(function(r){r[r.idle=0]="idle",r[r.string=1]="string",r[r.escape=2]="escape",r[r.comment=3]="comment"})(C||(C={}));var q;(function(r){r[r.vector=0]="vector",r[r.list=1]="list",r[r.map=2]="map",r[r.set=3]="set",r[r.tag=4]="tag"})(q||(q={}));var se={t:"	",r:"\r",n:`
`,"\\":"\\",'"':'"'},pe=[","," ","	",`
`,"\r"],me=/^[-+]?(0|[1-9][0-9]*)$/,ce=/^[-+]?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?(0|[1-9][0-9]*))?M?$/,le={inst:r=>{if(typeof r!="string")throw new Error("#inst value must be a string");return new Date(r)}},kr=class{constructor({mapAs:t="doubleArray",setAs:o="object",keywordAs:n="object",charAs:i="object",listAs:m="object",tagHandlers:h={}}={}){this.stack=[],this.mode=C.idle,this.state="",this.started=!1,this.done=!1,this.mapAs=t,this.setAs=o,this.keywordAs=n,this.charAs=i,this.listAs=m,this.tagHandlers={...le,...h}}updateStack(){if(this.stack.length===0||this.result===void 0)return;let[t,o]=this.stack[this.stack.length-1];if(t===q.vector)o.push(this.result);else if(t===q.list)o.push(this.result);else if(t===q.set)o.push(this.result);else if(t===q.map)o[1].length>0?o[0].push([o[1].pop(),this.result]):o[1].push(this.result);else if(t===q.tag){if(this.stack.pop(),o==="_")this.result=void 0;else{let n=this.tagHandlers[o];n?this.result=n(this.result):this.result={tag:o,val:this.result}}this.updateStack();return}this.result=void 0}match(){if(this.state==="nil")this.result=null;else if(this.state==="true")this.result=!0;else if(this.state==="false")this.result=!1;else if(this.state[0]===":")this.result=this.keywordAs==="string"?this.state.substr(1):{key:this.state.substr(1)};else if(this.state[0]==="#")this.stack.push([q.tag,this.state.substr(1)]),this.result=void 0;else if(me.test(this.state))this.result=parseInt(this.state,10);else if(ce.test(this.state))this.result=parseFloat(this.state);else if(this.state[0]==="\\"){let t;this.state==="\\space"?t=" ":this.state==="\\newline"?t=`
`:this.state==="\\return"?t="\r":this.state==="\\tab"?t="	":this.state==="\\\\"?t="\\":t=this.state.substr(1),this.charAs==="string"?this.result=t:this.result={char:t}}else this.state!==""&&(this.result={sym:this.state});this.state=""}next(t){let o=[];for(let n=0;n<t.length;n++){this.stack.length===0&&this.result!==void 0&&(o.push(this.result),this.result=void 0);let i=t[n];if(this.mode===C.idle){if(i==='"'){this.match(),this.updateStack(),this.mode=C.string,this.state="";continue}if(i===";"){this.mode=C.comment;continue}if(pe.includes(i)){this.match(),this.updateStack();continue}if(i==="}"){if(this.match(),this.updateStack(),this.stack.length!==0){let[h,x]=this.stack.pop();h===q.map?this.mapAs==="object"?this.result=x[0].reduce((S,[M,T])=>({...S,[M]:T}),{}):this.mapAs==="map"?this.result=new Map(x[0]):this.result={map:x[0]}:this.setAs==="array"?this.result=x:this.setAs==="set"?this.result=new Set(x):this.result={set:x}}this.updateStack();continue}if(i==="]"){this.match(),this.updateStack();let[h,x]=this.stack.pop();this.result=x,this.updateStack();continue}if(i===")"){if(this.match(),this.updateStack(),this.stack.length===0)return this.result!==void 0&&o.push(this.result),this.done=!0,o;let[h,x]=this.stack.pop();this.listAs==="array"?this.result=x:this.result={list:x},this.updateStack();continue}if(i==="["){this.match(),this.updateStack(),this.stack.push([q.vector,[]]);continue}else if(i==="("){if(!this.started){this.started=!0;continue}this.match(),this.updateStack(),this.stack.push([q.list,[]]);continue}let m=this.state+i;if(m==="#_"){this.stack.push([q.tag,i]),this.result=void 0,this.state="";continue}if(m.endsWith("#{")){this.state=this.state.slice(0,-1),this.match(),this.updateStack(),this.stack.push([q.set,[]]),this.state="";continue}if(i==="{"){this.match(),this.updateStack(),this.stack.push([q.map,[[],[]]]),this.state="";continue}this.state+=i;continue}else if(this.mode===C.string){if(i==="\\"){this.stack.push([this.mode,this.state]),this.mode=C.escape,this.state="";continue}if(i==='"'){this.mode=C.idle,this.result=this.state,this.updateStack(),this.state="";continue}this.state+=i}else if(this.mode===C.escape){let m=se[i],[h,x]=this.stack.pop();this.mode=h,this.state=x+m}else this.mode===C.comment&&i===`
`&&(this.mode=C.idle)}return o}isDone(){return this.done}};sr.EDNListParser=kr;sr.parseEDNString=(r,t)=>{let o=new kr(t),[n]=o.next("("+r+")");return n===void 0?null:n}});var ht=ur(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});w.toEDNStringFromSimpleObject=w.toEDNString=w.toSymbol=w.toKeyword=w.tagValue=void 0;var de=r=>r.key!==void 0,he=r=>r.sym!==void 0,ye=r=>r.map!==void 0,xe=r=>r.set!==void 0,ge=r=>r.list!==void 0,ve=r=>r.tag!==void 0,_e=r=>r.char!==void 0;w.tagValue=(r,t)=>({tag:r,val:t});w.toKeyword=r=>({key:r});w.toSymbol=r=>({sym:r});w.toEDNString=r=>{if(typeof r=="string")return JSON.stringify(r);if(Array.isArray(r))return`[${r.map(w.toEDNString).join(" ")}]`;if(typeof r=="number")return r.toString();if(typeof r=="boolean")return JSON.stringify(r);if(r===null)return"nil";if(r instanceof Date)return`#inst "${r.toISOString()}"`;if(typeof r=="bigint")return`${r}N`;if(r instanceof Map)return`{${[...r].map(([t,o])=>`${w.toEDNString(t)} ${w.toEDNString(o)}`).join(" ")}}`;if(r instanceof Set)return`#{${[...r].map(w.toEDNString).join(" ")}}`;if(ye(r))return`{${r.map.map(([t,o])=>`${w.toEDNString(t)} ${w.toEDNString(o)}`).join(" ")}}`;if(xe(r))return`#{${r.set.map(w.toEDNString).join(" ")}}`;if(de(r))return`:${r.key}`;if(he(r))return r.sym;if(ge(r))return`(${r.list.map(w.toEDNString).join(" ")})`;if(ve(r))return`#${r.tag} ${w.toEDNString(r.val)}`;if(_e(r))return`\\${r.char}`;throw new TypeError(`Unknown type: ${JSON.stringify(r)}`)};w.toEDNStringFromSimpleObject=(r,t={keysAs:"keyword"})=>{if(typeof r=="string")return JSON.stringify(r);if(Array.isArray(r))return`[${r.map(o=>w.toEDNStringFromSimpleObject(o,t)).join(" ")}]`;if(typeof r=="number")return r.toString();if(typeof r=="boolean")return JSON.stringify(r);if(r===null)return"nil";if(r instanceof Date)return`#inst "${r.toISOString()}"`;if(typeof r=="bigint")return`${r}N`;if(r instanceof Map)return`{${[...r].map(([o,n])=>`${w.toEDNStringFromSimpleObject(o,t)} ${w.toEDNStringFromSimpleObject(n,t)}`).join(" ")}}`;if(r instanceof Set)return`#{${[...r].map(o=>w.toEDNStringFromSimpleObject(o,t)).join(" ")}}`;if(typeof r=="object")return`{${Object.entries(r).map(([o,n])=>`${t.keysAs==="string"?JSON.stringify(o):`:${o}`} ${w.toEDNStringFromSimpleObject(n,t)}`).join(" ")}}`;throw new TypeError(`Unknown type: ${JSON.stringify(r)}`)}});var yt=ur(Z=>{"use strict";Object.defineProperty(Z,"__esModule",{value:!0});var we=dt();Object.defineProperty(Z,"parseEDNString",{enumerable:!0,get:function(){return we.parseEDNString}});var yr=ht();Object.defineProperty(Z,"toEDNString",{enumerable:!0,get:function(){return yr.toEDNString}});Object.defineProperty(Z,"toEDNStringFromSimpleObject",{enumerable:!0,get:function(){return yr.toEDNStringFromSimpleObject}});Object.defineProperty(Z,"tagValue",{enumerable:!0,get:function(){return yr.tagValue}});Object.defineProperty(Z,"toKeyword",{enumerable:!0,get:function(){return yr.toKeyword}});Object.defineProperty(Z,"toSymbol",{enumerable:!0,get:function(){return yr.toSymbol}})});var Lt=ur((ut,ft)=>{(function(r,t){typeof ut=="object"&&typeof ft<"u"?ft.exports=t():typeof define=="function"&&define.amd?define(t):(r=typeof globalThis<"u"?globalThis:r||self).dayjs=t()})(ut,function(){"use strict";var r=1e3,t=6e4,o=36e5,n="millisecond",i="second",m="minute",h="hour",x="day",S="week",M="month",T="quarter",P="year",X="date",ir="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Qt=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,re={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},Rr=function(y,s,a){var c=String(y);return!c||c.length>=s?y:""+Array(s+1-c.length).join(a)+y},te={s:Rr,z:function(y){var s=-y.utcOffset(),a=Math.abs(s),c=Math.floor(a/60),f=a%60;return(s<=0?"+":"-")+Rr(c,2,"0")+":"+Rr(f,2,"0")},m:function y(s,a){if(s.date()<a.date())return-y(a,s);var c=12*(a.year()-s.year())+(a.month()-s.month()),f=s.clone().add(c,M),d=a-f<0,l=s.clone().add(c+(d?-1:1),M);return+(-(c+(a-f)/(d?f-l:l-f))||0)},a:function(y){return y<0?Math.ceil(y)||0:Math.floor(y)},p:function(y){return{M,y:P,w:S,d:x,D:X,h,m,s:i,ms:n,Q:T}[y]||String(y||"").toLowerCase().replace(/s$/,"")},u:function(y){return y===void 0}},lr="en",nr={};nr[lr]=re;var Ur=function(y){return y instanceof Er},Ar=function y(s,a,c){var f;if(!s)return lr;if(typeof s=="string"){var d=s.toLowerCase();nr[d]&&(f=d),a&&(nr[d]=a,f=d);var l=s.split("-");if(!f&&l.length>1)return y(l[0])}else{var g=s.name;nr[g]=s,f=g}return!c&&f&&(lr=f),f||!c&&lr},b=function(y,s){if(Ur(y))return y.clone();var a=typeof s=="object"?s:{};return a.date=y,a.args=arguments,new Er(a)},_=te;_.l=Ar,_.i=Ur,_.w=function(y,s){return b(y,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var Er=function(){function y(a){this.$L=Ar(a.locale,null,!0),this.parse(a)}var s=y.prototype;return s.parse=function(a){this.$d=function(c){var f=c.date,d=c.utc;if(f===null)return new Date(NaN);if(_.u(f))return new Date;if(f instanceof Date)return new Date(f);if(typeof f=="string"&&!/Z$/i.test(f)){var l=f.match(B);if(l){var g=l[2]-1||0,D=(l[7]||"0").substring(0,3);return d?new Date(Date.UTC(l[1],g,l[3]||1,l[4]||0,l[5]||0,l[6]||0,D)):new Date(l[1],g,l[3]||1,l[4]||0,l[5]||0,l[6]||0,D)}}return new Date(f)}(a),this.$x=a.x||{},this.init()},s.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},s.$utils=function(){return _},s.isValid=function(){return this.$d.toString()!==ir},s.isSame=function(a,c){var f=b(a);return this.startOf(c)<=f&&f<=this.endOf(c)},s.isAfter=function(a,c){return b(a)<this.startOf(c)},s.isBefore=function(a,c){return this.endOf(c)<b(a)},s.$g=function(a,c,f){return _.u(a)?this[c]:this.set(f,a)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(a,c){var f=this,d=!!_.u(c)||c,l=_.p(a),g=function(ar,F){var G=_.w(f.$u?Date.UTC(f.$y,F,ar):new Date(f.$y,F,ar),f);return d?G:G.endOf(x)},D=function(ar,F){return _.w(f.toDate()[ar].apply(f.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(F)),f)},A=this.$W,I=this.$M,V=this.$D,K="set"+(this.$u?"UTC":"");switch(l){case P:return d?g(1,0):g(31,11);case M:return d?g(1,I):g(0,I+1);case S:var dr=this.$locale().weekStart||0,hr=(A<dr?A+7:A)-dr;return g(d?V-hr:V+(6-hr),I);case x:case X:return D(K+"Hours",0);case h:return D(K+"Minutes",1);case m:return D(K+"Seconds",2);case i:return D(K+"Milliseconds",3);default:return this.clone()}},s.endOf=function(a){return this.startOf(a,!1)},s.$set=function(a,c){var f,d=_.p(a),l="set"+(this.$u?"UTC":""),g=(f={},f[x]=l+"Date",f[X]=l+"Date",f[M]=l+"Month",f[P]=l+"FullYear",f[h]=l+"Hours",f[m]=l+"Minutes",f[i]=l+"Seconds",f[n]=l+"Milliseconds",f)[d],D=d===x?this.$D+(c-this.$W):c;if(d===M||d===P){var A=this.clone().set(X,1);A.$d[g](D),A.init(),this.$d=A.set(X,Math.min(this.$D,A.daysInMonth())).$d}else g&&this.$d[g](D);return this.init(),this},s.set=function(a,c){return this.clone().$set(a,c)},s.get=function(a){return this[_.p(a)]()},s.add=function(a,c){var f,d=this;a=Number(a);var l=_.p(c),g=function(I){var V=b(d);return _.w(V.date(V.date()+Math.round(I*a)),d)};if(l===M)return this.set(M,this.$M+a);if(l===P)return this.set(P,this.$y+a);if(l===x)return g(1);if(l===S)return g(7);var D=(f={},f[m]=t,f[h]=o,f[i]=r,f)[l]||1,A=this.$d.getTime()+a*D;return _.w(A,this)},s.subtract=function(a,c){return this.add(-1*a,c)},s.format=function(a){var c=this,f=this.$locale();if(!this.isValid())return f.invalidDate||ir;var d=a||"YYYY-MM-DDTHH:mm:ssZ",l=_.z(this),g=this.$H,D=this.$m,A=this.$M,I=f.weekdays,V=f.months,K=function(F,G,Xr,Mr){return F&&(F[G]||F(c,d))||Xr[G].substr(0,Mr)},dr=function(F){return _.s(g%12||12,F,"0")},hr=f.meridiem||function(F,G,Xr){var Mr=F<12?"AM":"PM";return Xr?Mr.toLowerCase():Mr},ar={YY:String(this.$y).slice(-2),YYYY:this.$y,M:A+1,MM:_.s(A+1,2,"0"),MMM:K(f.monthsShort,A,V,3),MMMM:K(V,A),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:K(f.weekdaysMin,this.$W,I,2),ddd:K(f.weekdaysShort,this.$W,I,3),dddd:I[this.$W],H:String(g),HH:_.s(g,2,"0"),h:dr(1),hh:dr(2),a:hr(g,D,!0),A:hr(g,D,!1),m:String(D),mm:_.s(D,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:l};return d.replace(Qt,function(F,G){return G||ar[F]||l.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(a,c,f){var d,l=_.p(c),g=b(a),D=(g.utcOffset()-this.utcOffset())*t,A=this-g,I=_.m(this,g);return I=(d={},d[P]=I/12,d[M]=I,d[T]=I/3,d[S]=(A-D)/6048e5,d[x]=(A-D)/864e5,d[h]=A/o,d[m]=A/t,d[i]=A/r,d)[l]||A,f?I:_.a(I)},s.daysInMonth=function(){return this.endOf(M).$D},s.$locale=function(){return nr[this.$L]},s.locale=function(a,c){if(!a)return this.$L;var f=this.clone(),d=Ar(a,c,!0);return d&&(f.$L=d),f},s.clone=function(){return _.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},y}(),pt=Er.prototype;return b.prototype=pt,[["$ms",n],["$s",i],["$m",m],["$H",h],["$W",x],["$M",M],["$y",P],["$D",X]].forEach(function(y){pt[y[1]]=function(s){return this.$g(s,y[0],y[1])}}),b.extend=function(y,s){return y.$i||(y(s,Er,b),y.$i=!0),b},b.locale=Ar,b.isDayjs=Ur,b.unix=function(y){return b(1e3*y)},b.en=nr[lr],b.Ls=nr,b.p={},b})});var $t=ur((Mb,Bt)=>{"use strict";var Fo=require("os"),Pt=Fo.homedir();Bt.exports=r=>{if(typeof r!="string")throw new TypeError(`Expected a string, got ${typeof r}`);return Pt?r.replace(/^~(?=$|\/|\\)/,Pt):r}});var Uo={};ue(Uo,{default:()=>Zt});module.exports=fe(Uo);var k=require("@raycast/api");var or=require("@raycast/api"),Ct=fr(lt()),Rt=fr(yt()),$r=fr(require("path"));function v(r){return r!=null&&typeof r=="object"&&r["@@functional/placeholder"]===!0}function u(r){return function t(o){return arguments.length===0||v(o)?t:r.apply(this,arguments)}}function e(r){return function t(o,n){switch(arguments.length){case 0:return t;case 1:return v(o)?t:u(function(i){return r(o,i)});default:return v(o)&&v(n)?t:v(o)?u(function(i){return r(i,n)}):v(n)?u(function(i){return r(o,i)}):r(o,n)}}}function $(r,t){switch(r){case 0:return function(){return t.apply(this,arguments)};case 1:return function(o){return t.apply(this,arguments)};case 2:return function(o,n){return t.apply(this,arguments)};case 3:return function(o,n,i){return t.apply(this,arguments)};case 4:return function(o,n,i,m){return t.apply(this,arguments)};case 5:return function(o,n,i,m,h){return t.apply(this,arguments)};case 6:return function(o,n,i,m,h,x){return t.apply(this,arguments)};case 7:return function(o,n,i,m,h,x,S){return t.apply(this,arguments)};case 8:return function(o,n,i,m,h,x,S,M){return t.apply(this,arguments)};case 9:return function(o,n,i,m,h,x,S,M,T){return t.apply(this,arguments)};case 10:return function(o,n,i,m,h,x,S,M,T,P){return t.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function p(r){return function t(o,n,i){switch(arguments.length){case 0:return t;case 1:return v(o)?t:e(function(m,h){return r(o,m,h)});case 2:return v(o)&&v(n)?t:v(o)?e(function(m,h){return r(m,n,h)}):v(n)?e(function(m,h){return r(o,m,h)}):u(function(m){return r(o,n,m)});default:return v(o)&&v(n)&&v(i)?t:v(o)&&v(n)?e(function(m,h){return r(m,h,i)}):v(o)&&v(i)?e(function(m,h){return r(m,n,h)}):v(n)&&v(i)?e(function(m,h){return r(o,m,h)}):v(o)?u(function(m){return r(m,n,i)}):v(n)?u(function(m){return r(o,m,i)}):v(i)?u(function(m){return r(o,n,m)}):r(o,n,i)}}}var N=Array.isArray||function(t){return t!=null&&t.length>=0&&Object.prototype.toString.call(t)==="[object Array]"};function rr(r){return Object.prototype.toString.call(r)==="[object String]"}var Se=u(function(t){return N(t)?!0:!t||typeof t!="object"||rr(t)?!1:t.length===0?!0:t.length>0?t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1):!1}),gr=Se;var Ae=function(){function r(t){this.f=t}return r.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},r.prototype["@@transducer/result"]=function(t){return t},r.prototype["@@transducer/step"]=function(t,o){return this.f(t,o)},r}();function br(r){return new Ae(r)}var Ee=e(function(t,o){return $(t.length,function(){return t.apply(o,arguments)})}),zr=Ee;function Me(r,t,o){for(var n=0,i=o.length;n<i;){if(t=r["@@transducer/step"](t,o[n]),t&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}n+=1}return r["@@transducer/result"](t)}function gt(r,t,o){for(var n=o.next();!n.done;){if(t=r["@@transducer/step"](t,n.value),t&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}n=o.next()}return r["@@transducer/result"](t)}function vt(r,t,o,n){return r["@@transducer/result"](o[n](zr(r["@@transducer/step"],r),t))}var _t=typeof Symbol<"u"?Symbol.iterator:"@@iterator";function W(r,t,o){if(typeof r=="function"&&(r=br(r)),gr(o))return Me(r,t,o);if(typeof o["fantasy-land/reduce"]=="function")return vt(r,t,o,"fantasy-land/reduce");if(o[_t]!=null)return gt(r,t,o[_t]());if(typeof o.next=="function")return gt(r,t,o);if(typeof o.reduce=="function")return vt(r,t,o,"reduce");throw new TypeError("reduce: list must be array or iterable")}var tr=Number.isInteger||function(t){return t<<0===t};var De=p(W),J=De;function Kr(r,t){return function(){return t.call(this,r.apply(this,arguments))}}function er(r,t){return function(){var o=arguments.length;if(o===0)return t();var n=arguments[o-1];return N(n)||typeof n[r]!="function"?t.apply(this,arguments):n[r].apply(n,Array.prototype.slice.call(arguments,0,o-1))}}var Fe=p(er("slice",function(t,o,n){return Array.prototype.slice.call(n,t,o)})),R=Fe;var qe=u(er("tail",R(1,1/0))),jr=qe;function Tr(){if(arguments.length===0)throw new Error("pipe requires at least one argument");return $(arguments[0].length,J(Kr,arguments[0],jr(arguments)))}var Le=u(function(t){return rr(t)?t.split("").reverse().join(""):Array.prototype.slice.call(t,0).reverse()}),Fr=Le;function _r(){if(arguments.length===0)throw new Error("compose requires at least one argument");return Tr.apply(this,Fr(arguments))}var wr=function(t){return(t<10?"0":"")+t},Ds=typeof Date.prototype.toISOString=="function"?function(t){return t.toISOString()}:function(t){return t.getUTCFullYear()+"-"+wr(t.getUTCMonth()+1)+"-"+wr(t.getUTCDate())+"T"+wr(t.getUTCHours())+":"+wr(t.getUTCMinutes())+":"+wr(t.getUTCSeconds())+"."+(t.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"};var Ao=p(function(t,o,n){return n.replace(t,o)}),at=Ao;var Y1=typeof String.prototype.trim=="function";var Ut=fr(Lt()),cr=fr(require("fs")),Xt=fr($t()),zt=()=>{},qo=r=>t=>r+t;var Lo=(r,t)=>{let o=t?`
* `:`
- `;return _r(qo(o),at(/\n/g,o))(r)},Yt=r=>cr.default.promises.lstat(r).then(t=>{if(!t.isDirectory())throw`Folder does not exist: ${r}`}).catch(t=>{throw t.code==="ENOENT"?`Folder does not exist: ${r}`:"Error"}),st=()=>(0,Xt.default)((0,or.getPreferenceValues)().graphPath),Ht=()=>Yt(st()),Po=()=>{let r=$r.default.join(st(),"/logseq/config.edn");return cr.default.promises.readFile(r,{encoding:"utf8"}).then(t=>(0,Rt.parseEDNString)(t.toString(),{mapAs:"object",keywordAs:"string"}))};var Bo=()=>Po().then(r=>({fileFormat:r["preferred-format"]==="org"?".org":".md",journalsDirectory:r["journals-directory"]||"journals",dateFormat:r["journal/file-name-format"]||"yyyy_MM_dd"})),$o=r=>Bo().then(({dateFormat:t,journalsDirectory:o,fileFormat:n})=>$r.default.join(r,o,`${(0,Ct.getDateForPageWithoutBrackets)(new Date,t)}${n}`)),Jt=()=>$o(st()),Co=r=>cr.default.promises.access(r).catch(t=>{if(t.code==="ENOENT")return cr.default.promises.writeFile(r,"");throw t}),Kt=()=>{(0,or.showToast)({style:or.Toast.Style.Failure,title:"Logseq graph path is invalid",message:"Update the path and try again."})},Vt=(r,t)=>{let o=t.endsWith(".org");return Yt($r.default.dirname(t)).then(()=>Co(t)).then(()=>cr.default.promises.appendFile(t,Lo(r,o)))};var Ro=()=>(0,Ut.default)().format("HH:mm"),Gt=r=>{let t=r;return(0,or.getPreferenceValues)().addQuickCaptureTag&&(t="[[quick capture]]: "+t),(0,or.getPreferenceValues)().insertTime&&(t=`**${Ro()}** `+t),t};var Cr=require("react/jsx-runtime");function Zt(){let{pop:r}=(0,k.useNavigation)();async function t(o){if(!o.content)return(0,k.showToast)({style:k.Toast.Style.Failure,title:"\u{1F41D} Type something to get started"});let n=Gt(o.content);Ht().catch(i=>{throw Kt(),i}).then(()=>(0,k.showToast)({style:k.Toast.Style.Animated,title:"Adding notes"})).then(Jt).then(i=>Vt(n,i)).then(()=>(0,k.showHUD)("\u2705 Note added")).then(r).catch(i=>(0,k.showToast)({style:k.Toast.Style.Failure,title:"Failed",message:i})).catch(zt)}return(0,Cr.jsx)(k.Form,{actions:(0,Cr.jsx)(k.ActionPanel,{children:(0,Cr.jsx)(k.Action.SubmitForm,{title:"Add quick notes",onSubmit:t})}),children:(0,Cr.jsx)(k.Form.TextArea,{id:"content",title:"Content",placeholder:"Enter notes"})})}0&&(module.exports={});
