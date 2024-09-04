# Substrate Extrinsics Explorer

This Node.js script allows you to explore and list all available extrinsics methods for a Substrate-based blockchain node. It provides a convenient way to discover the modules and methods exposed by the node's runtime.

## Features

- Connect to a Substrate node using a custom RPC URL
- List all available extrinsics modules and methods
- User-friendly command-line interface

## Prerequisites

Before running this script, ensure that you have the following:

- Node.js installed on your machine
- `@polkadot/api` package installed (`npm install @polkadot/api`)

## Usage

1. Clone this repository or download the script file.

2. Open a terminal and navigate to the directory containing the script.

3. Run the script using the following command:
   ```
   node extrinsicMethods.js
   ```

4. When prompted, enter the RPC URL of the Substrate node you want to connect to. For example:
   ```
   Enter the WS/WSS RPC URL (ex: wss://rpc.devolvedai.com)
   ```

5. The script will connect to the specified node and retrieve the list of available extrinsics modules and methods.

6. The output will be displayed in the console, showing each module, its corresponding methods, and the arguments it needs to pass. For example:
   ```
Module: baseFee
- Method: setBaseFeePerGas
  Arguments: fee: U256
- Method: setElasticity
  Arguments: elasticity: Permill
Module: palletCounter
- Method: mint
  Arguments: account: AccountId32, amount: u128
- Method: burn
  Arguments: account: AccountId32, amount: u128
- Method: lock
  Arguments: amount: u128
- Method: unlock
  Arguments: amount: u128
- Method: checkEvmBalance
  Arguments: evmAddress: H160
- Method: substrateToEvm
  Arguments: evmAddress: H160, amount: u128, add: bool
- Method: evmToSubstrate
  Arguments: evmAddress: H160, amount: U256, subtract: bool, signature: SpCoreEcdsaSignature
   ...
   ```

7. After listing all the extrinsics methods, the script will automatically disconnect from the node.

## Benefits

This script provides several benefits for developers and users working with Substrate-based blockchains:

- **Exploration**: It allows you to easily explore and discover the available extrinsics modules and methods exposed by a Substrate node's runtime. This is particularly useful when working with custom or unfamiliar runtimes.

- **Convenience**: Instead of manually querying the node's metadata or referring to documentation, you can quickly retrieve the list of extrinsics methods with a single command.

- **Flexibility**: The script prompts you to enter the RPC URL, allowing you to connect to any Substrate node of your choice. This enables you to explore different networks or custom nodes effortlessly.

- **Integration**: The script can be easily integrated into your development workflow or used as a starting point for building more advanced tools and applications that interact with Substrate-based blockchains.

## License

This script is released under the [MIT License](LICENSE).

Feel free to modify and adapt the script to suit your specific needs. If you have any questions or suggestions, please open an issue or submit a pull request.

Thank you!
