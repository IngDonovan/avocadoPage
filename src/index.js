/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = 'https://platzi-avo.vercel.app/';
const urlData = 'api/avo';

const appNode = document.querySelector('#app');

appNode.addEventListener('click',(event) => {
    if(event.target.nodeName === 'H2'){
        window.alert(`Diste Click`);
    };
});


 // Intl
 // 1.- Format fechas
 // 2.- Format monedas

 const formatPrice = price => {
    //API de internacionalizacion
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD"
    }).format(price)

    return newPrice;
 }

async function llamada() {
    try {
        const response = await fetch(`${url}${urlData}`);
        const resJson = await response.json();
        console.log(resJson);
        const data = resJson.data;
        const items = [];

        data.forEach(item => {
            
            const imagen = document.createElement('img');
            imagen.src = `${url}${item.image}`;
            imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"//tailwindcss
            const title = document.createElement('h2');
            title.className = "text-lg"
            title.textContent = item.name;
            // title.addEventListener('click',() => {
            //     window.alert(`Diste Click en el ${item.name}`)
            // });//genera el riesgo de afectar al tener varios objetos, lo ideal es al contenedor de todos
            // title.style.fontSize = '3rem';
            // title.className = 'bigText';
            const price = document.createElement('p');
            price.className = "text-gray-600"
            price.textContent = formatPrice(item.price);

            // Creamos un contenedor el título y el precio
            const priceAndTitle = document.createElement("div")
            priceAndTitle.className = "text-center md:text-left";
            priceAndTitle.appendChild(title);
            priceAndTitle.appendChild(price);

            // Metemos todo dentro de una tarjeta contenedora
            const card = document.createElement("div");
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
            card.append(imagen, priceAndTitle);

            // Metemos todo dentro del contenedor principal
            const contenedor = document.createElement("div");
            contenedor.appendChild(card);

            items.push(contenedor);
        });
        
        // 
        appNode.append(...items);


    } catch (error) {
        console.log('Ocurrió un error: ', error);
    }
};

llamada();


// document.body.insertAdjacentHTML('beforeend', `
            //     <div class="container">
            //         <img src="${url}${item.image}" alt="${item.name}">
            //         <h2>${item.name}</h2>
            //         <p>$${item.price}<p>
            //     </div>
            // `);