require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remind humble install casino sure tennis'; 
let testAccounts = [
"0xfc47389966b69ce5a6d40af578814d587d5aa3fa9b9803a34f2723b96ac73a01",
"0x1db8d9d8a1d588ca4f479af7e4b89c31d3c926c141f609037b6d09b3021241e9",
"0x4b048c945077c142e9ea11a97dcdc0c5ef112ace7b8aa9075f8ad32e9e99fc4c",
"0xe52d45c2427b2ee7ad7890e13aa5641a063927e7a3a36583fbc3154409df70c3",
"0x5c0141307dcaae00997d8c1b54c73124e2d87b58e5e58cf9eba33b54eb67c98e",
"0x37aa992ad4c1c2bfe07a1d8523d1e1ab9d87302c9749934b2750df39121af178",
"0xf2bbd838811e1171ae17f19c36628fcb4a6c6c8efac4ee368051ca4824181f50",
"0x97946cc8bf40ae2ec01d9eb53f68ce4f0a990beea221e24c95673a432b066365",
"0xa14a30c1217ea1822a5e62d2e9c156bbb4d2d1de7f4e2e4a423d0f6501674bc6",
"0xb164b48ab7649a9138823a95babe236e20fc2c616d1e842345dcfb14177c266e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


