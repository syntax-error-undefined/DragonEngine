Game.HTML = {};
Game.HTML.Nodes = [];
Game.HTML.createNode = function(tag){
	var tag;
	var temp;
	temp = document.createElement(tag);
     var form = {
          node : temp,
          id : null,
          text : null
     };
     Game.HTML.Nodes.push(form);
	return temp;
};
Game.HTML.setNodeText = function(tagElement, tagText){
	var tagElement, tagText;
     for (var i = 0; i < Game.HTML.Nodes.length; i++ ){
          if (Game.HTML.Nodes[i].node = tagElement){
               Game.HTML.Nodes[i].text = tagText; 
               Game.HTML.Nodes[i].node.appendChild(document.createTextNode(tagText));
			   if (Game.HTML.Nodes[i].id !== null){
					document.getElementById(Game.HTML.Nodes[i].id).innerHTML = tagText;
			   }
			   
          }
     }
};
Game.HTML.appendNode = function(tagElement){
     document.body.appendChild(tagElement);
};
Game.HTML.appendNodetoId = function(tagElement, id){
     var id, tagElement;
     for (var i = 0; i < Game.HTML.Nodes.length; i++ ){
          if (Game.HTML.Nodes[i].node = tagElement){
               Game.HTML.Nodes[i].id = id;   
               document.getElementById(id).appendChild(tagElement);
          }
     }
};
Game.HTML.initNode = function(tagElement){
     var tagElement, id;
     var div_text;
     for (var i = 0; i < Game.HTML.Nodes.length; i++ ){
          if (Game.HTML.Nodes[i].node = tagElement){
               if(Game.HTML.Nodes[i].text !== null){
                    div_text = Game.HTML.Nodes[i].text;    
                    
               }else{
				   div_text = "Undefined";
			   }
			   if(Game.HTML.Nodes[i].id !== null){
                 id = Game.HTML.Nodes[i].id;
               }else{
				   id = "div_stats";
			   }
          }
     }
	 
	 document.getElementById(id).innerHTML = div_text;
      
};
Game.HTML.init = {
	
	
		//div_stats = document.createElement("p");
		
		//var div_stats_text = document.createTextNode();
		
		//div_stats.appendChild(div_stats_text); 
		
		//document.body.appendChild(div_stats);  
		
		//document.getElementById("div_stats").appendChild(div_stats); 
		
	//var divs = {
	//	div_stats : 
	//};
};

//Converts to a String
Game.HTML.Str = function(value){
	var value;var out = new String(value);
	return out;
};
//Returns the first known location of a keyword in a string  (spaces count as words) 
Game.HTML.FirstinStr = function(variable, keyword){
	var variable;var keyword;var out = variable;
	return out.indexOf(keyword);
};
//Returns the last known location of a keyword in a string  (spaces count as words) 
Game.HTML.LastinStr = function(variable, keyword){
	var variable;var keyword;var out = variable;
	return out.lastindexOf(keyword);
};
//Returns the location in a string from a given words
Game.HTML.inStr = function(variable, keyword, startingint){
	var variable;var startingint;var keyword;var out = variable;
	return out.indexOf(keyword, startingint);
};
//Returns the Exact location of a keyword in a string
Game.HTML.searchStr = function(variable, keyword){
	var variable;var keyword;var out = variable;
	return out.search(keyword);
};
//Moves a word out of a string into another
Game.HTML.extractStr = function(variable, start, end){
	var variable;var start;var end;var out = variable;
	return out.slice(start, end);
};
//Replaces a word in a string
Game.HTML.replace = function(variable, oldword, newword){
	var variable;var oldword;var newword;var out = variable;
	return out.replace(oldword, newword);
};
//Converts to upper case
Game.HTML.toUpper = function(string){
	var out = string;
	return out.toUpperCase();
};
//Converts to lower case
Game.HTML.toLower = function(string){
	var out = string;
	return out.toLowerCase();
};
//Merge Strings
Game.HTML.mergeStr = function(string1, string2){
	var string1, string2;
	return string1.concat(" ", string2);
};
//extract a char from a string
Game.HTML.getChar = function(string, position){
	var string; var position;
	return string.charAt(position);
};
Game.HTML.getCharCode = function(string, position){
	var string; var position;
	return string.charCodeAt(position);
};
//Converts a String into an array
Game.HTML.convertStr = function(string, splitat){
	var string; var splitat;
	return string.split(splitat);
};
Game.HTML.toNumber = function(string){
	return Number(string);
};
//Check for types
Game.HTML.isArray = function(variable){
	var variable;
	if(variable instanceof Array){
		return true;
	}else{
		return false;
	}
};
Game.HTML.isObject = function(variable){
	var variable;
	if(variable instanceof Object){
		return true;
	}else{
		return false;
	}
};
Game.HTML.isString = function(variable){
	var variable;
	if(variable instanceof String){
		return true;
	}else{
		return false;
	}
};