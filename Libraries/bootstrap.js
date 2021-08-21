

if (false !== process.env.DNS.includes("DNS")) {
    process.env.DNS = "stage";
}

if (false != process.env.CLUSTER_ID.includes("ltid") && false != process.env.CLUSTER_NAME.includes("ltname")) {
    process.env.CLUSTER_ID ="1";
    process.env.CLUSTER_NAME = "rapid";
}