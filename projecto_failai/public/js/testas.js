function showAlert(zinutesTekstas = 'Missing text here') {
    window.alert(zinutesTekstas);
}
let element = document.querySelector('.btn')

element.addEventListener('click', function(){showAlert('Naujas tekstas');})