class Menu{
    constructor(){
        this.play_button = createButton("PLAY");
        this.shop_button = createButton("SHOP");
        this.credits_button = createButton("CREDITS");

        this.game_tittle = createImg("", "game_title");

        this.Elements();
        this.PressPlay();
    }

    Elements(){

        this.play_button.position(width/2 -125, height/2);
        this.shop_button.position(width/2 - 125, height/2 +75);
        this.credits_button.position(width/2 -125, height/2 +150);
        this.game_tittle.position(width/2, 150);  
        
        this.play_button.class("play_button");
        this.shop_button.class("shop_button");
        this.credits_button.class("credits_button");  
        this.game_tittle.class("game_tittle");
    }

    PressPlay(){
        this.play_button.mousePressed( () => { 
            
            this.play_button.hide();
            this.shop_button.hide();
            this.credits_button.hide();
            this.game_tittle.hide();

            this.gameMode = new GameMode()
            gameState = "gameMode";
            
        });
    }

}