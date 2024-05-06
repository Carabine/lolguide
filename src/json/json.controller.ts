import {
  Body,
  Controller, Patch,
} from "@nestjs/common";
import { promises as fs } from 'fs';
import {join} from "path";

@Controller('api/json')
export class JsonController {
  constructor() { }

  @Patch('/words')
  async patchWords(@Body() body: { jsonData: string }) {
    console.log("file")
    const {jsonData} = body
    console.log(jsonData)
    console.log(process.cwd())
    const jsonPath = join(process.cwd(), "public/storage/json")

    await fs.writeFile(join(jsonPath, "words.json"), jsonData)
    return jsonData
  }

  @Patch('/progress')
  async patchProgress(@Body() body: { jsonData:any }) {
    const {jsonData} = body
    console.log("file")
    console.log(jsonData)
    const jsonPath = join(process.cwd(), "public/storage/json")

    await fs.writeFile(join(jsonPath, "progress.json"), jsonData)
    return jsonData
  }

//   @Post('/upload/image')
//   uploadImage(@FileDecorator() file: any) {
//     console.log("file")
//     console.log(file)
//     // if (!file) {
//     //   throw new Error("no file")
//     // }
//     // if (file.mimetype.split('/')[0] !== 'image') {
//     //   throw ({ message: 'wrong file type' })
//     // }
//     // return file.path
//   }
}
