const express = require('express');

const app = express()
 

const port = 3000

const request = require('request');

app.set('view engine','hbs')


const hbs = require('hbs');
const path = require('path');

const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))

const partialsPath = path.join(__dirname , '../templates/partials')
hbs.registerPartials(partialsPath)


const goodTidings =require('../events/good tidings')

app.get('/',(req ,res) => {
    goodTidings((err, facts) => {
        if (err) {
            return res.send(err)
        } else {
            facts.render('index',{
                tital:facts,
                description:facts,
                Image:facts,
                name:Mohamed
            })
        }
    })
})



    app.get('/about',(req,res)=>{
        res.render('about',{
            title:'About-Us',
            name:'Mo Al-adl'
        })
    })

app.use((req, res) => {
    res.status(404).send("Sorry can't find that!")
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })