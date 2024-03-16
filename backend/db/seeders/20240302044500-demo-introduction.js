'use strict';

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "Introductions"
    return await queryInterface.bulkInsert(options, [
      {
        "no": 1,
        "name": "course introduction",
        "video": "https://algify-videos.s3.us-east-2.amazonaws.com/introduction/course-introduction.mov",
      },
      {
        "no": 2,
        "name": "code workspace tour",
        "video": "https://algify-videos.s3.us-east-2.amazonaws.com/introduction/code-workspace-tour.mov"
      },
      {
        "no": 3,
        "name": "hey programmer",
        "approachVideo": "https://algify-videos.s3.us-east-2.amazonaws.com/introduction/hey-programmer-approach.mov",
        "walkthroughVideo": "https://algify-videos.s3.us-east-2.amazonaws.com/introduction/hey-programmer-walkthrough.mov"
      },
      {
        "no": 4,
        "name": "max value",
        "approachVideo": "https://algify-videos.s3.us-east-2.amazonaws.com/introduction/max-value-approach.mov",
        "walkthroughVideo": "https://algify-videos.s3.us-east-2.amazonaws.com/introduction/max-value-walkthrough.mov"
      },
      {
        "no": 5,
        "name": "is prime",
        "approachVideo": "https://algify-videos.s3.us-east-2.amazonaws.com/introduction/is-prime-approach.mov",
        "walkthroughVideo": "https://algify-videos.s3.us-east-2.amazonaws.com/introduction/is-prime-walkthrough.mov"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};
