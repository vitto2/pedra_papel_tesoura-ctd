
let escolhaJogador = "Pedra";

let PontoJogador = 0, PontoMaquina = 0; 

let maquinaJogada = function()  { 

    let strs = ["Pedra", "Papel","Tesoura"]; 
    return strs[Math.floor(Math.random() * 3)]; 
} 

switch(maquinaJogada()) { 

    case "Pedra":
        if(escolhaJogador == "Tesoura") { 
            console.log("A máquina jogou pedra!");
            PontoMaquina = PontoMaquina + 1;
            console.log("Ponto para você!")
            console.log("A máquina tem " + PontoMaquina + " pontos.")
            
        } 
        else if(escolhaJogador == "Papel") { 
            console.log("A máquina jogou pedra!");
            PontoJogador = PontoJogador + 1; 
            console.log("Ponto para máquina!")
            console.log("Você tem " + PontoJogador + " pontos.");
        } else { 
            console.log("A máquina jogou pedra!");
            PontoJogador = PontoJogador + 1; 
            PontoMaquina = PontoMaquina + 1;
            console.log("Vocês empataram!");
        }; 
       break;
    case "Papel": 
        if(escolhaJogador == "Tesoura" ) { 
            PontoJogador = PontoJogador + 1; 
            console.log("A máquina jogou papel!");
            console.log("Ponto para você!")
            console.log("Você tem " + PontoJogador + " pontos.");
        } else if(escolhaJogador =="Pedra" ) { 
            PontoMaquina = PontoMaquina + 1;
            console.log("A máquina jogou papel!");
            console.log("Ponto para máquina!")
            console.log("A máquina tem " + PontoMaquina + " pontos.")
        } else { 
            console.log("A máquina jogou papel!");
            PontoMaquina = PontoMaquina + 1;
            PontoJogador = PontoJogador + 1; 
            console.log("Vocês empataram!");
        }
        break;
    case "Tesoura": 
        if(escolhaJogador == "Pedra" ) { 
            PontoJogador = PontoJogador + 1;  
            console.log("A máquina jogou Tesoura!");
            console.log("Ponto para você!");
            console.log("Você tem " + PontoJogador + " pontos.");
        } else if(escolhaJogador =="Papel" ) { 
            PontoMaquina = PontoMaquina + 1; 
            console.log("A máquina jogou Tesoura!");
            console.log("Ponto para máquina!")
            console.log("A máquina tem " + PontoMaquina + " pontos.")
        } else { 
            PontoMaquina = PontoMaquina + 1;
            PontoJogador = PontoJogador + 1; 
            console.log("A máquina jogou Tesoura!");
            console.log("Vocês empataram!");
        }
        break; 

}

if(PontoJogador>=2) { 
    console.log("Parabéns! Você ganhou!"); 
} else if(PontoMaquina>=2) { 
    console.log("A máquina venceu.");
}