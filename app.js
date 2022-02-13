

const form = document.getElementById('student_form');
const validation_box = document.getElementById('validation_box')
const table_body = document.getElementById('tbody');


form.addEventListener('submit', function(e){

    e.preventDefault();

    let sname = document.querySelector('input[placeholder="Student Name"]');
    let roll = document.querySelector('input[placeholder="Student Roll"]');
    let sclass = document.querySelector('input[placeholder="Student Class"]');
    let photo = document.querySelector('input[placeholder="Student Photo"]');
    let gender = document.querySelector('input[name="gender"]:checked');

    let bn = document.querySelector('input[placeholder="Bangla"]');
    let en = document.querySelector('input[placeholder="English"]');
    let math = document.querySelector('input[placeholder="Math"]');
    let sc = document.querySelector('input[placeholder="Science"]');
    let ss = document.querySelector('input[placeholder="Social Science"]');
    let rl = document.querySelector('input[placeholder="Religion"]');

    if( sname.value =='' ){
        validation_box.innerHTML = '<p class="text-danger fw-bold">Fill This Form</p>';
    }else{
        validation_box.innerHTML = '<p class="text-success fw-bold">Submited</p>';
    }

    let result_array  = [];

    if( dataGet('student_result') ){
        result_array = dataGet('student_result');
    }

    result_array.push({
        name : sname.value,
        roll : roll.value,
        class : sclass.value,
        gender : gender.value,
        photo : photo.value,

        bangla : bn.value,
        english : en.value,
        math    : sc.value,
        science : en.value,
        social : en.value,
        religion : en.value,
    });

    dataSent('student_result',result_array);

    studentResult();

});

    studentResult();

function studentResult(){

    let all_data =  dataGet('student_result');

    let output_data;
    all_data.map( ( data, index ) =>{
        output_data +=`
            <tr>
                <td>${index + 1}</td>
                <td>${data.name}</td>
                <td>${data.roll}</td>
                <td>${data.class}</td>
                <td>${data.gender}</td>
                <td>4.00</td>
                <td>A</td>
                <td><img style="width:40px; height:40px; object-fit:cover;" src="${data.photo}" alt="photo"></td>
                <td>
                    <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#result_page" >View </button>
                    <button onclick = removeData(${index}); class="btn btn-danger btn-sm" >Delete</button>
                </td>
            </tr>
        `;
    })

    table_body.innerHTML = output_data;
};



/**
 * Remove Date Functon .. 
 * @param {RemoveDate} id 
 */

function removeData(id){

    let data_arr =  dataGet('student_result');
    data_arr.splice( id, 1);

    dataSent('student_result', data_arr);
    studentResult();
}
