var MultiSignatureWallet = artifact.require('/MultiSignatureWallet.sol');
var SimpleStorage = artifact.require('/SimpleStorage.sol');

module.export = function(deployer){
    deployer.deploy(MultiSignatureWallet);
}
module.export = function(deployer){
    deployer.deploy(SimpleStorage);
}