import fs from 'fs';

// CREATE DIRECTORY
// if the directory exits, don't create it
if (!fs.existsSync('./new')) {
  fs.mkdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory created!');
  });
} else {
  process.on('uncaughtException', (err) => {
    console.log('Directory already exits!!\n\n', err);
    process.exit(1);
  });
}

// REMOVE DIRECTORY
if (fs.existsSync('./new')) {
  fs.rmdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory REMOVED!');
  });
}
