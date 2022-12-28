const { response, request } = require('express');

const get_function = (req = request, res = response) => {
    res.status(200).json({
        msg: "api GET",
    });
}

const put_function = (req, res) => {
    res.status(200).json({
        msg: "api PUT",
    });
}

const post_function = (req, res) => {
    res.status(200).json({
        msg: "api POST",
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