Game.Sound = {};
Game.Sound.getAll = [];
Game.Sound.SoundElement = function(src) {
	this.sound = document.createElement("audio");
	this.sound.src = src;
	this.Loop = function(bool){
		this.sound.loop = bool;
	}
	this.isEnded = function(){
		return this.sound.ended;
	}
	this.sound.setAttribute("preload", "auto");
	this.sound.setAttribute("controls", "none");
	this.sound.style.display = "none";
	document.body.appendChild(this.sound);
	this.play = function(){
		this.sound.play();
	}
	this.stop = function(){
		this.sound.pause();
	}
	this.pause = function(){
		this.stop();
	}
	this.mute = function(){
		this.sound.muted = true;
	}
	this.unmute = function(){
		this.sound.muted = false;
	}
	this.setVolume = function(number){
		this.sound.volume = number;
	}
	this.getVolume = function(){
		return this.sound.volume;
	}
	this.getPlayTime = function(){
		return this.sound.duration;
	}
	this.getCurrentTime = function(){
		return this.sound.currentTime;
	}
  
};
Game.Sound.addSound = function(src){
  return new Game.Sound.SoundElement(src);  
};
Game.Sound.Global = {};
Game.Sound.Global.isMuted = false;
Game.Sound.MuteGame = function(bool){
  var bool;
  Game.Sound.Global.isMuted = bool;
  if (bool == true){
      //Mute Game Sounds here
      for (var i = 0; i < Game.Sound.getAll.length; i++ ){
          
      }
  } else {
      
  }
};
	function gameIsMuted(bool){
		var bool;
		isMuted = bool;
		if(bool){
			myMusic.mute();
			myMenuMusic.mute();
			myDeathmusic.mute();
			soundpop.mute();
			soundclick.mute();
			buttonclick.mute();
		}else if(bool !==true){
			myMusic.unmute();
			myMenuMusic.unmute();
			myDeathmusic.unmute();
			soundpop.unmute();
			soundclick.unmute();
			buttonclick.unmute();
		}
    }
    function MuteGame(bool){
		gameIsMuted(bool);
	}