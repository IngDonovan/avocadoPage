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

            const container = `
                <div class="container">
                    <img src="${url}${item.image}" alt="${item.name}">
                    <h2>${item.name}</h2>
                    <p>$${item.price}<p>
                </div>
            `;
            items.push(container);
        });
        
        document.body.insertAdjacentHTML('beforeend', items );


    } catch (error) {
        console.log('Ocurrió un error: ', error);
    }
};

llamada();