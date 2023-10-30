let conta = 0;

const menos = () => {
  if(conta > 0) {
    conta--;
    updadteConta();
  }
}

const mais = () => {
  conta++;
  updadteConta();
}

const reset = () => {
  conta = 0;
  updadteConta();
}

const updadteConta = () => {
  const contaElement = document.querySelector(".conta span");
  contaElement.textContent = conta;
}

const menosButton = document.querySelector(".menos");
menosButton.addEventListener("click", menos);

const maisButton = document.querySelector(".mais");
maisButton.addEventListener("click", mais);

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", reset);