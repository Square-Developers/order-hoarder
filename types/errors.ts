export class AppError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'AppError';
    }
  }

export class NotFoundError extends AppError {
    constructor(message: string, public statusCode: number) {
      super(message);
      this.name = 'NotFoundError';
      this.statusCode = 404;
    }
}

export class BadRequestError extends AppError {
    constructor(message: string, public statusCode: number) {
      super(message);
      this.name = 'BadRequestError';
      this.statusCode = 400;
    }
}

export class UnauthorizedError extends AppError {
    constructor(message: string, public statusCode: number) {
      super(message);
      this.name = 'UnauthorizedError';
      this.statusCode = 401;
    }
}

export class ForbiddenError extends AppError {
    constructor(message: string, public statusCode: number) {
      super(message);
      this.name = 'ForbiddenError';
      this.statusCode = 403;
    }
}

export class InternalServerError extends AppError {
    constructor(message: string, public statusCode: number) {
      super(message);
      this.name = 'InternalServerError';
      this.statusCode = 500;
    }
}

export class DatabaseError extends AppError {
    constructor(message: string, public statusCode: number) {
      super(message);
      this.name = 'DatabaseError';
      this.statusCode = 503;
    }
}