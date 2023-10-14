import { MapPosition, Point } from "./Position";
import { Player, SpriteDirection, MoveDirection } from "./Player";
export declare const generateDefaultPlayer: (playerId: string) => Player;
export declare const DEFAULT_NAME = "Anonymous";
export declare function getMoveDirFromSpriteDir(direction: SpriteDirection): MoveDirection | null;
export declare function oppositeMoveDirection(direction: MoveDirection): MoveDirection | null;
export declare function positionAfterMove(start: Point, dir: MoveDirection | null, dist?: number): Point;
export declare function positionAfterMove(start: MapPosition, dir: MoveDirection | null, dist?: number): MapPosition;
export declare function nextSpriteDirection(current: SpriteDirection, direction: MoveDirection): SpriteDirection;
export declare function directionToFacePlayer(player: Player, target: Player): MoveDirection | null;
export declare function whisperIdToColor(id: string): string;
export declare enum VehicleAction {
    Mount = "mount",
    Dismount = "dismount"
}
