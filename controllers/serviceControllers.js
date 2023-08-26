const Service = require('../models/serivice');
const User = require('../models/user');
const Company = require('../models/company');

const getService = async (req,res) => {
    try {
        const services = await Service.findAll({include: [User,Company]})
        console.log(services);
        res.status(200).json(services)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}


const createService = async (req,res) => {
    try {
        let id = req.params.id
        let {idCompany} = req.query
        let {service} = req.body
        
        let user = await User.findOne({where: {id:id}})
        let company = await Company.findOne({where: {id:idCompany}})

        console.log(Service.prototype);

        let newService = await Service.create(service)

        await user.addService(newService)
        await company.addService(newService)


        res.json({message: 'method post'})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createService,getService
}