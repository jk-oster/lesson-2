'use strict';

import {HeroTeaser} from "./components/HeroTeaser.js";
import {ProductCard} from "./components/ProductCard.js";
import {HomeComponent} from "./components/HomeComponent.js";
import {ContactComponent} from "./components/ContactComponent.js";
import {AboutComponent} from "./components/AboutComponent.js";
import {Router} from './kwm-js';

new Router(
    document.getElementById("kwmJS"),
    [
        { path: "/", name: "Home", component: new HomeComponent() },
        { path: "/about", name: "About", component: new AboutComponent() },
        { path: "/contact", name: "Contact", component: new ContactComponent() },
    ],
);

// Navigating / loading to the home page should display the Hero-Teaser & Product-Cards similar like in the example picture