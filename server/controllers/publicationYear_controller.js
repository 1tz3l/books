const publicationYear = require('../../database/models/2-publicationyear');

const addYear = async (req, res) => {
    try {
        const { body } = req;
        
        const newYear = await models.publicationYear.create({
        id: body.id,
        year: body.year
    }); 

    return res.status(201).send({
        message: 'Año de publicación agregado',
        newYear: newYear,
    });

    } catch (error) {   
        return res.status(500).send({
            message: 'Lo sentimos, ha ocurrido un error interno en el servidor'
        });
    }
};

const updateYear = async (req, res) => {
    try {
        const { body } = req;
        const yearsID = Number(req.params.yearsID);
        const year = await models.publicationYear.findByPk(yearsID);
        if (year) {
            await year.update({
                id: body.id,
                year: body.year
            });
            return res.status(200).send({
                message: 'Año de publicación actualizado',
            });
        } else {
            return res.status(404).send({
                message: 'Año de publicación no encontrado',
            });
        }
    } catch (error) {
        return res.status(500).send({
            message: 'Lo sentimos, ha ocurrido un error interno en el servidor'
        });
    }
};

const deleteYear = async (req, res) => {
    try {
        const yearsID = Number(req.params.yearsID);
        const year = await models.publicationYear.findByPk(yearsID);
        if (year) {
            await year.destroy();
            return res.status(200).send({
                message: 'Año de publicación eliminado',
            });
        } else {
            return res.status(404).send({
                message: 'Año de publicación no encontrado',
            });
        }
    } catch (error) {
        return res.status(500).send({
            message: 'Lo sentimos, ha ocurrido un error interno en el servidor'
        });
    }
}


module.exports = {
    addYear,
    updateYear,
    deleteYear
}