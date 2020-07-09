class Game{
	constructor(){
		
	}
	getState(){
		var gameStateref=database.ref('gameState')
		gameStateref.on("value",function(data){gameState=data.val();});
	}
	update(state){
		database.ref('/').update({gameState:state});
	}
	startGame(){
		if(gameState===0){
			player=new Player();
			player.getCount();
			form=new Form();
			form.display();
		}
	}
	play(){
		form.hide();
		//textSize(30);
		//text("gameStart",120,120);
		Player.getPlayerInfo();
		if(allPLayers!=undefined){
			//var display_position=130 
			var index=0
			var x=0;
			var y;
			for(var plr in allPLayers){
				index=index+1
				x=x+200
				y=displayHeight-allPlayers[plr].distance
				cars[index-1].x=x
				cars[index-1].y=y
				if(index===player.index){
					cars[index-1].shapeColor="red";
					camera.position.x = displayWidth/2;
          			camera.position.y = cars[index-1].y
				}
				if(plr==="player"+player.index){
					fill("red")

				}else{
					fill("black")
				}
				display_position+=20
				textSize(15)
				text(allPLayers[plr].name+":"+allPLayers[plr].distance,120,170)
			}
		}
		if(keyIsDown(UP_ARROW) && player.index !== null){
	        player.distance +=50
	        player.update();
      }
	}
	async start(){
		if(gameState === 0){
	      player = new Player();
	      var playerCountRef = await database.ref('playerCount').once("value");
	      if(playerCountRef.exists()){
	        playerCount = playerCountRef.val();
	        player.getCount();
	     }
	      form = new Form()
	      form.display();
    	}
    	car1=createSprite(100,200,30,30)
    	car2=createSprite(300,200,30,30)
    	car3=createSprite(500,200,30,30)
    	car4=createSprite(700,200,30,30)
    	allCars=[car1,car2,car3,car4]


	}

}