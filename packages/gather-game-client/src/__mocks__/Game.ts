import { GameEventByCase, GameEventCase } from "../GameEventUtils";
import { GameEventSubscriptionMap } from "../Game";
import { GameEventContext } from "../GameEventContexts";
import { v4 as uuid } from "uuid";

export class Game {
  private subscriptions: GameEventSubscriptionMap = {};

  /** Largely copied from Game.subscribeToEvent(). */
  subscribeToEvent<T extends GameEventCase>(
    eventId: T,
    handler: (data: GameEventByCase<T>, context: GameEventContext) => void,
  ) {
    const subscriptionId = uuid();

    const existingSubs = this.subscriptions[eventId];
    const eventSubs = existingSubs ?? {};
    // @ts-expect-error This is explained in Game.ts
    eventSubs[subscriptionId] = handler;
    this.subscriptions[eventId] = eventSubs;
    return () => {
      delete this.subscriptions[eventId]?.[subscriptionId];
    };
  }

  /** Largely copied from Game.publishEvent(). */
  publishEvent<T extends GameEventCase>(
    eventId: T,
    data: GameEventByCase<T>,
    context: GameEventContext,
  ) {
    const subMap = this.subscriptions[eventId];
    for (const id in subMap) {
      const handler = subMap[id];
      // @ts-expect-error This is explained in Game.ts
      handler(data, context);
    }
  }

  move = jest.fn();
  exit = jest.fn();
  disconnect = jest.fn();
  setEmote = jest.fn();
  block = jest.fn();
  putMetric = jest.fn();
  init = jest.fn();
  connect = jest.fn();
  setFollowTarget = jest.fn();
  startRecording = jest.fn();
  setMapNooks = jest.fn();
}
