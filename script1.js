function validerFormulaire() {
    const nom= document.getElementById("nom").value;
    const mail= document.getElementById("mail").value;
    const message= document.getElementById("message").value;

    const erreurNom=document.getElementById("erreur-nom");
    const erreurMail=document.getElementById("erreur-mail");
    const erreurMessage=document.getElementById("erreur-message");

    erreurNom.innerHTML="";
    erreurMail.innerHTML="";
    erreurMessage.innerHTML="";

    let formulaireValide = true;

    if(nom === ""){
        erreurNom.innerHTML= "Le nom est obligatoire.";
        formulaireValide=false;
    }

    if(mail === ""){
        erreurMail.innerHTML= "L'adresse mail est obligatoire.";
        formulaireValide=false;
    }

    if(!mail.includes('@')){
        erreurMail.innerHTML= "L'adresse mail n'est pas valide.";
        formulaireValide=false;
    }

    if(message === ""){
        erreurMessage.innerHTML= "Vous n'avez pas saisi votre message.";
        formulaireValide=false;
    }

    if(formulaireValide){
        alert("Formulaire envoyé avec succès !");
    }

    return formulaireValide;

}
