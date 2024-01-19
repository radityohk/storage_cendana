const bjadiModel = require(`../models/index`).bjadi;
const Op = require(`sequelize`).Op;

exports.getAllBjadi = async (request, response) => {
    bjadiModel.findAll()
    .then(result => {
        response.json({
            data: result
        })
    })
    .catch(error => {
        response.json({
            message: error.message
        })
    })
}

exports.createBjadi = async (request, response) => {
    let data = {
        nm_bjadi: request.body.nm_bjadi,
        jml_bjadi: request.body.jml_bjadi
    }
    bjadiModel.create(data)
    .then(result => {
        response.json ({
            message: "Data berhasil ditambahkan",
            data: result
        })
    })
    .catch(error => {
        response.json({
            message: error.message
        })
    })
}

