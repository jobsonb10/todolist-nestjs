import { Module } from '@nestjs/common';
import { TasksService } from '../tasks/shared/tasks.service';
import { TasksController } from './tasks.controller';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
