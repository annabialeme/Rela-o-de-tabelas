const wizardModel = require("../models/wizardModel");

const getAllWizards = async (req, res) => {
    try {
        const wizards = await wizardModel.getAllWizards();
        res.json(wizards);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar bruxos." });
    }
};

const getWizard = async (req, res) => {
    try {
        const wizard = await wizardModel.getWizard(req.params.id);
        if (!wizard) {
            return res.status(404).json({ message: "Bruxo não encontrado." });
        }
        res.json(wizard);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar bruxo." });
    }
};


const createWizard = async (req, res) => {
    try {
        const { name, house_id } = req.body;
        const photo = req.file ? req.file.filename : null;
        if(!name || house_id) {
            return res.tatus(400).json({message: "Nome e casa são obrigatórios."})
        }
        const newWizard = await wizardModel.createWizard(name, house_id, photo);
        res.status(201).json(newWizard);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar bruxo." });
    }
};

const updateWizard = async (req, res) => {
    try {
        const { name, house_id } = req.body;
        const updatedWizard = await wizardModel.updateWizard(req.params.id, name, house_id);
        if (!updatedWizard) {
            return res.status(404).json({ message: "Bruxo não encontrado." });
        }
        res.json(updatedWizard);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar bruxo." });
    }
};

const deleteWizard = async (req, res) => {
    try {
        const message = await wizardModel.deleteWizard(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar bruxo." });
    }
};

module.exports = { getAllWizards, getWizard, createWizard, updateWizard, deleteWizard };