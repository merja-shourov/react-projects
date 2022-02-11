

function dataSent( key, array){

    let json_array =  JSON.stringify(array);
    localStorage.setItem( key, json_array);
    return true;
};

function dataGet( key ){

    let json_array = localStorage.getItem(key);
    return json_array ? JSON.parse(json_array) : false;
};