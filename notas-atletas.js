let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
 function na(a,b) {return a - b;};

for (let i = 0; i < atletas.length; i++) {
  let soma = 0;
  atletas[i].notasx = atletas[i].notas;
  atletas[i].notasx = atletas[i].notas.sort(na).slice(1,4);
  atletas[i].notasx.map(function(notas){
    soma = soma + notas;
  });
  console.log("Atleta: " + atletas[i].nome + "Notas" + atletas[i].notas + "Média dos atletas" + (soma / atletas[i].notasx.length));
};
