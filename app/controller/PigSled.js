Ext.define('BaCon.controller.PigSled', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	form: 'pigSled',
        	button: 'pigSled > button'
        },
        
        control: {
        	button: {
        		tap: 'onButtonTap'
        	}
        }
    },

    onButtonTap: function(button, event) {
    	var values = this.getForm().getValues();
    	var text = "[" + values.location + "] " + values.order;
    	this.getForm().reset();
    	Ext.device.Notification.show({
    		title: 'Svineslæden',
    		message: 'SMS oprettet.\nHusk at sende den.',
    	});
    	var smsURI = "sms:" + BaCon.Config.pigSledPhoneNumber + "?body=" + encodeURI(text);
    	window.location.href = smsURI;
    }

});