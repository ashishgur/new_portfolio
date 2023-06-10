

window.addEventListener("scroll",function (){
    var header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY >0)
})


// // for sending mails 
// function sendmails(){
//     Email.send({
//         Host : "smtp.gmail.com.com",
//         Username : "ashishnew2112@gmail.com",
//         Password : "password",
//         To : 'them@website.com',
//         From : "you@isp.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }