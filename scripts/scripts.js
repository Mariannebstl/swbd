import { TestSheet } from "./test-sheet.js"; // Importer la fiche de test
import { SWBDCharacterSheet } from "./character-sheet.js"; // Importer la fiche personnage

// Enregistrer la fiche personnage comme défaut
Actors.registerSheet("swbd", SWBDCharacterSheet, {
    label: "Fiche Personnage",
    makeDefault: true
});

// Enregistrer la fiche test comme option alternative
Actors.registerSheet("swbd", TestSheet, {
    label: "Fiche de Test",
    makeDefault: false
});

console.log("✅ Fiches de personnage et test enregistrées avec succès !");
