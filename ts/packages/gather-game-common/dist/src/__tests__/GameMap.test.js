"use strict";
var import_GameMap = require("../GameMap");
var import_factories = require("../public/factories");
it("converts between wire objects and db objects consistently", () => {
  const firstWireObject = import_factories.factories.wireObject.build({
    propertiesJson: `{"url":"https://gather.town"}`
  });
  const firstDbObject = (0, import_GameMap.convertWireObjectToMapObjectDBPartial)(firstWireObject);
  const secondWireObject = (0, import_GameMap.convertMapObjectToWireObject)(firstDbObject);
  const secondDbObject = (0, import_GameMap.convertWireObjectToMapObjectDBPartial)(secondWireObject);
  expect(firstWireObject).toEqual(secondWireObject);
  expect(firstDbObject).toEqual(secondDbObject);
});
describe("#convertWireAreasToDBAreas", () => {
  const mapWidth = 5;
  const mapHeight = 5;
  it("converts wire areas to a coords map", () => {
    const coords = [
      { x1: 0, y1: 1, x2: 0, y2: 2 },
      { x1: 2, y1: 3, x2: 3, y2: 4 }
    ];
    const coordsMap = (0, import_GameMap.convertAreaCoordsToCoordsMap)(coords, [mapWidth, mapHeight]);
    expect(coordsMap).toEqual({
      "1": { "0": true },
      "2": { "0": true },
      "3": { "2": true, "3": true },
      "4": { "2": true, "3": true }
    });
  });
  it("works when areas overlap", () => {
    const coords = [
      { x1: 0, y1: 0, x2: 2, y2: 2 },
      { x1: 1, y1: 1, x2: 4, y2: 4 }
    ];
    const coordsMap = (0, import_GameMap.convertAreaCoordsToCoordsMap)(coords, [mapWidth, mapHeight]);
    expect(coordsMap).toEqual({
      "0": { "0": true, "1": true, "2": true },
      "1": { "0": true, "1": true, "2": true, "3": true, "4": true },
      "2": { "0": true, "1": true, "2": true, "3": true, "4": true },
      "3": { "1": true, "2": true, "3": true, "4": true },
      "4": { "1": true, "2": true, "3": true, "4": true }
    });
  });
  it("works when coordinates are not in order", () => {
    const coords = [
      { x1: 2, y1: 2, x2: 1, y2: 1 },
      { x1: 4, y1: 4, x2: 3, y2: 3 }
    ];
    const coordsMap = (0, import_GameMap.convertAreaCoordsToCoordsMap)(coords, [mapWidth, mapHeight]);
    expect(coordsMap).toEqual({
      "1": { "1": true, "2": true },
      "2": { "1": true, "2": true },
      "3": { "3": true, "4": true },
      "4": { "3": true, "4": true }
    });
  });
  it("clips when coords are out of bounds", () => {
    const coords = [
      { x1: 1, y1: 1, x2: 2, y2: 2 },
      { x1: 3, y1: 3, x2: 5, y2: 5 }
    ];
    const coordsMap = (0, import_GameMap.convertAreaCoordsToCoordsMap)(coords, [mapWidth, mapHeight]);
    expect(coordsMap).toEqual({
      "1": { "1": true, "2": true },
      "2": { "1": true, "2": true },
      "3": { "3": true, "4": true },
      "4": { "3": true, "4": true }
    });
  });
});
//# sourceMappingURL=GameMap.test.js.map
