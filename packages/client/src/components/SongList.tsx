import { useEffect, useState } from "react";
import axios from "axios";

interface Song {
    id?: number;
    songName: string;
    band: string;
    year: number;
}

export default function SongList() {
    const [songs, setSongs] = useState<Song[]>([])

    useEffect(() => {
        const data = [
            { songName: 'crazy', band: 'aerosmith', year: 1990 },
            { songName: 'with or without you', band: 'u2', year: 1988 },
            { songName: 'billy jean', band: 'michael jackson', year: 1982 },
            { songName: 'imagine', band: 'john lennon', year: 1971 },
            { songName: 'bohemian rhapsody', band: 'queen', year: 1990 },
        ]

        setSongs(data)
        // fetchAlbums()
    }, [])

    const fetchAlbums = async () => {
        const data = axios.get('http://localhost:3000/songs');
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