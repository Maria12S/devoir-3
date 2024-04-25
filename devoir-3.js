
document.addEventListener('DOMContentLoaded', function() {
    // Fonction valider et ajouter un commentaire
    function validerEtAjouterCommentaire(event) {
        //empeche la page de se recharger 
        event.preventDefault(); 

      
        let prenom = document.getElementById('prenom').value.trim();
        let nom = document.getElementById('nom').value.trim();
        let message = document.getElementById('message').value.trim();

        // Verifier si tous les champs sont bien remplis
        if (prenom === '' || nom === '' || message === '') {
            document.getElementById('error-message').style.display = "block";
            return;
        } // nouveau de commentaire
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

        // Ajouter le nouveau  commentaire dans la liste 
        let listeCommentaires = document.getElementById('comment-list');
        listeCommentaires.appendChild(nouveauCommentaire);

        // Effacer le contenu après soumission
        document.getElementById('espace').reset();
    }

    document.getElementById('espace').addEventListener('submit', validerEtAjouterCommentaire);
});
         
