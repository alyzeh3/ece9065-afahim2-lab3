console.log("hello..");
const { Router } = require('express');
const express = require('express');
const app = express();
app.use(express.json());
const router =express.Router();
/*
fetch("./Lab3-timetable-data.json")
.//then(function(resp){
 //return resp.json();

})
.then(function(data){
console.log(data)


});
*/
//import subject from './Lab3-timetable-data.json'
const schedule = require('./Lab3-timetable-data.json')
app.use('/',express.static('static'));
var sub;
var i = 0
for (i=0; i<schedule.length;i++){
sub = schedule[i].subject
//console.log(schedule.length)
//console.log(sub)
}
//app.get();
//app.post();
//app.delete();
//app.put();

app.get('/', (req,res) =>{
res.send('Hello World!!')
// path or url ../ to represent root of website
// callback funtion or route handlerwcalled when get request
// respond with hello emsae
// route defined
});

app.get('/api/courses/:id', (req,res)=>{
res.send(req.params.id)

});
app.get('/api/posts/:year/:month', (req,res)=>{
    res.send(req.params)
    
    });

router.get('/', (req,res) =>{
  //  const subject  = schedule.find(c => c.subject == parseInt(schedule.subject) )
        //(res.send(schedule[0].subject));
      //  res.setHeader('Content-Type', 'text/html');
      console.log('sending request')
     // res.setHeader('Content-Type', 'index/html');

      var i = 0,
        max = schedule.length
        for ( i=0 ;i < max; i++) {
           // console.log(i)
            res.write('<h1>Subject Name: ' + schedule[i].subject + '</h1>')
            res.write('<h1>className: ' + schedule[i].className + '</h1>')
            //console.log(schedule[i].subject)
            //res.send(schedule[i].subject)
           //res.write(sub)
         
        }
      
});
router.get('/:catalog_nbr', (req,res) =>{
    const nbr= req.params.catalog_nbr; 
    const subject1  = schedule.find(p => p.catalog_nbr === parseInt(nbr))
     console.log(schedule[0].catalog_nbr)
 // if(!subject1) res.status(404).send('Subject not found')
  //res.send(subject1)
if(subject1){
res.send(subject1)
}
else{
res.status(404).send('Catalog not found');
}
  //const nbr= req.params.catalog_nbr;
  res.send('working on it')
  });

router.post('/hi', (req,res) =>
{
const schedule1 = {
     "schedule_name": req.body.subject,
    "catalog_nbr": req.body.catalog_nbr,
    "class_nbr": req.body.class_nbr,
  
};
schedule.push(schedule1)
res.send(schedule1)
console.log(schedule1)
});
app.use('/api/subjects', router)
app.listen(3000, () => console.log('listening to port 3000..'))

