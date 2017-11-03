Game.Config = {};
/*Game.Config.Config = {
	getConfig : {value:[]}
};*/
Game.Config.list = [];
Game.Config.Global = {};
Game.Config.Global.amountof = {};
Game.Config.Global.amountof.Configs = 0;
Game.Config.Config = function(){};
Game.Config.Config.tag = null;
Game.Config.Config.value = null;
Game.Config.Config.data = null;
Game.createConfig = function(tag, value, data){
	this.config = new Game.Config.Config();
	this.config.tag = tag;
	this.config.value = value;
	this.config.data = data;
	this.tag = tag;
	this.value = value;
	this.data = data;
	this.setTolist = function(){
		var x = this;
		x.globalList = Game.Config.list;
		var gl = x.globalList;
		x.globalList.push(this.tag);  //[0]
		x.globalList.push(this.config);  //[1]
		x.globalList.push(this.value); //[2]
		x.globalList.push(this.data); //[3]
		Game.Config.Global.amountof.Configs + 1;
	};
	this.setTolist();
	this.properties = {}; //Custom Config data here
	this.isRoot = null;
	this.isGlobal = null;
	this.isPrivate = null;
	this.isVolitile = null;
	this.setConfig = function(object){
		if(object instanceof Object){
			if(object.prop === Game.HTML.toLower("root")){
				
			}
			if(object.prop === Game.HTML.toLower("global")){
				
			}
			if(object.prop === Game.HTML.toLower("private")){
				
			}
		}
	};
};


Game.getConfig = function(name){
	for (var i = 0; i < Game.Config.list; i++){
		if (Game.Config.list[i] === name){
			return Game.Config.list[i + 1];
		}
	}
	return false;
};
