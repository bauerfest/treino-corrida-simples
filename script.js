function gerarTreino() {
  const nome = document.getElementById("nome").value;
  const idade = Number(document.getElementById("idade").value) || 0;
  const tempoTreino = Number(document.getElementById("tempoTreino").value) || 0;
  const objetivo = document.getElementById("objetivo").value;

  let nivel = "";
  if (tempoTreino < 6) {
    nivel = "Iniciante";
  } else if (tempoTreino <= 12) {
    nivel = "Intermediário";
  } else {
    nivel = "Avançado";
  }

  const treinos = {
    Iniciante: [
      "2km de trote + caminhada de 10 minutos",
      "Treino intervalado: 1min corrida / 1min caminhada por 20min",
      "3km leve mantendo respiração controlada"
    ],
    Intermediário: [
      "5km progressivo: cada km mais rápido",
      "4x400m ritmo moderado + 2min descanso",
      "6km alternando ritmo moderado e leve"
    ],
    Avançado: [
      "10km ritmo tempo run (ritmo constante e desafiador)",
      "Treino de tiros: 6x800m forte + 90s de descanso",
      "12km com variação de ritmo a cada 2km"
    ]
  };

  let treinoEscolhido = "";

  if (objetivo === "tempo") {
    treinoEscolhido = treinos[nivel][0];
  } else if (objetivo === "distancia") {
    treinoEscolhido = treinos[nivel][2];
  } else if (objetivo === "meia" || objetivo === "maratona") {
    treinoEscolhido = treinos[nivel][1];
  } else if (objetivo === "saude") {
    treinoEscolhido = treinos[nivel][0];
  } else {
    treinoEscolhido = "Selecione um objetivo válido!";
  }

  const resultado = `
    <p><strong>Olá, ${nome}!</strong></p>
    <p>Com ${idade} anos, você está no nível <strong>${nivel}</strong>.</p>
    <p>Seu treino de hoje é:</p>
    <p><strong>${treinoEscolhido}</strong></p>
  `;

  document.getElementById("resultado").innerHTML = resultado;
}
