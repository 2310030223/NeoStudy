const cloudinary = require("cloudinary").v2;

exports.cloudinaryConnect = () => {
	try {
		if (!process.env.CLOUD_NAME || !process.env.API_KEY || !process.env.API_SECRET) {
			throw new Error('Cloudinary configuration is missing');
		}

		cloudinary.config({
			cloud_name: process.env.CLOUD_NAME,
			api_key: process.env.API_KEY,
			api_secret: process.env.API_SECRET,
		});
		console.log('Cloudinary connected successfully');
	} catch (error) {
		console.error('Error connecting to Cloudinary:', error);
		throw error;
	}
};


