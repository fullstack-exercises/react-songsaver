import FormAddSong from "../Form/FormAddSong";
import TableHead from "../Table/TableHead";
import TableBody from "../Table/TableBody";

function SongOverview() {
  return (
    <div className="container mx-auto">
      <h1 className="uppercase text-2xl lg:text-[64px] mt-10 lg:mt-20 text-indigo-800 font-bold text-center">
        Favorite Songs
      </h1>

      <FormAddSong />

      <table className="min-w-full">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}

export default SongOverview;
