const puppeteer = require("puppeteer");


(async ()=> {

const browser = await puppeteer.launch({ headless: false });  // 실제 동작을 볼 수 있도록 headless는 false처리 
const page = await browser.newPage(); 


await page.goto('https://vibe.naver.com/chart/total' , {waitUntil :"networkidle2"}); // VIBE 순위페이지로 이동


let song_data =[]; // 정보담을 배열 

const data_len = await page.$$eval("#content > div.track_section > div:nth-child(1) > div > table > tbody > tr", (data) => data.length); 
for (let i = 0; i < data_len; i++) { // 배열에 하나씩 넣기 
    song_data.push(await scrap_song(i+1));
}    

    async function scrap_song(index){
        let data = await page.evaluate((index)=>{
             
            rank = document.querySelector('#content > div.track_section > div:nth-child(1) > div > table > tbody > tr:nth-child('+ index +') > td.rank > span').innerText;
            song = document.querySelector('#content > div.track_section > div:nth-child(1) > div > table > tbody > tr:nth-child('+ index +') > td.song > div.title_badge_wrap > span > a').innerText;
            artist = document.querySelector('#content > div.track_section > div:nth-child(1) > div > table > tbody > tr:nth-child('+ index +') > td.artist').title;
            album_img = document.querySelector('#content > div.track_section > div:nth-child(1) > div > table > tbody > tr:nth-child('+ index +') > td.thumb > div > img').src;
    
            return {
                rank,
                song,
                artist,
                album_img
            }
        }, index);
        return data;
    }
   

    console.log(song_data);
    
    await browser.close();

})();
