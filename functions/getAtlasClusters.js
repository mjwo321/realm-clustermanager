exports = async function(){

  const atlasApiGetClusters = await context.functions.execute('getAtlasAPITemplate', '/clusters');
  const atlasApiClustersResponse = await context.http.get(atlasApiGetClusters);
  const atlasClusters = EJSON.parse(atlasApiClustersResponse.body.text());
  
  
  return {atlasClusters};
  
};