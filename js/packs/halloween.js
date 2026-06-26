/**
 * VocabForge — Halloween seasonal pack
 * 30 spooky/festive words themed for October
 */
(function(){
  'use strict';
  var W = [];
  function add(id, word, level, pos, definition, example, ipa, topic) {
    W.push({id:id, word:word, level:level, pos:pos, definition:definition, example:example, ipa:ipa, topic:'halloween-'+topic});
  }

  add('hw_001','ghost','A2','noun','the spirit of a dead person believed to appear','Some people say the house is haunted by a ghost.','/ɡəʊst/','spooky');
  add('hw_002','witch','A2','noun','a woman said to have magical powers','The witch cast a spell on the prince.','/wɪtʃ/','spooky');
  add('hw_003','pumpkin','A1','noun','a large orange vegetable used for jack-o-lanterns','We carved a scary face into the pumpkin.','/ˈpʌmpkɪn/','spooky');
  add('hw_004','haunted','B1','adj','visited by ghosts','The old castle is said to be haunted.','/ˈhɔːntɪd/','spooky');
  add('hw_005','skeleton','B1','noun','the framework of bones inside a body','The skeleton hung in the science classroom.','/ˈskɛlɪtən/','spooky');
  add('hw_006','vampire','B1','noun','a creature that drinks blood to survive','The vampire could not enter without an invitation.','/ˈvæmpaɪər/','spooky');
  add('hw_007','werewolf','C1','noun','a person who changes into a wolf','A full moon can turn a werewolf wild.','/ˈwɪəwʊlf/','spooky');
  add('hw_008','zombie','B1','noun','a dead body that walks around','The zombie movie was surprisingly funny.','/ˈzɒmbi/','spooky');
  add('hw_009','cauldron','C1','noun','a large pot used for cooking over a fire','The witch stirred her cauldron.','/ˈkɔːldrən/','spooky');
  add('hw_010','broomstick','B2','noun','a broom used for flying by witches','She hopped on her broomstick and flew away.','/ˈbruːmstɪk/','spooky');

  add('hw_011','costume','A2','noun','clothes worn to look like someone else','What costume are you wearing to the party?','/ˈkɒstjuːm/','party');
  add('hw_012','mask','A1','noun','a covering for the face','Everyone wore a mask to the ball.','/mɑːsk/','party');
  add('hw_013','trick-or-treat','A2','phrase','a Halloween custom where children ask for sweets','The kids went trick-or-treating in the neighborhood.','/ˌtrɪk ɔːr ˈtriːt/','party');
  add('hw_014','candy','A1','noun','sweet foods made with sugar','She filled the bowl with candy.','/ˈkændi/','party');
  add('hw_015','jack-o-lantern','C1','noun','a pumpkin with a face cut into it, lit from inside','We placed a jack-o-lantern on the porch.','/ˈdʒæk əʊ ˌlæntən/','party');
  add('hw_016','spooky','B1','adj','strange and frightening','That old house looks really spooky at night.','/ˈspuːki/','party');
  add('hw_017','eerie','C1','adj','strange and scary','An eerie silence filled the empty room.','/ˈɪəri/','party');
  add('hw_018','creepy','B1','adj','causing an unpleasant feeling of fear','The dark basement felt creepy.','/ˈkriːpi/','party');
  add('hw_019','haunt','B2','verb','to visit a place as a ghost','A lady in white is said to haunt the theater.','/hɔːnt/','party');
  add('hw_020','howl','B2','verb','to make a long, loud cry like a wolf','The wind howled through the trees all night.','/haʊl/','party');

  add('hw_021','candy corn','B2','noun','a small triangular candy popular at Halloween','I always eat too much candy corn.','/ˈkændi kɔːn/','treats');
  add('hw_022','caramel apple','B1','noun','an apple coated in sticky sweet syrup','We made caramel apples for the party.','/ˈkærəməl ˈæpəl/','treats');
  add('hw_023','cobweb','C1','noun','a spider\'s old web, dusty and abandoned','Cobwebs covered every corner of the attic.','/ˈkɒbwɛb/','treats');
  add('hw_024','graveyard','B1','noun','a place where dead people are buried','The graveyard was lit by a full moon.','/ˈɡreɪvjɑːd/','treats');
  add('hw_025','tombstone','B2','noun','a stone marking a grave','Her name was carved into the tombstone.','/ˈtuːmstəʊn/','treats');
  add('hw_026','bat','A2','noun','a small flying animal active at night','Bats flew out of the cave at dusk.','/bæt/','treats');
  add('hw_027','owl','A1','noun','a bird active at night','An owl hooted from the tree.','/aʊl/','treats');
  add('hw_028','black cat','A2','noun','a cat with black fur, considered unlucky by some','A black cat crossed our path.','/blæk kæt/','treats');
  add('hw_029','midnight','A2','noun','twelve o\'clock at night','The clock struck midnight.','/ˈmɪdnaɪt/','treats');
  add('hw_030','full moon','A2','noun','the moon when its whole face is visible','A full moon rose over the hills.','/fʊl muːn/','treats');

  if (typeof window !== 'undefined') {
    if (!window.VOCAB_PACKS) window.VOCAB_PACKS = {};
    window.VOCAB_PACKS.halloween = W;
  }
})();
