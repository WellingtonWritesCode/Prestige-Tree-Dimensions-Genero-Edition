addLayer("donate", {
	startData() { return {unlocked: true}},
	color: "#ff8888",
	symbol: "D",
	row: "side",
	position: -1,
	layerShown() { return true },
	tooltip: "Donate to original mod author",
	tabFormat: [
		"blank", "blank", "blank",
		["raw-html", "<h1><a href=https://afdian.net/@loader3229/plan target=_blank>Afdian.net Donation</a></h1>"],
	],
})