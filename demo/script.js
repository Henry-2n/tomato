// 可在此编写视频控制、数据动态更新等交互逻辑
// 例如视频自动播放、定时刷新数据等
window.onload = function () {
  const video = document.getElementById('monitorVideo');
  // 尝试自动播放（部分浏览器需用户交互后才可自动播放音频，这里静音可尝试自动播放）
  video.play().catch(err => {
    console.warn('视频自动播放失败，需用户手动触发', err);
  });
};

