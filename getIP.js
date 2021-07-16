const getTheIP = new Promise((resolve, reject) => {
    $.ajax({
        method: 'GET',
        url: 'http://ipinfo.io/?format=jsonp&callback=getIP',
        success: (text) => {
            text = text.split('"ip":"');
            t = text[1]
            x = t.split('"')
            resolve(x[0]);
        },
        error: (err) => {
            console.log(err);
            reject(err);
        }
    })    
});