document.addEventListener("DOMContentLoaded", ()=>{
    const bar = document.querySelector(".ri-layout-right-line");
    const cancel = document.querySelector(".ri-close-circle-line");
    const sidebar = document.querySelector(".side-bar");
    const overlay = document.querySelector(".overlay");
    bar.addEventListener("click", ()=>{
        sidebar.style.display= "block";

        ///////
        overlay.style.display="block";

            cancel.style.display ="block";
    })

    cancel.addEventListener("click", ()=>{
        const sidebar = document.querySelector(".side-bar");
        sidebar.style.display= "none";

        ///////
        const overlay = document.querySelector(".overlay");
        overlay.style.display="none";

        cancel.style.display = "none";
    })
})