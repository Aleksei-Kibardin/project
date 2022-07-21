class UserService {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }


    static authenticate_user(){
        let data = 'login: ' + this.username + 'password: ' + this.password;
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://examples.com/api/user/authenticate?username=');
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(data)
        let result = false;
        
        if(xhr.status == 200 && xhr.readyState == 4 ){
            result = true;
        }  else{
            result = xhr.response;
            console.log(xhr.status)
        }
        return result;
    }
}


const log = document.querySelector('#login'),
user = document.querySelector('#username'),
pass = document.querySelector('#password');

log.addEventListener(click, ()=>{
UserService.authenticate_user(user, pass);
if(res == true) document.location.href = '/home'; else alert(res.error);
});