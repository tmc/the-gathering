import { MapPosition, Point } from "./Position";
import { dangerouslyCastToPoint, manhattanDistance } from "./positionUtils";
import { Player, SpriteDirection, MoveDirection } from "./Player";

// The defaults in the constructor above are used server-side, the defaults below are used client side.
// The difference is often because of how we want to render not-fully initialized players (i.e. off-map)

// Returns an instance of a player with fields set to default values.
// These values are just placeholder until the player's position is reported over the wire.
// (We use arbitrary numbers here instead of `-Infinity` to avoid math/NaN issues within Phaser.)
export const generateDefaultPlayer = (playerId: string): Player => {
  const player = new Player(playerId);
  player.x = -99999;
  player.y = -99999;
  player.emote = "";
  player.away = true;
  player.lastActive = new Date().toISOString();
  player.connected = true;
  return player;
};

export const DEFAULT_NAME = "Anonymous";

export function getMoveDirFromSpriteDir(direction: SpriteDirection) {
  switch (direction) {
    case SpriteDirection.Dance1:
    case SpriteDirection.Dance2:
    case SpriteDirection.Dance3:
    case SpriteDirection.Dance4:
      return MoveDirection.Dance;

    case SpriteDirection.Down:
    case SpriteDirection.DownAlt:
      return MoveDirection.Down;

    case SpriteDirection.Up:
    case SpriteDirection.UpAlt:
      return MoveDirection.Up;

    case SpriteDirection.Left:
    case SpriteDirection.LeftAlt:
      return MoveDirection.Left;

    case SpriteDirection.Right:
    case SpriteDirection.RightAlt:
      return MoveDirection.Right;

    default:
      return null;
  }
}

export function oppositeMoveDirection(direction: MoveDirection): MoveDirection | null {
  switch (direction) {
    case MoveDirection.Left:
      return MoveDirection.Right;
    case MoveDirection.Right:
      return MoveDirection.Left;
    case MoveDirection.Up:
      return MoveDirection.Down;
    case MoveDirection.Down:
      return MoveDirection.Up;
    default:
      return null;
  }
}

export function positionAfterMove(start: Point, dir: MoveDirection | null, dist?: number): Point;
export function positionAfterMove(
  start: MapPosition,
  dir: MoveDirection | null,
  dist?: number,
): MapPosition;
export function positionAfterMove(
  start: Point | MapPosition,
  dir: MoveDirection | null,
  dist = 1,
): Point | MapPosition {
  const { x, y, map } = start;
  switch (dir) {
    case MoveDirection.Left:
      return { x: x - dist, y, map };
    case MoveDirection.Right:
      return { x: x + dist, y, map };
    case MoveDirection.Up:
      return { x, y: y - dist, map };
    case MoveDirection.Down:
      return { x, y: y + dist, map };
    default:
      return start;
  }
}

// Returns the next SpriteDirection to use after applying the given MoveDirection.
export function nextSpriteDirection(
  current: SpriteDirection,
  direction: MoveDirection,
): SpriteDirection {
  if (direction === MoveDirection.Left && current === SpriteDirection.Left) {
    return SpriteDirection.LeftAlt;
  } else if (direction === MoveDirection.Right && current === SpriteDirection.Right) {
    return SpriteDirection.RightAlt;
  } else if (direction === MoveDirection.Up && current === SpriteDirection.Up) {
    return SpriteDirection.UpAlt;
  } else if (direction === MoveDirection.Down && current === SpriteDirection.Down) {
    return SpriteDirection.DownAlt;
  } else if (direction === MoveDirection.Dance && current === SpriteDirection.Dance1) {
    return SpriteDirection.Dance2;
  } else if (direction === MoveDirection.Dance && current === SpriteDirection.Dance2) {
    return SpriteDirection.Dance3;
  } else if (direction === MoveDirection.Dance && current === SpriteDirection.Dance3) {
    return SpriteDirection.Dance4;
  } else if (direction === MoveDirection.Left) {
    return SpriteDirection.Left;
  } else if (direction === MoveDirection.Right) {
    return SpriteDirection.Right;
  } else if (direction === MoveDirection.Up) {
    return SpriteDirection.Up;
  } else if (direction === MoveDirection.Down) {
    return SpriteDirection.Down;
  } else if (direction === MoveDirection.Dance) {
    return SpriteDirection.Dance1;
  }
  return current;
}

// direction for player to face target when next to eachother
export function directionToFacePlayer(player: Player, target: Player): MoveDirection | null {
  if (player.map !== target.map) return null;

  if (manhattanDistance(dangerouslyCastToPoint(player), dangerouslyCastToPoint(target)) !== 1)
    return null;

  if (player.x - target.x === 1) {
    return MoveDirection.Left;
  } else if (player.x - target.x === -1) {
    return MoveDirection.Right;
  } else if (player.y - target.y === 1) {
    return MoveDirection.Up;
  } else if (player.y - target.y === -1) {
    return MoveDirection.Down;
  }
  return null;
}

// whisperId is either in format #XXXXXX or a uuid4
export function whisperIdToColor(id: string): string {
  if (id.length === 7) return id;

  return "#" + id.slice(0, 6);
}

export enum VehicleAction {
  Mount = "mount",
  Dismount = "dismount",
}
