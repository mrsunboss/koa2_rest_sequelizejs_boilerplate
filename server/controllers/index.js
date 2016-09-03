import Router from 'koa-router';
import UserController from './user';
export default class Routes {

    constructor(app) {
        this.app = app;
    }

    setupPublicRoute() {
        var app = this.app;

        var publicRoute = new Router()

        publicRoute.get('/user/', UserController.index);
        publicRoute.get('/user/:id', UserController.get);
        publicRoute.post('/user/', UserController.create);
        publicRoute.delete('/user/:id', UserController.delete);

        app.use(publicRoute.middleware())
    }
}
