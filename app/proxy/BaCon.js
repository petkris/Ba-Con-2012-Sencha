Ext.define('BaCon.proxy.BaCon', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.baconProxy',
    
    config: {
        url: BaCon.Config.dataUrl,
        noCache: false,
        enablePagingParams: false
    },
    
    getParams: function(operation) {
        var params = this.callParent(arguments),
            newParams = {};
        for (var p in params) {
            if (p == 'filter') {
                var filters = Ext.JSON.decode(params['filter']);
                for (var i in filters) {
                    newParams[filters[i].property] = filters[i].value;
                }
            } else {
                newParams[p] = params[p];
            }
        }
        return newParams;
    }
});
