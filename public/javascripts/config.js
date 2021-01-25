const GROUND = {
    INVALID: 255,
    IMPASSABLE: 1,

    ROAD: 2,
    ROCKY: 3,
    DIRT: 4,
    SAVANNA: 5,
    GRASS: 6,
    FOREST: 7,
    MARSH: 8,
    WEB: 9,
    WOODFLOOR: 10,
    CARPET: 11,
    CHECKER: 12,

    // CAVES
    CAVE: 13,
    FUNGUS: 14,
    SINKHOLE: 15,
    UNDERROCK: 16,
    MUD: 17,
    BRICK: 18,
    BRICK_GLOW: 19,
    TILES: 20,
    TILES_GLOW: 21,
    TRIM: 22,
    TRIM_GLOW: 23,
    FUNGUSRED: 24,
    FUNGUSGREEN: 25,

    //EXPANDED FLOOR TILES
    DECIDUOUS: 30,
    DESERT_DIRT: 31,
    SCALE: 32,

    LAVAARENA_FLOOR: 33,
    LAVAARENA_TRIM: 34,

    QUAGMIRE_PEATFOREST: 35,
    QUAGMIRE_PARKFIELD: 36,
    QUAGMIRE_PARKSTONE: 37,
    QUAGMIRE_GATEWAY: 38,
    QUAGMIRE_SOIL: 39,
    QUAGMIRE_CITYSTONE: 41,

    PEBBLEBEACH: 42,
    METEOR: 43,
    SHELLBEACH: 44,

    ARCHIVE: 45,
    FUNGUSMOON: 46,

    FARMING_SOIL: 47,

    // PUBLIC USE SPACE FOR MODS is 70 to 89 //

    //NOISE // from 110 to 127 // TODO: move noise tile range to > 255
    FUNGUSMOON_NOISE: 120,
    METEORMINE_NOISE: 121,
    METEORCOAST_NOISE: 122,
    DIRT_NOISE: 123,
    ABYSS_NOISE: 124,
    GROUND_NOISE: 125,
    CAVE_NOISE: 126,
    FUNGUS_NOISE: 127,

    UNDERGROUND: 128, // todo: incrase this to OCEAN_START once WALL_X have been removed

    WALL_ROCKY: 151,
    WALL_DIRT: 152,
    WALL_MARSH: 153,
    WALL_CAVE: 154,
    WALL_FUNGUS: 155,
    WALL_SINKHOLE: 156,
    WALL_MUD: 157,
    WALL_TOP: 158,
    WALL_WOOD: 159,
    WALL_HUNESTONE: 160,
    WALL_HUNESTONE_GLOW: 161,
    WALL_STONEEYE: 162,
    WALL_STONEEYE_GLOW: 163,

    FAKE_GROUND: 200, // todo: change to 254 and retrofit maps

    // OCEAN TILES [201, 247]
    OCEAN_START: 201, // enum for checking if tile is ocean water

    // KLEI OCEAN TILES [201, 230]
    OCEAN_COASTAL: 201,
    OCEAN_COASTAL_SHORE: 202,
    OCEAN_SWELL: 203,
    OCEAN_ROUGH: 204,
    OCEAN_BRINEPOOL: 205,
    OCEAN_BRINEPOOL_SHORE: 206,
    OCEAN_HAZARDOUS: 207,

    // MODS OCEAN TILES [231, 247]  <//PUBLIC USE SPACE FOR MODS //

    OCEAN_END: 247, // enum for checking if tile is ocean water

    OCEAN_REEF: 205,
    OCEAN_REEF_SHORE: 206
//	STILL_WATER_SHALLOW : 130,
//	STILL_WATER_DEEP : 131,
//	MOVING_WATER_SHALLOW : 132,
//	MOVING_WATER_DEEP : 133,
//	SALT_WATER_SHALLOW : 134,
//	SALT_WATER_DEEP : 135,
}

