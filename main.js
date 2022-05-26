const input = document.querySelector('textarea#text-input');

const output = document.querySelector('textarea#text-output');

const buttonCopy = document.querySelector('button.copy');

//função botão cripto//
function btnCript() {
    const textoEncrip = cripto(input.value)
    output.value = textoEncrip
}

//função botão descripto//
function btnDescript() {
    const textoEncrip = descripto(input.value)
    output.value = textoEncrip
}

//função de criptografar//
function cripto(stringEncrip) {
        const textCripto = input.value;
        let matrizText = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringEncrip = stringEncrip.toLowerCase();
        for(let i = 0; i < matrizText.length; i++) {
            if(stringEncrip.includes(matrizText[i][0])) {
                stringEncrip = stringEncrip.replaceAll(matrizText[i][0], matrizText[i][1]);
            }
        }
        return stringEncrip;
    }

//função descriptografar//
    function descripto(stringEncrip) {
        const textCripto = input.value;
        let matrizText = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringEncrip = stringEncrip.toLowerCase();
        for(let i = 0; i < matrizText.length; i++) {
            if(stringEncrip.includes(matrizText[i][1])) {
                stringEncrip = stringEncrip.replaceAll(matrizText[i][1], matrizText[i][0]);
            }
        }
        return stringEncrip;
    }

    
//função copiar//
function copy() {
        let copyText = document.getElementById("text-output");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        alert("Texto copiado para a área de transferência");
      }
