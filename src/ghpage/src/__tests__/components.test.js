
import { describe, it, expect } from "vitest";

describe("Component registration", () => {
  it("can import mini-app without errors", async () => {
    const module = await import("../components/mini-app.js");
    expect(module.MiniApp).toBeDefined();
  });
});
