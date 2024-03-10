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
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/stack/stack-welcome.mp4'
      },
      {
        no: 89,
        name: 'paired parentheses',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/stack/paired-parentheses-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/stack/paired-parentheses-walkthrough.mp4'
      },
      {
        no: 90,
        name: 'befitting brackets',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/stack/befitting-brackets-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/stack/befitting-brackets-walkthrough.mp4'
      },
      {
        no: 91,
        name: 'decompress braces',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/stack/decompress-braces-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/stack/decompress-braces-walkthrough.mp4'
      },
      {
        no: 92,
        name: 'nesting score',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/stack/nesting-score-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/stack/nesting-score-walkthrough.mp4'
      },
      {
        no: 93,
        name: 'stack wrap up',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/stack/stack-wrap-up.mp4'
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
