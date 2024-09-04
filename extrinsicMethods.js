const { ApiPromise, WsProvider } = require('@polkadot/api');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    // Prompt for the RPC URL
    const rpcUrl = await new Promise((resolve) => {
        rl.question('Enter the RPC URL: ', (url) => {
            resolve(url);
        });
    });

    // Create provider and API
    const provider = new WsProvider(rpcUrl);
    const api = await ApiPromise.create({ provider });

    // List all available extrinsics methods with arguments
    const modules = Object.keys(api.tx);
    modules.forEach((module) => {
        const methods = Object.keys(api.tx[module]);
        console.log(`Module: ${module}`);
        methods.forEach((method) => {
            // Get method metadata to display arguments
            const methodMeta = api.tx[module][method].meta;
            const args = methodMeta.args.map(arg => `${arg.name}: ${arg.type}`);
            console.log(`- Method: ${method}`);
            if (args.length > 0) {
                console.log(`  Arguments: ${args.join(', ')}`);
            } else {
                console.log('  No arguments');
            }
        });
    });

    // Clean up
    await api.disconnect();
    rl.close();
}

main().catch(console.error);
