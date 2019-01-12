function userinfo(id) {

    var url = 'http://127.0.0.1:5000/user/';
    if (id >= 0) {
        url = 'http://127.0.0.1:5000/user/?id=' + id;
    }

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + Token
      };

    fetch(url, {
         headers,
         method: 'GET',
    })
    .then(res => res.json())
    .then(function(data) {
        document.getElementById('tmp').innerText = data.name;
        if (id < 0) {
            document.getElementById('profile_content').innerText += 'Username: ';
            document.getElementById('profile_content').innerText += data.username;
            document.getElementById('profile_content').innerText += '\n';
            document.getElementById('profile_content').innerText += 'Name: ';
            document.getElementById('profile_content').innerText += data.name;
            document.getElementById('profile_content').innerText += '\n';
            document.getElementById('profile_content').innerText += 'Email : ';
            document.getElementById('profile_content').innerText += data.email;
            document.getElementById('profile_content').innerText += '\n';
            document.getElementById('profile_content').innerText += 'Post numbers: ';
            document.getElementById('profile_content').innerText += data.posts.length;
            document.getElementById('profile_content').innerText += '\n';
        }
    });

}