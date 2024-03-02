const array = ["mixed recall welcome", "linked palindrome", "middle value", "linked list cycle", "lowest common ancestor", "flip tree", "lefty nodes", "can color", "tolerant teams", "rare routing", "max increasing subseq", "positioning plants", "breaking boundaries", "merge sort", "combine intervals", "binary search", "binary search tree includes", "is binary search tree", "post order", "build tree in post", "build tree in pre", "lexical order", "detect dictionary", "topological order", "safe cracking", "string search", "token replace", "token transform", "congratulations"];
// console.log(array.length);



const checkVideoString = (s) => {
    return s.includes("welcome") || s.includes("intro") || s.includes("pep talk") || s.includes("wrap up") || s.includes("warm up") || s.includes("slow and steady" || s.includes("break time"));
}

const createSeeder = (array) => {
    const result = [];

    array.forEach((elem, index) => {
        const obj = {};
        obj.no = index + 102;
        obj.name = elem;
        const videoName = elem.split(" ").join("-");
        if (checkVideoString(elem)) {
            obj.video = `https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/${videoName}.mp4`;
        } else {
            obj.approachVideo = `https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/${videoName}-approach.mp4`;
            obj.walkthroughVideo = `https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/${videoName}-walkthrough.mp4`;
        }
        result.push(obj);
    });

    return result;
};

console.log(createSeeder(array));