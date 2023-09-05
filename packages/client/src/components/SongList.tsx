import { useEffect, useState } from "react";
import axios from 'axios';

interface Song {
    id: number;
    songName: string;
    band: string;
    year: number;
}

export default function SongList() {
    const [songs, setSongs] = useState<Song[]>([])

    useEffect(() => {
        fetchAlbums()
    }, [])

    const fetchAlbums = async () => {
        const { data } = await axios.get<Song[]>("http://localhost:3001/songs")
        setSongs(data)
    }

    return <main>
        <h1 className="song-list-title">Song List</h1>
        <table>
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
    {/* {data?.data as any} */ }

}