/* eslint no-bitwise:0 */

module.exports = (fpath, partCounter) => {
  const ext = fpath.slice(((fpath.lastIndexOf('.') - 1) >>> 0) + 2);

  let newFilename;

  if (ext) {
    newFilename = fpath.replace(`.${ext}`, `${partCounter}.${ext}`);
  } else {
    newFilename = `${fpath}${partCounter}`;
  }

  return newFilename;
};
