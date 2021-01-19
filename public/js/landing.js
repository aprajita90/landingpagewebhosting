// const myAccFunc1 = document.getElementById('myAccFunc1');

// const getInfo=async(event) => {
//     event.preventDefault();
//     let url=`https://api.spaceXdata.com/v3/launches?limit=100`
//     const response = await fetch(url)
//     const data = await response.json()
//     const arrData = [data]
//     console.log(arrData);
// }

// myAccFunc1.addEventListener('click', getInfo);
const launchYear = document.getElementById('launchYear')
const missionName = document.getElementById('missionName')
const MissionIds = document.getElementById('MissionIds')
const launchSuccess = document.getElementById('launchSuccess')
const launchLanding = document.getElementById('launchLanding')
const myAccFunc = async()=>{
    try{
        let url = 'https://api.spaceXdata.com/v3/launches?limit=100'
        let response = await fetch(url);
        let data = await response.json()
        let arrData = [data]
       console.log(arrData);
       missionName.innerText=arrData[0][0].mission_name
       MissionIds.innerText=arrData[0][0].mission_id;
       launchYear.innerText=arrData[0][0].launch_year;
       launchSuccess.innerText=arrData[0][0].launch_success;
       launchLanding.innerText=arrData[0][0].launch_landing;
    }catch(err){
        alert(err);
    }
}

const successfulLaunch = async()=>{
    try{
        let url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true'
        let response = await fetch(url);
        let data = await response.json()
        let arrData = [data]
        missionName.innerText=arrData[0][0].mission_name
        MissionIds.innerText=arrData[0][0].mission_id;
        launchYear.innerText=arrData[0][0].launch_year;
        launchSuccess.innerText=arrData[0][0].launch_success;
        launchLanding.innerText=arrData[0][0].launch_landing;
    }catch(err){
        alert(err);
    }
}

const successfulLanding = async()=>{
    try{
        let url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true'
        const response = await fetch(url);
        const data = await response.json()
        const arrData = [data]
       missionName.innerText=arrData[0][0].mission_name
       MissionIds.innerText=arrData[0][0].mission_id;
       launchYear.innerText=arrData[0][0].launch_year;
       launchSuccess.innerText=arrData[0][0].launch_success;
       launchLanding.innerText=arrData[0][0].launch_landing;
    }catch(err){
        alert(err);
    }
}
