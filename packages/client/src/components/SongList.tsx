import { useEffect, useState } from "react";

interface Song {
    id?: number;
    songName: string;
    band: string;
    year: number;
}
const songList = [
    { songName: 'crazy', band: 'aerosmith', year: 1990 },
    { songName: 'with or without you', band: 'u2', year: 1988 },
    { songName: 'billy jean', band: 'michael jackson', year: 1982 },
    { songName: 'imagine', band: 'john lennon', year: 1971 },
    { songName: 'bohemian rhapsody', band: 'queen', year: 1990 },
]

export default function SongList() {
    const [songs, setSongs] = useState<Song[]>([])

    useEffect(() => {
        setSongs(songList)
        fetchAlbums()
    }, [])

    const fetchAlbums = async () => {
        console.log('fetch')
        fetch("http://localhost:3001/songs")
            .then((res) => res.json())
            .then((data) => console.log(data))
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