
export async function getProjectInfo(projectId) {
    return PROJECT_DATA[projectId]
}

const PROJECT_DATA = {
    beatclash: {
        name: 'Beatclash',
        description: 'A forumn I made using reactplayer, and mongodb.',
        thumbnail: 'assets/projects/thumbnails/beatclash_thumbnail.png',
    },
    proceduralnightmares: {
        name: 'Procedural Nightmares',
        description: 'My frist released game on itch.io!',
        thumbnail: 'assets/projects/thumbnails/procedural_nightmares_thumbnail.png',
    },
    gunbunnii: {
        name: 'GunBunnii',
        description: 'An FPS game I am working on',
        thumbnail: 'assets/projects/thumbnails/gunbunnii_thumbnail.png',
    },
    procgen: {
        name: 'procedural generation demo',
        description: 'A small test area I did to understand procedural generation.',
        thumbnail: 'assets/projects/thumbnails/procedural_gen_thumbnail.png',
    },
}