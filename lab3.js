console.log("hello..");
const express = require('express');
const app = express();
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
var i = 0
//for (i=0; i<schedule.length;i++){
//console.log(schedule[i].subject)
//}
console.log(schedule.length)
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

app.get('/api/subject/', (req,res) =>{
  //  const subject  = schedule.find(c => c.subject == parseInt(schedule.subject) )
        //(res.send(schedule[0].subject));
      //  res.setHeader('Content-Type', 'text/html');
      console.log('sending request')
      var i = 0,
        max = schedule.length
        for ( i=0 ;i <= max; i++) {
            //console.log(schedule[i].subject)
       res.write(schedule[0].subject)
       res.write(schedule[1].subject)
         //res.write('<h1>This is the response #: ' + i + '</h1>');
          }

});


app.listen(3000, () => console.log('listening to port 3000..'))

