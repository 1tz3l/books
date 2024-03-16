const models = require('../../database/models');

const addAuthor = async (req, res) => {
    try {
        const { body } = req;
        
        const newAuthor = await models.authors.create({
        id: body.id,
        firstName: body.firstName,
        lastName: body.lastName,
        biography: body.biography,
    });

    return res.status(201).send({
        message: 'Autor creado',
        newAuthor: newAuthor,
    });

    } catch (error) {
        return res.status(500).send({
            message: 'Lo sentimos, ha ocurrido un error interno en el servidor'
        });
    }
};

const updateAuthor = async (req, res) => {
    try {
        const { body } = req;
        const authorsID = Number(req.params.authorsID);
        const author = await models.authors.findByPk(authorsID);
        if (author) {
            await author.update({
                id: body.id,
                firstName: body.firstName,
                lastName: body.lastName,
                biography: body.biography,
            });
            return res.status(200).send({
                message: 'Autor actualizado',
            });
        } else {
            return res.status(404).send({
                message: 'Autor no encontrado',
            });
        }
    } catch (error) {
        return res.status(500).send({
            message: 'Lo sentimos, ha ocurrido un error interno en el servidor'
        });
    }
};

const deleteAuthor = async (req, res) => {
    try {
        const authorsID = Number(req.params.authorsID);
        const author = await models.authors.findByPk(authorsID);
        if (author) {
            await author.destroy();
            return res.status(200).send({
                message: 'Autor eliminado',
            });
        } else {
            return res.status(404).send({
                message: 'Autor no encontrado',
            });
        }
    } catch (error) {
        return res.status(500).send({
            message: 'Lo sentimos, ha ocurrido un error interno en el servidor'
        });
    }
}

module.exports = {
    addAuthor,
    updateAuthor,
    deleteAuthor
}