// YouTube video sayfasında indir düğmesi ekle
const addDownloadButton = () => {
  // Eğer zaten düğme varsa, tekrar ekleme
  if (document.getElementById('yt-downloader-btn')) return;

  // Video bilgilerini al
  const videoTitle = document.querySelector('h1.title yt-formatted-string')?.textContent || 'video';
  const videoId = new URLSearchParams(window.location.search).get('v');
  
  if (!videoId) return;

  // Düğme container'ını bul
  const buttonContainer = document.querySelector('#above-the-fold .super-title-container');
  
  if (buttonContainer) {
    // İndir düğmesi oluştur
    const downloadBtn = document.createElement('button');
    downloadBtn.id = 'yt-downloader-btn';
    downloadBtn.textContent = '⬇️ MP4 İndir';
    downloadBtn.style.cssText = `
      background-color: #ff0000;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 24px;
      font-weight: 600;
      cursor: pointer;
      margin: 10px 5px 0 0;
      font-size: 14px;
      transition: background-color 0.2s;
    `;

    downloadBtn.onmouseover = () => {
      downloadBtn.style.backgroundColor = '#cc0000';
    };
    downloadBtn.onmouseout = () => {
      downloadBtn.style.backgroundColor = '#ff0000';
    };

    downloadBtn.onclick = () => {
      chrome.runtime.sendMessage({ 
        action: 'openDownloadPopup', 
        videoId: videoId, 
        videoTitle: videoTitle 
      });
    };

    buttonContainer.appendChild(downloadBtn);
  }
};

// Sayfa yüklendiğinde ve dinamik içerik değiştiğinde düğme ekle
addDownloadButton();
window.addEventListener('yt-navigate-finish', addDownloadButton);
document.addEventListener('DOMContentLoaded', addDownloadButton);
