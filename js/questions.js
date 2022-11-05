const originalQuestionsArr = [
    {
        question: 'Hur mycket är 17 + 13 ?',
        alternatives: ['A. 20', 'B. 30', 'C. 1713', 'D. 40'],
        correctIndex: 1
    },
    {
        question: 'Vart i Sverige ligger det berömda ishotellet ?',
        alternatives: ['A. Jukkasjärvi', 'B. Kiruna', 'C. Gävle', 'D. Malmö'],
        correctIndex: 0
    },
    {
        question: 'Vilken av dessa öar är störst ?',
        alternatives: ['A. Bornholm', 'B. Öland', 'C. Gotland', 'D. Öckerö'],
        correctIndex: 2
    },
    {
        question: 'Vilket av dessa svenska vattendrag är en INTE en älv ?',
        alternatives: ['A. Viskan', 'B. Ätran', 'C. Lagan', 'D. Siljan'],
        correctIndex: 3
    },
    {
        question: 'Vilken av följande svenska städer ligger längst norrut?',
        alternatives: ['A. Sundsvall', 'B. Östersund', 'C. Umeå', 'D. Luleå'],
        correctIndex: 3
    },
    {
        question: 'Från vilken stad kommer ishockeylaget Brynäs?',
        alternatives: ['A. Branäs', 'B. Göteborg', 'C. Gävle', 'D. Stockholm'],
        correctIndex: 2
    },
    {
        question: 'Vem av följande personer har INTE varit statsminister i Sverige?',
        alternatives: ['A. Fredrik Reinfeldt', 'B. Leif "Loket" Olsson', 'C. Magdalena Andersson', 'D. Stefan Löfven'],
        correctIndex: 1
    },
    {
        question: 'Vilket av dessa länder ligger i Sydamerika?',
        alternatives: ['A. Spanien', 'B. Portugal', 'C. USA', 'D. Brasilien'],
        correctIndex: 3
    },
    {
        question: 'Vad heter Englands huvudstad?',
        alternatives: ['A. London', 'B. New York', 'C. Manchester', 'D. Chelsea'],
        correctIndex: 0
    },
    {
        question: 'Vilken av följande artister/band kommer från Sverige?',
        alternatives: ['A. Iron Maiden', 'B. Abba', 'C. The Who', 'D. The Rasmus'],
        correctIndex: 1
    },
    {
        question: 'Vad heter Danmarks huvudstad?',
        alternatives: ['A. Köping', 'B. Norrköping', 'C. Köpenhamn', 'D. Oslo'],
        correctIndex: 2
    },
    {
        question: 'Vad heter Finlands huvudstad?',
        alternatives: ['A. Helsingfors', 'B. Helsingborg', 'C. Helsingör', 'D. Åbo'],
        correctIndex: 0
    },
    {
        question: 'Vad heter Sveriges högsta berg?',
        alternatives: ['A. Bomhusbacken', 'B. Mount Everest', 'C. K2', 'D. Kebnekaise'],
        correctIndex: 3
    },
    {
        question: 'Vad heter den gode trollkarlen i Sagan om Ringen?',
        alternatives: ['A. Legolas', 'B. Dumbledore', 'C. Gandalf', 'D. Gargamel'],
        correctIndex: 2
    },
    {
        question: 'Vilken av dessa himlakroppar är störst?',
        alternatives: ['A. Månen', 'B. Jorden', 'C. Solen', 'D. Pluto'],
        correctIndex: 2
    },
    {
        question: 'Vilka är de 3 basfärgerna, som inte kan fås genom blandning av andra färger?',
        alternatives: ['A. Gul, grön, och lila', 'B. Blå, gul, och röd', 'C. Blå, röd, och grön', 'D. Orange, röd, och grön'],
        correctIndex: 1
    },
    {
        question: 'Vad är huvudingrediensen i en omelett?',
        alternatives: ['A. Mjöl', 'B. Mjölk', 'C. Marsipan', 'D. Ägg'],
        correctIndex: 3
    },
    {
        question: 'Hur ofta innefaller ett så kallat "skottår"?',
        alternatives: ['A. Vart 4:e år', 'B. Vart annat år', 'C. Vart 3:e år', 'D. Varje år'],
        correctIndex: 0
    }
]