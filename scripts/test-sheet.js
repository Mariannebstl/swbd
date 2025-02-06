class TestSheet extends ActorSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            template: "systems/swbd/templates/sheets/test-sheet.html",
            classes: ["swbd", "sheet", "test"],
            width: 400,
            height: 200,
        });
    }

    async getData() {
        const data = await super.getData();
        data.system = foundry.utils.deepClone(this.actor.system);
        return data;
    }

    activateListeners(html) {
        super.activateListeners(html);

        // Gérer les changements de la checkbox
        html.find("input[type='checkbox']").on("change", async (event) => {
            const target = event.target;
            const name = target.name;
            const value = target.checked;

            console.log(`Test Checkbox changée : ${name}, Nouvel état : ${value}`);

            await this.actor.update({ [name]: value });
        });
    }
}

// Exporter la fiche pour que Foundry puisse l'importer
export { TestSheet };
