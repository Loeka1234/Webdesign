var i = 0;
var text = "Beginning programmer!";
var remove = false;
setInterval(() => {
    document.getElementById('text').innerHTML = text.substring(0, i);

    if(i == text.length) remove = true;
    else if(i == 0) remove = false;

    if(!remove) {
        i++;
    } else {
        i--;
    }
}, 150);