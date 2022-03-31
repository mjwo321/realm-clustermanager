exports = async function(){

  const clusterNames = context.values.get("AtlasClusterNamesForPauseAndResume");
  const params = { paused: false }
 
  const results = [];
 
  for (const clusterName of clusterNames) {
    const result = await context.functions.execute('updateAtlasCluster', clusterName, params);
    results.push[result];
  }
  
  return {results};
};