export const validCharacterClassesAsDictionary = [
    "The Chosen"=0,
    "The Divine"=1,
    "The Expert"=2,
    "The Flake"=3,
    "The Initiate"=4,
    "The Monstrous"=5,
    "The Mundane"=6,
    "The Spooky"=7,
    "The Wronged"=8,
];

export const validCharacterClassesAsObjects = [
    {
        id: 0,
        name: "The Chosen",
    },
    {
        id: 1,
        name: "The Divine",
    },
    {
        id: 2,
        name: "The Expert",
    },
    {
        id: 3,
        name: "The Flake",
    },
    {
        id:4, 
        name: "The Initiate"
    },
    {
        id:5,
        name: "The Monstrous"
    },
    {
        id:6,
        name: "The Mundane"
    },
    {
        id:7,
        name: "The Spooky"
    },
    {
        id:8,
        name:"The Wronged"
    }
];

export const improvementEffectTypes = {
    ADD_TO_MOVE_COUNT: "ADD_TO_MOVE_COUNT",
    PLUS_SHARP_MAX_2: "PLUS_SHARP_MAX_2",
    PLUS_CHARM_MAX_3: "PLUS_CHARM_MAX_3",
    PLUS_COOL_MAX_2: "PLUS_COOL_MAX_2",
    PLUS_TOUGH_MAX_2: "PLUS_TOUGH_MAX_2",

};

