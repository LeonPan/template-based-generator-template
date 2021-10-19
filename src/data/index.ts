/* eslint-disable @typescript-eslint/no-unsafe-call */
import preval from 'preval.macro';
import { SetReturnType } from 'type-fest';

const importExport = `
  const fs = require('fs');
  const path = require('path');
  module.exports = fs.readFileSync(path.join(__dirname, 'templates', '`;
const tail = ".md'), 'utf8')";
const _ = preval as SetReturnType<typeof preval, string>;

/**
 * 在代码里注册模板，方便在生成器代码里使用
 */
export const templates = {
  '360 评估': _`${importExport}360 评估${tail}`,
};