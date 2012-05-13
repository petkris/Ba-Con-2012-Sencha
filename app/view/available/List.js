Ext.define('BaCon.view.available.List', {
	extend: 'Ext.dataview.List',
	requires: 'Ext.SegmentedButton',
	xtype: 'availables',

	config: {

		title: 'Ledige pladser nu',
		disableSelection: true,
		
		itemTpl: Ext.create('Ext.XTemplate',
			'<div style="background: url(resources/images/d20.png) top left no-repeat;"><div style="padding-left: 30px;">{scenario_group}</div><div class="availables">{[this.availables(values.optimal_participants, values.participants)]}</div></div>',
			{
				availables: function(optimal_participants, participants) {
					var availables = optimal_participants - participants;
					if (availables > 1) {
						return availables + " ledige pladser";
					} else {
						return availables + " ledig plads";
					}
				}
			}
		)
	}
});
