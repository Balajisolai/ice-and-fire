
let displaydata=fetch('https://www.anapioficeandfire.com/api/books');
// console.log(res);
displaydata.then((data)=>{
    
return data.json();
}).then((data)=>{
   
    console.log(data);
for(var i in data)
{
        console.log(`Name:${data[i].name} ISBN:${data[i].isbn} Authors:${data[i].authors} numberOfPages:${data[i].numberOfPages}  Publisher:${data[i].publisher} Released date:${data[i].released}`)
        
    }
   
}).catch((error)=>console.log(error));



fetch('https://www.anapioficeandfire.com/api/books/1').then((data)=>{
   //console.log(data); 
return data.json();

}).then((completedata)=>{
  //console.log(completedata[2].name);
 // document.getElementById('root').innerHTML=completedata[2].name;
    let data1="";   
    completedata.map((values)=>{
    data1=`<div class="card">
    <h1 class="title">${values.name}</h1>
    <img src="https://www.anapioficeandfire.com/api/books/1" alt="img" class="images">
    <p>${values.name}</p>
    <p class="name">${values.name}</p>
    <p class=numberOfPages${values.numberOfPages}</p>

  </div> `
    });
document.getElementById("cards").innerText=data1;
}).catch((err)=>{
    console.log(err);
})





 




