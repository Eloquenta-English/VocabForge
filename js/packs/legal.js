/**
 * VocabForge — Legal English jargon pack
 * 60 words across 6 topics (contract law, criminal law, corporate, litigation, IP, real estate)
 * CEFR levels B1-C1
 */
(function(){
  'use strict';

  var W = [];

  function add(id, word, level, pos, definition, example, ipa, topic) {
    W.push({id:id, word:word, level:level, pos:pos, definition:definition, example:example, ipa:ipa, topic:'legal-'+topic});
  }

  // ── Contract Law ──
  add('lg_001','contract','B1','noun','a legal agreement between two or more parties','Please read the contract carefully before signing.','/ˈkɒntrækt/','contract');
  add('lg_002','clause','B1','noun','a section in a legal document','The confidentiality clause prevents you from sharing the information.','/klɔːz/','contract');
  add('lg_003','breach','B2','noun','the act of breaking a law, rule, or agreement','The supplier committed a breach of contract.','/briːtʃ/','contract');
  add('lg_004','warranty','B2','noun','a written promise that a product will work as expected','The warranty covers manufacturing defects for two years.','/ˈwɒrənti/','contract');
  add('lg_005','indemnify','C1','verb','to promise to pay someone for loss or damage','The seller must indemnify the buyer against third-party claims.','/ɪnˈdemnɪfaɪ/','contract');
  add('lg_006','consideration','C1','noun','something of value exchanged in a contract','Payment is the consideration for the services rendered.','/kənˌsɪdəˈreɪʃən/','contract');
  add('lg_007','void','B2','adj','having no legal force; not valid','The contract is void if signed under duress.','/vɔɪd/','contract');
  add('lg_008','binding','B2','adj','legally enforceable','This agreement is binding on both parties.','/ˈbaɪndɪŋ/','contract');
  add('lg_009','amend','B2','verb','to make changes to a document, often formal','The board voted to amend the policy.','/əˈmend/','contract');
  add('lg_010','execute','B2','verb','to sign and complete a legal document','Both parties must execute the agreement by Friday.','/ˈɛksɪkjuːt/','contract');

  // ── Criminal Law ──
  add('lg_011','defendant','B1','noun','the person accused of a crime','The defendant pleaded not guilty.','/dɪˈfendənt/','criminal');
  add('lg_012','plaintiff','B1','noun','the person who starts a lawsuit','The plaintiff filed a claim for damages.','/ˈpleɪntɪf/','criminal');
  add('lg_013','verdict','B2','noun','the decision of a jury at the end of a trial','The jury reached a verdict after three hours.','/ˈvɜːdɪkt/','criminal');
  add('lg_014','testimony','B2','noun','a formal statement made by a witness','Her testimony helped convict the suspect.','/ˈtɛstɪməʊni/','criminal');
  add('lg_015','alibi','B2','noun','proof that someone was elsewhere when a crime happened','He had a solid alibi for the night of the robbery.','/ˈælɪbaɪ/','criminal');
  add('lg_016','bail','B2','noun','money paid to release someone from jail before trial','She was released on bail of £5,000.','/beɪl/','criminal');
  add('lg_017','misdemeanor','C1','noun','a crime less serious than a felony','Shoplifting is usually a misdemeanor.','/ˌmɪsdɪˈmiːnər/','criminal');
  add('lg_018','felony','C1','noun','a serious crime such as murder or kidnapping','He was charged with a felony.','/ˈfɛləni/','criminal');
  add('lg_019','acquittal','C1','noun','a judgment that someone is not guilty','The acquittal surprised everyone in the courtroom.','/əˈkwɪtəl/','criminal');
  add('lg_020','jurisdiction','C1','noun','the official power to make legal decisions','This case falls outside our jurisdiction.','/ˌdʒʊərɪsˈdɪkʃən/','criminal');

  // ── Corporate ──
  add('lg_021','merger','B2','noun','the combining of two companies into one','The merger created the largest bank in the country.','/ˈmɜːdʒər/','corporate');
  add('lg_022','shareholder','B2','noun','a person who owns shares in a company','Shareholders voted to approve the merger.','/ˈʃɛəhəʊldər/','corporate');
  add('lg_023','dividend','B2','noun','a share of company profits paid to shareholders','The company declared an annual dividend of 50 cents per share.','/ˈdɪvɪdend/','corporate');
  add('lg_024','liability','B2','noun','legal responsibility for something','The company accepted liability for the damage.','/ˌlaɪəˈbɪlɪti/','corporate');
  add('lg_025','compliance','B2','noun','the act of following rules or laws','All staff must complete compliance training.','/kəmˈplaɪəns/','corporate');
  add('lg_026','board','A2','noun','a group of directors who manage a company','The board meets every quarter.','/bɔːd/','corporate');
  add('lg_027','resolution','B2','noun','a formal decision made by a group','The board passed a resolution to expand overseas.','/ˌrɛzəˈluːʃən/','corporate');
  add('lg_028','stakeholder','B2','noun','a person with an interest in a business','We consulted all stakeholders before the decision.','/ˈsteɪkhəʊldər/','corporate');
  add('lg_029','proxy','C1','noun','a written permission to vote on behalf of someone else','Shareholders may vote by proxy.','/ˈprɒksi/','corporate');
  add('lg_030','fiduciary','C1','adj','relating to trust between parties','Directors have a fiduciary duty to shareholders.','/fɪˈdjuːʃəri/','corporate');

  // ── Litigation ──
  add('lg_031','lawsuit','B1','noun','a claim brought to court','She filed a lawsuit against her former employer.','/ˈlɔːsuːt/','litigation');
  add('lg_032','damages','B2','noun','money paid as compensation for loss or injury','The court awarded £50,000 in damages.','/ˈdæmɪdʒɪz/','litigation');
  add('lg_033','settlement','B2','noun','an agreement to end a dispute without trial','They reached a settlement out of court.','/ˈsɛtəlmənt/','litigation');
  add('lg_034','subpoena','C1','noun','an official order to appear in court','She received a subpoena to testify.','/səˈpiːnə/','litigation');
  add('lg_035','deposition','C1','noun','a sworn statement taken before trial','The witness gave a deposition last week.','/ˌdɛpəˈzɪʃən/','litigation');
  add('lg_036','discovery','B2','noun','the process of sharing information before trial','The lawyers exchanged documents during discovery.','/dɪˈskʌvəri/','litigation');
  add('lg_037','appeal','B2','noun','a request for a higher court to review a decision','They filed an appeal against the ruling.','/əˈpiːl/','litigation');
  add('lg_038','motion','B2','noun','a formal request to a judge','The defense filed a motion to dismiss.','/ˈməʊʃən/','litigation');
  add('lg_039','precedent','C1','noun','a court decision used as an example in later cases','The ruling set a new legal precedent.','/ˈprɛsɪdənt/','litigation');
  add('lg_040','injunction','C1','noun','a court order to stop doing something','The judge granted an injunction to block the sale.','/ɪnˈdʒʌŋkʃən/','litigation');

  // ── Intellectual Property ──
  add('lg_041','copyright','B2','noun','the legal right to publish or sell a creative work','She owns the copyright to the song.','/ˈkɒpiraɪt/','ip');
  add('lg_042','patent','B2','noun','an official right to be the only maker of a product','He applied for a patent on the new device.','/ˈpeɪtənt/','ip');
  add('lg_043','trademark','B2','noun','a symbol or word that identifies a brand','The company registered its trademark in 50 countries.','/ˈtreɪdmɑːk/','ip');
  add('lg_044','infringement','C1','noun','the act of breaking a law or agreement','They sued for copyright infringement.','/ɪnˈfrɪndʒmənt/','ip');
  add('lg_045','license','B1','noun','official permission to do something','The software is available under a free license.','/ˈlaɪsəns/','ip');
  add('lg_046','royalty','B2','noun','a payment to an author or inventor for each sale','The author earns royalties from every book sold.','/ˈrɔɪəlti/','ip');
  add('lg_047','proprietary','C1','adj','owned by a company and protected by law','The formula is proprietary information.','/prəˈpraɪətri/','ip');
  add('lg_048','domain','B2','noun','a website address; also an area of legal authority','They registered the domain name last year.','/dəˈmeɪn/','ip');
  add('lg_049','public domain','C1','noun','creative works not protected by copyright','Classic novels eventually enter the public domain.','/ˌpʌblɪk dəˈmeɪn/','ip');
  add('lg_050','trade secret','C1','noun','information kept private because it gives a business advantage','The recipe is a closely guarded trade secret.','/ˈtreɪd ˌsiːkrət/','ip');

  // ── Real Estate ──
  add('lg_051','lease','B1','noun','a contract to rent property','We signed a two-year lease on the apartment.','/liːs/','realestate');
  add('lg_052','tenant','B1','noun','a person who pays rent to use property','The tenant pays rent on the first of each month.','/ˈtɛnənt/','realestate');
  add('lg_053','landlord','B1','noun','a person who rents out property','The landlord agreed to fix the heating.','/ˈlændlɔːd/','realestate');
  add('lg_054','mortgage','B2','noun','a loan to buy property','They took out a mortgage to buy the house.','/ˈmɔːɡɪdʒ/','realestate');
  add('lg_055','deed','B2','noun','a legal document showing ownership of property','The deed was recorded at the county office.','/diːd/','realestate');
  add('lg_056','easement','C1','noun','a right to use someone else\'s land for a specific purpose','The utility company has an easement across the field.','/ˈiːzmənt/','realestate');
  add('lg_057','encumbrance','C1','noun','a claim or liability attached to property','The title search revealed an encumbrance on the land.','/ɪnˈkʌmbrəns/','realestate');
  add('lg_058','zoning','C1','noun','local laws about how land can be used','The zoning rules prohibit commercial use.','/ˈzəʊnɪŋ/','realestate');
  add('lg_059','eviction','B2','noun','the act of forcing a tenant to leave','They faced eviction for non-payment of rent.','/ɪˈvɪkʃən/','realestate');
  add('lg_060','title','B2','noun','the legal right to own property','The lawyer checked the title before the sale.','/ˈtaɪtəl/','realestate');

  if (typeof window !== 'undefined') {
    if (!window.VOCAB_PACKS) window.VOCAB_PACKS = {};
    window.VOCAB_PACKS.legal = W;
  }
})();
