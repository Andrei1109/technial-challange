var listOfWords = ['bed', 'bath', 'bedbath', 'and','beyond'];
let theGivenString = "bedbathandbeyond";


var result = [];
var craftedWord = null
while (theGivenString.length>0) {

    if (craftedWord === null) {
        craftedWord = theGivenString[0];
    } else {
        craftedWord = craftedWord + theGivenString[0];
    }
   
    var ok = 0;
    listOfWords.forEach(word => {
        if (craftedWord == word) { result.push(word); ok = 1; }
    });
    if (ok == 1) {
        craftedWord = null;
        theGivenString=theGivenString.substring(1)
    }else{
        theGivenString=theGivenString.substring(1)
    }
}
console.log(result)