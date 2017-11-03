//Player
Game.Player = function(){
	this._getPlayer();
	this._kill();
	this.Cheats();
	this.runOnce = false;
	this.health = Game.getPlayer()._hp;
	this.maxHealth = Game.getPlayer()._maxHp;
	this.level = Game.getPlayer()._level;
	this.hungerState = Game.getPlayer().getHungerState();
	this.thirstState = Game.getPlayer().getThirstState();
	this.Exp = Game.getPlayer().getExperience();
	this.getHP();
	this.getExp();
	this.getMaxHP();
	this.getLevel();
	this.setHP();
	this.setMaxHP();
	this.addHP();
	this.addMaxHP();
	this.setLevel();
	this.addLevel();
	this.setExp();
	this.addExp();
};
//returns player ent
Game.Player.prototype._getPlayer = function(){
	return Game.Screen.playScreen._player;
};
Game.getPlayer = function(){
	return Game.Screen.playScreen._player;
};

//kills player
Game.Player.prototype._kill = function(string){
	var string;
	this._getPlayer().kill(string);
};
//cheats
Game.Player.prototype._giveCheats = function(){
	this._getPlayer();
};
Game.Player.Cheats = function(){
	if (this.runOnce == false){
		Game.getPlayer().receiveMessage("Cheat Mode On");
		this.runOnce = true;
	}else {
		Game.getPlayer().receiveMessage("Dev");
		Game.Screen.playScreen._player._maxHp += 1000;
		Game.Screen.playScreen._player._hp += 1000;
		Game.Screen.playScreen._player._level += 1000;
	}
};

Game.Player.setHP = function(amount){
	var amount;
	Game.getPlayer()._hp = amount;
};
Game.Player.addHP = function(amount){
	var amount;
	Game.getPlayer()._hp + amount;
};
Game.Player.setMaxHP = function(amount){
	var amount;
	Game.getPlayer()._maxHp = amount;
};
Game.Player.addMaxHP = function(amount){
	var amount;
	Game.getPlayer()._maxHp + amount;
};

Game.Player.setLevel = function(amount){
	var amount;
	Game.getPlayer()._level = amount;
};
Game.Player.addLevel = function(amount){
	var amount;
	Game.getPlayer()._level + amount;
};

Game.Player.getHP = function(){
	return Game.Player.health;
};
Game.Player.getMaxHP = function(){
	return Game.Player.maxHealth;
};
Game.Player.getLevel = function(){
	return Game.Player.level;
};
Game.Player.getEXP = function(){
	return Game.Player.EXP;
};