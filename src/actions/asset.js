export const SET_CURRENT_ASSET = 'SET_CURRENT_ASSET';

export function setCurrentAsset(asset) {
  return {
    currentAssetObj: asset,
    type: SET_CURRENT_ASSET
  }
}
