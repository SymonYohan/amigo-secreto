let listaAmigos = [];
let sorteados = [];

function adicionarAmigo() {
    let nome = document.getElementById('nomeAmigo').value.trim();
    if (nome === '') {
        alert('Digite um nome válido!');
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    document.getElementById('nomeAmigo').value = '';
}

function atualizarLista() {
    let listaHtml = '';
    listaAmigos.forEach((amigo, index) => {
        listaHtml += `<p>${index + 1}. ${amigo}</p>`;
    });
    document.getElementById('lista').innerHTML = listaHtml;
}

function sortear() {
    let audio = document.getElementById('sorteioAudio');

    let naoSorteados = listaAmigos.filter(nome => !sorteados.includes(nome));

    if (naoSorteados.length === 0) {
        document.getElementById('resultado').innerText = 'Todos já foram sorteados!';
        return;
    }

    
    let resultado = document.getElementById('resultado');
    resultado.innerText = 'Sorteando... 🎲';

    
    let i = 0;
    let animacao = setInterval(() => {
        let nomeAleatorio = naoSorteados[Math.floor(Math.random() * naoSorteados.length)];
        resultado.innerText = `🎲 ${nomeAleatorio} 🎲`;
        i++;
        if (i > 15) {
            clearInterval(animacao);
            let sorteado = naoSorteados[Math.floor(Math.random() * naoSorteados.length)];
            sorteados.push(sorteado);
            resultado.innerText = `🎉 O sorteado foi: ${sorteado} 🎉`;
            audio.pause();
            audio.currentTime = 0;
        }
    }, 150);
}

function reiniciar() {
    listaAmigos = [];
    sorteados = [];
    document.getElementById('lista').innerHTML = '';
    document.getElementById('resultado').innerText = '';
    document.getElementById('nomeAmigo').value = '';
}
