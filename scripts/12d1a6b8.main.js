!function(){"use strict";function a(){l=setInterval(k,n);var a=$(".tile-animation"),c=a.find(".auto-play"),d=null;c.each(function(){d=$(this),f(d)}),a.each(b),$("body").on("mouseenter",".tile-animation",function(){d=$(this),f(d)}).on("mouseleave",".tile-animation",function(){d=$(this),g(d)})}function b(a,b){var c=$(b),d=c.find("img"),e=d.height(),f=c.height();c.data("totalFrames",Math.round(e/f)),c.data("currentFrame",0)}function c(a){return o.indexOf(a[0])>=0}function d(a){if(c(a)===!1){var b=a[0];o.push(b)}}function e(a){var b=a[0],c=o.indexOf(b);c>=0&&o.splice(c,1)}function f(a){c(a)===!1&&(j(a),d(a))}function g(a){e(a)}function h(a){{var b=a.data("currentFrame");a.data("totalFrames")}b++,a.data("currentFrame",b);var c=a.find("img"),d=-100*b;c.css({top:d+"%"})}function i(a){return a.data("currentFrame")>=a.data("totalFrames")-1}function j(a){var b=a.find("img");a.data("currentFrame",0),b.css({top:0})}function k(){for(var a,b=0,c=o.length;c>b;b+=1)a=$(o[b]),h(a),i(a)&&(j(a),a.removeClass("auto-play"))}var l=null,m=24,n=1e3/m,o=[];a()}();