var MultiSignature = artifact.require('/MultiSignatureWallet.sol');
var SimpleStorage = artifact.require('/SimpleStorage.sol');

var owners = 
module.export = function(deployer, network, accounts){
    const owners = [accounts[0], accounts[1]];

    deployer.deploy(MultiSignature, owners, 2);
    deployer.deploy(SimpleStorage);
};