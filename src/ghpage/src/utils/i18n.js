
export const TRANSLATIONS = {
  en: {
    entities: "Entities", events: "Events", people: "People", places: "Places",
    all: "All", search: "Search...", noResults: "No matching entities",
    results: "{n} results", page: "Page {p} of {t}",
    prev: "Prev", next: "Next", details: "Details", relations: "Relations",
    wiki: "Open in WikiData", title: "Vietnam Knowledge Graph",
  },
  vi: {
    entities: "Thuc the", events: "Su kien", people: "Nhan vat", places: "Dia danh",
    all: "Tat ca", search: "Tim kiem...", noResults: "Khong tim thay",
    results: "{n} ket qua", page: "Trang {p} / {t}",
    prev: "Truoc", next: "Sau", details: "Chi tiet", relations: "Quan he",
    wiki: "Mo trong WikiData", title: "Bieu do tri thuc Viet Nam",
  },
};

let currentLang = "en";

export function setLang(lang) {
  currentLang = lang;
}

export function getLang() {
  return currentLang;
}

export function t(key, params) {
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const text = dict[key] || TRANSLATIONS.en[key] || key;
  if (params) {
    return text.replace(/\{(\w+)\}/g, (_, k) => params[k] ?? "{" + k + "}");
  }
  return text;
}
