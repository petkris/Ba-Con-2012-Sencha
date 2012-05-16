Ext.define('BaCon.view.booking.List', {
	extend: 'Ext.dataview.List',
	requires: 'Ext.SegmentedButton',
	xtype: 'bookings',

	config: {

		title: 'Bookings',
		disableSelection: true,
		plugins: 'pullRefresh',
		
		items: [
			{
				docked: 'top',
				xtype: 'toolbar',
				ui: 'gray',

				items: [
					{
						xtype: 'sessionDayPicker'
					}
				]
			}
		],

		itemTpl: Ext.create('Ext.XTemplate',
			'<tpl switch="type">',
				'<tpl case="scenario">',
					'<div style="background: url(resources/images/d20.png) top left no-repeat;"><div style="padding-left: 30px;">{description}</div></div>',
				'<tpl case="menu">',
					'<div style="background: url(resources/images/knife_fork.png) top left no-repeat;"><div style="padding-left: 30px;">{description}</div></div>',
			'</tpl>'
		)
	}
});
