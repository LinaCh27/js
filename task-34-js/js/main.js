let text2 = "I love programming!";
let text1 = "I'm a great programmer."

function showMessage(msg1, msg2) {
    if (msg1.length > msg2.length) {
        return msg1
    } else if (msg2.length > msg1.length){
        return msg2
    }
    
    

}

let result = showMessage(text1, text2);

console.log(result)

