const array = ["stack welcome", "paired parentheses", "befitting brackets", "decompress braces", "nesting score", "stack wrap up"];
// console.log(array.length);



const checkVideoString = (s) => {
    return s.includes("welcome") || s.includes("intro") || s.includes("pep talk") || s.includes("wrap up") || s.includes("warm up") || s.includes("slow and steady");
}

const createSeeder = (array) => {
    const result = [];

    array.forEach((elem, index) => {
        const obj = {};
        obj.no = index + 88;
        obj.name = elem;
        const videoName = elem.split(" ").join("-");
        if (checkVideoString(elem)) {
            obj.video = `https://structy-videos.s3.us-east-2.amazonaws.com/stack/${videoName}.mp4`;
        } else {
            obj.approachVideo = `https://structy-videos.s3.us-east-2.amazonaws.com/stack/${videoName}-approach.mp4`;
            obj.walkthroughVideo = `https://structy-videos.s3.us-east-2.amazonaws.com/stack/${videoName}-walkthrough.mp4`;
        }
        result.push(obj);
    });

    return result;
};

console.log(createSeeder(array));