

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
router.get('/sub', (req,res)=>{
    res.send(schedule)
});

app.get('/api/posts/:year/:month', (req,res)=>{
    res.send(req.params)
    
    });
  
    /////////////////TASK 1////////////////////////////////////

router.get('/', (req,res) =>{
  //  const subject  = schedule.find(c => c.subject == parseInt(schedule.subject) )
        //(res.send(schedule[0].subject));
      //  res.setHeader('Content-Type', 'text/html');
      console.log('sending request')
     // res.setHeader('Content-Type', 'application/json')
     // res.setHeader('Content-Type', 'index/html');
    
     //res.flush()
     //res.write('<h1>Subject Name: ' + schedule[0].subject + '</h1>')
      var i = 0,
        max = schedule.length
        for ( i=0 ;i < max; i++) {
           // console.log(i)
          // res.write('<h1>Subject Name: ' + schedule[0].subject + '</h1>')
            res.write('Subject Name: ' + schedule[i].subject + "  ")
            res.write('className: ' + schedule[i].className + "  ")
           // res.end('Hello World');
            //console.log(schedule[i].subject)
            //res.send(schedule[i].subject)
           //res.write(sub)
           if (i == max-1){
            res.end()
           }
         
        }
        
});

/////////////////// TASK 6///////////////////////////////////////

router.get('/alyzeh/:name', (req,res) =>{
  // /name with catalog_nbr
  //have to and the results
  const sub= req.params.name //replace name with catalognbr
  for( var i= 0 ; i<schedule.length; i++){
const sub = schedule[i].name;
console.log(schedule[i].name)
  }
  const subject1  = schedule.find(p => p.name === (sub))
 // console.log(schedule[0].catalog_nbr)
 console.log(sub)
//  console.log(schedule[0].course_info[0].ssr_component)
// console.log(subject2)
 console.log(subject1)
// if(!subject1) res.status(404).send('Subject not found')
//res.send(subject1)
if(subject1){
res.write(JSON.stringify(subject1.catalog_nbr))
res.write(JSON.stringify(subject1.subject))
res.end()
}
else{
res.status(404).send('Schedule not found');
}
//const nbr= req.params.catalog_nbr;
//res.send('working on it')
});

/////////////////////////// TASK 3/////////////////////////////
router.get('/subject/:subject/course/:catalog_nbr/coursecomponent/:ssr_component', (req,res) =>{
  // /name with catalog_nbr
  //have to and the results
  const sub= req.params.subject; //replace name with catalognbr
  const sub1 = req.params.catalog_nbr;
  const sub2 = req.params.course_info;
  const subject1  = schedule.find(p => p.subject === (sub))
   const subject2  = schedule.find(p => p.catalog_nbr === (sub1))
   const subject4  = schedule.find(p => p.course_info.ssr_component === (sub2))
   const subject3  = schedule.find(p => p.catalog_nbr === parseInt(sub1))
 console.log(subject1)
 console.log(sub2)
 
// if(subject2 !=0 && subject1!=0){
//console.log('yup')

// }
// console.log(subject2)
// if(!subject1) res.status(404).send('Subject not found')
//res.send(subject1)
//if (subject3){
//res.send(subject3)/
//}
if(subject2 && subject1 && subject4){
  console.log('hello')
res.send(subject2)
}
if(subject1 == undefined){
res.status(404).send('Catalog not found');
}

if(subject2 == undefined){
  res.status(404).send('Catalog not found');
  }

if(subject4 == null){
  res.send(subject2)
}
//const nbr= req.params.catalog_nbr;
//res.send('working on it')
});


