interface IJusticeBoardData {
    id: number;
    author: string;
    description: string;
    title: string;
    date: string;
    category: string;
    status: string;
    votes: number;
    comments: number;
    views: number;
    upvoted: boolean;
    downvoted: boolean;
}

// create 3 justice board data
const justiceBoardData: IJusticeBoardData[] = [
    {
        id: 1,
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nisl. Donec euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nisl.',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: '2019-01-01',
        category: 'Category 1',
        status: 'Open',
        votes: 10,
        comments: 5,
        views: 100,
        upvoted: false,
        downvoted: false
    },
    {
        id: 2,
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nisl. Donec euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nisl.',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: '2019-01-01',
        category: 'Category 2',
        status: 'Open',
        votes: 10,
        comments: 5,
        views: 100,
        upvoted: false,
        downvoted: false
    },
    {
        id: 3,
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nisl. Donec euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nisl.',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: '2019-01-01',
        category: 'Category 3',
        status: 'Open',
        votes: 10,
        comments: 5,
        views: 100,
        upvoted: false,
        downvoted: false
    }
];


export default justiceBoardData;
