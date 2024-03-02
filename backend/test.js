const array = ["linked list welcome", "linked list intro", "linked list warm up", "linked list values", "sum list", "linked list find", "get node value", "reverse list", "zipper lists", "merge lists", "pep talk", "is univalue list", "longest streak", "remove node", "insert node", "create linked list", "add lists", "linked list wrap up"]


const checkVideoString = (s) => {
    return s.includes("welcome") || s.includes("intro") || s.includes("pep talk") || s.includes("wrap up") || s.includes("warm up");
}

const createSeeder = (array) => {
    const result = [];

    array.forEach((elem, index) => {
        const obj = {};
        obj.no = index + 17;
        obj.name = elem;
        const videoName = elem.split(" ").join("-");
        if (checkVideoString(elem)) {
            obj.video = `https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/${videoName}.mp4`;
        } else {
            obj.approachVideo = `https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/${videoName}-approach.mp4`;
            obj.walkthroughVideo = `https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/${videoName}-walkthrough.mp4`;
        }
        result.push(obj);
    });

    return result;
};

console.log(createSeeder(array));