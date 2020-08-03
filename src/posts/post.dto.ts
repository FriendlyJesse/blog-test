import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreatePostDto {
  @ApiProperty({ description: '帖子标题', example: '帖子标题1' })
  @IsNotEmpty({ message: '请填写标题' })
  title: string

  @ApiProperty({ description: '帖子内容', example: '帖子内容1' })
  content: string
}

export class DetailPostDto {
  @ApiProperty({ description: '帖子标题' })
  id: string

  @ApiProperty({ description: '帖子内容' })
  title?: string
}

export class StatusPostDto {
  @ApiProperty({ description: '状态' })
  success: boolean
}