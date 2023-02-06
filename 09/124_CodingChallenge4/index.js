const game = {
    team1: 'Manchester City',
    team1: 'Manchester United',
    players: [
        [
            'Ederson',
            'Walker',
            'Cancelo',
            'Dias',
            'Laporte',
            'Rodri',
            'Kevin De Bruyne',
            'Phil Foden',
            'Jack Grealish',
            'Riyad Mahrez',
            'Erling Haaland',
        ],
        [
            'David de Gea',
            'Victor Lindelöf',
            'Eric Bailly',
            'Harry Maguire',
            'Lisandro Martinez',
            'Casemiro',
            'Bruno Fernandes',
            'Christian Eriksen',
            'Fred',
            'Marcus Rashford',
            'Anthony Martial',
        ],

    ],
    score: '4:0',
    scored: ['Erling Haaland','Jack Grealish','Erling Haaland','Phil Foden'],
    date: 'Nov 9th, 2015',
    odds: {
        team1: 1.33,
        x : 3.5,
        team2: 2,
    }
};


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click', function(){
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    for (const [i,row] of rows.entries()) {
        const [first,second] = row.toLowerCase().trim().split('_');
        // console.log(row, first, second);

        const output = `${first} ${second.replace(
            second[0],
            second[0].toUpperCase()
            )}`;
            console.log(`${output.padEnd(20)}${'x'.repeat(i+1)}`);
    }
});
/*

NguyenTuan_Anh
   Nguyen van A
 Tran Van B
    Do Van C
*/