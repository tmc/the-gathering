export enum GameWsCloseCode {
  NORMAL_CLOSURE = 1000,
  GOING_AWAY = 1001,
  PROTOCOL_ERROR = 1002, // causes refresh
  NO_STATUS_RECEIVED = 1005,
  NO_CLOSE_FRAME = 1006, // "abnormal" in the ws spec, but this happens when people just close the tab
  INTERNAL_ERROR = 1011, // causes refresh
  CONN_TIMED_OUT = 4008,
  SPACE_REASSIGNED = 4009,
  CLIENT_KICKED = 4010,
  SPACE_CLOSED = 4011,
  SPACE_AT_CAPACITY = 4012,
  NONFATAL_INTERNAL_ERROR = 4013,
  UNAUTHORIZED = 4003,
  CHILL_OUT = 4420,
  SUS = 4666, // for suspicious activity
  HIGHLANDER = 4667, // highlander rules; only one god uid can be connected to the gameserver at a time
}
// useful: https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
