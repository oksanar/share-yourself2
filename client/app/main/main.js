'use strict';

var resizeBlock = (function () {
    var def = angular.injector(['ng']).get('$q').defer();
    var self = this || {};

    var pr = {
        resize: function () {
           var all_heights =  [];
            self.el.find("section").each(function (e) {
                var curr = $(this);
                var curr_obj = {
                    name: curr.attr('id'),
                    obj: curr,
                    height: curr.height()
                };
                all_heights.push(curr_obj);

            });
            def.resolve(all_heights);
            return def.promise;
        },
        init: function (el) {
            self.el = el;
        }
    };
    return {
        run: function (el) {
            pr.init(el);
            pr.resize().then(function (el) {
                console.log(el);
            });
        }
    }
}());

(function ($, angular) {

    $(document).on('load ready',function () {
        var el = $("#main-page");
        resizeBlock.run(el);
    });

    $(window).on("resize", function () {
        var el = $("#main-page");
        resizeBlock.run(el);
    });


}(jQuery, angular));


angular.module('myprojApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            });
        //$(angular.extend() {
        //    $.fn.EveryWhat = function(arg1) {
        //        var arr = [];
        //        if($.isNumeric(arg1))
        //        {
        //            $.each(this, function(idx, item) {
        //                var newNum = idx + 1;
        //                if(newNum%arg1 == 0)
        //                    arr.push(item);
        //            });
        //        }
        //        return this.pushStack(arr, "EveryWhat", "");
        //    }
        //
        //});
        //id(intro-blocks) - w
        //(recent-works) - g
        //(services) - w
        //(feature) - g
        //(middle) - w
        //(content)- g
        //(partner) - w
        //(conatcat-info) - g
        //

    });

