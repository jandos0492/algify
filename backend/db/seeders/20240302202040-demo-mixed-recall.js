'use strict';

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "MixedRecalls";
    return queryInterface.bulkInsert(options, [
      {
        no: 102,
        name: 'mixed recall welcaome',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/mixed-recall-welcome.mov'
      },
      {
        no: 103,
        name: 'linked palindrome',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/linked-palindrome-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/linked-palindrome-walkthrough.mov'
      },
      {
        no: 104,
        name: 'middle value',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/middle-value-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/middle-value-walkthrough.mov'
      },
      {
        no: 105,
        name: 'linked list cycle',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/linked-list-cycle-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/linked-list-cycle-walkthrough.mov'
      },
      {
        no: 106,
        name: 'lowest common ancestor',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/lowest-common-ancestor-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/lowest-common-ancestor-walkthrough.mov'
      },
      {
        no: 107,
        name: 'flip tree',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/flip-tree-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/flip-tree-walkthrough.mov'
      },
      {
        no: 108,
        name: 'lefty nodes',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/lefty-nodes-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/lefty-nodes-walkthrough.mov'
      },
      {
        no: 109,
        name: 'can color',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/can-color-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/can-color-walkthrough.mov'
      },
      {
        no: 110,
        name: 'tolerant teams',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/tolerant-teams-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/tolerant-teams-walkthrough.mov'
      },
      {
        no: 111,
        name: 'rare routing',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/rare-routing-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/rare-routing-walkthrough.mov'
      },
      {
        no: 112,
        name: 'max increasing subseq',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/max-increasing-subseq-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/max-increasing-subseq-walkthrough.mov'
      },
      {
        no: 113,
        name: 'positioning plants',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/positioning-plants-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/positioning-plants-walkthrough.mov'
      },
      {
        no: 114,
        name: 'breaking boundaries',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/breaking-boundaries-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/breaking-boundaries-walkthrough.mov'
      },
      {
        no: 115,
        name: 'merge sort',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/merge-sort-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/merge-sort-walkthrough.mov'
      },
      {
        no: 116,
        name: 'combine intervals',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/combine-intervals-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/combine-intervals-walkthrough.mov'
      },
      {
        no: 117,
        name: 'binary search',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/binary-search-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/binary-search-walkthrough.mov'
      },
      {
        no: 118,
        name: 'binary search tree includes',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/binary-search-tree-includes-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/binary-search-tree-includes-walkthrough.mov'
      },
      {
        no: 119,
        name: 'is binary search tree',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/is-binary-search-tree-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/is-binary-search-tree-walkthrough.mov'
      },
      {
        no: 120,
        name: 'post order',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/post-order-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/post-order-walkthrough.mov'
      },
      {
        no: 121,
        name: 'build tree in post',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/build-tree-in-post-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/build-tree-in-post-walkthrough.mov'
      },
      {
        no: 122,
        name: 'build tree in pre',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/build-tree-in-pre-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/build-tree-in-pre-walkthrough.mov'
      },
      {
        no: 123,
        name: 'lexical order',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/lexical-order-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/lexical-order-walkthrough.mov'
      },
      {
        no: 124,
        name: 'detect dictionary',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/detect-dictionary-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/detect-dictionary-walkthrough.mov'
      },
      {
        no: 125,
        name: 'topological order',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/topological-order-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/topological-order-walkthrough.mov'
      },
      {
        no: 126,
        name: 'safe cracking',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/safe-cracking-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/safe-cracking-walkthrough.mov'
      },
      {
        no: 127,
        name: 'string search',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/string-search-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/string-search-walkthrough.mov'
      },
      {
        no: 128,
        name: 'token replace',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/token-replace-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/token-replace-walkthrough.mov'
      },
      {
        no: 129,
        name: 'token transform',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/token-transform-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/token-transform-walkthrough.mov'
      },
      {
        no: 130,
        name: 'congratulations',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/mixed-recall/congratulations.mov',
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
