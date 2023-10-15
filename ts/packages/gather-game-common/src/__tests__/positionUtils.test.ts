import { dangerouslyCastToPoint, isMapPositionEqual, isPointEqual } from "../positionUtils";
import { factories } from "../public/factories";

describe("isPointEqual", () => {
  it("compares two Points correctly", () => {
    const point1 = { x: 0, y: 1 };
    const point2 = { x: 0, y: 1 };
    const point3 = { x: 1, y: 1 };

    expect(isPointEqual(point1, point2)).toEqual(true);
    expect(isPointEqual(point1, point3)).toEqual(false);
  });

  it("throws a TS error when trying to pass in a MapPosition into isPointEqual", () => {
    const position1 = { x: 0, y: 1, map: "map" };
    const point1 = { x: 0, y: 1 };

    // we're explicitly testing this is a TS error, because we're doing some tricky
    // stuff with types and want to make sure it enforces boundaries correctly.
    // It's kind of redundant, but demonstrates the behavior of this function which
    // may not be obvious from looking at the types.
    // @ts-expect-error
    isPointEqual(position1, point1);
  });

  it("throws a TS error when trying to pass in a Player into isPointEqual", () => {
    const player = factories.player.build();
    const point = { x: 0, y: 1 };

    // we're explicitly testing this is a TS error, because we're doing some tricky
    // stuff with types and want to make sure it enforces boundaries correctly.
    // It's kind of redundant, but demonstrates the behavior of this function which
    // may not be obvious from looking at the types.
    // @ts-expect-error
    isPointEqual(player, point);
  });

  it("allows for dangerouslyCastToPoint type override and compares the two Points correctly", () => {
    const player1 = factories.player.build({ x: 1, y: 0, map: "map" });
    const player2 = factories.player.build({ x: 1, y: 0, map: "map" });
    const player3 = factories.player.build({ x: 0, y: 5, map: "map" });

    const player1AsPoint = dangerouslyCastToPoint(player1);
    const player2AsPoint = dangerouslyCastToPoint(player2);
    const player3AsPoint = dangerouslyCastToPoint(player3);

    expect(isPointEqual(player1AsPoint, player2AsPoint)).toEqual(true);
    expect(isPointEqual(player1AsPoint, player3AsPoint)).toEqual(false);
  });
});

describe("#isMapPositionEqual", () => {
  it("compares two MapPositions correctly on the same map", () => {
    const position1 = { x: 0, y: 1, map: "map1" };
    const position2 = { x: 0, y: 1, map: "map1" };
    const position3 = { x: 1, y: 1, map: "map1" };

    expect(isMapPositionEqual(position1, position2)).toEqual(true);
    expect(isMapPositionEqual(position1, position3)).toEqual(false);
  });

  it("compares two MapPositions correctly on different maps", () => {
    const position1 = { x: 0, y: 1, map: "map1" };
    const position2 = { x: 0, y: 1, map: "map2" };
    const position3 = { x: 1, y: 1, map: "map3" };

    expect(isMapPositionEqual(position1, position2)).toEqual(false);
    expect(isMapPositionEqual(position1, position3)).toEqual(false);
  });

  it("throws a TS error when trying to pass in a Point into isMapPositionEqual", () => {
    const point = { x: 0, y: 1 };
    const player = factories.player.build();

    // @ts-expect-error
    isMapPositionEqual(point, player);
  });
});
