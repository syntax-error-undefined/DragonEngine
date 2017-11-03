var Messages = function(){
	var msg = this;
	msg.str = function(){
		this.returnlist = function(){
			var types = string("Error: ", "Warning: ", "Notice: ", "Event: ", "IO: ", "Crash: ");
			this.error = types[0];
			this.warning = types[1];
			this.notice = types[2];
			this.event = types[3];
			this.io = types[4];
			this.crash = types[5];
			var messages = string("Storage Data ", "Component Error!", "CrashDump: ", "Unknown URL");
			this.storage = messages[0];
			this.component = messages[1];
			this.crashdump = messages[2];
			this.url = messages[3];
		}
	}

}
function throwError(msg){
	return Messages.str.returnlist.error + msg;
}

function throwWarning(msg){
	return Messages.str.returnlist.warning + msg;
}

function throwNotice(msg){
	return Messages.str.returnlist.notice + msg;
}

function throwEvent(msg){
	return Messages.str.returnlist.event + msg;
}

function throwIo(msg){
	return Messages.str.returnlist.io + msg;
}

function throwCrash(msg){
	return Messages.str.returnlist.crash + msg;
}

function throwStorage(msg){
	return Messages.str.returnlist.storage + msg;
}

function throwComponent(msg){
	return Messages.str.returnlist.component + msg;
}

function throwCrashDump(msg){
	return Messages.str.returnlist.crashdump + msg;
}

function throwUrl(msg){
	return Messages.str.returnlist.url + msg;
}