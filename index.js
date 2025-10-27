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
    });


    ////////////
    // place for image to show
    const displayProductIClickOn = document.querySelector(".show-product-image");

    const ImageSectionAndCancel = displayProductIClickOn.querySelector(".image");

    const ImageSectionAndCancelImage = ImageSectionAndCancel.querySelector("#imageshow");

    const cancelAllSections = ImageSectionAndCancel.querySelector(".ri-close-circle-fill");

    ///////Get Produdct Images Start

    ///////
    // View Image Side
    const viewImage = document.querySelectorAll('.view-image');
    viewImage.forEach(span =>{
        span.addEventListener("click", ()=>{
            displayProductIClickOn.style.width = "100%";
            displayProductIClickOn.style.height = "100%";
            displayProductIClickOn.style.position = "fixed";
            displayProductIClickOn.style.top = "0";
            displayProductIClickOn.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
            displayProductIClickOn.style.display = "flex";
            displayProductIClickOn.style.flexDirection = "column";
            displayProductIClickOn.style.justifyContent = "center";
            displayProductIClickOn.style.alignItems = "center";
        });

        const productImageCatch = span.closest(".product-image");

        const productImageInside = productImageCatch.querySelector('.pop-up-image');
        const imageSrc = productImageInside.src;

        //Let it show In The Display Image
        const displayProductImagePopUp = document.querySelector(".image");
        const mainImage = displayProductImagePopUp.querySelector(".imageshow");

        mainImage.src=imageSrc;
    })


    /////////
    // Display No oImage
    cancelAllSections.addEventListener("click", ()=>{
        displayProductIClickOn.style.display = "none";
    })



})
