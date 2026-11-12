const venues = [
    {
        id: "hilderstone-village-hall",
        name: "Hilderstone Village Hall",
        area: "Stone",
        address: "Sandon Rd, Hilderstone, Stone",
        postcode: "ST15 8XQ",
        coordinates: { lat: 52.909480387028516, lng: -2.0783329438764366 },
        entranceCoordinates: { lat: 52.90940773511241, lng: -2.0781745137374967 },
        parkingCoordinates: { lat: 52.9093304226672, lng: -2.0780560596605717 },
        parking: "Park in the village hall car park. Please use the front entrance instead of the side door."
    },
    {
        id: "cheadle-guild-hall",
        name: "The Guild Hall",
        area: "Cheadle",
        address: "Tape Street, Cheadle",
        postcode: "ST10 1BG",
        coordinates: { lat: 52.98778189458405, lng: -1.9861839620393495 },
        entranceCoordinates: { lat: 52.98784564351222, lng: -1.986193736971238 },
        parkingCoordinates: { lat: 52.98760995308882, lng: -1.9861296249499312 },
        parking:
            "Drive into the nearby Morrisons car park. Keep left for the Guild Hall car park. Entrance is around the right of the building on the opposite side of the car park."
    },
    {
        id: "chell-new-horizons",
        name: "New Horizons Sport and Leisure Centre",
        area: "Chell",
        address: "Uplands Ave, Chell",
        postcode: "ST6 6JT",
        coordinates: { lat: 53.07310324486423, lng: -2.1964554342787963 },
        entranceCoordinates: { lat: 53.07317314992745, lng: -2.1961294467737136 },
        parkingCoordinates: { lat: 53.07293493416827, lng: -2.1959633243695897 },
        parking: "Park in the New Horizons car park. The sports hall is through the reception and to the left."
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
