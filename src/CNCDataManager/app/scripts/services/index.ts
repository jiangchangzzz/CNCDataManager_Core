﻿import * as angular from 'angular';
import HttpProxy from './HttpProxy';
import User from './User';

export default function registerServices(app: angular.IModule): void {
    app.service('HttpProxy', HttpProxy);
    app.service('User', User);
}