document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    //get speed value of song
    selectElement = document.querySelector('#select1');
    const speed = selectElement.value;
    //get style value of song
    selectElement = document.querySelector('#select2');
    const style = selectElement.value;
    //get familiarity value of song
    selectElement = document.querySelector('#select3');
    const familiarity = selectElement.value;

    //const rapperName = document.querySelector('input').value
    try{
        //const response = await fetch(`https://salsaplaylist-api.herokuapp.com/api/${rapperName}`)
        const response = await fetch(`https://salsaplaylist-api.herokuapp.com/api`)
        let data = await response.json()
        if(speed=="all"){
            data = Object.entries(data)
        }else {
            data = Object.entries(data).filter(([key, value]) => value.speed==speed)
        }
        console.log(data)
        if(style=="all"){
        }else {
            data = data.filter(entry => entry[1].style == style)
            console.log(data)
        }
        if(familiarity=="all"){
        }else {
            data = data.filter(entry => entry[1].familiarity == familiarity)
        }
        map = {0:'#one ', 1: '#two ', 2: '#three ', 3: '#four '}
        //console.log(data) Object.keys(data).length
        for(let i=0; i<4; i++){
            document.querySelector(map[i]+'h2').innerText = ''
        }
        for(let i=0; i<Object.keys(data).length; i++){
            document.querySelector(map[i]).href = data[i][1].url //data[Object.keys(data)[i]].url
            document.querySelector(map[i]+'h2').innerText = data[i][0]
        }
    }catch(error){
        console.log(error)
    }
}

document.querySelector('button').addEventListener('click', apiRequest)
