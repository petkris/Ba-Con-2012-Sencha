Ext.define('BaCon.view.session.List', {
	extend: 'Ext.dataview.List',
	requires: 'Ext.SegmentedButton',
	xtype: 'sessions',

	config: {

		title: 'Program',
		disableSelection: true,
		
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
					'<div style="background: url(resources/images/d20.png) top left no-repeat;"><div style="padding-left: 30px;">{scenario.name}</div></div>',
				'<tpl case="menu">',
					'<div style="background: url(resources/images/knife_fork.png) top left no-repeat;"><div style="padding-left: 30px;">{description}</div></div>',
				'<tpl case="other" default>',
					'<div style="background: url(resources/images/info_plain.png) top left no-repeat;"><div style="padding-left: 30px;">{description}</div></div>',
			'</tpl>'
		)
	}
});
