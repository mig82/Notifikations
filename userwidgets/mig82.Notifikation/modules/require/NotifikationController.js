define(function() {
	//Notifikation v2.0
	return {
		preShow: function(){
			if(kony.os.isIos()){
				resetSkins(this.view);
			}
		},

		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.onTouchEnd = () => {
				
				var userId = $session.getUser()? $session.getUser().id : "user1";
				if($rules.getAB(userId)){
					$r.goto("loanOrigA", {});
				}
				else{
					$r.goto("loanOrigB", {});
				}
			};
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		}
	};
});