import { Router } from 'express';
import { minioClient } from '../../app';
import { DocumentBL } from '../bl/DocumentBL'
import multer from 'multer';
import { PostBL } from '../bl/PostBL';

const route = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

route.post('/', upload.any(), async (req, res) => {
    try {
        const post = await PostBL.savePost(req.body.title, req.body.content, req.body.patientId);
        try {
            DocumentBL.saveDocuments(post.id, req.files);
        } catch (e) {
        }
        res.json(post);
    } catch (e) {
        res.json(500)
    }
})

route.get('/:patientId', async (req, res) => {
    try {
        const post = await PostBL.getAll(parseInt(req.params.patientId), req.currentUser);
    } catch (e) {
        res.json(500)
    }
})

route.delete('/:postId/:groupId', async (req, res) => {
    try {
        const post = await PostBL.removeGroup(parseInt(req.params.postId), parseInt(req.params.groupId));
    } catch (e) {
        res.json(500)
    }
})

export default route;
