/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
    evt.preventDefault();
    $('.err').text('')

    let name = $('#name').val();
    let year = $('#year').val();
    let email = $('#email').val();
    let color = $('#color').val();
    
    let json = {
        name,
        year,
        email,
        color
    }
    
    res = await axios.post('/api/get-lucky-num', json)
    console.log(res)
    handleResponse(res)
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(res) {
    if(res.data.error !== undefined) {
        // console.log(res)
        
        for(let err in res.data.error) {
            
            $(`#${err}`).text(res.data.error[err])
        }
    }else if (res.data.number !== undefined){
        data = res.data
        $('#lucky-results').html(`
            <p>Your lucky number is ${data.number.number} did you
            know that ${data.number.text}</p>
            <p>Your birth year ${data.year.number} fact ${data.year.text}</p>
        `)
    }
}


$("#lucky-form").on("submit", processForm);
