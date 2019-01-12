var Token = '';

function login() {

    const url = 'http://127.0.0.1:5000/auth/login';

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
    
    const payload = {
        'username':document.getElementById('username').value,
        'password':document.getElementById('password').value
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
            alert('Welcome back, ' + document.getElementById('username').value);
            document.getElementById('logindiv').style.display = 'none';
            document.getElementById('basicdiv').style.display = 'none';
            document.getElementById('homepage').style.display = 'block';
            document.getElementById('profile_button').style.display = 'block';
            document.getElementById('post_button').style.display = 'block';
            document.getElementById('follow_button').style.display = 'block';
            getfeed();
            userinfo(-1);
        } else {
            alert('Login failed: ' + data.message);
        }
    });

}