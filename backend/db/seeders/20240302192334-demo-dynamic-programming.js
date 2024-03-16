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
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/dynamic-programming-welcome.mov'
      },
      {
        no: 72,
        name: 'fib',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/fib-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/fib-walkthrough.mov'
      },
      {
        no: 73,
        name: 'tribonacci',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/tribonacci-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/tribonacci-walkthrough.mov'
      },
      {
        no: 74,
        name: 'sum possible',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/sum-possible-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/sum-possible-walkthrough.mov'
      },
      {
        no: 75,
        name: 'min change',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/min-change-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/min-change-walkthrough.mov'
      },
      {
        no: 76,
        name: 'count paths',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/count-paths-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/count-paths-walkthrough.mov'
      },
      {
        no: 77,
        name: 'max path sum',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/max-path-sum-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/max-path-sum-walkthrough.mov'
      },
      {
        no: 78,
        name: 'non adjacent sum',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/non-adjacent-sum-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/non-adjacent-sum-walkthrough.mov'
      },
      {
        no: 79,
        name: 'summing squares',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/summing-squares-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/summing-squares-walkthrough.mov'
      },
      {
        no: 80,
        name: 'counting change',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/counting-change-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/counting-change-walkthrough.mov'
      },
      {
        no: 81,
        name: 'array stepper',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/array-stepper-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/array-stepper-walkthrough.mov'
      },
      {
        no: 82,
        name: 'max palin subsequence',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/max-palin-subsequence-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/max-palin-subsequence-walkthrough.mov'
      },
      {
        no: 83,
        name: 'overlap subsequence',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/overlap-subsequence-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/overlap-subsequence-walkthrough.mov'
      },
      {
        no: 84,
        name: 'can concat',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/can-concat-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/can-concat-walkthrough.mov'
      },
      {
        no: 85,
        name: 'quickest concat',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/quickest-concat-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/quickest-concat-walkthrough.mov'
      },
      {
        no: 86,
        name: 'knightly number',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/knightly-number-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/knightly-number-walkthrough.mov'
      },
      {
        no: 87,
        name: 'dynamic programming wrap up',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/dynamic-programming-wrap-up.mov'
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
