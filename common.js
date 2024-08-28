
function loadLearningData(){
    let load_json = localStorage.getItem('learning_data');  
    g_learning_data = JSON.parse(load_json);                

    
    if( g_learning_data === null){
        g_learning_data = new Array();
    }
}


function saveLearningData(){
    let save_json = JSON.stringify(g_learning_data);    
    localStorage.setItem('learning_data', save_json);   
}


function getElmId(val){
    return document.getElementById(val);
}


function getElmClass(val){
    return document.getElementsByClassName(val);
}