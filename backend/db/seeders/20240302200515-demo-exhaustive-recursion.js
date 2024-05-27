'use strict';

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "ExhaustiveRecursions";
    queryInterface.bulkInsert(options, [
      {
        no: 103,
        name: 'exhaustive recursion welcome',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/exhaustive-recursion-welcome.mov'
      },
      {
        no: 104,
        name: 'subsets',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/subsets-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/subsets-walkthrough.mov'
      },
      {
        no: 105,
        name: 'permutations',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/permutations-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/permutations-walkthrough.mov'
      },
      {
        no: 106,
        name: 'break time',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/break-time.mov',
      },
      {
        no: 107,
        name: 'create combinations',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/create-combinations-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/create-combinations-walkthrough.mov'
      },
      {
        no: 108,
        name: 'parenthetical possibilities',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/parenthetical-possibilities-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/parenthetical-possibilities-walkthrough.mov'
      },
      {
        no: 109,
        name: 'substitute synonyms',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/substitute-synonyms-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/substitute-synonyms-walkthrough.mov'
      },
      {
        no: 110,
        name: 'exhaustive recursion wrap up',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/exhaustive-recursion/exhaustive-recursion-wrap-up.mov'
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
