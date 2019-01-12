function newunfollow() {
    const username = document.getElementById('follow_username').value;

    var url = 'http://127.0.0.1:5000/user/unfollow?username=' + username;

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
            alert('Unfollow ' + username + ' succeed!');
        } else {
            alert('Unfollow failed: ' + data.message);
        }
    });

}