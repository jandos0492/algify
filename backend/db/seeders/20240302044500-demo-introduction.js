'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Introductions", [
      {
        "no": 1,
        "name": "course introduction",
        "video": "https://structy-videos.s3.us-east-2.amazonaws.com/introduction/course-introduction.mp4",
      },
      {
        "no": 2,
        "name": "code workspace tour",
        "video": "https://structy-videos.s3.us-east-2.amazonaws.com/introduction/code-workspace-tour.mp4"
      },
      {
        "no": 3,
        "name": "hey programmer",
        "approachVideo": "https://structy-videos.s3.us-east-2.amazonaws.com/introduction/hey-programmer-approach.mp4",
        "walkthroughVideo": "https://structy-videos.s3.us-east-2.amazonaws.com/introduction/hey-programmer-walkthrough.mp4"
      },
      {
        "no": 4,
        "name": "max value",
        "approachVideo": "https://structy-videos.s3.us-east-2.amazonaws.com/introduction/max-value-approach.mp4",
        "walkthroughVideo": "https://structy-videos.s3.us-east-2.amazonaws.com/introduction/max-value-walkthrough.mp4"
      },
      {
        "no": 5,
        "name": "is prime",
        "approachVideo": "https://structy-videos.s3.us-east-2.amazonaws.com/introduction/is-prime-approach.mp4",
        "walkthroughVideo": "https://structy-videos.s3.us-east-2.amazonaws.com/introduction/is-prime-walkthrough.mp4"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};
