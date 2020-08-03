import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { CreatePostDto, StatusPostDto } from './post.dto'
import { Post as PostSchema } from './post.model'
import { InjectModel } from 'nestjs-typegoose'
import { ModelType } from '@typegoose/typegoose/lib/types'


@ApiTags('帖子')
@Controller('posts')
export class PostsController {

  constructor (@InjectModel(PostSchema) private readonly PostModel: ModelType<PostSchema>) {

  }

  @ApiOperation({ summary: '帖子列表' })
  @Get()
  async index (): Promise<any> {
    return await this.PostModel.find()
  }

  @ApiOperation({ summary: '创建帖子' })
  @Post()
  async create (@Body() body: CreatePostDto): Promise<Array<string>> {
    await this.PostModel.create(body)
    return [ '123' ]
  }

  @ApiOperation({ summary: '帖子详情' })
  @Get(':id')
  async detail (@Param('id') id: string): Promise<any> {
    return await this.PostModel.findById(id)
  }

  @ApiOperation({ summary: '编辑帖子' })
  @Put(':id')
  async update (@Param('id') id: string, @Body() body: CreatePostDto): Promise<StatusPostDto> {
    await this.PostModel.findByIdAndUpdate(id, body)
    console.log(id, body)
    return {
      success: true
    }
  }

  @ApiOperation({ summary: '删除帖子' })
  @Delete(':id')
  async delete (@Param('id') id: string): Promise<StatusPostDto> {
    await this.PostModel.findByIdAndDelete(id)
    return {
      success: true
    }
  }

}