export const classDetails = [
    {
        id: 0,
        name: "The Chosen",
        subText: "Your birth was prophesized. You are the Chosen One, and with your abilities you can save the world. If you fail, all will be destroyed. It all rests on you. Only you.",
        classDetails = {
            allMoves: [
                {
                    classMoveId: 0,
                    name: "Destiny's Plaything",
                    description: "At the beginning of each mystery, roll +Weird to see what is revealed about your immediate future. On a 10+, the Keeper will reveal a useful detail about the coming mystery. On a 7-9 you get a vague hint about it. On a miss, something bad is going to happen to you.",
                    free: true
                },
                {
                    classMoveId: 1,
                    name: "I'm Here For A Reason",
                    description: "There's something you are destined to do. Work out the details with the Keeper, based on your fate. You cannot die until it comes to pass. If you die in play, then you must spend a Luck point. You will then, somehow, recover or get returned to life. Once your task is done (or you use up all your Luck), all bets are off.",
                    free: true
                },
                {
                    classMoveId: 2,
                    name: "Devastating",
                    description: "Whenever you inflict harm, you may inflict +1 harm."
                },
                {
                    classMoveId: 3,
                    name: "Acceptance",
                    description: "When your fate rears its ugly head, and you act in accordance with any of your Fate tags (either heroic or doom) then mark experience."
                },
                {
                    classMoveId: 4,
                    name: "The Big Entrance",
                    description: "When you make a showy entrance into a dangerous situation, roll +Cool. On 10+ everyone stops to watch and listen to you until you finish your opening speech. On a 7-9, you pick one person, minion, or monster to stop, watch and listen until you finish talking. On a miss, you're marked as the biggest threat by all."
                },
                {
                    classMoveId: 5,
                    name: "Resilience",
                    description: "You heal faster than normal people. Any time your harm gets healed, heal an extra point. Additionally, your wounds count as 1-harm less for the purpose of the Keeper's harm moves."
                },
                {
                    classMoveId: 6,
                    name: "Invincible",
                    description: "You always count as having 2-armour. This doesn't stack with other protection."
                }
            ],
            ratingsOptions: [
                { id: "chosen0", stats: { charm: 1, cool: 1, sharp: 2, tough: -1, weird: 0 } },
                { id: "chosen1", stats: { charm: 0, cool: 1, sharp: 2, tough: -1, weird: 1 } },
                { id: "chosen2", stats: { charm: 1, cool: -1, sharp: 2, tough: 1, weird: 0 } },
                { id: "chosen3", stats: { charm: 1, cool: -1, sharp: 2, tough: 0, weird: 1 } },
                { id: "chosen4", stats: { charm: -1, cool: -1, sharp: 2, tough: 0, weird: 2 } }
            ],
            classSpecificChoices: [
                {
                    name: "Chosen Weapon",
                    description: "",
                    //HOW TO FORMAT THIS?
                    options: [
    
                    ]
                },
                {
                    name: "Fate",
                    description: "",
                    //HOW TO FORMAT THIS?
                    chosenFate: {
                        howYouFoundOut: {
    
                        },
                        heroicTags: {
    
                        },
                        doomTags: {
    
                        }
                    }
                }
            ]
        }
    },
    {
        id: 1,
        name: "The Divine",
        subText: "",
        classDetails = {
            allMoves: [

            ],
            ratingsOptions: [
                { id: "divine0", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "divine1", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "divine2", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "divine3", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "divine4", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } }
            ]
        }
    },
    {
        id: 2,
        name: "The Expert",
        subText: "",
        classDetails = {
            allMoves: [

            ],
            ratingsOptions: [
                { id: "expert0", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "expert1", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "expert2", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "expert3", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "expert4", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } }
            ]
        }
    },
    {
        id: 3,
        name: "The Flake",
        subText: "Everything's connected. But not everyone can see the patterns, and most people don't even look that hard. But me, I can never stop looking closer. I can never stop seeing the truth.I spot the patterns. That's how I found the monsters, and that's how I help kill them.",
        classDetails = {
            movesSubtext: "You get all the basic moves, plus pick three Flake moves:",
            allMoves: [
                {
                    classMoveId: 0,
                    name: "Always The Victim",
                    description: ""
                },
            ],
            ratingsOptions: [
                { id: "flake0", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "flake1", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "flake2", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "flake3", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "flake4", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } }
            ],
            gearChoices: [
                {
                    groupName: "",
                    numberOfSelections: ,
                    choices: [
                        
                    ]
                },
                {
                    groupName: "",
                    numberOfSelections: ,
                    choices: [
                        
                    ]
                }
            ],
            improvements: [
                
            ],
            advancedImprovements: [
                
            ]
        }
    },
    {
        id: 4,
        name: "The Initiate",
        subText: "",
        classDetails = {
            allMoves: [

            ],
            ratingsOptions: [
                { id: "initiate0", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "initiate1", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "initiate2", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "initiate3", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "initiate4", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } }
            ]
        }
    },
    {
        id: 5,
        name: "The Monstrous",
        subText: "",
        classDetails = {
            allMoves: [

            ],
            ratingsOptions: [
                { id: "monstrous0", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "monstrous1", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "monstrous2", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "monstrous3", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "monstrous4", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } }
            ]
        }
    },
    {
        id: 6,
        name: "The Mundane",
        subText: "You heard about how monsters only pick on people with crazy powers who can fight back on even terms? Yeah, me neither. But, hell, I ended up in this monster-hunting team so I gotta do what I can, right?",
        classDetails = {
            movesSubtext: "You get all the basic moves, and three Mundane moves. Pick three Mundane moves:",
            allMoves: [
                {
                    classMoveId: 0,
                    name: "Always The Victim",
                    description: "When another hunter uses protect someone to protect you, they mark experience. Whenever a monster captures you, you mark experience."
                },
                {
                    classMoveId: 1,
                    name: "The Power of Heart",
                    description: "When fighting a monster, if you help someone, don’t roll +Cool. You automatically help as though you’d hit the roll with a 10+"
                },
                {
                    classMoveId: 2,
                    name: "Trust Me",
                    description: `When you tell a normal person the truth in order to protect them from danger, roll +Charm. On a 10+ they'll do what you say they should, no questions asked. On a 7-9 they do it, but the Keeper chooses one from:
                        • They ask you a hard question first.
                        • They stall and dither a while.
                        • They have a “better” idea. 
                    On a miss, they're going to think you're crazy and maybe dangerous too.`
                },
                {
                    classMoveId: 3,
                    name: "Let's Get Out Of Here!",
                    description: " If you protect someone by telling them what to do, or leading them out, roll +Charm instead of +Tough."
                },
                {
                    classMoveId: 4,
                    name: "Panic Button",
                    description: " When you need to escape, name the route you'll try and roll +Sharp. On a 10+ you're out of danger, no problem. On a 7-9 you can go or stay, but if you go it's going to cost you (you leave something behind or something comes with you). On a miss, you are caught halfway out."
                },
                {
                    classMoveId: 5,
                    name: "Oops!",
                    description: " If you want to stumble across something important, roll +Weird. Treat the results as if you had investigated a mystery, but anything you discover is by                    dumb luck rather than skill (e.g. literally tripping over a clue)."
                },
                {
                    classMoveId: 6,
                    name: "What Could Go Wrong?",
                    description: `Whenever you charge into immediate danger without hedging your bets, hold 2. You may spend your hold to:
                        • Inflict +1 harm.
                        • Reduce someone's harm suffered by 1.
                        • Take +2 forward on an act under pressure roll.`
                },
                {
                    classMoveId: 7,
                    name: "Don't Worry, I'll Check It Out",
                    description: "Whenever you go off by yourself to check out somewhere (or something) scary, mark experience."
                },
            ],
            ratingsOptions: [
                { id: "mundane0", stats: { charm: 2, cool: 1, sharp: 0, tough: 1, weird: -1 } },
                { id: "mundane1", stats: { charm: 2, cool: -1, sharp: 1, tough: 1, weird: 0 } },
                { id: "mundane2", stats: { charm: 2, cool: 0, sharp: -1, tough: 1, weird: 1 } },
                { id: "mundane3", stats: { charm: 2, cool: 0, sharp: 1, tough: 1, weird: -1 } },
                { id: "mundane4", stats: { charm: 2, cool: 1, sharp: 1, tough: 0, weird: -1 } }
            ],
            gearChoices: [
                {
                    groupName: "Mundane Weapons, pick two:",
                    numberOfSelections: 2,
                    choices: [
                        "Golf Club / Baseball Bat / Cricket Bat / Hockey Stick / etc. - (2-harm hand innocuous messy)",
                        "Useful Knife/Multitool - (1-harm hand useful small)",
                        "Small Handgun - (2-harm close loud reload)",
                        "Hunting Rifle - (3-harm far loud reload)",
                        "Sledge-Hammer/Fire Axe - (3-harm hand messy)",
                        "Nunchuks - (2-harm hand area)"
                    ]
                },
                {
                    groupName: "Transportation",
                    numberOfSelections: 1,
                    choices: [
                        "Skateboard",
                        "Pickup",
                        "Fairly new car in decent condition",
                        "Classic car in terrible condition",
                        "Motorcycle",
                        "Van"
                    ]
                }
            ],
            improvements: [
                { name: "Get +1 Charm, max +3", effect: },
                {name: "Get +1 Cool, max +2", effect: },
                {name: "Get +1 Sharp, max +2", effect: },
                {name:"Get +1 Tough, max +2", effect:  },
                {name:"Take another Mundane move", effect: improvementEffectTypes.ADD_TO_MOVE_COUNT },
                {name: "Take another Mundane move" , effect: improvementEffectTypes.ADD_TO_MOVE_COUNT},
                {name: "Erase one used Luck mark from your playbook", effect: },
                {name: "Erase one used Luck mark from your playbook", effect: },
                {name: "Take a move from another playbook", effect: },
                {name: "Take a move from another playbook", effect: }
            ],
            advancedImprovements: [
                "Get +1 to any rating, max +3",
                "Change this hunter to a new type",
                "Make up a second hunter to play as well as this one",
                "Mark two of the basic moves as advanced",
                "Mark another two of the basic moves as advanced",
                "Retire this hunter to safety",
                "Erase one used Luck mark from your playbook"
            ]
        }
    },
    {
        id: 7,
        name: "The Spooky",
        subText: "",
        classDetails = {
            allMoves: [

            ],
            ratingsOptions: [
                { id: "spooky0", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "spooky1", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "spooky2", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "spooky3", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "spooky4", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } }
            ]
        }
    },
    {
        id: 8,
        name: "The Wronged",
        subText: "",
        classDetails = {
            allMoves: [

            ],
            ratingsOptions: [
                { id: "wronged0", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "wronged1", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "wronged2", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "wronged3", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } },
                { id: "wronged4", stats: { charm: 0, cool: 0, sharp: 0, tough: 0, weird: 0 } }
            ]
        }
    }
];