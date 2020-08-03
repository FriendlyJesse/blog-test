import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import * as mongoose from 'mongoose'

async function bootstrap () {
  await mongoose.connect('mongodb://localhost/blog-test', { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'test' })

  const app = await NestFactory.create(AppModule)

  const options = new DocumentBuilder()
    .setTitle('博客API文档')
    .setDescription('我的文档')
    .setVersion('1.0')
    // .addTag('cats')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api-docs', app, document)

  await app.listen(3000)
}
bootstrap()
