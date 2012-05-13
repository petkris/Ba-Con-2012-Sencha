Ext.define('BaCon.view.session.ScenarioInfo', {
	extend: 'Ext.Component',
	xtype: 'scenarioInfo',

	config: {
		
		styleHtmlContent: true,
		cls: 'htmlPage',
		
		tpl: Ext.create('Ext.XTemplate',
			'<h3>{week_day} {time_of_day}</h3>',
			'<table class="scenarioInfoTable">',
				'<tr><th>Forfatter</th><td>{scenario.author}</td></tr>',
				'<tr><th>Genre</th><td>{scenario.genre}</td></tr>',
				'<tr><th>System</th><td>{scenario.system}</td></tr>',
				'<tr><th>Stil</th><td>{scenario.style}</td></tr>',
				'<tr><th>Varighed</th><td>{scenario.duration}</td></tr>',
				'<tr><th>Antal spillere</th><td>{scenario.optimal_participants}</td></tr>',
			'</table>',
			'<p>{scenario.description}</p>',
			'<p>{scenario.remarks}</p>'
		)
	}
});
