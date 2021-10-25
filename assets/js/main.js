const ultima =
    [
        {
            'nickname': 'Pollo',
            'role': 'bass_player',
            'image': 'https://picsum.photos/id/1/200/300'
        },

        {
            'nickname': 'Trizio',
            'role': 'lead_guitar_player',
            'image': 'https://picsum.photos/id/1/200/300'
        },

        {
            'nickname': 'Massi',
            'role': 'rythm_guitar_player',
            'image': 'https://picsum.photos/id/1/200/300'
        },

        {
            'nickname': 'Ceres',
            'role': 'drummer',
            'image': 'https://picsum.photos/id/1/200/300'
        },

        {
            'nickname': 'Toffa',
            'role': 'vocalist',
            'image': 'https://picsum.photos/id/1/200/300'
        },
    ];

for (let index = 0; index < ultima.length; index++) {
    const member = ultima[index];
    console.log('Name:', member.nickname);
    console.log('Role:', member.role);
    console.log('Image:', member.image);
    console.log('***********************');
}