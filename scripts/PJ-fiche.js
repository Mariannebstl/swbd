//lier la fiche de personnage à l'acteur
export class PJfiche extends ActorSheet {
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "systems/swbd/templates/sheets/PJ-fiche.html",
        classes: ["swbd", "sheet", "PJ"],
        width: 800,
        height: 800,
        tabs: [{ navSelector: ".tabs", contentSelector: ".sheet-body", initial: "attributes" }]
      });
    }
  
    async getData() {
      const data = await super.getData();
      data.system = foundry.utils.deepClone(this.actor.system); // Empêche l'effacement des données
      return data;
    }
  
   ///////////////////ECOUTEURS D'EVENEMENTS///////////////
  
   activateListeners(html) {
    super.activateListeners(html);

    // Sélection de l'image et mise à jour du token
    html.find("#character-image").click(async () => {
      const fp = new FilePicker({
        type: "image",
        current: this.actor.img,
        callback: async (path) => {
          html.find("#character-image").attr("src", path);
          await this.actor.update({ img: path });
        },
        top: 100,
        left: 100
      });
      fp.browse();
    });

    // Gestion des onglets
    html.find(".tab-button").click((event) => {
      const tab = event.currentTarget.dataset.tab;
      html.find(".tab-content").hide();
      html.find(`#${tab}`).show();

      // Ajouter la classe active
      html.find(".tab-button").removeClass("active");
      html.find(event.currentTarget).addClass("active");
  });


  // Afficher l'onglet "Compétences" par défaut
  html.find("#skills").show();
  html.find('.tab-button[data-tab="skills"]').addClass("active");

  


  }


////////////////////////////////////////////////////////////////
 
  
}
  
  