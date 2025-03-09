import { Video } from "@/models/video";
import { DeleteVideo, UpdateVideo } from "./buttons";

export default function Card({ id, title, title_en, description, description_en, url, thumbnail }: Video) {
  return (
    <>
      <div className="relative flex items-center justify-center text-white text-3xl rounded-md text-mono w-48 h-48 bg-adminBackground border-[2px] border-background hover:bg-adminForeground hover:border-white">
        <div className="w-2/3 h-full object-cover">Thumbnail</div>
        <UpdateVideo
          id={id}
          title={title}
          title_en={title_en}
          description={description}
          description_en={description_en}
          url={url}
          thumbnail={thumbnail}
        />
        <DeleteVideo id={id} />
      </div>
    </>
  )
}