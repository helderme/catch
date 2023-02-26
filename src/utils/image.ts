const getCatImage = (id: string, width: number) =>
  `https://cataas.com/cat/says/${id[0]}?size=0&width=${width}`;

export { getCatImage };
