// const contenido = document.getElementById('ingresos');
// let texto = document.getElementById('ingreso');
// let ciudad = document.getElementById('ingreso');


// const recibiraClima = async () =>{
//     try{
//     const respuesta = await fetch(` https://api.weatherbit.io/v2.0/current?city=${pais}&country=${ciudad}&key=092e08679b594ef2b9d3f4203659d307&include=minutely&lang=es`);
//     console.log(respuesta)
//     const datos = await respuesta.json();
//     console.log(datos)
//     console.log(datos.data[0].city_name)
//     let descripcion= datos.data[0].weather.description
//     let temperatura = datos.data[0].app_temp

//     contenido.innerHTML = `<h1>El clima esta: </h1><div> ${descripcion}</div>
//     <h1> Y la temperatura es </h1> ${temperatura} `
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// const url = 'https://nlp-translation.p.rapidapi.com/v1/translate?text=Hello%2C%20world!!&to=es&from=en';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


const From = document.querySelector('#lang1')
const To = document.querySelector('#lang2')
console.log(To)

const URL = 'https://text-translator2.p.rapidapi.com/getLanguages';

const OPCION =  {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5dc833aa74msh51baa5436c339e1p13ae95jsn151d3132d03c',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	}
};

let entrada = 'es'
let salida = 'en'

fetch(URL, OPCION)
	.then(respuesta => respuesta.json())
	.then(eleccion => {
		let lenguajes = eleccion.data.languages
		
		lenguajes.forEach(element => {
			From.innerHTML += `<option value="${element.code}">${element.name}</option>`
			To.innerHTML += `<option value="${element.code}">${element.name}</option>`

		});

		From.addEventListener('click', () => {
			console.log(From.value)
			entrada = From.value
		})

		To.addEventListener('click', () => {
			console.log(To.value)
			salida = To.value
		})

	})
	.catch(error => console.log(error))

const traducir = document.querySelector('#traducir')
const ingreso1 = document.querySelector('#ingreso1')
const ingreso2 = document.querySelector('#ingreso2')

traducir.addEventListener('click', () => {
	const valor1 = ingreso1.value

const encodedParams = new URLSearchParams();
encodedParams.set('source_language', entrada);
encodedParams.set('target_language', salida);
encodedParams.set('text', valor1);

const url = 'https://text-translator2.p.rapidapi.com/translate';

const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '5dc833aa74msh51baa5436c339e1p13ae95jsn151d3132d03c',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  body: encodedParams,
};

fetch(url, options)
	.then(respuesta => respuesta.json())
	.then(traduccion => ingreso2.value = traduccion.data.translatedText)
	.catch(error => console.log(error))

})