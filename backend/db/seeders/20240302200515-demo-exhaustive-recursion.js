'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert("ExhaustiveRecursions", [
      {
        no: 94,
        name: 'exhaustive recursion welcome',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/exhaustive-recursion-welcome.mp4'
      },
      {
        no: 95,
        name: 'subsets',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/subsets-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/subsets-walkthrough.mp4'
      },
      {
        no: 96,
        name: 'permutations',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/permutations-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/permutations-walkthrough.mp4'
      },
      {
        no: 97,
        name: 'break time',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/break-time.mp4',
      },
      {
        no: 98,
        name: 'create combinations',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/create-combinations-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/create-combinations-walkthrough.mp4'
      },
      {
        no: 99,
        name: 'parenthetical possibilities',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/parenthetical-possibilities-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/parenthetical-possibilities-walkthrough.mp4'
      },
      {
        no: 100,
        name: 'substitute synonyms',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/substitute-synonyms-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/substitute-synonyms-walkthrough.mp4'
      },
      {
        no: 101,
        name: 'exhaustive recursion wrap up',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/exhaustive-recursion-wrap-up.mp4'
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
