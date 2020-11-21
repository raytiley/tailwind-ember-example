import Application from 'tailwind-example/app';
import config from 'tailwind-example/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
