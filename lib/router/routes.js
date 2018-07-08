FlowRouter.route(['/', '/index', '/home'], {
    action: function() {
        BlazeLayout.render('layout1', { top: "header", main: "postList" });
    }
});

FlowRouter.route('/e', {
    action: function() {
        BlazeLayout.render('exemplo', { navbar: "navbar" });
    }
});