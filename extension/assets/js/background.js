/*
 * Author: Wolf Scholle (Obstc0rp)
 * 
 */
 
 var openLastDownload = 'open-last-download';
 var openDownloadDir = 'open-download-dir';

/**
 * Add a listener to chrome commands.
 */
chrome.commands.onCommand.addListener(function(command) {

	//open last download
	if(command == openLastDownload){
		chrome.downloads.search({}, function(results){	//search for all DownloadItems	
			
			if(results[results.length-1].id)
				chrome.downloads.open(results[results.length-1].id);	//open the last DownloadItem
		});
	} else if(command == openDownloadDir) {		//open default download directory
		chrome.downloads.showDefaultFolder();
	}
});