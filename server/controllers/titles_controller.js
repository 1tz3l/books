const addTitle = (req, res) => {
    const newTitle = {
        id: body.id,
        title: body.title
    }

    res.status(200);
}

const updateTitle = (req, res) => {
    const changeTitle = {
        id: body.id,
        title: body.title
    }
    res.status(200)
}

const deleteTitle = (req, res) => {
    const titlesID = Number(req.params.titlesID);
    res.status(200)
}

module.exports = {
    addTitle,
    updateTitle,
    deleteTitle
}