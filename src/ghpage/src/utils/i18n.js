/**
 * Simple i18n for bilingual EN/VI support.
 */
const translations = {
  en: {
    entities: "Entities",
    events: "Events",
    people: "People",
    places: "Places",
    all: "All",
    search: "Search...",
    noResults: "No matching entities",
    loading: "Loading...",
    results: "{n} results",
    page: "Page {p} of {t}",
    prev: "Prev",
    next: "Next",
    details: "Details",
    relations: "Relations",
    wiki: "Open in WikiData",
    timeline: "Timeline",
    tree: "Dynasty Tree",
    builtWith: "Built with",
    source: "source",
    chatTitle: "MiniDi Assistant",
    chatPlaceholder: "Ask about Vietnam...",
    entitiesTotal: "{n} entities",
    mapPlaces: "Places",
    mapPeople: "People",
    mapEvents: "Events"
  },
  vi: {
    entities: "Thuc the",
    events: "Su kien",
    people: "Nhan vat",
    places: "Dia danh",
    all: "Tat ca",
    search: "Tim kiem...",
    noResults: "Khong tim thay",
    loading: "Dang tai...",
    results: "{n} ket qua",
    page: "Trang {p} / {t}",
    prev: "Truoc",
    next: "Sau",
    details: "Chi tiet",
    relations: "Quan he",
    wiki: "Mo trong WikiData",
    timeline: "Thoi gian",
    tree: "Dong ho",
    builtWith: "Xay dung voi",
    source: "Ma nguon",
    chatTitle: "Tro ly MiniDi",
    chatPlaceholder: "Hoi ve Viet Nam...",
    entitiesTotal: "{n} thuc the",
    mapPlaces: "Dia danh",
    mapPeople: "Nhan vat",
    mapEvents: "Su kien"
  }
};

let currentLang = "en";

export function setLang(lang) {
  currentLang = lang;
}

export function getLang() {
  return currentLang;
}

export function translate(key, params) {
  const dict = translations[currentLang] || translations.en;
  let text = dict[key] || translations.en[key] || key;
  if (params) {
    for (const k in params) {
      text = text.replace("{" + k + "}", params[k]);
    }
  }
  return text;
}
