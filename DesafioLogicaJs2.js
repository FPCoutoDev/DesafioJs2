let playerName = "Miguel";
let victoryCount = 51;
let defeatCount = 28;
let winBalance = saldoVitorias();
let rankedElos = ranqueamento(); 
printStatus()

function printStatus(){
console.log (`O player ${playerName} se encontra num saldo de: *${winBalance}* vitórias, e está no elo: "${rankedElos}" no LOL`);
}

function saldoVitorias(){
    return victoryCount - defeatCount;
}
function ranqueamento(){

    switch (true){

        case (victoryCount <= 10):
        return "Ferro"

break

        case (10 < victoryCount && victoryCount <= 20):
        return "Bronze";

break

        case (20 < victoryCount && victoryCount <= 50):
        return "Prata";

break

        case (50 < victoryCount && victoryCount  <= 80):
        return "Ouro";

break

        case (80 < victoryCount && victoryCount  <= 90):
        return "Diamante";

break

        case (90 < victoryCount && victoryCount  <= 100):
        return "Lendário";

break

        case (victoryCount && victoryCount  > 100):
        return "Imortal";

break

    }
}