// TODO: organize json payload in CRUD

import express from "express";
import RoomController from "../domain/controllers/RoomController";

const RoomRoutes = express.Router();

// Post Method
RoomRoutes.post('/post', async(req, res) => {
    try {
        RoomController.postOne(req, res);
    } catch (error) {
        res.send( error );
    }
});

// Get all Method
RoomRoutes.get('/getMany', async (req, res) => {
    try {
        RoomController.getMany(req, res);
    } catch ( error ) {
        res.send( error );
    }
});

// Get count Method
RoomRoutes.get('/getCount', async (req, res) => {
    try {
        RoomController.getCount(req, res);
    } catch (error) {
        res.send( error );
    }
});

// Get by ID Method
RoomRoutes.get('/getOne/:id', async (req, res) => {
    try {
        RoomController.getOne(req, res);
    } catch ( error ) {
        res.send( error );
    }
});

// Update by ID Method
RoomRoutes.patch('/update/:id', async (req, res, next) => {
    try {
        RoomController.updateById(req, res, next);
    } catch ( error ) {
        res.send( error );
    }
});

// Delete by ID Method
RoomRoutes.delete('/delete/', async (req, res) => {
    try {
        RoomController.deleteOne(req, res);
    } catch ( error ) {
        res.send( error );
    }
});

export default RoomRoutes;