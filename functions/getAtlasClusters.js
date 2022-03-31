exports = async function(){

  const atlasApiGetClusters = await context.functions.execute('getAtlasAPITemplate', '/clusters');
  const atlasApiGetClustersResponse = await context.http.get(atlasApiGetClusters);
  const atlasClusters = EJSON.parse(atlasApiGetClustersResponse.body.text());
  
  return {atlasClusters};
  
};
