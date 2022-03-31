exports = async function(clusterName, params) {
  
  const mdb = context.services.get('mongodb-atlas');
  const collectionLog = mdb.db("clustermanager").collection("log");
  
  const atlasApiUpdateClusters = await context.functions.execute('getAtlasAPITemplate', '/clusters/'+clusterName, params);
  const atlasApiUpdateClustersResponse = await context.http.patch(atlasApiUpdateClusters);
  const atlasCluster = EJSON.parse(atlasApiUpdateClustersResponse.body.text());
  
  const log = collectionLog.insertOne(atlasCluster);
  
  return {log};
  
}