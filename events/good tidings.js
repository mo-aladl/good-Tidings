const request = require('request');
const NewsAPI = require('newsapi');
const goodTidings = (calBk) => {
    const newsapi = new NewsAPI('ef469731efcc4be99b24fecab0957881');


    request({url:newsapi , json:true},(err,res) => {
        if (err) {
            calBk('Network Connect Timeout Error')
        } else if (res.body.message) {
            calBk(res.body.message )
        } else{
            calBk((res.body.articles))
        }
    })
}

module.exports = goodTidings