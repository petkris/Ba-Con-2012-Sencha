Ext.define('BaCon.view.available.AvailableInfo', {
	extend: 'Ext.Component',
	xtype: 'availableInfo',

	config: {
		
		styleHtmlContent: true,
		cls: 'htmlPage',
		
		tpl: Ext.create('Ext.XTemplate',
			'<h3>{[this.availables(values.optimal_participants, values.participants)]}</h3>',
			'<p>Henvend dig i kiosken, hvis du ønsker at tilmelde dig holdet.</p>',
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
