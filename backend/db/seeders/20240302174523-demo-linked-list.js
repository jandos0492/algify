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
        no: 17,
        name: 'linked list welcome',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/linked-list-welcome.mp4'
      },
      {
        no: 18,
        name: 'linked list intro',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/linked-list-intro.mp4'
      },
      {
        no: 19,
        name: 'linked list warm up',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/linked-list-warm-up.mp4'
      },
      {
        no: 20,
        name: 'linked list values',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/linked-list-values-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/linked-list-values-walkthrough.mp4'
      },
      {
        no: 21,
        name: 'sum list',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/sum-list-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/sum-list-walkthrough.mp4'
      },
      {
        no: 22,
        name: 'linked list find',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/linked-list-find-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/linked-list-find-walkthrough.mp4'
      },
      {
        no: 23,
        name: 'get node value',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/get-node-value-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/get-node-value-walkthrough.mp4'
      },
      {
        no: 24,
        name: 'reverse list',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/reverse-list-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/reverse-list-walkthrough.mp4'
      },
      {
        no: 25,
        name: 'zipper lists',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/zipper-lists-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/zipper-lists-walkthrough.mp4'
      },
      {
        no: 26,
        name: 'merge lists',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/merge-lists-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/merge-lists-walkthrough.mp4'
      },
      {
        no: 27,
        name: 'pep talk',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/pep-talk.mp4'
      },
      {
        no: 28,
        name: 'is univalue list',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/is-univalue-list-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/is-univalue-list-walkthrough.mp4'
      },
      {
        no: 29,
        name: 'longest streak',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/longest-streak-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/longest-streak-walkthrough.mp4'
      },
      {
        no: 30,
        name: 'remove node',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/remove-node-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/remove-node-walkthrough.mp4'
      },
      {
        no: 31,
        name: 'insert node',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/insert-node-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/insert-node-walkthrough.mp4'
      },
      {
        no: 32,
        name: 'create linked list',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/create-linked-list-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/create-linked-list-walkthrough.mp4'
      },
      {
        no: 33,
        name: 'add lists',
        approachVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/add-lists-approach.mp4',
        walkthroughVideo: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/add-lists-walkthrough.mp4'
      },
      {
        no: 34,
        name: 'linked list wrap up',
        video: 'https://structy-videos.s3.us-east-2.amazonaws.com/linked-list/linked-list-wrap-up.mp4'
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
