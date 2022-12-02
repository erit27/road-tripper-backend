/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {
      id: '3d066e7f-443a-4963-a921-b7a5b7c5b729', 
      user_id: 'e7824ef5-2364-412d-9b30-908d58f8c796',
      post_id: '4c669a7f-be7f-4923-9237-e5cb37a26fbd',
      text: 'Wow that looks so cool! I wanna go one day. '
    },
    {
      id: '291ffae4-d18c-4ecd-bbca-a064e70fe407', 
      user_id: 'e7824ef5-2364-412d-9b30-908d58f8c796',
      post_id: 'f8df7a76-2f21-4fb7-a830-491e8e9b5eac',
      text: 'Yo this is latin I cant read it '
    },
    {
      id: '386a83e9-af61-434d-a79e-f3f73d52a7a4', 
      user_id: 'e818de47-7f2e-43d5-8b22-2e7840e8feb1',
      post_id: '4c669a7f-be7f-4923-9237-e5cb37a26fbd',
      text: 'was so great to meet you on the trail. add me on insta @stn11 :) '
    }
  ]);
};
