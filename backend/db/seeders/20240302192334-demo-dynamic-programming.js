'use strict';

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "DynamicProgrammings";
    return queryInterface.bulkInsert(options, [
      {
        no: 71,
        name: 'dynamic programming welcome',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/dynamic-programming-welcome.mp4'
      },
      {
        no: 72,
        name: 'fib',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/fib-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/fib-walkthrough.mp4'
      },
      {
        no: 73,
        name: 'tribonacci',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/tribonacci-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/tribonacci-walkthrough.mp4'
      },
      {
        no: 74,
        name: 'sum possible',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/sum-possible-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/sum-possible-walkthrough.mp4'
      },
      {
        no: 75,
        name: 'min change',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/min-change-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/min-change-walkthrough.mp4'
      },
      {
        no: 76,
        name: 'count paths',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/count-paths-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/count-paths-walkthrough.mp4'
      },
      {
        no: 77,
        name: 'max path sum',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/max-path-sum-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/max-path-sum-walkthrough.mp4'
      },
      {
        no: 78,
        name: 'non adjacent sum',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/non-adjacent-sum-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/non-adjacent-sum-walkthrough.mp4'
      },
      {
        no: 79,
        name: 'summing squares',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/summing-squares-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/summing-squares-walkthrough.mp4'
      },
      {
        no: 80,
        name: 'counting change',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/counting-change-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/counting-change-walkthrough.mp4'
      },
      {
        no: 81,
        name: 'array stepper',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/array-stepper-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/array-stepper-walkthrough.mp4'
      },
      {
        no: 82,
        name: 'max palin subsequence',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/max-palin-subsequence-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/max-palin-subsequence-walkthrough.mp4'
      },
      {
        no: 83,
        name: 'overlap subsequence',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/overlap-subsequence-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/overlap-subsequence-walkthrough.mp4'
      },
      {
        no: 84,
        name: 'can concat',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/can-concat-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/can-concat-walkthrough.mp4'
      },
      {
        no: 85,
        name: 'quickest concat',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/quickest-concat-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/quickest-concat-walkthrough.mp4'
      },
      {
        no: 86,
        name: 'knightly number',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/knightly-number-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/knightly-number-walkthrough.mp4'
      },
      {
        no: 87,
        name: 'dynamic programming wrap up',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/dynamic-programming/dynamic-programming-wrap-up.mp4'
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
