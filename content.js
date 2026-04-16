// content.js

// Function to inject the download button below YouTube videos
function injectDownloadButton() {
    // Check if the video player is present
    const player = document.querySelector('.html5-video-player');
    if (!player) return;

    // Check if the button already exists
    if (document.getElementById('download-button')) return;

    // Create the download button
    const downloadButton = document.createElement('button');
    downloadButton.innerText = 'Download Video';
    downloadButton.id = 'download-button';
    downloadButton.style.marginTop = '10px';
    downloadButton.style.backgroundColor = '#ff0000';
    downloadButton.style.color = '#fff';
    downloadButton.style.border = 'none';
    downloadButton.style.padding = '10px';
    downloadButton.style.cursor = 'pointer';

    // Add event listener for download functionality (stub)
    downloadButton.addEventListener('click', () => {
        alert('Download functionality not implemented yet.');
    });

    // Inject the button below the player
    player.appendChild(downloadButton);
}

// Run the function on page load
window.addEventListener('load', injectDownloadButton);
