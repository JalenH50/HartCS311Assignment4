import Gallery from "./Gallery";

export default function Home() {
  const imageUrls = [
    '/image1.png',
    '/image2.jpeg',
    '/image3.png',
    '/image4.png',
    '/image5.jpeg',
    '/image6.png'
  ];

  return (
    <div>
      <Gallery images={imageUrls} />
    </div>
  );
};