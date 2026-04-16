// popup.js

// Function to handle the download logic
function handleDownload(url) {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'download'; // You can customize the name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Example listener for download button
document.getElementById('downloadButton').addEventListener('click', function() {
    const videoUrl = document.getElementById('videoUrl').value;
    handleDownload(videoUrl);
});
