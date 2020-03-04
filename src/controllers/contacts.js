const { Contact } = include('models');

class ContactController{
    static async save(req, res, next) {
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
}

module.exports = ContactController;
