'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("MixedRecalls", [
      {
        no: 102,
        name: 'mixed recall welcome',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/mixed-recall-welcome.mp4'
      },
      {
        no: 103,
        name: 'linked palindrome',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/linked-palindrome-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/linked-palindrome-walkthrough.mp4'
      },
      {
        no: 104,
        name: 'middle value',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/middle-value-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/middle-value-walkthrough.mp4'
      },
      {
        no: 105,
        name: 'linked list cycle',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/linked-list-cycle-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/linked-list-cycle-walkthrough.mp4'
      },
      {
        no: 106,
        name: 'lowest common ancestor',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/lowest-common-ancestor-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/lowest-common-ancestor-walkthrough.mp4'
      },
      {
        no: 107,
        name: 'flip tree',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/flip-tree-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/flip-tree-walkthrough.mp4'
      },
      {
        no: 108,
        name: 'lefty nodes',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/lefty-nodes-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/lefty-nodes-walkthrough.mp4'
      },
      {
        no: 109,
        name: 'can color',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/can-color-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/can-color-walkthrough.mp4'
      },
      {
        no: 110,
        name: 'tolerant teams',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/tolerant-teams-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/tolerant-teams-walkthrough.mp4'
      },
      {
        no: 111,
        name: 'rare routing',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/rare-routing-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/rare-routing-walkthrough.mp4'
      },
      {
        no: 112,
        name: 'max increasing subseq',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/max-increasing-subseq-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/max-increasing-subseq-walkthrough.mp4'
      },
      {
        no: 113,
        name: 'positioning plants',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/positioning-plants-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/positioning-plants-walkthrough.mp4'
      },
      {
        no: 114,
        name: 'breaking boundaries',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/breaking-boundaries-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/breaking-boundaries-walkthrough.mp4'
      },
      {
        no: 115,
        name: 'merge sort',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/merge-sort-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/merge-sort-walkthrough.mp4'
      },
      {
        no: 116,
        name: 'combine intervals',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/combine-intervals-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/combine-intervals-walkthrough.mp4'
      },
      {
        no: 117,
        name: 'binary search',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/binary-search-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/binary-search-walkthrough.mp4'
      },
      {
        no: 118,
        name: 'binary search tree includes',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/binary-search-tree-includes-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/binary-search-tree-includes-walkthrough.mp4'
      },
      {
        no: 119,
        name: 'is binary search tree',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/is-binary-search-tree-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/is-binary-search-tree-walkthrough.mp4'
      },
      {
        no: 120,
        name: 'post order',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/post-order-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/post-order-walkthrough.mp4'
      },
      {
        no: 121,
        name: 'build tree in post',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/build-tree-in-post-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/build-tree-in-post-walkthrough.mp4'
      },
      {
        no: 122,
        name: 'build tree in pre',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/build-tree-in-pre-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/build-tree-in-pre-walkthrough.mp4'
      },
      {
        no: 123,
        name: 'lexical order',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/lexical-order-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/lexical-order-walkthrough.mp4'
      },
      {
        no: 124,
        name: 'detect dictionary',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/detect-dictionary-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/detect-dictionary-walkthrough.mp4'
      },
      {
        no: 125,
        name: 'topological order',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/topological-order-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/topological-order-walkthrough.mp4'
      },
      {
        no: 126,
        name: 'safe cracking',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/safe-cracking-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/safe-cracking-walkthrough.mp4'
      },
      {
        no: 127,
        name: 'string search',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/string-search-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/string-search-walkthrough.mp4'
      },
      {
        no: 128,
        name: 'token replace',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/token-replace-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/token-replace-walkthrough.mp4'
      },
      {
        no: 129,
        name: 'token transform',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/token-transform-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/token-transform-walkthrough.mp4'
      },
      {
        no: 130,
        name: 'congratulations',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/mixed-recall/congratulations.mp4',
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
