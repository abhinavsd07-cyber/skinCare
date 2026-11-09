const dns = require('dns');
const util = require('util');
const resolveSrv = util.promisify(dns.resolveSrv);
const resolveTxt = util.promisify(dns.resolveTxt);

async function getConnectionString() {
    const cluster = 'cluster0.ebeizc7.mongodb.net';
    try {
        console.log(`Resolving SRV for _mongodb._tcp.${cluster}...`);
        const srvRecords = await resolveSrv(`_mongodb._tcp.${cluster}`);
        console.log('SRV Records:', srvRecords);

        console.log(`Resolving TXT for ${cluster}...`);
        const txtRecords = await resolveTxt(cluster);
        console.log('TXT Records:', txtRecords);

        if (srvRecords && srvRecords.length > 0) {
            const hosts = srvRecords.map(record => `${record.name}:${record.port}`).join(',');
            let txtOptions = '';
            if (txtRecords && txtRecords.length > 0) {
                txtOptions = txtRecords[0].join('');
            }
            const connectionString = `mongodb://${hosts}/skincare?ssl=true&${txtOptions}`;
            console.log('\n--- Direct Connection String ---');
            console.log(connectionString);
        } else {
            console.log('No SRV records found.');
        }

    } catch (err) {
        console.error('Error:', err);
    }
}

getConnectionString();
