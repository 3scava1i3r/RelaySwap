/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');

// Change private keys accordingly - ONLY FOR DEMOSTRATION PURPOSES - PLEASE STORE PRIVATE KEYS IN A SAFE PLACE
// Export your private key as
//       export PRIVKEY=0x.....
const privateKey = process.env.PRIVKEY;
const privateKeyDev =
   '';

module.exports = {
   defaultNetwork: 'hardhat',

   networks: {
      hardhat: {},

      // moonbase: {
      //    url: 'https://rpc.api.moonbase.moonbeam.network',
      //    accounts: [privateKey],
      //    chainId: 1287,
      // },
      // dev: {
      //    url: 'http://127.0.0.1:9933',
      //    accounts: [privateKeyDev],
      //    network_id: '1281',
      //    chainId: 1281,
      // },
      mumbai: {
         url: 'https://polygon-mumbai.g.alchemy.com/v2/bDfskAbFMc3bOFl3RRtsuz7VhYdy1JFn',
         accounts: ["6380844af321b0311da98d5b041e9fbc6cf778aad24072955341fb18eab95946"],
         chainId: 80001
         
      }
   },
   solidity: {
      compilers: [
         {
            version: '0.5.16',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
         {
            version: '0.6.6',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
      ],
   },
   paths: {
      sources: './contracts',
      cache: './cache',
      artifacts: './artifacts',
   },
   mocha: {
      timeout: 20000,
   },
};
