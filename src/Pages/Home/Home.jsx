import "../../index.css";
import bg from "../../bg.jpg";

export default function Home() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat px-3"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex items-center justify-center h-[calc(100vh-100px)] flex-col gap-10">
        <h1 className="sm:text-7xl text-6xl font-bold">
          اهلا بِيكَ فِي مَوْقِعِ عَلَّمنِي
        </h1>
        <p className="text-2xl font-bold">
          موقع عَلَّمنِي هو موقع تعليمي للأطفال
        </p>
      </div>
    </div>
  );
}
