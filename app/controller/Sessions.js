Ext.define('BaCon.controller.Sessions', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	sessions: 'sessions',
        	sessionDayPicker: 'sessions segmentedbutton',
        	sessionContainer: 'sessionContainer',
        	menuInfo: 'sessionContainer menuInfo',
        	scenario: 'sessionContainer scenario',
        	scenarioInfo: 'scenario scenarioInfo'
        },
        
        control: {
        	sessionContainer: {
        		show: 'onSessionContainerShow'
        	},
        	sessions: {
        		itemtap: 'onSessionTap'
        	},
            sessionDayPicker: {
            	toggle: 'onSessionDayChange'
            }
        }
    },

    onSessionContainerShow: function() {
    	if (!Ext.getStore('sessionsStore').isFiltered()) {
        	var button = this.getSessionDayPicker().getCurrentSessionDayButton();
        	this.getSessionDayPicker().setPressedButtons(button);
        	this.getSessionDayPicker().filterStoreByButton('sessionsStore', button);
    	}
    },

    onSessionTap: function(list, index, target, record) {
    	if (record.get('type') == 'menu') {
        	if (!this.menuInfo) {
        		this.menuInfo = Ext.widget('menuInfo');
        	}
        	this.menuInfo.config.title = record.get('description').split(" ", 1);
        	this.menuInfo.setRecord(record);
    		this.getSessionContainer().push(this.menuInfo);
    	} else if (record.get('type') == 'scenario') {
        	if (!this.scenario) {
        		this.scenario = Ext.widget('scenario');
        	}
    		this.scenario.config.title = record.get('scenario')['name'];
    		this.getScenarioInfo().setRecord(record);
    		this.getSessionContainer().push(this.scenario);    		
    	}

    },

    onSessionDayChange: function(segmentedButton, button) {
    	this.getSessionDayPicker().filterStoreByButton('sessionsStore', button);
    }
    
});