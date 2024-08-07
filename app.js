// Datos de usuarios y contraseñas
const usuarios = {
	'3322' : '3322',
	'2115' : '2115',
	'4175' : '4175',
	'8111' : '8111',
	'1052' : '1052',
	'7018' : '7018',
	'7278' : '7278',
	'6621' : '6621',
	'2919' : '2919',
	'3872' : '3872',
	'8755' : '8755',
	'9586' : '9586',
	'2764' : '2764',
	'6478' : '6478',
	'2641' : '2641',
	'3963' : '3963',
	'2388' : '2388',
	'8795' : '8795',
	'6250' : '6250',
	'2713' : '2713',
	'8450' : '8450',
	'1301' : '1301',
	'4296' : '4296',
	'5596' : '5596',
	'9662' : '9662',
	'9645' : '9645'
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
