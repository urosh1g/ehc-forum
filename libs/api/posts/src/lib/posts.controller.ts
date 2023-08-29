import { Controller } from '@nestjs/common';
import { ApiPostsService } from './posts.service';

@Controller('posts')
export class ApiPostsController {
  constructor(private apiPostsService: ApiPostsService) {}
}
