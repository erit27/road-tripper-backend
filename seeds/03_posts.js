/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    {
      id: 'f8df7a76-2f21-4fb7-a830-491e8e9b5eac', 
      user_id: 'a6787936-f471-472c-bea7-d29973a42a98',
      title: 'Adventure in the Raindforest',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis ullamcorper erat, non congue ante cursus quis. Proin finibus vel diam eget dictum. Maecenas id euismod dolor, id tempus mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean porttitor dictum ligula hendrerit tristique. Cras vitae urna quis ligula lacinia lobortis non nec massa. Quisque ut quam nisl. Ut gravida nec risus sit amet pretium. Vestibulum posuere vehicula mauris sed venenatis. Donec vitae quam nunc. Donec sit amet orci sit amet ante commodo molestie sit amet nec sapien. Praesent ut facilisis ex, vel varius massa. Etiam eu ligula ac nibh interdum laoreet eget sit amet justo. /n  Nulla velit sapien, porta vitae lacinia sed, molestie sit amet arcu. Nullam eleifend fermentum ipsum quis efficitur. Nunc diam odio, euismod in sapien ut, posuere accumsan dolor. Aenean mattis, nulla et tristique porta, eros tortor suscipit turpis, quis malesuada ipsum risus sit amet libero. Pellentesque vitae eleifend enim, in ultrices risus. Nam condimentum arcu facilisis nulla dictum scelerisque. Vivamus facilisis lectus nunc, vel faucibus nunc dapibus in. Integer egestas leo sed pretium volutpat. Nunc congue mi in rhoncus mollis. Quisque aliquet, elit sed consectetur tincidunt, eros quam finibus magna, in bibendum massa nunc eget nisi. Duis id dapibus arcu. Integer pretium non nisi vitae euismod. Nulla luctus nibh dignissim lacus dictum vestibulum. Quisque gravida suscipit lectus, eget iaculis dui rutrum ut. /n Donec ut ipsum tellus. Fusce mollis est id tortor ultricies, a suscipit nunc convallis. Maecenas vulputate faucibus nulla sit amet varius. Suspendisse varius tortor ac leo accumsan, a vestibulum mi porta. Suspendisse finibus nisi sit amet feugiat auctor. In hac habitasse platea dictumst. Phasellus dui lacus, convallis eget nulla non, ultricies auctor orci. Fusce nec nibh condimentum, iaculis ante vel, auctor sapien. Ut vitae lorem et enim rutrum hendrerit. Fusce lectus tortor, porta in nulla vitae, gravida accumsan erat. Donec id ipsum ullamcorper, efficitur leo at, fringilla nunc.',
      private_content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    },
    {
      id: '4c669a7f-be7f-4923-9237-e5cb37a26fbd', 
      user_id: '56f59606-8ce9-4080-9f32-dbdce0b1975f',
      title: 'First Day in Peru!',
      content: 'Public content post practise',
      private_content: 'Private content only!'
    }
  ]);
};
