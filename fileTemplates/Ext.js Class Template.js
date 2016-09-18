/**
 * ${NAME} comment here
 */
Ext.define('PCE.modules.$Namespace.${NAME}', {

    /* extend: 'FWK.layer.Base', 
       TODO: comment and remove if this doesn't extend anything */
    alias: '$Namespace.${NAME}',
    requires: [],
    
    config: {
        /**
         * Comment here
         * @cfg {Object} $Property_one
         * @accessor
         */
        $Property_one: undefined,
    },

    /* TODO: comment and remove if this doesn't need any statics */
    statics: {
        /**
         * Create a new PCE.modules.$Namespace.${NAME} object from its JSON representation.
         *
         * @param {Object} json The JSON string to recreate the ${NAME} from
         * @return {PCE.modules.$Namespace.${NAME}} A recreated ${NAME} object
         */
        fromJSON: function (json) {
            return Ext.create('PCE.modules.$Namespace.${NAME}', json);
        }
    },

    /**
     * ${NAME} constructor.
     *
     * @param {Object} config The config to set for this layer
     */
    constructor: function (config) {
        this.initConfig(config);
        /* TODO: comment and remove if this doesn't extend anything
        this.callParent(
            [Ext.applyIf(config || {},
                         {imageryType: FWK.map.ImageryType.HYBRID})]
        ); */
    },

    /**
     * Method example
     *
     * @return {Object} The JSON representation of this object
     * /
     toJSON: function () {
        return Ext.applyIf(this.callParent(arguments), {
            imageryType:           this.imageryType,
            key:                   this.key,
            bingSessionKeyEnabled: this.bingSessionKeyEnabled
        });
     }
     */
});
