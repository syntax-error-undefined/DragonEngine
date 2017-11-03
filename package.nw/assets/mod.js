var Mod = {
     healthmod : 70,
     attackmod : 10,
     sightmod : 10,
     inventoryslotmod : 22,
     setXP : function(xp){
      Game.EntityMixins.ExperienceGainer.giveExperience(xp);
     },
     setSightRadius : function(radius){
      Game.EntityMixins.Sight.increaseSightRadius(radius);
     },
     setMaxHP : function(hp){
      Game.EntityMixins.Destructible.increaseMaxHp(hp);
      Game.EntityMixins.Destructible.setHp(hp);
     }
};