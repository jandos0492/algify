'use strict';

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "LinkedLists";
    return queryInterface.bulkInsert(options, [
      {
        no: 26,
        name: 'linked list welcome',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/linked-list-welcome.mov'
      },
      {
        no: 27,
        name: 'linked list intro',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/linked-list-intro.mov'
      },
      {
        no: 29,
        name: 'linked list warm up',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/linked-list-warm-up.mov'
      },
      {
        no: 29,
        name: 'linked list values',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/linked-list-values-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/linked-list-values-walkthrough.mov'
      },
      {
        no: 30,
        name: 'sum list',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/sum-list-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/sum-list-walkthrough.mov'
      },
      {
        no: 31,
        name: 'linked list find',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/linked-list-find-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/linked-list-find-walkthrough.mov'
      },
      {
        no: 32,
        name: 'get node value',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/get-node-value-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/get-node-value-walkthrough.mov'
      },
      {
        no: 33,
        name: 'reverse list',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/reverse-list-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/reverse-list-walkthrough.mov'
      },
      {
        no: 34,
        name: 'zipper lists',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/zipper-lists-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/zipper-lists-walkthrough.mov'
      },
      {
        no: 35,
        name: 'merge lists',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/merge-lists-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/merge-lists-walkthrough.mov'
      },
      {
        no: 36,
        name: 'pep talk',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/pep-talk.mov'
      },
      {
        no: 37,
        name: 'is univalue list',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/is-univalue-list-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/is-univalue-list-walkthrough.mov'
      },
      {
        no: 38,
        name: 'longest streak',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/longest-streak-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/longest-streak-walkthrough.mov'
      },
      {
        no: 39,
        name: 'remove node',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/remove-node-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/remove-node-walkthrough.mov'
      },
      {
        no: 40,
        name: 'insert node',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/insert-node-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/insert-node-walkthrough.mov'
      },
      {
        no: 41,
        name: 'create linked list',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/create-linked-list-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/create-linked-list-walkthrough.mov'
      },
      {
        no: 42,
        name: 'add lists',
        approachVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/add-lists-approach.mov',
        walkthroughVideo: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/add-lists-walkthrough.mov'
      },
      {
        no: 43,
        name: 'linked list wrap up',
        video: 'https://algify-videos.s3.us-east-2.amazonaws.com/linked-list/linked-list-wrap-up.mov'
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
