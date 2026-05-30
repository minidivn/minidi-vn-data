
/**
 * Loads index.json from the same directory with progress tracking.
 */
export function loadData(onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "index.json", true);
    xhr.responseType = "arraybuffer";

    xhr.onprogress = (e) => {
      if (e.lengthComputable && onProgress) {
        onProgress(e.loaded, e.total);
      }
    };

    xhr.onload = () => {
      try {
        const data = JSON.parse(
          new TextDecoder("utf-8").decode(xhr.response)
        );
        resolve(data);
      } catch (err) {
        reject(err);
      }
    };

    xhr.onerror = () => reject(new Error("Failed to load index.json"));
    xhr.send();
  });
}

export function getStats(nodes) {
  const counts = {};
  nodes.forEach(n => {
    const key = n.t || "other";
    counts[key] = (counts[key] || 0) + 1;
  });
  return counts;
}
