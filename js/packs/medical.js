/**
 * VocabForge — Medical English jargon pack
 * 60 entries across 6 topics (anatomy, conditions, treatment, pharmacy, hospital, emergency)
 * CEFR A2-C1
 */
(function(){
  'use strict';
  var W = [];
  function add(id, word, level, pos, definition, example, ipa, topic) {
    W.push({id:id, word:word, level:level, pos:pos, definition:definition, example:example, ipa:ipa, topic:'med-'+topic});
  }

  // ── Anatomy ──
  add('md_001','heart','A1','noun','the organ that pumps blood around the body','His heart beats 70 times per minute.','/hɑːt/','anatomy');
  add('md_002','lung','B1','noun','an organ in the chest used for breathing','Smoking damages your lungs.','/lʌŋ/','anatomy');
  add('md_003','liver','B1','noun','an organ that cleans the blood','The liver processes toxins from the body.','/ˈlɪvər/','anatomy');
  add('md_004','kidney','B2','noun','an organ that filters blood to make urine','He donated a kidney to his sister.','/ˈkɪdni/','anatomy');
  add('md_005','brain','A2','noun','the organ inside the head that controls thought','The brain controls every part of the body.','/breɪn/','anatomy');
  add('md_006','stomach','A2','noun','the organ where food is digested','My stomach hurts after eating too fast.','/ˈstʌmək/','anatomy');
  add('md_007','bone','A2','noun','a hard part inside the body that forms the skeleton','He broke a bone in his arm.','/bəʊn/','anatomy');
  add('md_008','muscle','B1','noun','body tissue that produces movement','Stretching prevents muscle pain.','/ˈmʌsəl/','anatomy');
  add('md_009','vein','B2','noun','a tube that carries blood back to the heart','The nurse drew blood from a vein in my arm.','/veɪn/','anatomy');
  add('md_010','artery','B2','noun','a tube that carries blood from the heart','Blocked arteries can cause heart attacks.','/ˈɑːtəri/','anatomy');

  // ── Conditions ──
  add('md_011','fever','B1','noun','a high body temperature, usually from illness','She has a fever and a sore throat.','/ˈfiːvər/','conditions');
  add('md_012','headache','A2','noun','a pain in the head','I have a terrible headache.','/ˈhɛdeɪk/','conditions');
  add('md_013','cough','A2','noun','an action of forcing air from the lungs with a sound','She has a dry cough that won\'t go away.','/kɒf/','conditions');
  add('md_014','flu','A2','noun','a common illness like a bad cold, with fever and aches','I caught the flu and had to stay home.','/fluː/','conditions');
  add('md_015','diabetes','B2','noun','a disease where the body cannot control sugar levels','Diabetes requires careful diet management.','/ˌdaɪəˈbiːtiːz/','conditions');
  add('md_016','asthma','B2','noun','a condition that makes breathing difficult','She uses an inhaler for her asthma.','/ˈæsmə/','conditions');
  add('md_017','allergy','B2','noun','a bad reaction by the body to something harmless','I have an allergy to peanuts.','/ˈælədʒi/','conditions');
  add('md_018','infection','B2','noun','a disease caused by bacteria or a virus','The wound became infected.','/ɪnˈfɛkʃən/','conditions');
  add('md_019','inflammation','C1','noun','swelling and pain in a part of the body','Inflammation causes the joint to hurt.','/ɪnfləˈmeɪʃən/','conditions');
  add('md_020','chronic','C1','adj','continuing for a long time, especially of a disease','He has chronic back pain.','/ˈkrɒnɪk/','conditions');

  // ── Treatment ──
  add('md_021','medicine','A2','noun','a substance taken to treat illness','Take this medicine three times a day.','/ˈmɛdsən/','treatment');
  add('md_022','pill','A2','noun','a small round piece of medicine','She swallowed the pill with water.','/pɪl/','treatment');
  add('md_023','antibiotic','B2','noun','a medicine that kills bacteria','Antibiotics do not work against viruses.','/ˌæntibaɪˈɒtɪk/','treatment');
  add('md_024','vaccine','B2','noun','a substance given to protect against a disease','The flu vaccine is free for over-65s.','/ˈvæksiːn/','treatment');
  add('md_025','prescription','B1','noun','a written order from a doctor for medicine','You need a prescription for this drug.','/prɪˈskrɪpʃən/','treatment');
  add('md_026','surgery','B2','noun','an operation done by a surgeon','He had surgery on his knee.','/ˈsɜːdʒəri/','treatment');
  add('md_027','therapy','B2','noun','treatment to heal a disorder, often by talking','She attends therapy once a week.','/ˈθɛrəpi/','treatment');
  add('md_028','physiotherapy','C1','noun','treatment using exercise and massage','Physiotherapy helped him walk again.','/ˌfɪziəʊˈθɛrəpi/','treatment');
  add('md_029','rehabilitation','C1','noun','a program to help someone recover after illness','Rehabilitation begins the day after surgery.','/ˌriːəˌbɪlɪˈteɪʃən/','treatment');
  add('md_030','diagnosis','B2','noun','the identification of an illness','The doctor gave a clear diagnosis.','/ˌdaɪəɡˈnəʊsɪs/','treatment');

  // ── Pharmacy ──
  add('md_031','pharmacy','B1','noun','a shop where medicines are sold','The pharmacy is open until 10pm.','/ˈfɑːməsi/','pharmacy');
  add('md_032','pharmacist','B1','noun','a person trained to prepare and sell medicines','Ask the pharmacist about side effects.','/ˈfɑːməsɪst/','pharmacy');
  add('md_033','dose','B1','noun','a measured amount of medicine','Take one dose after each meal.','/dəʊs/','pharmacy');
  add('md_034','side effect','B2','noun','an unwanted effect of a medicine','Drowsiness is a common side effect.','/ˈsaɪd ɪˌfɛkt/','pharmacy');
  add('md_035','over-the-counter','C1','adj','available without a prescription','You can buy paracetamol over the counter.','/ˌəʊvər ðə ˈkaʊntər/','pharmacy');
  add('md_036','painkiller','B1','noun','a medicine that reduces pain','She took a painkiller for her headache.','/ˈpeɪnˌkɪlər/','pharmacy');
  add('md_037','antibody','C1','noun','a protein produced by the body to fight disease','Antibodies protect against future infection.','/ˈæntɪˌbɒdi/','pharmacy');
  add('md_038','ointment','C1','noun','a creamy medicine applied to the skin','Apply the ointment twice a day.','/ˈɔɪntmənt/','pharmacy');
  add('md_039','syrup','B2','noun','a thick sweet liquid, often a medicine','Cough syrup can help you sleep.','/ˈsɪrəp/','pharmacy');
  add('md_040','placebo','C1','noun','a fake medicine used in tests','Half the patients received a placebo.','/pləˈsiːbəʊ/','pharmacy');

  // ── Hospital ──
  add('md_041','doctor','A1','noun','a person trained to treat sick people','You should see a doctor about that cough.','/ˈdɒktər/','hospital');
  add('md_042','nurse','A1','noun','a person trained to care for sick people','The nurse changed my bandages.','/nɜːs/','hospital');
  add('md_043','patient','A1','noun','a person receiving medical treatment','The patient is recovering well.','/ˈpeɪʃənt/','hospital');
  add('md_044','ward','B1','noun','a section of a hospital for particular patients','She works in the children\'s ward.','/wɔːd/','hospital');
  add('md_045','appointment','A2','noun','a scheduled time to see a doctor','I have an appointment at 3pm.','/əˈpɔɪntmənt/','hospital');
  add('md_046','waiting room','A2','noun','a room where patients wait','The waiting room was full.','/ˈweɪtɪŋ ruːm/','hospital');
  add('md_047','surgeon','B2','noun','a doctor who performs operations','The surgeon completed the operation in two hours.','/ˈsɜːdʒən/','hospital');
  add('md_048','anesthesia','C1','noun','medicine that prevents pain during surgery','General anesthesia makes you sleep through the operation.','/ˌænəsˈθiːziə/','hospital');
  add('md_049','discharge','B2','verb','to officially allow someone to leave hospital','He was discharged after three days.','/dɪsˈtʃɑːdʒ/','hospital');
  add('md_050','intake','B2','noun','the process of being admitted to hospital','Intake forms ask about your medical history.','/ˈɪnteɪk/','hospital');

  // ── Emergency ──
  add('md_051','emergency','A2','noun','a serious unexpected situation needing fast action','Call 999 in an emergency.','/ɪˈmɜːdʒənsi/','emergency');
  add('md_052','ambulance','A2','noun','a vehicle that takes sick people to hospital','The ambulance arrived in five minutes.','/ˈæmbjələns/','emergency');
  add('md_053','paramedic','B2','noun','a person trained to give emergency medical care','The paramedic stabilized her on the way to hospital.','/ˌpærəˈmɛdɪk/','emergency');
  add('md_054','first aid','A2','noun','basic medical help given before a doctor arrives','Everyone should learn first aid.','/fɜːst eɪd/','emergency');
  add('md_055','CPR','C1','noun','Cardiopulmonary Resuscitation — pressing on the chest to restart the heart','She saved his life with CPR.','/ˌsiː piː ˈɑːr/','emergency');
  add('md_056','defibrillator','C1','noun','a machine that restarts the heart with electricity','The airport has a defibrillator on every wall.','/dɪˈfɪbrɪleɪtər/','emergency');
  add('md_057','triage','C1','noun','the process of deciding which patients to treat first','Triage ensures the sickest get help first.','/ˈtriːɑːʒ/','emergency');
  add('md_058','wound','B1','noun','an injury, especially a cut','Clean the wound with soap and water.','/wuːnd/','emergency');
  add('md_059','fracture','B2','noun','a broken bone','He suffered a fracture in his wrist.','/ˈfræktʃər/','emergency');
  add('md_060','unconscious','B2','adj','not awake and not aware of things','She was unconscious for several minutes after the fall.','/ʌnˈkɒnʃəs/','emergency');

  if (typeof window !== 'undefined') {
    if (!window.VOCAB_PACKS) window.VOCAB_PACKS = {};
    window.VOCAB_PACKS.medical = W;
  }
})();
