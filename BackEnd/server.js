const express = require('express'); 
 const app = express(); 
 var cors = require('cors')
 var bodyParser = require('body-parser');
 var uuid = require('uuid');
 
app.use(cors())
app.options('*', cors());
app.use(bodyParser.json());

 const token = "SADF878S7D9F8SDA9F";

 app.get('/', (req, res) => { 
 	res.send('App is running...'); 
 }); 
 
 
app.post('/api/login', function (req, res) {
    if (req.body.user === 'test' && req.body.pass === 'test') {
        return res.send(req.body.user + '_' + token);
    } else {
        return res.send(false);
    }
});

 app.post('/api/token', (req, res) => { 
 	res.send(JSON.stringify(token)); 
 }); 
 
 
 app.listen(3000, () => console.log('Listening on port 3000...')); 
