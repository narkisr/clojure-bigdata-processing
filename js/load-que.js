function loadQue(){
	    //Slides object with a time (integer) and a html string
	    var slides = {
	    0: "This is the first subtitle. You can put html in here if you like",
	    4: "A fluffy thing eating some grass.",
	    }
	    //Start cuepoint and pass in our the subtitles we want
	    cuepoint.init(slides);

	    //You can set your own skip to links by using the cuepoint.setTime(seconds) function
	    // $('#1').click(function(){ cuepoint.setTime(40)});
}
