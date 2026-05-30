/**
 * Loads index.json with XHR progress tracking.
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
        const decoder = new TextDecoder("utf-8");
        const data = JSON.parse(decoder.decode(xhr.response));
        resolve(data);
      } catch (err) {
        reject(err);
      }
    };

    xhr.onerror = () => reject(new Error("Failed to load index.json"));
    xhr.send();
  });
}

export function filterByType(nodes, type) {
  return type === "all" ? nodes : nodes.filter(n => n.t === type);
}

export function filterByEra(node, era) {
  if (!node.m) return false;
  const eras = {
    hong_bang: [-2879, -258],
    chinese_domination: [-111, 939],
    dynastic_vn: [939, 1858],
    colonial: [1858, 1954],
    vietnam_war: [1955, 1975],
    modern: [1975, 9999]
  };
  const range = eras[era];
  if (!range) return false;
  const fields = ["point_in_time", "start_time", "birth_date", "death_date"];
  for (const field of fields) {
    const val = node.m[field];
    if (val) {
      const match = String(val).match(/(-?\d{4})/);
      if (match) {
        const year = parseInt(match[1], 10);
        if (year >= range[0] && year <= range[1]) return true;
      }
    }
  }
  return false;
}

export function getStats(nodes) {
  const counts = {};
  nodes.forEach(n => {
    const key = n.t || "other";
    counts[key] = (counts[key] || 0) + 1;
  });
  return counts;
}
