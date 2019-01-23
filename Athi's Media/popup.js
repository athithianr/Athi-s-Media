function createNode(element)
{
    return document.createElement(element);

}

function append(parent, el)
{
    return parent.appendChild(el);

}

const ul= document.getElementById("Quotes");

const url = 'https://rapidapi.com/andruxnet/api/random-famous-quotes';

fetch(url)
.then((resp) => resp.json())
.then(function(data)){

    let quotes = data.results;

    return quotes.map(function(author)){

    let li = createNode('li'),


    }


}