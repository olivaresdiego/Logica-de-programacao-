let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;

let resultadoE = '#1 - Vai pro shopping?';
resultadoE += temDinheiro && estaEnsolarado;
console.log (resultadoE);

let resultadoOu = '#2 - Vai pro shopping?';
resultadoOu += estaEnsolarado || carroEstaNaGaragem
console.log (resultadoOu);

console.log (true !== true);
console.log (true !== false);
console. log (false !== true);
console.log (false !== false);

console.log ('Não verdadeiro: ' + !true);
console.log ('Não falso: ' +!false);