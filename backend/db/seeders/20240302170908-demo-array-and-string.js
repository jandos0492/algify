'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("ArrayAndStrings", [
      {
        no: 6,
        name: "array and string welcome",
        video: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/array-and-string-welcome.mp4",
      },
      {
        no: 7,
        name: "uncompress",
        approachVideo: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/uncompress-approach.mp4",
        walkthroughVideo: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/uncompress-walkthrough.mp4"
      },
      {
        no: 8,
        name: "compress",
        approachVideo: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/compress-approach.mp4",
        walkthroughVideo: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/compress-walkthrough.mp4"
      },
      {
        no: 9,
        name: "anagrams",
        approachVideo: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/anagrams-approach.mp4",
        walkthroughVideo: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/anagrams-walkthrough.mp4"
      },
      {
        no: 10,
        name: "most frequent char",
        approachVideo: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/most-frequent-char-approach.mp4",
        walkthroughVideo: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/most-frequent-char-walkthrough.mp4"
      },
      {
        no: 11,
        name: "pair sum",
        approachVideo: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/pair-sum-approach.mp4",
        walkthroughVideo: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/pair-sum-walkthrough.mp4"
      },
      {
        no: 12,
        name: "pair product",
        approachVideo: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/pair-product-approach.mp4",
        walkthroughVideo: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/pair-product-walkthrough.mp4"
      },
      {
        no: 13,
        name: "check in",
        video: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/check-in.mp4"
      },
      {
        no: 14,
        name: "intersection",
        approachVideo: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/intersection-approach.mp4",
        walkthroughVideo: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/intersection-walkthrough.mp4"
      },
      {
        no: 15,
        name: "five sort",
        approachVideo: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/five-sort-approach.mp4",
        walkthroughVideo: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/five-sort-walkthrough.mp4"
      },
      {
        no: 16,
        name: "array and string wrap up",
        video: "https://structy-videos.s3.us-east-2.amazonaws.com/array-and-string/array-and-string-wrap-up.mp4"
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
