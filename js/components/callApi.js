import {url,  resultContainer } from './constens.js';
import createHtml from './createHtml.js';




export default async function callApi() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json);

        createHtml(json.data);
    } catch (error) {
        console.log(error);
        resultContainer.innerHTML = displayMessage("error", error);
    }
}