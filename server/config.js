config = {
    "ServerPort": 8000,                              //port to listen on
    "ServerPrivateKey": './certs/ServerCert.key',   //private key corresponding to the cert
    "ServerCert": './certs/ServerCert.crt',        //server certificate
    "RootCA": './certs/ClientRootCA.crt',         //CA to check incoming client certs against
    "EnableAuthetification": true                //enable reqesting client cert and reject unauth  
}
module.exports = config;