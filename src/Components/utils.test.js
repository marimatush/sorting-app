import { clearArray } from "./utils";

describe("utils", () => {
  it("should clear array", () => {
    expect(
      clearArray([-1, 1, 2.3, NaN, "true", "false", "42", 0, undefined, 10])
    ).toEqual([-1, 1, 2.3, 42, 0, 10]);
  });
});
