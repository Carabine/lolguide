import { Module } from '@nestjs/common';
import { JsonController } from './json.controller';
import { ConfigModule } from "../config/config.module";

@Module({
  imports: [
    ConfigModule
  ],
  controllers: [JsonController]
})
export class JsonModule {}
