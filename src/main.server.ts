import 'zone.js/node'; // ✅ server zones

import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig as serverConfig } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(App, serverConfig);
export default bootstrap;
