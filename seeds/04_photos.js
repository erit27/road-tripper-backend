/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('photos').del()
  await knex('photos').insert([
    {
      id: 'edf26e14-fba8-46e9-a143-41230f9da5fa', 
      user_id: '56f59606-8ce9-4080-9f32-dbdce0b1975f',
      post_id: 'f8df7a76-2f21-4fb7-a830-491e8e9b5eac',
      title :'On the Inca Trail',
      location_name: 'Cuzco, Peru',
      latitude: '-13.159568319737911',
      longitude: '-72.53818227626853',
      filepath: 'https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/06/1.-Intrepid-Travel-peru_machupicchu.jpg'
    }
  ]);
};
