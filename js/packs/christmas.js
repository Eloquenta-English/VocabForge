/**
 * VocabForge — Christmas seasonal pack
 * 30 festive words themed for December
 */
(function(){
  'use strict';
  var W = [];
  function add(id, word, level, pos, definition, example, ipa, topic) {
    W.push({id:id, word:word, level:level, pos:pos, definition:definition, example:example, ipa:ipa, topic:'xmas-'+topic});
  }

  add('xm_001','Christmas','A1','noun','an annual Christian holiday on December 25','We spend Christmas with my family.','/ˈkrɪsməs/','holiday');
  add('xm_002','Santa','A1','noun','the imaginary old man who brings presents','Santa comes down the chimney on Christmas Eve.','/ˈsæntə/','holiday');
  add('xm_003','reindeer','B1','noun','a deer that pulls Santa\'s sleigh','Rudolph is the most famous reindeer.','/ˈreɪndɪər/','holiday');
  add('xm_004','sleigh','B2','noun','a vehicle pulled by animals over snow','Santa\'s sleigh flew through the sky.','/sleɪ/','holiday');
  add('xm_005','chimney','A2','noun','a pipe that takes smoke from a fireplace','Santa climbed down the chimney.','/ˈtʃɪmni/','holiday');
  add('xm_006','present','A1','noun','a gift given to someone','I got lots of presents this year.','/ˈprɛzənt/','holiday');
  add('xm_007','gift','A1','noun','something given freely to someone','Wrap the gift in red paper.','/ɡɪft/','holiday');
  add('xm_008','stocking','B1','noun','a large sock hung up for Santa to fill with gifts','Her stocking was full of chocolate coins.','/ˈstɒkɪŋ/','holiday');
  add('xm_009','elf','A1','noun','a small mythical helper of Santa','Santa\'s elves make toys all year.','/ɛlf/','holiday');
  add('xm_010','North Pole','B1','noun','the northernmost place on Earth, where Santa lives','Letters to Santa go to the North Pole.','/nɔːθ pəʊl/','holiday');

  add('xm_011','tree','A1','noun','an evergreen decorated at Christmas','We decorated the tree with lights.','/triː/','decor');
  add('xm_012','lights','A1','noun','small bulbs used as decoration','The house was covered in fairy lights.','/laɪts/','decor');
  add('xm_013','wreath','C1','noun','a circular decoration hung on a door','She hung a holly wreath on the front door.','/riːθ/','decor');
  add('xm_014','ornament','B2','noun','a decoration hung on a Christmas tree','Each ornament on the tree has a story.','/ˈɔːnəmənt/','decor');
  add('xm_015','star','A1','noun','a pointed shape in the sky','A bright star shone above the stable.','/stɑːr/','decor');
  add('xm_016','angel','A1','noun','a heavenly being','An angel stood on top of the tree.','/ˈeɪndʒəl/','decor');
  add('xm_017','tinsel','B2','noun','thin strips of shiny material used as decoration','Silver tinsel hung from every branch.','/ˈtɪnsəl/','decor');
  add('xm_018','mistletoe','C1','noun','a plant hung above a door; people kiss under it','They kissed under the mistletoe.','/ˈmɪsəltəʊ/','decor');
  add('xm_019','holly','B2','noun','a plant with red berries used as decoration','Holly berries are bright red in winter.','/ˈhɒli/','decor');
  add('xm_020','ribbon','B1','noun','a narrow strip of cloth used for decoration','She tied a red ribbon around the gift.','/ˈrɪbən/','decor');

  add('xm_021','snow','A1','noun','soft white ice that falls in winter','The children played in the snow.','/snəʊ/','weather');
  add('xm_022','snowflake','B1','noun','a single piece of snow','Every snowflake is unique.','/ˈsnəʊfleɪk/','weather');
  add('xm_023','ice','A1','noun','water that has frozen solid','The lake was covered in ice.','/aɪs/','weather');
  add('xm_024','frost','B1','noun','a thin layer of ice on cold surfaces','Frost covered the windows in the morning.','/frɒst/','weather');
  add('xm_025','fireplace','A2','noun','a place in a room where you can have a fire','We hung our stockings by the fireplace.','/ˈfaɪəpleɪs/','weather');
  add('xm_026','cocoa','A2','noun','a hot drink made with chocolate','Hot cocoa warms you up on a cold night.','/ˈkəʊkəʊ/','food');
  add('xm_027','gingerbread','B2','noun','a sweet cake flavored with ginger','We made gingerbread men cookies.','/ˈdʒɪndʒəbrɛd/','food');
  add('xm_028','roast turkey','B1','noun','a whole turkey cooked in an oven','Roast turkey is the centerpiece of our meal.','/rəʊst ˈtɜːki/','food');
  add('xm_029','carol','B2','noun','a religious song sung at Christmas','We sang carols around the tree.','/ˈkærəl/','food');
  add('xm_030','midnight mass','C1','noun','a church service held at midnight on Christmas Eve','We went to midnight mass together.','/ˌmɪdnaɪt ˈmæs/','food');

  if (typeof window !== 'undefined') {
    if (!window.VOCAB_PACKS) window.VOCAB_PACKS = {};
    window.VOCAB_PACKS.christmas = W;
  }
})();
