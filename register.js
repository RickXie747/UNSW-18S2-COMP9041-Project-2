var Token = '';

function register() {

    const url = 'http://127.0.0.1:5000/auth/signup';

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
    
    const payload = {
        'username':document.getElementById('r_username').value,
        'password':document.getElementById('r_password').value,
        'email':document.getElementById('email').value,
        'name':document.getElementById('name').value
    };
      
    fetch(url, {
         headers,
         method: 'POST',
         body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(function(data) {
        if (data.token) {
            Token = data.token;
            alert('Registration succeed, ' + document.getElementById('r_username').value) ;
            document.getElementById('regdiv').style.display = 'none';
            document.getElementById('basicdiv').style.display = 'block';
        } else {
            alert('Registration failed: ' + data.message);
        }
    });


}