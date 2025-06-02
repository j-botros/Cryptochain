const Block = require("./block");

describe("Block", () => {
    const timestamp = "a-date";
    const lastHash = "foo-hash";
    const hash = "bar-hash";
    const data = ["Blockchain", "data"];
    const block = new Block({ timestamp, lastHash, hash, data });

    it("has a timestamp", () => {
        expect(block.timestamp).toEqual(timestamp);
    });
    it("has a lastHash", () => {
        expect(block.lastHash).toEqual(lastHash);
    });
    it("has a hash", () => {
        expect(block.hash).toEqual(hash);
    });
    it("has a data", () => {
        expect(block.data).toEqual(data);
    });
    
});