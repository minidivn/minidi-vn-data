
import { describe, it, expect } from "vitest";
import { t, setLang, getLang, TRANSLATIONS } from "../utils/i18n.js";

describe("i18n", () => {
  it("returns English by default", () => {
    expect(getLang()).toBe("en");
  });

  it("returns English key", () => {
    expect(t("entities")).toBe("Entities");
    expect(t("search")).toBe("Search...");
  });

  it("switches to Vietnamese", () => {
    setLang("vi");
    expect(getLang()).toBe("vi");
    expect(t("entities")).toBe("Thuc the");
    expect(t("search")).toBe("Tim kiem...");
    setLang("en"); // reset
  });

  it("handles unknown key", () => {
    expect(t("nonexistent_key")).toBe("nonexistent_key");
  });

  it("interpolates params", () => {
    expect(t("results", { n: 42 })).toBe("42 results");
    expect(t("page", { p: 1, t: 5 })).toBe("Page 1 of 5");
  });
});
