var result = document.querySelector(".result");
var form = document.forms.form,
    input = form.elements.name;
function createUser(arr, elem){
    let users = JSON.parse(arr);
    let HTMLUsers = users.map(user =>{
        return `<div>name= ${user.name}; <div>`
    });
    elem.innerHTML += HTMLUsers.join("");
}

window.onload = function () {
    result.innerHTML = "Загрузка";
    var xhr = new XMLHttpRequest(name);
    xhr.onreadystatechange = function () {
        if(xhr.readyState !== 4) {
            console.log(xhr.readyState);
            return;
        }
        if(xhr.status !== 200){
        console.log("error");
        } else {
            createUser(xhr.responseText, result);         
        }
    }
    xhr.open("GET", "http://localhost/countries", true);
    xhr.send();
    return false;
}




/*function name(num, pow =2){
    return Math.pow(num, pow);
};    
function name2(num, pow){
    pow = pow === undefined ? 2 :pow;
    return Math.pow(num, pow);
};
function name3(num,pow){
    pow = pow || 2;
    var res= 1;
    for(var i =0; i<pow; i++){
    res*=num;
    }
return res;
};
console.log(name(2,0));
console.log(name2(2,0));
console.log(name3(2,3));
(function(){
var user = {
    name:"Вася",
    sName: "Петя"
}
console.log(user);
})();

(function(){
    var user = {
        name:"Вася",
        sName: "Петя"
    }
    console.log(user);
    })();    
    
console.log(user);

var user = {
    name:"Стас",
    sName: "Стасов"
}

var nam4 = () => user;
console.log(nam4());

var name5 = num => Math.pow(num, 2);
console.log(name5(2));

var user = {
    name: "Name",
    getNameF: function () {
        return this.name;
    },
    getUserS: function () {
        return this;
    },
    getUserS: ()=> this,
    getNameS: ()=> (this.name),
}

console.log(user.getNameF());
console.log(user.getNameS());
var box = {
    name: "cnfc",
    user: function(){
        return {
            name: "dfyz",
            getNameF: function(){
                console.log(this.name); //dfyz
            },
            getNameS: ()=>{
                console.log(this.name); //cnfc
        }
    }
}
}
box.user().getNameF();
box.user().getNameS();

//функция передавать из одного объекта в другой
function getName(){
    return this.name
}

var user  = {
    name: "cnfc",
    age: 13,
    get: getName,
}
var getName2 = getName.bind(user);

var admin   = {
    name: "cnfc",
    age: 13,
    getUser: getName2,
}
console.log()

//пример с магазином? поиск вверух использовать индексфокс//байнд не нужен
function getName2(){
    return this.name
}*/