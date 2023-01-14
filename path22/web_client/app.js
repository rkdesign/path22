import _ from 'underscore';
import Backbone from 'backbone';

import '@girder/fontello/dist/css/animation.css';
import '@girder/fontello/dist/css/fontello.css';

import GirderApp from '@girder/core/views/App';
import eventStream from '@girder/core/utilities/EventStream';
import { getCurrentUser } from '@girder/core/auth';
import { splitRoute } from '@girder/core/misc';

import layoutTemplate from './templates/layout/layout.pug';
import router from './router';
import bindRoutes from './routes';


var App = GirderApp.extend({
    initialize(settings) {
        this.settings = settings;
        return GirderApp.prototype.initialize.apply(this, arguments);
    },

    render() {
        this.$el.html(layoutTemplate());
        let plv = this.progressListView;        
        plv.setElement(this.$('#g-app-progress-container')).render();

        return this;
    },

    /**
     * On login we re-render the current body view; whereas on
     * logout, we redirect to the front page.
     */
    login() {
        var route = splitRoute(Backbone.history.fragment).base;
        Backbone.history.fragment = null;
        eventStream.close();

        if (getCurrentUser()) {
            eventStream.open();
            router.navigate(route, {trigger: true});
        } else {
            router.navigate('/', {trigger: true});
        }
    },

    navigateTo(view) {
        if (this.bodyView instanceof view) {
            return this;
        }
        return GirderApp.prototype.navigateTo.apply(this, arguments);
    },

    bindRoutes: bindRoutes
});

export default App;
