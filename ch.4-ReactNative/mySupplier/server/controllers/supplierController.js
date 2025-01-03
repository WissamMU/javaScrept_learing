const { Sequelize } = require('sequelize');
const models = require('../models');


const Op = Sequelize.Op;

exports.index = async (req, res) => {
    let { q } = req.query;
    const searchQuery = q ? { name: { [Op.like]: `%${q.replace(' ', '')}%` } } : {};
    try {
        const suppliers = await models.User.findAll({
            where: { userType: 'Supplier', ...searchQuery },
            include: [{ model: models.Profile, as: "profile" }],
            attributes: { exclude: ['password'] }
        })

        res.status(200).json(suppliers)
    } catch (e) {
        res.status(500).json(e)
    }
}