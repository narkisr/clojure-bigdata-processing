(function() {
	/* Cuepoint Coffee. A simple library for HTML5 Video Subtitles and Cuepoints */
	
	/**
	 * @class Utils 
	*/
	
	var Cuepoint, Utils, utils;
	Utils = (function() {
		function Utils() {}
		Utils.prototype.log = function(args) {
			this.args = args;
			if (window.console) {
				return console.log(Array.prototype.slice.call(this, arguments));
			}
		};
		return Utils;
	})();
	
	/**
	 * @class Cuepoint
	 */
	
	Cuepoint = (function() {
		function Cuepoint() {
			this.nativeKeys = Object.keys;
		}
		Cuepoint.prototype.init = function(slides,subs,vid) {
			var key, value, _results;
			this.slides = slides;
			this.subtitles = document.getElementById(subs);
			this.video = document.getElementById(vid);
			_results = [];
			for (key in slides) {
				value = slides[key];
				this.addSlide(key, value, subs);
				_results.push(this.events.call);
			}
			return _results;
		};
		Cuepoint.prototype.events = function() {};
		Cuepoint.prototype.currentTime = function() {
			return this.video.currentTime;
		};
		Cuepoint.prototype.update = function(html,shown) {
			this.html = html;
			return this.subtitles.innerHTML = this.html;
		};
		Cuepoint.prototype.setTime = function(time) {
			this.time = time;
			this.video.currentTime = time;
			return this.video.play();
		};
		Cuepoint.prototype.addSlide = function(time, html,subs) {
			var self;
			this.time = time;
			this.html = html;
                  var shown = false;
                  var done = false;
			self = this;
			return this.video.addEventListener("timeupdate", function() {
			    // console.log(done+ " " +shown + " "+time + " "+this.currentTime);
                       if (shown == false && this.currentTime  > time) {
                          $('#'+subs).fadeIn(500, function(){ });
                          shown=true;
                          // console.log("Im shown" + html);
                       }
                       if (done == false && this.currentTime - 3  > time  ) {
                          done = true;
                          $('#'+subs).fadeOut(500, function(){ });
                          // console.log("Im done " + html);
                       }

				if (this.currentTime >= time && this.currentTime <= time + 0.3) {
                           return self.update(html,shown);
				}
                       
			},
			false);
		};
		Cuepoint.prototype.play = function() {
                  if(this.video){
			  return this.video.play();
                  }
		};
		Cuepoint.prototype.pause = function() {
			if (this.video && !this.video.paused) {
				return this.video.pause();
			}
		};
		return Cuepoint;
	})();
	utils = new Utils;
	window.cuepoint = new Cuepoint;
}).call(this);
