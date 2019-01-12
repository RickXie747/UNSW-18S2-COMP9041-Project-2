function addcomment(id) {

    var comment = document.getElementById('input ' + id).value;

    if (comment.length < 1) {
        alert('No input');
        return;
    }

    const url = 'http://127.0.0.1:5000/post/comment?id=' + id;

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + Token
      };

    var d = new Date();

    userinfo(-1);

    const payload = {
        "author": document.getElementById('tmp').innerText,
        "published": d.getTime(),
        "comment": comment
    };
      
    fetch(url, {
         headers,
         method: 'PUT',
         body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(function(data) {
        if (data.message == 'success') {
            alert('Comment succeed!');
        } else {
            alert('Comment failed: ' + data.message);
        }
    });
}