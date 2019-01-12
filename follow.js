function newfollow() {
    const username = document.getElementById('follow_username').value;

    var url = 'http://127.0.0.1:5000/user/follow?username=' + username;

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + Token
      };

    fetch(url, {
         headers,
         method: 'PUT',
    })
    .then(res => res.json())
    .then(function(data) {
        if (data.message == 'success') {
            alert('Follow ' + username + ' succeed!');
        } else {
            alert('Follow failed: ' + data.message);
        }
    });

}