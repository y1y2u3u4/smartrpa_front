import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { exec } from 'child_process';
import { downloadAndUploadvideo, getSignedUrl } from "@/lib/s3";
const { writeFileSync } = require('fs');
const { Workbook } = require('exceljs');

export default async function handler(req, res) {
    
    const { workflowName, excelData_new} = req.body;

    // 创建文件夹
    console.log('workflowName:', workflowName);

    const folderPath = path.join(process.cwd(), 'data', workflowName);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
    // 创建一个新的 Excel 工作簿
    const workbook = new Workbook();

    // 添加一个新的工作表
    const worksheet = workbook.addWorksheet('My Sheet');

    // 将 excelData_final 写入工作表
    worksheet.addRows(excelData_new);
    // 将工作簿保存为 Excel 文件
    await workbook.xlsx.writeFile(path.join(folderPath, 'data_renew.xlsx'));

    res.json({ message: 'Workflow created successfully' });
}



