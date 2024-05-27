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
        no: 80,
        name: 'dynamic programming welcome',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/dynamic-programming-welcome.mov'
      },
      {
        no: 81,
        name: 'fib',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/fib-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/fib-walkthrough.mov'
      },
      {
        no: 82,
        name: 'tribonacci',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/tribonacci-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/tribonacci-walkthrough.mov'
      },
      {
        no: 83,
        name: 'sum possible',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/sum-possible-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/sum-possible-walkthrough.mov'
      },
      {
        no: 84,
        name: 'min change',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/min-change-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/min-change-walkthrough.mov'
      },
      {
        no: 85,
        name: 'count paths',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/count-paths-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/count-paths-walkthrough.mov'
      },
      {
        no: 86,
        name: 'max path sum',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/max-path-sum-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/max-path-sum-walkthrough.mov'
      },
      {
        no: 87,
        name: 'non adjacent sum',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/non-adjacent-sum-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/non-adjacent-sum-walkthrough.mov'
      },
      {
        no: 88,
        name: 'summing squares',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/summing-squares-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/summing-squares-walkthrough.mov'
      },
      {
        no: 89,
        name: 'counting change',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/counting-change-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/counting-change-walkthrough.mov'
      },
      {
        no: 90,
        name: 'array stepper',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/array-stepper-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/array-stepper-walkthrough.mov'
      },
      {
        no: 91,
        name: 'max palin subsequence',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/max-palin-subsequence-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/max-palin-subsequence-walkthrough.mov'
      },
      {
        no: 92,
        name: 'overlap subsequence',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/overlap-subsequence-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/overlap-subsequence-walkthrough.mov'
      },
      {
        no: 93,
        name: 'can concat',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/can-concat-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/can-concat-walkthrough.mov'
      },
      {
        no: 94,
        name: 'quickest concat',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/quickest-concat-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/quickest-concat-walkthrough.mov'
      },
      {
        no: 95,
        name: 'knightly number',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/knightly-number-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/dynamic-programming/knightly-number-walkthrough.mov'
      },
      {
        no: 96,
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
