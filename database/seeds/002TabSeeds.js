
exports.seed = function (knex) {
  return knex('tabs').del()
    .then(() => {
      return knex('tabs').insert([
       {id: 1, url:'https://github.com/', title:'Build software better, together', description:'GitHub is where people build software. More than 40 million people use GitHub to discover, fork, and contribute to over 100 million projects.', image: 'https://github.githubassets.com/images/modules/open_graph/github-octocat.png', user_id: 1},
       {id: 2, url:'https://www.freecodecamp.org/', title:'Learn to code with free online courses, programming projects, and interview preparation for developer jobs.', description:'Through freeCodeCamp, I built a robust and highly functional web app for a nonprofit. This led me to getting a fantastic job.- Meta Hirschl', image: 'https://s3.amazonaws.com/freecodecamp/curriculum-diagram-full.jpg',  user_id: 1},
       {id: 3, url:'https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464', title:'Understanding map, filter and reduce in Javascript', description:'When working on Javascript projects you inevitably come across situations where you have to do some data manipulation...', image: 'https://hackernoon.com/hn-images/1*VX8zR_no7QbCf1DAHLTCRg.jpeg', user_id: 1},
       {id: 4, url:'https://undraw.co/', title:'unDraw | Colorful illustrations', description:'Open-source illustrations for every project you can imagine and create.', image: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/assets/share_new.jpg', user_id: 1},
       {id: 5, url:'https://www.elementsofai.com/', title:'A free online introduction to artificial intelligence for non-experts', description:"Learn more about Reaktor's and the University of Helsinki's AI course - no programming or complicated math required.", image:'https://elementsofai.s3.amazonaws.com/_1200x600_crop_center-center_none/EOAIhero.png?mtime=20190314095435', user_id: 1},
       {id: 6, url:'https://www.vogue.co.uk/', title:'British Vogue - Fashion, Trends, Latest News, Catwalk Photos & Designers', description:'The global magazine for fashion trends, the lastest news, catwalk photos and more.', image:'https://www.vogue.co.uk/images/brands/vogue/meta-site-image.jpg', user_id: 1},
       {id: 7, url:'https://twitter.com/MrRoryFlint', title:'Rory Flint (@MrRoryFlint) | Twitter', description:'The latest Tweets from Rory Flint (@MrRoryFlint). Recovering Cynic. Full time Optimist nowadays. Passionate about Zen, Taoism and the Stoicism. Team Lead at Lambda School (WEBEU3). London, England', image:'https://pbs.twimg.com/profile_images/1115691068614434816/KhK1BZC2_400x400.png', user_id: 2},
       {id: 8, url:'https://www.esquire.com/uk/', title:"Esquire - Men's Style, Culture, Design", description:"The smart man's guide to the best in men's fashion, restaurants, accessories and tech - from classic watches to suits, we've got it covered", image:'http://www.esquire.com/sites/esquire/assets/images/logos/ipso_regulated_hires.png', user_id: 2},
      ]);
    });
};
