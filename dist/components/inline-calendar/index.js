/*!
 * Vux v0.1.3-rc8 (https://vux.li)
 * Licensed under the MIT license
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxInlineCalendar=t():e.vuxInlineCalendar=t()}(this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(7)},function(e,t){"use strict";e.exports=function(e,t){var n={"M+":e.getMonth()+1,"D+":e.getDate(),"h+":e.getHours()%12===0?12:e.getHours()%12,"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()},a={0:"/u65e5",1:"/u4e00",2:"/u4e8c",3:"/u4e09",4:"/u56db",5:"/u4e94",6:"/u516d"};/(Y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(t)&&(t=t.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"/u661f/u671f":"/u5468":"")+a[e.getDay()+""]));for(var r in n)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return t}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),s=a(r),i=n(4),o=n(3),h=a(o);t["default"]={props:(0,h["default"])(),data:function(){return{year:0,month:0,days:[],current:[],today:(0,s["default"])(new Date,"YYYY-MM-DD"),months:["01","02","03","04","05","06","07","08","09","10","11","12"]}},ready:function(){this.value=this.convertDate(this.value),this.render(this.renderMonth[0],this.renderMonth[1]-1)},computed:{_replaceTextList:function(){var e={};for(var t in this.replaceTextList)e[this.convertDate(t)]=this.replaceTextList[t];return e}},watch:{value:function(e){this.value=this.convertDate(e),this.renderOnValueChange?this.render(null,null,e):this.render(this.year,this.month,this.value),this.$emit("on-change",e)},returnSixRows:function(e){this.render(this.year,this.month,this.value)},disablePast:function(){this.render(this.year,this.month,this.value)},disableFuture:function(){this.render(this.year,this.month,this.value)}},methods:{replaceText:function(e,t){return this._replaceTextList[t]||e},convertDate:function(e){return"TODAY"===e?this.today:e},buildClass:function(e,t,n){var a={current:t.current||n,"is-disabled":t.disabled,"is-today":t.isToday};return a["is-week-"+e]=!0,a},render:function(e,t){var n=(0,i.getDays)({year:e,month:t,value:this.value,rangeBegin:this.convertDate(this.startDate),rangeEnd:this.convertDate(this.endDate),returnSixRows:this.returnSixRows,disablePast:this.disablePast,disableFuture:this.disableFuture});this.days=n.days,this.year=n.year,this.month=n.month},formatDate:function(e,t,n){return[e,(0,i.zero)(t+1),(0,i.zero)(n.day)].join("-")},prev:function(){0===this.month?(this.month=11,this.year=this.year-1):this.month=this.month-1,this.render(this.year,this.month)},next:function(){11===this.month?(this.month=0,this.year=this.year+1):this.month=this.month+1,this.render(this.year,this.month)},go:function(e,t){this.render(e,t)},select:function(e,t){this.current.length>0&&(this.days[this.current[0]][this.current[1]].isCurrent=!1),this.days[e][t].current=!0,this.current=[e,t],this.value=[this.year,(0,i.zero)(this.month+1),(0,i.zero)(this.days[e][t].day)].join("-")}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){return{value:{type:String,twoWay:!0,"default":""},renderMonth:{type:Array,"default":function(){return[null,null]}},startDate:{type:String},endDate:{type:String},showLastMonth:{type:Boolean,"default":!0},showNextMonth:{type:Boolean,"default":!0},highlightWeekend:{type:Boolean,"default":!1},returnSixRows:{type:Boolean,"default":!0},hideHeader:{type:Boolean,"default":!1},hideWeekList:{type:Boolean,"default":!1},replaceTextList:{type:Object,"default":function(){return{}}},weeksList:{type:Array,coerce:function(e){return e&&e.length?e:["Su","Mo","Tu","We","Th","Fr","Sa"]}},customSlotFn:{type:Function,"default":function(){return""}},renderOnValueChange:{type:Boolean,"default":!0},disablePast:{type:Boolean,"default":!1},disableFuture:{type:Boolean,"default":!1}}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){return 10>e?"0"+e:e}function s(e){var t=e.split("-");return{year:parseInt(t[0],10),month:parseInt(t[1],10)-1,day:parseInt(t[2],10)}}function i(e,t){return 0===t?{month:11,year:e-1}:{year:e,month:t-1}}function o(e,t){return 11===t?{month:0,year:e+1}:{year:e,month:t+1}}function h(e){return"number"==typeof e?e:"string"==typeof e?new Date(e.replace(/-/g,"/")).getTime():e.getTime()}function u(e,t,n){e=h(e);var a=t?e>=h(t):!0,r=n?e<=h(n):!0;return a&&r}function l(e){var t=e.year,n=e.month,a=e.value,r=(e.isRange,e.rangeBegin),l=e.rangeEnd,d=e.returnSixRows,f=void 0===d?!0:d,y=e.disablePast,p=void 0===y?!1:y,m=e.disableFuture,v=void 0===m?!1:m,x=(0,c["default"])(new Date,"YYYY-MM-DD"),g=new Date;g.setHours(0,0,0,0);var D=s(a||x);("number"!=typeof t||"number"!=typeof n||0>n)&&(t=D.year,n=D.month),p&&(r=r?Math.max(g.getTime(),h(r)):g),v&&(l=l?Math.min(g.getTime(),h(l)):g);var M,b=new Date(t,n,1).getDay(),w=new Date(t,n+1,0).getDate(),k=new Date(t,n,0).getDate(),Y=0,_=[];for(M=1;w>=M;M++){var T=new Date(t,n,M).getDay();if(0===T)_[Y]=[];else if(1===M){_[Y]=[];for(var j=k-b+1,L=0;b>L;L++){var R=i(t,n);_[Y].push({year:R.year,month:R.month,month_str:R.month+1,day:j,disabled:!0,isLastMonth:!0}),j++}}var S=(0,c["default"])(new Date(t+"/"+(n+1)+"/"+M),"YYYY/MM/DD"),B={year:t,month:n,month_str:n+1,day:M,isCurrent:a&&(0,c["default"])(new Date(a),"YYYY/MM/DD")===S,disabled:!u(S,r,l),isToday:(0,c["default"])(new Date,"YYYY/MM/DD")===S};if(_[Y].push(B),6===T)Y++;else if(M===w){var E=1;for(T;6>T;T++){var N=o(t,n);_[Y].push({year:N.year,month:N.month,month_str:N.month+1,day:E,disabled:!0,isNextMonth:!0}),E++}}}if(f&&5===_.length){var F=o(t,n),P=_[4][6].isNextMonth?_[4][6].day:0;_[6]=[];for(var $=0;7>$;$++)_[6].push({year:F.year,month:F.month,month_str:F.month+1,day:++P,disabled:!0,isNextMonth:!0})}if(f&&4===_.length){var C=o(t,n),H=0;_[5]=[],_[6]=[];for(var O=0;7>O;O++)_[5].push({year:C.year,month:C.month,month_str:C.month+1,day:++H,disabled:!0,isNextMonth:!0}),_[6].push({year:C.year,month:C.month,month_str:C.month+1,day:++H,disabled:!0,isNextMonth:!0})}return{year:t,month:n,month_str:n+1,days:_}}Object.defineProperty(t,"__esModule",{value:!0}),t.zero=r,t.splitValue=s,t.getPrevTime=i,t.getNextTime=o,t.getDays=l;var d=n(1),c=a(d)},function(e,t){},function(e,t){e.exports='<div class=inline-calendar :class="{\'is-weekend-highlight\': highlightWeekend}"> <div class=calendar-header v-show=!hideHeader> <div class=calendar-year> <a class="year-prev vux-prev-icon" href=javascript: @click="go(year - 1, month)"></a> <a class="calendar-year-txt calendar-title" href=javascript:>{{year}}</a> <a class="year-next vux-next-icon" href=javascript: @click="go(year + 1, month)"></a> </div> <div class=calendar-month> <a @click=prev class="month-prev vux-prev-icon" href=javascript:></a> <a class="calendar-month-txt calendar-title" href=javascript:>{{months[month]}}</a> <a @click=next class="month-next vux-next-icon" href=javascript:></a> </div> </div> <table> <thead v-show=!hideWeekList> <tr> <th v-for="(index, week) in weeksList" class="week is-week-list-{{index}}">{{week}}</th> </tr> </thead> <tbody> <tr v-for="(k1,day) in days"> <td :data-date="formatDate(year, month, child)" :data-current=value v-for="(k2,child) in day" :class="buildClass(k2, child, formatDate(year, month, child) === value && !child.isLastMonth && !child.isNextMonth)" @click=select(k1,k2,$event)> <span v-show="(!child.isLastMonth && !child.isNextMonth ) || (child.isLastMonth && showLastMonth) || (child.isNextMonth && showNextMonth)">{{replaceText(child.day, formatDate(year, month, child))}}</span> {{{customSlotFn(k1, k2, child)}}} </td> </tr> </tbody> </table> </div>'},function(e,t,n){var a,r;n(5),a=n(2),r=n(6),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)}])});