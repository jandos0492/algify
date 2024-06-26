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
        no: 17,
        name: 'beginner recursion welcome',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/beginner-recursion-welcome.mov'
      },
      {
        no: 18,
        name: 'beginner recursion intro',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/beginner-recursion-intro.mov'
      },
      {
        no: 19,
        name: 'beginner recursion warm up',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/beginner-recursion-warm-up.mov'
      },
      {
        no: 20,
        name: 'sum numbers recursive',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/sum-numbers-recursive-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/sum-numbers-recursive-walkthrough.mov'
      },
      {
        no: 21,
        name: 'factorial',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/factorial-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/factorial-walkthrough.mov'
      },
      {
        no: 22,
        name: 'sum of lengths',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/sum-of-length-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/sum-of-length-walkthrough.mov'
      },
      {
        no: 23,
        name: 'reverse string recursive',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/reverse-string-recursive-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/reverse-string-recursive-walkthrough.mov'
      },
      {
        no: 24,
        name: 'palindrome recursive',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/palindrome-recursive-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/beginner-recursion/palindrome-recursive-walkthrough.mov'
      },
      {
        no: 25,
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

