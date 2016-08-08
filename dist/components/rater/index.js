/*!
 * Vux v0.1.3-rc8 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxRater=e():t.vuxRater=e()}(this,function(){return function(t){function e(i){if(o[i])return o[i].exports;var r=o[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(4)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={ready:function(){this.updateStyle()},props:{max:{type:Number,"default":5},value:{type:Number,"default":0},disabled:Boolean,star:{type:String,"default":"★"},activeColor:{type:String,"default":"#fc6"},margin:{type:Number,"default":2},fontSize:{type:Number,"default":25}},computed:{sliceValue:function(){var t=this.value.toString().split(".");return 1===t.length?[t[0],0]:t},cutIndex:function(){return 1*this.sliceValue[0]},cutPercent:function(){return 10*this.sliceValue[1]}},methods:{handleClick:function(t,e){this.disabled&&!e||(this.value===t+1?(this.value=t,this.updateStyle()):this.value=t+1)},updateStyle:function(){for(var t=0;t<this.max;t++)t<=this.value-1?this.colors.$set(t,this.activeColor):this.colors.$set(t,"#ccc")}},data:function(){return{colors:[],cutIndex:-1,cutPercent:0}},watch:{value:function(t){this.updateStyle()}}}},function(t,e){},function(t,e){t.exports="<div class=vux-rater> <a class=vux-rater-box v-for=\"i in max\" @click=handleClick(i) :class=\"{'is-active':value > i}\" :style=\"{color: colors && colors[i] ? colors[i] : '#ccc',marginRight:margin+'px',fontSize: fontSize + 'px', width: fontSize + 'px', height: fontSize + 'px', lineHeight: fontSize + 'px'}\"> <span class=vux-rater-inner>{{star}}<span class=vux-rater-outer :style=\"{color: activeColor, width: cutPercent + '%'}\" v-if=\"cutPercent > 0 && cutIndex === i\">{{star}}</span></span> </a> </div>"},function(t,e,o){var i,r;o(2),i=o(1),r=o(3),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}])});