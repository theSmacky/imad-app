// var name = input.value;

var button = document.getElementById('submit');
button.onclick= function(){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState ===XMLHttpRequest.DONE){
            if (xhr.status ===200){
                let arr = xhr.responseText;
                arr = JSON.parse(arr);
                let list = document.getElementById('list');
                let str = '';
                for (let i = 0; i < arr.length; i++)
                    str += '<li>' + arr[i] + '</li>';

                list.innerHTML = str;
            }
        }
    }
    var input = document.getElementById('name');
    var name = input.value;
     xhr.open('GET', 'http://127.0.0.1/submit-name?name=' + name , true);
    xhr.send(null);
    }