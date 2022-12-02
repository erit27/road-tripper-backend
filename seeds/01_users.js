/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 'a6787936-f471-472c-bea7-d29973a42a98', 
      username: 'eilidhritchie',
      first_name: 'Eilidh',
      hashed_pw: 'placeholder',
      avatar: 'https://i.pinimg.com/originals/74/c0/5e/74c05eea7dd9fd98ad662a06fefd8126.png',
      access: 'readwrite'
    },
    {
      id: '56f59606-8ce9-4080-9f32-dbdce0b1975f', 
      username: 'zmoto',
      first_name: 'Zahra',
      hashed_pw: 'placeholder',
      avatar: 'https://i.pinimg.com/originals/74/c0/5e/74c05eea7dd9fd98ad662a06fefd8126.png',
      access: 'readwrite'
    },
    {
      id: '4503c80c-ef23-4ce1-9bf7-6ea048f699a9', 
      username: 'scollins',
      first_name: 'Sarah',
      hashed_pw: 'placeholder',
      access: 'read'
    },
    {
      id: 'e7824ef5-2364-412d-9b30-908d58f8c796', 
      username: 'jsun',
      first_name: 'Jason',
      hashed_pw: 'placeholder',
      access: 'public'
    },
    {
      id: 'e818de47-7f2e-43d5-8b22-2e7840e8feb1', 
      username: 'stn11',
      first_name: 'Eleven',
      avatar: 'https://i.cbc.ca/1.5185052.1561146080!/cpImage/httpImage/seagull-feature-20110323.jpg',
      hashed_pw: 'placeholder',
      access: 'public'
    }
  ]);
};
