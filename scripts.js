function validarNum(numero, base) {
  const regexBases = {
    2: /^[01]+$/, // Apenas 0 e 1
    8: /^[0-7]+$/, // Apenas 0 a 7
    10: /^[0-9]+$/, // Apenas 0 a 9
    16: /^[0-9A-Fa-f]+$/, // Apenas 0-9 e A-F (hexadecimal)
  };
  return regexBases[base].test(numero);
}

function conversao() {
  const numero = document.getElementById("numero").value.trim();
  const entrada = parseInt(document.getElementById("entrada").value);
  const saida = parseInt(document.getElementById("saida").value);
  const container = document.getElementById("container");
  let resultado;

  if (!validarNum(numero, entrada)) {
    resultado =
      "[ERROR] - o número não corresponde a base de entrada escolhida.";
    alert(resultado);

    return;
  }

  const decimal = parseInt(numero, entrada);

  let convertido;
  switch (saida) {
    case 2:
      convertido = decimal.toString(2);
      break;
    case 8:
      convertido = decimal.toString(8);
      break;
    case 10:
      convertido = decimal.toString(10);
      break;
    case 16:
      convertido = decimal.toString(16).toUpperCase();
      break;
    default:
      convertido = "Base inválida!";
  }

  container.innerHTML = `
  
  <form class="box" action="index.html">
        <header>
          <label for="answer"> RESULTADO </label>
        </header>
        <main>
          <label for="">
            <div id="resultado" style="font-weight: bold; font-size: 25px; text-align: center;" >${convertido}</div>
          </label>
        </main>
        <footer>
          <button type="submit">denovo</button>
        </footer>
      </form>
  `;

  return container;
}
