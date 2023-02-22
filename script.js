const menu=()=>{
    let div=document.getElementById("navbar");
    if(div.classList.contains("aftermenu")=== true){
        console.log("am")
        div.classList.remove("aftermenu")
    }
    else{
        div.classList.add("aftermenu")
    }
}