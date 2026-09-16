const fs = require('fs').promises;

async function deleteFile(){
    try{
        await fs.unlink('shreya.txt');
        console.log('File is deleted successfully');
    }catch(err){
        console.error('Error occurred while deleting file:', err);
    }
}

deleteFile();