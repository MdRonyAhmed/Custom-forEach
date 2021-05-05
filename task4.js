const puppeteer = require('puppeteer');

Urls = ["https://www.facebook.com", "https://www.google.com"]

async function myForEach(arr, myCallBack, myString) {

    for (let i = 0; i < arr.length; i++) {

        await myCallBack(arr[i], index = i, arr, myString, () => {
           

        })

    }
}


(async () => {

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    user = {
        name: "rony",
        age: "21"
    }
    myForEach(Urls, async (element, index, arr) => {
        await page.goto(element);
        console.log(element);
        console.log(user);
    },user);
   

})();