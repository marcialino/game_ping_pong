

class Bola{
    constructor (ctx, jogador){
        this.ctx=ctx
        this.movendo=false
        this.jogador=jogador
        this.dirx=-1 /*direção x e y*/
        this.diry=0
        this.vel=3
        this.largura=20
        this.altura=20
        this.x=this.y=(this.ctx.canvas.width/2)-(this.largura/2)
        this.y=(this.ctx.canvas.height/2)-(this.altura/2)
    }

    iniciar(){
        this.movendo=true
        this.diry=0
        /*this.diry=(Math.random()*10 > 5 ? -1 : 1)*/
    }
    atualizar(){
        if(this.movendo){
            this.x+=(this.dirx*this.vel)
            this.y+=(this.diry*this.vel)
    
            /*Colisão da bola com a borda direito, inverte a posição*/
            if(this.x>=(this.ctx.canvas.width-this.largura)){
                this.dirx=-1
                pj1++ /*aumenta a pontuação para o jogador 1*/
                this.resetarBola()
                this.dirx=-1  /*a bola volta a movimentar p/esquerda*/ 
            }
            /*Colisão da bola com a borda esquerda, inverte a posição*/ 
            if(this.x<= 0){
                this.dirx=1
                pj2++ /*aumenta a pontuação do jogador 2*/ 
                this.resetarBola()
                this.dirx=1
            }
            /*Colisão da bola com a borda inferior, inverte a posição*/
            if(this.y>=(this.ctx.canvas.height-this.altura)){
                this.diry*=-1
            }
            /*Colisão da bola com a borda superior, inverte a posição*/ 
            if(this.y<= 0){
                this.diry*=-1   
            }
            /*Colisão da bolinha com jogador*/ 
            if(
                (this.x <= this.jogador.x + this.jogador.largura && this.x+this.largura >= this.jogador.x)&&
                (this.y+this.altura >= this.jogador.y && this.y <= this.jogador.y + this.jogador.altura)
            ){
                this.dirx=1
                this.diry=((this.y+(this.altura/2))-(this.jogador.y + (this.jogador.altura/2)))/16
            }
        }
    }
    /*Voltar a bola para posição inicial, depois que mudar o placar*/
    resetarBola(){
        this.movendo=false
        this.x=this.y=(this.ctx.canvas.width/2)-(this.largura/2)
        this.y=(this.ctx.canvas.height/2)-(this.altura/2)
        jogador.x=0
        jogador.y= (this.ctx.canvas.height/2)-(jogador.altura/2)
        cpu.x=(this.ctx.canvas.width-cpu.largura) 
        cpu.y=(this.ctx.canvas.height/2)-(cpu.altura/2)

    }
    desenhar(){
        this.atualizar()
        this.ctx.fillStyle='#000'
        this.ctx.fillRect(this.x, this.y, this.largura, this.altura)
    }
}
