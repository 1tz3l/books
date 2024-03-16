
const addAuthor = (req, res) => {
    const newAuthor = {
        id: body.id,
        lastName: body.lastName,
        firstName: body.firstName
    }

    res.status(200);
}

const updateAuthor = (req, res) => {
    const changeAuthor = {
        id: body.id,
        lastName: body.lastName,
        firstName: body.firstName
    }
}

const deleteAuthor = (req, res) => {
        const authorsID = Number(req.params.authorsID);
        res.status(200)
}

module.exports = {
    addAuthor,
    updateAuthor,
    deleteAuthor
}