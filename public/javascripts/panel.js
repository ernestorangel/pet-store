window.addEventListener("load", ()=>{
    document.getElementById("profileEditButton").addEventListener("click", ()=>{
        document.getElementById("blur-page").style.display = "block";
        document.getElementById("edit-profile-modal").style.display = "block";
    });

    document.getElementById("close-edit-modal").addEventListener("click", ()=>{
        document.getElementById("blur-page").style.display = "none";
        document.getElementById("edit-profile-modal").style.display = "none";
    });

    document.getElementById("blur-page").addEventListener("click", ()=>{
        document.getElementById("blur-page").style.display = "none";
        document.getElementById("edit-profile-modal").style.display = "none";
    });

    
});