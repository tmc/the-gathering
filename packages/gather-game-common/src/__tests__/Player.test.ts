import { Player, PlayerDB, PlayerDBFields } from "../Player";

describe("#Player", () => {
  it("does have currentlyEquippedWearables defined on it", () => {
    const player = new Player("1");
    expect("currentlyEquippedWearables" in player).toEqual(true);
  });
});

describe("#PlayerDBFields", () => {
  it("has all fields defined and not optional from PlayerDB", () => {
    // If this fails in TS, it means a new field has been added to `PlayerDB` but was not
    // initialized with a value in `PlayerDBFields`. Usually you can fix it by adding
    // the missing field onto `PlayerDBFields`.
    const playerDBFields: Required<Omit<PlayerDB, "currentlyEquippedWearables">> =
      new PlayerDBFields();
    expect(playerDBFields).toBeDefined();
  });
});
