function likeclick(id) {

    const url = 'http://127.0.0.1:5000/post/like?id=' + id;

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
            alert('Like successfully!');
        } else {
            alert('Comment failed: ' + data.message);
        }
    });

}