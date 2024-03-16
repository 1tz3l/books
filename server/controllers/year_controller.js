const addYear = (req, res) => {
    const newYear = {
        id: body.id,
        year: body.id
    }
    res.status(200)
}

const updateYear = (req, res) => {
    const changeYear = {
        id: body.id,
        year: body.year
    }
    res.status(200)
}

const deleteYear = (req, res) => {
    const yearID = Number(req.params.yearID);
    res.status(200)
}

module.exports = {
    addYear,
    updateYear,
    deleteYear
}