const MINIMAP_GROUND_PROPERTIES =
    [
        {id: GROUND.PEBBLEBEACH, noise_texture: "levels/textures/mini_pebblebeach.png"},
        {id: GROUND.SHELLBEACH, noise_texture: "levels/textures/mini_pebblebeach.png"},
        {id: GROUND.OCEAN_COASTAL_SHORE, noise_texture: "levels/textures/mini_water_shallow.png"},
        {id: GROUND.OCEAN_BRINEPOOL_SHORE, noise_texture: "levels/textures/mini_water_coral.png"},

        {id: GROUND.METEOR, noise_texture: "levels/textures/mini_meteor.png"},

        {id: GROUND.ROAD, noise_texture: "levels/textures/mini_cobblestone_noise.png"},
        {id: GROUND.MARSH, noise_texture: "levels/textures/mini_marsh_noise.png"},
        {id: GROUND.ROCKY, noise_texture: "levels/textures/mini_rocky_noise.png"},
        {id: GROUND.SAVANNA, noise_texture: "levels/textures/mini_grass2_noise.png"},
        {id: GROUND.GRASS, noise_texture: "levels/textures/mini_grass_noise.png"},
        {id: GROUND.FOREST, noise_texture: "levels/textures/mini_forest_noise.png"},
        {id: GROUND.DIRT, noise_texture: "levels/textures/mini_dirt_noise.png"},
        // { id: GROUND.WOODFLOOR,  noise_texture: "levels/textures/mini_woodfloor_noise.png" },
        {id: GROUND.WOODFLOOR, noise_texture: "levels/textures/red.png"},
        {id: GROUND.CARPET, noise_texture: "levels/textures/mini_carpet_noise.png"},
        {id: GROUND.CHECKER, noise_texture: "levels/textures/mini_checker_noise.png"},
        {id: GROUND.DECIDUOUS, noise_texture: "levels/textures/mini_deciduous_noise.png"},
        {id: GROUND.DESERT_DIRT, noise_texture: "levels/textures/mini_desert_dirt_noise.png"},
        {id: GROUND.SCALE, noise_texture: "levels/textures/mini_dragonfly_noise.png"},

        {id: GROUND.CAVE, noise_texture: "levels/textures/mini_cave_noise.png"},
        {id: GROUND.FUNGUS, noise_texture: "levels/textures/mini_fungus_noise.png"},
        {id: GROUND.FUNGUSRED, noise_texture: "levels/textures/mini_fungus_red_noise.png"},
        {id: GROUND.FUNGUSGREEN, noise_texture: "levels/textures/mini_fungus_green_noise.png"},
        {id: GROUND.SINKHOLE, noise_texture: "levels/textures/mini_sinkhole_noise.png"},
        {id: GROUND.UNDERROCK, noise_texture: "levels/textures/mini_rock_noise.png"},
        {id: GROUND.MUD, noise_texture: "levels/textures/mini_mud_noise.png"},
        {id: GROUND.BRICK, noise_texture: "levels/textures/mini_ruinsbrick_noise.png"},
        {id: GROUND.TILES, noise_texture: "levels/textures/mini_ruinstile_noise.png"},
        {id: GROUND.TRIM, noise_texture: "levels/textures/mini_ruinstrim_noise.png"},

        {id: GROUND.ARCHIVE, noise_texture: "levels/textures/Ground_noise_archive_mini.png"},
        {id: GROUND.FUNGUSMOON, noise_texture: "levels/textures/Ground_noise_moon_fungus_mini.png"},


        {id: GROUND.LAVAARENA_TRIM, noise_texture: "levels/textures/lavaarena_trim_mini.png"},
        {id: GROUND.LAVAARENA_FLOOR, noise_texture: "levels/textures/lavaarena_floor_mini.png"},

        {id: GROUND.QUAGMIRE_PARKFIELD, noise_texture: "levels/textures/quagmire_parkfield_mini.png"},
        {id: GROUND.QUAGMIRE_PEATFOREST, noise_texture: "levels/textures/quagmire_peatforest_mini.png"},
        {id: GROUND.QUAGMIRE_PARKSTONE, noise_texture: "levels/textures/quagmire_parkstone_mini.png"},
        {id: GROUND.QUAGMIRE_CITYSTONE, noise_texture: "levels/textures/quagmire_citystone_mini.png"},
        {id: GROUND.QUAGMIRE_GATEWAY, noise_texture: "levels/textures/quagmire_gateway_mini.png"},
        {id: GROUND.QUAGMIRE_SOIL, noise_texture: "levels/textures/quagmire_soil_mini.png"},
        {id: GROUND.FARMING_SOIL, noise_texture: "levels/textures/quagmire_soil_mini.png"},

        {id: GROUND.OCEAN_COASTAL, noise_texture: "levels/textures/ocean_noise.png"},
        {id: GROUND.OCEAN_BRINEPOOL, noise_texture: "levels/textures/ocean_noise.png"},
        {id: GROUND.OCEAN_SWELL, noise_texture: "levels/textures/ocean_noise.png"},
        {id: GROUND.OCEAN_ROUGH, noise_texture: "levels/textures/ocean_noise.png"},
        {id: GROUND.OCEAN_HAZARDOUS, noise_texture: "levels/textures/ocean_noise.png"},
    ]