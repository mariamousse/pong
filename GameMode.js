class GameMode{
    constructor(){
      this.classic_isVisible = false;
      this.special_isVisible = false;
      
      this.gameMode_tittle = createImg("", "gameMode_tittle");

      this.back_menu_button = createButton("back");
      
      this.classic_mode = createButton("CLASSIC");
      this.classic_mode_1x1 = createButton("1x1");
      this.classic_mode_1xBot = createButton("1xBot");

      this.special_mode = createButton("SPECIAL");
      this.special_mode_1x1 = createButton("1x1");
      this.special_mode_2x2 = createButton("2x2");
      this.special_mode_online1x1 = createButton("online 1x1");

      this.Elements();
      this.Classic_showButtons();
      this.Special_showButtons();
      
      this.Press_BackToMenu();
      this.Press_Classic_1x1();
    }

    Elements(){
        
        this.gameMode_tittle.position(windowWidth/2, 100);

        this.back_menu_button.position(50,50);
        
        this.classic_mode.position(windowWidth/2 - 125, windowHeight/2 -50);
        this.classic_mode_1x1.position(this.classic_mode.x + 20, this.classic_mode.y +60);
        this.classic_mode_1xBot.position(this.classic_mode.x +135, this.classic_mode.y +60);
        
        this.special_mode.position(this.classic_mode.x, this.classic_mode.y + 150);
        this.special_mode_1x1.position(this.special_mode.x -40, this.special_mode.y +60);
        this.special_mode_2x2.position(this.special_mode.x +75, this.special_mode.y +60);
        this.special_mode_online1x1.position(this.special_mode.x  +190, this.special_mode.y +60);

       
        this.back_menu_button.class("back_button");
        
        this.gameMode_tittle.class("gameMode_tittle");
        
        this.classic_mode.class("classic_mode");
        this.classic_mode_1x1.class("classic_mode_1x1");
        this.classic_mode_1xBot.class("classic_mode_1xBot");

        this.special_mode.class("special_mode");
        this.special_mode_1x1.class("special_mode_1x1");
        this.special_mode_2x2.class("special_mode_2x2");
        this.special_mode_online1x1.class("special_mode_online1x1");

    }

    Classic_showButtons(){

        this.classic_mode_1x1.hide();
        this.classic_mode_1xBot.hide();

        this.classic_mode.mousePressed(() => { 
            if(this.classic_isVisible == false){
                
                this.classic_mode_1x1.show();
                this.classic_mode_1xBot.show();

                this.classic_isVisible = true;
            }
            else{
                
                this.classic_mode_1x1.hide();
                this.classic_mode_1xBot.hide();

                this.classic_isVisible = false;
            }

        });

    }

    Special_showButtons(){
        
        this.special_mode_1x1.hide();
        this.special_mode_2x2.hide();
        this.special_mode_online1x1.hide();

        this.special_mode.mousePressed( () =>{
            if(this.special_isVisible == false){
            
                this.special_mode_1x1.show();
                this.special_mode_2x2.show();
                this.special_mode_online1x1.show();
    
                this.special_isVisible = true;
                
            }
            else{
                
                this.special_mode_1x1.hide();
                this.special_mode_2x2.hide();
                this.special_mode_online1x1.hide();

                this.special_isVisible = false;
            }     
            
        });
        
    }

    Press_BackToMenu(){

        this.back_menu_button.mousePressed( () => {
           
            this.back_menu_button.hide();

            this.gameMode_tittle.hide();
        
            this.classic_mode.hide();
            this.classic_mode_1x1.hide();
            this.classic_mode_1xBot.hide();

            this.special_mode.hide();
            this.special_mode_1x1.hide();
            this.special_mode_2x2.hide();
            this.special_mode_online1x1.hide();

            this.menu = new Menu();

        })
    }

    Press_Classic_1x1() {
            
        this.classic_mode_1x1.mousePressed( () => {
            
            this.back_menu_button.hide();

            this.gameMode_tittle.hide();
        
            this.classic_mode.hide();
            this.classic_mode_1x1.hide();
            this.classic_mode_1xBot.hide();

            this.special_mode.hide();
            this.special_mode_1x1.hide();
            this.special_mode_2x2.hide();
            this.special_mode_online1x1.hide();

            this.play = new Classic_1x1();
        });

    }

    Press_Classic_1xBot() {
            
        this.classic_mode_1xBot.mousePressed( () => {
            
            this.back_menu_button.hide();

            this.gameMode_tittle.hide();
        
            this.classic_mode.hide();
            this.classic_mode_1x1.hide();
            this.classic_mode_1xBot.hide();

            this.special_mode.hide();
            this.special_mode_1x1.hide();
            this.special_mode_2x2.hide();
            this.special_mode_online1x1.hide();

            this.bot = new Classic_1xBot();
        });

    }

}