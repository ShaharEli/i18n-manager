export const getResults = (data, strippedFilesNames, setNested) => {
  if (
    data[strippedFilesNames[0]]?.translations &&
    Object.values(data[strippedFilesNames[0]]?.translations).length > 1
  ) {
    setNested(true);
    return Object.keys(data[strippedFilesNames[0]].translations).map((key) => ({
      key,
      translations: strippedFilesNames.map((lang) => ({
        lang,
        translations: strippedFilesNames.reduce(
          (acc, curr) => ({
            ...acc,
            [curr]: data[curr].translations[key],
          }),
          {}
        ),
      })),
    }));
  } else {
    return Object.keys(data[strippedFilesNames[0]]).map((key) => ({
      key,
      translations: strippedFilesNames.reduce(
        (acc, curr) => ({ ...acc, [curr]: data[curr][key] }),
        {}
      ),
    }));
  }
};
