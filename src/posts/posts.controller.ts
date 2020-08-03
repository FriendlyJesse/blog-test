import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common'
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { CreatePostDto, DetailPostDto, StatusPostDto } from './post.dto'


@ApiTags('帖子')
@Controller('posts')
export class PostsController {

  @ApiOperation({summary: '帖子列表'})
  @Get()
  index (): Array<number> {
    return [1]
  }

  @ApiOperation({summary: '创建帖子'})
  @Post()
  create (@Body() a: CreatePostDto): Array<string> {
    console.log(a)
    return ['123']
  }

  @ApiOperation({summary: '帖子详情'})
  @Get(':id')
  detail (@Param('id') id: string): DetailPostDto {
    return {
      id,
      title: 'aaa'
    }
  }

  @ApiOperation({summary: '编辑帖子'})
  @Put(':id')
  remove (@Param('id') id: string, @Body() body: CreatePostDto): StatusPostDto {
    console.log(id, body)
    return {
      success: true
    }
  }

  @ApiOperation({summary: '删除帖子'})
  @Delete(':id')
  delete (@Param('id') id: string, @Body() body: CreatePostDto): StatusPostDto {
    console.log(id, body)
    return {
      success: true
    }
  }

}
