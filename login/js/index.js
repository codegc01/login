let id = '1qOfQhKQZ9oeDcgXMNnR3TNlPmg1Z6zS9p6hxgjIvcp4'
let st = 'users';
//let r = 'A1:B1';
let url = 'https://docs.google.com/spreadsheets/d/' + id + '/gviz/tq?sheet' + st + '&Range';
let user, pass;
fetch(url)
    .then(res => res.text())
    .then(res => {
        let data = JSON.parse(res.substr(47).slice(0, -2));
        console.log(data.table);
        let len = data.table.rows.length;
        let username,password;
        for (var a = 1; a < len; a++) {
            for (var b = 0; b < 2; b++) {
                if (b == 0) {
                    username = data.table.rows[a].c[b].v;
                    // console.log(data.table.rows[a].c[b].v);
                }
                else {
                    password = data.table.rows[a].c[b].v
                }
            }
        }
        user = username;
        pass = password;
    })


function login(){
    let inuser = document.getElementById("user").value;
    let inpass = document.getElementById("password").value;
    console.log(inuser);
    console.log(inpass);
    if(inuser === user && inpass === pass)
    {
        alert("currect");
    }
    else
    {
        alert("Try again");
    }
}