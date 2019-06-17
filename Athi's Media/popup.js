var request = new XMLHttpRequest
//debugger;
const QUOTE_API_URL = 'https://quotes.rest/qod';
let h = new Headers()
h.append('Accept', 'application/json')
let req = new Request(QUOTE_API_URL, {
    method: 'GET',
    headers: h,
});

var quote;
var author;

fetch(req)
    .then( (response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error("Bad HTTP stuff");
        }
    })
    .then( (jsonData) =>{  
        
    })
    .catch( (err) =>{
        console.log('ERROR:', err.message)
    });

function simple(){
    quote = jsonData.contents.quotes[0].quote
    author = jsonData.contents.quotes[0].author
    document.write(quote + " - " + author)
}

function simple1(){
    var hello = "hello"

}