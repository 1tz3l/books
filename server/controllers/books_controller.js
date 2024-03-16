const models = require('../../database/models');

const addBook = async (req, res) => {
    try {
        const { body } = req;
        
        const addBook = await models.books.create({
        id: body.id,
        authorID: body.authorID,
        publicationYearID: body.publicationYearID,
        title: body.title,
        description: body.description,
        numberOfPages: body.numberOfPages,
        ISBN: body.ISBN,
        language: body.language,
        publicationDate: body.publicationDate
    });

    return res.status(201).send({
        message: 'Libro agregado',
        addBook: addBook,
    });
    } catch (error) {
        return res.status(500).send({
            message: 'Lo sentimos, ha ocurrido un error interno en el servidor'
        });
    }
};

const updateBook = async (req, res) => {
    try {
        const { body } = req;
        const booksID = Number(req.params.booksID);
        const book = await models.books.findByPk(booksID);
        if (book) {
            await book.update({
                id: body.id,
                authorID: body.authorID,
                publicationYearID: body.publicationYearID,
                title: body.title,
                description: body.description,
                numberOfPages: body.numberOfPages,
                ISBN: body.ISBN,
                language: body.language,
                publicationDate: body.publicationDate,
            });
            return res.status(200).send({
                message: 'Libro actualizado',
            });
        } else {
            return res.status(404).send({
                message: 'Libro no encontrado',
            });
        }
    } catch (error) {
        return res.status(500).send({
            message: 'Lo sentimos, ha ocurrido un error interno en el servidor'
        });
    }
};

const deleteBook = async (req, res) => {
    try {
        const booksID = Number(req.params.booksID);
        const book = await models.books.findByPk(booksID);
        if (book) {
            await book.destroy();
            return res.status(200).send({
                message: 'Libro eliminado',
            });
        } else {
            return res.status(404).send({
                message: 'Libro no encontrado',
            });
        }
    } catch (error) {
        return res.status(500).send({
            message: 'Lo sentimos, ha ocurrido un error interno en el servidor'
        });
    }
}

module.exports = {
    addBook,
    updateBook,
    deleteBook
}