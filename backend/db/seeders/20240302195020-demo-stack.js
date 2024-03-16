'use strict';

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "Stacks";
    queryInterface.bulkInsert(options, [
      {
        no: 88,
        name: 'stack welcome',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/stack/stack-welcome.mov'
      },
      {
        no: 89,
        name: 'paired parentheses',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/stack/paired-parentheses-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/stack/paired-parentheses-walkthrough.mov'
      },
      {
        no: 90,
        name: 'befitting brackets',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/stack/befitting-brackets-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/stack/befitting-brackets-walkthrough.mov'
      },
      {
        no: 91,
        name: 'decompress braces',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/stack/decompress-braces-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/stack/decompress-braces-walkthrough.mov'
      },
      {
        no: 92,
        name: 'nesting score',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/stack/nesting-score-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/stack/nesting-score-walkthrough.mov'
      },
      {
        no: 93,
        name: 'stack wrap up',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/stack/stack-wrap-up.mov'
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
