export interface IFeedDataItem {
    userName: string;
    userImageName: string;
    userMood: string;
    isEdited: boolean;
    activeMinsAgo: number;
    commentCount: number;
    data: string;
}

const feedData = [
    {
        userName: 'Theresa Webb',
        userImageName: 'userImage1',
        isEdited: false,
        userMood: '👋',
        activeMinsAgo: 5,
        commentCount: 24,
        data: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
        userName: 'Marvin McKinney',
        userImageName: 'userImage2',
        isEdited: true,
        userMood: '😞',
        activeMinsAgo: 8,
        commentCount: 24,
        data: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    }
] as IFeedDataItem[];

export default feedData;