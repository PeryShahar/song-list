import { useEffect, useState } from "react";
import axios from "axios";

interface Song {
  id: number;
  songName: string;
  band: string;
  year: number;
}

export default function SongList() {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      const { data } = await axios.get<Song[]>("http://localhost:3001/songs");
      setSongs(data);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  return (
    <main>
      <h1 className="song-list-title">Song List</h1>
      <table className="song-list-table">
        <thead>
          <tr>
            <th>Song name</th>
            <th>Band</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {songs?.map((song) => (
            <tr key={song.id}>
              <td>{song.songName}</td>
              <td>{song.band}</td>
              <td>{song.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
