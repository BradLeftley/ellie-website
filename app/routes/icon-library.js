import Route from '@ember/routing/route';

export default Route.extend({
    afterModel(){
        window.scrollTo(0,0);
    }
});
