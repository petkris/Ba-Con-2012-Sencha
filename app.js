//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>

Ext.application({

	name: 'BaCon',
	
    requires: [
        'Ext.device.Notification',
        'BaCon.Config',
        'BaCon.proxy.BaCon'
    ],

    models: [
        'Booking',
        'Session',
        'Scenario',
        'User',
        'Available'
    ],

    stores: [
        'Bookings',
        'Sessions',
        'Users',
        'Availables'
    ],

    views: [
        'Main',
        'booking.Card',
        'booking.List',
        'booking.Booking',
        'booking.BookingInfo',
        'booking.Login',
        'session.Card',
        'session.List',
        'session.MenuInfo',
        'session.Scenario',
        'session.ScenarioInfo',
        'available.Card',
        'available.List',
        'available.Available',
        'available.AvailableInfo',
        'SessionDayPicker',
        'PigSled',
        'Location',
        'About',
        'Help',
        'DeviceInfo'
    ],

    controllers: [
        'Bookings',
        'Sessions',
        'Availables',
        'PigSled'
	],

	glossOnIcon: true,
    icon: {
        57: 'resources/icons/Icon-57x57.png',
        114: 'resources/icons/Icon-57x57@2x.png',
        72: 'resources/icons/Icon-72x72.png',
        144: 'resources/icons/Icon-72x72@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    viewport: {
        autoMaximize: true
    },
    
    launch: function() {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Indl&aelig;ser...'
		});
        
        Ext.create('BaCon.store.Sessions').load({
            callback: function(records, operation, success) {
                Ext.Viewport.setMasked(false);
                if (success) {
                    Ext.Viewport.add({ xtype: 'mainPanel' });
                } else {
                    Ext.Msg.alert('Load Failed', operation.getError());
                }
            },
            scope: this
        });
    }
});
