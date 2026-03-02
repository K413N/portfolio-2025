export async function getProjectInfo(projectId) {
  return PROJECT_DATA[projectId];
}

export async function getAllProjects() {
  return Object.entries(PROJECT_DATA).map(([id, data]) => ({
    id,
    ...data,
  }));
}


const PROJECT_DATA = {
  beatclash: {
    name: "Beatclash",
    subtitle: "A community forum powered by react-player, and MongoDB",
    description:
      "Beatclash is a forum-style web application built around video sharing and discussion. Users can post content with embedded video playback powered by ReactPlayer, engage in threaded conversations, and build a community around shared interests. The backend runs on MongoDB for flexible document storage, handling user accounts, posts, comments, and media references.",
    thumbnail: "assets/projects/thumbnails/beatclash_thumbnail.png",
    videoUrl: "/videos/beatclash-commentary.mp4",
    videoPoster: "/images/beatclash-poster.jpg",
    role: "Solo Developer",
    timeline: "2024",
    status: "Complete",
    tags: ["React", "MongoDB", "ReactPlayer", "Node.js", "Full Stack"],
    stats: [
      { value: "3", label: "Core Features" },
      { value: "REST", label: "API Architecture" },
      { value: "NoSQL", label: "Database Type" },
    ],
    features: [
      "Embedded video playback via ReactPlayer",
      "Threaded comment and discussion system",
      "User authentication and profiles",
      "MongoDB document-based data storage",
      "Responsive forum layout",
    ],
    techStack: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#FFFFFF" },
      { name: "MongoDB", color: "#47A248" },
      { name: "ReactPlayer", color: "#E34F26" },
      { name: "Node.js", color: "#8CC84B" },
    ],
    challenges:
      "This was the final project at Corcordia Bootcamps. I had very little knowledge, and had to figure out everything about using React with a database in a 2 week time limit.",
    lessons:
      "This project gave me a much deeper understanding of full-stack data flow — from MongoDB to API routes to rendering dynamic content on the frontend. I also learned how important it is to plan your data models early. I also made the mistake of trying to touch APIs directly to play media. I was reading through the APIs of soundcloud, spotify, youtube, when all of a sudden I realised I didn't need any of that. I just installed React-Player and embedded it into my forumn posts so users can post any media it can pick up, and a player will show.",
    images: [],
    links: [
      // { label: "Live Site", url: "https://beatclash.vercel.app" },
      // { label: "Source Code", url: "https://github.com/you/beatclash" },
    ],
  },

  proceduralnightmares: {
    name: "Procedural Nightmares",
    subtitle: "A horror game built on procedural generation — my first published title",
    description:
      "Procedural Nightmares is a horror game where every playthrough generates a unique environment. The levels, item placements, and enemy encounters are all procedurally driven so no two runs feel the same. This was my first completed and publicly released game, published on itch.io.",
    thumbnail: "assets/projects/thumbnails/procedural_nightmares_thumbnail.png",
    videoUrl: "/videos/proceduralnightmares-commentary.mp4",
    videoPoster: "/images/proceduralnightmares-poster.jpg",
    role: "Solo Developer",
    timeline: "2023 — 2024",
    status: "Released",
    tags: ["Godot Engine", "GDScript", "Horror", "Procedural Generation", "itch.io"],
    stats: [
      { value: "1st", label: "Published Game" },
      { value: "∞", label: "Unique Layouts" },
      { value: "3D", label: "Perspective" },
    ],
    features: [
      "Procedurally generated level layouts",
      "Randomized item and enemy placement",
      "Atmosphere-driven horror design",
      "Replayable with unique runs each time",
      "Published and publicly available on itch.io",
    ],
    techStack: [
      { name: "Godot Engine", color: "#7B68EE" },
      { name: "GDScript", color: "#68D391" },
      { name: "Blender", color: "#F5792A" },
      { name: "Aseprite", color: "#ffffff" },
    ],
    challenges:
      "I had to figure out not only how to apply my procedural generation techniques to a 3D grid map, but also figure out how to generate navigation meshes to newly generated worlds.",
    lessons:
      "Shipping a game taught me more than any tutorial ever could. Scoping, polish, bug fixing under pressure, and actually hitting 'publish' are all skills you can only learn by doing. I also learned that playtesting with other people is non-negotiable — what feels obvious to you as the developer is completely invisible to a fresh player, and some people can go through the entire game and miss one of the core features! (The upgrade guy)",
    images: [],
    links: [
      { label: "Play on itch.io", url: "https://kalengames.itch.io/procedural-nightmares" },
    ],
  },

  gunbunnii: {
    name: "GunBunnii",
    subtitle: "A fast-paced first-person shooter in active development",
    description:
      "GunBunnii is an FPS built from the ground up with a focus on tight gunplay and responsive movement. The project is a deep dive into first-person mechanics — weapon systems, hit detection, player controllers, and level design all built in Godot Engine. It's currently in active development with core systems functional and content being added regularly.",
    thumbnail: "assets/projects/thumbnails/gunbunnii_thumbnail.png",
    videoUrl: "/videos/gunbunnii-commentary.mp4",
    videoPoster: "/images/gunbunnii-poster.jpg",
    role: "Solo Developer",
    timeline: "2022 — Present",
    status: "In Development",
    tags: ["Godot Engine", "GDScript", "Blender", "FPS", "3D", "Game Design"],
    stats: [
      { value: "FPS", label: "Genre" },
      { value: "3D", label: "Perspective" },
      { value: "WIP", label: "Current Phase" },
    ],
    features: [
      "Custom first-person player controller",
      "Weapon system with multiple gun types",
      "Hit detection and damage feedback",
      "Level design and environment art",
      "Enemy AI behavior system",
    ],
    techStack: [
      { name: "Godot Engine", color: "#7B68EE" },
      { name: "GDScript", color: "#68D391" },
      { name: "Blender", color: "#F5792A" },
      { name: "Trenchbroom", color: "#FF0000" },
      { name: "Aseprite", color: "#ffffff" },
    ],
    challenges:
      "This project was my first dive into the deep-end. Every aspect I had to learn from scratch. On top of that I was keen on making my levels using trenchbroom, so I had to learn how to use that quake level editing software as well.",
    lessons:
      "Building an FPS from scratch taught me how much invisible work goes into games that feel 'simple'. Every system — aiming, recoil, ammo management, enemy reactions — is its own rabbit hole. I learned to prototype each system in isolation before integrating, which saved me from constantly breaking things when adding new features.",
    images: [],
    links: [
      // { label: "Devlog", url: "https://you.itch.io/gunbunnii/devlog" },
      // { label: "Source Code", url: "https://github.com/you/gunbunnii" },
    ],
  },

  procgen: {
    name: "Procedural Generation Demo",
    subtitle: "A sandbox for learning and testing procedural generation techniques",
    description:
      "This project is a focused technical demo built to explore procedural generation from the ground up. It served as a learning sandbox where I could experiment with noise algorithms, terrain generation, and rule-based placement systems. The goal wasn't to ship a product but to deeply understand the systems that would later feed into larger projects like Procedural Nightmares.",
    thumbnail: "assets/projects/thumbnails/procedural_gen_thumbnail.png",
    videoUrl: "/videos/procgen-commentary.mp4",
    videoPoster: "/images/procgen-poster.jpg",
    role: "Solo Developer",
    timeline: "2023",
    status: "Complete",
    tags: ["Godot Engine", "GDScript", "Procedural Generation", "Technical Demo"],
    stats: [
      { value: "∞", label: "Unique Outputs" },
      { value: "3D", label: "Generation Space" },
    ],
    features: [
      "Plant generation based on settings",
      "Randomization settings",
      "Real-time parameter adjustment",
      "Visual debugging GUI",
      "Modular generation pipeline",
    ],
    techStack: [
      { name: "Godot", color: "#7B68EE" },
      { name: "GDScript", color: "#68D391" },
    ],
    challenges:
      "The initial approach generated everything in a single frame, which tanked performance immediately at any meaningful scale. I had to rethink the architecture to generate in chunks over multiple frames, which introduced timing and ordering issues that took real effort to sort out cleanly.",
    lessons:
      "This demo taught me that procedural generation is as much about constraints as it is about randomness. I also learned how valuable creating my own visual debugging tools are. Being able to see the real values overlaid on the generated output made it visually easier to understand what was going on. In the future I may make tools that look like this for other games for debugging purposes.",
    images: [],
    links: [
      // { label: "Source Code", url: "https://github.com/you/procgen-demo" },
    ],
  },
};

