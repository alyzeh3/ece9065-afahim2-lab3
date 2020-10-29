/*fetch ('http://localhost:3000/api/subjects/sub')
.then(res => res.json())
.then(data =>{console.log(data)})
.catch(error => console.log('Error'))
*/
fetch ('http://localhost:3000/api/subjects/')
.then(res => res.json())
.then(data =>{console.log(data)})
.catch(error => console.log('Error'))