
//IMPORTATION DES TEMPLATES DE FICHES DE PERSONNAGES

import { PJfiche } from "./PJ-fiche.js";
import { PNJfiche } from "./PNJ-fiche.js";

Hooks.once("init", async function() {

     // Désenregistre les fiches d'Actors de base
    Actors.unregisterSheet("core", ActorSheet);
    
    // Enregistre la fiche pour les PJ, applicable uniquement aux acteurs de type "pj"
    Actors.registerSheet("swbd", PJfiche, { 
      types: ["PJ"],
      label: "Fiche PJ",
      makeDefault: true 
    });
    
    // Enregistre la fiche pour les PNJ, applicable uniquement aux acteurs de type "pnj"
    Actors.registerSheet("swbd", PNJfiche, { 
      types: ["PNJ"],
      label: "Fiche PNJ",
      makeDefault: true 
    });
});


////////////////////////////////////////////////////////////////