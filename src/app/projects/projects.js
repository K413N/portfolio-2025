
export async function getProjectInfo(projectId) {
    return PROJECT_DATA[projectId]
}

const PROJECT_DATA = {
    beatclash: {
        name: 'Beatclash',
        description: 'A forumn I made using reactplayer, and mongodb.',
    },
    proceduralnightmares: {
        name: 'Procedural Nightmares',
        description: 'My frist released game on itch.io!',
    },
    gunbunnii: {
        name: 'GunBunnii',
        description: 'An FPS game I am working on',
    },
    procgen: {
        name: 'procedural generation demo',
        description: 'A small test area I did to understand procedural generation.',
    },
}