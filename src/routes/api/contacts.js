const {ContactController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(ContactController.fetch)
        .post(ContactController.create)
        .put(ContactController.save);

    return router;
};
