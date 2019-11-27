export default (verifyObject) => {
  if (verifyObject && verifyObject.constructor === Object) {
    return Object.keys(verifyObject).length > 0;
  }
  if (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'production') {
    console.warn(
      `[isNotEmptyObject]: The object being verified is not an object: ${verifyObject}`,
    );
  }
  return null;
}