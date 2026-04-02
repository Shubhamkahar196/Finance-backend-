import express from "express";
import Record from "../models/record.model.js";
import { recordSchema } from "../validators/record.validator.js";
// createRecord - Only admin

export const createRecord = async (req, res) => {
  try {
    const parsedData = recordSchema.safeParse(req.body);
    console.log("parsed",parsedData);
    if (!parsedData.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: parsedData.error.errors,
      });
    }

    const { amount, type, category, date, notes } = parsedData.data;

    const record = await Record.create({
      ...parsedData.data,
      userId: req.user.id,
    });
    res.status(201).json({
      message: "Record created successfully",
      record,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Server Error",
    });
  }
};

// getRecords with filter

export const getRecords = async (req, res) => {
  try {
    const { type, category, startDate, endDate } = req.query;
    const filter = { isDeleted: false };

    if (type) filter.type = type;
    if (category) filter.category = category;

    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const records = await Record.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      count: records.length,
      records,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// getSingleRecord

export const getSingleRecord = async(req,res)=>{
    try {
        const record = await Record.findById(req.params.id);
        if(!record || record.isDeleted){
            return res.status(404).json({
        message: "Record not found"
      });
        }
         res.status(200).json({ record });
    } catch (error) {
         res.status(200).json({ record });
    }

    

}

// update record
export const updateRecord = async (req, res) => {
  try {
    const parsedData = recordSchema.safeParse(req.body);
  
    if (!parsedData.success) {
      return res.status(400).json({
        message: "Validation failed",
      });
    }

    const record = await Record.findById(req.params.id);

    if (!record || record.isDeleted) {
      return res.status(404).json({
        message: "Record not found"
      });
    }

    const updated = await Record.findByIdAndUpdate(
      req.params.id,
      result.data,
      { new: true }
    );

    res.status(200).json({
      message: "Record updated successfully",
      record: updated
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error"
    });
  }
};


// deleted Record
export const deleteRecord = async (req, res) => {
  try {
    const record = await Record.findById(req.params.id);

    if (!record || record.isDeleted) {
      return res.status(404).json({
        message: "Record not found"
      });
    }

    record.isDeleted = true;
    await record.save();

    res.status(200).json({
      message: "Record deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error"
    });
  }
};