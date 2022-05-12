import { Router } from 'express';
import { PatientBL } from '../bl/PatientBL';

const route = Router();

route.get('/', async (req, res) => {
    try {
        const patients = await PatientBL.getAll(req.currentUser);
        res.json(patients);
    } catch (e) {
        console.log(e)
        res.status(500)
    }
})

route.post('/therapist', async (req, res) => {
    try {
        const patients = await PatientBL.addUser(req.body.userId, req.body.patientId);
        res.json(patients);
    } catch (e) {
        console.log(e)
        res.status(500)
    }
})

route.delete('/therapist', async (req, res) => {
    try {
        const patient = await PatientBL.deleteUser(req.body.userId, req.body.patientId);
        res.json(patient);
    } catch (e) {
        console.log(e)
        res.status(500)
    }
})

export default route;
