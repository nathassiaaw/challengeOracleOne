var input = document.querySelector('textarea#text-input');

var output = document.querySelector('textarea#text-output');

var button1 = document.querySelector('button.btn-crip');
button1.onclick = cripto;

var button2 = document.querySelector('button.btn-descrip');
button2.onclick = descripto;

var buttonCopy = document.querySelector('button.copy');
buttonCopy.onclick = copy; 

//função de criptografar//
function cripto() {

    if(input.value.length == 0){
        document.getElementsByName("text-descrip")[0].placeholder="Sua mensagem não foi encontrada, escreva seu texto acima";
        output.focus();
    } else {
        var textCripto = input.value;
        var text =  textCripto.replace(/e/g, 'enter');
        var text = text.replace(/i/g, 'imes');
        var text = text.replace(/a/g, 'ai');
        var text = text.replace(/o/g, 'ober');
        var text = text.replace(/u/g, 'ufat');

    document.getElementById('text-output').innerHTML = `${text}`;
    }
}


//função de descriptografar//
function descripto() {

    if(input.value.length == 0){
        document.getElementsByName("text-descrip")[0].placeholder="Sua mensagem não foi encontrada";
        //input.focus();//
    } else {
        document.getElementsByClassName("container-descrip").innerHTML = '';

        var textCripto = input.value;
        var text =  textCripto.replace(/enter/g, 'e');
        var text = text.replace(/imes/g, 'i');
        var text = text.replace(/ai/g, 'a');
        var text = text.replace(/ober/g, 'o');
        var text = text.replace(/ufat/g, 'u');

    document.getElementById('text-output').innerHTML = `${text}`;
    }

}

//função copiar//
function copy() {
    
        var copyText = document.getElementById("text-output");
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
         /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
      
        /* Alert the copied text */
        alert("Texto copiado para a área de transferência");
      }
