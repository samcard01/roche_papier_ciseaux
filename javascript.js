const jouer = document.querySelector('#boutonJouer');
const rejouer = document.querySelector('#boutonRejouer');
const fond = document.querySelector('.fondEcran');
const jeu = document.querySelector('.partieJeu');
const nomJoueur = document.querySelector('.caseNom');
const typeResultat = document.querySelector('.resultat');

/*Tableau CPU */
const tableau = [["✊","✋","✌️"], ["✊🏻", "✋🏻", "✌🏻"] , ["✊🏽","✋🏽","✌🏽"], ["✊🏿","✋🏿","✌🏿"]] 


/* Couleurs fonds */
const couleurJoueur = document.querySelector('.fondJoueur');
const couleurCPU = document.querySelector('.fondCPU');

   


jouer.addEventListener("click", () => {
 const tl = gsap.timeline ({
   defaults : {
    ease: "linear"
   }
 })
 
 .to(".boxForm", {ease: "back.in(1)", y:"100vh", duration:1})

 .to(".fondEcran",{
   opacity:0,
  })
 .to(".partieJeu", {
   opacity:1,
  }) 
  
  
  
  
    /*Enlever formulaire 
    document.querySelector('.boxForm').style.display = "none";
    document.querySelector('.formulaire').style.display = "none";
    fond.style.display = "none";*/
    jeu.style.display = "block";
    document.querySelector('.joueur').innerHTML= nomJoueur.value;



    /*Choix roche-papier-ciseaux du joueur*/
    const choixOption = document.getElementById("choix");
    const indexOptionsJeu = choixOption.selectedIndex;
    const radioPeau = document.querySelector('[name = peau]:checked').value
    const choixEmojiJoueur = (tableau[radioPeau][indexOptionsJeu]);
   /* console.log(choixEmojiJoueur);*/
    


   /*Choix roche-papier-ciseaux CPU */
    const longueurTableau = Math.round(Math.random() * tableau.length);
    const emojiCPU = Math.round(Math.random() * tableau[longueurTableau].length);
    const choixEmojiCPU = (tableau[longueurTableau][emojiCPU]);

    /*Affichage emojis joueurs */
    document.querySelector('.choixJoueur').innerHTML= choixEmojiJoueur;
    document.querySelector('.choixCPU').innerHTML= choixEmojiCPU;
console.log(indexOptionsJeu, emojiCPU);

    if (indexOptionsJeu==0){

        if(emojiCPU==0){
            typeResultat.innerHTML = "Egalite";
            couleurJoueur.style.backgroundColor= "#3F88C5";
            couleurCPU.style.backgroundColor= "#3F88C5";
        }
        
        else if(emojiCPU==1){
            typeResultat.innerHTML = "Defaite";
            couleurJoueur.style.backgroundColor= "#D16D82";
            couleurCPU.style.backgroundColor= "#7FD8BE";
        }  

        else{
            typeResultat.innerHTML = "Victoire";
            couleurJoueur.style.backgroundColor= "#7FD8BE";
            couleurCPU.style.backgroundColor= "#D16D82";
        }  


    }
    else if (indexOptionsJeu==1){

        if(emojiCPU==0){
            typeResultat.innerHTML = "Victoire";
            couleurJoueur.style.backgroundColor= "#7FD8BE";
            couleurCPU.style.backgroundColor= "#D16D82";
        }
        
        else if(emojiCPU==1){
            typeResultat.innerHTML = "Egalite";
            couleurJoueur.style.backgroundColor= "#3F88C5";
            couleurCPU.style.backgroundColor= "#3F88C5";
        }  

        else{
            typeResultat.innerHTML = "Defaite";
            couleurJoueur.style.backgroundColor= "#7FD8BE";
            couleurCPU.style.backgroundColor= "#D16D82";
        }  


    }
    else{

        if(emojiCPU==0){
            typeResultat.innerHTML = "Defaite";
            couleurJoueur.style.backgroundColor= "#D16D82";
            couleurCPU.style.backgroundColor= "#7FD8BE";
        }
        
        else if(emojiCPU==1){
            typeResultat.innerHTML = "Victoire";
            couleurJoueur.style.backgroundColor= "#7FD8BE";
            couleurCPU.style.backgroundColor= "#D16D82";
        }  

        else{
            typeResultat.innerHTML = "Egalite";
            couleurJoueur.style.backgroundColor= "#3F88C5";
            couleurCPU.style.backgroundColor= "#3F88C5";
        }  


    }

})



rejouer.addEventListener("click", () => {
    /*Remettre formulaire 
    document.querySelector('.boxForm').style.display = "block";
    document.querySelector('.formulaire').style.display = "block";
    fond.style.display = "block"; */
  const tl = gsap.timeline ({
   defaults : {
    ease: "linear"
   }
   
 })
 
 
 .to(".fondEcran",{
   onStart: () => document.querySelector(".fondEcran").classList.remove("none"), 
   opacity:1
  }) 
  .to(".boxForm", {ease: "back.out(1)", y:"0", duration:1})
  
  
  
  
    jeu.style.display = "none";
    

})
