import { formatMessage } from ".";

describe("messages", () => {
  it("formats message with name", () => {
    const name = "James";
    expect(formatMessage(name)).toBe(`Name: ${name}`);
  });
});
