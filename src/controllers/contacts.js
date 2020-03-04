const head = require('lodash/head');
const map = require('lodash/map');
const pick = require('lodash/pick');

const { Contact } = include('models');

class ContactController{
    static async create(req, res, next) {
        try {
            const result = await Contact.insertOne(req.body);
            res.send({
                success: true,
                result
            });
        } catch (err) {
            next(err);
        }
    }
    static async fetch(req, res, next){
        try{

            const contacts = await Contact.findAll();

            res.send(contacts);
        }catch(err){
            next(err);
        }
    }

    static async save(req, res, next) {
        try {
            const result = await Contact.updateOne({id: req.params.id}, req.body);
            res.send({
                success: true,
                result
            });
        } catch (err) {
            next(err);
        }
    }

    static async delete(req, res, next){
        try{
            const result = await Contact.deletedOne({id: req.params.id});
            res.send({
                success: true,
                result

            });

        } catch(err){
            next(err);
        }
    }
}

module.exports = ContactController;
