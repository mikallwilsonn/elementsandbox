let json = require( './elementListAndDefaults.json' );

const elementList = document.querySelector( "#element_list ul" );
const artboard = document.querySelector( "#the_artboard" );

// ----
// Build Element List
let list = "";
let index = 0;
function buildElementList() {
    json.forEach.call(json, function( element ) { 
        let plainTextCode = document.createTextNode( element[ "element" ] );
        let elem = `<li><button data-index="${ index }"><code>${element["element"]}</code></button></li>`;
        list = list + elem;
        index += 1;
      });
      elementList.innerHTML = list;
}

buildElementList();


// ---
// Add to artboard
function placeOnArtboard( open, content, close ) {
    artboard.innerHTML = open + content + close;
}


// ----
// Listen for element to be chosen
const theElementList = document.querySelectorAll( "#element_list ul li button" );
[].forEach.call( theElementList, function( element ) {
    element.addEventListener( 'click', () => {
        let i = element.getAttribute( 'data-index' );
        let artboardCheck = artboard.innerHTML;
        if ( artboardCheck != "" ) {
            let overwriteCheck = confirm("You are about to overwrite current work. Please confirm.");
            if ( overwriteCheck == true ) {
                artboard.innerHTML = "";
                placeOnArtboard(json[i]['openTag'], json[i]['defaultText'], json[i]['closingTag']);
            } else {
                artboard.innerHTML = artboard.innerHTML;
            }
        } else {
            placeOnArtboard(json[i]['openTag'], json[i]['defaultText'], json[i]['closingTag']);
        }
        
        // console.log( `${json[i]['openTag']}${json[i]['closingTag']}` );
    });

});