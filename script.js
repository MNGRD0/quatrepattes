function maFonction() {
    let luna=document.getElementById('photoPrincipale1');
    luna.setAttribute('src', 'Images/luna.png');
    document.getElementById("h5-1").innerHTML="Luna";
    document.getElementById("p3").innerHTML="Trouvée dans la rue avec une patte cassé, Luna a été soignée et a retrouvé sa joie de vivre. Elle coule maintenant des jours<br>heureux dans sa nouvelle famille.";
     document.getElementById("pAnnee").innerHTML="Janvier 2024";
}

function maFonction2() {
    let oscar=document.getElementById('photoPrincipale1');
    oscar.setAttribute('src', 'Images/oscar.png');
    document.getElementById("h5-1").innerHTML="Oscar";
    document.getElementById("p3").innerHTML="Abandonné dans une forêt, Oscar était terrifié par les humains. Après des mois de patience et d’amour,<br>il est devenu un chat confiant et affectueux.";
    document.getElementById("pAnnee").innerHTML="Mars 2024";

}

function maFonction3() {
    let max=document.getElementById('photoPrincipale1');
    max.setAttribute('src', 'Images/max.png');
    document.getElementById("h5-1").innerHTML="Max";
    document.getElementById("p3").innerHTML="Sauvé d'un laboratoire, Max n'avait jamais connu l'amour. Aujourd'hui, il profite de sa liberté<br>et fait le bonheur de sa famille d'accueil.";
    document.getElementById("pAnnee").innerHTML="Février 2024";
}

//Quiz :

function quiz1(){
    const reponseFausse1=document.getElementById("reponseFausse1");
    const boutonVrai1=document.getElementById("boutonVrai1");
    const boutonFaux1=document.getElementById("boutonFaux1");


    if(reponseFausse1.hidden){
        reponseFausse1.hidden = false;
        boutonVrai1.style.display = "none";
        boutonFaux1.style.display = "none";
    }
}

function quizVrai(){
    const reponseVraie1=document.getElementById("reponseVraie1");
    const boutonVrai1=document.getElementById("boutonVrai1");
    const boutonFaux1=document.getElementById("boutonFaux1");


    if(reponseVraie1.hidden){
        reponseVraie1.hidden = false;
        boutonVrai1.style.display = "none";
        boutonFaux1.style.display = "none";
    }
}

function quiz2(){
    const reponseFausse2=document.getElementById("reponseFausse2");
    const boutonVrai2=document.getElementById("boutonVrai2");
    const boutonFaux2=document.getElementById("boutonFaux2");


    if(reponseFausse2.hidden){
        reponseFausse2.hidden = false;
        boutonVrai2.style.display = "none";
        boutonFaux2.style.display = "none";
    }
}

function quizVrai2(){
    const reponseVraie2=document.getElementById("reponseVraie2");
    const boutonVrai2=document.getElementById("boutonVrai2");
    const boutonFaux2=document.getElementById("boutonFaux2");


    if(reponseVraie2.hidden){
        reponseVraie2.hidden = false;
        boutonVrai2.style.display = "none";
        boutonFaux2.style.display = "none";
    }
}

function quiz3(){
    const reponseFausse3=document.getElementById("reponseFausse3");
    const boutonVrai3=document.getElementById("boutonVrai3");
    const boutonFaux3=document.getElementById("boutonFaux3");


    if(reponseFausse3.hidden){
        reponseFausse3.hidden = false;
        boutonVrai3.style.display = "none";
        boutonFaux3.style.display = "none";
    }
}

function quizVrai3(){
    const reponseVraie3=document.getElementById("reponseVraie3");
    const boutonVrai3=document.getElementById("boutonVrai3");
    const boutonFaux3=document.getElementById("boutonFaux3");


    if(reponseVraie3.hidden){
        reponseVraie3.hidden = false;
        boutonVrai3.style.display = "none";
        boutonFaux3.style.display = "none";
    }
}

//Section 2 :

let choixPrix = 0;
let choix = "par mois";

function choisirPrix(prix, id){
    choixPrix = prix; //Prends la valeur HTML 10, 20 ou 50.
    changementDuBouton(); //Bouton rouge
    
    // Supprimer la classe active pour que celui qui sera selectionner seulement soit .active
    document.querySelectorAll('.box1, .box2, .box3').forEach(button => { //forEach(button { parcourir chaque bouton.
        button.classList.remove('active');
    });

    // La classe .active au bouton cliqué ex : (id) = id bouton10e
    document.getElementById(id).classList.add('active');
}

function choisirPar(prix, id){
    choix = prix;
    changementDuBouton();
    
    document.querySelectorAll('.boutonAnnee').forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');
}

function changementDuBouton(){
    document.getElementById("bouton").textContent=" Faire un don de" + choixPrix + "€/" + choix;

}