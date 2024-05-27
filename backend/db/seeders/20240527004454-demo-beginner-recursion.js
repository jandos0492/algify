'use strict';

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "BeginnerRecursions";
    return queryInterface.bulkInsert(options, [
      {
        no: 131,
        name: 'beginner recursion welcome',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/beginner-recursion-welcome.mov'
      },
      {
        no: 132,
        name: 'beginner recursion intro',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/beginner-recursion-intro.mov'
      },
      {
        no: 133,
        name: 'beginner recursion warm up',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/beginner-recursion-warm-up.mov'
      },
      {
        no: 134,
        name: 'sum numbers recursive',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/sum-numbers-recursive-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/sum-numbers-recursive-walkthrough.mov'
      },
      {
        no: 135,
        name: 'factorial',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/factorial-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/factorial-walkthrough.mov'
      },
      {
        no: 136,
        name: 'sum of lengths',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/sum-of-length-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/sum-of-length-walkthrough.mov'
      },
      {
        no: 137,
        name: 'reverse string recursive',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/reverse-string-recursive-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/reverse-string-recursive-walkthrough.mov'
      },
      {
        no: 138,
        name: 'palindrome recursive',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/palindrome-recursive-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/palindrome-recursive-walkthrough.mov'
      },
      {
        no: 139,
        name: 'fibonacci',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/fibonacci-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/fibonacci-walkthrough.mov'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

