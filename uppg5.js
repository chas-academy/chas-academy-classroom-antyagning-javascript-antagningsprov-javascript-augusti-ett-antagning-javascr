
function uppg5() {
    // skriv en if-sats som jämför två tal
    // om det första talet är större än det andra, skriv ut "Det första talet är större än det andra"
    // annars skriv ut "Det andra talet är större än det första"

    let a = Math.floor(Math.random()*100);
    let b = Math.floor(Math.random()*100);


    if ( a > b ) {
        console.log("Det första talet är större än det andra");
    } else if (a < b ){
        console.log("Det andra talet är större än det första");
    } else if (a==b){
        console.log("Det är lika stora")
    }

}

module.exports = { uppg5 };