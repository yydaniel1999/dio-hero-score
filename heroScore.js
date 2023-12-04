const rankList = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
const scoreList = [10, 20, 50, 80, 90, 100];

function calcScore(wins, losses) {
  return wins - losses;
}

function showMessage(score, rank) {
  console.log(`O Herói tem saldo de ${score} está no nível de ${rankList[rank]}.`);
}

function getRank(score) {
  const rankIndex = scoreList.findIndex((value) => score <= value);

  if (rankIndex > -1) {
    showMessage(score, rankIndex);
  } else {
    showMessage(score, rankList.length - 1);
  }
}

const heroScore = calcScore(51, 10);

getRank(heroScore);
