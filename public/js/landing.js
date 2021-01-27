
const logo = document.getElementById('logo')

const myAccFunc = async()=>{
    try{
        let url = 'https://api.spaceXdata.com/v3/launches?limit=100';
           fetch(url)
           .then((datas)=>datas.json())
           .then((elements)=>{
               logo.innerHTML = "";
               elements.forEach((item, index,array) => {  
                   console.log(item);
                   logo.innerHTML += `<div class="boxcolor"><div class="imgcolor"><img src="${array[index] = item.links.mission_patch_small}" width="180px" height="180px" /></div>
                   <p class="csize">${array[index]=item.mission_name}<strong> #</strong>${array[index]=item.flight_number}</p>
                   <p class="csize"><strong><span style="color:black">Mission_Ids: </span></strong>${innerText=array[index]=item.mission_id}</p>
                   <p class="csize"><strong><span style="color:black">Launch Year: </span></strong>${array[index]=item.launch_year}</p>
                   <p class="csize"><strong><span style="color:black">Successful Launch: </span></strong>${array[index]=item.launch_success}</p>
                   <p class="csize"><strong><span style="color:black">Successful Landing: </span></strong>${array[index]=item.launch_success}</p></div>`            
               });           
           });
    }catch(err){
        alert(err);
    }
}
const successfulLaunch = async()=>{
    try{
        let url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true';
           fetch(url)
           .then((datas)=>datas.json())
           .then((elements)=>{
               logo.innerHTML = "";
               elements.forEach((item, index,array) => {   
                   logo.innerHTML += `<div class="boxcolor"><div class="imgcolor"><img src="${array[index] = item.links.mission_patch_small}" width="180px" height="180px" /></div>
                   <p class="csize">${array[index]=item.mission_name}<strong> #</strong>${array[index]=item.flight_number}</p>
                   <p class="csize"><strong><span style="color:black">Mission_Ids: </span></strong>${innerText=array[index]=item.mission_id}</p>
                   <p class="csize"><strong><span style="color:black">Launch Year: </span></strong>${array[index]=item.launch_year}</p>
                   <p class="csize"><strong><span style="color:black">Successful Launch: </span></strong>${array[index]=item.launch_success}</p>
                   <p class="csize"><strong><span style="color:black">Successful Landing: </span></strong>${array[index]=item.launch_success}</p></div>`             
               });
           });
    }catch(err){
        alert(err);
    }
}

const successfulLanding = async()=>{
       try{
        let url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true';
           fetch(url)
           .then((datas)=>datas.json())
           .then((elements)=>{
               logo.innerHTML = "";
               elements.forEach((item, index,array) => {   
                   logo.innerHTML += `<div class="boxcolor"><div class="imgcolor" ><img src="${array[index] = item.links.mission_patch_small}" width="180px" height="180px" /></div>
                   <p class="csize">${array[index]=item.mission_name}<strong> #</strong>${array[index]=item.flight_number}</p>
                   <p class="csize"><strong><span style="color:black">Mission_Ids: </span></strong>${innerText=array[index]=item.mission_id}</p>
                   <p class="csize"><strong><span style="color:black">Launch Year: </span></strong>${array[index]=item.launch_year}</p>
                   <p class="csize"><strong><span style="color:black">Successful Launch: </span></strong>${array[index]=item.launch_success}</p>
                   <p class="csize"><strong><span style="color:black">Successful Landing: </span></strong>${array[index]=item.launch_success}</p></div>`             
               });
            
           });
    }catch(err){
        alert(err);
    }
}

const unSuccessfulLaunch = async()=>{
    try{
     let url = 'https://api.spaceXdata.com/v3/launches?limit=100';
        fetch(url)
        .then((datas)=>datas.json())
        .then((elements)=>{
            logo.innerHTML = "";
            elements.forEach((item, index,array) => {  
                if((array[index]=item.launch_success) == false){
                logo.innerHTML += `<div class="boxcolor"><div class="imgcolor"><img src="${array[index] = item.links.mission_patch_small}" width="180px" height="180px" /></div>
                <p class="csize">${array[index]=item.mission_name}<strong> #</strong>${array[index]=item.flight_number}</p>
                   <p class="csize"><strong><span style="color:black">Mission_Ids: </span></strong>${innerText=array[index]=item.mission_id}</p>
                   <p class="csize"><strong><span style="color:black">Launch Year: </span></strong>${array[index]=item.launch_year}</p>
                   <p class="csize"><strong><span style="color:black">Successful Launch: </span></strong>${array[index]=item.launch_success}</p>
                   <p class="csize"><strong><span style="color:black">Successful Landing: </span></strong>${array[index]=item.launch_success}</p></div>` 
                }            
            });
         
        });
 }catch(err){
     alert(err);
 }
}


