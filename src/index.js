/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = 'https://platzi-avo.vercel.app/';
const urlData = 'api/avo';


async function llamada() {
    try {
        const response = await fetch(`${url}${urlData}`);
        const resJson = await response.json();
        console.log(resJson);
        const data = resJson.data;
        const items = [];

        data.forEach(item => {
            // document.body.insertAdjacentHTML('beforeend', `
            //     <div class="container">
            //         <img src="${url}${item.image}" alt="${item.name}">
            //         <h2>${item.name}</h2>
            //         <p>$${item.price}<p>
            //     </div>
            // `);
            const imagen = document.createElement('img');
            const title = document.createElement('h2');
            const price = document.createElement('p');

            const container = document.createElement('div');
            container.append(imagen, title, price);

            items.push(container);
        });
        //console.log(...items);
        // 
        document.body.append(...items);


    } catch (error) {
        console.log('Ocurrió un error: ', error);
    }
};

llamada();