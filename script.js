/*fetch ('http://localhost:3000/api/subjects/sub')
.then(res => res.json())
.then(data =>{console.log(data)})
.catch(error => console.log('Error'))
*/

/////////////////////TASK 1////////////
fetch ('http://localhost:3000/api/subjects/')
.then(res => res.text())
.then(data =>{console.log(data)})
.catch(error => console.log(error))



////TASK 3/////
fetch ('http://localhost:3000/api/subjects/subject/ACTURSCI/course/4824A/coursecomponent/lec')
.then(res => res.text())
.then(data =>{console.log(data)})
.catch(error => console.log(error))

/*
fetch ('http://localhost:3000/api/subjects/subject/ACTURSCI/course/1021B/coursecomponent/lec')
.then(res => res.text())
.then(data =>{console.log(data)})
.catch(error => console.log(error))
/////////////////////// task 4///////
*/

/////////////////////// task 4///////

fetch ('http://localhost:3000/api/subjects/schedule1',{
method: 'PUT',
headers:{
'Content-Type': 'application/json'
},
body : JSON.stringify({
name: 'Alyzeh Fahim'
})
}).then(res => {
    return res.text()
})
.then(data =>{console.log(data)})
.catch(error => console.log(error))


///// TASK 6//////
fetch ('http://localhost:3000/api/subjects/alyzeh/Alyzeh Fahim')
.then(res => res.text())
.then(data =>{console.log(data)})
.catch(error => console.log(error))

////// TASK 2//////
fetch ('http://localhost:3000/api/subjects/ACTURSCI')
.then(res => res.text())
.then(data =>{console.log(data)})
.catch(error => console.log(error))


///// task 5//////
fetch ('http://localhost:3000/api/subjects/schedule4',{
method: 'PUT',
headers:{
'Content-Type': 'application/json'
},
body : JSON.stringify({
name: 'Alyzeh Fahim',
catalog_nbr: ["54321"],
subject : ["ML3032121"],
courses: "1"

})
}).then(res => {
    return res.text()
})
.then(data =>{console.log(data)})
.catch(error => console.log(error))

fetch ('http://localhost:3000/api/subjects/schedulenames')
.then(res => res.text())
.then(data =>{console.log(data)})
.catch(error => console.log(error))