"use strict";
var import_Player = require("../Player");
describe("#Player", () => {
  it("does have currentlyEquippedWearables defined on it", () => {
    const player = new import_Player.Player("1");
    expect("currentlyEquippedWearables" in player).toEqual(true);
  });
});
describe("#PlayerDBFields", () => {
  it("has all fields defined and not optional from PlayerDB", () => {
    const playerDBFields = new import_Player.PlayerDBFields();
    expect(playerDBFields).toBeDefined();
  });
});
//# sourceMappingURL=Player.test.js.map
