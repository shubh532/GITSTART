// let form=document.getElementById("form")

// form.addEventListener("submit",addtoLocalStorage);

// function addtoLocalStorage(e){
//     e.preventDefault();
//     let name=document.getElementById("name").value
//     localStorage.setItem("Name",name)
//     let email=document.getElementById("email").value
//     localStorage.setItem("Email",email)
//     let mob=document.getElementById("mob").value
//     localStorage.setItem("Contact",mob)
//     let date = document.getElementById("date").value
//     localStorage.setItem("Date",date)

// }

let user_Details = {
    Name:"Shubham_Mahulkar",
    Contact: 125364895,
    age:22
}
localStorage.setItem("user",JSON.stringify(user_Details))
