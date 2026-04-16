'use strict';

chrome.runtime.onInstalled.addListener(() => {
    console.log('Service Worker Installed');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Message received', request);
    // Handle your messages here
    sendResponse({status: 'received'});
});

// Other background processes can be added here.

