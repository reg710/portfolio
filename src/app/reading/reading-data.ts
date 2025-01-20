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
        title: 'Effective Testing with RSpec 3',
        author: 'Myron Marston and Ian Dees',
        readingGroup: 'WNB.rb Book Club',
        when: new Date("1/15/2025")
    },
    {
        title: 'The Ruby on Rails Tutorial - 7th Edition (x2 read)',
        author: 'Michael Hartl',
        when: new Date("1/1/2025")
    },
    {
        title: 'Learning Git',
        author: 'Anna Skoulikari',
        when: new Date("1/15/2025")
    },
    {
        title: 'Total Typescript Essentials',
        author: 'Matt Pocock',
        readingGroup: 'Company Book Club',
        when: new Date("9/1/2024")
    },
    {
        title: 'Coderspeak',
        author: 'Guilherme Orlandini Heurich',
        readingGroup: 'WNB.rb Book Club',
        when: new Date("6/1/2024")
    },
    {
        title: 'Practical Object-Oriented Design in Ruby',
        author: 'Sandi Metz',
        readingGroup: 'WNB.rb Book Club',
        when: new Date("12/1/23")
    },
    {
        title: 'Engineering Management for the Rest of Us',
        author: 'Sarah Drasner',
        readingGroup: 'WNB.rb Book Club',
        when: new Date("5/1/2023")
    },
    {
        title: 'Eloquent JavaScript - 3rd Edition',
        author: 'Marijn Haverbeke',
        when: new Date("3/1/2023")
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
        title: 'The Pocket Guide to Debugging',
        author: 'Julia Evans',
        readingGroup: 'WNB.rb Book Club',
        when: new Date("1/1/23"),
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
    {
        title: 'The Pragmatic Programmer - 20th Anniversary Edition',
        author: 'Dave Thomas | Andy Hunt',
        when: new Date("11/1/2021")
    }
]
