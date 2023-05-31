/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = 'https://platzi-avo.vercel.app/';
const urlData = 'api/avo';

const appNode = document.querySelector('#app')


async function llamada() {
    try {
        const response = await fetch(`${url}${urlData}`);
        const resJson = await response.json();
        console.log(resJson);
        const data = resJson.data;
        const items = [];

        data.forEach(item => {
            
            const imagen = document.createElement('img');
            imagen.src = `${url}${item.image}`
            const title = document.createElement('h2');
            title.textContent = item.name;
            const price = document.createElement('p');
            price.textContent = item.price;

            const container = document.createElement('div');
            container.append(imagen, title, price);

            items.push(container);
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