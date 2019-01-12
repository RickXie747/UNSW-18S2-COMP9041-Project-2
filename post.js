function newpost() {
    var src = '';

    const url = 'http://127.0.0.1:5000/post/';

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + Token
      };
    


    var file = document.getElementById('post_file').files[0];
    var reader = new FileReader();
    reader.onload = (e) => {
        const dataURL = e.target.result;
        const payload = {
            'description_text':document.getElementById('post_d').value,
            'src':dataURL.replace('data:image/png;base64,','')
        };
          
        fetch(url, {
             headers,
             method: 'POST',
             body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(function(data) {
            if (data.post_id) {
                alert('Post succeed!');
                document.getElementById('post').style.display = 'none';
            } else {
                alert('Post failed: ' + data.message);
            }
        });
    }
    reader.readAsDataURL(file);


}