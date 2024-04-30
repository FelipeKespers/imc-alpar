import { ImcsRepository } from "../repositories/imcs.repository.js";

export class ImcsController {
    constructor() {
        this.repository = new ImcsRepository();
    }

    getAllImcs = async (req, res) => {
        const allImcs = await this.repository.getImcs();
        return res.json(allImcs);
    }

    addImcs = async (req, res) => {
        const imc = req.body;
        const newImc = await this.repository.createImc(imc)

        return res.json(newImc);
    }

    deleteImcs = async (req, res) => {
        const id = Number(req.params.id);
        await this.repository.deleteImc(id)

        return res.json({ ok: "true" });
    }

    updateImc = async (req, res) => {
        const id = Number(req.params.id);
        const imc = req.body;
        const newImc = await this.repository.updateImc({ id, ...imc })

        return res.json(newImc);
    }
}