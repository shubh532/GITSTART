let form=document.getElementById("form")

form.addEventListener("submit",addtoLocalStorage);

function addtoLocalStorage(e){
    e.preventDefault();
    let name=document.getElementById("name").value
    localStorage.setItem("Name",name)
    let email=document.getElementById("email").value
    localStorage.setItem("Email",email)
    let mob=document.getElementById("mob").value
    localStorage.setItem("Contact",mob)
    let date = document.getElementById("date").value
    localStorage.setItem("Date",date)

}

