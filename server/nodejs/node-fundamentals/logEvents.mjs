import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import fs from 'fs';
import fspromises from 'fs/promises';
import path from 'path';
import url from 'url';

const filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

export const logEvents = async (message) => {
  const dateTime = `${format(new Date(), 'MM/dd/yyyy\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, 'Logs'))) {
      await fspromises.mkdir(path.join(__dirname, 'Logs'));
      console.log('Directory Created!!');
    }
    // Testing
    await fspromises.appendFile(path.join(__dirname, 'Logs', 'eventLog.txt'), logItem);
  } catch (err) {
    console.log(err);
  }
};
