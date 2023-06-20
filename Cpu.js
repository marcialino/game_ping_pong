class Cpu{
/*goleiro do lado direito*/ 
    constructor(ctx,bola){
        this.ctx=ctx
        this.bola=bola
        this.vel=2.5
        this.largura=20
        this.altura=100
        this.x=(this.ctx.canvas.width-this.largura) 
        this.y=(this.ctx.canvas.height/2)-(this.altura/2)/*para colocar o objeto no meio*/
        this.iniciox=this.x /*posição inicial do goleiro*/
        this.inicioy=this.y/*posição inicial do goleiro */ 
        this.ymeio=Math.random()*this.altura/*posição central do y*/
        
        window.addEventListener('load',()=>{
            this.desenhar()
        })
                
    }
    atualizar(){
        if(this.bola.dirx > 0 && this.bola.x > this.ctx.canvas.width/2){
            /*Rebater a bola*/
            if(this.bola.y + (this.bola.altura/2) > this.y+this.ymeio){
                this.y+=this.vel
            }
            if(this.bola.y + (this.bola.altura/2) < this.y+this.ymeio){
                this.y-=this.vel
            }
            if(this.bola.x+this.bola.largura < this.x){
                this.x-=this.vel
            }

        }else{
            /*Ir para a posição de origem*/ 

            if(this.y > this.inicioy){
                this.y-=this.vel
            }
            if(this.y < this.inicioy){
                this.y+=this.vel
            }
            if(this.x > this.iniciox){
                this.x-=this.vel
            }
            if(this.x < this.iniciox){
                this.x+=this.vel
            }

        }
         /*Colisão da bolinha com Cpu */ 
         if(
            (this.x <= this.bola.x + this.bola.largura && this.x+this.largura >= this.bola.x)&&
            (this.y+this.altura >= this.bola.y && this.y <= this.bola.y + this.bola.altura)
        ){
          
            this.bola.dirx=-1
            this.bola.diry=((this.bola.y+(this.bola.altura/2))-(this.y+(this.altura/2)))/20
            /*this.bola.diry=((this.y+(this.altura/2))-(this.bola.y + (this.bola.altura/2)))/20*/
            this.ymeio=Math.random()*this.altura /*cada  vez que a cpu colodir vai trocar o meio, de forma aleatória.*/
        }

    }
    
    desenhar(){
        /*Desenhar o pong*/ 
        this.atualizar()
        this.ctx.beginPath();
        this.ctx.fillStyle='#00f'  
        this.ctx.fillRect(this.x, this.y, this.largura, this.altura)
                
    }
    
}