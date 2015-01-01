/*
 * Author: Wolf Scholle (Obstc0rp)
 * 
 */
 
/**
 * Add a listener to chrome commands.
 */
chrome.commands.onCommand.addListener(function(command) {
	chrome.downloads.search({}, function(results){	//search for all DownloadItems	
		chrome.downloads.open(results[results.length-1].id);	//open the last DownloadItem
	});
});