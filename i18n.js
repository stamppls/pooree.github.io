/* Thai translations. English is read from the HTML itself,
   so only keys that differ in Thai need to be listed here. */
const I18N_TH = {
  'meta.title': 'ภูรี ลิ้มสกุล — Backend Developer',
  'resume': 'Resume-Pooree-Thai.pdf',

  'nav.home': 'หน้าแรก',
  'nav.process': 'วิธีการทำงาน',
  'nav.projects': 'ผลงาน',
  'nav.experience': 'ประสบการณ์',
  'nav.about': 'เกี่ยวกับฉัน',

  'contact.return': 'กลับ',
  'contact.title': 'ติดต่อ',
  'contact.email': 'อีเมลของคุณ',
  'contact.name': 'ชื่อ-นามสกุล',
  'contact.msg': 'รายละเอียดโปรเจกต์',
  'contact.send': 'ส่งข้อความ',
  'contact.note': 'ระบบจะเปิดแอปอีเมลพร้อมข้อความที่คุณกรอกไว้',
  'mail.subject': 'สอบถามโปรเจกต์จากคุณ',

  'hero.l1': 'สวัสดี, ฉันชื่อ <em>ภูรี</em> !',
  'hero.l2': 'ฉันออกแบบและพัฒนา',
  'hero.l3': 'ระบบ Backend.',
  'hero.badge1': 'ประสบการณ์ <b>7+</b> ปี',
  'hero.badge2': 'Node.js <b>5+</b> ปี',
  'hero.sub': 'Backend Developer • Full Stack Developer — พัฒนา REST API, Database และ Business Logic สำหรับระบบที่ใช้งานจริง และ Deploy ขึ้น Google Cloud ด้วย Docker',
  'hero.more': 'ดูเพิ่มเติม',

  'process.label': 'วิธีการทำงานของฉัน',
  'process.s1': 'เริ่มจากทำความเข้าใจ',
  'process.s2': 'ธุรกิจของคุณ <span class="hl">...</span>',
  'process.s3': 'จากนั้นออกแบบสถาปัตยกรรมระบบ',
  'process.s4': 'และ Flow ด้วย <span class="pill">Figma</span>',
  'process.s5': 'ข้อมูลที่ดีต้องเริ่มจาก',
  'process.s6': 'การออกแบบฐานข้อมูล',
  'process.s7': 'ต่อด้วยการพัฒนา REST API ที่สะอาดด้วย',
  'process.s9': 'สุดท้าย Deploy ด้วย Docker ขึ้น',
  'process.s11': '…และดูแลให้ระบบเร็ว เสถียร และ',
  'process.s12': 'พัฒนาต่อได้ในระยะยาว',

  'case.label': 'กรณีศึกษา — ฟรีแลนซ์',
  'case.title': 'ระบบจัดการข้อมูล<span>ขนส่ง (POS)</span>',
  'case.client': 'ลูกค้า',
  'case.me': 'ภูรี',
  'case.b1': 'เราทำธุรกิจขนส่ง และต้องการระบบ POS ที่ตรงกับการทำงานจริงของเรา ตั้งแต่หน้าบ้านจนถึงขึ้นใช้งานจริง',
  'case.b2': 'ได้เลย! เริ่มจากวิเคราะห์ความต้องการก่อน แล้วออกแบบโครงสร้างระบบร่วมกับทีมใน Figma จากนั้นพัฒนา Backend ด้วย NestJS &amp; Prisma',
  'case.b3': 'แล้วระบบจะรันอยู่ที่ไหน? 🤔',
  'case.b4': 'บน Google Cloud — Docker บน Cloud Run, Cloud SQL สำหรับข้อมูล และ Cloud Storage สำหรับไฟล์ ส่งมอบให้ใช้งานจริงตาม Scope ที่กำหนด',
  'case.c1t': 'วิเคราะห์',
  'case.c1': 'วิเคราะห์ปัญหาและความต้องการของลูกค้า ออกแบบโครงสร้างระบบทั้ง Frontend และ Backend ร่วมกับทีมด้วย Figma',
  'case.c2t': 'พัฒนา',
  'case.c2': 'พัฒนา Backend ด้วย NestJS และจัดการฐานข้อมูลด้วย Prisma',
  'case.c3t': 'ส่งมอบ',
  'case.c3': 'Deploy ระบบขึ้น Production บน Google Cloud Platform ด้วย Docker ใช้งาน Cloud Run, Cloud SQL, Cloud Storage และส่งมอบให้ลูกค้าใช้งานจริง',

  'projects.label': 'ผลงานที่คัดสรร',
  'projects.title': 'โปรเจกต์<span>เด่น</span>',
  'p1.t': 'ระบบ POS ศูนย์บริการรถยนต์',
  'p1.d': 'จัดการลูกค้า ข้อมูลรถยนต์ สินค้าและสต็อก ใบสั่งซื้อ ใบรับเข้า ใบสั่งงาน ระบบรายงาน (Excel, PDF) และ Dashboard',
  'p2.d': 'ระบบอนุมัติราคาหลายขั้น พร้อมแจ้งเตือนทาง Email และ Export ข้อมูลราคา',
  'p3.d': 'ระบบยืนยันตัวตนผ่าน SMS/Email OTP ดูวิดีโออบรม บันทึกผลสอบ คำนวณ Ranking และจัดการสิทธิ์การเข้าถึงข้อมูล',
  'p4.tag': 'ฟรีแลนซ์',
  'p4.t': 'ระบบจัดการข้อมูลขนส่ง (POS)',
  'p4.d': 'ดูแลครบวงจร: เก็บความต้องการ ออกแบบระบบใน Figma พัฒนา Backend ด้วย NestJS + Prisma และ Deploy ขึ้น Google Cloud',
  'p5.t': 'Web Application แบบ Microservice',
  'p5.d': 'วิเคราะห์และออกแบบระบบด้วย Microservice Architecture พัฒนาแบบ Full Stack ด้วย REST API บน Node.js, UI ด้วย Angular และฐานข้อมูล MongoDB',

  'exp.label': 'เส้นทางอาชีพ',
  'exp.title': 'ประสบการณ์<span>ทำงาน</span>',
  'exp.j1.period': '2564 — ปัจจุบัน',
  'exp.j1.list': `
    <li>ออกแบบ System Architecture และ Flow Diagram ด้วย Figma และพัฒนา REST API สำหรับเชื่อมต่อกับ Frontend แบบ End-to-End</li>
    <li>พัฒนา Backend สำหรับ Web Application ด้วย Node.js และ NestJS</li>
    <li>ออกแบบและพัฒนา Database และ Business Logic สำหรับระบบ</li>
    <li>Deploy ระบบขึ้น Google Cloud Run ด้วย Docker และจัดการไฟล์ผ่าน Cloud Storage</li>
    <li>ดูแลระบบหลังขึ้น Production แก้ไขปัญหาและจุดบกพร่อง บำรุงรักษาและปรับปรุงประสิทธิภาพซอฟต์แวร์</li>`,
  'exp.j2.period': '2562 — 2564',
  'exp.j2.list': `
    <li>วิเคราะห์และออกแบบระบบด้วยสถาปัตยกรรม Microservice Architecture</li>
    <li>พัฒนา Web Application แบบ Full Stack โดยออกแบบ REST API ด้วย Node.js และพัฒนา UI ด้วย Angular</li>
    <li>จัดการและออกแบบฐานข้อมูลแบบ NoSQL ด้วย MongoDB</li>`,
  'exp.j3.title': 'ฟรีแลนซ์ (Freelance)',
  'exp.j3.list': `
    <li>วิเคราะห์ปัญหาและความต้องการของลูกค้า ออกแบบโครงสร้างระบบทั้ง Frontend และ Backend ร่วมกับทีมด้วย Figma</li>
    <li>พัฒนา Backend ด้วย NestJS และจัดการฐานข้อมูลด้วย Prisma</li>
    <li>Deploy ระบบขึ้น Production บน Google Cloud Platform (Cloud Run, Cloud SQL, Cloud Storage) ด้วย Docker</li>`,

  'skills.label': 'เครื่องมือที่ใช้',
  'skills.title': 'ทักษะ<span>ความสามารถ</span>',
  'skills.lang': 'ภาษาโปรแกรม',
  'skills.db': 'ฐานข้อมูล',
  'skills.tools': 'เครื่องมือ',
  'skills.learning': 'กำลังศึกษา',

  'about.title': 'นักพัฒนาที่ใส่ใจ<span>ระบบหลังขึ้นใช้งานจริง</span>',
  'about.p1': 'มีประสบการณ์พัฒนาซอฟต์แวร์มากกว่า 7 ปี โดยเน้นการพัฒนา Backend ด้วย Node.js Ecosystem (Express.js, NestJS, TypeScript) มากกว่า 5 ปี',
  'about.p2': 'มีประสบการณ์ในการออกแบบและพัฒนา REST API, Database และ Business Logic สำหรับใช้งานจริง โดยให้ความสำคัญกับ Performance, Stability และ Maintainability เพื่อให้ระบบสามารถดูแลและพัฒนาต่อได้ในระยะยาว เข้าใจการทำงานของระบบแบบ End-to-End ตั้งแต่ Frontend, Backend จนถึงการ Deploy ระบบขึ้น Production บน Google Cloud Platform (Cloud Run, Cloud SQL) โดยใช้ Docker',
  'about.cta': 'คุยกันเลย',
  'about.edu': 'ประวัติการศึกษา',
  'edu1.deg': 'ปริญญาตรี สาขาวิทยาการคอมพิวเตอร์',
  'edu1.school': 'มหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ ศูนย์พระนครศรีอยุธยา หันตรา',
  'edu1.year': '2559 — 2562',
  'edu2.deg': 'ประกาศนียบัตรวิชาชีพ สาขาเทคโนโลยีสารสนเทศ',
  'edu2.school': 'วิทยาลัยเทคนิคพระนครศรีอยุธยา',
  'edu2.year': '2556 — 2559',
  'about.langs': 'ภาษา',
  'about.langList': '<span>🇹🇭 ไทย</span><span>🇬🇧 อังกฤษ</span>',
  'about.resume': 'ดาวน์โหลดเรซูเม่ (PDF)',

  'footer.name': 'ภูรี ลิ้มสกุล',
  'footer.copy': 'ภูรี ลิ้มสกุล',
};
