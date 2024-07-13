// Datos de usuarios y contraseñas
const usuarios = {
	'j' : '3322',
	'1' : '2115',
	'2' : '4175',
	'3' : '8111',
	'4' : '1052',
	'5' : '7018',
	'6' : '7278',
	'9' : '6621',
	'10' : '2919,'
	'16' : '3872',
	'38' : '8755',
	'39' : '9586',
	'40' : '2764',
	'41' : '6478',
	'42' : '2641',
	'43' : '3963',
	'44' : '2388',
	'45' : '8795',
	'46' : '6250',
	'47' : '2713',
	'50' : '8450',
	'51' : '1301',
	'53' : '4296',
	'54' : '5596',
	'55' : '9662',
	'56' : '9645'
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (usuarios[username] && usuarios[username] === password) {
        window.location.href = 'calculoDescuento.html';
    } else {
        document.getElementById('error').textContent = 'Usuario o contraseña incorrectos';
    }
});

function calcularDescuento() {
    const precioVenta = parseFloat(document.getElementById('precioVenta').value);
    const precioBase = parseFloat(document.getElementById('precioBase').value);
    const iva = parseFloat(document.getElementById('iva').value);
    const impuestoConsumo = parseFloat(document.getElementById('impuestoConsumo').value);

    const descuento = (((precioVenta - impuestoConsumo) / precioBase) / (iva/100+1)-1)*-100;
    document.getElementById('resultado').textContent = `El descuento final es: ${descuento.toFixed(4)}`;
}

function limpiarFormulario() {
    document.getElementById('discountForm').reset();
    document.getElementById('resultado').textContent = '';
}
