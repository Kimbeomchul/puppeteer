# web scraping with puppeteer
[스크랩 사이트 주소](https://vibe.naver.com/chart/total)

### scrap_vibe
[scrap_with_axios](https://github.com/Kimbeomchul/node_scraping)

### how to use
```
npm install
npm start
```

### used
- nodejs
- puppeteer

### !!!!
- page.evaluate에서 function 변수를 넣으니까 에러가 발생.. 하단의 코드와 같이 해결할 수 있었다.
```
page.evaluate((a, b) => { // 여기위에만 작성했다가 에러뜨는걸 못찾았었다...
   // 여기서 a,b변수를 사용할 수 있다.
}, a, b);  
```

### Demo

