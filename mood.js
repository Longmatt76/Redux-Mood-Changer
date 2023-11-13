let mood = document.getElementById("gifwrap");
let happy = document.getElementById("happy");
let sad = document.getElementById("sad");
let angry = document.getElementById("angry");
let confused = document.getElementById("confused");

happy.addEventListener('click', function (e){
    store.dispatch({type: "HAPPY"});
    const currentMood = store.getState().payload; 
    mood.innerHTML = currentMood;
})
sad.addEventListener('click', function (e){
    store.dispatch({type: "SAD"});
    const currentMood = store.getState().payload; 
    mood.innerHTML = currentMood;
})
angry.addEventListener('click', function (e){
    store.dispatch({type: "ANGRY"});
    const currentMood = store.getState().payload; 
    mood.innerHTML = currentMood;
    
})
confused.addEventListener('click', function (e){
    store.dispatch({type: "CONFUSED"});
    const currentMood = store.getState().payload; 
    mood.innerHTML = currentMood;
})