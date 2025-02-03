class SWBDCharacterSheet extends ActorSheet {
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        template: "systems/swbd/templates/sheets/character-sheet.html",
        classes: ["swbd", "sheet", "character"],
        width: 600,
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
  