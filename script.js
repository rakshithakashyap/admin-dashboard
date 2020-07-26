$(document).ready(function() {
    // SideNav Button Initialization
    $(".button-collapse").sideNav2();
    // SideNav Scrollbar Initialization
    var sideNavScrollbar = document.querySelector('.custom-scrollbar');
    var ps = new PerfectScrollbar(sideNavScrollbar);
    });

    const mynavbar = document.querySelector(".n-nav");
    a = mynavbar.querySelectorAll("a");
    
    a.forEach(function(element){
        element.addEventListener("click",function(){
            for(let i=0;i<a.length; i++){
                a[i].classList.remove("active");
            }
            this.classList.add("active")
            document.querySelector(".n-nav").classList.toggle("show");
        })
    })
