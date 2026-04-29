const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://pixen-pink.vercel.app/data.json");
  const photos = await res.json();

  const photo = photos.find(p => p.id == id);
  console.log
  return (
    <div>
      <h1> {photo.title} </h1>
      <p> {photo.imageUrl} </p>
    </div>
  );
};

export default PhotoDetailsPage;
