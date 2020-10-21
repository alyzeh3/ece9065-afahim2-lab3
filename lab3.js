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

app.get('/api/subjects/', (req,res) =>{
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


app.listen(3000, () => console.log('listening to port 3000..'))

