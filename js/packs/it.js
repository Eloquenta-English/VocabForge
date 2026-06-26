/**
 * VocabForge — IT English jargon pack
 * 60 entries across 6 topics (programming, networking, cybersecurity, cloud, data, support)
 * CEFR A2-C1
 */
(function(){
  'use strict';
  var W = [];
  function add(id, word, level, pos, definition, example, ipa, topic) {
    W.push({id:id, word:word, level:level, pos:pos, definition:definition, example:example, ipa:ipa, topic:'it-'+topic});
  }

  // ── Programming ──
  add('it_001','code','A2','noun','instructions written in a programming language','She wrote the code in under an hour.','/kəʊd/','programming');
  add('it_002','bug','A2','noun','an error in a program that causes it to fail','We found a bug in the login screen.','/bʌɡ/','programming');
  add('it_003','debug','B1','verb','to find and remove errors in a program','It took two days to debug the issue.','/diːˈbʌɡ/','programming');
  add('it_004','compile','B2','verb','to translate source code into a runnable program','The compiler converts your code into machine instructions.','/kəmˈpaɪl/','programming');
  add('it_005','repository','B1','noun','a place where code and files are stored','Push your changes to the Git repository.','/rɪˈpɒzɪtri/','programming');
  add('it_006','function','B1','noun','a named block of code that performs a task','This function returns the user\'s age.','/ˈfʌŋkʃən/','programming');
  add('it_007','variable','B1','noun','a named place to store data in a program','Set the variable to zero before the loop.','/ˈvɛəriəbəl/','programming');
  add('it_008','framework','B2','noun','a set of tools and libraries for building apps','React is a popular JavaScript framework.','/ˈfreɪmwɜːk/','programming');
  add('it_009','syntax','B2','noun','the rules for how code must be written','A missing semicolon caused a syntax error.','/ˈsɪntæks/','programming');
  add('it_010','deploy','B2','verb','to make an application available for users','We deploy the new version every Friday.','/dɪˈplɔɪ/','programming');

  // ── Networking ──
  add('it_011','server','A2','noun','a computer that provides services to other computers','The web server returned a 404 error.','/ˈsɜːvər/','networking');
  add('it_012','router','B1','noun','a device that directs data between networks','Restart your router if the connection drops.','/ˈruːtər/','networking');
  add('it_013','firewall','B2','noun','a security system that blocks unwanted traffic','The firewall blocked the suspicious request.','/ˈfaɪərwɔːl/','networking');
  add('it_014','bandwidth','B2','noun','the amount of data that can be sent per second','Video calls use a lot of bandwidth.','/ˈbændwɪdθ/','networking');
  add('it_015','IP address','B1','noun','a unique number that identifies a device on a network','Each computer has its own IP address.','/ˌaɪ ˈpiː əˈdres/','networking');
  add('it_016','DNS','B2','noun','the system that translates domain names to IP addresses','DNS converts eloquenta.com into a server address.','/ˌdiː ɛn ˈɛs/','networking');
  add('it_017','latency','C1','noun','the delay before data starts to transfer','High latency makes online gaming difficult.','/ˈleɪtənsi/','networking');
  add('it_018','protocol','B2','noun','a set of rules for how data is sent','HTTP is the protocol used for websites.','/ˈprəʊtəkɒl/','networking');
  add('it_019','VPN','B2','noun','a private network that protects data over the internet','Use a VPN when working from a café.','/ˌviː piː ˈɛn/','networking');
  add('it_020','packet','B2','noun','a small unit of data sent over a network','Each packet is routed independently.','/ˈpækɪt/','networking');

  // ── Cybersecurity ──
  add('it_021','password','A1','noun','a secret word or phrase used to log in','Choose a strong password with at least 12 characters.','/ˈpɑːswɜːd/','cybersecurity');
  add('it_022','encryption','B2','noun','the process of encoding data so only authorized people can read it','Encryption protects your messages from eavesdroppers.','/ɪnˈkrɪpʃən/','cybersecurity');
  add('it_023','malware','B2','noun','software designed to damage or break computers','The antivirus detected malware on the laptop.','/ˈmælwɛər/','cybersecurity');
  add('it_024','phishing','B2','noun','a scam that tricks people into giving personal information','Beware of phishing emails that look official.','/ˈfɪʃɪŋ/','cybersecurity');
  add('it_025','hacker','B1','noun','a person who breaks into computers without permission','A hacker stole millions of customer records.','/ˈhækər/','cybersecurity');
  add('it_026','two-factor authentication','B2','noun','a security method requiring two proofs of identity','Two-factor authentication adds an extra layer of safety.','/ˌtuː ˈfæktər ɔːˌθɛntɪˈkeɪʃən/','cybersecurity');
  add('it_027','breach','B2','noun','an incident where data is accessed without permission','The company reported a data breach affecting 10,000 users.','/briːtʃ/','cybersecurity');
  add('it_028','vulnerability','C1','noun','a weakness that can be exploited by attackers','The team found a critical vulnerability in the software.','/ˌvʌlnərəˈbɪlɪti/','cybersecurity');
  add('it_029','ransomware','C1','noun','malware that locks data until a ransom is paid','Ransomware attacks have targeted hospitals worldwide.','/ˈrænsəmwɛər/','cybersecurity');
  add('it_030','penetration test','C1','noun','an authorized attempt to find security weaknesses','We hired a firm to run a penetration test.','/ˌpɛnɪˈtreɪʃən tɛst/','cybersecurity');

  // ── Cloud ──
  add('it_031','cloud','A2','noun','internet-based computing and storage services','We moved our files to the cloud.','/klaʊd/','cloud');
  add('it_032','serverless','C1','adj','a way to run code without managing servers','We built the API using a serverless architecture.','/ˈsɜːvərləs/','cloud');
  add('it_033','container','B2','noun','a lightweight package that holds software and its dependencies','Docker containers make apps easy to deploy.','/kənˈteɪnər/','cloud');
  add('it_034','SaaS','B2','noun','Software as a Service — software delivered over the internet','Slack is a popular SaaS tool for teams.','/sæs/','cloud');
  add('it_035','scalability','C1','noun','the ability of a system to handle growing demand','Cloud platforms offer automatic scalability.','/ˌskeɪləˈbɪlɪti/','cloud');
  add('it_036','AWS','B2','noun','Amazon Web Services, a major cloud platform','Our backend runs on AWS.','/ˌeɪ dʌbəljuː ˈɛs/','cloud');
  add('it_037','API','B1','noun','a set of rules that lets software talk to other software','The app uses the weather API to fetch forecasts.','/ˌeɪ piː ˈaɪ/','cloud');
  add('it_038','microservice','C1','noun','a small, independent service that does one task well','They split the monolith into microservices.','/ˈmaɪkrəʊˌsɜːvɪs/','cloud');
  add('it_039','load balancer','C1','noun','a device that spreads traffic across multiple servers','A load balancer keeps the site fast under heavy traffic.','/ləʊd ˈbælənsər/','cloud');
  add('it_040','DevOps','B2','noun','a culture that combines development and operations','DevOps teams ship code faster and more reliably.','/dɛvˈɒps/','cloud');

  // ── Data ──
  add('it_041','database','A2','noun','a structured collection of data stored electronically','The customer database has 50,000 records.','/ˈdeɪtəbeɪs/','data');
  add('it_042','query','B1','noun','a request for data from a database','She wrote a query to find all orders from last week.','/ˈkwɪəri/','data');
  add('it_043','analytics','B2','noun','the discovery of patterns in data','Web analytics show where visitors come from.','/ˌænəˈlɪtɪks/','data');
  add('it_044','big data','B2','noun','extremely large datasets used for analysis','Big data helps retailers predict trends.','/bɪɡ ˈdeɪtə/','data');
  add('it_045','machine learning','B2','noun','a type of AI that learns from data','Machine learning powers our recommendation engine.','/məˈʃiːn ˈlɜːnɪŋ/','data');
  add('it_046','dashboard','B1','noun','a screen that shows key data at a glance','The sales dashboard updates every hour.','/ˈdæʃbɔːd/','data');
  add('it_047','metric','B1','noun','a measurement used to track performance','Conversion rate is a key metric for online stores.','/ˈmɛtrɪk/','data');
  add('it_048','backup','A2','noun','a copy of data kept in case the original is lost','We run a full backup every night.','/ˈbækʌp/','data');
  add('it_049','ETL','C1','noun','Extract, Transform, Load — moving data between systems','The ETL pipeline syncs data every 15 minutes.','/ˌiː tiː ˈɛl/','data');
  add('it_050','data lake','C1','noun','a large store of raw data in its original format','The data lake holds logs, images, and sensor data.','/ˈdeɪtə leɪk/','data');

  // ── Support ──
  add('it_051','ticket','A2','noun','a record of a support request','Open a ticket if your laptop breaks.','/ˈtɪkɪt/','support');
  add('it_052','crash','A2','verb','to stop working suddenly','The app crashed when I opened the photo.','/kræʃ/','support');
  add('it_053','update','A1','verb','to install the latest version of software','Did you update the app this morning?','/ʌpˈdeɪt/','support');
  add('it_054','install','A2','verb','to put software onto a computer','Please install the new antivirus.','/ɪnˈstɔːl/','support');
  add('it_055','login','A2','noun','the act of signing into a system','Use your email to login.','/ˈlɒɡɪn/','support');
  add('it_056','password reset','A2','noun','the process of changing a forgotten password','Click here to request a password reset.','/ˈpɑːswɜːd ˌriːˈsɛt/','support');
  add('it_057','downtime','B2','noun','a period when a system is not working','The server had two hours of downtime last night.','/ˈdaʊntaɪm/','support');
  add('it_058','SLA','C1','noun','Service Level Agreement — a contract about uptime and support','Our SLA promises 99.9% uptime.','/ˌɛs ɛl ˈeɪ/','support');
  add('it_059','troubleshoot','B2','verb','to find and fix problems in a system','I need to troubleshoot why the printer is offline.','/ˈtrʌbəlʃuːt/','support');
  add('it_060','FAQ','B1','noun','Frequently Asked Questions — a list of common answers','Check the FAQ before contacting support.','/ˈfæk/','support');

  if (typeof window !== 'undefined') {
    if (!window.VOCAB_PACKS) window.VOCAB_PACKS = {};
    window.VOCAB_PACKS.it = W;
  }
})();
