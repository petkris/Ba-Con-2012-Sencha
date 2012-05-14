Ext.define('BaCon.controller.Bookings', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            bookings: 'bookings',
            bookingDayPicker: 'bookings segmentedbutton',
            bookingContainer: 'bookingContainer',
            menuInfo: 'bookingContainer menuInfo',
            booking: 'bookingContainer booking',
            scenarioInfo: 'booking scenarioInfo',
            bookingInfo: 'booking bookingInfo',
            loginForm: 'loginForm',
            loginButton: 'loginForm #loginButton',
            keyField: 'loginForm #keyField',
            logoutButton: '#logoutButton'
        },

        control: {
            bookingContainer: {
                push: 'onBookingContainerPush',
                pop: 'onBookingContainerPop'
            },

            bookings: {
                activate: 'onBookingsActivate',
                initialize: 'onBookingsInitialize',
                itemtap: 'onBookingTap'
            },

            bookingDayPicker: {
                toggle: 'onBookingDayChange'
            },

            loginButton: {
                tap: 'onLoginButtonTap'
            },

            keyField: {
                action: 'onLoginButtonTap',
            },

            logoutButton: {
            	initialize: 'onLogoutButtonInitialize',
                tap: 'onLogoutButtonTap'
            }
        }
    },

    onBookingsActivate: function() {
        var key = this.getUserKey();
        if(!key) {
            this.pushLoginForm();
        } else {
            this.loadBookingsStore();
        }
    },

    onLoginButtonTap: function() {
        var key = Ext.String.trim(this.getKeyField().getValue());
        if(key && key.length > 0) {
            this.getKeyField().reset();
            this.getUserName(key);
        }
    },

    getUserName: function(key) {
        Ext.Ajax.request({
            url: BaCon.Config.dataUrl,
            params: {
                action: 'user',
                key: key,
            },
            success: function(response) {
                var userName = eval(response.responseText);
                if(userName.length > 0) {
                    this.setUserKey(key);
                    this.popLoginForm();
                    Ext.device.Notification.show({
                        title: 'Velkommen til Ba-Con 2012',
                        message: userName[0].name + ' ' + userName[0].last_name
                    });
                } else {
                    Ext.device.Notification.show({
                        title: 'Login',
                        message: 'Ukendt nøgle. Prøv igen.'
                    });
                }
            },
            scope: this
        });
    },

    onLogoutButtonInitialize: function() {
    	var key = this.getUserKey();
    	if (!key) {
    		this.getLogoutButton().hide();
    	}
    },
    
    onLogoutButtonTap: function() {
        Ext.getStore('bookingsStore').removeAll();
        this.removeUserKey();
        this.pushLoginForm();
    },

    pushLoginForm: function() {
        if(!this.getLoginForm()) {
            Ext.widget('loginForm');
        }
        this.getBookingContainer().push(this.getLoginForm());
        this.getBookingContainer().getNavigationBar().getBackButton().setHidden(true);
    },

    popLoginForm: function() {
        this.getBookingContainer().pop();
        this.loadBookingsStore();
    },

    onBookingContainerPush: function() {
        this.getLogoutButton().hide();
    },

    onBookingContainerPop: function() {
        this.getLogoutButton().show();
    },

    onBookingsInitialize: function() {
        var button = this.getBookingDayPicker().getCurrentSessionDayButton();
        this.getBookingDayPicker().setPressedButtons(button);
        this.getBookingDayPicker().filterStoreByButton('bookingsStore', button);
    },

    onBookingTap: function(list, index, target, record) {
        var sessionsStore = Ext.data.StoreManager.lookup('sessionsStore');
        sessionsStore.clearFilter(true);

        if(record.get('type') == 'menu') {
            if(!this.menuInfo) {
                this.menuInfo = Ext.widget('menuInfo');
            }
            var session = sessionsStore.findRecord('menu_id', record.get('menu_id'));
            this.menuInfo.config.title = session.get('description').split(" ", 1);
            this.menuInfo.setRecord(session);
            this.getBookingContainer().push(this.menuInfo);
        } else if(record.get('type') == 'scenario') {
            if(!this.booking) {
                this.booking = Ext.widget('booking');
            }
            var session = sessionsStore.findRecord('scenario_id', record.get('scenario_id'));
            this.booking.config.title = session.get('scenario')['name'];
            this.getBookingInfo().setRecord(record);
            this.getScenarioInfo().setRecord(session);
            this.getBookingContainer().push(this.booking);
        }
    },

    onBookingDayChange: function(segmentedButton, button) {
        this.getBookingDayPicker().filterStoreByButton('bookingsStore', button);
    },

    loadBookingsStore: function() {
        var bookingsStore = Ext.getStore('bookingsStore');
        if(!bookingsStore.isLoading()) {
            bookingsStore.getProxy().setExtraParam('key', this.getUserKey());
            bookingsStore.load();
        }
    },

    getUserKey: function() {
        var usersStore = Ext.getStore('usersStore');
        var user = usersStore.getAt(0);
        if(user) {
            return user.get('key');
        } else {
            return null;
        }
    },

    setUserKey: function(key) {
        var usersStore = Ext.getStore('usersStore');
        var user = usersStore.getAt(0);
        if(!user) {
            user = Ext.create('BaCon.model.User');
            usersStore.add(user);
        }
        user.set('key', key);
        usersStore.sync();
    },

    removeUserKey: function() {
        var usersStore = Ext.getStore('usersStore');
        usersStore.removeAll();
        usersStore.sync();
    }

});
