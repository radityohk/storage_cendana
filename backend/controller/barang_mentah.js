const bmentahModel = require(`../models/index`).bmentah;
const Op = require(`sequelize`).Op;

exports.getAllBmentah = async (request, response) => {
    bmentahModel.findAll()
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

exports.createBmentah = async (request, response) => {
    let data = {
        nm_bmentah: request.body.nm_bmentah,
        jml_bmentah: request.body.jml_bmentah
    }
    bmentahModel.create(data)
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

