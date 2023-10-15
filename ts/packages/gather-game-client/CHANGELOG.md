[//]: # (here's how to publish a new version: https://www.notion.so/gathertown/publish-gather-game-c-npm-packages-199eee1512dd410aacb993f483ad8097)

# preamble

This is a sorry attempt at a changelog.
Things change all the time, and it would be pretty hard to document all of it.
But, at least for breaking changes between versions, we'll do our best.

# breaking-change-log

## 43.0.1

[//]: # (ADD STUFF HERE AS WE MAKE BREAKING CHANGES -- this is what we'll publish when we publish the next version to npm)
### breaking changes

- removed deprecated `game.setMapSprites` and the `mapSetSprites` event

### other changes

- patch [CVE-2023-36665](https://github.com/advisories/GHSA-h755-8qp9-cq85)


## 42.0.0

### breaking changes

- `game.interact()` now takes arguments `mapId: string, key: string`, in that order (previously was `objId, mapId`). **This is the object key, no longer the object id.**
- event `playerInteracts` has been replaced with `playerInteractsWithObject`, which uses `key` instead of `objId`, and `mapId` is required, but is otherwise the same.


### other changes

- new helper `game.getObjectByKey(mapId: string, key: string)` (to be the `key` equivalent of `game.getObject` (by `id`))


## 41.0.0

### breaking changes

- removed `Player["outfitString"]`, event `playerSetsOutfitString`, and `game.setOutfitString` in favor of `currentlyEquippedWearables`-equivalents of each -- this is now a typed object, with only the `wearableId`s.
- changed `GameMap["objects"]` type from `Record<number, MapObject>` to `Record<string, MapObject>`. They now match the keys returned from the http API
- `deleteObjectByKey` takes string keys instead of numbers now
- `game.setMapObjects` now expects `{ [key: string]: Partial<MapObject> }` for the 2nd arg, instead of being keyed by numbers (these are the new keys that everything else is switching to too)
- `game.setObject` now uses underlying action `mapUpdateObjects`, which does not apply partial updates. Previous action `mapSetObjects` would apply valid updates and warn about invalid ones. Now, the whole action will succeed or the whole action will fail.
- `game.setObject` now allows you to set objects' zIndex instead of ignoring any zIndex values passed in
- event `mapSetObjects` has been replaced with `mapSetObjectsV2`, which is the same except `objects` is keyed by the new string keys instead of the old numeric keys


### other changes

- added `game.addObject` for compile-time checks that all required fields are present
- object keys are now stable and unique! (*Unique within one map.) Unless you deliberately overwrite the whole map via the http API, the same key will refer to the same logical object across edits, restarts, etc. This is an upgrade from object ids, which are not enforced to be unique or stable.
  - `game.updateObject` is the improved equivalent to the old `game.setObject`, which takes a key instead of an id. `game.getObject(mapId, objId, ...)` is no longer necessary; just use `game.partialMaps[mapId][objectKey]`


## 40.0.0

### breaking changes

- deprecate `workCondition` in favor of `away` (`playerSetsAway`)
- deprecate `setCurrentDesk` in favor of `setDeskInfo`
- finally removed `mapSetSpaces` (deprecated for months). In favor of `mapSetNooks`. `spaces` still work with the http API (for now -- we intend to gracefully deprecate that soon too, but will give plenty of heads up first)
- deprecate `playerUpdatesSession`

## 39.0.0

### breaking changes

- the first arg of the Game constructor, spaceId, is now required, as it always should have been
- object keys are no longer guaranteed to be in draw order -- in this version, zIndex is used instead
  - zIndex is guaranteed on MapObjects, but not allowed yet on new ones -- the server will still just add new objects to the top
- walls and floors no longer sent to the client (was unused anyways -- only the mapmaker used this)
- possibly more, it's been a while

### other changes

- `Player`s now have `id` (very convenient)
- minor tweaks to websocket close codes and automatic reconnection handling
- otherwise not much I think? mostly just gameserver reliability improvements

## 38.0.1

### breaking changes

- loosened the TS type on game.engine, so now TS thinks it can be undefined. It hasn't actually gotten undefined in more cases, we just removed a spooky cast. Recommend switching to game.sendAction instead if you've been accessing it directly (which eliminated the second argument, btw)
- spaces (private spaces) deprecated in favor of nooks (new)
- desks (experimental) deprecated in favor of nooks
- renamed map type from GameMapV2 to GameMap
- changed client-side type of map.collisions from boolean[][] to { [y: number]: { [x: number]: true } } -- for memory efficiency
- possibly more, it's been a while

## other changes

- lots but nothing super significant for API users I think
- official npm version is now 8
- official node version is now 16
- uses api.gather.town instead of gather.town

## 37.0.0

### breaking changes

- none?

### other changes

- waitForInit doesn't hang on subscribe error
- a bunch of other stuff probably

## 36.0.0

### breaking changes

- none?

## 35.0.0

### breaking changes

- game.chat now expects the fourth argument to come in as an object, (`{ content: "my message" }`) rather than the string itself (e.g. `"my message"`)
  - this is as we add more options to chat messages... coming soon!

## 34.0.0

### breaking changes

- `enter` no longer takes a spaceid as the first arg
- removed `flushObjectsToFirebase` (hasn't done anything for a while)

### other changes

- added animations!
- a bunch of other stuff probably

## 33.0.0

### breaking changes

- spaceId now passed in through constructor
- connect and disconnect take no args
- onreconnected removed (was deprecated and unused)
- (internal only) overrideServer now passed through constructor
- setEmote now takes a string instead of an Emote enum

### other changes

(very incomplete list)

- fixed a bug with always Enter-ing and also sending things before enter
- tons of other stuff, hard to keep track. it's been 3 months
