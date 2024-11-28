import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/XkUJIT9h5yjKIMxTwokkG9jhmEzuQXr4vnxdsBbNUa6StVel",
  "https://utfs.io/f/XkUJIT9h5yjKEnMvHOUtlrBRVhGubFg35TjU1AkNaw0QWKHC",
  "https://utfs.io/f/XkUJIT9h5yjKEnMvHOUtlrBRVhGubFg35TjU1AkNaw0QWKHC",
  "https://utfs.io/f/XkUJIT9h5yjK5IhEetWXUnHSwNzLx8WkYyD7Jcamu5P6RoEe",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={`firebase icon ${image.id}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
