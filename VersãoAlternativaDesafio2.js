let playerName = "Miguel";

function mainStatus(victoryCount, defeatCount){
    let winBalance = saldoVitorias(victoryCount, defeatCount);
    let rankedElos = ranqueamento(victoryCount);
        console.log (`O player ${playerName} se encontra num saldo de: *${winBalance}* vitórias, e está no elo: "${rankedElos}" no LOL`);
}
function saldoVitorias(victoryCount = 0, defeatCount = 0){
    return victoryCount - defeatCount;
}
function ranqueamento(victoryCount = 0){

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

        case (victoryCount > 100):
        return "Imortal";

break

    }
}

mainStatusStatus(39, 20)