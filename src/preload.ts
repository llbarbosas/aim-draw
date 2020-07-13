// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", canvasResize);
window.addEventListener("resize", canvasResize);

function canvasResize() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const statusInfo = document.getElementById("status-info");
  const { width, height } = (canvas.parentNode as any).getBoundingClientRect();
  canvas.height = height - (30 + 42);
  canvas.width = width;
  statusInfo.innerText = `100% ${width}w ${height}h `;
}
