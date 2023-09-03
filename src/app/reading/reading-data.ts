export interface IReading {
    title: string,
    author: string,
    readingGroup?: string,
    when: Date,
    notes?: string,
}

// For copying and pasting new things
// {
//     title: '',
//     author: '',
// },

export const READING_LIST: IReading[] = [
    {
        title: 'The Pragmatic Programmer - 20th Anniversary Edition',
        author: 'Dave Thomas | Andy Hunt',
        when: new Date("11/1/2021")
    },
    {
        title: 'The Pocket Guide to Debugging',
        author: 'Julia Evans',
        readingGroup: 'WNB.rb Book Club',
        when: new Date("1/1/23"),
    },
    {
        title: 'Becoming a Select Star',
        author: 'Julia Evans',
        when: new Date("2/1/23")
    },
    {
        title: `HTTP - Learn Your Browser's Language`,
        author: 'Julia Evans',
        when: new Date("2/1/23")
    },
    {
        title: 'Engineering Management for the Rest of Us',
        author: 'Sarah Drasner',
        readingGroup: 'WNB.rb Book Club',
        when: new Date("5/1/2023")
    },
    {
        title: 'An Elegant Puzzle - Systems of Engineering Management',
        author: 'Will Larson',
        readingGroup: 'WNB.rb Book Club',
        when: new Date("11/1/2022")
    },
    {
        title: 'Working in Public',
        author: 'Nadia Eghbal',
        readingGroup: 'WNB.rb Book Club',
        when: new Date("4/1/2022") 
    },
    {
        title: 'Eloquent JavaScript - 3rd Edition',
        author: 'Marijn Haverbeke',
        when: new Date("3/1/2023")
    },
    {
        title: 'The Ruby on Rails Tutorial - 7th Edition',
        author: 'Michael Hartl',
        readingGroup: 'Academy PGH Book Club',
        when: new Date("6/1/2022")
    },
    {
        title: '99 Bottles of Object Oriented Programming - Ruby',
        author: 'Sandi Metz',
        when: new Date("1/1/2022")
    },
]