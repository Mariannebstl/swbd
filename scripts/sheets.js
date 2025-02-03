//lier la feuille de personnage à l'acteur
class SWBDCharacterSheet extends ActorSheet {
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        template: "systems/swbd/templates/sheets/character-sheet.html",
        classes: ["swbd", "sheet", "character"],
        width: 800,
        height: 400,
        tabs: [{ navSelector: ".tabs", contentSelector: ".sheet-body", initial: "attributes" }]
      });
    }
  
    getData() {
      const data = super.getData();
      return data;
    }
  }
  
  Actors.registerSheet("swbd-system", SWBDCharacterSheet, { makeDefault: true });
  
  //permettre le changement d'image de l'acteur
  document.getElementById('character-image').addEventListener('click', function() {
    document.getElementById('character-image-input').click();
});