import express from 'express';

export abstract class RoutesConfig {
    app: express.Application;

    protected constructor(app: express.Application) {
        this.app = app;
        this.configureRoutes();
    }

    abstract configureRoutes(): express.Application;
}
