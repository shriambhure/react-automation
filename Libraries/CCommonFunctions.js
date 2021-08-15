
module.exports = {

	getAbsoluteUrl() {
		return process.env.SECURE_HOST_PREFIX +process.env.PRODUCT_URL;
	}
}