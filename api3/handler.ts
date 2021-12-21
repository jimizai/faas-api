import { Injectable, NextFunction } from "@jimizai/injectable";
import { FoxxMiddleware } from "@jimizai/driver-koa";
import { Context } from "koa";

@Injectable()
class TestService {
  getName(): string {
    return "hello wolrd";
  }
}

@Injectable()
export default class Handler implements FoxxMiddleware {
  constructor(private testService: TestService) {}
  async call(ctx: Context, next: NextFunction): Promise<void> {
    ctx.body = this.testService.getName();
    await next();
  }
}
