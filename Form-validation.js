
var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {
 // Каждый раз, когда пользователь вводит что-либо, мы проверяем,
  // является ли корректным поле электронной почты.
  if (email.validity.valid) {
    // В случае появления сообщения об ошибке, если поле
    // является корректным, мы удаляем сообщение об ошибке.
    error.innerHTML = ""; // Сбросить содержимое сообщения
    error.className = "error"; // Сбросить визуальное состояние сообщения
  }
}, false);
form.addEventListener("submit", function (event) {
  // Каждый раз, когда пользователь пытается отправить данные, мы проверяем
   // валидность поля электронной почты.
  if (!email.validity.valid) {
    
    // Если поле невалидно, отображается пользовательское
    // сообщение об ошибке.
    error.innerHTML = "I expect an e-mail, darling!";
    error.className = "error active";
    // И мы предотвращаем отправку формы путем отмены события
    event.preventDefault();
  }
}, false);

function validate(){
    //Считаем значения из полей name и email в переменные x и y
    var x=document.forms["form"]["name"].value;
    var y=document.forms["form"]["email"].value;
    //Если поле name пустое выведем сообщение и предотвратим отправку формы
    if (x.length==0){
       document.getElementById("namef").innerHTML="*данное поле обязательно для заполнения";
       return false;
    }
    //Если поле email пустое выведем сообщение и предотвратим отправку формы
    if (y.length==0){
       document.getElementById("emailf").innerHTML="*данное поле обязательно для заполнения";
       return false;
    }
    //Проверим содержит ли значение введенное в поле email символы @ и .
    at=y.indexOf("@");
    dot=y.indexOf(".");
    //Если поле не содержит эти символы знач email введен не верно
    if (at<1 || dot <1){
       document.getElementById("emailf").innerHTML="*email введен не верно";
       return false;
    }
 }


 
function validate1(){
  //Считаем значения из полей name и email в переменные x и y
  var x=document.forms["fform"]["nname"].value;
  var y=document.forms["fform"]["eemail"].value;
  //Если поле name пустое выведем сообщение и предотвратим отправку формы
  if (x.length==0){
     document.getElementById("nnamef").innerHTML="*данное поле обязательно для заполнения";
     return false;
  }
  //Если поле email пустое выведем сообщение и предотвратим отправку формы
  if (y.length==0){
     document.getElementById("eemailf").innerHTML="*данное поле обязательно для заполнения";
     return false;
  }
  //Проверим содержит ли значение введенное в поле email символы @ и .
  at=y.indexOf("@");
  dot=y.indexOf(".");
  //Если поле не содержит эти символы знач email введен не верно
  if (at<1 || dot <1){
     document.getElementById("eemailf").innerHTML="*email введен не верно";
     return false;
  }
}
