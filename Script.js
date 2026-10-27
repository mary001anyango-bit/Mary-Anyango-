function viewProject(projectName)
{
    alert("Opening project:\n\n"+projectName);
}
function showProjects(){
    alert("more Barbarians projects are coming soon!");
}
const contactForm=document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event){
    event.preventDefault();
    const name=
    document.getElementById("name").value;
    
    const email=
    document.getElementById("email").value;
    
    const message=
    document.getElementById("message").value;
    
    if(name==""||email==""||message==""){
        alert("please fill in all the fields.");
        return;
    }
    alert("Thankyou," + name + "!\n\n" +
    "Your message has been received.");
    
    contactForm.reset();
});
const navLinks=
document.querySelectorAll(".nav-links a");
navLinks.forEach(function(link){
    link.addEventListener("click",function(){
        navlinks.forEach(function(item){
            item.classList.remove("active");
        });
        this.classList.add("active");
    });
});