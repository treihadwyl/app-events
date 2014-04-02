/**
 * Eventing for the app
 * Copyright © 2014 Matt Styles <matt@veryfizzyjelly.com>
 * Licensed under the ISC license
 * ---
 *
 */

var EventEmitter = require( 'eventemitter3' ),
    extend = require( 'lodash-node/modern/objects/assign' );



module.exports = extend( new EventEmitter(), {

    /**
     * App Level
     */

    APP: {

        // Denoting a game tick
        TICK            : 'app:tick'
        
    }

});
