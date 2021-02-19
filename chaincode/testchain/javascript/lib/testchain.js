const { Contract } = require("fabric-contract-api");
class TestChain extends Contract {
    async initLedger(ctx) {
        console.info("=== END : Initialize Ledger ===");
    }
    async helloWorld(ctx) {
        return "Hello World";
    }
}
module.exports = TestChain;
