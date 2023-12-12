import Image from "next/image";

const getHeroImageDetails = (dataObject) => {
  if (!dataObject || !dataObject.fields || !dataObject.fields.file) {
    return { imageUrl: null, width: null, height: null, altText: null };
  }

  const imageUrl = `https:${dataObject.fields.file.url}`;
  const altText = dataObject.fields.file.fileName;
  const { width, height } = dataObject.fields.file.details.image;

  return { imageUrl, width, height, altText };
};

const renderHeroSection = (dataObject) => {
  const { imageUrl, width, height, altText } = getHeroImageDetails(dataObject);

  if (!imageUrl) return null;

  return <Image alt={altText} src={imageUrl} height={height} width={width} />;
};

export default renderHeroSection;
