// premier essaie 
//let button= document.querySelector(button)
/*function validerCommentaire(event){
    //empecher le rechargement de la page
    event.preventDefault();
    //afficher le messqge d'erreur
let champ1 = document.getElementById('prenom').value.trim();
let champ2=document.getElementById('nom').value.trim();
let champ3=document.getElementById('message').value.trim();

if (champ1===''|| champ2 ===''||champ3===''){
    document.getElementById('error-message').style.display="block";
    return false;
} else
    {

     document.getElementById('error-message').style.display="none";
     return true;

}
}*/
//aujouter un commentaire
/*document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('espace').addEventListener('submit', function(event) {
        validerCommentaire(event);
 
//button.addEventListener('click',validerCommentaire)

let nouveauCommentaire = document.createElement('div');
        nouveauCommentaire.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');
        nouveauCommentaire.innerHTML = `
            <div class="flex-1 py-10 border-t border-gray-200">
                <h3 class="font-medium text-gray-900">${prenom} ${nom}</h3>
                <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>${message}</p>
                </div>
            </div>
        `;

 let listeCommentaires = document.getElementById('comment-list');
        listeCommentaires.appendChild(nouveauCommentaire);*/
document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour valider et ajouter un commentaire
    function validerEtAjouterCommentaire(event) {
        event.preventDefault(); // Empêcher le rechargement de la page

        // Capturer les données du formulaire
        let prenom = document.getElementById('prenom').value.trim();
        let nom = document.getElementById('nom').value.trim();
        let message = document.getElementById('message').value.trim();

        // Vérifier si tous les champs sont remplis
        if (prenom === '' || nom === '' || message === '') {
            document.getElementById('error-message').style.display = "block";
            return;
        } // Créer un nouvel élément de commentaire
        let nouveauCommentaire = document.createElement('div');
        nouveauCommentaire.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');
        nouveauCommentaire.innerHTML = `
            <div class="flex-1 py-10 border-t border-gray-200">
                <h3 class="font-medium text-gray-900">${prenom} ${nom}</h3>
                <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>${message}</p>
                </div>
            </div>
        `;

        // Ajouter le nouvel élément de commentaire à la liste des commentaires existante
        let listeCommentaires = document.getElementById('comment-list');
        listeCommentaires.appendChild(nouveauCommentaire);

        // Effacer le contenu du formulaire après soumission
        document.getElementById('espace').reset();
    }

    // Ajouter un écouteur d'événement à la soumission du formulaire
    document.getElementById('espace').addEventListener('submit', validerEtAjouterCommentaire);
});

        // Effacer le contenu du formulaire après soumission
        document.getElementById('espace').reset();
         
