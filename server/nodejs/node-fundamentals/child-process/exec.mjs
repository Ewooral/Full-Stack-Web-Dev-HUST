import { exec } from 'child_process'

exec('cat ../filesystem/MANCITY.txt', (err, stdout, stderr) => {
    console.log('we got our catted file\n', stdout);
});