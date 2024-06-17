import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
import { conf } from '../constants';



// Configuration
cloudinary.config({
    cloud_name: conf.CLOUDINARY_CLOUD_NAME,
    api_key: conf.CLOUDINARY_CLOUD_API_KEY,
    api_secret: conf.CLOUDINARY_CLOUD_SECRET_KEY // Click 'View Credentials' below to copy your API secret
});


export const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been uploaded successfully
        console.log("file is uploaded on cloudinary", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath)//remove the locally saved temporary file
        //as the upload operation failed
        return null;
    }
}
