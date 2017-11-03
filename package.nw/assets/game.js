function openwindow(websiteurl) {
window.open(websiteurl, "_blank", "toolbar=yes, scrollbars=yes, resizeable=yes, top=500, left=500, width=10000, height=10000");
}
var Game =  {
     _display: null,
     _displaTHREE: null,
     _currentScreen: null,
     cheats: false,
     _screenWidth: 100, //75, 150
     _screenHeight: 36, //20, 55s
	version:"v0.1.0",
	build:"b010aDS",
	platform:"Win32",
	author:"undefined",
     Mods: function(){
     healthmod = function(amount){
          
     },
     speedmod = function(amount){
              
     },
     attackmod = function(amount){
          
     }
     },
     mod: function(){
          // Cheat codes & dev functions
          if(this._cheats === true){
          // if cheats are enabled
               var game = this; // so we can use this
               return true;
          }
     },
	init: function() {
        // Any necessary initialization will go here.
        this._display = new ROT.Display({width: this._screenWidth,
                                         height: this._screenHeight + 1});
        // Create a helper function for binding to an event
        // and making it send it to the screen
        var game = this; // So that we don't lose this
        var bindEventToScreen = function(event) {
            window.addEventListener(event, function(e) {
                // When an event is received, send it to the
                // screen if there is one
                if (game._currentScreen !== null) {
                    // Send the event type and data to the screen
                    game._currentScreen.handleInput(event, e);
                }
            });
        };
        // Bind keyboard input events
        bindEventToScreen('keydown');
        //bindEventToScreen('keyup');
        bindEventToScreen('keypress');
    },
	getDisplay: function() {
		return this._display;
	},
	getScreenWidth: function() {
    return this._screenWidth;
	},
	reload: function(){
			location.reload();
	},
	reflect: function(axis, x, y){
		var axis, x, y;
		var out;
		if (axis == "x" || axis == "xaxis"){
			if (y < 0){
				out = {x: x,y: abs(y)};
				console.log(out);
			} else if (y > 0){
				out = {x: x,y: -y};
				console.log(out);
			} else {
				out = {x: x,y: y};
				console.log(out);
			}
		} else if (axis == "y" || axis == "yaxis"){
			if (y < 0){
				out = {x: abs(x),y: y};
				console.log(out);
			} else if (y > 0){
				out = {x: -x,y: y};
				console.log(out);
			} else {
				out = {x: x,y: y};
				console.log(out);
			}
		} else if (axis == "both" || axis == "xy" || axis == "yx" || axis == "xyaxis" || axis == "yxaxis"){
			out = {x: y,y: x};
			console.log(out);
		} else {
			//Error
			
		}
		return out;
	},
	vector: function(x, y, z){
		var x, y, z, out;
		
	},
	difference: function(sum1, sum2){
		var sum1, sum2;
		if (sum1 !== null && sum2 !== null){
			if (sum1 > sum2){
				return sum1 - sum2;
			}
			if (sum1 < sum2){
				return sum2 - sum1;
			}
			if (sum1 == sum2){
				return true;
			}
		} else {
			return false;
		}
	},
	getVersion: function(){
		return "1.0.0";
	},
	
	getScreenHeight: function() {
	    return this._screenHeight;
	},
    refresh: function() {
        // Clear the screen
        this._display.clear();
        // Render the screen
        this._currentScreen.render(this._display);
    },
	
	switchScreen: function(screen) {
        // If we had a screen before, notify it that we exited
        if (this._currentScreen !== null) {
            this._currentScreen.exit();
        }
        // Clear the display
        this.getDisplay().clear();
        // Update our current screen, notify it we entered
        // and then render it
        this._currentScreen = screen;
        if (!this._currentScreen !== null) {
            this._currentScreen.enter();
            this.refresh();
        }
    }
};

window.onload = function() {
    // Check if rot.js can work on this browser
    if (!ROT.isSupported()) {
        alert("The rot.js library isn't supported by your browser.");
    } else {
        // Initialize the game
        
        Game.init();
        // Add the container to our HTML page
        document.body.appendChild(Game.getDisplay().getContainer());
        // Load the start screen
        Game.switchScreen(Game.Screen.startScreen);
		
		
    }
};