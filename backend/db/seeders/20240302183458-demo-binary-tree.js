'use strict';

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "BinaryTrees"
    return queryInterface.bulkInsert(options, [
      {
        no: 44,
        name: 'binary tree welcome',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/binary-tree-welcome.mov'
      },
      {
        no: 45,
        name: 'binary tree intro',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/binary-tree-intro.mov'
      },
      {
        no: 46,
        name: 'binary tree warm up',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/binary-tree-warm-up.mov'
      },
      {
        no: 47,
        name: 'depth first values',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/depth-first-values-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/depth-first-values-walkthrough.mov'
      },
      {
        no: 48,
        name: 'breadth first values',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/breadth-first-values-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/breadth-first-values-walkthrough.mov'
      },
      {
        no: 49,
        name: 'tree sum',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-sum-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-sum-walkthrough.mov'
      },
      {
        no: 50,
        name: 'tree includes',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-includes-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-includes-walkthrough.mov'
      },
      {
        no: 51,
        name: 'tree min value',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-min-value-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-min-value-walkthrough.mov'
      },
      {
        no: 52,
        name: 'max root to leaf path sum',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/max-root-to-leaf-path-sum-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/max-root-to-leaf-path-sum-walkthrough.mov'
      },
      {
        no: 53,
        name: 'tree path finder',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-path-finder-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-path-finder-walkthrough.mov'
      },
      {
        no: 54,
        name: 'tree value count',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-value-count-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/tree-value-count-walkthrough.mov'
      },
      {
        no: 55,
        name: 'how high',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/how-high-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/how-high-walkthrough.mov'
      },
      {
        no: 56,
        name: 'bottom right value',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/bottom-right-value-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/bottom-right-value-walkthrough.mov'
      },
      {
        no: 57,
        name: 'all tree paths',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/all-tree-paths-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/all-tree-paths-walkthrough.mov'
      },
      {
        no: 58,
        name: 'level averages',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/level-averages-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/level-averages-walkthrough.mov'
      },
      {
        no: 59,
        name: 'leaf list',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/leaf-list-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/leaf-list-walkthrough.mov'
      },
      {
        no: 60,
        name: 'binary tree wrap up',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/binary-tree/binary-tree-wrap-up.mov'
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
