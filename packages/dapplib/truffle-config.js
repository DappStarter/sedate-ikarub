require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan regret pulse comic install bag army gasp'; 
let testAccounts = [
"0x7ea2d7ce9af524f06e2328b7623a64c8ef2c1528d1247db02da4120840c53a63",
"0xe2d73566826a525a97813cbb16b89c69fcd0f6d927b8ce493af37723eae86c92",
"0xf06651caa1b67762dec31980ffa05e89e10ef5ff0071c52d206480182b354e4e",
"0x83fed5993ec819e8cba0aa916af65e255a05f654caacdf02754ed1bebd4e38f6",
"0xa096f9a5b8a9d5b70804a90b6910c3a04d7dd31d572918b5456be7325bce498c",
"0x4ddbb348c797234500d2f34f9b0defae5807f98128facc6155da160781525bf1",
"0x5a611101597f82b85681c72a1a75dc46575ae0c3fc12c9ac321026008b9df905",
"0x7108d19fb9c413549092c82586d937b887fe93d0aa4a9b4e852c6b83dfd87849",
"0x10f6ffe87fb0bebda1d6143bb3fd828ccd3922b15650803729c0ce3d28807a9d",
"0xddaf5e21d24d9325020296baf7010c375141a0e5ce9245ce7872746f44ed4c10"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
