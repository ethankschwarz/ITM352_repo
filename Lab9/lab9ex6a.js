/* Question 19

function download(url) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        picture_data = "image data:XOXOXO";
        return picture_data;
    }, 3* 1000);
    
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://www.example.com/big_pic.jpg';
process( download(url) );

*/

//Question 20

function download(url, callback) {
    setTimeout(() => {
        console.log(`Downloading ${url} ...`);
        const picture_data = "image data:XOXOXO";
        callback(picture_data);
    }, 3 * 1000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://www.example.com/big_pic.jpg';

download(url, process);