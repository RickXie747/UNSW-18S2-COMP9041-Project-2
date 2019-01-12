var user_name = 'b';

function getfeed() {

    const url = 'http://127.0.0.1:5000/user/feed?p=0&n=10';

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + Token
      };

    fetch(url, {
         headers,
         method: 'Get',
    })
    .then(res => res.json())
    .then(function(data) {
        for (x in data.posts) {
            var newdiv = document.createElement('div');
            newdiv.id = 'post ' + data.posts[x].id;
            var img = document.createElement('img');
            var br = document.createElement('br');
            var br2 = document.createElement('br');
            var tag1 = document.createElement('label');
            var tag2 = document.createElement('label');
            var tag3 = document.createElement('label');
            var likes = document.createElement('button')
            var like = document.createElement('button')
            var comments = document.createElement('p')
            var commentb = document.createElement('button')
            var input = document.createElement('input')
            var userlikes = document.createElement('p')
            tag1.innerText = data.posts[x].meta.author + ': ';
            tag1.style = 'font-weight:bold';
            tag2.innerText += data.posts[x].meta.description_text + '\n';
            var t = new Date(data.posts[x].meta.published * 1000);
            tag3.innerText += 'Posted on: ' + String(t).substring(0,24);
            if (data.posts[x].meta.likes.length > 0) {
                likes.innerText = 'show ' + data.posts[x].meta.likes.length + ' likes';
            } else {
                likes.innerText = 'show 0 likes';
            }
            like.innerText = 'like it!';
            like.id = 'like ' + data.posts[x].id;
            like.onclick = function() {
                likeclick(this.id.substring(4));
            };
            likes.id = 'likes ' + data.posts[x].id;
            userlikes.style.display = 'none';
            userlikes.innerText = 'Users who liked the post: \n';
            userlikes.id = 'userlikes ' + data.posts[x].id;
            likes.onclick = function() {
                if (document.getElementById('userlikes ' + this.id.substring(6)).style.display == 'block') {
                    document.getElementById('userlikes ' + this.id.substring(6)).style.display = 'none';
                } else {
                    document.getElementById('userlikes ' + this.id.substring(6)).style.display = 'block';
                };  
             };
            for (z in data.posts[x].meta.likes) {
                userinfo(data.posts[x].meta.likes[z]);
                userlikes.innerText += document.getElementById('tmp').innerText;
                userlikes.innerText += ' ';
            }
            input.type = 'text';
            input.placeholder = 'Write yours comments...';
            input.id = 'input ' + data.posts[x].id;
            commentb.innerText = 'comment';
            commentb.id = 'commentb ' + data.posts[x].id;
            commentb.type = 'button';
            commentb.onclick = function() {
                addcomment(this.id.substring(9));
            };
            img.src = 'data:image/png;base64,' + data.posts[x].src;
            img.style = 'max-width:100%;height:auto';
            img.alt = 'post';
            for (y in data.posts[x].comments) {
                var comment = document.createElement('p');
                comment.innerText += data.posts[x].comments[y].author; 
                comment.innerText += ': ';
                comment.innerText += data.posts[x].comments[y].comment;
                comment.innerText += '\n';
                var t = new Date(data.posts[x].comments[y].published * 1000);
                comment.innerText += 'Commented on: ' + String(t).substring(0,24);
                comments.appendChild(comment);
            }
            newdiv.appendChild(img);
            newdiv.appendChild(br);
            newdiv.appendChild(tag1);
            newdiv.appendChild(tag2);
            newdiv.appendChild(tag3);
            newdiv.appendChild(br2);
            newdiv.appendChild(like);
            newdiv.appendChild(likes);
            newdiv.appendChild(userlikes);
            newdiv.appendChild(comments);
            newdiv.appendChild(input);
            newdiv.appendChild(commentb);
            document.getElementById('homepage').appendChild(newdiv);
        }
    });
}