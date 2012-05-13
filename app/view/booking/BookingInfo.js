Ext.define('BaCon.view.booking.BookingInfo', {
	extend: 'Ext.Component',
	xtype: 'bookingInfo',

	config: {
		styleHtmlContent: true,
		cls: 'htmlPage',
		
		tpl: Ext.create('Ext.XTemplate',
			'<table class="scenarioInfoTable">',
				'<tr><th>Dit hold</th><td>{description}</td></tr>',
				'<tr><th>Lokation</th><td>{scenario_location}</td></tr>',
			'</table>'
		)
	}
});
