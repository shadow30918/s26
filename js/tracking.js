(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-68454143-1', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');

$(document).ready(function() {

    page_id = $('body').attr('data-tracking-id');
    page_type = $('body').attr('data-tracking-type');
    //console.log('page_type:'+page_type,'page_id:'+page_id);
	ga('send', 'event', 'page', page_id, 'total-view');

    $("body").on("click", '*[data-tracking-type]', function(event) {
        tracking_id = $(this).attr('data-tracking-id');
        tracking_type = $(this).attr('data-tracking-type'); // button
        //console.log('type:'+tracking_type,'id:'+tracking_id);
        ga('send', 'event', page_id, tracking_type, tracking_id);
    });

    $("body").on("click", '*[data-tracking-share-type]', function(event) {
        tracking_share_type = $(this).attr('data-tracking-share-type'); // facebook / line
        //console.log('tracking_share_type:'+tracking_share_type);
        ga('send', 'event', page_id, 'share', tracking_share_type);
    });

    $("body").on("click", '*[data-group="btn_submit"]', function(event) {
        //console.log('type:form','id:submit');
		ga('send', 'event', page_id, 'form', 'submit');
    });

});
