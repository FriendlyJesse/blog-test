import { ApiProperty } from '@nestjs/swagger'

export class CreatePostDto {
  @ApiProperty({description: '帖子标题'})
  title: string

  @ApiProperty({description: '帖子内容'})
  content: string
}

export class DetailPostDto {
  @ApiProperty({description: '帖子标题'})
  id: string

  @ApiProperty({description: '帖子内容'})
  title: string
}

export class StatusPostDto {
  @ApiProperty({description: '状态'})
  success: boolean
}