router.get('/schedulenames', (req,res) =>{
  //  const subject  = schedule.find(c => c.subject == parseInt(schedule.subject) )
        //(res.send(schedule[0].subject));
      //  res.setHeader('Content-Type', 'text/html');
      console.log('sending request')
     // res.setHeader('Content-Type', 'application/json')
     // res.setHeader('Content-Type', 'index/html');
     //const newsub = req.body
     //res.flush()
     //res.write('<h1>Subject Name: ' + schedule[0].subject + '</h1>')
      var i = 0,
      count = 0;
        max = schedule.length
        for ( i=0 ;i < max; i++) {
           // console.log(i)
          // res.write('<h1>Subject Name: ' + schedule[0].subject + '</h1>')
           
            if( schedule[i].name !=undefined)
            {
              res.write('Schedule Name: ' + schedule[i].name +' ' )
              res.write('Courses: ' + schedule[i].courses )
          //    res.write(newsub.catalog_nbr.length)
            }
            
            if(schedule[i].catalog_nbr1){
             count++;
             console.log(count)
            }
          if (i == max-1){
          res.end()
           }
         
        }
      //  res.send(count);
        
});

////////////////////// TASK 4///////////////////////////////////
router.put('/schedule1', (req,res) =>
{
const schedule1 ={
    "name": req.body.name,
    "courses" : 0
};
const newsub = req.body;
const sub = schedule.findIndex(p=> p.name === newsub.name)
if (sub>1){
    res.status(404).send('Schedule already exists, Please make another schedule')
}
else {
 res.send('Making New Schedule')
    schedule.push(schedule1);
}
res.send(schedule1)
console.log(schedule1)
});








///////////////////////// TASK ////////////////////////////
//item 5, save list of subject code and course code
router.put('/schedule3', (req,res) =>
{
   const newsub = req.body
   console.log("Subject: ", newsub)
   //newsub.name =  parseInt(req.params.name)

   const sub = schedule.findIndex(p=> p.name === newsub.name)
   console.log(newsub.name)
   console.log(sub)
   //replace the part with new one.
   //const sub = schedule.findIndex(p=> parseInt(p.name) === newsub.name);
   
   if(sub<1){
       //create new schedule with the provided id 
     console.log('Schedule not found')
     res.status(404).send('Schedule not Found')
     //schedule.push(req.body);

   }
   else{
       //replace schedule if existing is there with the name
       console.log('Creating/Modifying new schedule')
     //  res.status('Creating/Modifying new Schedule')
       schedule[sub] = req.body;
   }
   res.send(newsub);
  
});


router.post('/schedule10/:name', (req,res) =>
{
   //const newsub = req.body
   const newsub = req.params.name;
   console.log("Subject: ", newsub)
   //newsub.name =  parseInt(req.params.name)

   const sub = schedule.findIndex(p=> p.name === (req.params.name))
   console.log(sub)
   console.log(newsub)
   //replace the part with new one.
   //const sub = schedule.findIndex(p=> parseInt(p.name) === newsub.name);
   
   if(sub<1){
       //create new schedule with the provided id 
     console.log('Schedule not found')
     res.status(404).send('Schedule not Found')
     //schedule.push(req.body);

   }
   else{
       //replace schedule if existing is there with the name
       console.log('Creating/Modifying new schedule')
     //  res.status('Creating/Modifying new Schedule')
     //  schedule[sub] = req.body;
     schedule[sub].catalog_nbr = req.body.catalog_nbr;
     schedule[sub].subject = req.body.subject;
       schedule[sub].courses += parseInt(req.body.courses)
       console.log(req.body.courses)
      // console.log("HELLLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
   }
 //  res.send(newsub);
 res.send(req.body);
  
});



//////////////////////////TASK 5////////////////////////////////


router.put('/schedule4', (req,res) =>
{
   const newsub = req.body
   console.log("Subject: ", newsub)
   //newsub.name =  parseInt(req.params.name)

   const sub = schedule.findIndex(p=> p.name === newsub.name)
   console.log(newsub.name)
   console.log(sub)
   //replace the part with new one.
   //const sub = schedule.findIndex(p=> parseInt(p.name) === newsub.name);
   
   if(sub<1){
       //create new schedule with the provided id 
     console.log('Schedule not found')
     res.status(404).send('Schedule not Found')
     //schedule.push(req.body);

   }
   else{
       //add course code and subject code
       //enter in the following format "catalog_nbr","subject code" 
       console.log('Creating/Modifying new schedule')
       schedule[sub] = req.body;
   }
   res.send(newsub);
  
});
//////////////////////////TASK 5////////////////////////////////


