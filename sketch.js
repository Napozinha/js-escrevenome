function setup() {
 //Fantasia, Aventura, Infantil, Comédia, Terror, Animação

//Ponyo, 12, Fantasia, Aventura
//Bob Esponja: Uma Aventura Fora D'água, LIVRE, Infantil, Comédia
//Garfield, LIVRE, Infantil, Comédia
//Coraline, 10, Infantil, Terror
//Por Água Abaixo, LIVRE, Animação, Aventura, Comédia


let campoIdade;
let campoComedia;

// código omitido

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoComedia = createCheckbox("Gosta de Comédia?");
}

// código omitido

function draw() {
    background("white");
    let idade = campoIdade.value();
    let gostaDeComedia = campoComedia.checked();
    let recomendacao = geraRecomendacao(idade,
gostaDeComedia);

    fill(color(76, 0, 115))
    textAlign(CENTER, CENTER)
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}

// código omitido
function geraRecomendacao(idade, gostaDeComedia) {
    if(idade >= 10) {
        if(idade >= 14) {
            return "Garfield";
        } else {
            if(gostaDeComedia){
                return "Por Água Abaixo";
            } else {
              if(idade >= 12) {
                return "Ponyo";
              }
          }
        }
    } else {
      if(gostaDeComedia) {
        return "Bob Esponja: Uma Aventura Fora D'água";
      } else {
        return "Coraline"
      }
    }
}