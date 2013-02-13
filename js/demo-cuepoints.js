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
         );
       registerCue({state: 'emr-demo',
	     name: 'emr',
	     slides:{
			  0:  "Emr demo",
			  10: "Job starts",
                    293: "Ec2 instances running",
                    472: "Job running",
                    671: "Job ends", 
                    716: "S3 result", 
                    746: "Viewing results"
                  },
			subs:'emr-sub',
			vid:'emr-vid'});

	function speedup(id){
	  document.getElementById(id).playbackRate += 1.0;
	}

	function speedown(id){
	  document.getElementById(id).playbackRate -= 1.0;
	}

     function jumpTo(id,time){
	  document.getElementById(id).currentTime = time;
	 document.getElementById(id).play();
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


