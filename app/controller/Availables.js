Ext.define('BaCon.controller.Availables', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	availables: 'availables',
        	availableContainer: 'availableContainer',
        	available: 'availableContainer available',
        	scenarioInfo: 'available scenarioInfo',
        	availableInfo: 'available availableInfo'
        },
        
        control: {
        	availables: {
        		itemtap: 'onAvailableTap'
        	}
        }
    },

    onAvailableTap: function(list, index, target, record) {
    	var sessionsStore = Ext.data.StoreManager.lookup('sessionsStore');
    	sessionsStore.clearFilter(true);
    	
    	if (!this.available) {
    		this.available = Ext.widget('available');
    	}
    	var session = sessionsStore.findRecord('scenario_id', record.get('scenario_id'));
		this.available.config.title = session.get('scenario')['name'];
		this.getAvailableInfo().setRecord(record);
		this.getScenarioInfo().setRecord(session);
		this.getAvailableContainer().push(this.available);
    }

});