//lier la fiche de personnage à l'acteur
export class PNJfiche extends ActorSheet {
    //permet de vérifier dans le console si la classe est bien instanciée quand on ouvre un acteur de type pnj
    constructor(...args) {
      super(...args);
      console.log("✨ PNJfiche instanciée pour l'acteur", this.actor.name);
    }
  
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "systems/swbd/templates/sheets/PNJ-fiche.html",
        classes: ["swbd", "sheet", "PNJ"],
        width: 800,
        height: 800,
        tabs: [{ navSelector: ".tabs", contentSelector: ".sheet-body", initial: "attributes" }]
      });
    }
  
    async getData() {
      const data = await super.getData();
      data.system = foundry.utils.deepClone(this.actor.system);
      return data;
    }
  }
  