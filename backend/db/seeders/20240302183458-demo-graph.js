'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Graphs", [
      {
        no: 35,
        name: 'binary tree welcome',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/binary-tree-welcome.mp4'
      },
      {
        no: 36,
        name: 'binary tree intro',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/binary-tree-intro.mp4'
      },
      {
        no: 37,
        name: 'binary tree warm up',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/binary-tree-warm-up.mp4'
      },
      {
        no: 38,
        name: 'depth first values',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/depth-first-values-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/depth-first-values-walkthrough.mp4'
      },
      {
        no: 39,
        name: 'breadth first values',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/breadth-first-values-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/breadth-first-values-walkthrough.mp4'
      },
      {
        no: 40,
        name: 'tree sum',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-sum-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-sum-walkthrough.mp4'
      },
      {
        no: 41,
        name: 'tree includes',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-includes-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-includes-walkthrough.mp4'
      },
      {
        no: 42,
        name: 'tree min value',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-min-value-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-min-value-walkthrough.mp4'
      },
      {
        no: 43,
        name: 'max root to leaf path sum',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/max-root-to-leaf-path-sum-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/max-root-to-leaf-path-sum-walkthrough.mp4'
      },
      {
        no: 44,
        name: 'tree path finder',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-path-finder-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-path-finder-walkthrough.mp4'
      },
      {
        no: 45,
        name: 'tree value count',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-value-count-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-value-count-walkthrough.mp4'
      },
      {
        no: 46,
        name: 'how high',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/how-high-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/how-high-walkthrough.mp4'
      },
      {
        no: 47,
        name: 'bottom right value',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/bottom-right-value-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/bottom-right-value-walkthrough.mp4'
      },
      {
        no: 48,
        name: 'all tree paths',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/all-tree-paths-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/all-tree-paths-walkthrough.mp4'
      },
      {
        no: 49,
        name: 'level averages',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/level-averages-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/level-averages-walkthrough.mp4'
      },
      {
        no: 50,
        name: 'leaf list',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/leaf-list-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/leaf-list-walkthrough.mp4'
      },
      {
        no: 51,
        name: 'binary tree wrap up',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/binary-tree/binary-tree-wrap-up.mp4'
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