router.post('/schedule90/:name', (req,res) =>
{
   const newsub = req.body
   const sub1 = req.params.name
   console.log("Subject: ", newsub)
   //newsub.name =  parseInt(req.params.name)
  // const nbr= req.params.name;
  // const sub = schedule.findIndex(p=> p.name ===newsub.name)
  const sub = schedule.findIndex(p=> p.name ===sub1)
   console.log(newsub.name)
   console.log(newsub.catalog_nbr.length)
   console.log(sub)
   //replace the part with new one.
   //const sub = schedule.findIndex(p=> parseInt(p.name) === newsub.name);
   
   if(sub<1){
       //create new schedule with the provided id 
     console.log('Schedule not found')
     res.status(404).send('Schedule not Found')
     //schedule.push(req.body);

   }
   else{
       //add course code and subject code
       //enter in the following format "catalog_nbr","subject code" 
       console.log('Creating/Modifying new schedule')
       //schedule[sub] = req.body;
       schedule[sub].catalog_nbr = req.body.catalog_nbr;
     schedule[sub].subject = req.body.subject;
       schedule[sub].courses += parseInt(req.body.courses)
       console.log(req.body.courses)
   }
   res.send(newsub);
  
});

////////////////////// TASK 2///////////////////////
router.get('/:subject', (req,res) =>{
    const sub = req.params.subject;
    console.log(sub) //replace name with catalognbr
    const subject1  = schedule.find(p => p.subject === sub)
    if(subject1 === undefined){
      res.status(404).send('Subject Doesnt Exist');
    }
    //console.log(subject1)
   // res.send(subject1.catalog_nbr)
 // res.write(JSON.stringify(subject1.catalog_nbr))
   // res.end()
    //console.log(sub)
    //console.log(subject1)
   max = schedule.length;
    for (var i=0; i<schedule.length;i++){ 
     // res.write('<h1>This is the response #: ' + i + '</h1>');
     // res.end()
     console.log(schedule[i].subject)
       if (sub === schedule[i].subject){
        res.write(JSON.stringify(schedule[i].catalog_nbr))
       //  console.log(max)
//res.write(schedule[i].catalog_nbr)
//console.log(JSON.stringify(schedule[i]))
//res.write('<h1>This is the response #: ' + i + '</h1>');
//res.json(schedule[i])
//res.write(schedule[i])
//console.log(schedule[i])
//console.log('hello!!!!!!!!!!!!!!!!!!!!')
}
    

      //res.status(404).send('Subject Doesnt Exist');
      if(!schedule[i]){
        res.status(404).send('Subject Doesnt Exist');
      }
    
  }
  if (i == max){
    //res.status(404).send('Subject Doesnt Exist');
  res.end()
  }
  
 //   const subject1  = schedule.find(p => p.subject === parseInt(sub))
     //const subject  = schedule.find(c => c.subject == parseInt(schedule.subject) )
    //(res.send(schedule[0].subject));
    //  res.setHeader('Content-Type', 'text/html');
       
       // res.setHeader('Content-Type', 'index/html');
       //if(subject1){
       // res.send(subject1)
        //}
        //else{
        //res.status(404).send('Catalog not found');
        //}
        
  });

  router.get('/:name', (req,res) =>{
    // /name with catalog_nbr
    const nbr= req.params.name; //replace name with catalognbr
    const subject1  = schedule.find(p => p.name === parseInt(nbr))
   // console.log(schedule[0].catalog_nbr)
 //   console.log("HELLLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
           console.log('subject1')
 // if(!subject1) res.status(404).send('Subject not found')
  //res.send(subject1)
if(subject1){
res.send(subject1.catalog_nbr)
}
else{
res.status(404).send('Catalog not found');
}
  //const nbr= req.params.catalog_nbr;
  //res.send('working on it')
  });

  router.post('/schedule', (req,res) =>
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


let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  res.header('Access-Control-Allow-Methods', "GET, POST, PUT, OPTIONS");
  next();
}
app.use(allowCrossDomain);


