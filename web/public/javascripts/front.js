console.log("hola mundo...")

document.querySelector("input#lenguaje").value = navigator.userAgent;

document.querySelector("a#open-offcanvas").addEventListener("click", ()=>{
    document.querySelector("aside#offcanvas").classList.toggle("show");
});

const button_close = document.querySelector("#offcanvas button.close");
if (button_close){
    button_close.addEventListener("click", ()=>{
        document.querySelector("aside#offcanvas").classList.remove("show");
    });
}

document.querySelectorAll("#galeria .inner figure").forEach( (el)=>{
    el.addEventListener("clicl", (event)=>{
        const fig = el;
        console.log(fig);
        const image = fig.querySelector("img").src;
        document.querySelector("dialog#lightbox img").src = image;
        document.querySelector("dialog#lightbox").showModal();
    })
})


 const inputInfo = document.querySelector("#inputInfo");
if(inputInfo){
    inputInfo.value=window.userAgent;
}