"use strict";
var import_positionUtils = require("../positionUtils");
var import_factories = require("../public/factories");
describe("isPointEqual", () => {
  it("compares two Points correctly", () => {
    const point1 = { x: 0, y: 1 };
    const point2 = { x: 0, y: 1 };
    const point3 = { x: 1, y: 1 };
    expect((0, import_positionUtils.isPointEqual)(point1, point2)).toEqual(true);
    expect((0, import_positionUtils.isPointEqual)(point1, point3)).toEqual(false);
  });
  it("throws a TS error when trying to pass in a MapPosition into isPointEqual", () => {
    const position1 = { x: 0, y: 1, map: "map" };
    const point1 = { x: 0, y: 1 };
    (0, import_positionUtils.isPointEqual)(position1, point1);
  });
  it("throws a TS error when trying to pass in a Player into isPointEqual", () => {
    const player = import_factories.factories.player.build();
    const point = { x: 0, y: 1 };
    (0, import_positionUtils.isPointEqual)(player, point);
  });
  it("allows for dangerouslyCastToPoint type override and compares the two Points correctly", () => {
    const player1 = import_factories.factories.player.build({ x: 1, y: 0, map: "map" });
    const player2 = import_factories.factories.player.build({ x: 1, y: 0, map: "map" });
    const player3 = import_factories.factories.player.build({ x: 0, y: 5, map: "map" });
    const player1AsPoint = (0, import_positionUtils.dangerouslyCastToPoint)(player1);
    const player2AsPoint = (0, import_positionUtils.dangerouslyCastToPoint)(player2);
    const player3AsPoint = (0, import_positionUtils.dangerouslyCastToPoint)(player3);
    expect((0, import_positionUtils.isPointEqual)(player1AsPoint, player2AsPoint)).toEqual(true);
    expect((0, import_positionUtils.isPointEqual)(player1AsPoint, player3AsPoint)).toEqual(false);
  });
});
describe("#isMapPositionEqual", () => {
  it("compares two MapPositions correctly on the same map", () => {
    const position1 = { x: 0, y: 1, map: "map1" };
    const position2 = { x: 0, y: 1, map: "map1" };
    const position3 = { x: 1, y: 1, map: "map1" };
    expect((0, import_positionUtils.isMapPositionEqual)(position1, position2)).toEqual(true);
    expect((0, import_positionUtils.isMapPositionEqual)(position1, position3)).toEqual(false);
  });
  it("compares two MapPositions correctly on different maps", () => {
    const position1 = { x: 0, y: 1, map: "map1" };
    const position2 = { x: 0, y: 1, map: "map2" };
    const position3 = { x: 1, y: 1, map: "map3" };
    expect((0, import_positionUtils.isMapPositionEqual)(position1, position2)).toEqual(false);
    expect((0, import_positionUtils.isMapPositionEqual)(position1, position3)).toEqual(false);
  });
  it("throws a TS error when trying to pass in a Point into isMapPositionEqual", () => {
    const point = { x: 0, y: 1 };
    const player = import_factories.factories.player.build();
    (0, import_positionUtils.isMapPositionEqual)(point, player);
  });
});
//# sourceMappingURL=positionUtils.test.js.map
