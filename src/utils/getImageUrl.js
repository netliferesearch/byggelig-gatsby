import isNotEmptyObject from './isNotEmptyObject'
export default data => {
  const {
    sanityArticle: {
      introImage: {
        asset,
      } = {}
    } = {}
  } = data;
  return (asset && isNotEmptyObject(asset) && asset.url) ? asset.url : '';
}
