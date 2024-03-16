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
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/graph-welcome.mov'
      },
      {
        no: 53,
        name: 'graph intro',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/graph-intro.mov'
      },
      {
        no: 54,
        name: 'graph warm up',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/graph-warm-up.mov'
      },
      {
        no: 55,
        name: 'has path',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/has-path-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/has-path-walkthrough.mov'
      },
      {
        no: 56,
        name: 'undirected path',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/undirected-path-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/undirected-path-walkthrough.mov'
      },
      {
        no: 57,
        name: 'connected components count',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/connected-components-count-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/connected-components-count-walkthrough.mov'
      },
      {
        no: 58,
        name: 'largest component',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/largest-component-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/largest-component-walkthrough.mov'
      },
      {
        no: 59,
        name: 'slow and steady',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/slow-and-steady.mov',
      },
      {
        no: 60,
        name: 'shortest path',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/shortest-path-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/shortest-path-walkthrough.mov'
      },
      {
        no: 61,
        name: 'island count',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/island-count-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/island-count-walkthrough.mov'
      },
      {
        no: 62,
        name: 'minimum island',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/minimum-island-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/minimum-island-walkthrough.mov'
      },
      {
        no: 63,
        name: 'closest carrot',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/closest-carrot-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/closest-carrot-walkthrough.mov'
      },
      {
        no: 64,
        name: 'longest path',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/longest-path-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/longest-path-walkthrough.mov'
      },
      {
        no: 65,
        name: 'semesters required',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/semesters-required-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/semesters-required-walkthrough.mov'
      },
      {
        no: 66,
        name: 'best bridge',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/best-bridge-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/best-bridge-walkthrough.mov'
      },
      {
        no: 67,
        name: 'has cycle',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/has-cycle-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/has-cycle-walkthrough.mov'
      },
      {
        no: 68,
        name: 'prereqs possible',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/prereqs-possible-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/prereqs-possible-walkthrough.mov'
      },
      {
        no: 69,
        name: 'knight attack',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/knight-attack-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/knight-attack-walkthrough.mov'
      },
      {
        no: 70,
        name: 'graph wrap up',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/graph/graph-wrap-up.mov'
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
