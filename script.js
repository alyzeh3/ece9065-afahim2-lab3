/*fetch ('http://localhost:3000/api/subjects/sub')
.then(res => res.json())
.then(data =>{console.log(data)})
.catch(error => console.log('Error'))
*/

/////////////////////
fetch ('http://localhost:3000/api/subjects/')
.then(res => res.text())
.then(data =>{console.log(data)})
.catch(error => console.log(error))

fetch ('http://localhost:3000/api/subjects/ACTURSCI')
.then(res => res.text())
.then(data =>{console.log(data)})
.catch(error => console.log(error))
///////////////////////
fetch ('http://localhost:3000/api/subjects/schedule1',{
method: 'PUT',
headers:{
'Content-Type': 'application/json'
},
body : JSON.stringify({
name: 'AlyzehFahim'
})
}).then(res => {
    return res.text()
})
.then(data =>{console.log(data)})
.catch(error => console.log(error))

fetch ('http://localhost:3000/api/subjects/schedule3',{
method: 'PUT',
headers:{
'Content-Type': 'application/json'
},
body : JSON.stringify({
name: 'AlyzehFahim',
catalog_nbr: "54321",
subject : "ML3032121"

})
}).then(res => {
    return res.text()
})
.then(data =>{console.log(data)})
.catch(error => console.log(error))