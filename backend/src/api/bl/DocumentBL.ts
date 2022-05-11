import { getRepository } from "typeorm";
import { minioClient } from '../../app';
import { Document } from "../entities/Document";

export class DocumentBL {
    public static async saveDocuments(postId: number, files) {
        const documentRepository = getRepository(Document);
        for (let i = 0; i < files.length; i++) {
            const uploadedObject = await minioClient.putObject('documents', files[i].originalname, files[1].buffer);
            documentRepository.save({ s3Id: uploadedObject.etag, post: { id: postId } })
        }
    }
}