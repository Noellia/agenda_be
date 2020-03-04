const {DepartmentController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(DepartmentController.fetch)
        .post(DepartmentController.create)
        .put(DepartmentController.save);

    return router;
};
