const { response, request } = require('express');

const get_function = (req = request, res = response) => {
    const {page = 1, limit = 10} = req.query;
    res.status(200).json({
        msg: "api GET",
        page,
        limit
    });
}

const put_function = (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        msg: "api PUT",
        id,
    });
}

const post_function = (req, res) => {

    const {nombre, edad } = req.body;
    res.status(200).json({
        msg: "api POST",
        nombre,
        edad,
    });
}

const delete_function = (req, res) => {
    res.status(200).json({
        msg: "api DELETE",
    });
}

module.exports = {
    get_function,
    put_function,
    post_function,
    delete_function,
}