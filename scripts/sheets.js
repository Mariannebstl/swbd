class SWBDCharacterSheet extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      template: "systems/swbd/templates/sheets/character-sheet.html",
      classes: ["swbd", "sheet", "character"],
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

    // Sauvegarde automatique des changements sur la fiche
    html.find("input, select, textarea").change(async (event) => {
      const target = event.target;
      const name = target.name;
      let value;

      if (target.type === "number") {
        value = parseInt(target.value);
      } else {
        value = target.value;
      }

      await this.actor.update({ [`system.${name}`]: value });
    });
  }
}

Actors.registerSheet("swbd-system", SWBDCharacterSheet, { makeDefault: true });
