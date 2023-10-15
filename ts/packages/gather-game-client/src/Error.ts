export class ClientError extends Error {
  code: string;

  constructor(message: string, code: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.code = code;
  }
}
