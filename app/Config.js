Ext.define('BaCon.Config', {
    singleton: true,
    
    title: 'Ba-Con 2012',

    dataUrl: 'http://www.ba-con.dk/components/com_signup/views/phone-backend/phone-services/services.php',

    sessionDays: [
        { text: 'Torsdag', date: new Date(2012,4,17) },
        { text: 'Fredag', date: new Date(2012,4,18) },
        { text: 'L&oslash;rdag', date: new Date(2012,4,19) },
        { text: 'S&oslash;ndag', date: new Date(2012,4,20) },
    ],
    
    locations: [
        { text: '' },
        { text: 'Greywall' },
        { text: 'Menzoberranzan' },
        { text: 'Ptolus' },
        { text: 'R\'lyeh' },
        { text: 'Sharn' },
        { text: 'Sigil' },
        { text: 'Tarsis' },
        { text: 'Waterdeep' }
    ],

    pigSledPhoneNumber: '',
    
    initialize: function() {
		Ext.Ajax.request({
			url: BaCon.Config.dataUrl + '?action=config',
			success: function(rs) {
				var response = JSON.parse(rs.responseText);
				BaCon.Config.pigSledPhoneNumber = response.pigSledPhoneNumber;
			},
			scope: this
		});
    }
    
});
