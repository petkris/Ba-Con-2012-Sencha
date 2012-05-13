Ext.define('BaCon.view.session.MenuInfo', {
	extend: 'Ext.Container',
	xtype: 'menuInfo',

	config: {

		styleHtmlContent: true,
		scrollable: 'vertical',
		cls: 'htmlPage',

		tpl: Ext.create('Ext.XTemplate',
			'<h3>{week_day} {time_of_day}</h3>',
			'<p>{menu}</p>'
		)
	}
});
