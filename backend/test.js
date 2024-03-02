const array = ["graph welcome", "graph intro", "graph warm up", "has path", "undirected path", "connected components count", "largest component", "slow and steady", "shortest path", "island count", "minimum island", "closest carrot", "longest path", "semesters required", "best bridge", "has cycle", "prereqs possible", "knight attack", "graph wrap up"]
// console.log(array.length);



const checkVideoString = (s) => {
    return s.includes("welcome") || s.includes("intro") || s.includes("pep talk") || s.includes("wrap up") || s.includes("warm up") || s.includes("slow and steady");
}

const createSeeder = (array) => {
    const result = [];

    array.forEach((elem, index) => {
        const obj = {};
        obj.no = index + 52;
        obj.name = elem;
        const videoName = elem.split(" ").join("-");
        if (checkVideoString(elem)) {
            obj.video = `https://structy-videos.s3.us-east-2.amazonaws.com/graph/${videoName}.mp4`;
        } else {
            obj.approachVideo = `https://structy-videos.s3.us-east-2.amazonaws.com/graph/${videoName}-approach.mp4`;
            obj.walkthroughVideo = `https://structy-videos.s3.us-east-2.amazonaws.com/graph/${videoName}-walkthrough.mp4`;
        }
        result.push(obj);
    });

    return result;
};

console.log(createSeeder(array));