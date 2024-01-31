import { PUBLIC_API_URL } from '$env/static/public';
import { getAccessToken } from '$lib/auth/service';
import type { Chord } from './types';

type RawChord = {
    artist: string;
    title: string;
    url: string;
    creationDate: number;
    tags: string[];
};

const getType = (chord: RawChord) => {
    const url = chord.url;
    if (url.includes('.doc')) {
        return 'doc';
    }
    if (url.includes('.pdf')) {
        return 'pdf';
    }
    if (url.includes('youtube')) {
        return 'youtube';
    }
    return 'link';
};

export const getSongbook = async (): Promise<Chord[]> => {
    const url = PUBLIC_API_URL + '/chords/getAll';

    let chords = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(await response.text());
    });

    return chords.map((chord: RawChord) => {
        return {
            ...chord,
            type: getType(chord)
        };
    });
};

export const uploadNewSong = async (data: {
    artist: string;
    title: string;
    url: string;
    tags: string[];
}) => {
    const url = PUBLIC_API_URL + '/chords/addEntry';
    const token = await getAccessToken();
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }).then(async (response) => {
        if (response.ok) {
            return;
        }
        throw new Error(await response.text());
    });
};
