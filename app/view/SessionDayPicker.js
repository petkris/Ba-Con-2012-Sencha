Ext.define('BaCon.view.SessionDayPicker', {
	extend: 'Ext.SegmentedButton',
	xtype: 'sessionDayPicker',
	
	config: {
		width: '100%',
		allowDepress: false,
		defaults: { flex: 1 }
	},

	initialize: function() {
		this.callParent();

		var me = this;
		Ext.Array.each(BaCon.sessionDays, function(day) {
			me.add(day);
		});
	},
	
	filterStoreByButton: function(storeId, button) {
		var store = Ext.getStore(storeId);
		store.clearFilter(true);
		store.filterBy(function(entry) {
			return (entry.get('week_day') == button.config.week_day);
		});
	},
	
    getCurrentSessionDayButton: function() {
    	var now = Ext.Date.clearTime(new Date());
    	var currentIndex = 0;
    	Ext.Array.each(BaCon.sessionDays, function(day, index) {
    		var result = true;
    		if (day['date'] >= now) {
    			currentIndex = index;
    			result = false;
    		}
    		return result;
    	});
    	return this.getItems().items[currentIndex];
    },

    // Test function
    getCurrentSessionDayButtonTest: function() {
    	var minutes = new Date().getMinutes();
    	var currentIndex = 0;
    	var iterationMinutes = 15;
		Ext.Array.each(BaCon.sessionDays, function(day, index) {
    		var result = true;
    		if (iterationMinutes >= minutes) {
    			currentIndex = index;
    			result = false;
    		} else {
    			iterationMinutes += 15;
    		}
    		return result;
    	});
    	return this.getItems().items[currentIndex];
    } 
    
});