	  registerCue(
	    {state: 'compiless-demo',
	     name: 'compiless',
	     slides:{
			  0:  "Our basic tokenize",
			  8: "Test code",
			  20:  "Now we eval it",
			  24: "We get back the result",
			  33: "Let get rid of !",
			  50: "We run it again", 
                    64: "Look! no '!'"},
			subs:'compiless-sub',
			vid:'compiless-vid'}


	  )


	function speedup(id){
	  document.getElementById(id).playbackRate += 1.0;
	}

	function speedown(id){
	  document.getElementById(id).playbackRate -= 1.0;
	}

      var curr_vid;
	function registerCue(data){
	  Reveal.addEventListener( data.state, function() {
	   console.log('starting '+ data.name  +'demo');
	   curr_vid = data.vid;
	   cuepoint.pause();
	   cuepoint.init(data.slides,data.subs,data.vid);
         document.getElementById(data.vid).playbackRate = 1.0;
	   cuepoint.setTime(0);
	   cuepoint.play();
	});
     }


