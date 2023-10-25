const form = document.getElementById('agenda');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputNomeAgenda = document.getElementById('nome-add')
    const inputNumeroContato = document.getElementById('numero-tel')

    let linha = '<tr>';
    linha += `<td>${inputNomeAgenda.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    
    linha += '</tr>'

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linha;

    return()
    
});