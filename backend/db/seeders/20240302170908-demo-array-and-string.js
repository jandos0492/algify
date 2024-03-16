'use strict';

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "ArrayAndStrings"
    return queryInterface.bulkInsert(options, [
      {
        no: 6,
        name: "array and string welcome",
        video: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/array-and-string-welcome.mov",
      },
      {
        no: 7,
        name: "uncompress",
        approachVideo: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/uncompress-approach.mov",
        walkthroughVideo: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/uncompress-walkthrough.mov"
      },
      {
        no: 8,
        name: "compress",
        approachVideo: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/compress-approach.mov",
        walkthroughVideo: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/compress-walkthrough.mov"
      },
      {
        no: 9,
        name: "anagrams",
        approachVideo: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/anagrams-approach.mov",
        walkthroughVideo: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/anagrams-walkthrough.mov"
      },
      {
        no: 10,
        name: "most frequent char",
        approachVideo: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/most-frequent-char-approach.mov",
        walkthroughVideo: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/most-frequent-char-walkthrough.mov"
      },
      {
        no: 11,
        name: "pair sum",
        approachVideo: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/pair-sum-approach.mov",
        walkthroughVideo: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/pair-sum-walkthrough.mov"
      },
      {
        no: 12,
        name: "pair product",
        approachVideo: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/pair-product-approach.mov",
        walkthroughVideo: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/pair-product-walkthrough.mov"
      },
      {
        no: 13,
        name: "check in",
        video: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/check-in.mov"
      },
      {
        no: 14,
        name: "intersection",
        approachVideo: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/intersection-approach.mov",
        walkthroughVideo: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/intersection-walkthrough.mov"
      },
      {
        no: 15,
        name: "five sort",
        approachVideo: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/five-sort-approach.mov",
        walkthroughVideo: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/five-sort-walkthrough.mov"
      },
      {
        no: 16,
        name: "array and string wrap up",
        video: "https://algify-videos.s3.us-east-2.amazonaws.com/array-and-string/array-and-string-wrap-up.mov"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
