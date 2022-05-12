import { getRepository } from "typeorm";
import { minioClient } from "../../app";
import { Document } from "../entities/Document";
import { v4 as uuidv4 } from "uuid";
import { Readable } from "typeorm/platform/PlatformTools";
export class DocumentBL {
  public static async getDoumentsByPost(postId: number) {
    const documentRepository = getRepository(Document);
    const allDocuments = await documentRepository.find({
      where: { post: postId },
    });

    console.log(allDocuments);
    const files: Array<Readable> = [];
    for (const document of allDocuments) {
      files.push(await minioClient.getObject("files", document.s3Id));
    }
    console.log(files);
    return files;
  }

  public static async saveDocuments(postId: number, files) {
    const documentRepository = getRepository(Document);
    console.log(files);

    for (let i = 0; i < files.length; i++) {
      const uuid = uuidv4();
      const uploadedObject = await minioClient.putObject(
        "files",
        uuid,
        files[i].buffer
      );
      documentRepository.save({
        s3Id: uuid,
        name: files[i].originalname,
        post: { id: postId },
      });
    }
  }
}
