import express from 'express';
import Record from '../models/record.model.js'

// createRecord - Only admin

export const createRecord = async(req,res)=>{
    try {
        const {amount,type,category,date,notes} = req.body;
    } catch (error) {
        
    }
}