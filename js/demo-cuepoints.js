	  registerCue(
	    {state: 'vagrant-demo',
	     name: 'vagrant',
	     slides:{
			  0:  "Vagrant intro",
			  18: "Boxes",
			  61:  "Booting up",
			  142: "Logging into",
			  157: "Shared folder",
			  177: "Halting and destroying"},
			subs:'vagrant-sub',
			vid:'vagrant-vid'})


	  registerCue(
	    {state: 'puppet-demo',
	     name: 'puppet',
	     slides:{
                    0: "Puppet demo",
			  2:  "Checking current status",
			  15: "Adding Puppet configuration",
			  28: "Adding a package",
			  47: "Run during reload",
			  120: "Adding from within",
			  142: "Local run"},
			subs:'puppet-sub',
			vid:'puppet-vid'})


	  registerCue(
	    {state: 'opsk-demo',
	     name: 'opsk',
	     slides:{
                    0: "Opskeleton demo",
			  8: "We start by generating a new project",
			  17: "All the files are created within a new git repo",
			  27: "Bundler done installing gems ",
			  32: "Using librarian to install modules",
			  53: "Booting up the VM",
			  125: "Hostname is set",
			  132: "Adding a package", 
			  157: "Using run.sh from /vagrant"},
			subs:'opsk-sub',
		vid:'opsk-vid'})


	registerCue(
	    {state: 'storm-demo',
	     name: 'storm',
	     slides:{
                    0:   "Storm demo",
			  2:   "Cooking debs",
			  95:  "Booting up",
			  142: "Nimbus is up", 
			  194: "Super_a is up", 
			  249: "Super_b is up", 
			  252: "Nimbus ui shows two supervisors"},
		subs:'storm-sub',
		vid:'storm-vid'})


	 registerCue(
	    {state: 'packaging-demo',
	     name: 'packaging',
	     slides:{
                   0:  "Packaging demo",
			 2:  "Current status",
			 15:  "Cooking in first sandbox",
			 32:  "Copying package to /vagrant/local-repo",
			 65: "Installing rpm on puppetizied machine"},
		subs:'packaging-sub',
		vid:'packaging-vid'})


	registerCue(
	    {state: 'vagrantdns-demo',
	     name: 'vagrant dns',
	     slides:{ 0:  "Vagrand DNS demo",
                    2:  "Initial state",
			  10: "Local dns server",
			  27: "Booting sandboxes",
			  63: "Registration",
			  75: "Host ping",
			  95: "Sandbox ping"}, 
		subs:'vagrantdns-sub',
		vid:'vagrantdns-vid'})


	function speedup(id){
	  document.getElementById(id).playbackRate += 1.0;
	}

	function speedown(id){
	  document.getElementById(id).playbackRate -= 1.0;
	}

      var curr_vid;
	function registerCue(data){
	  Reveal.addEventListener( data.state, function() {
	   console.log('starting '+ data.name  +'dns demo');
	   curr_vid = data.vid;
	   cuepoint.pause();
	   cuepoint.init(data.slides,data.subs,data.vid);
         document.getElementById(data.vid).playbackRate = 1.0;
	   cuepoint.setTime(0);
	   cuepoint.play();
	});
     }


