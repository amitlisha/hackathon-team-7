import { Router } from 'express';
import { GroupBL } from '../bl/GroupBL';

const route = Router();

route.post('/', async (req, res) => {
    try {
        const newGroup = await GroupBL.save(req.body.name, req.body.patientId, req.body.userIds);
        res.json(newGroup);
    } catch (e) {
        console.log(e)
        res.status(500)
    }
})

route.delete('/:groupId', async (req, res) => {
    try {
        await GroupBL.delete(parseInt(req.params.groupId));
        res.status(200);
    } catch (e) {
        console.log(e)
        res.status(500)
    }
})

route.post('/user', async (req, res) => {
    try {
        const patients = await GroupBL.addUser(req.body.userId, req.body.groupId);
        res.json(patients);
    } catch (e) {
        console.log(e)
        res.status(500)
    }
})

route.delete('/user', async (req, res) => {
    try {
        const group = await GroupBL.deleteUser(req.body.userId, req.body.groupId);
        res.json(group);
    } catch (e) {
        console.log(e)
        res.status(500)
    }
})

export default route;
