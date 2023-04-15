const unescapeUnicode = (str: string) => {
  return str
    .replace(/\\u([a-fA-F0-9]{4})/g, (x, y) =>
      String.fromCharCode(parseInt(y, 16)),
    )
    .replace(/\\n/g, '\n');
};

export default unescapeUnicode;
