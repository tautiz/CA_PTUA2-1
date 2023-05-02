let tekstas = document.getElementById('unikalusElementas');
let paveiksleliai = document.getElementsByClassName('galerijosFoto');
let reklamos = document.querySelectorAll('.wrapper .element');


tekstas.innerHTML = tekstas.innerHTML + '!';
tekstas.innerHTML += '!';

paveiksleliai[0].src = '/img/lempute_off.png';
reklamos[1].style.backgroundColor = 'red';
reklamos[2].style.display = 'none'; // 'block'