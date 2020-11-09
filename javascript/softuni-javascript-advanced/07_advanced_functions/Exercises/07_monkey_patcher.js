function result(operation) {
    this.balance = this.upvotes - this.downvotes;
    const operations = {
        upvote: () => {
            this.upvotes++;
        },
        downvote: () => {
            this.downvotes++;
        },
        score: () => {
            const {reportedUpvotes, reportedDownvotes} = getReportedVotes();
            const rating = getRating();
            return [reportedUpvotes, reportedDownvotes, this.balance, rating];
        }
    };

    const getReportedVotes = () => {
        const {upvotes, downvotes} = this;
        let reportedUpvotes = upvotes;
        let reportedDownvotes = downvotes;

        if (upvotes + downvotes > 50) {
            const higherNumber = Math.max(Math.abs(upvotes), Math.abs(downvotes));
            const increment = Math.ceil(higherNumber * 0.25);
            reportedUpvotes = upvotes >= 0 ? upvotes + increment : upvotes - increment;
            reportedDownvotes = downvotes >= 0 ? downvotes + increment : downvotes - increment;
        }

        return {  reportedUpvotes, reportedDownvotes}
    };

    const getRating  = () => {
        const {upvotes, downvotes, balance} = this;
        let rating;
        if (upvotes + downvotes < 10) {
            rating  = 'new';
        } else if ( upvotes / (upvotes + downvotes) > 0.66 ) {
            rating = 'hot';
        } else if (balance >= 0 && (upvotes > 100 || downvotes > 100)) {
            rating = 'controversial';
        } else if (balance < 0) {
            rating = 'unpopular';
        } else {
            rating  = 'new';
        }
        return rating;
    };

    if (operation === 'score') {
        return operations[operation]();
    } else {
        operations[operation]();
    }
}


var forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

result.call(forumPost, 'upvote');

var answer = result.call(forumPost, 'score');
console.log(answer)