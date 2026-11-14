import { type BeltKey } from "./belts";

type TheoryQuestion = {
    prompt: string;
    answer?: string | string[];
};

type Theory = {
    images: string[];
    name: string;
    kup: string;
    questions: TheoryQuestion[];
    extra?: TheoryQuestion[];
};

export const theory = {
    "white-junior": {
        images: ["white-junior-main"],
        name: "Junior White belt",
        kup: "10th",
        questions: [
            { prompt: "Taekwondo is...", answer: "the Korean art of self defence" },
            {
                prompt: "The founder of Taekwondo is...",
                answer: "General Choi Hong Hi, 9th Degree Grandmaster"
            },
            { prompt: "Tae means...", answer: "To jump, kick or smash with the foot" },
            { prompt: "Kwon means...", answer: "A fist to punch or destroy with the hand" },
            { prompt: "Do means...", answer: "Art, way or method" },
            { prompt: "Uniform", answer: "Dobok" },
            { prompt: "Belt", answer: "Ti" },
            { prompt: "Training hall", answer: "Dojang" },
            {
                prompt: "What does white signify?",
                answer: "Innocence, beginner, no previous knowledge of Taekwondo"
            },
            { prompt: "Why have you started Taekwondo?" }
        ]
    },
    "purple-junior": {
        images: ["purple-stripe-main"],
        name: "Junior Purple stripe",
        kup: "10th",
        questions: [
            {
                prompt: "What are the tenets of Taekwondo?",
                answer: ["Courtesy", "Integrity", "Perseverance", "Self control", "Indomitable spirit"]
            },
            { prompt: "Low section", answer: "Najunde" },
            { prompt: "Middle section", answer: "Kaunde" },
            { prompt: "High section", answer: "Nopunde" },
            {
                prompt: "Where should a low section technique be performed?",
                answer: "Below the belt"
            },
            {
                prompt: "Where should a middle section technique be performed?",
                answer: "Belt to shoulder level"
            },
            {
                prompt: "Where should a high section technique be performed?",
                answer: "Above shoulder level"
            },
            { prompt: "Block", answer: "Makgi" },
            { prompt: "Punch", answer: "Jirugi" },
            { prompt: "Fore fist", answer: "Ap Joomuk" },
            { prompt: "Inner forearm", answer: "An Palmok" },
            { prompt: "Outer forearm", answer: "Bakat Palmok" },
            { prompt: "Front rising kick", answer: "Ap Cha Olligi" },
            { prompt: "Front snap kick", answer: "Ap Cha Busigi" },
            { prompt: "Four Directional Punch", answer: "Saju Jirugi" }
        ]
    },
    "orange-junior": {
        images: ["orange-stripe-main", "orange-stripe-extra"],
        name: "Junior Orange stripe",
        kup: "10th",
        questions: [
            { prompt: "Attention stance", answer: "Charyot Sogi" },
            { prompt: "Parallel ready stance", answer: "Narani Junbi Sogi" },
            { prompt: "Sitting stance", answer: "Annun Sogi" },
            { prompt: "Walking stance", answer: "Gunnun Sogi" },
            { prompt: "L-stance", answer: "Niunja Sogi" },
            { prompt: "Obverse", answer: "Baro" },
            { prompt: "Reverse", answer: "Bandae" },
            { prompt: "Instructor", answer: "Sabum" },
            { prompt: "Student", answer: "Jeja" },
            { prompt: "Four Directional Block", answer: "Saju Makgi" },
            {
                prompt: "What is the Taekwondo Oath?",
                answer: [
                    "I shall observe the tenets of Taekwondo",
                    "I shall respect the instructor and seniors",
                    "I shall never misuse Taekwondo",
                    "I shall be a champion of freedom and justice",
                    "I shall build a more peaceful world"
                ]
            }
        ],
        extra: [
            {
                prompt: "How should your feet be positioned in an Attention Stance (Charyot Sogi)",
                answer: "Heels touching to form a 45 degree angle"
            },
            {
                prompt: "How big should a parallel stance (Narani Sogi) be, and how should the weight be distributed?",
                answer: "A shoulder width between outside of feet, weight 50/50"
            },
            {
                prompt: "How big should a sitting stance (Annun Sogi) be, and how should the weight be distributed?",
                answer: "One and a half shoulder widths between big toes, weight 50/50"
            },
            {
                prompt: "How big should a walking stance (Gunnun Sogi) be, and how should the weight be distributed?",
                answer: "One shoulder width wide (sideways), one and a half shoulder widths long between the big toes, weight 50/50"
            },
            {
                prompt: "How big should an L-stance (Niunja Sogi) be, and how should the weight be distributed?",
                answer: "One and a half shoulder widths long in total, gap of 2.5cm, weight 70/30"
            }
        ]
    },
    "white-senior": {
        images: ["white-senior-main-1", "white-senior-main-2"],
        name: "Senior White belt",
        kup: "10th",
        questions: [
            { prompt: "Taekwondo is...", answer: "the Korean art of self defence" },
            {
                prompt: "The founder of Taekwondo is...",
                answer: "General Choi Hong Hi, 9th Degree Grandmaster"
            },
            { prompt: "Tae means...", answer: "To jump, kick or smash with the foot" },
            { prompt: "Kwon means...", answer: "A fist to punch or destroy with the hand" },
            { prompt: "Do means...", answer: "Art, way or method" },
            { prompt: "Uniform", answer: "Dobok" },
            { prompt: "Belt", answer: "Ti" },
            { prompt: "Training hall", answer: "Dojang" },
            {
                prompt: "What does white signify?",
                answer: "Innocence, beginner, no previous knowledge of Taekwondo"
            },
            { prompt: "Why have you started Taekwondo?" },
            {
                prompt: "What are the tenets of Taekwondo?",
                answer: "Courtesy, integrity, perseverance, self control, indomitable spirit"
            },
            { prompt: "Low section", answer: "Najunde" },
            { prompt: "Middle section", answer: "Kaunde" },
            { prompt: "High section", answer: "Nopunde" },
            {
                prompt: "Where should a low section technique be performed?",
                answer: "Below the belt"
            },
            {
                prompt: "Where should a middle section technique be performed?",
                answer: "Belt to shoulder level"
            },
            {
                prompt: "Where should a high section technique be performed?",
                answer: "Above shoulder level"
            },
            { prompt: "Block", answer: "Makgi" },
            { prompt: "Punch", answer: "Jirugi" },
            { prompt: "Fore fist", answer: "Ap Joomuk" },
            { prompt: "Inner forearm", answer: "An Palmok" },
            { prompt: "Outer forearm", answer: "Bakat Palmok" },

            { prompt: "Front rising kick", answer: "Ap Cha Olligi" },
            { prompt: "Front snap kick", answer: "Ap Cha Busigi" },
            { prompt: "Four Directional Punch", answer: "Saju Jirugi" },
            { prompt: "Four Directional Block", answer: "Saju Makgi" },
            { prompt: "Attention stance", answer: "Charyot Sogi" },
            { prompt: "Parallel ready stance", answer: "Narani Junbi Sogi" },
            { prompt: "Sitting stance", answer: "Annun Sogi" },
            { prompt: "Walking stance", answer: "Gunnun Sogi" },
            { prompt: "L-stance", answer: "Niunja Sogi" },
            {
                prompt: "How should your feet be positioned in an Attention Stance (Charyot Sogi)",
                answer: "Heels touching to form a 45 degree angle"
            },
            {
                prompt: "How big should a parallel stance (Narani Sogi) be, and how should the weight be distributed?",
                answer: "A shoulder width between outside of feet, weight 50/50"
            },
            {
                prompt: "How big should a sitting stance (Annun Sogi) be, and how should the weight be distributed?",
                answer: "One and a half shoulder widths between big toes, weight 50/50"
            },
            {
                prompt: "How big should a walking stance (Gunnun Sogi) be, and how should the weight be distributed?",
                answer: "One shoulder width wide (sideways), one and a half shoulder widths long between the big toes, weight 50/50"
            },
            {
                prompt: "How big should an L-stance (Niunja Sogi) be, and how should the weight be distributed?",
                answer: "One and a half shoulder widths long in total, gap of 2.5cm, weight 70/30"
            },
            { prompt: "Obverse", answer: "Baro" },
            { prompt: "Reverse", answer: "Bandae" },
            { prompt: "Instructor", answer: "Sabum" },
            { prompt: "Student", answer: "Jeja" },
            { prompt: "Four Directional Block", answer: "Saju Makgi" },
            {
                prompt: "What is the Taekwondo Oath?",
                answer: [
                    "I shall observe the tenets of Taekwondo",
                    "I shall respect the instructor and seniors",
                    "I shall never misuse Taekwondo",
                    "I shall be a champion of freedom and justice",
                    "I shall build a more peaceful world"
                ]
            }
        ]
    },
    "yellow-stripe": {
        images: ["yellow-stripe-main", "yellow-stripe-extra"],
        name: "Yellow stripe",
        kup: "9th",
        questions: [
            { prompt: "Taekwondo was introduced into the UK in...", answer: "1967" },
            {
                prompt: "PUMA is...",
                answer: "The Professional Unification of Martial Arts, founded on 01-09-2000"
            },
            {
                prompt: "Chon-Ji means...",
                answer: "Chon-Ji literally means 'heaven and earth', in the Orient it is interpreted as the creation of the world or the beginning of human history, therefore, it is the initial pattern played by the beginner. This pattern consists of two parts, one to represent heaven and the other, the earth"
            },
            { prompt: "How many movements does Chon-Ji have?", answer: "19" },
            { prompt: "Pattern", answer: "Tul" },
            { prompt: "Rising block", answer: "Chookyo Makgi" },
            { prompt: "Knifehand", answer: "Sonkal" },
            { prompt: "Knifehand side strike", answer: "Sonkal Yop Taerigi" },
            { prompt: "Knifehand guarding block", answer: "Sonkal Daebi Makgi" },
            { prompt: "Outer forearm inward block", answer: "Bakat Palmok Anuro Makgi" },
            { prompt: "Twin forearm block", answer: "Sang Palmok Makgi" },
            { prompt: "Back fist downward strike", answer: "Dung Joomuk Naeryo Taerigi" },
            {
                prompt: "What does yellow signify?",
                answer: "Yellow signifies the earth from which the plant sprouts and takes root as the Taekwondo foundation is being laid"
            }
        ],
        extra: [
            {
                prompt: "What does a pattern consist of?",
                answer: "A pattern consists of a combination of full power Taekwondo techniques against an imaginary opponent, designed to practice and perfect techniques, some of which might not otherwise be used"
            },
            {
                prompt: "The name of a pattern, the number of movements, or its diagram symbolises...",
                answer: "Either historical figures in Korean history, or instances relating to historical events"
            },
            {
                prompt: "What do the pattern meanings also demonstrate?",
                answer: "Pattern meanings demonstrate the use of one or more of the tenets, to give us inspiration to follow"
            },
            {
                prompt: "Why are Saju Jirugi and Saju Makgi not patterns?",
                answer: "They do not have meanings"
            },
            {
                prompt: "What two stances are in Chon-Ji? (In Korean)",
                answer: ["Gunnun Sogi", "Niunja Sogi"]
            },
            {
                prompt: "What two blocks are in Chon-Ji? (In Korean)",
                answer: ["Bakat Palmok Najunde Makgi", "An Palmok Kaunde Makgi"]
            },
            { prompt: "Step turning", answer: "Omgyo Didimyo Dolgi" }
        ]
    },
    "yellow-belt": {
        images: ["yellow-belt-main", "yellow-belt-extra"],
        name: "Yellow belt",
        kup: "8th",
        questions: [
            {
                prompt: "What is Dan-Gun named after?",
                answer: "Dan-Gun is named after the Holy Dan-Gun, the legendary founder of Korea in the year 2333 BCE"
            },
            { prompt: "How many movements does Dan-Gun have?", answer: "21" },
            { prompt: "Three step sparring", answer: "Sambo Matsoki" },
            {
                prompt: "What does three step sparring improve?",
                answer: ["Focus", "Distance", "Timing"]
            },
            { prompt: "Outer forearm middle block", answer: "Bakat Palmok Kaunde Makgi" },
            { prompt: "Outer forearm high block", answer: "Bakat Palmok Nopunde Makgi" },
            { prompt: "Straight fingertip thrust", answer: "Sun Sonkut Tulgi" },
            {
                prompt: "Backfist high side strike",
                answer: "Dung Joomuk Nopunde Yop Taerigi"
            },
            {
                prompt: "Outer forearm high wedging block",
                answer: "Bakat Palmok Nopunde Hechyo Makgi"
            },
            { prompt: "Double punch", answer: "Doo Jirugi" },
            { prompt: "Twin forearm block", answer: "Sang Palmok Makgi" },
            { prompt: "Free sparring", answer: "Jayoo Matsoki" },
            {
                prompt: "What does green signify?",
                answer: "The plants growth as Taekwondo skills begin to develop"
            }
        ],
        extra: [
            {
                prompt: "What is free sparring?",
                answer: "The aim in free sparring is to score points and are using Taekwondo as a sport. The objective is to only touch your partner without causing any pain or injury. No techniques are allowed below the belt or to the back. As well as developing focus, distance and timing, free sparring improves awareness and encourages agility along with spontaneous reaction. The scoring system awards 1 point for a hand technique to the middle or high sections, 2 points for a middle section kick and 3 points for a high kick to the head"
            },
            {
                prompt: "Counting in Koran",
                answer: "As in English, the word for the double figure is placed in front of the single figure word, e.g. Twenty One = Sumul Hana, Twenty Two = Sumul Dool. Unlike our own decimal system, Korean counting is based on the number 9"
            },
            {
                prompt: "Count from 1 to 10 in Korean",
                answer: ["Hana", "Dool", "Set", "Net", "Dasot", "Yasot", "Ilgup", "Yudul", "Ahop", "Yul"]
            },
            {
                prompt: "Count from 10 to 50 in Korean, in multiples of 10",
                answer: ["Yul", "Sumul", "Surhun", "Mahun", "Swin"]
            },
            {
                prompt: "When can punches and strikes be used?",
                answer: "Punches and strikes can be used against hard or soft targets. The aim is to smash, pierce, or penetrate. This is achieved by focusing the breathing and the other elements of power to the end of the technique. Both techniques accelerate in a relaxed manner throughout the execution, ending with a dynamic twist with tension"
            },
            {
                prompt: "When can thrusts be used?",
                answer: "Thrusts are only used against soft targets. This technique reaches the target under tension and at a constant speed after its initial acceleration, exhaling throughout. This means they are effective anywhere on the line of attack"
            }
        ]
    },
    "green-stripe": {
        images: ["green-stripe-main", "green-stripe-extra"],
        name: "Green stripe",
        kup: "7th",
        questions: [
            {
                prompt: "What was Do-San?",
                answer: "Do-San is the pseudonym of the patriot Ahn Chang-Ho, who devoted his entire life to furthering the education of Korea and its independence movement."
            },
            { prompt: "How many movements does Do-San have?", answer: "24" },
            { prompt: "Fixed stance", answer: "Gojong Sogi" },
            { prompt: "Bending ready stance A", answer: "Goburyo Junbi Sogi A" },
            { prompt: "Side punch", answer: "Yop Jirugi" },
            { prompt: "Inner forearm circular block", answer: "Am Palmok Dollimyo Makgi" },
            { prompt: "Side Kick", answer: "Yop Chagi" },
            { prompt: "Side piercing kick", answer: "Yop Cha Jirugi" },
            { prompt: "Turning kick", answer: "Dollyo Chagi" },
            {
                prompt: "How is normal motion performed?",
                answer: "Normal motion is performed at normal speed with a pause long enough to show when one move has completely finished and the next is about to begin. It has one sine wave movement and one breath for each technique."
            }
        ],
        extra: [
            { prompt: "Release from grab", answer: "Jappyosul Tae" },
            { prompt: "Spot turning", answer: "Gujari Dolgi" },
            {
                prompt: "What is continuous motion?",
                answer: "When two or more moves are linked by one continuous breath"
            },
            { prompt: "In a right stance, a right technique is...", answer: "Obverse" },
            { prompt: "In a right stance, a left technique is...", answer: "Reverse" },
            {
                prompt: "All stances to the side are...",
                answer: "Neither left or right, therefore are neither obverse or reverse"
            },
            {
                prompt: "If the right leg is forwards in a 50/50 weight ratio stance, is it a left or right stance?",
                answer: "Right"
            },
            {
                prompt: "If the left leg is forwards in a 50/50 weight ratio stance, is it a left or right stance?",
                answer: "Left"
            },
            {
                prompt: "If the right has more weight in an unequal weight ratio stance, is it a left or right stance?",
                answer: "Right"
            },
            {
                prompt: "If the left leg has more weight in an unequal weight ratio stance, is it a left or right stance?",
                answer: "Left"
            }
        ]
    },
    "green-belt": {
        images: ["green-belt-main", "green-belt-extra"],
        name: "Green belt",
        kup: "6th",
        questions: [
            {
                prompt: "Who was Won-Hyo?",
                answer: "Won-Hyo was the noted monk who introduced Buddhism into the Silla Dynasty in the year 686 CE"
            },
            { prompt: "How many movements does Won-Hyo have?", answer: "28" },
            { prompt: "Close ready stance A", answer: "Moa Junbi Sogi A" },
            { prompt: "Foot shifting", answer: "Jajun Bal" },
            { prompt: "Palm high hooking block", answer: "Sonbadak Nopunde Golcho Makgi" },
            { prompt: "Palm upward block", answer: "Sonbadak Ollyo Makgi" },
            { prompt: "X-fist pressing block", answer: "Kyocha Joomuk Noollo Makgi" },
            { prompt: "Twin vertical punch", answer: "Sang Sewo Jirugi" },
            { prompt: "Double forearm high block", answer: "Doo Palmok Nopunde Makgi" },
            { prompt: "Flat fingertip thrust", answer: "Opun Sonkut Tulgi" },
            { prompt: "Twin upset punch", answer: "Sang Dwijibo Jirugi" },
            { prompt: "Side elbow thrust", answer: "Yop Palkup Tulgi" },
            {
                prompt: "What does blue signify?",
                answer: "Blue signifies the heaven towards which the plant matures into a towering tree as training in Taekwondo progresses"
            },
            {
                prompt: "What are the components of the theory of power",
                answer: ["Reaction force", "Concentration", "Equilibrium", "Breath control", "Mass", "Speed"]
            }
        ],
        extra: [
            {
                prompt: "What is reaction force?",
                answer: "Using their force, striking when your opponent moves in"
            },
            {
                prompt: "What is concentration?",
                answer: "Directing power to a small target area, tension for a split second"
            },
            {
                prompt: "What is equilibrium?",
                answer: "Balance and stability, using your reaction arm for dynamic stability"
            },
            {
                prompt: "What is breath control?",
                answer: "Utilising the breath, tense abdomen to breathe out on impact"
            },
            {
                prompt: "What is mass?",
                answer: "Using the knee spring and hip twist to increase body weight on impact"
            },
            {
                prompt: "What is speed?",
                answer: "Maximise speed, the most essential factor for power"
            },
            {
                prompt: "What is fast motion?",
                answer: "Two or more moves performed in 'double-time' due to the second sine wave only being half of the normal sine wave, as you have less time to utilise the full range of movement"
            },
            {
                prompt: "What is connecting motion?",
                answer: "Two or more moves performed within the same sine wave that are linked by breath. The first move sets up the opening for the second, therefore the first is always a block and the second move is an attack. However, there are some exceptions"
            },
            {
                prompt: "What is slow motion?",
                answer: "Used to show the practitioners movement, technique, breath control and timing. It demonstrates the synchronisation of hands, feet, eyes and breath, and is performed to the count of 4 seconds"
            },
            {
                prompt: "What is pushing motion?",
                answer: "A movement performed with no impact. This is because one does not intend to cause severe damage or trauma to the opponent when defending their attacks"
            }
        ]
    },
    "blue-stripe": {
        images: ["blue-stripe-main", "blue-stripe-extra"],
        name: "Blue stripe",
        kup: "5th",
        questions: [
            {
                prompt: "What does Yul-Gok mean?",
                answer: "It is the pseudonym of a great philosopher and scholar Yi I (1536 - 1584 CE) nicknamed the 'Confucious of Korea'. The 38 movements refer to his birthplace on 38 degrees latitude and the diagram represents a scholar"
            },
            { prompt: "How many movements does Yul-Kok have?", answer: "38" },
            { prompt: "X-stance", answer: "Kyocha Sogi" },
            { prompt: "Low stance", answer: "Nachuo Sogi" },
            { prompt: "X-fist rising block", answer: "Kyocha Joomuk Chookyo Makgi" },
            { prompt: "Palm pressing block", answer: "Sonbadak Noollo Makgi" },
            { prompt: "Upper elbow strike", answer: "Wi Palkup Taerigi" },
            { prompt: "Open fist high punch", answer: "Pyon Joomuk Nopunde Jirugi" },
            { prompt: "Arc hand high strike", answer: "Bandal Son Nopunde Taerigi" },
            { prompt: "Side fist side strike", answer: "Yop Joomuk Yop Taerigi" },
            { prompt: "Side piercing kick", answer: "Yop Cha Jirugi" },
            {
                prompt: "What part of the foot does a side piercing kick (Yop Cha Jirugi) use?",
                answer: "Foot sword"
            },
            { prompt: "Back piercing kick", answer: "Dwitcha Jirugi" },
            {
                prompt: "What part of the foot does a back piercing kick (Dwitcha Jirugi) use?",
                answer: "Foot sword"
            },
            { prompt: "Turning kick", answer: "Dollyo Chagi" },
            {
                prompt: "What part of the foot does a turning kick (Dollyo Chagi) use?",
                answer: "Ball of the foot"
            },
            { prompt: "Reverse turning kick", answer: "Bandae Dollyo Chagi" },
            {
                prompt: "What part of the foot does a reverse turning kick (Bandae Dollyo Chagi) use?",
                answer: "Back heel"
            },
            { prompt: "Two step sparring", answer: "Ibo Matsoki" },
            {
                prompt: "What does two step sparring improve?",
                answer: ["Focus", "Distance", "Timing"]
            }
        ],
        extra: [
            { prompt: "Reverse knifehand block", answer: "Sonkal Dung Makgi" },
            { prompt: "U-shape block", answer: "Diguta Makgi" },
            { prompt: "Angle punch", answer: "Giockja Jirugi" },
            { prompt: "Front snap kick", answer: "Ap Cha Busigi" },
            { prompt: "Reverse turning hooking kick", answer: "Bandae Dollyo Goro Chagi" },
            { prompt: "Downward kick", answer: "Naeryo Chagi" },
            { prompt: "Vertical kick", answer: "Sewo Chagi" },
            { prompt: "Pressing kick", answer: "Noollo Chagi" },
            { prompt: "Twisting kick", answer: "Bituro Chagi" },
            { prompt: "Knee kick", answer: "Moorup Chagi" },
            { prompt: "Side thrusting kick", answer: "Yop Cha Tulgi" },
            { prompt: "Side pushing kick", answer: "Yop Cha Milgi" },
            { prompt: "Stamping kick", answer: "Cha Bapgi" },
            {
                prompt: "What part of the foot should be used in a front snap kick (Ap Ch Busigi)?",
                answer: "Ball of the foot"
            },
            {
                prompt: "What part of the foot should be used in a reverse turning hooking kick (Bandae Dollyo Goro Chagi)?",
                answer: "Back heel"
            },
            {
                prompt: "What part of the foot should be used in a downward kick (Naeryo Chagi)?",
                answer: "Back Heel"
            },
            {
                prompt: "What part of the foot should be used in a vertical kick (Sewo Chagi)?",
                answer: "Foot sword"
            },
            {
                prompt: "What part of the foot should be used in a pressing kick (Noollo Chagi)?",
                answer: "Foot sword"
            },
            {
                prompt: "What part of the foot should be used in a twisting kick (Bituro Chagi)?",
                answer: "Ball of the foot"
            },
            {
                prompt: "What part of the foot should be used in a knee kick (Moorup Chagi)?",
                answer: "Knee"
            },
            {
                prompt: "What part of the foot should be used in a side thrusting kick (Yop Cha Tulgi)?",
                answer: "Ball of the foot"
            },
            {
                prompt: "What part of the foot should be used in a side pushing kick (Yop Cha Milgi)?",
                answer: "Foot sword"
            },
            {
                prompt: "What part of the foot should be used in a stamping kick (Cha Bapgi)?",
                answer: "Back sole"
            },
            { prompt: "Ball of the foot", answer: "Apkumachi" },
            { prompt: "Foot sword", answer: "Balkal" },
            { prompt: "Back heel", answer: "Dwitchook" },
            { prompt: "Knee", answer: "Moorup" },
            { prompt: "Toes", answer: "Balkut" },
            { prompt: "Back sole", answer: "Dwitkumachi" },
            { prompt: "Instep", answer: "Baldung" },
            { prompt: "Side instep", answer: "Yop Baldung" }
        ]
    },
    "blue-belt": {
        images: ["blue-belt-main", "blue-belt-extra"],
        name: "Blue belt",
        kup: "4th",
        questions: [
            {
                prompt: "What does Joong-Gun mean?",
                answer: "Joong-Gun is named after the patriot An Joong-Gun who assassinated Hiro-Bumi Ito, the first Japanese Governor General of Korea, known as the man who played the leading part of the Korea-Japan merger. There are 32 movements in this pattern to represent Mr An's age when he was executed at Lui-Shung Prison in 1910"
            },
            { prompt: "How many movements does Joong-Gun have?", answer: "32" },
            { prompt: "Close ready stance B", answer: "Moa Junbi Sogi B" },
            { prompt: "Rear foot stance", answer: "Dwit Bal Sogi" },
            {
                prompt: "How should your feet and weight be on a rear foot stance (Dwit Bal Sogi)?",
                answer: "One shoulder width in total, front ball of the foot sligtly touching the floor, body weight on the back foot"
            },
            { prompt: "Upset fingertip thrust", answer: "Dwijibun Sonkut Tulgi" },
            { prompt: "Side back strike", answer: "Yopdwi Taerigi" },
            { prompt: "W-shape block", answer: "San Makgi" },
            { prompt: "Waist block", answer: "Hori Makgi" },
            { prompt: "Sliding", answer: "Mikulgi" },
            {
                prompt: "What does red signify?",
                answer: "Red signifies danger, cautioning the student to exercise control and warning the opponent to stay away"
            },
            {
                prompt: "You are now classed as a senior grade. What will you do to ensure your training continues to improve and develop?"
            }
        ],
        extra: [
            {
                prompt: "What are slow motion techniques and what is the first pattern to use them?",
                answer: "Joong-Gun is the first pattern that incorporates slow motion techniques. These movements (palm pressing block and angle punch) are intended to demonstrate the theory of power, leaving out the element of speed. The other main elements being: reaction force, concentration, equilibrium, breath control and mass."
            },
            { prompt: "Knifehand middle block", answer: "Sonkal Kaunde Makgi" },
            {
                prompt: "Knifehand inward high strike",
                answer: "Sonkal Anuro Nopunde Taerigi"
            },
            { prompt: "Side rising kick", answer: "Yop Cha Olligi" },
            { prompt: "Crescent kick", answer: "Bandal Chagi" },
            { prompt: "Waving kick", answer: "Doro Chagi" },
            { prompt: "Side checking kick", answer: "Yop Cha Momchugi" },
            { prompt: "Front checking kick", answer: "Ap Cha Momchugi" },
            { prompt: "Hooking kick", answer: "Golcho Chagi" },
            { prompt: "Sweeping kick", answer: "Suroh Chagi" },
            {
                prompt: "What part of the foot should be used in a side rising kick (Yop Cha Olligi)?",
                answer: "Foot sword"
            },
            {
                prompt: "What part of the foot should be used in a crescent kick (Bandal Chagi)?",
                answer: "Side sole"
            },
            {
                prompt: "What part of the foot should be used in a waving kick (Doro Chagi)?",
                answer: "Side sole"
            },
            {
                prompt: "What part of the foot should be used in a side checking kick (Yop Cha Momchugi)?",
                answer: "Side sole"
            },
            {
                prompt: "What part of the foot should be used in a front checking kick (Ap Cha Momchugi)?",
                answer: "Sole"
            },
            {
                prompt: "What part of the foot should be used in a hooking kick (Golcho Chagi)?",
                answer: "Side step"
            },
            {
                prompt: "What part of the foot should be used in a sweeping kick (Suroh Chagi)?",
                answer: "Side step"
            },
            { prompt: "Sole", answer: "Bal Badak" },
            { prompt: "Side sole", answer: "Yop Bal Badak" }
        ]
    },
    "red-stripe": {
        images: ["red-stripe-main", "red-stripe-extra"],
        name: "Red stripe",
        kup: "3rd",
        questions: [
            {
                prompt: "What does Toi-Gye mean?",
                answer: "Toi-Gye is the penname of the noted scholar Yi Hwang (16th CE) and authority on neo-confucianism. The 37 movements of the pattern refer to his birthplace on 37 degrees latitude and the diagram represents a scholar"
            },
            { prompt: "How many movements does Toi-Gye have?", answer: "37" },
            { prompt: "Vertical stance", answer: "Soo Jik Sogi" },
            { prompt: "Upward punch", answer: "Ollyo Jirugi" },
            { prompt: "Knifehand downward strike", answer: "Sonkal Naeryo Taerigi" },
            { prompt: "Double forearm pushing block", answer: "Doo Palmok Miro Makgi" },
            { prompt: "Turning", answer: "Dolgi" },
            { prompt: "One step sparring", answer: "Ilbo Matsoki" },
            {
                prompt: "What is one step sparring?",
                answer: "One step sparring is an advanced dicipline to execute an accurate, fast, decisive blow at the right time while defending effectively"
            },
            {
                prompt: "What are the 9 secrets of Taekwondo?",
                answer: [
                    "To study the theory of power thoroughly (green belt theory card)",
                    "To clearly understand the purpose and meaning of each movement",
                    "To bring the movement of eyes, hands, feet, and breath into one coordinated action",
                    "To choose the appropriate tool for each vital spot",
                    "To become familiar with the correct angle and distance for attack and defence",
                    "To keep both arms and legs slightly bent while the movement is in motion",
                    "All movements must begin with a backward motion with few exceptions",
                    "To create a sine wave during the motion by utilising the knee spring",
                    "Exhale briefly at the moment of each contact, except during connecting motion"
                ]
            }
        ],
        extra: [
            { prompt: "Step turning", answer: "Omgyo Didimyo Dolgi" },
            {
                prompt: "What does step turning allow for?",
                answer: "Allows any change in direction from, can be executed with either foot, moving forward, backward, clockwise or anti-clockwise and can be combined with double stepping, shifting and or sliding"
            },
            { prompt: "Spot turn", answer: "Gujari Dolgi" },
            {
                prompt: "What do spot turns allow for?",
                answer: "Only turn 180 degrees to face opponent behind, with this method both feet move to complete the turn. Generally the front foot will move first but on occasion the back foot can be moved first. The turn is executed after moving one foot onto the centre line of the stance and can be taken clockwise or anti-clockwise, depending which leg is forward. On completion the front leg will be opposite to the one before the turn"
            },
            {
                prompt: "When are pivot turns used?",
                answer: "Pivot turns are used mostly in walking, sitting or diagonal stance and is executed when pivoting on both feet at the same time"
            }
        ]
    },
    "red-belt": {
        images: ["red-belt-main", "red-belt-extra"],
        name: "Red belt",
        kup: "2nd",
        questions: [
            {
                prompt: "What does Hwa-Rang mean?",
                answer: "Hwa-Rang is named after the Hwa-Rang youth group which originated in the Silla Dynasty in the early 7th century. This group eventually became the actual driving force for the unification of the three kingoms of Korea. The 29 movements refer to the 29th Infantry Division, where Taekwondo developed into maturity"
            },
            { prompt: "How many movements does Hwa-Rang have?", answer: "29" },
            { prompt: "Close ready stance C", answer: "Moa Junbi Sogi C" },
            {
                prompt: "Middle front outer forearm block",
                answer: "Kaunde Ap Bakat Palmok Makgi"
            },
            {
                prompt: "X-knifehand middle checking block",
                answer: "Kyocha Sonkal Kaunde Momchau Makgi"
            },
            { prompt: "Twin palm upward block", answer: "Sang Sonbadak Ollyo Makgi" },
            { prompt: "Palm pushing block", answer: "Sonbadak Miro Makgi" },
            { prompt: "Knifehand high front strike", answer: "Sonkal Nopunde Ap Taerigi" },
            { prompt: "Downward kick", answer: "Naeryo Chagi" },
            { prompt: "Reverse turning hooking kick", answer: "Bandae Dollyo Goro Chagi" },
            {
                prompt: "What does black signify?",
                answer: "Black signifies the opposite of white, therefore signifying the maturity and proficiency in Taekwondo. Also indicates the wearer's imperviousness to darkness and fear"
            }
        ],
        extra: [
            { prompt: "Flying front kick", answer: "Twimyo Ap Chagi" },
            { prompt: "Flying side piercing kick", answer: "Twimyo Yop Cha Jirugi" },
            { prompt: "Flying", answer: "Twimyo" },
            { prompt: "When are flying techniques executed", answer: "In the air" },
            { prompt: "Jumping", answer: "Twigi" },
            { prompt: "When are jumping techniques executed", answer: "Upon landing" },
            { prompt: "Stamping motion", answer: "Bapgi" },
            {
                prompt: "When is stamping motion used?",
                answer: "Sometimes used when attacking and blocking against a powerful attack. This increases the power and effectiveness of either the block or attack"
            },
            { prompt: "Hand", answer: "Son" },
            { prompt: "Palm", answer: "Sonbadak" },
            { prompt: "Fingertip", answer: "Sonkut" },
            { prompt: "Knifehand", answer: "Sonkal" },
            { prompt: "Reverse knifehand", answer: "Sonkal Dung" },
            { prompt: "Arc hand", answer: "Bandal Son" },
            { prompt: "Back hand", answer: "Sondung" },
            { prompt: "Fore fist", answer: "Ap Joomuk" },
            { prompt: "Back fist", answer: "Dung Joomuk" },
            { prompt: "Side fist", answer: "Yop Joomuk" },
            { prompt: "Open fist", answer: "Pyon Joomuk" },
            { prompt: "Under fist", answer: "Mit Joomuk" },
            { prompt: "Long fist", answer: "Ghin Joomuk" },
            { prompt: "Fore finger", answer: "Han Songarak" },
            { prompt: "Double finger", answer: "Doo Songarak" },
            { prompt: "Finger belly", answer: "Songarak Badak" },
            { prompt: "Angle fingertip", answer: "Homi Sonkut" },
            { prompt: "Thumb", answer: "Umji Songarak" },
            { prompt: "Middle knuckle fist", answer: "Joongi Joomuk" },
            { prompt: "Fore knuckle fist", answer: "Inji Joomuk" },
            { prompt: "Bow wrist", answer: "Sonmok Dung" }
        ]
    },
    "black-stripe": {
        images: ["black-stripe-main"],
        name: "Black stripe",
        kup: "1st",
        questions: [
            {
                prompt: "What does Choong-Moo mean?",
                answer: "Choong-Moo was the name given to the great Admiral Yi Soon-Sin of the Yi Dynasty. He was reputed to have invented the first armoured battleship (Kobukson) in 1592, which is said to be the precursor of the present day submarine. The reason why this pattern ends with a left hand attack is to symbolise his regrettable death, having no chance to show his unrestrained potentiality checked by the forced reservation of his loyalty to the king"
            },
            { prompt: "How many movements does Choong-Moo have?", answer: "30" },
            {
                prompt: "What is your favourite/best pattern and why, the meaning of it, and can you find any extra information about it?"
            },
            {
                prompt: "What are the five tenets of Taekwondo, and what does each one mean? If you could add a sixth, what would it be and why?"
            },
            { prompt: "What do you enjoy most about Taekwondo?" },
            { prompt: "What are your strengths and weaknesses in Taekwondo?" },
            {
                prompt: "Can you name the nine secrets of Taekwondo and explain the theory of power?"
            },
            { prompt: "Where do you see yourself within Taekwondo in three years time?" },
            { prompt: "If you are unsuccessful at something, how will you overcome this?" },
            {
                prompt: "Can you name all 12 stances used as a color belt, English and Korean?"
            },
            { prompt: "What is the difference between a martial artist and a sports person?" },
            { prompt: "How have you supported your instructor, school and local area?" },
            { prompt: "Who is your greatest inspiration inside and outside of Taekwondo?" },
            { prompt: "Why, initially, was there 24 patterns, what did this represent?" },
            { prompt: "How are/have you prepared thoroughly for your black belt?" },
            { prompt: "How many hand and foot parts can you name?" },
            {
                prompt: "Do you know a simple timeline which outlines the history of Taekwondo?"
            }
        ]
    }
} as const satisfies Partial<Record<BeltKey, Theory>>;
