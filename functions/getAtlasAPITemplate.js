exports = function(apiPath='/', body={}){
  const { projectID, publicKey } = context.values.get("AtlasAPIKey");
  return { 
    scheme: 'https', 
    host: 'cloud.mongodb.com', 
    path: 'api/atlas/v1.0/groups/' + projectID + apiPath, 
    username: publicKey, 
    password: context.values.get("AtlasAPIPrivateKey"),
    headers: {'Content-Type': ['application/json'], 'Accept-Encoding': ['bzip, deflate']}, 
    digestAuth:true,
    body,
    encodeBodyAsJSON: true
  };
};