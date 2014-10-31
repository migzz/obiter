
/* */
function l(message) { console.log(message) }

/* */
( function () {

    /* */
    var obiter = window.obiter = {
        app : {},
        ui : {},
        fn : {},
        path : {
            requireText : '../public/js/core/require-text-2.0.12/require-text!'
        }
    };
    var aurora = window.aurora = {};

    obiter['protocol'] = 'http://';
    obiter['port'] = ':8082';
    obiter['domain'] = '192.168.1.2';

    /* */
    aurora['protocol'] = 'http://';
    aurora['port'] = ':8092';
    aurora['domain'] = '192.168.1.2';
    aurora['server'] = '127.0.0.1';

    /* */
    if (window.location.hostname == '192.168.0.7' ) {
        obiter['domain'] = '192.168.0.7';
        aurora['domain'] = '192.168.0.7';
    }

    obiter['url'] = obiter.protocol + obiter.domain + obiter.port;
    aurora['url'] = aurora.protocol + aurora.domain + aurora.port;

    /**
     * Functions
     */

    // Random between two numbers. can have negative value but not decimal
    obiter.fn.random = function (min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    };

    /* */
    require.config({
        waitSeconds : 10,
        paths : {

            /* Core Dependencies */
            jquery     : '/public/js/core/jquery-2.1.0/jquery.min',
            underscore : '/public/js/core/underscore-1.6.0/underscore',
            backbone   : '/public/js/core/backbone-1.1.2/backbone',
            marionette : '/public/js/core/backbone-marionette-2.2.0/backbone.marionette',

            /* Plugins */
            modernizr    : '/public/js/plugin/modernizr-2.6.2/modernizr',
            nprogress    : '/public/js/plugin/nprogress-0.1.3/nprogress',
            validation   : '/public/js/plugin/jquery-validation-1.13.0/jquery.validate.min',
            fastclick    : '/public/js/plugin/fastclick-1.0.2/fastclick',
            hammer       : '/public/js/plugin/hammer-2.0.4/hammer',
            md5          : '/public/js/plugin/cryptojs-3.1.2/md5',

            /* Customs */
            hammer_time  : '/public/js/hammer-time',
            notification : '/public/js/notification',
            tooltip      : '/public/js/tooltip',
            data_storage : '/public/js/data-storage',
            dialog       : '/public/js/dialog',
            dropdown     : '/public/js/dropdown',

            /* */
            obiter : '/app/controller'

        },

        shim : {
            jquery : {
                exports : '$'
            },
            underscore  : {
                exports : '_'
            },
            backbone : {
                deps    : ['jquery', 'underscore']
            },
            marionette : {
                deps    : ['jquery', 'underscore', 'backbone', 'modernizr', 'nprogress', 'fastclick']
            },
            hammer : {
                deps    : ['jquery', 'modernizr']
            },
            md5 : {
                deps    : ['jquery']
            }

        }
    });

    /* */
    require([
        'jquery',
    ], function ($) {

        l('obiter');

        $('.app-loading-content').addClass('show');

        /* */
        require([
            'marionette'
        ], function (Marionette) {

            /* */
            var app = obiter.app = new Marionette.Application();

            /* */
            app.on( 'initialize:before', function () {

                /* */
                require([
                    'obiter'
                ],

                function (

                ) {

                });

            } );

            /* */
            app.start();

            /* */

        } );

    });

} )();