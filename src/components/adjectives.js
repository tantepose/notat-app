const adjectives = [
    "aggressive",
    "alert",
    "alive",
    "ancient",
    "anxious",
    "arrow",
    "attractive",
    "average",
    "bad",
    "beautiful",
    "beige",
    "better",
    "big",
    "bitter",
    "black",
    "blue",
    "brown",
    "bumpy",
    "busy",
    "careful",
    "cheap",
    "chestnut",
    "clear",
    "cold",
    "combative",
    "cool",
    "cotton",
    "crazy",
    "crooked",
    "crystal",
    "dangerous",
    "dead",
    "delicious",
    "dim",
    "drab",
    "dry",
    "dull",
    "dusty",
    "elderly",
    "excited",
    "expensive",
    "fancy",
    "fat",
    "few",
    "filthy",
    "fresh",
    "fuzzy",
    "giant",
    "good",
    "graceful",
    "granite",
    "green",
    "handsome",
    "happy",
    "hard",
    "harsh",
    "hollow",
    "hot",
    "huge",
    "hungry",
    "large",
    "lazy",
    "light",
    "long",
    "low",
    "massive",
    "mellow",
    "melodic",
    "miniscule",
    "modern",
    "new",
    "noisy",
    "oak",
    "octagonal",
    "old",
    "orange",
    "oval",
    "petite",
    "pink",
    "plain",
    "plastic",
    "poor",
    "puny",
    "purple",
    "quiet",
    "rainy",
    "red",
    "rich",
    "right",
    "round",
    "sad",
    "safe",
    "salty",
    "sane",
    "scared",
    "shallow",
    "sharp",
    "shiny",
    "short",
    "shrill",
    "shy",
    "skinny",
    "small",
    "soft",
    "solid",
    "sore",
    "sour",
    "square",
    "steep",
    "sticky",
    "strong",
    "superior",
    "sweet",
    "swift",
    "tan",
    "tart",
    "teak",
    "teeny",
    "terrible",
    "tiny",
    "tired",
    "tremendous",
    "triangular",
    "ugly",
    "unusual",
    "weak",
    "weary",
    "wet",
    "whispering",
    "white",
    "wild",
    "wooden",
    "woolen",
    "wrong",
    "yellow",
    "young",
    "american",
    "antarctic",
    "atlantic",
    "buddhist",
    "californian",
    "canadian",
    "chinese",
    "christian",
    "cuban",
    "ecuadorian",
    "english",
    "french",
    "german",
    "greek",
    "hindu",
    "indonesian",
    "italian",
    "mayan",
    "mexican",
    "pacific",
    "peruvian",
    "roman",
    "romanian",
    "satanic",
    "spanish",
    "turkish",
    "victorian",
    "welsh",
    "spicy",
    "bland",
    "minty",
    "pickled",
    "tangy",
    "fruity",
    "tasty",
    "gingery",
    "yummy",
    "boiling",
    "fluffy",
    "breezy",
    "freezing",
    "silky",
    "slick",
    "chilly",
    "greasy",
    "slimy",
    "slippery",
    "smooth",
    "cuddly",
    "icy",
    "damp",
    "loose",
    "dirty",
    "melted",
    "painful",
    "tender",
    "prickly",
    "tight",
    "encrusted",
    "rough",
    "uneven",
    "shaggy",
    "warm",
    "flaky",
    "shaky",
    "blaring",
    "screeching",
    "deafening",
    "moaning",
    "faint",
    "muffled",
    "silent",
    "hoarse",
    "mute",
    "squealing",
    "hissing",
    "purring",
    "squeaking",
    "hushed",
    "thundering",
    "husky",
    "raspy",
    "voiceless",
    "loud",
    "resonant",
    "azure",
    "gray",
    "pinkish",
    "indigo",
    "bright",
    "lavender",
    "rosy",
    "scarlet",
    "crimson",
    "magenta",
    "silver",
    "dark",
    "multicolored",
    "turquoise",
    "mustard",
    "violet",
    "gold",
    "abundant",
    "jumbo",
    "scrawny",
    "chubby",
    "little",
    "majestic",
    "tall",
    "gigantic",
    "mammoth",
    "great",
    "thin",
    "miniature",
    "immense",
    "vast",
    "blobby",
    "distorted",
    "rotund",
    "broad",
    "flat",
    "circular",
    "globular",
    "curved",
    "straight",
    "cylindrical",
    "narrow",
    "deep",
    "wide",
    "annual",
    "futuristic",
    "rapid",
    "brief",
    "historical",
    "regular",
    "daily",
    "irregular",
    "early",
    "late",
    "slow",
    "eternal",
    "speed",
    "fast",
    "speedy",
    "first",
    "fleet",
    "waiting",
    "future",
    "quick",
    "abrasive",
    "embarrassed",
    "grumpy",
    "abrupt",
    "energetic",
    "kind",
    "afraid",
    "enraged",
    "agreeable",
    "enthusiastic",
    "lively",
    "envious",
    "lonely",
    "amiable",
    "evil",
    "lucky",
    "amused",
    "mad",
    "angry",
    "exhausted",
    "manic",
    "annoyed",
    "exuberant",
    "mysterious",
    "ashamed",
    "fair",
    "nervous",
    "faithful",
    "obedient",
    "fantastic",
    "obnoxious",
    "bewildered",
    "fierce",
    "outrageous",
    "boring",
    "fine",
    "panicky",
    "brave",
    "foolish",
    "perfect",
    "callous",
    "frantic",
    "persuasive",
    "calm",
    "friendly",
    "pleasant",
    "calming",
    "frightened",
    "proud",
    "charming",
    "funny",
    "quirky",
    "cheerful",
    "furious",
    "relieved",
    "gentle",
    "repulsive",
    "comfortable",
    "glib",
    "rundown",
    "defeated",
    "glorious",
    "confused",
    "scary",
    "cooperative",
    "grateful",
    "selfish",
    "courageous",
    "grieving",
    "silly",
    "cowardly",
    "gusty",
    "splendid",
    "crabby",
    "gutless",
    "successful",
    "creepy",
    "tedious",
    "cross",
    "healthy",
    "tense",
    "cruel",
    "heinous",
    "helpless",
    "thankful",
    "hilarious",
    "thoughtful",
    "defiant",
    "thoughtless",
    "delightful",
    "hurt",
    "depressed",
    "hysterical",
    "troubled",
    "determined",
    "immoral",
    "upset",
    "disgusted",
    "impassioned",
    "disturbed",
    "indignant",
    "eager",
    "irate",
    "wicked",
    "elated",
    "itchy",
    "worried",
    "jealous",
    "zany",
    "enchanting",
    "jolly",
    "zealous",
    "famous",
    "restless",
    "agoraphobic",
    "fearless",
    "ambidextrous",
    "fertile",
    "righteous",
    "ambitious",
    "fragile",
    "ritzy",
    "amoral",
    "frank",
    "romantic",
    "angelic",
    "functional",
    "rustic",
    "brainy",
    "gabby",
    "ruthless",
    "breathless",
    "generous",
    "sassy",
    "gifted",
    "secretive",
    "helpful",
    "sedate",
    "capable",
    "hesitant",
    "careless",
    "innocent",
    "sleepy",
    "cautious",
    "inquisitive",
    "somber",
    "insane",
    "stingy",
    "clever",
    "jaunty",
    "stupid",
    "common",
    "juicy",
    "super",
    "complete",
    "macho",
    "swanky",
    "concerned",
    "manly",
    "tame",
    "tawdry",
    "curious",
    "mushy",
    "terrific",
    "naughty",
    "testy",
    "odd",
    "uninterested",
    "vague",
    "open",
    "verdant",
    "different",
    "outstanding",
    "vivacious",
    "diligent",
    "perky",
    "wacky",
    "wandering",
    "erratic",
    "powerful",
    "puzzled",
    "womanly",
    "real",
    "ablaze",
    "distinct",
    "adorable",
    "ruddy",
    "alluring",
    "elegant",
    "sloppy",
    "awkward",
    "smiling",
    "balanced",
    "sparkling",
    "spotless",
    "blonde",
    "glamorous",
    "strange",
    "bloody",
    "gleaming",
    "tacky",
    "blushing",
    "glossy",
    "clean",
    "grotesque",
    "unattractive",
    "cloudy",
    "homely",
    "unbecoming",
    "clumsy",
    "interior",
    "uncovered",
    "colorful",
    "lovely",
    "unsightly",
    "confident",
    "magnificent",
    "cracked",
    "murky",
    "watery",
    "weird",
    "crushed",
    "curly",
    "poised",
    "wiry",
    "cute",
    "pretty",
    "debonair",
    "puffy",
    "quaint",
    "zaftig",
    "accidental",
    "doubtful",
    "main",
    "achievable",
    "elementary",
    "minor",
    "advantageous",
    "nasty",
    "alcoholic",
    "groundless",
    "nutritious",
    "animated",
    "obsolete",
    "aquatic",
    "harmful",
    "optimal",
    "aromatic",
    "high",
    "organic",
    "aspiring",
    "honest",
    "premium",
    "horrible",
    "quizzical",
    "bawdy",
    "illegal",
    "biographical",
    "illegible",
    "redundant",
    "bizarre",
    "imperfect",
    "remarkable",
    "broken",
    "impossible",
    "simple",
    "internal",
    "tangible",
    "credible",
    "inventive",
    "tricky",
    "jazzy",
    "wholesale",
    "cumbersome",
    "juvenile",
    "worse",
    "disastrous",
    "legal",
    "wry",
    "dismissive",
    "logical",
    "encouraging",
    "hopeful",
    "loving",
    "pleased",
    "supportive",
    "sympathetic",
    "disgruntled",
    "guilty",
    "hostile",
    "hurtful",
    "oppressive",
    "overbearing",
    "resentful",
    "sarcastic",
    "sardonic",
    "ambivalent",
    "bashful",
    "candid",
    "horrified",
    "intelligent",
    "pragmatic",
    "political",
    "religious",
    "secular",
    "amazed",
    "bold",
    "festive",
    "free",
    "optimistic",
    "wonderful",
    "aggravated",
    "awful",
    "dreadful",
    "heavy",
    "irritated",
    "pessimistic",
    "tearful",
    "awestruck",
    "composed",
    "easygoing",
    "appreciative",
    "blissful",
    "contented",
    "ecstatic",
    "glad",
    "joyful",
    "jubilant",
    "merry",
    "respectful",
    "serene",
    "upbeat",
    "disenchanted",
    "distressed",
    "glum",
    "gloomy",
    "grouchy",
    "miserable",
    "moody",
    "sadistic",
    "accepting",
    "earnest",
    "easy",
    "evenhanded",
    "indifferent",
    "neutral",
    "nonpartisan",
    "passive",
    "reserved",
    "satisfied",
    "surprised",
    "tranquil",
    "affectionate",
    "creative",
    "imaginative",
    "polite",
    "likable",
    "gregarious",
    "diplomatic",
    "sincere",
    "giving",
    "hardworking",
    "patient",
    "dynamic",
    "loyal",
    "sensible",
    "warmhearted",
    "willing",
    "proficient",
    "persistent",
    "passionate",
    "nice",
    "plucky",
    "philosophical",
    "humorous",
    "considerate",
    "marvelous",
    "accomplished",
    "knowledgeable",
    "adept",
    "expert",
    "engaging",
    "amazing",
    "awesome",
    "blithesome",
    "excellent",
    "fabulous",
    "favorable",
    "fortuitous",
    "gorgeous",
    "incredible",
    "unique",
    "mirthful",
    "propitious",
    "rousing",
    "spectacular",
    "stellar",
    "stupendous",
    "stunning",
    "wondrous",
    "ample",
    "bountiful",
    "glistening",
    "dazzling",
    "twinkling",
    "lustrous",
    "vivid",
    "vibrant",
    "glowing",
    "shimmering",
    "glimmering",
    "glittering",
    "brilliant",
    "sleek",
    "ravishing",
    "captivating",
    "flexible",
    "independent",
    "insightful",
    "productive",
    "adventurous",
    "articulate",
    "charismatic",
    "competitive",
    "devoted",
    "educated",
    "organized",
    "relaxed",
    "responsible",
    "technological",
    "resourceful",
    "approachable",
    "qualified",
    "focused",
    "efficient",
    "personable",
    "arrogant",
    "belligerent",
    "bigoted",
    "blunt",
    "critical",
    "cynical",
    "dishonest",
    "distant",
    "greedy",
    "guarded",
    "intolerant",
    "irresponsible",
    "prejudiced",
    "prideful",
    "rude",
    "skeptical",
    "suspicious",
    "unemotional",
    "untrusting"
]

export default adjectives