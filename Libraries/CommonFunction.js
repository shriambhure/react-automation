const {I} = inject();
module.exports = {

    getAbsoluteUrl(product_name) {
            product_name = product_name.toUpperCase();
            var strAbsoulteUrl = ''
            if(true == process.env.DNS.includes('live')) {
                strAbsoulteUrl = process.env.SECURE_HOST_PREFIX + process.env[product_name + "_SUBDOMAIN_"+process.env.CLUSTER_ID] +'.'+ process.env[product_name + '_URL'].replace('dev','');
            } else {
                strAbsoulteUrl = process.env.SECURE_HOST_PREFIX + process.env[product_name + "_SUBDOMAIN_"+process.env.CLUSTER_ID] +'.'+process.env.DNS+'.'+ process.env[product_name + '_URL'];
            }
            return strAbsoulteUrl;
    }
}

