const venues = [
    {
        id: "hilderstone-village-hall",
        name: "Hilderstone Village Hall",
        area: "Stone",
        address: "Sandon Rd, Hilderstone, Stone",
        postcode: "ST15 8XQ",
        coordinates: { lat: 52.909392, lng: -2.077887 }
    },
    {
        id: "cheadle-guild-hall",
        name: "The Guild Hall",
        area: "Cheadle",
        address: "Tape Street, Cheadle",
        postcode: "ST10 1BG",
        coordinates: { lat: 52.987666, lng: -1.986443}
    },
    {
        id: "chell-new-horizons",
        name: "New Horizons Sport and Leisure Centre",
        area: "Chell",
        address: "Uplands Ave, Chell",
        postcode: "ST6 6JT",
        coordinates: { lat: 53.073119, lng: -2.196515 }
    }
];

type Venue = (typeof venues)[number];

const classTypes = [
    { id: "little-pumas", name: "Little PUMAs", ageMin: 4, ageMax: 7 },
    { id: "all-grades", name: "All Grades" },
    { id: "junior", name: "Junior Grades", note: "Red Stripe and below" },
    { id: "senior", name: "Senior Grades", note: "Red Belt and above" }
];

const sessions = [
    {
        id: "mon-lp",
        venueId: "hilderstone-village-hall",
        classTypeId: "little-pumas",
        day: 1,
        start: "18:30",
        end: "19:00"
    },
    {
        id: "mon-all",
        venueId: "hilderstone-village-hall",
        classTypeId: "all-grades",
        day: 1,
        start: "19:00",
        end: "20:00"
    },
    { id: "tue-lp", venueId: "cheadle-guild-hall", classTypeId: "little-pumas", day: 2, start: "18:30", end: "19:00" },
    { id: "tue-all", venueId: "cheadle-guild-hall", classTypeId: "all-grades", day: 2, start: "19:00", end: "20:00" },
    { id: "wed-lp", venueId: "chell-new-horizons", classTypeId: "little-pumas", day: 3, start: "18:30", end: "19:00" },
    { id: "wed-all", venueId: "chell-new-horizons", classTypeId: "all-grades", day: 3, start: "19:00", end: "20:00" },
    { id: "thu-jnr", venueId: "hilderstone-village-hall", classTypeId: "junior", day: 4, start: "19:00", end: "20:00" },
    { id: "thu-snr", venueId: "hilderstone-village-hall", classTypeId: "senior", day: 4, start: "20:00", end: "21:00" }
];

const mapsQuery = (v: Venue) => encodeURIComponent(`${v.coordinates.lat},${v.coordinates.lng} (${v.name})`);

export { venues, classTypes, sessions, mapsQuery };