////////////////// TASK 7///////////////////////
//delete schedule name
router.delete('/coursedel/:name', (req,res) =>
{
    const sub = schedule.find(p=> p.name === (req.params.name))
    console.log(req.params.name)
    console.log(sub)
    if (!sub){
        console.log('didnt work')
        console.log(sub)
        res.status(404).send('schedule doesnt exist')
      //  res.send('schedule doesnt exist')
    }
    console.log(sub)
        const index = schedule.indexOf(sub)
        console.log('successfully deleted')
        schedule.splice(index,1);
        res.send('Deleted')
     //  res.end();
       // res.write(sub);
      //  res.send('works')
});

/////////////////////// TASK 9/////////////////////////

router.delete('/scheduledeleteall', (req,res) =>
{
  //console.log(schedule)
  //  const sub = schedule.find(p=> p.name === parseInt(req.params.name))
for (var i =0; i< schedule.length; i++){
if(schedule[i].name){
  schedule.splice(i,1)
  res.send('Deleted')
  break
}
}
for (var j =0; j<schedule.length; j++){
if (schedule[j].name == undefined)
//console.log('hello!!!!!!!!!!!!!!!!!!')
res.status(404).send('Deleted All')
}
});


router.get('/getschedule', (req,res) =>{
    //  const subject  = schedule.find(c => c.subject == parseInt(schedule.subject) )
          //(res.send(schedule[0].subject));
        //  res.setHeader('Content-Type', 'text/html');
        console.log('sending request')
       // res.setHeader('Content-Type', 'index/html');
  
        var i = 0,
          max = schedule.length
          for ( i=0 ;i < max; i++) {
             // console.log(i)
              res.write('<h1>Subject Name: ' + schedule[i].name + '</h1>')
              //console.log(schedule[i].subject)
              //res.send(schedule[i].subject)
             //res.write(sub)
           
          }
        
  });


  router.get('/sch/:nbr', (req,res) =>{
    const nbr= req.params.catalog_nbr; 
    const subject1  = schedule.find(p => p.catalog_nbr === parseInt(nbr))
   // const nam= req.params.catalog_nbr; 
    //const subject1  = schedule.find(p => p.catalog_nbr === parseInt(nam))
    console.log(nbr)
 // if(!subject1) res.status(404).send('Subject not found')
  //res.send(subject1)
if(subject1){
res.send(subject1)
}
else{
res.status(404).send('Catalog not found');
}
  //const nbr= req.params.catalog_nbr;
  //res.send('working on it')

  });



router.put('/:catalog_nbr', (req,res) =>
{
   const newsub = req.body
   console.log("Subject: ", newsub)
   newsub.catalog_nbr =  parseInt(req.params.catalog_nbr)
   //replace the part with new one.
   const sub = schedule.findIndex(p=> p.catalog_nbr === newsub.catalog_nbr);
   
   if(sub<1){
       //create new schedule with the provided id 
     console.log('Creating new schdule')
     schedule.push(req.body);

   }
   else{
       //replace schedule if existing is there with the given id
       console.log('Modifying new schedule')
       schedule[sub] = req.body;
   }
   res.send(newsub)
});



router.post('/:catalog_nbr', (req,res) =>
{
   const newsub = req.body
   console.log("Subject: ", newsub)
   
   //replace the part with new one.
   const sub = schedule.findIndex(p=> p.catalog_nbr === newsub.catalog_nbr);
   
   if(sub<1){
     res.status(404).send('subject code not Found')
     console.log('not working')
   }
   else{
       //replace schedule if existing is there with the given id
       console.log('Modifying new schedule')
       schedule[sub].class_nbr +=  parseInt(req.body.class_nbr);
       res.send(req.body);
   }
});


app.use('/api/subjects', router)
app.listen(3000, () => console.log('listening to port 3000..'))

