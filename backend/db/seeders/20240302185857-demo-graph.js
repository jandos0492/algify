'use strict';

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "Graphs";
    return queryInterface.bulkInsert(options, [
      {
        no: 52,
        name: 'graph welcome',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/graph-welcome.mp4'
      },
      {
        no: 53,
        name: 'graph intro',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/graph-intro.mp4'
      },
      {
        no: 54,
        name: 'graph warm up',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/graph-warm-up.mp4'
      },
      {
        no: 55,
        name: 'has path',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/has-path-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/has-path-walkthrough.mp4'
      },
      {
        no: 56,
        name: 'undirected path',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/undirected-path-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/undirected-path-walkthrough.mp4'
      },
      {
        no: 57,
        name: 'connected components count',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/connected-components-count-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/connected-components-count-walkthrough.mp4'
      },
      {
        no: 58,
        name: 'largest component',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/largest-component-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/largest-component-walkthrough.mp4'
      },
      {
        no: 59,
        name: 'slow and steady',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/slow-and-steady.mp4',
      },
      {
        no: 60,
        name: 'shortest path',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/shortest-path-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/shortest-path-walkthrough.mp4'
      },
      {
        no: 61,
        name: 'island count',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/island-count-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/island-count-walkthrough.mp4'
      },
      {
        no: 62,
        name: 'minimum island',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/minimum-island-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/minimum-island-walkthrough.mp4'
      },
      {
        no: 63,
        name: 'closest carrot',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/closest-carrot-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/closest-carrot-walkthrough.mp4'
      },
      {
        no: 64,
        name: 'longest path',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/longest-path-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/longest-path-walkthrough.mp4'
      },
      {
        no: 65,
        name: 'semesters required',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/semesters-required-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/semesters-required-walkthrough.mp4'
      },
      {
        no: 66,
        name: 'best bridge',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/best-bridge-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/best-bridge-walkthrough.mp4'
      },
      {
        no: 67,
        name: 'has cycle',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/has-cycle-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/has-cycle-walkthrough.mp4'
      },
      {
        no: 68,
        name: 'prereqs possible',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/prereqs-possible-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/prereqs-possible-walkthrough.mp4'
      },
      {
        no: 69,
        name: 'knight attack',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/knight-attack-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/knight-attack-walkthrough.mp4'
      },
      {
        no: 70,
        name: 'graph wrap up',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/graph/graph-wrap-up.mp4'
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
