let current_url = window.location.href;

var TurnOn = (index) => {
    if (!(current_url.includes(`&start=${index - 1}`))) {
        console.log("redirect to 2nd page ....................");
        window.open(`${current_url}&start=1`, "_self");
    }
}

// Turn on/off
TurnOn(2);