exports = async function(clusterName, params) {
  
  const mdb = context.services.get('mongodb-atlas');
  const collectionLog = mdb.db("clustermanager").collection("log");

  
  const atlasApiUpdateClusters = await context.functions.execute('getApiTemplate', '/clusters/'+clusterName, params);
  const atlasApiUpdateClustersResponse = await context.http.patch(atlasApiUpdateClusters);
  const atlasCluster = EJSON.parse(atlasApiUpdateClustersResponse.body.text());
  
  collectionLog.insertOne(atlasCluster);
  
  return {atlasCluster};
  
}