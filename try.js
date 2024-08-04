document.getElementById("contentx").style.display="none";
document.body.style.backgroundColor="black";
setTimeout(() => {
    document.getElementById("contentx").style.display="block";
    document.body.style.backgroundColor="white";
    document.getElementById("loader").style.display="none";
}, 4000);