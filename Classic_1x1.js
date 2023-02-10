class Classic_1x1 {
    constructor(){
        
        gameState = "playMenu";
        this.player1_ready = false;
        this.player2_ready = false;

        this.PlayMenu();
        //this.Play();



    }

    PlayMenu(){
        
        this.background_input = createElement("div");
        this.background_ball_color = createElement("div");
        this.background_color = createElement("div");
        this.background_bottom = createElement("div");
        this.background_top = createElement("div");
        this.rules = createElement("div");
        
        this.input_player1_name = createInput("").attribute("placeholder", "player1 name");
        this.input_player2_name = createInput("").attribute("placeholder", "player2 name");
        this.input_win_mark = createInput("", "number").attribute("placeholder", "win mark");
        this.input_vel = createInput("", "number").attribute("placeholder", "ball vel");
        this.input_ball_color = createInput("","color").attribute("placeholder", "ball color");
        this.input_ball_color.attribute("border-radius", "100px");
        this.input_player1_color = createInput("","color").attribute("placeholder", "player1 color");
        this.input_player2_color = createInput("","color").attribute("placeholder", "player2 color");
    
        this.back_gameMode_button = createButton("back");
        this.input_ready1 = createButton(this.input_player1_name.value() + " ready")
        this.input_ready2 = createButton(this.input_player2_name.value() + " ready")

        this.versus = createElement("h2");
        
        this.Press_BackToGameMode();
        this.Elements();
        this.PressReady();
    }

    Play(){
        this.HideMenu();
        gameState = "play";

        this.player1_id = createElement("div");
        this.player2_id = createElement("div");
       
        this.player1 = createSprite(windowWidth/2, 50, 100,20);
        this.player2 = createSprite(windowWidth/2, 580, 100, 20);
        this.ball = createSprite(windowWidth/2, windowHeight/2,20,20);
        this.edge_left = createSprite(-10, windowHeight/2, 20, windowHeight );
        this.edge_right = createSprite(windowWidth +10, windowHeight/2, 20,windowHeight );



        this.player1_id.position(this.player1.x - 50, this.player1.y -15);
        this.player2_id.position(this.player2.x - 50, this.player2.y -15);



        this.player1_id.class("player_id");
        this.player2_id.class("player_id");



        this.player1_id.html(this.input_player1_name.value());
        this.player2_id.html(this.input_player2_name.value());



        this.ball.setVelocity(this.input_vel.value(), this.input_vel.value());



        this.player1.shapeColor = this.input_player1_color.value();
        this.player2.shapeColor = this.input_player2_color.value();
        this.ball.shapeColor = this.input_ball_color.value();


        
            this.Mechanics();        
    
    }

    Mechanics(){
       
        this.ball.bounceOff(this.player1, this.player2, this.edge_left, this.edge_right);

        /*if(keyDown("a")){
            this.player1.x = this.player1.x + 5;
        }*/
    }
        
    
    
    Elements(){
                
        this.back_gameMode_button.position(50,50);
        this.input_ready1.position(75,570);
        this.input_ready2.position(300,570);
        
        this.input_player1_name.position(325, 150);
        this.input_player2_name.position(200, 150);
        this.input_win_mark.position(100,150);
        this.input_vel.position(100,180);
        this.input_ball_color.position(550, 150);
        this.input_player1_color.position(700, 300);       
        this.input_player2_color.position(700, 550);   
        
        this.background_input.position(75, 120);
        this.background_ball_color.position(500, 120);
        this.background_color.position(1025,120);
        this.background_bottom.position(500,460);
        this.background_top.position(500,250);

        this.rules.position(75, 250);
        this.versus.position(735,365);


        
        this.back_gameMode_button.class("back_button");
        this.input_ready1.class("ready");
        this.input_ready2.class("ready");
        
        this.input_player1_name.class("input_player_name");
        this.input_player2_name.class("input_player_name");
        this.input_win_mark.class("input_win_mark");
        this.input_vel.class("input_vel");
        this.input_ball_color.class("input_ball_color");
        this.input_player1_color.class("input_player_color");
        this.input_player2_color.class("input_player_color");

        this.background_input.class("background_input");
        this.background_ball_color.class("background_ball");
        this.background_color.class("background_color");
        this.background_bottom.class("background_choice");
        this.background_top.class("background_choice");
        this.rules.class("rules");
        this.versus.class("versus");


        
        this.versus.html("X");
        this.rules.html("regras/especificações");
        this.background_ball_color.html("choice the ball color");
        
       
        this.background_bottom.html("choice the color of " + this.input_player2_name.value());
        this.background_top.html("choice the color of " + this.input_player1_name.value());
        
        this.background_color.html("choice the background color");



    }


    Press_BackToGameMode(){
        
        this.back_gameMode_button.mousePressed( () => {
           this.HideMenu();

            this.gameMode = new GameMode();
        })
    }

    PressReady(){
        this.input_ready1.mousePressed(() => {
            
            if(this.player1_ready == false){
                this.input_ready1.class("ready_ativo");
                this.player1_ready = true;
            }
            else{
                this.input_ready1.class("ready");
                this.player1_ready = false;
            }
            if(this.player1_ready == true && this.player2_ready == true){
                this.Play();
            }
            if(this.player1_ready == false && this.player2_ready == false){
                this.HidePlay();
            }
            
        });

        this.input_ready2.mousePressed(() => {
            
            if(this.player2_ready == false){
                this.input_ready2.class("ready_ativo");
                this.player2_ready = true;
            }
            else{
                this.input_ready2.class("ready");
                this.player2_ready = false;
            };
            if(this.player1_ready == true && this.player2_ready == true){
                this.Play();
            }
            if(this.player1_ready == false && this.player2_ready == false){
                this.HidePlay();
            }
            
        });
        
    }

    HideMenu(){
        this.input_ball_color.hide();
        this.input_player1_color.hide();
        this.input_player1_name.hide();
        this.input_player2_color.hide();
        this.input_player2_name.hide();
        this.input_vel.hide();
        this.input_win_mark.hide();
        this.input_ready1.hide();
        this.input_ready2.hide();

        this.back_gameMode_button.hide();
        this.background_ball_color.hide();
        this.background_bottom.hide();
        this.background_color.hide();
        this.background_input.hide();
        this.background_top.hide();

        this.rules.hide();
        this.versus.hide();

    }

    HidePlay(){

    }

}