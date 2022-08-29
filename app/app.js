const express = require('express');

//EXPRESS APP----------------->>>
const app = express();
//EXPRESS APP-----------------<<<

//REGISTER VIEW ENGINE ------->>>
app.set('view engine', 'ejs');
//REGISTER VIEW ENGINE -------<<<

/*---------------------  NOTICE  --------------------------
+---------------------------------------------------------+
| "views" is the default folder, but to use a  different  |
| view folder use the configuration settings below:       |
|  app.set('views', 'your views folder');                 |
+---------------------------------------------------------+
*/

//LISTENING FOR REQUEST -------->>>
app.listen(3000);
//LISTENING FOR REQUEST --------<<<

//PUBLIC FILES ----------------->>>
app.use(express.static('public'));
//PUBLIC FILES -----------------<<<

app.get('/', (req, res)=>{ 

    res.render('index', {title : 'Home'); 
});

app.get('/home', (req, res)=>{ 
    res.render('home',  {title : 'home'});
});

app.get('/about', (req, res)=>{ 
    res.render('about',  {title : 'About'});
});


app.get('/contact', (req, res)=>{ 
    res.render('contact',  {title : 'Contact'});
});




//------------------ 404 PAGE ------------------>>>
app.use((req, res)=>{
    res.status(404).render('404',  {title : '404'});
});
//------------------ 404 PAGE ------------------<<<
