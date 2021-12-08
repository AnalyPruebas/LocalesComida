import { Module } from '@nestjs/common';
import { LugarController } from './lugar.controller';
import { LugarService } from './lugar.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LugarEntity } from './lugar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LugarEntity])],
  controllers: [LugarController],
  providers: [LugarService],
  exports: [LugarService],
})
export class LugarModule {}
