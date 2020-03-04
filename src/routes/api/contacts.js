const {ContactController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(ContactController.fetch)
        .post(ContactController.create)
        .put(ContactController.save)
        .delete(ContactController.delete);

    return router;
};
